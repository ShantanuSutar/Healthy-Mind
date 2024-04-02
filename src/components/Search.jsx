import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className=" w-full border-2 border-blue-300  mt-4 bg-blue-500">
      <div className=" flex flex-col px-12 py-6">
        <label className=" text-2xl">Find a therapist</label>
        <div className=" flex items-center ">
          <input
            className="  w-full mt-2 rounded-sm px-4 py-3 text-black focus:ring focus:ring-blue-300 focus:ring-offset-2 outline-none"
            type="text"
            placeholder="Name of your city"
            id=""
          />
          <div className=" h-12 flex items-center border-l-gray-400 border-l  mt-2  text-gray-600 relative right-[39px] px-2 w-auto">
            <CiSearch size={20} className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
