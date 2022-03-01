import React, { useEffect, useState } from 'react'
import './widget.css'
function Widgets() {
    const [newsItems, setNewsItems] = useState({
        articles:[],
        totalResults:0
    });
    let url = "https://gnews.io/api/v4/top-headlines?&token=5fbd6d6f6babbcc8b4dc71d2ceb0f407&lang=en&country=in";

    const newsarray = async () => {
        let data = await fetch(url);
        let news = await data.json();
        console.log(news);
        setNewsItems({
            articles:news.articles,
            totalResults:news.totalArticles
        })
         console.log(newsItems);
      
    }
    useEffect(() => {
        newsarray()
       
        // eslint-disable-next-line
    }, [])

    return (
        <div className="widgets">
            <div className="wheader">
                <h2><i className="fas fa-hashtag"></i> What's happening
                    right now</h2>
            </div>
            {
                 newsItems.articles.map(element => {
                     return (
                         <div className="wbody" key={Math.floor(Math.random() * 10000)}>
                             <div className="news-image">
                                 <img src={element.image} alt="" />
                             </div>
                             <div className="text">
                                 <h2>
                                     {element.title}
                                 </h2>
                                 <a href={element.url} target="blank" >
                                     <button className="more">More</button>
                                 </a>
                             </div>
                         </div>
                     )
                 })
            }

        </div>
    )
}

export default Widgets
