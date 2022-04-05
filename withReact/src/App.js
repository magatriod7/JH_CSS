/** @format */

import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./component/Mainpage";

const AppDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #0784b5;
`;

function App() {
  return (
    <AppDiv>
      <Routes>
        <Route path="/1" element={<div />} />
        <Route path="/2" element={<div />} />
        <Route path="/3" element={<div />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </AppDiv>
  );
}

export default App;
