import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Viewed from "./components/Viewed";

function App() {
  const [isSurahview, setIsSurahview] = useState(false);
  return (
    <>
      <Navbar isSurahview={isSurahview} setIsSurahview={setIsSurahview} />
      <Viewed setIsSurahview={setIsSurahview} isSurahview={isSurahview} />
    </>
  );
}

export default App;
