
//import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs";

import { useFetchGifts } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {

    const { data: gif, loading } = useFetchGifts(category)

    return (
        <>
            <h3 className="text-center">{category}</h3>
            <p className={loading ? 'show-loader animate__animated animate__bounceIn' : 'hide-loader'}>
                {loading && `Search Gif of ${category}...`}
            </p>
            <div className="card-grid">
                {
                    gif.map(gif => (
                        < GifGridItem key={gif.id}
                            {...gif} />
                    ))
                }
            </div>
        </>
    )
}
