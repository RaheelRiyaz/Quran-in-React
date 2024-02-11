import { useContext } from "react";
import { QuranServiceContext } from "../services/QuranService";
function Favourites() {
  const { favourites } = useContext(QuranServiceContext);

  if (favourites.length === 0)
    return <h1 className="text-red-400">Nothing in favourites</h1>;
  return (
    <div>
      {favourites.map((_) => (
        <div key={_.id}>{_.name}</div>
      ))}
    </div>
  );
}

export default Favourites;
