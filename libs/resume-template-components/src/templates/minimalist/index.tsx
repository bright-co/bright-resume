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
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";
import { RichText2 } from "@resume-template-components/rich-text2";

export interface TemplateMinimalistProps {
  staticMode?: boolean;
  resume: IResume;
}

export function TemplateMinimalist({
  resume,
  staticMode,
}: TemplateMinimalistProps) {
  const { fontSize, fontFamily, color } = resume;

  let subTextFontSize: string;
  let textFontSize: string;
  let subTitleFontSize: string;
  let titleFontSize: string;
  let headerFontSize: string;

  if (fontSize === ResumeFontSizeEnum.xx_small) {
    subTextFontSize = "font-size-6";
    textFontSize = "font-size-7";
    subTitleFontSize = "font-size-9";
    titleFontSize = "font-size-10";
    headerFontSize = "font-size-15";
  } else if (fontSize === ResumeFontSizeEnum.x_small) {
    subTextFontSize = "font-size-7";
    textFontSize = "font-size-8";
    subTitleFontSize = "font-size-10";
    titleFontSize = "font-size-11";
    headerFontSize = "font-size-16";
  } else if (fontSize === ResumeFontSizeEnum.small) {
    subTextFontSize = "font-size-8";
    textFontSize = "font-size-9";
    subTitleFontSize = "font-size-11";
    titleFontSize = "font-size-12";
    headerFontSize = "font-size-17";
  } else if (fontSize === ResumeFontSizeEnum.medium) {
    subTextFontSize = "font-size-9";
    textFontSize = "font-size-10";
    subTitleFontSize = "font-size-12";
    titleFontSize = "font-size-13";
    headerFontSize = "font-size-18";
  } else if (fontSize === ResumeFontSizeEnum.large) {
    subTextFontSize = "font-size-10";
    textFontSize = "font-size-11";
    subTitleFontSize = "font-size-13";
    titleFontSize = "font-size-14";
    headerFontSize = "font-size-18";
  } else if (fontSize === ResumeFontSizeEnum.x_large) {
    subTextFontSize = "font-size-11";
    textFontSize = "font-size-12";
    subTitleFontSize = "font-size-14";
    titleFontSize = "font-size-15";
    headerFontSize = "font-size-18";
  } else if (fontSize === ResumeFontSizeEnum.xx_large) {
    subTextFontSize = "font-size-12";
    textFontSize = "font-size-13";
    subTitleFontSize = "font-size-15";
    titleFontSize = "font-size-16";
    headerFontSize = "font-size-18";
  }

  let fontColorClass = "text-black";
  let borderColorClass = "border-black";
  if (color === ResumeColorEnum.black) {
    fontColorClass = "text-black";
    borderColorClass = "border-black";
  } else if (color === ResumeColorEnum.gray) {
    fontColorClass = "text-gray";
    borderColorClass = "border-gray";
  } else if (color === ResumeColorEnum.red) {
    fontColorClass = "text-red";
    borderColorClass = "border-red";
  } else if (color === ResumeColorEnum.yellow) {
    fontColorClass = "text-yellow";
    borderColorClass = "border-yellow";
  } else if (color === ResumeColorEnum.blue) {
    fontColorClass = "text-blue";
    borderColorClass = "border-blue";
  } else if (color === ResumeColorEnum.green) {
    fontColorClass = "text-green";
    borderColorClass = "border-green";
  } else if (color === ResumeColorEnum.purple) {
    fontColorClass = "text-purple";
    borderColorClass = "border-purple";
  } else if (color === ResumeColorEnum.orange) {
    fontColorClass = "text-orange";
    borderColorClass = "border-orange";
  } else if (color === ResumeColorEnum.brown) {
    fontColorClass = "text-brown";
    borderColorClass = "border-brown";
  }

  let fontFamilyClass = "font-family-arial";
  if (fontFamily === ResumeFontFamilyEnum.arial) {
    fontFamilyClass = "font-family-arial";
  } else if (fontFamily === ResumeFontFamilyEnum.montserrat) {
    fontFamilyClass = "font-family-montserrat";
  } else if (fontFamily === ResumeFontFamilyEnum.nunito) {
    fontFamilyClass = "font-family-nunito";
  } else if (fontFamily === ResumeFontFamilyEnum.roboto) {
    fontFamilyClass = "font-family-roboto";
  } else if (fontFamily === ResumeFontFamilyEnum.raleway) {
    fontFamilyClass = "font-family-raleway";
  }

  const renderHeader = () => {
    return (
      <div className="hr-container">
        <img
          className="hr-image"
          src={faker.image.avatar()}
          alt={resume.name}
        />
        <div className="hr-text">
          <div
            className={["hr-name", headerFontSize, fontColorClass].join(" ")}
          >
            {staticMode ? (
              resume.name
            ) : (
              <RichText2 value={resume.name || ""} onChange={() => {}} />
            )}
          </div>
          <div
            className={["hr-role", headerFontSize, fontColorClass].join(" ")}
          >
            {staticMode ? (
              resume.role
            ) : (
              <RichText2 value={resume.role || ""} onChange={() => {}} />
            )}
          </div>
          <div className="hr-social-media">
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <LinkedinIcon />
              </div>
              {staticMode ? (
                resume.linkedin
              ) : (
                <RichText2 value={resume.linkedin || ""} onChange={() => {}} />
              )}
            </div>
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <MailIcon />
              </div>
              {staticMode ? (
                resume.email
              ) : (
                <RichText2 value={resume.email || ""} onChange={() => {}} />
              )}
            </div>
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <PhoneIcon />
              </div>
              {staticMode ? (
                resume.phoneNumber
              ) : (
                <RichText2
                  value={resume.phoneNumber || ""}
                  onChange={() => {}}
                />
              )}
            </div>
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <WebIcon />
              </div>
              {staticMode ? (
                resume.website
              ) : (
                <RichText2 value={resume.website || ""} onChange={() => {}} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="sm-container">
        <div
          className={[
            "sm-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.summaryLabel
          ) : (
            <RichText2 value={resume.summaryLabel || ""} onChange={() => {}} />
          )}
        </div>
        <div className={["sm-text", textFontSize].join(" ")}>
          {staticMode ? (
            resume.summary
          ) : (
            <RichText2 value={resume.summary || ""} onChange={() => {}} />
          )}
        </div>
      </div>
    );
  };

  const renderExperience = () => {
    return (
      <div className="ex-container">
        <div
          className={[
            "ex-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.experienceLabel
          ) : (
            <RichText2
              value={resume.experienceLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.experiences &&
          resume.experiences.map((experience, index) => (
            <div key={index} className="ex-item">
              <div className={["ex-item-role", subTitleFontSize].join(" ")}>
                {staticMode ? (
                  experience.role
                ) : (
                  <RichText2 value={resume.role || ""} onChange={() => {}} />
                )}
              </div>
              <div className="ex-item-company-date-location">
                <div className={["ex-item-company", textFontSize].join(" ")}>
                  {staticMode ? (
                    experience.company
                  ) : (
                    <RichText2
                      value={experience.company || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className={["ex-item-date", textFontSize].join(" ")}>
                  {experience.fromMonth} {experience.fromYear} -
                  {experience.toMonth} {experience.toYear},
                </div>
                <div className={["ex-item-location", textFontSize].join(" ")}>
                  {staticMode ? (
                    experience.location
                  ) : (
                    <RichText2
                      value={experience.location || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
              </div>
              {experience.points &&
                experience.points.map((point, index) => (
                  <div
                    key={index}
                    className={["ex-item-point", textFontSize].join(" ")}
                  >
                    <div className="ex-item-point-icon">•</div>
                    <div className="ex-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText2 value={point || ""} onChange={() => {}} />
                      )}
                    </div>
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
        <div
          className={[
            "iv-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.involvementLabel
          ) : (
            <RichText2
              value={resume.involvementLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.involvements &&
          resume.involvements.map((involvement, index) => (
            <div key={index} className="iv-item">
              <div className={["iv-item-role", subTitleFontSize].join(" ")}>
                {staticMode ? (
                  resume.role
                ) : (
                  <RichText2
                    value={involvement.role || ""}
                    onChange={() => {}}
                  />
                )}
              </div>
              <div className="iv-item-company-date-location">
                <div className={["iv-item-company", textFontSize].join(" ")}>
                  {staticMode ? (
                    involvement.company
                  ) : (
                    <RichText2
                      value={involvement.company || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className={["iv-item-date", textFontSize].join(" ")}>
                  {involvement.fromMonth} {involvement.fromYear} -
                  {involvement.toMonth} {involvement.toYear},
                </div>
                <div className={["iv-item-location", textFontSize].join(" ")}>
                  {staticMode ? (
                    involvement.location
                  ) : (
                    <RichText2
                      value={involvement.location || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
              </div>
              {involvement.points &&
                involvement.points.map((point, index) => (
                  <div
                    key={index}
                    className={["iv-item-point", textFontSize].join(" ")}
                  >
                    <div className="iv-item-point-icon">•</div>
                    <div className="iv-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText2 value={point || ""} onChange={() => {}} />
                      )}
                    </div>
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
        <div
          className={[
            "pr-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.projectLabel
          ) : (
            <RichText2 value={resume.projectLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.projects &&
          resume.projects.map((project, index) => (
            <div key={index} className="pr-item">
              <div className={["pr-item-role", subTitleFontSize].join(" ")}>
                {staticMode ? (
                  project.role
                ) : (
                  <RichText2 value={project.role || ""} onChange={() => {}} />
                )}
              </div>
              <div className="pr-item-company-date-location">
                <div className={["pr-item-company", textFontSize].join(" ")}>
                  {staticMode ? (
                    project.company
                  ) : (
                    <RichText2
                      value={project.company || ""}
                      onChange={() => {}}
                    />
                  )}
                  {staticMode ? (
                    project.url
                  ) : (
                    <RichText2 value={project.url || ""} onChange={() => {}} />
                  )}
                </div>
                <div className={["pr-item-date", textFontSize].join(" ")}>
                  {project.fromMonth} {project.fromYear} -{project.toMonth}{" "}
                  {project.toYear},
                </div>
                <div className={["pr-item-location", textFontSize].join(" ")}>
                  {staticMode ? (
                    project.location
                  ) : (
                    <RichText2
                      value={project.location || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
              </div>
              {project.points &&
                project.points.map((point, index) => (
                  <div
                    key={index}
                    className={["pr-item-point", textFontSize].join(" ")}
                  >
                    <div className="pr-item-point-icon">•</div>
                    <div className="pr-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText2 value={point || ""} onChange={() => {}} />
                      )}
                    </div>
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
        <div
          className={[
            "ed-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.educationLabel
          ) : (
            <RichText2
              value={resume.educationLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.educations &&
          resume.educations.map((education, index) => (
            <div key={index} className="ed-item">
              <div className={["ed-item-role", subTitleFontSize].join(" ")}>
                {staticMode ? (
                  education.degree
                ) : (
                  <RichText2
                    value={education.degree || ""}
                    onChange={() => {}}
                  />
                )}
              </div>
              <div className="ed-item-company-date-location">
                <div className={["ed-item-company", textFontSize].join(" ")}>
                  {staticMode ? (
                    education.institute
                  ) : (
                    <RichText2
                      value={education.institute || ""}
                      onChange={() => {}}
                    />
                  )}{" "}
                  {staticMode ? (
                    education.gpa
                  ) : (
                    <RichText2
                      value={education.gpa || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className={["ed-item-date", textFontSize].join(" ")}>
                  {education.fromMonth} {education.fromYear} -
                  {education.toMonth} {education.toYear},
                </div>
                <div className={["ed-item-location", textFontSize].join(" ")}>
                  {staticMode ? (
                    education.location
                  ) : (
                    <RichText2
                      value={education.location || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
              </div>
              {education.points &&
                education.points.map((point, index) => (
                  <div
                    key={index}
                    className={["ed-item-point", textFontSize].join(" ")}
                  >
                    <div className="ed-item-point-icon">•</div>
                    <div className="ed-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText2 value={point || ""} onChange={() => {}} />
                      )}
                    </div>
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
        <div
          className={[
            "sk-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.skillLabel
          ) : (
            <RichText2 value={resume.skillLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.skills &&
          resume.skills.map((item, index) => (
            <div key={index} className={["sk-item", textFontSize].join(" ")}>
              <div className="sk-item-icon">•</div>
              <div className="sk-item-text">
                {staticMode ? (
                  item
                ) : (
                  <RichText2 value={item || ""} onChange={() => {}} />
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const renderLanguages = () => {
    return (
      <div className="ln-container">
        <div
          className={[
            "ln-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.languageLabel
          ) : (
            <RichText2 value={resume.languageLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.languages &&
          resume.languages.map((item, index) => (
            <div key={index} className={["ln-item", textFontSize].join(" ")}>
              <div className="ln-item-icon">•</div>
              <div className="ln-item-text">
                {staticMode ? (
                  item.name
                ) : (
                  <RichText2 value={item.name || ""} onChange={() => {}} />
                )}
                <div className="ln-item-divider">{":"}</div>

                {staticMode ? (
                  item.level
                ) : (
                  <RichText2 value={item.level || ""} onChange={() => {}} />
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const renderCourseWork = () => {
    return (
      <div className="cw-container">
        <div
          className={[
            "cw-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.courseWorkLabel
          ) : (
            <RichText2
              value={resume.courseWorkLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.courseWorks &&
          resume.courseWorks.map((courseWork, index) => (
            <div key={index} className="cw-item">
              <div className={["cw-item-role", subTitleFontSize].join(" ")}>
                {staticMode ? (
                  courseWork.name
                ) : (
                  <RichText2
                    value={courseWork.name || ""}
                    onChange={() => {}}
                  />
                )}
              </div>
              <div className="cw-item-institute-date">
                <div className={["cw-item-institute", textFontSize].join(" ")}>
                  {staticMode ? (
                    courseWork.institute
                  ) : (
                    <RichText2
                      value={courseWork.institute || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className={["cw-item-date", textFontSize].join(" ")}>
                  {courseWork.year}
                </div>
              </div>
              <div className={["cw-item-skill", textFontSize].join(" ")}>
                {staticMode ? (
                  courseWork.skills
                ) : (
                  <RichText2
                    value={courseWork.skills || ""}
                    onChange={() => {}}
                  />
                )}
              </div>

              {courseWork.points &&
                courseWork.points.map((point, index) => (
                  <div
                    key={index}
                    className={["cw-item-point", textFontSize].join(" ")}
                  >
                    <div className="cw-item-point-icon">•</div>
                    <div className="cw-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText2 value={point || ""} onChange={() => {}} />
                      )}
                    </div>
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
        <div
          className={[
            "cc-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.certificationLabel
          ) : (
            <RichText2
              value={resume.certificationLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.certifications &&
          resume.certifications.map((certification, index) => (
            <div key={index} className="cc-item">
              <div className={["cc-item-role", subTitleFontSize].join(" ")}>
                {staticMode ? (
                  certification.name
                ) : (
                  <RichText2
                    value={certification.name || ""}
                    onChange={() => {}}
                  />
                )}
              </div>
              <div className="cc-item-institute-date">
                <div className={["cc-item-institute", textFontSize].join(" ")}>
                  {staticMode ? (
                    certification.institute
                  ) : (
                    <RichText2
                      value={certification.institute || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className={["cc-item-date", textFontSize].join(" ")}>
                  {certification.year}
                </div>
              </div>

              {certification.points &&
                certification.points.map((point, index) => (
                  <div
                    key={index}
                    className={["cc-item-point", textFontSize].join(" ")}
                  >
                    <div className="cc-item-point-icon">•</div>
                    <div className="cc-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText2 value={point || ""} onChange={() => {}} />
                      )}
                    </div>
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
        <div
          className={[
            "hb-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
        >
          {staticMode ? (
            resume.hobbyLabel
          ) : (
            <RichText2 value={resume.hobbyLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.hobbies &&
          resume.hobbies.map((item, index) => (
            <div key={index} className={["hb-item", textFontSize].join(" ")}>
              <div className="hb-item-icon">•</div>
              <div className="hb-item-text">
                {staticMode ? (
                  item
                ) : (
                  <RichText2 value={item || ""} onChange={() => {}} />
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className={["container", fontFamilyClass].join(" ")}>
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
