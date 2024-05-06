"use client";

import { faker } from "@faker-js/faker";
import { LinkedinIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";
import { PhoneIcon } from "../icons/phone";
import { WebIcon } from "../icons/web";
import { IResume } from "@models";

import "./general.css";
import "./header.css";
import "./summary.css";
import "./experience.css";
import "./project.css";
import "./course-work.css";
import "./certification.css";
import "./education.css";
import "./skill.css";
import "./language.css";
import "./involvement.css";
import "./hobby.css";

export interface TemplateMinimalistProps {
  staticMode?: boolean;
  resume: IResume;
}

export function TemplateMinimalist({
  resume,
  staticMode,
}: TemplateMinimalistProps) {
  const fontSizeText0 = "font-size-7";
  const fontSizeText1 = "font-size-10";
  const fontSizeText2 = "font-size-11";
  const fontSizeHeader0 = "font-size-12";
  const fontSizeHeader1 = "font-size-13";
  const fontSizeHeader2 = "font-size-18";

  const renderHeader = () => {
    return (
      <div className="hr-container">
        <img className="hr-image" src={faker.image.avatar()} />
        <div className="hr-text">
          <div className={["hr-name", fontSizeHeader2].join(" ")}>
            {resume.name}
          </div>
          <div className={["hr-role", fontSizeHeader2].join(" ")}>
            {resume.role}
          </div>
          <div className="hr-social-media">
            <div className={["hr-item", fontSizeText0].join(" ")}>
              <div className="hr-item-icon">
                <LinkedinIcon />
              </div>
              {resume.linkedin}
            </div>
            <div className={["hr-item", fontSizeText0].join(" ")}>
              <div className="hr-item-icon">
                <MailIcon />
              </div>
              {resume.email}
            </div>
            <div className={["hr-item", fontSizeText0].join(" ")}>
              <div className="hr-item-icon">
                <PhoneIcon />
              </div>
              {resume.phoneNumber}
            </div>
            <div className={["hr-item", fontSizeText0].join(" ")}>
              <div className="hr-item-icon">
                <WebIcon />
              </div>
              {resume.website}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="sm-container">
        <div className={["sm-label", fontSizeHeader1].join(" ")}>
          {resume.summaryLabel}
        </div>
        <div className={["sm-text", fontSizeText1].join(" ")}>
          {resume.summary}
        </div>
      </div>
    );
  };

  const renderExperience = () => {
    return (
      <div className="ex-container">
        <div className={["ex-label", fontSizeHeader1].join(" ")}>
          {resume.experienceLabel}
        </div>
        {resume.experiences &&
          resume.experiences.map((experience, index) => (
            <div key={index} className="ex-item">
              <div className={["ex-item-role", fontSizeHeader0].join(" ")}>
                {experience.role}
              </div>
              <div className="ex-item-company-date-location">
                <div className={["ex-item-company", fontSizeText1].join(" ")}>
                  {experience.company}
                </div>
                <div className={["ex-item-date", fontSizeText1].join(" ")}>
                  {experience.fromMonth} {experience.fromYear} -
                  {experience.toMonth} {experience.toYear}
                </div>
                <div className={["ex-item-location", fontSizeText1].join(" ")}>
                  ,{experience.location}
                </div>
              </div>
              {experience.points &&
                experience.points.map((point, index) => (
                  <div
                    key={index}
                    className={["ex-item-point", fontSizeText1].join(" ")}
                  >
                    <div className="ex-item-point-icon">•</div>
                    <div className="ex-item-point-text">{point}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderInvolvement = () => {
    return (
      <div className="iv-container">
        <div className={["iv-label", fontSizeHeader1].join(" ")}>
          {resume.involvementLabel}
        </div>
        {resume.involvements &&
          resume.involvements.map((involvement, index) => (
            <div key={index} className="iv-item">
              <div className={["iv-item-role", fontSizeHeader0].join(" ")}>
                {involvement.role}
              </div>
              <div className="iv-item-company-date-location">
                <div className={["iv-item-company", fontSizeText1].join(" ")}>
                  {involvement.company}
                </div>
                <div className={["iv-item-date", fontSizeText1].join(" ")}>
                  {involvement.fromMonth} {involvement.fromYear} -
                  {involvement.toMonth} {involvement.toYear}
                </div>
                <div className={["iv-item-location", fontSizeText1].join(" ")}>
                  ,{involvement.location}
                </div>
              </div>
              {involvement.points &&
                involvement.points.map((point, index) => (
                  <div
                    key={index}
                    className={["iv-item-point", fontSizeText1].join(" ")}
                  >
                    <div className="iv-item-point-icon">•</div>
                    <div className="iv-item-point-text">{point}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderProject = () => {
    return (
      <div className="pr-container">
        <div className={["pr-label", fontSizeHeader1].join(" ")}>
          {resume.projectLabel}
        </div>
        {resume.projects &&
          resume.projects.map((project, index) => (
            <div key={index} className="pr-item">
              <div className={["pr-item-role", fontSizeHeader0].join(" ")}>
                {project.role}
              </div>
              <div className="pr-item-company-date-location">
                <div className={["pr-item-company", fontSizeText1].join(" ")}>
                  {project.company} {project.url}
                </div>
                <div className={["pr-item-date", fontSizeText1].join(" ")}>
                  {project.fromMonth} {project.fromYear} -{project.toMonth}{" "}
                  {project.toYear}
                </div>
                <div className={["pr-item-location", fontSizeText1].join(" ")}>
                  ,{project.location}
                </div>
              </div>
              {project.points &&
                project.points.map((point, index) => (
                  <div
                    key={index}
                    className={["pr-item-point", fontSizeText1].join(" ")}
                  >
                    <div className="pr-item-point-icon">•</div>
                    <div className="pr-item-point-text">{point}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderEducation = () => {
    return (
      <div className="ed-container">
        <div className={["ed-label", fontSizeHeader1].join(" ")}>
          {resume.educationLabel}
        </div>
        {resume.educations &&
          resume.educations.map((education, index) => (
            <div key={index} className="ed-item">
              <div className={["ed-item-role", fontSizeHeader0].join(" ")}>
                {education.degree}
              </div>
              <div className="ed-item-company-date-location">
                <div className={["ed-item-company", fontSizeText1].join(" ")}>
                  {education.institute} {education.gpa}
                </div>
                <div className={["ed-item-date", fontSizeText1].join(" ")}>
                  {education.fromMonth} {education.fromYear} -
                  {education.toMonth} {education.toYear}
                </div>
                <div className={["ed-item-location", fontSizeText1].join(" ")}>
                  ,{education.location}
                </div>
              </div>
              {education.points &&
                education.points.map((point, index) => (
                  <div
                    key={index}
                    className={["ed-item-point", fontSizeText1].join(" ")}
                  >
                    <div className="ed-item-point-icon">•</div>
                    <div className="ed-item-point-text">{point}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderSkills = () => {
    return (
      <div className="sk-container">
        <div className={["sk-label", fontSizeHeader1].join(" ")}>
          {resume.skillLabel}
        </div>
        {resume.skills &&
          resume.skills.map((item, index) => (
            <div key={index} className={["sk-item", fontSizeText1].join(" ")}>
              <div className="sk-item-icon">•</div>
              <div className="sk-item-text">{item}</div>
            </div>
          ))}
      </div>
    );
  };

  const renderLanguages = () => {
    return (
      <div className="ln-container">
        <div className={["ln-label", fontSizeHeader1].join(" ")}>
          {resume.languageLabel}
        </div>
        {resume.languages &&
          resume.languages.map((item, index) => (
            <div key={index} className={["ln-item", fontSizeText1].join(" ")}>
              <div className="ln-item-icon">•</div>
              <div className="ln-item-text">
                {item.name}:{item.level}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const renderCourseWork = () => {
    return (
      <div className="cw-container">
        <div className={["cw-label", fontSizeHeader1].join(" ")}>
          {resume.courseWorkLabel}
        </div>
        {resume.courseWorks &&
          resume.courseWorks.map((courseWork, index) => (
            <div key={index} className="cw-item">
              <div className={["cw-item-role", fontSizeHeader0].join(" ")}>
                {courseWork.name}
              </div>
              <div className="cw-item-institute-date">
                <div className={["cw-item-institute", fontSizeText1].join(" ")}>
                  {courseWork.institute}
                </div>
                <div className={["cw-item-date", fontSizeText1].join(" ")}>
                  {courseWork.year}
                </div>
              </div>
              <div className={["cw-item-skill", fontSizeText1].join(" ")}>
                {courseWork.skills}
              </div>

              {courseWork.points &&
                courseWork.points.map((point, index) => (
                  <div
                    key={index}
                    className={["cw-item-point", fontSizeText1].join(" ")}
                  >
                    <div className="cw-item-point-icon">•</div>
                    <div className="cw-item-point-text">{point}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderCertification = () => {
    return (
      <div className="cc-container">
        <div className={["cc-label", fontSizeHeader1].join(" ")}>
          {resume.certificationLabel}
        </div>
        {resume.certifications &&
          resume.certifications.map((certification, index) => (
            <div key={index} className="cc-item">
              <div className={["cc-item-role", fontSizeHeader0].join(" ")}>
                {certification.name}
              </div>
              <div className="cc-item-institute-date">
                <div className={["cc-item-institute", fontSizeText1].join(" ")}>
                  {certification.institute}
                </div>
                <div className={["cc-item-date", fontSizeText1].join(" ")}>
                  {certification.year}
                </div>
              </div>

              {certification.points &&
                certification.points.map((point, index) => (
                  <div
                    key={index}
                    className={["cc-item-point", fontSizeText1].join(" ")}
                  >
                    <div className="cc-item-point-icon">•</div>
                    <div className="cc-item-point-text">{point}</div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderHobbies = () => {
    return (
      <div className="hb-container">
        <div className={["hb-label", fontSizeHeader1].join(" ")}>
          {resume.hobbyLabel}
        </div>
        {resume.hobbies &&
          resume.hobbies.map((item, index) => (
            <div key={index} className={["hb-item", fontSizeText1].join(" ")}>
              <div className="hb-item-icon">•</div>
              <div className="hb-item-text">{item}</div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="container">
      {renderHeader()}
      {renderSummary()}
      {renderExperience()}
      {renderProject()}
      {renderEducation()}
      {renderInvolvement()}
      {renderCourseWork()}
      {renderCertification()}
      {renderSkills()}
      {renderLanguages()}
      {renderHobbies()}
    </div>
  );
}
