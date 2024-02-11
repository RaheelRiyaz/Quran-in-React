import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import QuranServiceProvider from "./services/QuranService";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <QuranServiceProvider>
      <Navbar />
      <SearchBox />
      <Outlet />
    </QuranServiceProvider>
  );
}

export default App;
