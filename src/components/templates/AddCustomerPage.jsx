import { useState } from "react";
import FormInput from "../modules/FormInput";
import INPUTS from "@/constants/inputs";
import Link from "next/link";
import styles from "@/styles/AddCustomerPage.module.css";
import api from "@/configs/api";
import { useRouter } from "next/router";

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    address: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const addHandler = async () => {
    try {
      setIsLoading(true);
      const res = await api.post("/api/add-customer", { data: form });
      console.log(res);

      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        {INPUTS.map(
          (item, index) =>
            item !== "products" && (
              <FormInput
                key={index}
                type={item === "date" ? "date" : "text"}
                value={form[item]}
                setForm={setForm}
                name={item}
                label={item}
              />
            )
        )}
      </div>

      <div className={styles.buttons}>
        <Link href="/">Cancel</Link>
        <button type="button" onClick={addHandler} disabled={isLoading}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
