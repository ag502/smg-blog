import React from 'react';
import styled from 'styled-components';

import { PostContainer, PostCard } from '../../components/common';

const posts = [
    {
        id: 1,
        author: 'user1',
        time: '2021-10-27',
        title: 'This is Competition',
        overView: 'This is summary',
        thumbnail: '',
    },
    {
        id: 2,
        author: 'user1',
        time: '2021-10-27',
        title: '날 밀어 넣어, deep fake on me 준비가 안된 무대로, 몰아넣어, fake on me Got everybody mock up to me 수치를 느끼게 멘탈을 흔들어놔',
        overView: `Get me, get me now, get me, get me now (zu, zu, zu, zu)지금 나를 잡아 아님 난 더 savage (zu, zu, zu, zu)Get me, get me now, get me, get me now (zu, zu, zu, zu) 이젠 내가 너를 잡아, now I'm a savage`,
        thumbnail: 'https://via.placeholder.com/150',
    },
];

function Main() {
    return (
        <MainPageContainer>
            <PostContainer>
                {posts.map(({ id, ...rest }) => (
                    <PostCard key={id} postInfo={rest} />
                ))}
            </PostContainer>
        </MainPageContainer>
    );
}

const MainPageContainer = styled.div`
    padding-top: 20px;
`;

export default Main;
