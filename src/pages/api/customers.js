import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  if (req.method === "GET") {
    await connectDB(res);

    try {
      const customers = await Customer.find();

      res.status(200).json({ code: 200, status: "success", data: customers });
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
