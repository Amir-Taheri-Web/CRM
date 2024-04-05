import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";
import moment from "moment";

const EMAIL_VALIDATION = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const handler = async (req, res) => {
  if (req.method === "POST") {
    await connectDB(res);

    const data = req.body.data;

    if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim()) {
      res.status(422).json({
        code: 422,
        status: "failure",
        message: "Please fill all the required fields",
      });
      return;
    }

    if (data.firstName.length < 2 || data.lastName.lastName < 2) {
      res.status(422).json({
        code: 422,
        status: "failure",
        message: "First Name and Last Name must be at least 2 characters",
      });
      return;
    }

    if (data.phone.length !== 11 && data.phone.length !== 0) {
      res.status(422).json({
        code: 422,
        status: "failure",
        message:
          "Phone number must be 11 characters and start with 0 like 09198882233",
      });
      return;
    }

    if (!EMAIL_VALIDATION.test(data.email)) {
      res.status(422).json({
        code: 422,
        status: "failure",
        message: "Email is not valid",
      });
      return;
    }

    const finalProducts = data.products.filter((product) =>
      product.productName.trim()
    );

    try {
      const customer = await Customer.create({
        ...data,
        products: finalProducts,
        date: !data.date || moment(Date.now()).format("YYY-MM-DD"),
      });

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
