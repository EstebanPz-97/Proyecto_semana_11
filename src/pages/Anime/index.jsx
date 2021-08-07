import { Link } from 'react-router-dom';
import './anime.scss'
export const Anime = ({
    mal_id,
    title,
    image_url

}) => {
     return (
         <div className="card-anime">
                 <img src={image_url } alt={title}/>
                 <div className="title-card">{title}</div>
            <Link to={`/Detail/${mal_id}`}>
                ver mas...
            </Link>

         </div>
     );
};