import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { multiLineEllipsis } from '@/static/style/commonCss';

function PostCard({ postInfo }) {
    const { id, title, overview, thumbnail, userName, time } = postInfo;
    const { push } = useHistory();

    const handleViewPost = () => {
        push(`/post/${id}`);
    };

    return (
        <PostCardContainer onClick={handleViewPost}>
            <PostCardBody>
                <PostTitle>{title}</PostTitle>
                <PostOverView>{overview}</PostOverView>
                {thumbnail && (
                    <PostThumbnail>
                        <img src={thumbnail} alt='' />
                    </PostThumbnail>
                )}
            </PostCardBody>
            <PostInfo>
                <span>{userName}</span>
                <span>{time}</span>
            </PostInfo>
        </PostCardContainer>
    );
}

const PostCardContainer = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 5px 5px 11px 3px #e8e8e8;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.25s ease-in;
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
    }
`;

const PostCardBody = styled.div`
    flex: 1;
`;

const PostTitle = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    ${multiLineEllipsis}
    -webkit-line-clamp: 2;
`;

const PostOverView = styled.article`
    font-size: 13px;
    margin-bottom: 20px;
    ${multiLineEllipsis}
`;

const PostThumbnail = styled.div`
    height: 95px;
    width: 100%;
    margin-bottom: 25px;
    & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30px;
    padding: 10px 0px;
    font-size: 14px;
    font-weight: bold;
    color: #bcbcbc;
    border-top: 1px solid #f3f3f3;
`;

export default PostCard;
