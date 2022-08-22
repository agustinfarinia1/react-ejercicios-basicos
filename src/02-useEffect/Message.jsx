import { useEffect, useState } from "react";

export const Message = () => {

    const [{x,y},setCoords] = useState({x:0,y:0});

    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            setCoords({x,y});
        };

        window.addEventListener('mousemove',(onMouseMove));

        return () => {
            window.removeEventListener('mousemove',(onMouseMove));
        }
    },[]);

    return(
        <>
            <p>Coordenadas: X: {x} Y:{y}</p>
        </>
    );
}