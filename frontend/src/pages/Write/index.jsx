import React from 'react';
import styled from 'styled-components';

import { MdEditor } from '@/components/Write';

function Write() {
    return (
        <WriteContainer>
            <TitleInput placeholder='제목을 입력해 주세요' />
            <MdEditor />
        </WriteContainer>
    );
}

const WriteContainer = styled.div`
    padding: 30px;
`;

const TitleInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #e9ecef;
`;

export default Write;
