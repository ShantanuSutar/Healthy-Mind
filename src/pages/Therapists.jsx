import React, { useEffect, useState } from "react";
import { TherapistsData } from "../data/fakeData";
import SingleTherapist from "../components/SingleTherapist";

import { useParams } from "react-router-dom";
import Filters from "../components/Filters";
const Therapists = () => {
  const therapistsData = TherapistsData;

  const [therapists, setTherapists] = useState(therapistsData);

  const [filters, setFilters] = useState({
    city: "",
    state: "",
    experience: "",
    price: "",
    gender: "",
  });

  useEffect(() => {
    let updatedTherapists = [];
    if (filters.city !== "" || filters.state !== "" || filters.gender !== "") {
      if (filters.city !== "") {
        updatedTherapists = therapistsData.filter(
          (therap) => therap.city === filters.city
        );
        setTherapists(updatedTherapists);
      }

      if (filters.state !== "") {
        if (updatedTherapists.length === 0) {
          updatedTherapists = therapistsData.filter(
            (therap) => therap.state === filters.state
          );
        } else {
          updatedTherapists = updatedTherapists.filter(
            (therap) => therap.state === filters.state
          );
        }
        setTherapists(updatedTherapists);
      }

      if (filters.gender !== "") {
        if (updatedTherapists.length === 0) {
          updatedTherapists = therapistsData.filter(
            (therap) => therap.gender === filters.gender
          );
        } else {
          updatedTherapists = updatedTherapists.filter(
            (therap) => therap.gender === filters.gender
          );
        }
        setTherapists(updatedTherapists);
      }

      //   updatedTherapists = therapistsData.filter((therap) => {
      //     return (
      //       therap.city === filters.city ||
      //       therap.state === filters.state ||
      //       therap.gender === filters.gender
      //     );
      //   });
      //   setTherapists(updatedTherapists);

      //   if (filters.gender !== "") {
      //     updatedTherapists = therapists.filter(
      //       (therap) => therap.gender === filters.gender
      //     );
      //     setTherapists(updatedTherapists);
      //   }
    } else {
      setTherapists(therapistsData);
    }

    console.log(therapists);
  }, [filters]);

  return (
    <div className=" pt-16 flex flex-col items-center justify-center  gap-8 w-[80%] mx-auto">
      <Filters
        setTherapists={setTherapists}
        filters={filters}
        setFilters={setFilters}
      />
      <ul>
        {therapists.length > 0 ? (
          therapists.map((therapist, i) => {
            return (
              <li key={i}>
                <SingleTherapist therapist={therapist} />
              </li>
            );
          })
        ) : (
          <div className="  mt-20 text-3xl">
            <p>No therapists found with given filters </p>
            <p className=" text-lg text-center mt-10  text-gray-500">
              Try changing the filters
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Therapists;
