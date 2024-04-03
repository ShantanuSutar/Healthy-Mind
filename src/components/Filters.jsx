import { Cities, Genders, States } from "../data/fakeData";
import CommonFilter from "./Filters/CommonFilters";

const Filters = ({ setTherapists, filters, setFilters }) => {
  const filterCategories = [
    {
      filteringData: Cities,
      filterCategory: "city",
    },
    {
      filteringData: States,
      filterCategory: "state",
    },
    {
      filteringData: Genders,
      filterCategory: "gender",
    },
  ];
  return (
    <div className=" flex  w-full px-8  gap-10">
      {filterCategories.map((filter, i) => (
        <CommonFilter
          key={i}
          filteringData={filter.filteringData}
          filterCategory={filter.filterCategory}
          filters={filters}
          setFilters={setFilters}
        />
      ))}
    </div>
  );
};

export default Filters;
