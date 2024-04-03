const CitiesFilter = ({ cities, filters, setFilters }) => {
  const onOptionChangeHandler = (event) => {
    setFilters({
      ...filters,
      city: event.target.value,
    });
  };
  return (
    <div>
      <select onChange={onOptionChangeHandler}>
        <option value={""}>Choose a city</option>
        {cities.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default CitiesFilter;
