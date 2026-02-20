import { pullover } from "../../data/article.jsx";

export default function handler(req, res) {
  res.status(200).json({ pullover });
}
