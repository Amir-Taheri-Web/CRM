import Link from "next/link";
import api from "@/configs/api";
import styles from "@/styles/Card.module.css";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Card = ({ customer }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    try {
      const res = await api.delete(`/api/customer/delete/${customer._id}`);
      router.reload();
      
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <li className={styles.listItem}>
      <div>
        <p>
          {customer.firstName} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>

      <div>
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
        <Link href={`/customer/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/details/${customer._id}`}>Details</Link>
      </div>
    </li>
  );
};

export default Card;
