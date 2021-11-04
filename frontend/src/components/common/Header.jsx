import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLinks = [
    { path: '/', title: '전체글' },
    { path: '/mylist', title: '내가 쓴 글' },
    { path: '/write', title: '글쓰기' },
];

function Header() {
    return (
        <HeaderContainer>
            <HeaderTitle>SMG Blog</HeaderTitle>
            <HeaderNav>
                {HeaderLinks.map(({ path, title }) => (
                    <StyledLink key={path} to={path} exact>
                        {title}
                    </StyledLink>
                ))}
            </HeaderNav>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 40px;
    color: #f55f24;
    box-shadow: 0px 7px 8px -1px rgba(164, 164, 164, 0.2);
`;

const HeaderTitle = styled.h3``;

const HeaderNav = styled.div``;

const StyledLink = styled(NavLink).attrs({
    activeStyle: {
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
})`
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export default Header;
