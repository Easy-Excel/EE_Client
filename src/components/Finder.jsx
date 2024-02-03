import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";
import magfinder from "../assets/images/magfinder.png";

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
    const [suggestions, setSuggestions]=useState([]);//자동완성기능
    const inputRef=useRef(null);

    const onChange=(e)=>{
        setUserInput(e.target.value);
    }//한글자씩 칠 때 마다 userInput이 바뀌는 거임

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                console.log("api 받아옴");
                const response=await fetch("url!!!");
                const data=await response.json();
                const availableSuggestions=data.map(item=>item.functionName);
                const filteredSuggestions=availableSuggestions.filter(suggestions=>
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
    }

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
                onClick={()=>handleSelectSuggestion(suggestion)}/>
            })}
        </AutoCompleteList>
        </Container>
    );
};
