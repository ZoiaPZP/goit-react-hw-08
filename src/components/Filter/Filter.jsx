import css from './Filter.module.css'; 
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from '../../redux/filters/slice'; 

/**
 * Filter component used for searching contacts by name.
 * It interacts with Redux to filter the list of contacts.
 * 
 * @returns {JSX.Element} The filter input field for searching contacts.
 */
const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.query);



    /**
     * Handles the change in the input field and dispatches the filter action.
     * It updates the filter state in Redux to trigger contact filtering.
     *
     * @param {Event} evt - The event triggered by the input change.
     */
    const handleFilter = (evt) => {
        // Converts the input to lowercase for case-insensitive filtering
        dispatch(setFilter(evt.currentTarget.value.toLowerCase()));
    };

    return (
        <div className={css.wrapper}>
            <div className={css.field}>
                <label htmlFor="filter" className={css.label}>Find contacts by name</label>

                <input
                    onChange={handleFilter}
                    value={filter}
                    id="filter"
                    type="text"
                    name="filter"
                    placeholder="Find contacts by name"
                    required
                    className={css.input}
                />
            </div>
        </div>
    );
};

export default Filter;
