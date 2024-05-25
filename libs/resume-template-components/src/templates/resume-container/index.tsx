"use client";

import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@/libs/enums/src";
import { useRef, useState } from "react";
import { ResumeModel, ResumeSectionType } from "@models";
import {
  Checkbox,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "../../shadcn-ui";
import useSize from "@react-hook/size";
import { TemplateMinimalist } from "../minimalist";
import { useResume } from "./useResume";

export type ZoomRangeType = 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75;

export interface TemplateMinimalistProps {
  resumeModel: ResumeModel;
}

export function ResumeContainer(props: TemplateMinimalistProps) {
  const data = useResume({ resumeMode: props.resumeModel });
  const [zoom, setZoom] = useState<ZoomRangeType>(1);

  const target = useRef(null);
  const [width, height] = useSize(target);

  return (
    <div className="resume-container bg-slate-100 overflow-scroll">
      <div className="my-3 flex justify-center items-center">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{`FontSize: (${data.resumeModel.getFontSize()})`}</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={data.resumeModel.getFontSize()}>
                {Object.values(ResumeFontSizeEnum).map((value) => (
                  <MenubarRadioItem
                    value={value}
                    onClick={() => {
                      data.callResumeSetMethod("setFontSize", value);
                    }}
                    className="flex gap-3"
                  >
                    {value}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{`Color: (${data.resumeModel.getColor()})`}</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={data.resumeModel.getColor()}>
                {Object.values(ResumeColorEnum).map((value) => (
                  <MenubarRadioItem
                    value={value}
                    onClick={() => {
                      data.callResumeSetMethod("setColor", value);
                    }}
                    className="flex gap-3"
                  >
                    <div
                      className="rounded"
                      style={{
                        backgroundColor: data.resumeModel.getColorValue(value),
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    {value}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{`FontFamily: (${data.resumeModel.getFontFamily()})`}</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={data.resumeModel.getFontFamily()}>
                {Object.values(ResumeFontFamilyEnum).map((value) => (
                  <MenubarRadioItem
                    value={value}
                    onClick={() => {
                      data.callResumeSetMethod("setFontFamily", value);
                    }}
                    className="flex gap-3"
                  >
                    {value}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{`Sections`}</MenubarTrigger>
            <MenubarContent>
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
                <MenubarItem
                  className="flex gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    isShow
                      ? data.callResumeSetMethod("setHiddenSection", section)
                      : data.callResumeSetMethod("setShowSection", section);
                  }}
                >
                  <Checkbox id={section} checked={isShow} />
                  {section}
                </MenubarItem>
              ))}
              <MenubarItem
                className="flex gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  data.callResumeSetMethod(
                    "setIsShowImage",
                    !data.resumeModel.getIsShowImage()
                  );
                }}
              >
                <Checkbox
                  id={"image"}
                  checked={data.resumeModel.getIsShowImage()}
                />
                {"Image"}
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{`Zoom (×${zoom})`} </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={zoom.toString()}>
                {([0.5, 0.75, 1, 1.25, 1.5, 1.75] as ZoomRangeType[]).map(
                  (value) => (
                    <MenubarRadioItem
                      key={value.toString()}
                      value={value.toString()}
                      onClick={() => setZoom(value)}
                    >
                      {`×${value}`}
                    </MenubarRadioItem>
                  )
                )}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div
        className="resume my-4 ml-auto mr-auto relative"
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
}
