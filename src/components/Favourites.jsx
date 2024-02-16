import { useContext } from "react";
import { QuranServiceContext } from "../services/QuranService";
import { useNavigate } from "react-router-dom";

function Favourites() {
  const { favourites, setFavourites } = useContext(QuranServiceContext);
  const navigate = useNavigate();

  if (favourites.length === 0)
    return (
      <h1 className="text-red-400">
        <i className="fa-solid fa-circle-exclamation"></i> Nothing in favourites
      </h1>
    );

  function handleDelete(surah) {
    setFavourites((_) => _.filter((s) => s.id !== surah.id));
  }

  function navigateTo(id) {
    navigate("/surah/" + id);
  }
  return (
    <div>
      {favourites.map((_) => (
        <div
          key={_.id}
          className="bg-green-300 flex justify-between items-center rounded-lg p-3 mb-2"
        >
          <span onClick={() => navigateTo(_.id)}>
            {_.name} <small className="block">{_.transliteration}</small>
          </span>
          <span onClick={() => handleDelete(_)}>
            <i className="fa-regular fa-circle-xmark text-red-500"></i>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
