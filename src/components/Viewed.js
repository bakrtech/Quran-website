import React, { useState } from "react";
import Surahlist from "./Surahlist";
import Surahview from "./Surahview";

export default function Viewed(props) {
  const [view, setView] = useState("SurahList");

  const [selectedSurah, setSelectedSurah] = useState("");
  return (
    <>
      {view === "SurahList" && (
        <Surahlist
          setView={setView}
          setIsSurahview={props.setIsSurahview}
          setSlectedSurah={setSelectedSurah}
        />
      )}
      {view !== "SurahList" && (
        <Surahview
          surahnumber={selectedSurah}
          setIsSurahView={props.setIsSurahview}
        />
      )}
    </>
  );
}
