import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";
import magfinder from "../assets/images/magfinder.png";
import FuncListContainerFromUser from "./contents/functionPage/FuncListContainerFromUser";

const Container=styled.div`
//밑에만 라인 나오게 
    display:flex;
`;

const MagImage=styled.img`
    width: 5%;
    height: 5%;
`;//돋보기 이미지

const InputBox=styled.input`
`;

const AutoCompleteList=styled.datalist``;


const AutoCompleteItem=styled.option``;

export default Finder=()=>{
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
                const response=await fetch("url!!!");
                const data=await response.json();
                const availableSuggestions = data.map(item=>item.functionName);
                const filteredSuggestions = availableSuggestions.filter(suggestions=>
                    suggestions.toLowerCase().includes(userInput.toLocaleLowerCase()));
                setSuggestions(filteredSuggestions);
            }
            catch(error){
                console.error("error fetching data: ",data);
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
        <Container>
        <MagImage src={magfinder} alt="돋보기 이미지"/>
        <input 
        placeholder="찾고 싶은 함수를 검색해주세요"
        value={userInput}
        onChange={onChange}
        list="suggestions"
        ref={inputRef}
        />
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
        </Container>
    );
};
