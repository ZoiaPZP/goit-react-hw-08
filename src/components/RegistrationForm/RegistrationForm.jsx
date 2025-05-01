import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Container from "../../components/Container/Container";
import { register } from "../../redux/auth/operations"; 
import { selectError } from "../../redux/auth/selectors";
import { clearError } from "../../redux/auth/slice";
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const getError = useSelector(selectError);

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await dispatch(register({
                name: values.name,
                email: values.email,
                password: values.password
            }));
        } catch (error) {
            console.log(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (getError) {
            toast.error(`${getError}`, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        dispatch(clearError());
    }, [getError, dispatch]);

    return (
        <Container>
            <div className={css.wrapper}>
                <p className={css.title}>Please Register</p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className={css.formElement}>
                            <div className={css.field}>
                                <label className={css.labelElement}>Name:</label>
                                <Field className={css.inputElement} type="text" name="name" />
                                <ErrorMessage name="name" component="div" className={css.error} />
                            </div>
                            <div className={css.field}>
                                <label className={css.labelElement}>Email:</label>
                                <Field className={css.inputElement} type="email" name="email" />
                                <ErrorMessage name="email" component="div" className={css.error} />
                            </div>
                            <div className={css.field}>
                                <label className={css.labelElement}>Password:</label>
                                <Field className={css.inputElement} type="password" name="password" />
                                <ErrorMessage name="password" component="div" className={css.error} />
                            </div>
                            <button
                                className={css.buttonElement}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                            </button>
                            <div className={css.divElement}>
                                <p className={css.pElement}>Do you have an account?</p>
                                <NavLink className={css.styledNavLink} to='/login'>Login Now</NavLink>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default RegistrationForm;




