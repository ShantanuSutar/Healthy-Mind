import { Cities, Genders, States } from "../data/fakeData";
import CommonFilter from "./Filters/CommonFilters";

const Filters = ({ setTherapists, filters, setFilters }) => {
  const cities = Cities;
  const states = States;
  const genders = Genders;

  const filterCategories = [
    {
      filteringData: cities,
      filterCategory: "city",
    },
    {
      filteringData: states,
      filterCategory: "state",
    },
    {
      filteringData: genders,
      filterCategory: "gender",
    },
  ];
  return (
    <div className=" flex gap-10">
      {filterCategories.map((filter, i) => (
        <CommonFilter
          key={i}
          filteringData={filter.filteringData}
          filterCategory={filter.filterCategory}
          filters={filters}
          setFilters={setFilters}
        />
      ))}
      {/* <CommonFilter
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
      /> */}
    </div>
  );
};

export default Filters;
