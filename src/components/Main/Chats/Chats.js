import React from 'react';
import styled from 'styled-components';
import { Posts } from "./Posts/Posts";
import { UserPost } from "./Posts/UserPost";
import {Wrapper} from "../../StyledComponents/Wrapper/Wrapper";

const Wrapper_Chats = styled.div`

`


export const Chats = (props) => {

    const postElem = props.postData.map(item => <Posts message={item.message} likesCount={item.likes}/>)

    return (
        <Wrapper>

            <UserPost addPost={props.addPost}/>

            {postElem}

        </Wrapper>
    );
};
