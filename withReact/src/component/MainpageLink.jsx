/** @format */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
/** @format */

// import { Link } from "react-router-dom";

const CategoryItem = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;

  width: 300px;
  height: 300px;

  margin: 0px 20px;
  background: #ffb275;
  border: 3px solid #d5e5ee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const DateDiv = styled.div`
  color: #f3f6f4;
  font-size: 24px;
`;
const TitleDiv = styled.div`
  color: #808180;
`;

export const MainPageLink = ({ date, title, url = "/" }) => {
  return (
    <CategoryItem>
      <Link to={url} style={{ textDecoration: "none" }}>
        <TitleDiv> {title}</TitleDiv>
      </Link>
      <DateDiv>{date}</DateDiv>
    </CategoryItem>
  );
};
