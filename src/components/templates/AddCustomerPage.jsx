import { useState } from "react";
import FormInput from "../modules/FormInput";
import INPUTS from "@/constants/inputs";
import Link from "next/link";
import styles from "@/styles/AddCustomerPage.module.css";

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
        <button type="button">Add</button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
