import { useState } from "react";

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    date: "",
    products: [],
    address: "",
  });

  return <div></div>;
};

export default AddCustomerPage;
