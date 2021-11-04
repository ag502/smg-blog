import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PostContainer, PostCard } from '../../components/common';

function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getEntirePosts = async () => {
            try {
                const result = await axios.get('http://localhost:8000');
                setPosts(result.data);
            } catch (error) {
                setPosts([]);
            }
        };

        getEntirePosts();
    }, []);

    return (
        <MainPageContainer>
            <PostContainer>
                {posts.map(({ id, ...rest }) => (
                    <PostCard key={id} postInfo={{ id, ...rest }} />
                ))}
            </PostContainer>
        </MainPageContainer>
    );
}

const MainPageContainer = styled.div`
    padding-top: 20px;
`;

export default Main;
