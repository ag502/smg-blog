import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { MdEditor } from '@/components/Write';

function Write() {
    const [title, setTitle] = useState('');
    const { push } = useHistory();
    const editorRef = useRef(null);

    const handleChangeTitle = (e) => {
        const { target } = e;
        setTitle(target.value);
    };

    const handleClickSubmit = async () => {
        const curEditor = editorRef.current.getInstance();

        try {
            await axios.post('http://localhost:8000/addpost', {
                title,
                content: curEditor.getHTML(),
            });
            push('/mylist');
        } catch (error) {
            alert('등록 실패');
        }
    };

    return (
        <WriteContainer>
            <TitleInput
                placeholder='제목을 입력해 주세요'
                value={title}
                onChange={handleChangeTitle}
            />
            <MdEditor ref={editorRef} />
            <SubmitButton type='button' onClick={handleClickSubmit}>
                업로드
            </SubmitButton>
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
