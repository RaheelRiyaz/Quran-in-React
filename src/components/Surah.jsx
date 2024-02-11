import { useContext } from "react";
import { QuranServiceContext } from "../services/QuranService";
import { useNavigate } from "react-router-dom";

function Surah() {
  const { setSearchVal, surahs, addToFavs, loading, favourites } =
    useContext(QuranServiceContext);
  const navigateTo = useNavigate();
  function navigate(e, s) {
    if (!e.target.classList.contains("fav-btn")) {
     setSearchVal("");
      navigateTo("/surah/" + s.id);
    }
  }
  if (loading) return <>Loading please wait....</>;
  return (
    <div>
      {surahs.map((s, i) => {
        return (
          <section
            onClick={(event) => navigate(event, s)}
            key={i}
            className="bg-green-200 shadow-lg mb-4 flex justify-between items-center flex-row-reverse p-3 rounded-lg md:w-[40rem] m-auto"
          >
            <div id="tile">
              <li className="list-none">{s.name}</li>
            </div>
            <button
              className="fav-btn"
              key={i + 1}
              onClick={() => addToFavs(s)}
            >
              {!favourites.some((_) => _.id === s.id) ? (
                <i className="fav-btn fa-regular fa-heart"></i>
              ) : (
                <i className="fav-btn fa-solid fa-heart"></i>
              )}
            </button>
          </section>
        );
      })}
    </div>
  );
}

export default Surah;
