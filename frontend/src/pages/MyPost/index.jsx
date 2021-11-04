import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PostContainer, PostCard } from '@/components/common';

function MyPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getMyEntirePosts = async () => {
            try {
                const result = await axios.get('http://localhost:8000/myposts');
                setPosts(result.data);
            } catch (error) {
                alert('조회실패');
                setPosts([]);
            }
        };
        getMyEntirePosts();
    }, []);

    return (
        <MyPostPageContainer>
            <PostContainer>
                {posts.map(({ id, ...rest }) => (
                    <PostCard key={id} postInfo={{ id, ...rest }} />
                ))}
            </PostContainer>
        </MyPostPageContainer>
    );
}

const MyPostPageContainer = styled.div`
    padding-top: 20px;
`;

export default MyPost;
