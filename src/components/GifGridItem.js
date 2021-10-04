export const GifGridItem = ({ id, title, url }) => {
    console.log(id, title, url)
    return (
        <div className="card">
            <img src={url} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}
