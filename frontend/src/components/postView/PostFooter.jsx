import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PostComments from './PostComments';

function PostFooter({ postId, comments, getPost }) {
    const [curActiveTextArea, setActiveTextArea] = useState(-1);
    const [commentInput, setComment] = useState('');
    const [replyInput, setReply] = useState('');

    const handleClickReplyBtn = (idx) => () => {
        setReply('');
        if (idx === curActiveTextArea) {
            setActiveTextArea(-1);
        } else {
            setActiveTextArea(idx);
        }
    };

    const handleChangeComment = (e) => {
        const { target } = e;
        if (target.id === 'comment') {
            setComment(target.value);
        } else {
            setReply(target.value);
        }
    };

    const handleSubmitMainComment = async () => {
        if (commentInput === '') {
            alert('댓글을 입력해 주세요.');
            return;
        }

        try {
            await axios.post(`http://localhost:8000/addcomment/${postId}`, {
                content: commentInput,
            });
            await getPost();
            setComment('');
        } catch (error) {
            alert('등록실패');
        }
    };

    const handleSubmitReply = (commentId) => async () => {
        if (replyInput === '') {
            alert('답글을 입력해 주세요.');
            return;
        }

        try {
            await axios.post(`http://localhost:8000/addReply/${postId}`, {
                parentId: commentId,
                content: replyInput,
            });
            await getPost();
            setReply('');
        } catch (error) {
            alert('등록실패');
        }
    };

    return (
        <PostCommentContainer>
            <CommentEnroll>
                <CommentInput
                    id='comment'
                    placeholder='댓글을 입력해 주세요.'
                    value={commentInput}
                    onChange={handleChangeComment}
                />
                <CommentEnrollButton type='button' onClick={handleSubmitMainComment}>
                    댓글 등록
                </CommentEnrollButton>
            </CommentEnroll>
            <CommentsContainer>
                {comments.map((comment, idx) => (
                    <CommentListContainer key={idx}>
                        <PostComments comment={comment} />
                        <ReplyButton type='button' onClick={handleClickReplyBtn(idx)}>
                            {curActiveTextArea === idx ? '숨기기' : '답글 등록'}
                        </ReplyButton>
                        {curActiveTextArea === idx && (
                            <>
                                <CommentInput
                                    id='reply'
                                    placeholder='답글을 입력해 주세요.'
                                    value={replyInput}
                                    onChange={handleChangeComment}
                                />
                                <CommentEnrollButton
                                    type='button'
                                    onClick={handleSubmitReply(comment[0].id)}
                                >
                                    답글 등록
                                </CommentEnrollButton>
                            </>
                        )}
                    </CommentListContainer>
                ))}
            </CommentsContainer>
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

const CommentsContainer = styled.div`
    margin-top: 30px;
`;

const CommentListContainer = styled.div`
    border-bottom: 1px solid #e9ecef;
`;

const ReplyButton = styled.button`
    color: #f55f24;
    font-size: 13px;
    font-weight: bold;
    margin: 10px 0px;
`;

export default PostFooter;
