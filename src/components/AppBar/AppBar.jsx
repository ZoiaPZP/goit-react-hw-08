import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu"; 
import AuthMenu from "../AuthNav/AuthNav"; 
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthMenu />} 
        </div>
      </Container>
    </header>
  );
};

export default AppBar;

