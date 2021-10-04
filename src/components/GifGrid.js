/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() =>
    getGifs(category).then(gif => setImages(gif)), [category]);

    return (
        <>
            <h3 className="text-center">{category}</h3>
            <div className="card-grid">
                {
                    images.map(gif => (
                        < GifGridItem key={gif.id}
                            {...gif} />
                    ))
                }

            </div>
        </>
    )
}
