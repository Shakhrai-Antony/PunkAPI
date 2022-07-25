import {getBeer, getCurrentPage, getPreloader, getTotalItems} from "../../store/selectors";
import {useSelector} from "react-redux";
import {BeerList} from "./beerList";
import s from './beerComponent.module.scss'
import {Paginator} from "../paginator/paginator";
import {SearchComponent} from "../searchComponent/searchComponent";
import {Preloader} from "../../preloader/preloader";

export const BeerComponent = () => {
    const myBeer = useSelector(getBeer)
    const currentPage = useSelector(getCurrentPage)
    const fetchingStatus = useSelector(getPreloader)
    const arr = []
    for (let i = (currentPage - 1) * 6; (i < 6 + (currentPage - 1) * 6); i++) {
        if(myBeer[i]) arr.push(myBeer[i])
    }
    const aboutBeer = arr.map((item) =>
        <BeerList
            image={item.image_url}
            name={item.name}
            description={item.description}
            key={item.id}
            id={item.id}
        />
    )

    return (
        <div>
            <div className={s.app_section_search}>
                <SearchComponent/>
            </div>
            {
                fetchingStatus ? <Preloader/> :
                <div className={s.about_beer_section}>
                    { aboutBeer }
                </div>
            }
            <div>
                <Paginator/>
            </div>
        </div>
    )
}