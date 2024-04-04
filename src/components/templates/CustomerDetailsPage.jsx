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
    <div>
      <div>
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
            {date}
          </p>
          <p>
            <span>Created At: </span>
            {createdAt}
          </p>
          <p>
            <span>Updated At: </span>
            {updatedAt}
          </p>
        </div>
      </div>

      <div>
        <h2>Customer Products</h2>
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
