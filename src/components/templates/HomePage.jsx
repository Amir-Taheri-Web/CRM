import Card from "../modules/Card";
import styles from "@/styles/HomePage.module.css";

const HomePage = ({ customers }) => {
  return (
    <ul className={styles.list}>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </ul>
  );
};

export default HomePage;
