import styles from "@/styles/ProductsInputs.module.css";
import React from "react";

const ProductsInputs = ({ form, setForm }) => {
  const { products } = form;

  const changeHandler = (e, i) => {
    const { name, value } = e.target;

    const newProducts = products.map((product, index) => {
      if (index === i) product[name] = value;

      return product;
    });

    setForm((form) => ({ ...form, products: newProducts }));
  };

  const addProductHandler = () => {
    setForm((form) => ({
      ...form,
      products: [...products, { productName: "", price: "", qty: "" }],
    }));
  };

  const removeHandler = (i) => {
    const newProducts = products.filter((product, index) => index !== i);

    setForm((form) => ({ ...form, products: newProducts }));
  };

  return (
    <div className={styles.container}>
      <h3>Products</h3>
      <div className={styles.inputs}>
        {products.map((product, index) => (
          <div key={index} className={styles.inputsWrapper}>
            <div>
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                value={product.productName}
                name="productName"
                onChange={(e) => changeHandler(e, index)}
                id="productName"
              />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                value={product.price}
                name="price"
                onChange={(e) => changeHandler(e, index)}
                id="price"
              />
            </div>

            <div>
              <label htmlFor="qty">Quantity</label>
              <input
                type="number"
                value={product.qty}
                name="qty"
                onChange={(e) => changeHandler(e, index)}
                id="qty"
              />
            </div>

            <button
              type="button"
              className={styles.removeButton}
              onClick={() => removeHandler(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          className={styles.addProductButton}
          onClick={addProductHandler}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductsInputs;
