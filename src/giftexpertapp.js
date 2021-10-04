import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const categoriesIni = [''];

    const [categories, setCategories] = useState(categoriesIni)
    return (
        <>
            <h1 className="text-center my-0">GiftExpertApp</h1>
            <p className="text-center my-0">This is REACT course</p>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}