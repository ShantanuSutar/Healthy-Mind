const GenderFilter = ({ genders, filters, setFilters }) => {
  const onOptionChangeHandler = (event) => {
    setFilters({
      ...filters,
      gender: event.target.value,
    });
  };
  console.log(filters);
  return (
    <div>
      <select onChange={onOptionChangeHandler}>
        <option value={""}>Please choose one option</option>
        {genders.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default GenderFilter;
