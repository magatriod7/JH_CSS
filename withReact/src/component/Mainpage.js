/** @format */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MainPageLink } from "./MainpageLink";
/** @format */

// import { Link } from "react-router-dom";
const MainPage_Div = styled.div`
  width: 90%;
  max-width: 1920px;
  background-color: #ecdcad;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 30px;
  box-sizing: border-box;
  border: 25px white solid;
`;

const CategoryItem = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;

  width: 300px;
  height: 300px;

  //   margin: 20px 20px;
  //   background: ;
  // line-height: 58px;

  // text-transform: uppercase;

  //   color: #222222;
`;

export const MainPage = () => {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <MainPage_Div className="Main-Page">
      <MainPageLink
        date={"2022-04-05"}
        title={"첫 글"}
        url={"/text"}
      ></MainPageLink>
      <MainPageLink date={"2022-04-05"} title={"첫 글"}></MainPageLink>
    </MainPage_Div>
  );
};
