"use client";

import { faker } from "@faker-js/faker";

import {
  WebIcon,
  EditIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  UpIcon,
  DownIcon,
  AIIcon,
} from "../icons";

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
import { RichText } from "@resume-template-components/rich-text";
import {
  HoverSectionType,
  ResumeTemplateProps,
} from "../resume-template-props";

export function TemplateMinimalist({
  resume,
  staticMode,
  hoverSection,
  setHoverSection,
  hoverSubSectionPoint,
  setHoverSubSectionPoint,
  hoverSubSection,
  setHoverSubSection,
}: ResumeTemplateProps) {
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

  const onMouseOverSection = (part: HoverSectionType) => {
    if (setHoverSection) {
      setHoverSection(part);
    }
  };

  const onMouseOutSection = () => {
    if (setHoverSection) {
      setHoverSection();
    }
  };

  const onMouseoverSubSection = (
    section: HoverSectionType,
    subSectionIndex: number
  ) => {
    if (setHoverSubSection) {
      setHoverSubSection({ section, subSectionIndex });
    }
  };

  const onMouseOutSubSection = () => {
    if (setHoverSubSection) {
      setHoverSubSection();
    }
  };

  const onMouseoverSubSectionPoint = (
    section: HoverSectionType,
    subSectionIndex: number,
    pointIndex: number
  ) => {
    if (setHoverSubSectionPoint) {
      setHoverSubSectionPoint({ section, subSectionIndex, pointIndex });
    }
  };

  const onMouseOutSectionPoint = () => {
    if (setHoverSubSectionPoint) {
      setHoverSubSectionPoint();
    }
  };

  const renderSectionToolbar = (section: typeof hoverSection) => {
    return (
      <div
        className={[
          "section-toolbar",
          hoverSection === section && "section-toolbar-show",
        ].join(" ")}
      >
        <div className="button">
          <UpIcon />
        </div>
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        <div className="button">
          <DownIcon />
        </div>
      </div>
    );
  };

  const renderSubSectionPointToolbar = (
    section: typeof hoverSection,
    subSectionIndex: number,
    pointIndex: number
  ) => {
    return (
      <div
        className={[
          "section-toolbar-point",
          hoverSubSectionPoint &&
            hoverSubSectionPoint.section === section &&
            hoverSubSectionPoint.subSectionIndex === subSectionIndex &&
            hoverSubSectionPoint.pointIndex === pointIndex &&
            "section-toolbar-point-show",
        ].join(" ")}
      >
        <div className="button">
          <UpIcon />
        </div>
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        <div className="button">
          <DownIcon />
        </div>
      </div>
    );
  };

  const renderSubSectionToolbar = (
    section: typeof hoverSection,
    subSectionIndex: number
  ) => {
    return (
      <div
        className={[
          "sub-section-toolbar",
          hoverSubSection &&
            hoverSubSection.section === section &&
            hoverSubSection.subSectionIndex === subSectionIndex &&
            "sub-section-toolbar-show",
        ].join(" ")}
      >
        <div className="button">
          <UpIcon />
        </div>
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        <div className="button">
          <DownIcon />
        </div>
      </div>
    );
  };

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
              <RichText value={resume.name || ""} onChange={() => {}} />
            )}
          </div>
          <div
            className={["hr-role", headerFontSize, fontColorClass].join(" ")}
          >
            {staticMode ? (
              resume.role
            ) : (
              <RichText value={resume.role || ""} onChange={() => {}} />
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
                <RichText value={resume.linkedin || ""} onChange={() => {}} />
              )}
            </div>
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <MailIcon />
              </div>
              {staticMode ? (
                resume.email
              ) : (
                <RichText value={resume.email || ""} onChange={() => {}} />
              )}
            </div>
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <PhoneIcon />
              </div>
              {staticMode ? (
                resume.phoneNumber
              ) : (
                <RichText
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
                <RichText value={resume.website || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("summary")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("summary")}
          {staticMode ? (
            resume.summaryLabel
          ) : (
            <RichText value={resume.summaryLabel || ""} onChange={() => {}} />
          )}
        </div>
        <div className={["sm-text", textFontSize].join(" ")}>
          {staticMode ? (
            resume.summary
          ) : (
            <RichText value={resume.summary || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("experience")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("experience")}
          {staticMode ? (
            resume.experienceLabel
          ) : (
            <RichText
              value={resume.experienceLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.experiences &&
          resume.experiences.map((experience, subSectionIndex) => (
            <div key={"ex-item" + subSectionIndex} className="ex-item">
              <div
                className="ex-item-header"
                onMouseOver={() =>
                  onMouseoverSubSection("experience", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar("experience", subSectionIndex)}
                <div className={["ex-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    experience.role
                  ) : (
                    <RichText value={resume.role || ""} onChange={() => {}} />
                  )}
                </div>
                <div className="ex-item-company-date-location">
                  <div className={["ex-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      experience.company
                    ) : (
                      <RichText
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
                      <RichText
                        value={experience.location || ""}
                        onChange={() => {}}
                      />
                    )}
                  </div>
                </div>
              </div>
              {experience.points &&
                experience.points.map((point, pointIndex) => (
                  <div
                    key={"ex-item-point" + pointIndex}
                    className={["ex-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseoverSubSectionPoint(
                        "experience",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "experience",
                      subSectionIndex,
                      pointIndex
                    )}
                    <div className="ex-item-point-icon">•</div>
                    <div className="ex-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText value={point || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("involvement")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("involvement")}
          {staticMode ? (
            resume.involvementLabel
          ) : (
            <RichText
              value={resume.involvementLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.involvements &&
          resume.involvements.map((involvement, subSectionIndex) => (
            <div key={"iv-item" + subSectionIndex} className="iv-item">
              <div
                className="iv-item-header"
                onMouseOver={() =>
                  onMouseoverSubSection("involvement", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar("involvement", subSectionIndex)}
                <div className={["iv-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    resume.role
                  ) : (
                    <RichText
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
                      <RichText
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
                      <RichText
                        value={involvement.location || ""}
                        onChange={() => {}}
                      />
                    )}
                  </div>
                </div>
              </div>
              {involvement.points &&
                involvement.points.map((point, pointIndex) => (
                  <div
                    key={"iv-item-point" + pointIndex}
                    className={["iv-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseoverSubSectionPoint(
                        "involvement",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "involvement",
                      subSectionIndex,
                      pointIndex
                    )}
                    <div className="iv-item-point-icon">•</div>
                    <div className="iv-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText value={point || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("project")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("project")}
          {staticMode ? (
            resume.projectLabel
          ) : (
            <RichText value={resume.projectLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.projects &&
          resume.projects.map((project, subSectionIndex) => (
            <div key={"pr-item" + subSectionIndex} className="pr-item">
              <div
                className="pr-item-header"
                onMouseOver={() =>
                  onMouseoverSubSection("project", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar("project", subSectionIndex)}
                <div className={["pr-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    project.role
                  ) : (
                    <RichText value={project.role || ""} onChange={() => {}} />
                  )}
                </div>
                <div className="pr-item-company-date-location">
                  <div className={["pr-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.company
                    ) : (
                      <RichText
                        value={project.company || ""}
                        onChange={() => {}}
                      />
                    )}
                    {staticMode ? (
                      project.url
                    ) : (
                      <RichText value={project.url || ""} onChange={() => {}} />
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
                      <RichText
                        value={project.location || ""}
                        onChange={() => {}}
                      />
                    )}
                  </div>
                </div>
              </div>
              {project.points &&
                project.points.map((point, pointIndex) => (
                  <div
                    key={"pr-item-point" + pointIndex}
                    className={["pr-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseoverSubSectionPoint(
                        "project",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "project",
                      subSectionIndex,
                      pointIndex
                    )}
                    <div className="pr-item-point-icon">•</div>
                    <div className="pr-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText value={point || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("education")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("education")}
          {staticMode ? (
            resume.educationLabel
          ) : (
            <RichText value={resume.educationLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.educations &&
          resume.educations.map((education, subSectionIndex) => (
            <div key={"ed-item" + subSectionIndex} className="ed-item">
              <div
                className="ed-item-header"
                onMouseOver={() =>
                  onMouseoverSubSection("education", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar("education", subSectionIndex)}
                <div className={["ed-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    education.degree
                  ) : (
                    <RichText
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
                      <RichText
                        value={education.institute || ""}
                        onChange={() => {}}
                      />
                    )}{" "}
                    {staticMode ? (
                      education.gpa
                    ) : (
                      <RichText
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
                      <RichText
                        value={education.location || ""}
                        onChange={() => {}}
                      />
                    )}
                  </div>
                </div>
              </div>
              {education.points &&
                education.points.map((point, pointIndex) => (
                  <div
                    key={"ed-item-point" + pointIndex}
                    className={["ed-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseoverSubSectionPoint(
                        "education",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "education",
                      subSectionIndex,
                      pointIndex
                    )}
                    <div className="ed-item-point-icon">•</div>
                    <div className="ed-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText value={point || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("skill")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("skill")}
          {staticMode ? (
            resume.skillLabel
          ) : (
            <RichText value={resume.skillLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.skills &&
          resume.skills.map((item, subSectionIndex) => (
            <div
              key={subSectionIndex}
              className={["sk-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseoverSubSection("skill", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar("skill", subSectionIndex)}
              <div className="sk-item-icon">•</div>
              <div className="sk-item-text">
                {staticMode ? (
                  item
                ) : (
                  <RichText value={item || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("language")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("language")}
          {staticMode ? (
            resume.languageLabel
          ) : (
            <RichText value={resume.languageLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.languages &&
          resume.languages.map((item, subSectionIndex) => (
            <div
              key={"ln-item" + subSectionIndex}
              className={["ln-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseoverSubSection("language", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar("language", subSectionIndex)}
              <div className="ln-item-icon">•</div>
              <div className="ln-item-text">
                {staticMode ? (
                  item.name
                ) : (
                  <RichText value={item.name || ""} onChange={() => {}} />
                )}
                <div className="ln-item-divider">{":"}</div>

                {staticMode ? (
                  item.level
                ) : (
                  <RichText value={item.level || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("courseWork")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("courseWork")}
          {staticMode ? (
            resume.courseWorkLabel
          ) : (
            <RichText
              value={resume.courseWorkLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.courseWorks &&
          resume.courseWorks.map((courseWork, subSectionIndex) => (
            <div key={"cw-item" + subSectionIndex} className="cw-item">
              <div
                className="cw-item-header"
                onMouseOver={() =>
                  onMouseoverSubSection("courseWork", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar("courseWork", subSectionIndex)}
                <div className={["cw-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    courseWork.name
                  ) : (
                    <RichText
                      value={courseWork.name || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className="cw-item-institute-date">
                  <div
                    className={["cw-item-institute", textFontSize].join(" ")}
                  >
                    {staticMode ? (
                      courseWork.institute
                    ) : (
                      <RichText
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
                    <RichText
                      value={courseWork.skills || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
              </div>
              {courseWork.points &&
                courseWork.points.map((point, pointIndex) => (
                  <div
                    key={"cw-item-point" + pointIndex}
                    className={["cw-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseoverSubSectionPoint(
                        "courseWork",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "courseWork",
                      subSectionIndex,
                      pointIndex
                    )}
                    <div className="cw-item-point-icon">•</div>
                    <div className="cw-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText value={point || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("certification")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("certification")}
          {staticMode ? (
            resume.certificationLabel
          ) : (
            <RichText
              value={resume.certificationLabel || ""}
              onChange={() => {}}
            />
          )}
        </div>
        {resume.certifications &&
          resume.certifications.map((certification, subSectionIndex) => (
            <div key={"cc-item" + subSectionIndex} className="cc-item">
              <div
                className="cc-item-header"
                onMouseOver={() =>
                  onMouseoverSubSection("certification", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar("certification", subSectionIndex)}
                <div className={["cc-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    certification.name
                  ) : (
                    <RichText
                      value={certification.name || ""}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div className="cc-item-institute-date">
                  <div
                    className={["cc-item-institute", textFontSize].join(" ")}
                  >
                    {staticMode ? (
                      certification.institute
                    ) : (
                      <RichText
                        value={certification.institute || ""}
                        onChange={() => {}}
                      />
                    )}
                  </div>
                  <div className={["cc-item-date", textFontSize].join(" ")}>
                    {certification.year}
                  </div>
                </div>
              </div>
              {certification.points &&
                certification.points.map((point, pointIndex) => (
                  <div
                    key={"cc-item-point" + pointIndex}
                    className={["cc-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseoverSubSectionPoint(
                        "certification",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "certification",
                      subSectionIndex,
                      pointIndex
                    )}
                    <div className="cc-item-point-icon">•</div>
                    <div className="cc-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText value={point || ""} onChange={() => {}} />
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
          onMouseOver={() => onMouseOverSection("hobby")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("hobby")}
          {staticMode ? (
            resume.hobbyLabel
          ) : (
            <RichText value={resume.hobbyLabel || ""} onChange={() => {}} />
          )}
        </div>
        {resume.hobbies &&
          resume.hobbies.map((item, subSectionIndex) => (
            <div
              key={subSectionIndex + "hb-item"}
              className={["hb-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseoverSubSection("hobby", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar("hobby", subSectionIndex)}
              <div className="hb-item-icon">•</div>
              <div className="hb-item-text">
                {staticMode ? (
                  item
                ) : (
                  <RichText value={item || ""} onChange={() => {}} />
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
