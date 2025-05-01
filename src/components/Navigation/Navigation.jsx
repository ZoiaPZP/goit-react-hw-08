import css from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const authenticated = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to='/' className={({ isActive }) =>
        isActive ? `${css.navLink} ${css.active}` : css.navLink}>
        Home
      </NavLink>

      {authenticated && (
        <NavLink to='/contacts' className={({ isActive }) =>
          isActive ? `${css.navLink} ${css.active}` : css.navLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;





