import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
export default function Socials() {
  return (
    <div className="flex space-x-4">
      <AiFillFacebook size={30} className="hover:scale-110 duration-200" />
      <AiFillInstagram size={30} className="hover:scale-110 duration-200" />
      <AiFillMail size={30} className="hover:scale-110 duration-200" />
    </div>
  );
}
