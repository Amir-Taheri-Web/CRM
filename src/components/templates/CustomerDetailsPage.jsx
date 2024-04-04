import styles from "@/styles/CustomerDetailsPage.module.css";

const CustomerDetailsPage = ({ customer }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    postalCode,
    products,
    date,
    createdAt,
    updatedAt,
  } = customer;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Customer Information</h2>
        <div>
          <p>
            <span>Name: </span>
            {firstName} {lastName}
          </p>
          <p>
            <span>Email: </span>
            {email}
          </p>
          <p>
            <span>Phone: </span>
            {phone}
          </p>
          <p>
            <span>Address: </span>
            {address}
          </p>
          <p>
            <span>Postal Code: </span>
            {postalCode}
          </p>
          <p>
            <span>Date: </span>
            {new Date(date).toLocaleDateString()}
          </p>
          <p>
            <span>Created At: </span>
            {new Date(createdAt).toLocaleDateString()}
          </p>
          <p>
            <span>Updated At: </span>
            {new Date(updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className={styles.products}>
        <h2>Customer Products</h2>
        {!products.length && <p>Empty</p>}
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <p>
                <span>Product Name</span>
                {product.productName}
              </p>
              <p>
                <span>Price: </span>
                {product.price}
              </p>
              <p>
                <span>Quantity: </span>
                {product.qty}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
