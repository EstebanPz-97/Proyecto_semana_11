// import { useEffect, useState } from "react";


// let API ="http://gateway.marvel.com/v1/public/comics?ts=1&apikey=4b34bc6faf38c8612062b099d3d97faa&hash=8adb6c9ac61483c3194b895ab24fb278&"

// export function GetData(){
//     const [comics, setComics] = useState([])

//     useEffect(() => {
//         fetch(API).then((response) => response.json())
//         .then((data) => {
//             setComics(data.results);
//             console.log(comics);
//         });
//     },[]);
//     return comics
// }