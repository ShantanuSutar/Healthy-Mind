import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" fixed w-full flex items-center justify-center bg-blue-500 p-4 text-white shadow-2xl">
      <div className=" w-[70%]  flex justify-between">
        <h1
          onClick={() => navigate("/")}
          className=" cursor-pointer text-3xl  tracking-tighter"
        >
          Healthy Mind
        </h1>
        <div className=" flex items-center text-lg gap-8 ">
          <NavLink to={"/therapists"}>Find a therapist</NavLink>
          <NavLink>Get Help</NavLink>
          <NavLink>Magazines</NavLink>
          <NavLink>News</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
