import React from "react";
import "../css/Activities.css";
import { activities } from "../data/profileData";

export default function Activities() {
  return (
    <section className="activities" id="activities">
      <div className="card-title">Activities</div>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <article key={activity.title} className="activity-item">
            <div className="activity-copy">
              <div className="activity-index">0{index + 1}</div>
              <h3>{activity.title}</h3>
              <p className="activity-meta">
                {activity.datePlace} · {activity.hostPrefix}{" "}
                <a href={activity.hostLink} target="_blank" rel="noopener noreferrer">
                  {activity.hostName}
                </a>
                {activity.hostSuffix}
              </p>
              <p>{activity.description}</p>
            </div>
            <div className={`activity-stack photos-${activity.images.length}`}>
              {activity.images.map((image, imageIndex) => (
                <img
                  key={`${activity.title}-${imageIndex}`}
                  src={image}
                  alt=""
                  className={`stack-photo stack-${imageIndex + 1}`}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
