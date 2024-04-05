import styles from "@/styles/FormInput.module.css";

const FormInput = ({ type, value, setForm, name, label }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name}>
        {name === "firstName" || name === "lastName" || name === "email"
          ? `${label}(required)`
          : label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        id={name}
      />
    </div>
  );
};

export default FormInput;
