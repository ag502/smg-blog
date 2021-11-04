import React, { Fragment } from 'react';
import styled from 'styled-components';

import { commentStyle } from '@/static/style/commonCss';

function Comment({ content, level }) {
    return (
        <CommentContainer level={level}>
            <div>{content}</div>
            <CommentController>
                <AuthorInfo>
                    <span>user1</span>
                    <span>2021-10-27</span>
                </AuthorInfo>
            </CommentController>
        </CommentContainer>
    );
}

function PostComments({ comment }) {
    return (
        <ul>
            {comment.map(({ id, content, level }) => (
                <Fragment key={id}>
                    <Comment content={content} level={level} />
                </Fragment>
            ))}
        </ul>
    );
}

const CommentContainer = styled.li`
    ${commentStyle}
    padding-left: ${(props) => props.level === 2 && '35px'};
    background-color: ${(props) => (props.level === 2 ? '#FAFAFA' : 'inherit')};
`;

const CommentController = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    margin-top: 15px;
`;

const AuthorInfo = styled.div`
    & > span:first-of-type:after {
        content: '·';
        display: inline-block;
        margin: 0 5px;
    }
`;

export default PostComments;
