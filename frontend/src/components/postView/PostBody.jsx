import React from 'react';
import DOMPurify from 'dompurify';

function PostBody({ content }) {
    const sanitizedContent = {
        __html: DOMPurify.sanitize(content),
    };

    return <div dangerouslySetInnerHTML={sanitizedContent} />;
}

export default PostBody;
