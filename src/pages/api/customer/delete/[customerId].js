import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    await connectDB(res);

    const id = req.query.customerId;

    try {
      await Customer.findByIdAndDelete(id);

      res
        .status(200)
        .json({
          code: 200,
          status: "success",
          message: "Customer deleted successfully",
        });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        code: 500,
        status: "failure",
        message: "Connection to server failed",
      });
    }
  }
};

export default handler;
