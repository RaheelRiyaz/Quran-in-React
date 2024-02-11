import { useContext } from "react";
import { QuranServiceContext } from "../services/QuranService";

function SearchBox() {
  const {searchVal,setSearchVal} = useContext(QuranServiceContext);

  return (
    <div>
      <input
        onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
        type="search"
        name=""
        id=""
        value={searchVal}
        className="bg-gray-100 rounded-lg px-2 py-2 w-64 m-3 outline-none"
        placeholder="Search here"
      />
    </div>
  );
}

export default SearchBox;
