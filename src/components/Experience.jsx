import React from "react";
import "../css/Experience.css";
import { creatorCampaigns, experienceGroups } from "../data/profileData";

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
            {group.title === "Work Experience" && creatorCampaigns && (
              <div className="creator-campaigns" aria-label={creatorCampaigns.title}>
                <div className="campaigns-copy">
                  <div className="campaigns-title">{creatorCampaigns.title}</div>
                  <p>{creatorCampaigns.note}</p>
                </div>

                <div className="campaign-partner-logos" aria-label="Additional campaign partner brands">
                  {creatorCampaigns.partnerLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className={`campaign-partner-logo campaign-partner-logo-${logo.name.toLowerCase().replace(/\s+/g, "-")}`}
                      title={logo.name}
                    >
                      <img src={logo.src} alt={logo.name} />
                    </div>
                  ))}
                </div>

                <div className="campaign-showcase">
                  {creatorCampaigns.items.map((campaign) => (
                    <article
                      key={campaign.brand}
                      className={`campaign-card campaign-card-${campaign.layout}`}
                    >
                      <div className="campaign-media">
                        <div className={`campaign-logo campaign-logo-${campaign.brand.toLowerCase().replace(/\s+/g, "-")}`}>
                          <img src={campaign.logo} alt={`${campaign.brand} logo`} />
                        </div>
                        <div className="campaign-image-stack">
                          {campaign.images.map((image, imageIndex) => (
                            <img
                              key={`${campaign.brand}-${imageIndex}`}
                              src={image}
                              alt=""
                              className={`campaign-image campaign-image-${imageIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p>{campaign.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
