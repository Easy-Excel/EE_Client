import React from "react";
import { useState, useEffect } from "react";
import Container from "./ComlistContainer";

export default function Common() {
  const [commonList, setCommonList] = useState([]);

  useEffect(() => {
    fetch("http://43.203.37.62:8080/etc/frequent-functions")
      .then((response) => response.json())
      .then((data) => {
        let commonArray = data.result.frequentFeatures;
        [commonArray[10], commonArray[11]] = [commonArray[11], commonArray[10]];
        // setCommonList(data.result.frequentFeatures);
        setCommonList(commonArray);
      })

      .catch((error) => console.log("fetching error : ", error));
  }, []);

  return <Container commonList={commonList} />;
}
