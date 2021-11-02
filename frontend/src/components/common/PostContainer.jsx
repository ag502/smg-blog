import React from 'react';
import styled from 'styled-components';

function PostContainer({ children }) {
    return <Posts>{children}</Posts>;
}

const Posts = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 785px;
    margin: 0 auto;
`;

export default PostContainer;
