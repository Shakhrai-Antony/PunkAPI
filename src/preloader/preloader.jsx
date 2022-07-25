import preloader from './preloader.module.scss'
import s from './preloader.module.scss'


export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="beer_time"/>
        </div>
    )

}