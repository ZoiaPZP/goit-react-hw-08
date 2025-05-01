import css from './Container.module.css'; 

/**
 * Container component used to wrap content and apply max-width and center alignment.
 * It helps in ensuring consistent layout across the app.
 * 
 * @param {ReactNode} children - The content to be wrapped inside the container.
 * @param {string} className - Additional class names for customization (optional).
 * @returns {JSX.Element} The wrapped content inside a div with applied styles.
 */
const Container = ({ children, className = '' }) => {
    return (
        <div className={`${css.container} ${className}`}>
            {children}
        </div>
    );
};

export default Container;

