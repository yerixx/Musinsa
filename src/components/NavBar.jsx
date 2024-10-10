import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
  margin-bottom: 20px;
`;
const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
`;
const SearchBox = styled.div`
  & > input {
    width: 150px;
    border: none;
    border-bottom: 1px solid #000;
    padding: 4px 6px;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;
const Logo = styled.div`
  width: 280px;
  height: 50px;
  overflow: hidden;
  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const MenuArea = styled.div`
  & > ul {
    display: flex;
    gap: 10px;
  }
`;
const LoginAuth = styled.div`
  cursor: pointer;
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "단독슈퍼세일",
];

const NavBar = ({ authenticate, setAuthenticate }) => {
  const nevigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") nevigate(`?q=${e.target.value}`);
  };
  return (
    <Wrapper>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input onKeyUp={onCheckEnter} type="text" placeholder="제품검색" />
        </SearchBox>
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>Logout</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => nevigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </LoginAuth>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://menu.mt.co.kr/moneyweek/thumb/2020/08/21/06/2020082114368021238_2.jpg"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default NavBar;
