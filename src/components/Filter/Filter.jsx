import './Filter.scss';

const Filter = ({ value, changeFilter }) => {
  return (
    <label className="TodoFilter">
      <p className="TodoFilter__label">Filter by:</p>
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        className="TodoFilter__input"
      />
    </label>
  );
};

export default Filter;
