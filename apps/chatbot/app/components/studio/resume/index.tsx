"use client";

import useSize from "@react-hook/size";
import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@resume-template-components/shadcn-ui";
import { TemplateMinimalist } from "@resume-template-components/templates/minimalist";
import { FC, useRef, useState } from "react";

import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";
import { ResumeSectionType } from "@models";
import {
  Edit,
  FileDown,
  LayoutList,
  Palette,
  TextCursor,
  Trash2,
  Type,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { useStudioContext } from "../use-context";
import { useData } from "./index.hook";

const zoomLevels = [0.5, 0.75, 1, 1.25, 1.5, 1.75];

export const Resume: FC = () => {
  const data = useData();
  const target = useRef(null);
  const [width, height] = useSize(target);
  const {
    setIsOpenSteps,
    setDeleteResume,
    selectedResume,
    generatePdfLoading,
  } = useStudioContext();

  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    const currentIndex = zoomLevels.indexOf(zoom);
    if (currentIndex < zoomLevels.length - 1) {
      setZoom(zoomLevels[currentIndex + 1]);
    }
  };

  const handleZoomOut = () => {
    const currentIndex = zoomLevels.indexOf(zoom);
    if (currentIndex > 0) {
      setZoom(zoomLevels[currentIndex - 1]);
    }
  };

  return (
    <div className="resume-container h-full">
      <div
        className="my-1 flex justify-center items-center"
        style={{ minWidth: width * zoom }}
      >
        <div className="flex items-center justify-center p-1 bg-background space-x-1 flex-wrap rounded-sm">
          <Button
            variant="outline"
            size="sm"
            onClick={() => data.updateResume()}
            disabled={!data.isChanged}
          >
            <FileDown className="h-4 w-4 mr-2" />
            Save
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Type className="h-4 w-4 mr-2" />
                Font: {data.resumeModel.getFontSize()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Font Size</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.values(ResumeFontSizeEnum).map((value) => (
                <DropdownMenuItem
                  key={value}
                  onSelect={() => {
                    data.callResumeSetMethod("setFontSize", value);
                  }}
                >
                  {value}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Palette className="h-4 w-4 mr-2" />
                Color: {data.resumeModel.getColor()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Color</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.values(ResumeColorEnum).map((value) => (
                <DropdownMenuItem
                  key={value}
                  onSelect={() => {
                    data.callResumeSetMethod("setColor", value);
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full mr-2`}
                    style={{
                      backgroundColor: data.resumeModel.getColorValue(value),
                    }}
                  />
                  {value}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <TextCursor className="h-4 w-4 mr-2" />
                Font: {data.resumeModel.getFontFamily()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Font Family</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.values(ResumeFontFamilyEnum).map((value) => (
                <DropdownMenuItem
                  key={value}
                  onSelect={() => {
                    data.callResumeSetMethod("setFontFamily", value);
                  }}
                >
                  <div style={{ fontFamily: value.toLowerCase() }}>{value}</div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <LayoutList className="h-4 w-4 mr-2" />
                Sections
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sections</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {(
                [
                  {
                    section: "summary",
                    isShow: !!data.resumeModel.getIsShowSummary(),
                  },
                  {
                    section: "experience",
                    isShow: !!data.resumeModel.getIsShowExperience(),
                  },
                  {
                    section: "involvement",
                    isShow: !!data.resumeModel.getIsShowInvolvement(),
                  },
                  {
                    section: "project",
                    isShow: !!data.resumeModel.getIsShowProject(),
                  },
                  {
                    section: "education",
                    isShow: !!data.resumeModel.getIsShowEducation(),
                  },
                  {
                    section: "skill",
                    isShow: !!data.resumeModel.getIsShowSkill(),
                  },
                  {
                    section: "courseWork",
                    isShow: !!data.resumeModel.getIsShowCourseWork(),
                  },
                  {
                    section: "certification",
                    isShow: !!data.resumeModel.getIsShowCertification(),
                  },
                  {
                    section: "hobby",
                    isShow: !!data.resumeModel.getIsShowHobby(),
                  },
                  {
                    section: "language",
                    isShow: !!data.resumeModel.getIsShowLanguage(),
                  },
                ] as { section: ResumeSectionType; isShow: boolean }[]
              ).map(({ section, isShow }) => (
                <DropdownMenuItem
                  key={section}
                  onClick={(e) => {
                    e.preventDefault();
                    isShow
                      ? data.callResumeSetMethod("setHiddenSection", section)
                      : data.callResumeSetMethod("setShowSection", section);
                  }}
                >
                  <Checkbox id={section} className="mr-2" checked={isShow} />
                  <label htmlFor={section}>{section}</label>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center space-x-0">
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-center text-sm px-1">x {zoom}</span>
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpenSteps(true)}
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDeleteResume(selectedResume)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => data.generatePdf()}
            disabled={generatePdfLoading}
          >
            <FileDown className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>
      <div
        className="resume my-4 ml-auto mr-auto relative overflow-hidden"
        style={{ width: width * zoom, height: height * zoom }}
      >
        <div className="shadow-md absolute left-0" ref={target}>
          <TemplateMinimalist
            {...data}
            resume={data.resumeModel.input}
            zoom={zoom}
          />
        </div>
      </div>
    </div>
  );
};
