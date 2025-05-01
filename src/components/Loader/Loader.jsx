import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <span
        className={css.spinner}
        role="status"
        aria-label="Loading..."
      ></span>
    </div>
  );
};

export default Loader;

