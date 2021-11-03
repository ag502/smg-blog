import React, { useState } from 'react';
import styled from 'styled-components';

import PostComments from './PostComments';

function PostFooter({ comments }) {
    const [curActiveTextArea, setActiveTextArea] = useState(-1);

    const handleClickReplyBtn = (idx) => () => {
        if (idx === curActiveTextArea) {
            setActiveTextArea(-1);
        } else {
            setActiveTextArea(idx);
        }
    };

    return (
        <PostCommentContainer>
            <CommentEnroll>
                <CommentInput placeholder='댓글을 입력해 주세요.' />
                <CommentEnrollButton type='button'>댓글 등록</CommentEnrollButton>
            </CommentEnroll>
            {comments.map((comment, idx) => (
                <CommentListContainer key={idx}>
                    <PostComments comment={comment} />
                    <ReplyButton type='button' onClick={handleClickReplyBtn(idx)}>
                        {curActiveTextArea === idx ? '숨기기' : '답글 등록'}
                    </ReplyButton>
                    {curActiveTextArea === idx && (
                        <>
                            <CommentInput placeholder='댓글을 입력해 주세요.' />
                            <CommentEnrollButton type='button'>답글 등록</CommentEnrollButton>
                        </>
                    )}
                </CommentListContainer>
            ))}
        </PostCommentContainer>
    );
}

const PostCommentContainer = styled.div`
    margin-top: 80px;
`;

const CommentEnroll = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommentInput = styled.textarea`
    width: 100%;
    padding: 15px;
    font-size: 15px;
    border: 1px solid #e9ecef;
    border-radius: 5px;
`;

const CommentEnrollButton = styled.button`
    align-self: flex-end;
    margin-top: 20px;
    width: 100px;
    padding: 10px 15px;
    background-color: #f65f24;
    border-radius: 5px;
    color: #ffffff;
`;

const CommentListContainer = styled.div``;

const ReplyButton = styled.button`
    color: #f55f24;
    font-size: 13px;
    font-weight: bold;
    margin: 10px 0px;
`;

export default PostFooter;
