import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { AuthContext } from '@/hooks/context';

function PostHeader({ title, info, postId }) {
    const userInfo = useContext(AuthContext);
    const { push } = useHistory();
    const { author, time } = info;

    const handleClickModifyBtn = () => {
        push(`/write/${postId}`);
    };

    const handleClickDeleteBtn = async () => {
        try {
            await axios.post(`http://localhost:8000/delete/${postId}`);
            push('/mylist');
        } catch (error) {
            alert('삭제실패');
        }
    };

    return (
        <PostHeaderContainer>
            <PostTitle>{title}</PostTitle>
            <PostController>
                <PostInfo>
                    <span>{author}</span>
                    <span>{time}</span>
                </PostInfo>
                {userInfo === author && (
                    <PostAction>
                        <button type='button' onClick={handleClickModifyBtn}>
                            수정
                        </button>
                        <button type='button' onClick={handleClickDeleteBtn}>
                            삭제
                        </button>
                    </PostAction>
                )}
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
