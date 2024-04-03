import React from "react";
import image from "../assets/sid.jpeg";

const SingleTherapist = ({ therapist }) => {
  if (!therapist.name) return null;

  return (
    <div className=" flex gap-8 hover:ring-1 hover:ring-gray-300 ring-offset-2 cursor-pointer rounded-2xl hover:shadow-lg p-8">
      <div className=" min-w-48 max-w-48 ">
        <img className=" rounded-2xl" src={image} alt="" />
      </div>
      <div className=" flex flex-col gap-1 items-start min-w-[60%]">
        <h1 className=" text-blue-500 text-4xl font-semibold ">
          {therapist.name}
        </h1>
        <p className=" text-lg text-gray-500">
          {therapist.qualifications.map((qual, i) => {
            if (i !== therapist.qualifications.length - 1) {
              return `${qual}, `;
            } else {
              return qual;
            }
          })}
        </p>
        <p className="text-gray-800">
          {therapist.city}, {therapist.state}
        </p>
        <p className=" mt-4 text-lg">{therapist.description}</p>
      </div>
      <div className=" flex flex-col min-w-52 text-2xl text-center gap-8">
        <p>{therapist.phone}</p>
        <button className=" border py-2 rounded-lg text-lg hover:shadow-md transition duration-150">
          Email
        </button>
        <button className="  border py-2 rounded-lg text-lg hover:shadow-md transition duration-150">
          View
        </button>
      </div>
    </div>
  );
};

export default SingleTherapist;
