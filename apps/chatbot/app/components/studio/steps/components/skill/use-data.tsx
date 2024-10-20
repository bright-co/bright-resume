"use client";

import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../../../use-context";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    resumeSubSectionIndex,
    setResumeSubSectionIndex,
    updateResumeResume,
    loadingUpdateResumeResume,
  } = useStudioContext();

  const [isOpenRemoveDialogIndex, setIsOpenRemoveDialogIndex] = useState<
    number | undefined
  >();

  const changeOrderOfSkills = (index1: number, index2: number) => {
    form.setValue(
      "skills",
      form.getValues("skills")?.map((project, index) => {
        if (index === index1) {
          return form.getValues("skills")![index2];
        } else if (index === index2) {
          return form.getValues("skills")![index1];
        }
        return project;
      }) || []
    );
    form.trigger();
  };

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowSkill: !!selectedResume_?.isShowSkill,
      skillLabel: selectedResume_?.skillLabel || "",
      skills:
        selectedResume_?.skills?.map((skill) => ({
          point: skill.point || "",
          isShow: !!skill.isShow,
        })) || [],
    }),
    []
  );

  const form = useForm<UpdateResumeResumeInputs>({
    resolver: classValidatorResolver(UpdateResumeResumeInputs),
    mode: "onChange",
    defaultValues: getFormValues(selectedResumeId!, selectedResume),
  });

  useEffect(() => {
    form.reset(getFormValues(selectedResumeId!, selectedResume));
  }, [form, selectedResume, selectedResumeId, getFormValues]);

  const onSubmit: SubmitHandler<UpdateResumeResumeInputs> = (
    updateResumeResumeInputs
  ) => {
    updateResumeResume({ variables: { updateResumeResumeInputs } });
  };

  const addNewSkill = () => {
    form.setValue("skills", [
      ...(form.getValues("skills") || []),
      {
        point: "",
        isShow: true,
      },
    ]);

    changeSelectedSkillIndex((form.getValues("skills")?.length || 0) - 1);
  };

  const removeSkill = (skillIndex: number) => {
    form.setValue("skills", [
      ...(form.getValues("skills") || []).filter(
        (_, index) => index !== skillIndex
      ),
    ]);
    changeSelectedSkillIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const changeSelectedSkillIndex = (index: number) => {
    if (index < (form.getValues("skills")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewSkill,
    removeSkill,
    changeSelectedSkillIndex,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
    changeOrderOfSkills,
  };
};
