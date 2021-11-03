import React, { Fragment } from 'react';
import styled from 'styled-components';

import { commentStyle } from '@/static/style/commonCss';

function FirstLevelComment({ content }) {
    return <FirstLevelCommentContainer>{content}</FirstLevelCommentContainer>;
}

function SecondLevelComment({ content }) {
    return <SecondLevelCommentContainer>┕ {content}</SecondLevelCommentContainer>;
}

function PostComments({ comment }) {
    return (
        <ul>
            {comment.map(({ id, content, level }) => (
                <Fragment key={id}>
                    {level === 1 ? (
                        <FirstLevelComment content={content} />
                    ) : (
                        <SecondLevelComment content={content} />
                    )}
                </Fragment>
            ))}
        </ul>
    );
}

const FirstLevelCommentContainer = styled.li`
    ${commentStyle}
`;

const SecondLevelCommentContainer = styled.li`
    ${commentStyle}
    padding-left: 30px;
    background-color: #f8f8f8;
`;

export default PostComments;
