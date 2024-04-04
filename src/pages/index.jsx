import HomePage from "@/components/templates/HomePage";
import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const Home = ({ customers }) => {
  return <HomePage customers={customers} />;
};

const getServerSideProps = async () => {
  try {
    await connectDB();
    const customers = await Customer.find();

    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Home;
export { getServerSideProps };
