import { useState } from "react";
import FormInput from "../modules/FormInput";
import INPUTS from "@/constants/inputs";
import Link from "next/link";
import styles from "@/styles/AddCustomerPage.module.css";
import api from "@/configs/api";
import { useRouter } from "next/router";
import ProductsInputs from "../modules/ProductsInputs";
import moment from "moment";
import toast from "react-hot-toast";

const CustomerEditPage = ({ customer }) => {
  const [form, setForm] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone || "",
    postalCode: customer.postalCode || "",
    address: customer.address || "",
    date:
      moment(customer.date).format("YYYY-MM-DD") ||
      moment(Date.now()).format("YYYY-MM-DD"),
    products: customer.products || [],
    updatedAt: moment(Date.now()).format("YYYY-MM-DD"),
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const editHandler = async () => {
    try {
      setIsLoading(true);
      const res = await api.patch(`/api/customer/edit/${customer._id}`, {
        data: form,
      });

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
      <h2>Edit Customer</h2>
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
        <button type="button" onClick={editHandler} disabled={isLoading}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CustomerEditPage;
