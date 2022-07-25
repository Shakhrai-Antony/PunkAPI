import {setBeerDescriptionThunkCreator} from "../../store/searchReducer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMatch} from "react-router";
import { getSingleBeer} from "../../store/selectors";
import s from './beerDescription.module.scss'
import {NavLink} from "react-router-dom";

export const BeerDescription = () => {

    const dispatch = useDispatch()
    const match = useMatch('/beer/:id');
    const beer = useSelector(getSingleBeer)
    useEffect(() => {
        dispatch(setBeerDescriptionThunkCreator(match.params.id))
    }, [match])

    return (
        <div>
                {beer.map((item) => {
                    return (
                        <div className={s.beer_description} key={item.id}>
                            <div>
                                <img src={item.image_url} alt=""/>
                                <h4>{item.name}</h4>
                            </div>
                            <div className={s.about_beer}>
                                <p>{item.tagline}</p>
                                <p>{item.description}</p>
                                <p>{item.abv} %</p>
                                Delicious with:
                                {item.food_pairing.map((item, index) => {
                                    return (
                                        <p key={index}>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <div className={s.button}>
                    <NavLink to='/'>
                        <button>
                          Back to search
                        </button>
                    </NavLink>
                </div>
        </div>
    )
}