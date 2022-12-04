import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Apod from "./Apod";

const reqUrl = "https://api.nasa.gov/planetary/apod?api_key=8CfysXdfuJZ0aHfZKZZmRireicsq0nKq3Od7NkJA"

const urls = ["&date=2022-12-01", "&date=2022-11-30", "&date=2022-11-24"]

function App() {
  const [day, setDay] = useState(1);
  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios.get(reqUrl + urls[day - 1])
      .then(res => {
        setApod(res.data)
      });
  }, [day])


  console.log('apod bilgisi:', apod);

  return (
    <div className="App">
     

      <div className="content">
        <h1>Photo of the day - NASA</h1>
        <div className="buttons">
          <button
            onClick={() => setDay(1)}
            className={day === 1 ? 'selected' : ''}
          >
            Bugün
          </button>

          <button
            onClick={() => setDay(2)}
            className={day === 2 ? 'selected' : ''}
          >
            Dün
          </button>

          <button
            onClick={() => setDay(3)}
            className={day === 3 ? 'selected' : ''}
          >
            Geçen Hafta
          </button>
        </div>

        {apod === null
          ? <div>APOD yükleniyor</div>
          : (
            <Apod dopa={apod} />
          )
        }

      </div>

    </div>
  );
}
export default App;