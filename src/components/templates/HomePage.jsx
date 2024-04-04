import toast from "react-hot-toast";
import Card from "../modules/Card";
import styles from "@/styles/HomePage.module.css";

const HomePage = ({ customers, error, isLoading }) => {
  if (error) toast.error("Connection to server failed");

  if (isLoading) return <h2 className={styles.loading}>Loading...</h2>;

  return (
    <ul className={styles.list}>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </ul>
  );
};

export default HomePage;
