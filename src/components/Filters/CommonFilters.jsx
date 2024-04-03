const CommonFilter = ({
  filteringData,
  filterCategory,
  filters,
  setFilters,
}) => {
  const onOptionChangeHandler = (event) => {
    setFilters(() => {
      if (filterCategory === "city")
        return { ...filters, city: event.target.value };
      else if (filterCategory === "state")
        return { ...filters, state: event.target.value };
      else return { ...filters, gender: event.target.value };
    });
  };

  let filterValue = "";
  if (filterCategory === "city") filterValue = filters.city;
  else if (filterCategory === "state") filterValue = filters.state;
  else filterValue = filters.gender;

  return (
    <div className=" border-2 hover:shadow-md hover:cursor-pointer rounded-3xl py-2 px-4">
      <select
        value={filterValue}
        className=" hover:cursor-pointer outline-none"
        onChange={onOptionChangeHandler}
      >
        <option className=" " value={""}>
          Choose a {filterCategory}
        </option>
        {filteringData.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default CommonFilter;
