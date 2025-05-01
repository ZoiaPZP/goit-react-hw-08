import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout as logOutUser } from '../../redux/auth/operations';
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.wrapper}>
            <p className={css.userEmail}>{user?.email || "No user"}</p>
            <button
                className={css.logoutButton}
                type="button"
                onClick={() => dispatch(logOutUser())}
                aria-label="Log out"
            >
                Logout
            </button>
        </div>
    );
};

export default UserMenu;



