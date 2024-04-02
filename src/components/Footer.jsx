import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IN } from "country-flag-icons/react/3x2";

const Footer = () => {
  return (
    <div className=" border  bg-blue-500 text-white">
      <div className=" w-[70%] py-10  px-6 items-center mx-auto flex  gap-24">
        <h1 className=" text-3xl  tracking-tighter">Healthy Mind</h1>
        <div className=" flex items-center gap-6 ">
          <FaFacebook size={25} />
          <FaTwitter size={25} />
          <FaInstagram size={25} />
        </div>
      </div>
      <div
        className=" w-full pt-16 bg-blue-950 opacity-80
      "
      >
        <div className="w-[70%]  flex justify-between border-b border-t mx-auto pt-8">
          <div className=" text-lg flex gap-8">
            <span>About</span>
            <span>News</span>
            <span>Therapists</span>
            <span>Careers</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
          <div className=" flex items-center gap-4 text-lg">
            <IN className=" size-8" />
            India
          </div>
        </div>
        <div className=" py-12 w-[70%] mx-auto flex items-center  justify-center">
          <span className=" text-lg">Healthy Mind&#10240; &#10240;</span> &#169;
          2024 PRSS, PCCOE{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
