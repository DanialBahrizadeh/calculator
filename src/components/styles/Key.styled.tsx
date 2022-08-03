import styled from "styled-components";

interface StyledKeyProps {
  value: string;
}
const spesial = [{ value: "/", gridValue: "distribution" }, {}, {}, {}];
export const StyledKey = styled.span<StyledKeyProps>`
  grid-area: ${({ value }) => `${value}`};
`;
