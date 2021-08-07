import { useEffect, useState } from "react";

let API ="https://api.jikan.moe/v3/search/anime?q=action"
console.log(API);

export function GetData(){
    const [heros, setHero] = useState([])

    useEffect(() => {
        fetch(API).then((response) => response.json())
        .then((data) => {
            setHero(data.results);
        });
    },[]);
    return heros;
}