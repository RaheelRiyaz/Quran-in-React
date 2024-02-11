import { useContext, useState } from "react";
import { QuranServiceContext } from "../services/QuranService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Surahs() {
  const { id } = useParams();
  const { surahs } = useContext(QuranServiceContext);
  const [surah, setSurah] = useState(null);
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    const s = surahs.find((s) => {
      return s.id == id;
    });
    console.log(s);
    setSurah(s);
  }, [id, surahs, surah]);

  if (!surah) return <>Loading please wait....</>;

  return (

    <div className="p-5 bg-gray-100 rounded-lg">
      <div className="top flex m-auto w-fit gap-2">
        <h1 className="text-green-500 text-2xl mb-5 underline font-bold">
          <i className="fa-regular fa-star me-1"></i>
          {surah.transliteration}
          <i className="fa-regular fa-star ms-1"></i>
        </h1>
        <button onClick={() => setIsHindi((_) => !_)} className="bg-gray-200 w-[100px] text-[10px] md:text-sm h-8 md:w-fit px-2 rounded-lg">
          Translate to {isHindi ? "Arabic" : "Hindi"}
        </button>
      </div>

      {surah.verses.map((_) => (
        <span
          className="text-gray-500 text-2xl md:text-4xl space-x-3"
          key={_.id}
        >
          {!isHindi ? _.text : _.translation}
        </span>
      ))}
    </div>
  );
}

export default Surahs;
