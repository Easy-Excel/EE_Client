import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import AtoH from "../components/contents/functionPage/AtoH";
import ItoP from "../components/contents/functionPage/ItoP";
import QtoZ from "../components/contents/functionPage/QtoZ";
import BtnWrapper from "../components/BtnWrapper";
import ChatBot from "../components/ChatBot";
//import RefreshChat from "../components/RefreshChat";
import Finder from "../components/Finder";
import { API } from "../config";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
  @media screen and (max-width: 450px) {
    /* height: auto; */
    max-height: 63vh;
    min-height: 63vh;
  }
`;

//함수 페이지//로 가야함
function Function() {
  //함수 페이지 별도로 생성하기 위함
  const navigate = useNavigate();

  //네비게이트로 넘겨받은 정보
  const { state } = useLocation();
  const content = state.content;

  const [functionsList, setFunctionsList] = useState([]);
  let sortingType = null;
  const [endpoints, setEndpoints] = useState({
    AtoH: `${API.FUNCTION}/list?firstSorting=a&lastSorting=h`,
    ItoP: `${API.FUNCTION}/list?firstSorting=i&lastSorting=p`,
    QtoZ: `${API.FUNCTION}/list?firstSorting=q&lastSorting=z`,
  });
  const [xButton, setXButton] = useState(false);

  const fetchFunListHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);

    try {
      //async await 사용
      // const response = await fetch(endpoints[activeContent], { method: "GET" });
      const response = await fetch(endpoints[content], { method: "GET" });
      const data = await response.json();
      const functions = data.result.functionsSortingList;
      setFunctionsList(functions);
      sortingType = data.result.sortingType;
      // setIsLoading(false);
    } catch (error) {
      // setError(error.message);
    }
    // setIsLoading(false);
    // }, [activeContent, endpoints]);
  }, [content, endpoints]);

  useEffect(() => {
    fetchFunListHandler();
  }, [fetchFunListHandler]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   fetch(endpoints[activeContent])
  //     .then((response) => {
  //       console.log("Response Status Code:", response.status); // Log the response status code
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("data.result" + data.result);
  //       return setFunctionsList(data.result);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, [activeContent, endpoints]);

  const [buttons, setButtons] = useState([
    {
      id: "AtoH",
      width: "22%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "A~H",
      content: "AtoH",
    },
    {
      id: "ItoP",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "I~P",
      content: "ItoP",
    },
    {
      id: "QtoZ",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "Q~Z",
      content: "QtoZ",
    },
  ]); //버튼들을 담을 배열

  const handleButtonClick = (content) => {
    navigate(`/home/function/${content}`, {
      state: { content },
    });
  };

  const contentComponents = {
    AtoH: (
      <AtoH
        functionsList={functionsList}
        sortingType={sortingType}
        content={content}
      />
    ),
    ItoP: (
      <ItoP
        functionsList={functionsList}
        sortingType={sortingType}
        content={content}
      />
    ),
    QtoZ: (
      <QtoZ
        functionsList={functionsList}
        sortingType={sortingType}
        content={content}
      />
    ),
  };
  const handleXButtonClick = () => {
    setXButton(true);
    //filterProps.on
  };

  return (
    <>
      <Container>
        <BtnWrapper gap={"5.8vw"}>
          {buttons.map((button) => (
            <Button
              key={button.id}
              width={button.width}
              height={button.height}
              backgroundColor={
                // button.id === activeContent ? "#107c41" : "white"
                button.id === content ? "#107c41" : "white"
              }
              fontColor={button.id === content ? "white" : "black"}
              border={button.id === content ? "none" : "1px solid black"}
              text={button.text}
              onButtonClick={() => handleButtonClick(button.content)}
            ></Button>
          ))}
        </BtnWrapper>
        {contentComponents[content]}
        {/* {<ChatBot xButton={xButton} onButtonClick={handleButtonClick} />} */}
      </Container>
    </>
  );
}
export default Function;
