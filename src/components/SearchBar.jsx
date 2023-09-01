import { BiSearch } from "react-icons/bi";
import "./style.css";
const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input__container">
          <input type="text" placeholder="Search Movie..." />
          <BiSearch className="search__icon" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
