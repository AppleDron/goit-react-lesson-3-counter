const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Filter by:
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

export default Filter;
