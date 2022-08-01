import React from 'react';
import styled from 'styled-components';
import {Textarea} from '../../../StyledComponents/Textarea/Textarea'



export const UserPost = (props) => {

    const newElement = React.createRef();

const addPost = () => {

           let text =  newElement.current.value;
           props.addPost(text)
    }

    return (
        <div>
            ava + description

            <h3>My posts</h3>

            <Textarea placeholder="Write something here..."  ref={newElement}></Textarea>

            <div>
                <button onClick={addPost} >Add post</button>
            </div>

        </div>

    );
};