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
  ResumeSectionType,
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
  onChangeSectionOrder,
  onChangeSubSectionIndex,
  onChangeSubSectionPointIndex,
  updateResume,
  updateResumeProject,
  updateResumeCertification,
  updateResumeCourseWork,
  updateResumeEducation,
  updateResumeExperience,
  updateResumeInvolvement,
  updateResumeLanguage,
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

  const onMouseOverSection = (part: ResumeSectionType) => {
    if (setHoverSection) {
      setHoverSection(part);
    }
  };

  const onMouseOutSection = () => {
    if (setHoverSection) {
      setHoverSection();
    }
  };

  const onMouseOverSubSection = (
    section: ResumeSectionType,
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

  const onMouseOverSubSectionPoint = (
    section: ResumeSectionType,
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

  const renderSectionToolbar = (
    section: typeof hoverSection,
    order: number | undefined
  ) => {
    return (
      <div
        className={[
          "section-toolbar",
          hoverSection === section && "section-toolbar-show",
        ].join(" ")}
      >
        {onChangeSectionOrder && order && order > 1 && (
          <div
            className="button"
            onClick={() => onChangeSectionOrder(section, order - 1)}
          >
            <UpIcon />
          </div>
        )}
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        {onChangeSectionOrder && order && order < 10 && (
          <div
            className="button"
            onClick={() => onChangeSectionOrder(section, order + 1)}
          >
            <DownIcon />
          </div>
        )}
      </div>
    );
  };

  const renderSubSectionToolbar = (
    section: typeof hoverSection,
    subSectionIndex: number,
    subSectionLength: number
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
        {onChangeSubSectionIndex &&
          subSectionIndex > 0 &&
          subSectionLength > 1 && (
            <div
              className="button"
              onClick={() =>
                onChangeSubSectionIndex(
                  section,
                  subSectionIndex,
                  subSectionIndex - 1
                )
              }
            >
              <UpIcon />
            </div>
          )}
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        {onChangeSubSectionIndex && subSectionIndex < subSectionLength - 1 && (
          <div
            className="button"
            onClick={() =>
              onChangeSubSectionIndex(
                section,
                subSectionIndex,
                subSectionIndex + 1
              )
            }
          >
            <DownIcon />
          </div>
        )}
      </div>
    );
  };

  const renderSubSectionPointToolbar = (
    section: typeof hoverSection,
    subSectionIndex: number,
    pointIndex: number,
    pointLength: number
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
        {onChangeSubSectionPointIndex && pointIndex > 0 && pointLength > 1 && (
          <div
            className="button"
            onClick={() =>
              onChangeSubSectionPointIndex(
                section,
                subSectionIndex,
                pointIndex,
                pointIndex - 1
              )
            }
          >
            <UpIcon />
          </div>
        )}
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        {onChangeSubSectionPointIndex && pointIndex < pointLength - 1 && (
          <div
            className="button"
            onClick={() =>
              onChangeSubSectionPointIndex(
                section,
                subSectionIndex,
                pointIndex,
                pointIndex + 1
              )
            }
          >
            <DownIcon />
          </div>
        )}
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
              <RichText
                value={resume.name || ""}
                onChange={(value) =>
                  updateResume && updateResume("setName", value)
                }
              />
            )}
          </div>
          <div
            className={["hr-role", headerFontSize, fontColorClass].join(" ")}
          >
            {staticMode ? (
              resume.role
            ) : (
              <RichText
                value={resume.role || ""}
                onChange={(value) =>
                  updateResume && updateResume("setRole", value)
                }
              />
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
                <RichText
                  value={resume.linkedin || ""}
                  onChange={(value) =>
                    updateResume && updateResume("setLinkedin", value)
                  }
                />
              )}
            </div>
            <div className={["hr-item", subTextFontSize].join(" ")}>
              <div className="hr-item-icon">
                <MailIcon />
              </div>
              {staticMode ? (
                resume.email
              ) : (
                <RichText
                  value={resume.email || ""}
                  onChange={(value) =>
                    updateResume && updateResume("setEmail", value)
                  }
                />
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
                  onChange={(value) =>
                    updateResume && updateResume("setPhoneNumber", value)
                  }
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
                <RichText
                  value={resume.website || ""}
                  onChange={(value) =>
                    updateResume && updateResume("setWebsite", value)
                  }
                />
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
          {renderSectionToolbar("summary", resume.summaryOrder)}
          {staticMode ? (
            resume.summaryLabel
          ) : (
            <RichText
              value={resume.summaryLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setSummaryLabel", value)
              }
            />
          )}
        </div>
        <div className={["sm-text", textFontSize].join(" ")}>
          {staticMode ? (
            resume.summary
          ) : (
            <RichText
              value={resume.summary || ""}
              onChange={(value) =>
                updateResume && updateResume("setSummary", value)
              }
            />
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
          {renderSectionToolbar("experience", resume.experienceOrder)}
          {staticMode ? (
            resume.experienceLabel
          ) : (
            <RichText
              value={resume.experienceLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setExperienceLabel", value)
              }
            />
          )}
        </div>
        {resume.experiences &&
          resume.experiences.map((experience, subSectionIndex) => (
            <div key={"ex-item" + subSectionIndex} className="ex-item">
              <div
                className="ex-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("experience", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "experience",
                  subSectionIndex,
                  resume.experiences?.length || 0
                )}
                <div className={["ex-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    experience.role
                  ) : (
                    <RichText
                      value={experience.role || ""}
                      onChange={(value) =>
                        updateResumeExperience &&
                        updateResumeExperience(
                          subSectionIndex,
                          "setRole",
                          value
                        )
                      }
                    />
                  )}
                </div>
                <div className="ex-item-company-date-location">
                  <div className={["ex-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      experience.company
                    ) : (
                      <RichText
                        value={experience.company || ""}
                        onChange={(value) =>
                          updateResumeExperience &&
                          updateResumeExperience(
                            subSectionIndex,
                            "setCompany",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["ex-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      experience.fromMonth
                    ) : (
                      <RichText
                        value={experience.fromMonth || ""}
                        onChange={(value) =>
                          updateResumeExperience &&
                          updateResumeExperience(
                            subSectionIndex,
                            "setFromMonth",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      experience.fromYear
                    ) : (
                      <RichText
                        value={experience.fromYear || ""}
                        onChange={(value) =>
                          updateResumeExperience &&
                          updateResumeExperience(
                            subSectionIndex,
                            "setFromYear",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      experience.toMonth
                    ) : (
                      <RichText
                        value={experience.toMonth || ""}
                        onChange={(value) =>
                          updateResumeExperience &&
                          updateResumeExperience(
                            subSectionIndex,
                            "setToMonth",
                            value
                          )
                        }
                      />
                    )}{" "}
                    {staticMode ? (
                      experience.toYear
                    ) : (
                      <RichText
                        value={experience.toYear || ""}
                        onChange={(value) =>
                          updateResumeExperience &&
                          updateResumeExperience(
                            subSectionIndex,
                            "setToYear",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["ex-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      experience.location
                    ) : (
                      <RichText
                        value={experience.location || ""}
                        onChange={(value) =>
                          updateResumeExperience &&
                          updateResumeExperience(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
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
                      onMouseOverSubSectionPoint(
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
                      pointIndex,
                      experience.points?.length || 0
                    )}
                    <div className="ex-item-point-icon">•</div>
                    <div className="ex-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          value={point || ""}
                          onChange={(value) =>
                            updateResumeExperience &&
                            updateResumeExperience(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
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
          {renderSectionToolbar("involvement", resume.involvementOrder)}
          {staticMode ? (
            resume.involvementLabel
          ) : (
            <RichText
              value={resume.involvementLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setInvolvementLabel", value)
              }
            />
          )}
        </div>
        {resume.involvements &&
          resume.involvements.map((involvement, subSectionIndex) => (
            <div key={"iv-item" + subSectionIndex} className="iv-item">
              <div
                className="iv-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("involvement", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "involvement",
                  subSectionIndex,
                  resume.involvements?.length || 0
                )}
                <div className={["iv-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    resume.role
                  ) : (
                    <RichText
                      value={involvement.role || ""}
                      onChange={(value) =>
                        updateResumeInvolvement &&
                        updateResumeInvolvement(
                          subSectionIndex,
                          "setRole",
                          value
                        )
                      }
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
                        onChange={(value) =>
                          updateResumeInvolvement &&
                          updateResumeInvolvement(
                            subSectionIndex,
                            "setCompany",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["iv-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      involvement.fromMonth
                    ) : (
                      <RichText
                        value={involvement.fromMonth || ""}
                        onChange={(value) =>
                          updateResumeInvolvement &&
                          updateResumeInvolvement(
                            subSectionIndex,
                            "setFromMonth",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      involvement.fromYear
                    ) : (
                      <RichText
                        value={involvement.fromYear || ""}
                        onChange={(value) =>
                          updateResumeInvolvement &&
                          updateResumeInvolvement(
                            subSectionIndex,
                            "setFromYear",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      involvement.toMonth
                    ) : (
                      <RichText
                        value={involvement.toMonth || ""}
                        onChange={(value) =>
                          updateResumeInvolvement &&
                          updateResumeInvolvement(
                            subSectionIndex,
                            "setToMonth",
                            value
                          )
                        }
                      />
                    )}{" "}
                    {staticMode ? (
                      involvement.toYear
                    ) : (
                      <RichText
                        value={involvement.toYear || ""}
                        onChange={(value) =>
                          updateResumeInvolvement &&
                          updateResumeInvolvement(
                            subSectionIndex,
                            "setToYear",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["iv-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      involvement.location
                    ) : (
                      <RichText
                        value={involvement.location || ""}
                        onChange={(value) =>
                          updateResumeInvolvement &&
                          updateResumeInvolvement(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
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
                      onMouseOverSubSectionPoint(
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
                      pointIndex,
                      involvement.points?.length || 0
                    )}
                    <div className="iv-item-point-icon">•</div>
                    <div className="iv-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          value={point || ""}
                          onChange={(value) =>
                            updateResumeInvolvement &&
                            updateResumeInvolvement(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
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
          {renderSectionToolbar("project", resume.projectOrder)}
          {staticMode ? (
            resume.projectLabel
          ) : (
            <RichText
              value={resume.projectLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setProjectLabel", value)
              }
            />
          )}
        </div>
        {resume.projects &&
          resume.projects.map((project, subSectionIndex) => (
            <div key={"pr-item" + subSectionIndex} className="pr-item">
              <div
                className="pr-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("project", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "project",
                  subSectionIndex,
                  resume.projects?.length || 0
                )}
                <div className={["pr-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    project.role
                  ) : (
                    <RichText
                      value={project.role || ""}
                      onChange={(value) =>
                        updateResumeProject &&
                        updateResumeProject(subSectionIndex, "setRole", value)
                      }
                    />
                  )}
                </div>
                <div className="pr-item-company-date-location">
                  <div className={["pr-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.company
                    ) : (
                      <RichText
                        value={project.company || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(
                            subSectionIndex,
                            "setCompany",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      project.url
                    ) : (
                      <RichText
                        value={project.url || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(subSectionIndex, "setUrl", value)
                        }
                      />
                    )}
                  </div>
                  <div className={["pr-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.fromMonth
                    ) : (
                      <RichText
                        value={project.fromMonth || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(
                            subSectionIndex,
                            "setFromMonth",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      project.fromYear
                    ) : (
                      <RichText
                        value={project.fromYear || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(
                            subSectionIndex,
                            "setFromYear",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      project.toMonth
                    ) : (
                      <RichText
                        value={project.toMonth || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(
                            subSectionIndex,
                            "setToMonth",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      project.toYear
                    ) : (
                      <RichText
                        value={project.toYear || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(
                            subSectionIndex,
                            "setToYear",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["pr-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.location
                    ) : (
                      <RichText
                        value={project.location || ""}
                        onChange={(value) =>
                          updateResumeProject &&
                          updateResumeProject(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
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
                      onMouseOverSubSectionPoint(
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
                      pointIndex,
                      project.points?.length || 0
                    )}
                    <div className="pr-item-point-icon">•</div>
                    <div className="pr-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          value={point || ""}
                          onChange={(value) =>
                            updateResumeProject &&
                            updateResumeProject(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
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
          {renderSectionToolbar("education", resume.educationOrder)}
          {staticMode ? (
            resume.educationLabel
          ) : (
            <RichText
              value={resume.educationLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setEducationLabel", value)
              }
            />
          )}
        </div>
        {resume.educations &&
          resume.educations.map((education, subSectionIndex) => (
            <div key={"ed-item" + subSectionIndex} className="ed-item">
              <div
                className="ed-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("education", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "education",
                  subSectionIndex,
                  resume.educations?.length || 0
                )}
                <div className={["ed-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    education.degree
                  ) : (
                    <RichText
                      value={education.degree || ""}
                      onChange={(value) =>
                        updateResumeEducation &&
                        updateResumeEducation(
                          subSectionIndex,
                          "setDegree",
                          value
                        )
                      }
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
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setInstitute",
                            value
                          )
                        }
                      />
                    )}{" "}
                    {staticMode ? (
                      education.gpa
                    ) : (
                      <RichText
                        value={education.gpa || ""}
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setGpa",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["ed-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      education.fromMonth
                    ) : (
                      <RichText
                        value={education.fromMonth || ""}
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setFromMonth",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      education.fromYear
                    ) : (
                      <RichText
                        value={education.fromYear || ""}
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setFromYear",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      education.toMonth
                    ) : (
                      <RichText
                        value={education.toMonth || ""}
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setToMonth",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      education.toYear
                    ) : (
                      <RichText
                        value={education.toYear || ""}
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setToYear",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["ed-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      education.location
                    ) : (
                      <RichText
                        value={education.location || ""}
                        onChange={(value) =>
                          updateResumeEducation &&
                          updateResumeEducation(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
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
                      onMouseOverSubSectionPoint(
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
                      pointIndex,
                      education.points?.length || 0
                    )}
                    <div className="ed-item-point-icon">•</div>
                    <div className="ed-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          value={point || ""}
                          onChange={(value) =>
                            updateResumeEducation &&
                            updateResumeEducation(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
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
          {renderSectionToolbar("skill", resume.skillOrder)}
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
                onMouseOverSubSection("skill", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar(
                "skill",
                subSectionIndex,
                resume.skills?.length || 0
              )}
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
          {renderSectionToolbar("language", resume.languageOrder)}
          {staticMode ? (
            resume.languageLabel
          ) : (
            <RichText
              value={resume.languageLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setLanguageLabel", value)
              }
            />
          )}
        </div>
        {resume.languages &&
          resume.languages.map((item, subSectionIndex) => (
            <div
              key={"ln-item" + subSectionIndex}
              className={["ln-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseOverSubSection("language", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar(
                "language",
                subSectionIndex,
                resume.languages?.length || 0
              )}
              <div className="ln-item-icon">•</div>
              <div className="ln-item-text">
                {staticMode ? (
                  item.name
                ) : (
                  <RichText
                    value={item.name || ""}
                    onChange={(value) =>
                      updateResumeLanguage &&
                      updateResumeLanguage(subSectionIndex, "setName", value)
                    }
                  />
                )}
                <div className="ln-item-divider">{":"}</div>

                {staticMode ? (
                  item.level
                ) : (
                  <RichText
                    value={item.level || ""}
                    onChange={(value) =>
                      updateResumeLanguage &&
                      updateResumeLanguage(subSectionIndex, "setLevel", value)
                    }
                  />
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
          {renderSectionToolbar("courseWork", resume.courseWorkOrder)}
          {staticMode ? (
            resume.courseWorkLabel
          ) : (
            <RichText
              value={resume.courseWorkLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setCourseWorkLabel", value)
              }
            />
          )}
        </div>
        {resume.courseWorks &&
          resume.courseWorks.map((courseWork, subSectionIndex) => (
            <div key={"cw-item" + subSectionIndex} className="cw-item">
              <div
                className="cw-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("courseWork", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "courseWork",
                  subSectionIndex,
                  resume.courseWorks?.length || 0
                )}
                <div className={["cw-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    courseWork.name
                  ) : (
                    <RichText
                      value={courseWork.name || ""}
                      onChange={(value) =>
                        updateResumeCourseWork &&
                        updateResumeCourseWork(
                          subSectionIndex,
                          "setName",
                          value
                        )
                      }
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
                        onChange={(value) =>
                          updateResumeCourseWork &&
                          updateResumeCourseWork(
                            subSectionIndex,
                            "setInstitute",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["cw-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      courseWork.year
                    ) : (
                      <RichText
                        value={courseWork.year || ""}
                        onChange={(value) =>
                          updateResumeCourseWork &&
                          updateResumeCourseWork(
                            subSectionIndex,
                            "setYear",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
                <div className={["cw-item-skill", textFontSize].join(" ")}>
                  {staticMode ? (
                    courseWork.skills
                  ) : (
                    <RichText
                      value={courseWork.skills || ""}
                      onChange={(value) =>
                        updateResumeCourseWork &&
                        updateResumeCourseWork(
                          subSectionIndex,
                          "setSkills",
                          value
                        )
                      }
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
                      onMouseOverSubSectionPoint(
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
                      pointIndex,
                      courseWork.points?.length || 0
                    )}
                    <div className="cw-item-point-icon">•</div>
                    <div className="cw-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          value={point || ""}
                          onChange={(value) =>
                            updateResumeCourseWork &&
                            updateResumeCourseWork(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
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
          {renderSectionToolbar("certification", resume.certificationOrder)}
          {staticMode ? (
            resume.certificationLabel
          ) : (
            <RichText
              value={resume.certificationLabel || ""}
              onChange={(value) =>
                updateResume && updateResume("setCertificationLabel", value)
              }
            />
          )}
        </div>
        {resume.certifications &&
          resume.certifications.map((certification, subSectionIndex) => (
            <div key={"cc-item" + subSectionIndex} className="cc-item">
              <div
                className="cc-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("certification", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "certification",
                  subSectionIndex,
                  resume.certifications?.length || 0
                )}
                <div className={["cc-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    certification.name
                  ) : (
                    <RichText
                      value={certification.name || ""}
                      onChange={(value) =>
                        updateResumeCertification &&
                        updateResumeCertification(
                          subSectionIndex,
                          "setName",
                          value
                        )
                      }
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
                        onChange={(value) =>
                          updateResumeCertification &&
                          updateResumeCertification(
                            subSectionIndex,
                            "setInstitute",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["cc-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      certification.year
                    ) : (
                      <RichText
                        value={certification.year || ""}
                        onChange={(value) =>
                          updateResumeCertification &&
                          updateResumeCertification(
                            subSectionIndex,
                            "setYear",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              {certification.points &&
                certification.points.map((point, pointIndex) => (
                  <div
                    key={"cc-item-point" + pointIndex}
                    className={["cc-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseOverSubSectionPoint(
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
                      pointIndex,
                      certification.points?.length || 0
                    )}
                    <div className="cc-item-point-icon">•</div>
                    <div className="cc-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          value={point || ""}
                          onChange={(value) =>
                            updateResumeCertification &&
                            updateResumeCertification(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
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
          {renderSectionToolbar("hobby", resume.hobbyOrder)}
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
                onMouseOverSubSection("hobby", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar(
                "hobby",
                subSectionIndex,
                resume.hobbies?.length || 0
              )}
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
      {[
        {
          title: "summary",
          order: resume.summaryOrder || 1,
          render: renderSummary,
        },
        {
          title: "experience",
          order: resume.experienceOrder || 2,
          render: renderExperience,
        },
        {
          title: "project",
          order: resume.projectOrder || 3,
          render: renderProject,
        },
        {
          title: "education",
          order: resume.educationOrder || 4,
          render: renderEducation,
        },
        {
          title: "involvement",
          order: resume.involvementOrder || 5,
          render: renderInvolvement,
        },
        {
          title: "courseWork",
          order: resume.courseWorkOrder || 6,
          render: renderCourseWork,
        },
        {
          title: "certification",
          order: resume.certificationOrder || 7,
          render: renderCertification,
        },
        {
          title: "skill",
          order: resume.skillOrder || 8,
          render: renderSkills,
        },
        {
          title: "language",
          order: resume.languageOrder || 9,
          render: renderLanguages,
        },
        {
          title: "hobby",
          order: resume.hobbyOrder || 10,
          render: renderHobbies,
        },
      ]
        .sort((item1, item2) => item1.order - item2.order)
        .map((item) => item.render())}
    </div>
  );
}
