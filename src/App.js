import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
  const [data, setData] = useState({});
  const fetchData = () => {
    axios
      .get(
        "https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/?format=json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Navbar icon={data?.nav_bar?.person_icon} />
      <Body data={data} />
    </div>
  );
};

export default App;
