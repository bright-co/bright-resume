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

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowLanguage: !!selectedResume_?.isShowLanguage,
      languageLabel: selectedResume_?.languageLabel || "",
      languages:
        selectedResume_?.languages?.map((language) => ({
          name: language.name || "",
          isShowLevel: !!language.isShowLevel,
          level: language.level || "",
        })) || [],
    }),
    []
  );

  const changeOrderOfLanguages = (index1: number, index2: number) => {
    form.setValue(
      "languages",
      form.getValues("languages")?.map((project, index) => {
        if (index === index1) {
          return form.getValues("languages")![index2];
        } else if (index === index2) {
          return form.getValues("languages")![index1];
        }
        return project;
      }) || []
    );
    form.trigger();
  };

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

  const addNewLanguage = () => {
    form.setValue("languages", [
      ...(form.getValues("languages") || []),
      {
        name: "name",
        isShowLevel: false,
        level: "",
      },
    ]);

    changeSelectedLanguageIndex((form.getValues("languages")?.length || 0) - 1);
  };

  const removeLanguage = (languageIndex: number) => {
    form.setValue("languages", [
      ...(form.getValues("languages") || []).filter(
        (_, index) => index !== languageIndex
      ),
    ]);
    changeSelectedLanguageIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const changeSelectedLanguageIndex = (index: number) => {
    if (index < (form.getValues("languages")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewLanguage,
    removeLanguage,
    changeSelectedLanguageIndex,
    changeOrderOfLanguages,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
  };
};
