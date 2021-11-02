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

export { multiLineEllipsis };
