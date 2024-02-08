import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import AtoH from "../components/contents/functionPage/AtoH";
import ItoP from "../components/contents/functionPage/ItoP";
import QtoZ from "../components/contents/functionPage/QtoZ";
import BtnWrapper from "../components/BtnWrapper";
import ChatBot from "../components/ChatBot";
//import RefreshChat from "../components/RefreshChat";
import Finder from "../components/Finder";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Function() {
  let sortingType = null;
  const [activeContent, setActiveContent] = useState("");
  const [functionsList, setFunctionsList] = useState([]);
  const [endpoints, setEndpoints] = useState({
    AtoH: "http://3.39.29.173:8080/functions/list?firstSorting=a&lastSorting=h",
    ItoP: "http://3.39.29.173:8080/functions/list?firstSorting=i&lastSorting=p",
    QtoZ: "http://3.39.29.173:8080/functions/list?firstSorting=q&lastSorting=z",
  });
  const [xButton, setXButton] = useState(false);
  useEffect(() => {
    setActiveContent("AtoH");
  }, []);

  const fetchFunListHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);

    try {
      //async await 사용
      const response = await fetch(endpoints[activeContent], { method: "GET" });
      const data = await response.json();
      const functions = data.result.functionsSortingList;
      setFunctionsList(functions);
      sortingType = data.result.sortingType;
      // setIsLoading(false);
    } catch (error) {
      // setError(error.message);
    }
    // setIsLoading(false);
  }, [activeContent, endpoints]);

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
    setActiveContent(content);
  };

  const contentComponents = {
    AtoH: <AtoH functionsList={functionsList} sortingType={sortingType} />,
    ItoP: <ItoP functionsList={functionsList} sortingType={sortingType} />,
    QtoZ: <QtoZ functionsList={functionsList} sortingType={sortingType} />,
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
                button.id === activeContent ? "#107c41" : "white"
              }
              fontColor={button.id === activeContent ? "white" : "black"}
              border={button.id === activeContent ? "none" : "1px solid black"}
              text={button.text}
              onButtonClick={() => handleButtonClick(button.content)}
            ></Button>
          ))}
        </BtnWrapper>
        {contentComponents[activeContent]}
        {/* {<ChatBot xButton={xButton} onButtonClick={handleButtonClick} />} */}
      </Container>
    </>
  );
}
export default Function;
