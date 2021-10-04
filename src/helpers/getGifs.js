export const getGifs = async (category) => {
    const searchBy = encodeURI(category)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ob3PqTmldjjmziPfCSBvbo1bhgtVgMdv&q=${searchBy}&limit=6`;
    const req = await fetch(url);
    const { data } = await req.json();
    const gifs = data.map(img => {
        return {

            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })
   return gifs
}
