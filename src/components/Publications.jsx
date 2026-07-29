import React, { useMemo, useState } from "react";
import "../css/Publications.css";
import { publications } from "../data/profileData";

const authorMarks = {
  equal: "*",
  corresponding: "†",
  advisor: "†",
};

export default function Publications() {
  const [selectedTag, setSelectedTag] = useState("");
  const tags = useMemo(
    () => [...new Set(publications.flatMap((paper) => paper.tags))],
    []
  );
  const filteredPublications = selectedTag
    ? publications.filter((paper) => paper.tags.includes(selectedTag))
    : publications;

  return (
    <section className="publications" id="publications">
      <div className="publications-select">
        <div className="card-title">Publications</div>
        <select
          className="tag-select-filter"
          value={selectedTag}
          onChange={(event) => setSelectedTag(event.target.value)}
          aria-label="Filter publications by tag"
        >
          <option value="">All</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="publications-info-small">
        * indicates equal contribution, and † denotes corresponding author or advisor.
      </div>

      <div className="publications-list">
        {filteredPublications.map((paper) => (
          <article key={paper.id} className="publication-card" id={paper.id}>
            <img src={paper.image} alt={paper.title} className="publication-image" />

            <div className="publication-content">
              <div className="publication-venue">
                {paper.venues.map((venue) => (
                  <span key={venue.name} className={`venue-tag ${venue.type}`}>
                    {venue.name}
                  </span>
                ))}
              </div>

              <div className="publication-title-wrapper">
                <h3 className="publication-title">{paper.title}</h3>
                <div className="abstract-popup">{paper.abstract}</div>
              </div>

              <div className="publication-authors">
                {paper.authors.map((author, index) => {
                  const symbol = authorMarks[author.role] || "";
                  const name = author.name + symbol;
                  return (
                    <span key={`${author.name}-${index}`}>
                      {author.name === "Shuran Fan" ? <strong>{name}</strong> : name}
                      {index < paper.authors.length - 1 && ", "}
                    </span>
                  );
                })}
              </div>

              <div className="publication-venue-detail">{paper.venueDetail}</div>
              <div className="publication-links">
                {paper.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="publication-tags">
                {paper.tags.map((tag) => (
                  <span key={tag} className="tag-item-show">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
