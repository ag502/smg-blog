import React, { useRef, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';

function PostBody({ content }) {
    const viewRef = useRef(null);

    useEffect(() => {
        viewRef.current.getInstance().setMarkdown(content);
    }, []);

    return <Viewer ref={viewRef} />;
}

export default PostBody;
