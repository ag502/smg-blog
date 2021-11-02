import React from 'react';
import styled from 'styled-components';

function PostHeader({ title, info }) {
    const { author, time } = info;
    return (
        <PostHeaderContainer>
            <PostTitle>{title}</PostTitle>
            <PostController>
                <PostInfo>
                    <span>{author}</span>
                    <span>{time}</span>
                </PostInfo>
                <PostAction>
                    <button type='button'>수정</button>
                    <button type='button'>삭제</button>
                </PostAction>
            </PostController>
        </PostHeaderContainer>
    );
}

const PostHeaderContainer = styled.div`
    margin-bottom: 80px;
`;

const PostTitle = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
`;

const PostController = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PostInfo = styled.div`
    & > span:first-of-type {
        font-weight: bold;
    }
    & > span:first-of-type::after {
        display: inline-block;
        content: '·';
        font-weight: normal;
        margin: 0 10px;
    }
`;

const PostAction = styled.div`
    & > button {
        font-size: 15px;
        color: #868e96;
        margin-left: 10px;
    }
`;

export default PostHeader;
