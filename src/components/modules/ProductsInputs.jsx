const ProductsInputs = ({ form, setForm }) => {
  const { products } = form;

  const changeHandler = () => {};

  return (
    <div>
      <h3>Products</h3>
      <div>
        <div>
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            value={products.productName}
            name="productName"
            onChange={changeHandler}
            id="productName"
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            value={products.price}
            name="price"
            onChange={changeHandler}
            id="price"
          />
        </div>

        <div>
          <label htmlFor="qty">Quantity</label>
          <input
            type="text"
            value={products.qty}
            name="qty"
            onChange={changeHandler}
            id="qty"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsInputs;
