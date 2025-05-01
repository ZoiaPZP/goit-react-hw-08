import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
    const isLogged = useSelector(selectIsLoggedIn);

   
    return isLogged ? (
        <Navigate to={redirectTo} replace />
    ) : (
        children 
    );
}


RestrictedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string,
};

export default RestrictedRoute;



