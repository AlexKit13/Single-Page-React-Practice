import styled from 'styled-components';

export const Textarea = styled.textarea`
      width: 350px;
      height: 150px;
      resize: none;
      background-color: rgb(34,35,43);
      color: aliceblue;
      font-size: 18px;
      resize: none;
      padding: 5px;
      border-radius: 10px;
      margin-top: 7px;
      margin-bottom: 7px;
      overflow: auto;
      
      :focus{
        box-shadow: 0px 2px 2px #f2dede inset, 0px 0px 8px #dff0d8;
        outline: none;
      }
    `