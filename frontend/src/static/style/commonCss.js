import { css } from 'styled-components';

const multiLineEllipsis = css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.5;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
`;

const commentStyle = css`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    &:not(:last-of-type) {
        border-bottom: 1px solid #e9ecef;
    }
`;

export { multiLineEllipsis, commentStyle };
