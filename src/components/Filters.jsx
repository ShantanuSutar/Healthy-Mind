import React from "react";
import { Cities, Genders, States } from "../data/fakeData";
import CitiesFilter from "./Filters/CitiesFilter";
import StatesFilter from "./Filters/StatesFilter";
import GenderFilter from "./Filters/GenderFilter";
import CommonFilter from "./Filters/CommonFilters";

const Filters = ({ setTherapists, filters, setFilters }) => {
  const cities = Cities;
  const states = States;
  const genders = Genders;

  return (
    <div className=" flex gap-10">
      {/* <CitiesFilter
        setTherapists={setTherapists}
        cities={cities}
        filters={filters}
        setFilters={setFilters}
      />
      <StatesFilter
        setTherapists={setTherapists}
        states={states}
        filters={filters}
        setFilters={setFilters}
      />
      <GenderFilter
        setTherapists={setTherapists}
        genders={genders}
        filters={filters}
        setFilters={setFilters}
      /> */}
      <CommonFilter
        filteringData={cities}
        filterCategory={"city"}
        filters={filters}
        setFilters={setFilters}
      />
      <CommonFilter
        filteringData={states}
        filterCategory={"state"}
        filters={filters}
        setFilters={setFilters}
      />
      <CommonFilter
        filteringData={genders}
        filterCategory={"gender"}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Filters;
