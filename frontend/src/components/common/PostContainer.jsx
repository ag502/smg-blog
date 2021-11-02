import React from 'react';
import styled from 'styled-components';

function PostContainer({ children }) {
    return <Posts>{children}</Posts>;
}

const Posts = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-row-gap: 25px;
    grid-column-gap: 25px;
    width: 785px;
    margin: 0 auto;
`;

export default PostContainer;
