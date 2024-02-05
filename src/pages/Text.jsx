import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Test = () => {

  const [text, setText] = useState('');

  const getAPI = async () => {
    try {
      const response = await axios.get('/board/list');
      const data = response.data;
      console.log(data);
      setText(data.SUCCESS_TEXT);
    } catch(error){
      console.error('axios 통신 에러');
    }
  }

  useEffect(() => { getAPI() }, []);

  return (
    <h1>{text}</h1>
  )
}

export default Test;
