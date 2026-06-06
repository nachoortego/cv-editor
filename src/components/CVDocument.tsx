import type { CVData, ContactItem, ProjectItem } from "../cvData";
import { GitHubIcon, LinkedInIcon } from "./ContactIcons";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

type Props = {
  data: CVData;
};

function ContactIconGlyph({ icon }: { icon: NonNullable<ContactItem["icon"]> }) {
  if (icon === "linkedin") return <LinkedInIcon className="cv-contact__icon" />;
  return <GitHubIcon className="cv-contact__icon" />;
}

function ContactLine({ data }: Props) {
  return (
    <div className="cv-contact">
      {data.contact.map((item) => (
        <span key={item.label} className="cv-contact__item">
          {item.href ? (
            <a
              href={item.href}
              className="cv-contact__link"
              target="_blank"
              rel="noreferrer"
            >
              {item.icon ? <ContactIconGlyph icon={item.icon} /> : null}
              <span>{item.label}</span>
            </a>
          ) : (
            item.label
          )}
        </span>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="cv-section-title">
      <h2>{children}</h2>
      <hr />
    </div>
  );
}

function ExperienceBlock({ data }: Props) {
  return (
    <section className="cv-section">
      <SectionTitle>{data.sectionLabels.experience}</SectionTitle>
      <div className="cv-stack">
        {data.experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="cv-job">
            <p className="cv-job__role">
              {job.role}
              {job.roleHref ? (
                <a
                  href={job.roleHref}
                  className="cv-job__role-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${job.company} website`}
                >
                  <ExternalLinkIcon className="cv-job__role-link-icon" />
                </a>
              ) : null}
              {job.roleDetail ? (
                <>
                  {" "}
                  <span className="cv-job__role-detail">({job.roleDetail})</span>
                </>
              ) : null}
            </p>
            <p className="cv-job__meta">
              {job.companyHref ? (
                <a href={job.companyHref} target="_blank" rel="noreferrer">
                  {job.company}
                </a>
              ) : (
                <strong>{job.company}</strong>
              )}
              <span className="cv-job__meta-sep"> | </span>
              {job.period}
              <span className="cv-job__meta-sep"> | </span>
              {job.location}
            </p>
            <p className="cv-body">{job.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectListItem({ item }: { item: ProjectItem }) {
  if (typeof item === "string") {
    return <li className="cv-project__bullet">{item}</li>;
  }

  return (
    <li className="cv-project__bullet">
      <strong className="cv-project__bullet-label">{item.label}:</strong> {item.text}
    </li>
  );
}

function ProjectMeta({ subtitle }: { subtitle: string }) {
  const [headline, ...rest] = subtitle.split(" | ");

  return (
    <p className="cv-project__meta">
      <strong>{headline}</strong>
      {rest.map((part) => (
        <span key={part}>
          <span className="cv-job__meta-sep"> | </span>
          {part}
        </span>
      ))}
    </p>
  );
}

function ProjectsBlock({ data }: Props) {
  return (
    <section className="cv-section">
      <SectionTitle>{data.sectionLabels.projects}</SectionTitle>
      <div className="cv-stack">
        {data.projects.map((project) => (
          <article key={project.title} className="cv-project">
            <p className="cv-project__role">{project.title}</p>
            {project.subtitle ? (
              <ProjectMeta subtitle={project.subtitle} />
            ) : null}
            <ul className="cv-project__list">
              {project.items.map((item) => (
                <ProjectListItem
                  key={
                    typeof item === "string"
                      ? item.slice(0, 40)
                      : item.label
                  }
                  item={item}
                />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationBlock({ data }: Props) {
  return (
    <section className="cv-section cv-section--last">
      <SectionTitle>{data.sectionLabels.education}</SectionTitle>
      <div className="cv-edu-grid">
        <div className="cv-edu-col">
          {data.education.map((item) => (
            <div key={item.title} className="cv-edu-item">
              <p className="cv-edu-item__title">{item.title}</p>
              <p className="cv-edu-item__meta">
                {item.institution} | {item.period}
              </p>
            </div>
          ))}
        </div>
        <div className="cv-edu-col">
          {data.languages.map((item) => (
            <div key={item.language} className="cv-edu-item">
              <p className="cv-edu-item__title">{item.language}</p>
              <p className="cv-edu-item__meta">
                {item.detail
                  ? `${item.level} | ${item.detail}`
                  : item.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CVDocument({ data }: Props) {
  return (
    <article className="cv-page" id="cv-document" lang={data.locale}>
      <header className="cv-header">
        <h1 className="cv-name">{data.name}</h1>
        <p className="cv-title">{data.title}</p>
        <ContactLine data={data} />
      </header>

      <section className="cv-section">
        <SectionTitle>{data.sectionLabels.summary}</SectionTitle>
        <p className="cv-body">{data.summary}</p>
      </section>

      <ExperienceBlock data={data} />
      <ProjectsBlock data={data} />
      <EducationBlock data={data} />
    </article>
  );
}
