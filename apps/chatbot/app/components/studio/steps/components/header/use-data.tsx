"use client";

import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../../../use-context";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    resumeSubSectionIndex,
    updateResumeResume,
    loadingUpdateResumeResume,
  } = useStudioContext();

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      role: selectedResume_?.role || "",
      isShowImage: !!selectedResume_?.isShowImage,
      isShowPhoneNumber: !!selectedResume_?.isShowPhoneNumber,
      phoneNumber: selectedResume_?.phoneNumber || "",
      isShowLinkedin: !!selectedResume_?.isShowLinkedin,
      linkedin: selectedResume_?.linkedin || "",
      isShowWebsite: !!selectedResume_?.isShowWebsite,
      website: selectedResume_?.website || "",
      isShowEmail: !!selectedResume_?.isShowEmail,
      email: selectedResume_?.email || "",
      isShowLocation: !!selectedResume_?.isShowLocation,
      location: selectedResume_?.location || "",
      isShowBirthDay: !!selectedResume_?.isShowBirthDay,
      birthDay: selectedResume_?.birthDay || "",
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

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
  };
};
