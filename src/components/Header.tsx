import {
  Heading,
  StyledHeader,
  ThemeSwitch,
  Switch,
} from "./styles/Header.styled";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Heading>calc</Heading>
      <div>
        <h2>THEME</h2>
        <ThemeSwitch>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <Switch active={1}>
            <span></span>
            <span></span>
            <span></span>
          </Switch>
        </ThemeSwitch>
      </div>
    </StyledHeader>
  );
};

export default Header;
