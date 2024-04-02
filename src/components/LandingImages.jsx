import LandingImage from "../assets/main.jpg";

const LandingImages = () => {
  return (
    <div className="w-[70vw] h-[70vh]  mx-auto flex  justify-center ">
      <img className=" object-cover  w-full" src={LandingImage} alt="" />
    </div>
  );
};

export default LandingImages;
