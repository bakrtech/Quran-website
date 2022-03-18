import React, { useEffect, useState } from "react";
import Surah from "./Surah";
// import { useEffect } from "react";

export default function Surahlist(props) {
  const [surahData, setSurahData] = useState([]);
  const fetcher = async () => {
    const url = "http://api.alquran.cloud/v1/surah";
    let data = await fetch(url);
    let convertedData = await data.json();
    setSurahData(convertedData.data);
  };
  useEffect(() => {
    fetcher();
  }, []);

  return (
    <>
      <div className="row">
        {surahData.map((element) => {
          return (
            <div className="col-md-4" key={element.name}>
              <Surah
                surah={element.englishName}
                number={element.number}
                surahmean={element.englishNameTranslation}
                arabicname={element.name}
                onClick={() => {
                  props.setView(element.englishName);
                  props.setSlectedSurah(element.number);
                  props.setIsSurahview(true);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
