import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  if (req.method === "POST") {
    await connectDB(res);

    const data = req.body.data;

    if (!data.firstName || !data.lastName || !data.email) {
      res.status(422).json({
        code: 422,
        status: "failure",
        message: "Please fill all the required fields",
      });
    }

    try {
      const customer = await Customer.create(data);

      res.status(201).json({
        code: 201,
        status: "success",
        message: "Customer added successfully",
        data: customer,
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
