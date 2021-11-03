import React from 'react';
import styled from 'styled-components';

import { MdEditor } from '@/components/Write';

function Write() {
    return (
        <WriteContainer>
            <TitleInput placeholder='제목을 입력해 주세요' />
            <MdEditor />
            <SubmitButton type='button'>업로드</SubmitButton>
        </WriteContainer>
    );
}

const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
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

const SubmitButton = styled.button`
    align-self: flex-end;
    margin-top: 20px;
    width: 100px;
    padding: 10px 15px;
    background-color: #f65f24;
    border-radius: 5px;
    color: #ffffff;
`;

export default Write;
