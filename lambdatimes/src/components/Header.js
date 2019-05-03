import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;
const Heading = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: 700;
  text-align: center;
  color: black;
`;

const Date = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  margin-left: 25px;
`;

const Temp = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  text-align: right;
  margin-right: 25px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <Heading>Lambda Times</Heading>
      <Temp>98°</Temp>
    </HeaderContainer>
  );
};

export default Header;