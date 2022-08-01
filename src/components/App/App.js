import React from "react";
import styled from 'styled-components';
import { Route } from "react-router-dom";

import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { History } from "../Main/History/History";
import { Footer } from "../Footer/Footer";
import { Chats } from "../Main/Chats/Chats";
import { Messages } from "../Main/Messages/Messages";
import { Heroes } from "../Main/Heroes/Heroes";
import { About } from "../Main/About/About";
import { HarryPotter } from "../Main/Heroes/HarryPotter/HarryPotter";
import { HermioneGranger } from "../Main/Heroes/HermioneGranger/HermioneGranger";
import { RonWeasley } from "../Main/Heroes/RonWeasley/RonWeasley";




const AppWrapperContent = styled.div `
  
  grid-area: main;
  background-color: rgb(250,246,240);

`

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-gap: 5px;
  background-color: #ffffff;
  grid-template-columns: minmax(200px, 100%);
  grid-template-rows: 200px 1fr;
  grid-template-areas:
"header" 
"sidebar"
"main"
"footer";
`

function App(props) {


    return (

        <Container>

            <Header />
           <Sidebar/>

            <AppWrapperContent>

                <Route path="/history" render={() => <History />} />
                <Route path="/chats" render={() => <Chats  postData={props.state.postData} addPost ={props.addPost} />} />
                <Route path="/messages" render={() => <Messages messagesData={props.state.messagesData} dialogsData={props.state.dialogsData}/>} />
                <Route path="/heroes" render={() => <Heroes />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/harry-potter" render={() => <HarryPotter />} />
                <Route path="/hermione-granger" render={() => <HermioneGranger />} />
                <Route path="/ron-weasley" render={() => <RonWeasley />} />


            </AppWrapperContent>

            <Footer/>

        </Container>

    );
}

export default App;
