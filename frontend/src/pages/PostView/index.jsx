import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { PostHeader, PostBody, PostFooter } from '@/components/postView';

const post = {
    id: 1,
    author: 'user1',
    time: '2021-10-27',
    title: 'This is Competition',
    content: '<h1>Test</h1>',
    comments: [
        [
            { id: 1, postId: 1, level: 1, order: 1, group: 1, isDeleted: false, content: '빙고' },
            {
                id: 2,
                postId: 1,
                level: 2,
                order: 2,
                group: 1,
                isDeleted: false,
                content: '거북이?',
            },
            {
                id: 3,
                postId: 1,
                level: 2,
                order: 3,
                group: 1,
                isDeleted: false,
                content: '오늘도 빛나는 너에게',
            },
        ],
        [
            { id: 4, postId: 1, level: 1, order: 1, group: 1, isDeleted: false, content: '빙고' },
            {
                id: 5,
                postId: 1,
                level: 2,
                order: 2,
                group: 1,
                isDeleted: false,
                content: '거북이?',
            },
            {
                id: 6,
                postId: 1,
                level: 2,
                order: 3,
                group: 1,
                isDeleted: false,
                content: '오늘도 빛나는 너에게',
            },
        ],
    ],
};

function PostView() {
    return (
        <PostViewContainer>
            <PostHeader title={post.title} info={{ time: post.time, author: post.author }} />
            <PostBody content={post.content} />
            <PostFooter comments={post.comments} />
        </PostViewContainer>
    );
}

const PostViewContainer = styled.div`
    width: 800px;
    margin: 100px auto 30px;
`;

export default PostView;
