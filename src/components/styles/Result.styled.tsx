import styled from "styled-components";
import { ThemeProp } from "../../model/Theme";
export const StyledResult = styled.div`
  background-color: ${({ theme }: ThemeProp) => theme.backgroundColor.main};
  color: ${({ theme }: ThemeProp) => theme.textColor.results};
  border-radius: 5px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 36px;
  height: 100px;
  padding-right: 25px;
  width: 100%;
  @media (max-width: ${({ theme }: ThemeProp) => theme.screen.mobile}) {
    width: 90%;
  }
`;
