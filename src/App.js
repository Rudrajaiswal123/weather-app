import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect, useState } from "react";
import './App.css';

function App() {


  const apiKey = "0eda323703fe333a76e2f05312904766"
  const [selectCity, setSelectCity] = useState("mumbai")
  const [data, setData] = useState({})
  


  const getWetherDetails = (cityName,) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  
  
  const handleChangeSelect = (e) => {
    console.log("value", e.target.value)
    setSelectCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(selectCity);  
  }

  useEffect(() => {
    getWetherDetails("mumbai");
  }, [])


  return (
    <div className=" container-fluid bodyimg">
    <div className="col-md-12 ">
      <div className="wetherBg">
        <h1 className="heading">Weather</h1>

        <div className="d-grid gap-3 col-3 mt-4">
        <select class="form-select"
          value={selectCity}
          onChange={handleChangeSelect}
          >
          <option selected >Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="goa">Goa</option>
          <option value="patna">Patna</option>
          <option value="bangalore">Bangalore</option>
          <option value="pune">Pune</option>
          <option value="noida">Noida</option>
          <option value="chennai">Chennai</option>
          <option value="rachi">Rachi</option>
          <option value="kolkata">Kolkata</option>
        </select>
          {/* <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} /> */}
          <button className="btn btn-danger" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>
      </div>

      
        <div className="col-md-12 text-center ">
          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="" />

            <h5 className="weathorCity">
              {data?.name}
            </h5>
            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(0)}°C</h6>
          </div>
        </div>
        
      

    </div>
  );
}

export default App;