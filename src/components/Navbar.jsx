import { useContext } from "react";
import { QuranServiceContext } from "../services/QuranService";
import { Link } from "react-router-dom";

function Navbar() {
  const { title, favourites } = useContext(QuranServiceContext);
  return (
    <div className="flex justify-evenly items-center mb-5">
      <Link to='/' className="text-2xl text-green-700" >{title}</Link>
      <Link to={'favourites'} className="ms-5" onClick={() => console.log(favourites)}>
        <i className="fa-solid fa-heart text-green-600 text-xl"></i>{" "}
        <span className="">{favourites?.length}</span>
      </Link>
    </div>
  );
}

export default Navbar;
