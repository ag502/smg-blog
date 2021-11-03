import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { PostHeader, PostBody, PostComment } from '@/components/postView';

const post = {
    id: 1,
    author: 'user1',
    time: '2021-10-27',
    title: 'This is Competition',
    content: '<h1>Test</h1>',
};

function PostView() {
    return (
        <PostViewContainer>
            <PostHeader title={post.title} info={{ time: post.time, author: post.author }} />
            <PostBody content={post.content} />
            <PostComment />
        </PostViewContainer>
    );
}

const PostViewContainer = styled.div`
    width: 800px;
    margin: 100px auto 30px;
`;

export default PostView;
