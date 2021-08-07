import queryString from 'query-string';
import { Button, FilledInput, InputAdornment } from '@material-ui/core'
import './search.scss'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic';
import { GetData } from '../../data/getData';
import { useForm } from '../../Hooks/useForm';
import { Anime } from '../Anime';
import { useLocation } from 'react-router-dom';

export const Search = ({history}) => {
   
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    console.log(q);
    const heroesFiltered = GetData();
    const [ formValues, handleInputChange ] = useForm({
        textSearch:q
    });
    const { textSearch } =formValues;
    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${ textSearch }`);
    }
     return (
         <div className="buscador">
             <form className="form-buscador" onSubmit={handleSearch}>
             <h1>Buscador</h1>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={
           <InputAdornment  position="start">
               <SearchIcon />
           </InputAdornment> 
        }
        endAdornment={
           <InputAdornment position="end">
               <MicIcon />
           </InputAdornment>
       }
       autoComplete="off"
       name="textSearch"
       value={textSearch}
       onChange={handleInputChange}
          />

               <Button type="submit">Buscar </Button>
             </form>

             <h4>Results</h4>
             <hr />
             {
                 heroesFiltered.map(hero =>(
                    <Anime 
                    key={hero.mal_id} 
                    {...hero} />
                 ))
             };
         </div>
     );
};