import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Wrapper} from "../../StyledComponents/Wrapper/Wrapper";
import harry from '../../images/heroes/harry.jpg'
import hermion from '../../images/heroes/hermiona.jpg'
import ron from '../../images/heroes/ron.jpg'
import heroesTittle from '../../images/heroes/herousTitle.png'
import separator from '../../images/separator.png'



const Images = styled.img`
  width: 100%;
  padding: 0px 80px 0px;
  cursor: pointer;
`

const HarryIMG = styled.img`
  display: block;
  margin: auto;
  width: 40%;
  cursor: pointer;
`


const HeroesTittle = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`

const StyledHeroes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 52px;
  grid-column-gap: 50px;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 82px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`

const Paragraph = styled.p`
  width: 100%;
  font-family: 'Bluu Next',sans-serif;
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: 2px;
`

export const Heroes = () => {
    return (
        <Wrapper>

            <HeroesTittle src={heroesTittle} alt=""/>

            <NavLink to="/harry-potter">
                <HarryIMG src={harry} alt=""/>
            </NavLink>

            <StyledHeroes>

                <NavLink to="/hermione-granger">
                    <Images src={hermion} alt=""/>
                </NavLink>

                <NavLink to="/ron-weasley">
                    <Images src={ron} alt=""/>
                </NavLink>

            </StyledHeroes>

            <HeroesTittle src={separator} alt=""></HeroesTittle>

            <Paragraph>More to explore</Paragraph>

        </Wrapper>
    );
};
