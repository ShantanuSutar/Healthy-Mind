const StatesFilter = ({ states, filters, setFilters }) => {
  const onOptionChangeHandler = (event) => {
    setFilters({
      ...filters,
      state: event.target.value,
    });
  };
  return (
    <div>
      <select onChange={onOptionChangeHandler}>
        <option value={""}>Please choose one option</option>
        {states.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default StatesFilter;
