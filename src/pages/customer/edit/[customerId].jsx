import CustomerEditPage from "@/components/templates/CustomerEditPage";
import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const CustomerEdit = ({ customer }) => {
  return <CustomerEditPage customer={customer} />;
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

export default CustomerEdit;
export { getServerSideProps };
