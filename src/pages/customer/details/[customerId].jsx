import CustomerDetailsPage from "@/components/templates/CustomerDetailsPage";
import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const CustomerDetails = ({ customer }) => {
  return <CustomerDetailsPage customer={customer} />;
};

const getServerSideProps = async (context) => {
  const { customerId } = context.query;

  try {
    await connectDB();

    const customer = await Customer.findById(customerId);

    return {
      props: { customer: JSON.parse(JSON.stringify(customer)) },
    };
  } catch (error) {
    console.log(error);
  }
};

export default CustomerDetails;
export { getServerSideProps };
