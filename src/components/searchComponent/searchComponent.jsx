import s from './searchComponent.module.scss'
import {useFormik} from "formik";
import {setBeerThunkCreator} from "../../store/searchReducer";
import {useDispatch} from "react-redux";

export const SearchComponent = () => {
    const dispatch = useDispatch()
    const searchSubmit = (term) => {
        dispatch(setBeerThunkCreator(term))
    }
    const {values, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            term: ''
        },
        onSubmit: (values) => {
            searchSubmit(values.term)
            resetForm()
        }
    })

    return (
            <div className={s.form_section}>
                <form className={s.form_section_content} onSubmit={handleSubmit}>
                    <div className={s.search_section}>
                        <input type="text" name='term' placeholder='find a beer...'
                               value={values.term} onChange={handleChange}/>
                        <button type='submit' onClick={ () => searchSubmit() }></button>
                    </div>
                </form>
            </div>
    )
}