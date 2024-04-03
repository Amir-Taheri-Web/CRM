import { useState } from "react";
import FormInput from "../modules/FormInput";
import INPUTS from "@/constants/inputs";
import Link from "next/link";

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
    <div>
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

      <Link href="/">Cancel</Link>
      <button type="button">Add</button>
    </div>
  );
};

export default AddCustomerPage;
