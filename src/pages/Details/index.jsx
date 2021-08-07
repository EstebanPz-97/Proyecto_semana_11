import './detail.scss'
import { useParams } from 'react-router';
import { getHeroById } from '../../Selectors/getHeroById';
export const Detail = () => {
    const {id} =useParams();
     const hero = getHeroById(id);
     console.log(hero);
     return (
         <div className="details">
             <h1>Detalles</h1>
             <h1>id {id}</h1>



         </div>
     );
};
