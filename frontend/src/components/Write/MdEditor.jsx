import React from 'react';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';

function MdEditor() {
    return <Editor previewStyle='vertical' height='80vh' initialEditType='markdown' />;
}

export default MdEditor;
