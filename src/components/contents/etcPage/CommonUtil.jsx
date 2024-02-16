import React, { useState, useEffect } from "react";
import Container from "./ComlistContainer";

export default function Common() {
  const [commonList, setCommonList] = useState([]);

  useEffect(() => {
    fetch("http://43.203.37.62:8080/etc/frequent-functions")
      .then((response) => response.json())
      .then((data) => {
        // 받아온 데이터 복사
        const newData = [...data.result.frequentFeatures];

        // 번호가 11번과 12번인 데이터의 순서 바꾸기
        const index11 = newData.findIndex(item => item.number === 11);
        const index12 = newData.findIndex(item => item.number === 12);

        if (index11 !== -1 && index12 !== -1) {
          const temp = newData[index11];
          newData[index11] = newData[index12];
          newData[index12] = temp;
        }

        // 변경된 데이터를 상태에 설정
        setCommonList(newData);
      })
      .catch((error) => console.log("fetching error : ", error));
  }, []);

  return <Container commonList={commonList} />;
}