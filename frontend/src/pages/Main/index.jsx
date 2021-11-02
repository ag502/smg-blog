import React from 'react';
import styled from 'styled-components';

import { PostContainer } from '../../components/common';

function Main() {
    return (
        <MainPageContainer>
            <PostContainer>
                <div>1</div>
                <div>2</div>
            </PostContainer>
        </MainPageContainer>
    );
}

const MainPageContainer = styled.div`
    padding-top: 20px;
`;

export default Main;
