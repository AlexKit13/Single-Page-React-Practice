import React from 'react';
import styled from 'styled-components';
import image3 from '../../../images/images3.png'


const PostWrapper = styled.div`
padding: 10px;
  margin: 10px;
`

export const Posts = (props) => {
    return (
        <div>

            <PostWrapper>
                <img src={image3} width={50} height={50} alt="#"/>
                {props.message}

                <div>
                    <span>like</span> {props.likesCount}
                </div>

            </PostWrapper>

        </div>
    );
};