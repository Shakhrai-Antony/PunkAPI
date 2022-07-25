import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getTotalItems} from "../../store/selectors";
import {beerReducerActions} from "../../store/searchReducer";
import s from './paginator.module.scss'
import {useEffect} from "react";

export const Paginator = () => {
    const itemsOfBeer = useSelector(getTotalItems)
    const currentPage = useSelector(getCurrentPage)
    const dispatch = useDispatch()
    let pagesCount = Math.ceil(itemsOfBeer / 6)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const setCurrentPage = (page) => {
        dispatch(beerReducerActions.setNewPage(page))
    }
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
    }, [currentPage])
    return (
        <div className={s.paginator_section}>
            {
                currentPage > 1 && <button className={s.paginator_button_left}
                                           onClick={() => setCurrentPage(currentPage - 1)}>

                </button>
            }

            {
                pages.length > 1 ?
                    pages.map((item, index) => {
                        return (
                            <span className={currentPage === item ? s.selectedPage : s.pages}
                                  onClick={() => setCurrentPage(item)} key={index}>{item}</span>
                        )
                    })
                    : null
            }

            {
                currentPage < pagesCount && <button className={s.paginator_button_right}
                                                    onClick={() => setCurrentPage(currentPage + 1)}>

                </button>
            }
        </div>
    )
}