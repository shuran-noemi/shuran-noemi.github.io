import React from "react";
import "../css/Experience.css";
import { experienceGroups } from "../data/profileData";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="card-title">Experience</div>
      <div className="experience-groups">
        {experienceGroups.map((group) => (
          <div key={group.title} className="experience-group">
            <div className="subsection-title">{group.title}</div>
            <div className="timeline-container">
              {group.items.map((exp, index) => (
                <article key={`${group.title}-${exp.organization}-${index}`} className="timeline-item">
                  <div className="timeline-content">
                    {exp.logos && (
                      <div className="org-logo-container">
                      {exp.logos.map((logo, logoIndex) => (
                        <img
                          key={`${exp.organization}-logo-${logoIndex}`}
                          src={logo.src}
                          alt=""
                          className={`org-logo ${logo.className || ""}`}
                        />
                      ))}
                      </div>
                    )}

                    <div className="exp-container">
                      <div className="timeline-header">
                        <div className="exp-organization">
                          {exp.link ? (
                            <a
                              className="exp-organization-name"
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {exp.organization}
                            </a>
                          ) : (
                            <div className="exp-organization-name">{exp.organization}</div>
                          )}
                          {exp.affiliation && <div className="exp-role">{exp.affiliation}</div>}
                        </div>
                        {exp.period && <div className="exp-period">{exp.period}</div>}
                      </div>

                      {exp.details.length > 0 && (
                        <ul className="exp-projects">
                          {exp.details.map((item) => {
                            if (typeof item === "string") {
                              return <li key={item}>{item}</li>;
                            }

                            return (
                              <li key={item.label}>
                                {item.label}:{" "}
                                {item.people.map((person, personIndex) => (
                                  <span key={person.name}>
                                    <a href={person.link} target="_blank" rel="noopener noreferrer">
                                      {person.name}
                                    </a>
                                    {personIndex < item.people.length - 1 && " and "}
                                  </span>
                                ))}
                                {item.note && <strong className="exp-note"> ({item.note})</strong>}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
