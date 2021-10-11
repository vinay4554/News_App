import react from "react";

function Topheadlinescard({article}){
    return(
        <div>
        <div className="card">
        <div className="image">
                <img src={article.image} alt="" />
            </div>
            <div className="content">
                <h2>{article.title}</h2>
                <h3>{article.description}</h3>
                <a href={article.url} target="_self"> Read More</a>
            </div>
        </div>
         </div>
    )
}
export default Topheadlinescard;