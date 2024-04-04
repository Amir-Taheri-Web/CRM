import INPUTS from "@/constants/inputs";
import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  if (req.method === "PATCH") {
    await connectDB(res);

    const id = req.query.customerId;
    const data = req.body.data;

    try {
      const customer = await Customer.findById(id);
      for (const item of INPUTS) {
        customer[item] = data[item];
      }
      customer.save();

      res.status(200).json({
        code: 200,
        status: "success",
        message: "Customer edited successfully",
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
