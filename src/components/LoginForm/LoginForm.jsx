import css from "./LoginForm.module.css";
import { toast } from 'react-toastify';
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";
import { clearError } from "../../redux/auth/slice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const getError = useSelector(selectError);

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

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values));
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <div className={css.wrapper}>
        <p className={css.title}>Please Login</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <div className={css.field}>
              <label htmlFor="email" className={css.label}>Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                className={css.input}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>

            <div className={css.field}>
              <label htmlFor="password" className={css.label}>Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
                className={css.input}
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className={css.error} />
            </div>

            <button type="submit" className={css.button}>Submit</button>

            <div className={css.bottom}>
              <p className={css.text}>Don't have an account?</p>
              <NavLink className={css.link} to="/register">Register Now</NavLink>
            </div>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default LoginForm;





