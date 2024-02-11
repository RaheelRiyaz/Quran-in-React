import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const QuranServiceContext = createContext({});

export default function QuranServiceProvider({ children }) {
  const _url =
    "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json";
  const title = "Al-Quran";
  const [surahs, setSurahs] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [allSurahs, setAllSurahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchedSurah = allSurahs.filter((_) =>
      _.transliteration.toLowerCase().replace("-", "").startsWith(searchVal)
    );

    if (searchVal === "") setSurahs(allSurahs);
    else setSurahs(searchedSurah);
  }, [allSurahs, searchVal]);

  const [favourites, setFavourites] = useState(
    localStorage.getItem("react-quran-favs")
      ? JSON.parse(localStorage.getItem("react-quran-favs"))
      : []
  );

  const fetchSurahs = async () => {
    (await fetch(_url))
      .json()
      .then((res) => {
        setAllSurahs(res);
        setSurahs(res);
      })
      .catch((ex) => {
        throw Error(ex);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSurahs();
  }, []);

  const addToFavs = (s) => {
    console.log(favourites);
    const exists = favourites.some((_) => _.id === s.id);
    if (exists) {
      setFavourites((_) => [..._.filter((surah) => surah.id !== s.id)]);
    } else {
      setFavourites((_) => [..._, s]);
    }
  };

  useEffect(() => {
    localStorage.setItem("react-quran-favs", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => fetchSurahs, []);

  return (
    <QuranServiceContext.Provider
      value={{
        surahs,
        title,
        setSurahs,
        favourites,
        addToFavs,
        loading,
        setLoading,
        setSearchVal,
        searchVal,
      }}
    >
      {children}
    </QuranServiceContext.Provider>
  );
}

QuranServiceProvider.propTypes = {
  children: PropTypes.node,
};
