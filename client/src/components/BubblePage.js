import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
// import { getColors } from "../api/getColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColorList = () => {
    axiosWithAuth()
      .get("api/colors")
      .then((res) => {
        // console.log(res.data);
        setColorList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getColorList();
  }, []);

  return (
    <>
      {/* <h1> See the Bubbles!</h1> */}
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColors={getColorList}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
