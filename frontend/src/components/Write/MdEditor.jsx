import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';

function MdEditor(props, ref) {
    return (
        <EditorContainer>
            <Editor ref={ref} previewStyle='vertical' height='100%' initialEditType='markdown' />
        </EditorContainer>
    );
}

const EditorContainer = styled.div`
    flex: 1 1 0;
`;

export default forwardRef(MdEditor);
