import Container from "../../components/Container/Container";
import css from "./Hero.module.css";
import { NavLink } from 'react-router-dom';
import heroImg from '../../assets/images/person-phone.png';

const Hero = () => {
    return (
        <div
            className={css.heroWrapper}
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(36, 37, 52, 0.7), rgba(46, 47, 66, 0.7)), url(${heroImg})` }}
        >
            <Container>
                <div className={css.content}>
                    <div className={css.textBlock}>
                        <h1 className={css.title}>
                            Welcome to <br /> the <span className={css.span}>Phone Book</span>
                        </h1>
                        <h2 className={css.subTitle}>Securely store contacts that are accessible from any device.</h2>
                        <NavLink to='/login' className={css.styledNavLink}>Get started</NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;


