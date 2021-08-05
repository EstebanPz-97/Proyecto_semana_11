import { useEffect, useState } from "react";

let API ="https://superheroapi.com/api/6002785739794146/search/batman"

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