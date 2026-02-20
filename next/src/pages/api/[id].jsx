import { pullover } from "../../data/article.jsx";

export default function handler({ query: { id } }, res) {
  const productId = parseInt(id);
  const output = pullover.filter((pullover) => pullover.id === productId);
  if (output.length > 0) {
    res.status(200).json(output);
  } else {
    res.status(404).json({ text: "ID nicht vorhanden" });
  }
}
