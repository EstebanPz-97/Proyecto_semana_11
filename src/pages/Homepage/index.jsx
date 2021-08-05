import "./homepage.scss";
import { GetData } from "../../util/getData";


export const Homepage = () => {
    let heros = GetData();
 return (
    <div className="homepage">
        <h1>homepage</h1>
        {heros.map ( ( hero )  => (
            <div key={hero.id}>
                <h1>{hero.id}</h1>
            </div>
        ))}

    </div>
 );
};