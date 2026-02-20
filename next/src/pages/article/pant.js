import Image from "next/image";
import pant1 from "../../../public/pictures/1.jpg";
export default function Pant() {
  return (
    <div className="card">
      <h1>Hose</h1>
      <Image
        src={pant1}
        placeholder="blur"
        alt="pant"
        width={600}
        height={600}
      />
    </div>
  );
}
