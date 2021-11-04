import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { commentStyle } from '@/static/style/commonCss';
import { AuthContext } from '@/hooks/context';
import { getDashedDate } from '@/static/util/functions';

function Comment({ content, level, createdAt }) {
    const userInfo = useContext(AuthContext);
    return (
        <CommentContainer level={level}>
            <div>{content}</div>
            <CommentController>
                <AuthorInfo>
                    <span>{userInfo}</span>
                    <span>{getDashedDate(createdAt)}</span>
                </AuthorInfo>
            </CommentController>
        </CommentContainer>
    );
}

function PostComments({ comment }) {
    return (
        <ul>
            {comment.map(({ id, content, level, createdAt }) => (
                <Fragment key={id}>
                    <Comment content={content} level={level} createdAt={createdAt} />
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
