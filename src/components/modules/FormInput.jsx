const FormInput = ({ type, value, setForm, name, label }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={changeHandler} />
    </>
  );
};

export default FormInput;
