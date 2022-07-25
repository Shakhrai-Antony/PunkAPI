import s from './beerComponent.module.scss'
import {NavLink} from "react-router-dom";
export const BeerList = (props) => {
    return (
        <div>
            <NavLink to={`/beer/${props.id}`}>
                <div className={s.about_beer_list}>
                    <img src={props.image} alt=""/>
                    <h4>{props.name}</h4>
                    <p>{props.description.length > 140 ? `${props.description.substring(0, 140)}...` : props.description}</p>
                </div>
            </NavLink>
        </div>
    )
}