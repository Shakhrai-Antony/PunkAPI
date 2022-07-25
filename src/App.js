import s from './app.module.scss'
import './App.css';
import {SearchComponent} from "./components/searchComponent/searchComponent";
import {BeerComponent} from "./components/beerComponent/beerComponent";
import {Route, Routes} from "react-router-dom";
import {BeerDescription} from "./components/beerDescription/BeerDescription";

function App() {
    return (
        <div className={s.app_section}>
            <Routes>
                <Route path='/' element={<BeerComponent/>}/>
                <Route path='/beer/:id' element={<BeerDescription/>}/>
            </Routes>
        </div>
    );
}

export default App;
