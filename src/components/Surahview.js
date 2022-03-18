import React, { useEffect, useState } from "react";

export default function Surahview(props) {
  const [surahInnerData, setSurahInnerData] = useState([]);
  const fetcher = async () => {
    const url = `http://api.alquran.cloud/v1/surah/${props.surahnumber}`;
    let data = await fetch(url);
    let convertedData = await data.json();
    setSurahInnerData(convertedData.data.ayahs);
    console.log(surahInnerData);
  };
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <>
      {
        //add alif lam meem also as it is not there in the api
      }
      {surahInnerData.map((element) => {
        return (
          <div key={element.number} className=" card c1 mx-4 my-3">
            <div className="card-header ">{element.numberInSurah}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p className="SurahText">{element.text}.</p>
                <footer className="blockquote-footer">
                  Translationsinfuture
                </footer>
              </blockquote>
            </div>
          </div>
        );
      })}
    </>
  );
}
