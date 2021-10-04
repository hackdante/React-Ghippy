import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(gif => {
                setTimeout(()=>{
                    setState({
                        data: gif,
                        loading: false,
                    });
                }, 3000)
            })
    }, [category])

    // setTimeout(() => {
    //     setState({ data: [1, 2, 3, 4, 5, 6, 7, 8], loading: false })
    // }, 3000)

    return state


}