const BreadCrumbs = ({ filters }) => {
  const { city, state, gender } = filters;

  return (
    <div
      className=" w-full px-10 mt-10 text-xl text-gray-800
    "
    >
      {"Home"}
      {city ? " > " + city : ""} {state ? " > " + state : ""}
      {gender ? " > " + gender : ""}
    </div>
  );
};

export default BreadCrumbs;
