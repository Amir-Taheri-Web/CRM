import Card from "../modules/Card";

const HomePage = ({ customers }) => {
  return (
    <ul>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </ul>
  );
};

export default HomePage;
