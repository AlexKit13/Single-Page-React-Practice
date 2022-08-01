import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const Items = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`

const DialogItem = (props) => {

    const path = "/messages/" + props.id

    return (
        <Items>
            <NavLink to={path}>{props.name}</NavLink>
        </Items>
    );
}

export default DialogItem;