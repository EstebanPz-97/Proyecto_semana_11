import "./homepage.scss";
import { GetData } from "../../data/getData";
// import { Link } from "react-router-dom";
import { Anime } from "../Anime";


export const Homepage = () => {
    let heros = GetData();
 return (
    <div className="homepage">
        <h1>homepage</h1>
        <div className="card-detail">
        {heros.map ( ( hero )  => (
            <Anime 
                key={hero.mal_id} 
                {...hero}
            />
        ))}
        </div>

    </div>
 );
};