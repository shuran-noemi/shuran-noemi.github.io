import React from 'react';
import "../css/All.css"
import { news } from "../data/profileData";

function News() {
    return (
        <div className="News" id="news">
            <div className="card-title">News</div>
            <ul className="news-list">
                {news.map((item, index) => (
                    <li key={index}>
                        <div className="news-time">{item.time}</div>
                        <div className="news-content">{item.content}</div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default News;
