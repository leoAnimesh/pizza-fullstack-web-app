import dbConnect from "../../db/dbConnect";
import pizzas from "../../models/pizzas";

dbConnect();

export default async function menu(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const getPizza = await pizzas.find();
        res.status(200).json({ sucess: true, pizzas: getPizza });
      } catch (err) {
        res.status(400).json({ sucess: false });
      }
      break;
    case "POST":
      try {
        await pizzas.create(req.body);
        res.status(200).json({ sucess: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ sucess: false });
  }

  res.status(200).json({ name: "John Doe" });
}
