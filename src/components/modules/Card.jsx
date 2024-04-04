import Link from "next/link";

const Card = ({ customer }) => {
  console.log(customer);
  return (
    <li>
      <div>
        <p>
          {customer.firstName} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>

      <div>
        <button type="button">Delete</button>
        <Link href="#">Edit</Link>
        <Link href="#">Details</Link>
      </div>
    </li>
  );
};

export default Card;
