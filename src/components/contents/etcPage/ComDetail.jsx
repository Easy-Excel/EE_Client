import React, { useEffect, useState } from "react";
import CDetailContainer from "./ComDetailComponents";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import useComponentSize from "../../../hooks/UseComponentSzie";

//버튼
import Button from "../../Button";

//테스트용 데이터
import testData from "./commonData.json";


export default function ComDetail() {
  const navigate = useNavigate();

  //네비게이트 훅을 통해 넘겨받은 정보 (api 연동시 사용)
  //함수 id를 받음 -> id를 가지고 서버에서 해당 함수에 대한 데이터 가져오기
  const { state } = useLocation();
  const funcId = state.funcId;

  //서버에서 함수 데이터를 가져와 저장 / 현재는 임시로 테스트 데이터 저장
  const [funcData, setFuncData] = useState(testData.result);

 

  //데이터 가져오기
  useEffect(() => {
    // console.log(`${funcId}로 데이터 가져오기`);
    // //데이터가져오기
    // fetch(`/functions/${funcId}`)
    // fetch("./functionData.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // 가져온 데이터를 상태에 설정
    //     setFuncData(data.result);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  }, [funcId]);

  //컴포넌트 사이즈 가져오기
  const [componentRef, size] = useComponentSize();
  const [containerSize, setContainerSize] = useState("84%");

  useEffect(() => {
    const newContainerSize = size.height - 27 - 10 - 65.5; //div(흰 박스) - 스크롤 영역 margin-top - 스크롤 영역 margin-bottom - 버튼 영역+margin
    setContainerSize(newContainerSize.toString() + "px");
  }, [size]);



  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",

      }}
      ref={componentRef} // ref 속성 추가 (컨텐츠 크기를 가져오기 위함)
    >
          <CDetailContainer
            height={containerSize}
            funData={funcData}
          />
    </div>
  );
}

//FDetailContainer 값 넘겨줄 때 하나씩 넘겨주지 말고 result 객체 자체를 넘기고 내부에서 처리하도록 수정할까 고려중...
//FExampleContainer 처럼
