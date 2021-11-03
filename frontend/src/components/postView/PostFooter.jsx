import React from 'react';
import styled from 'styled-components';

import PostComments from './PostComments';

function PostFooter({ comments }) {
    return (
        <PostCommentContainer>
            <CommentEnroll>
                <CommentInput placeholder='댓글을 입력해 주세요.' />
                <CommentEnrollButton type='button'>댓글 등록</CommentEnrollButton>
            </CommentEnroll>
            {comments.map((comment, idx) => (
                <CommentListContainer key={idx}>
                    <PostComments comment={comment} />
                    <ReplyButton type='button'>답글 등록</ReplyButton>
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

const ReplyButton = styled.div``;

export default PostFooter;
