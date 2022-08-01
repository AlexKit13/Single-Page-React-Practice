import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {Wrapper} from "../../StyledComponents/Wrapper/Wrapper";
import DialogItem from './DialogItem/DialogItem'
import Massage from './Massage/Massage'
import {Textarea} from '../../StyledComponents/Textarea/Textarea'

const Dialogs = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 10px;
  font-size: 20px;
`

const Dialog_items = styled.div`

`


const Massages = styled.div`

`

export const Messages = (props) => {

    const dialogElem = props.dialogsData.map(item =>
        <DialogItem name={item.name} id={item.id}/>);

    const messageElem = props.messagesData.map(item => <Massage text={item.message}/>)

    return (
        <Wrapper>

            <Dialogs>

                <Dialog_items>
                    {dialogElem}
                </Dialog_items>

                <Massages>
                    {messageElem}
                </Massages>

                <Textarea placeholder="Write something here..."></Textarea>
                <br/>
                <div>
                    <button>Send message</button>
                </div>

            </Dialogs>

        </Wrapper>
    );
};

