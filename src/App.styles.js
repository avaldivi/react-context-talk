import styled, { css } from "styled-components";

const primaryColor = "#1C77C3";
const secondaryColor = "#F39237";
const tertiaryColor = "#39A9DB";
const quaternaryColor = "#40BCD8";
const dangerColor = "#D63230";

export const NavStyled = styled.nav`
  padding: 10px 20px;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-size: 10px;
`;

export const UlStyled = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
