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
  return (
    <div>
      <select onChange={onOptionChangeHandler}>
        <option value={""}>Choose a {filterCategory}</option>
        {filteringData.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default CommonFilter;
