import React from "react";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


const SidebarDiv = styled.div`
  grid-area: sidebar;
  font-family: "Harry Potter (Russian Version of Gfdtk)";
  background-color: rgb(34, 35, 43);
  text-align: center;
`

const SidebarList = styled.div`
  display: inline-grid;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 13px 50px;
  cursor: pointer;
  

  a {
    text-decoration: none;
    color: aliceblue;
  }

  a:hover {
    -webkit-user-select: none;
    color: #d56b43;
  }
`

export const Sidebar = () => {
    return (
        <SidebarDiv>

            <SidebarList>
               <NavLink to="/history">History</NavLink>
            </SidebarList>
            <SidebarList>
               <NavLink to="/chats">Chats</NavLink>
            </SidebarList>
            <SidebarList>
                <NavLink to="/messages">Messages</NavLink>
            </SidebarList>
            <SidebarList>
                <NavLink to="/heroes">Heroes</NavLink>
            </SidebarList>
            <SidebarList>
              <NavLink to="/about">About</NavLink>
            </SidebarList>


        </SidebarDiv>
    );
}