//next js post api
import { translate } from "translate-json-file";

const routes = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { inputJson, language } = req.body;
    res.status(200).json(await translate(inputJson, language, false));
  }
};

export default routes;
