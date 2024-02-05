import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";
import magfinder from "../assets/images/magfinder.png";
import FuncListContainerFromUser from "./contents/functionPage/FuncListContainerFromUser";
import axios from "axios";

const Wrapper=styled.div`
    position: absolute;
    //position: fixed;
    right:14%;
    bottom: 78%;
    width:300px;
    height:38px;
`;

const Container=styled.div`
//밑에만 라인 나오게 
    position: relative;
    border:none;
    width: 100%;
    height:100%;
    border-bottom: 1px solid gray;
    margin-left: 2%;
    bottom:4px;
`;

const MagImage=styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom:-9px;
`;//돋보기 이미지

const InputBox=styled.input`
    border: none;
    background-color: transparent;
    width:70%;
    font-size: 15px;
    margin-top: 5.5px;
    //padding-bottom: 2px;
`;

const AutoCompleteList=styled.datalist``;


const AutoCompleteItem=styled.option``;

const Finder=()=>{
    const [userInput,setUserInput]=useState("");
    const [suggestions, setSuggestions]=useState([]);//자동완성기능을 위한 리스트
    const inputRef=useRef(null);
    const [clickedOne,setClickedOne]=useState(false);//사용자가 하나를 클릭했을 경우(or not 검색 자체를 엔터눌렀을 경우)

    const onChange=(e)=>{
        setUserInput(e.target.value);
    }//한글자씩 칠 때 마다 userInput이 바뀌는 거임

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                console.log("api 받아옴");
                const response=await fetch("/functions/search");//await axios,get("");
                const data=await response.json();
                const availableSuggestions = data.map(item=>item.functionName);
                const filteredSuggestions = availableSuggestions.filter(suggestions=>
                    suggestions.toLowerCase().includes(userInput.toLocaleLowerCase()));
                setSuggestions(filteredSuggestions);
            }
            catch(error){
                console.error("error fetching data: ");
            }
        };
        fetchData();
    },[userInput]);

    const handleSelectSuggestion=(selectedSuggestion)=>{
        setUserInput(selectedSuggestion);
        //사용자가 하나만을 선택한 거니 suggestions에 그 하나의 값 만을 넣는다?
        setClickedOne(true);
    }
    //case1. 사용자가 filter list에서 함수를 골라 클릭했을 경우->해당 함수설명으로 navigate하면 됨.
    //case2. 사용자의 인풋 자체를 검색하여 엔터를 눌렀을 경우->그 인풋을 포함하거나 일치하는 함수 리스트를 쫙 나열해야 된다.

    return(
        <Wrapper>
        <Container>
        <MagImage src={magfinder} alt="돋보기 이미지"/>
        <InputBox 
        placeholder="찾고 싶은 함수를 검색해주세요"
        value={userInput}
        onChange={onChange}
        list="suggestions"
        ref={inputRef}
        />
        </Container>
        <AutoCompleteList id="suggestions">
            {suggestions.map((suggestion,index)=>{
                <AutoCompleteItem 
                key={index}
                value={suggestion}
                onClick={()=>handleSelectSuggestion(suggestion)}
                />
            })}
        </AutoCompleteList>
        {clickedOne? <FuncListContainerFromUser
            suggestions={suggestions}/>:
            <FuncListContainerFromUser
            suggestions={[userInput]}/>
            }
       </Wrapper>
    );
};

export default Finder;
