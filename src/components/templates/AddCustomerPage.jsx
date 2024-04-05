import { useState } from "react";
import FormInput from "../modules/FormInput";
import INPUTS from "@/constants/inputs";
import Link from "next/link";
import styles from "@/styles/AddCustomerPage.module.css";
import api from "@/configs/api";
import { useRouter } from "next/router";
import ProductsInputs from "../modules/ProductsInputs";
import toast from "react-hot-toast";
import moment from "moment";

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    address: "",
    date: moment(Date.now()).format("YYYY-MM-DD"),
    products: [],
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const addHandler = async () => {
    try {
      setIsLoading(true);
      const res = await api.post("/api/add-customer", { data: form });
      toast.success(res.message);
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Customer</h2>
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

      <ProductsInputs form={form} setForm={setForm} />

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
