import React from "react";
import image2 from '../images/image2.png';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


const HeaderDiv = styled.div`
  display: grid;
  grid-area: header;
  background-color: rgb(34,35,43);
  justify-content: center;
  align-content: center;
  -webkit-user-select: none;
`

const ImgPointer = styled.img`
  cursor: pointer;
`

export const Header = () => {
    return(

            <HeaderDiv>
                <NavLink to="/history">
                <ImgPointer src={image2} width={200} height={140}></ImgPointer>
                </NavLink>
            </HeaderDiv>

    );
}
