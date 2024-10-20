"use client";

import { AutoExpandingInput } from "@resume-template-components/auto-expanding-input";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  ScrollArea,
  Separator,
  Switch,
} from "@resume-template-components/shadcn-ui";
import { ChevronDown, ChevronUp, PlusCircle, Save, Trash2 } from "lucide-react";
import { FC } from "react";

import clsx from "clsx";
import { useData } from "./use-data";
import { TEXTS } from "./texts";

export const Education: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedEducationIndex,
    addNewEducation,
    addNewPoint,
    removePoint,
    removeEducation,
    changeOrderOfEducationPoints,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
    changeOrderOfEducations,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="educationLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.educationLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowEducation"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center space-y-0 space-x-2 mr-3">
                  <FormControl>
                    <Switch
                      id="show-location"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel htmlFor="show-location">
                    {TEXTS.header.showEducationsLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          className="mt-2"
          size={"sm"}
          type="submit"
          disabled={!form.formState.isValid}
        >
          <Save className="mr-2 h-4 w-4" /> {TEXTS.header.saveChangesButton}
        </Button>
      </div>
    );
  };

  const renderAddNewButton = () => {
    if (form.getValues("educations")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewEducation.noEducationSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewEducation.noEducationSelectedMessage}
            </p>
            <Button onClick={addNewEducation}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewEducation.addNewEducationButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderEducationsForm = () => {
    if (form.getValues("educations")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderEducationCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewEducation()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewEducation.addNewEducationButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderEducationForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderEducationCards = () => {
    return form.getValues("educations")?.map((education, educationIndex) => (
      <Card
        key={"education" + educationIndex}
        className={`relative cursor-pointer transition-all duration-200 mb-2 ${
          educationIndex === resumeSubSectionIndex
            ? "bg-primary/10 shadow-md"
            : "hover:bg-secondary/50"
        }`}
        onClick={() => changeSelectedEducationIndex(educationIndex)}
      >
        <div className="absolute left-1 top-1 flex flex-col ml-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfEducations(educationIndex, educationIndex - 1);
            }}
            disabled={educationIndex === 0}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfEducations(educationIndex, educationIndex + 1);
            }}
            disabled={
              educationIndex === form.getValues("educations")!.length - 1
            }
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-2 pl-14">
          <div className="font-semibold">
            {education.degree || TEXTS.educationCard.newEducationLabel}
          </div>
          <div className="text-sm text-gray-500">{education.institute}</div>
          <div className="mt-2 flex justify-between space-x-2 items-center">
            <div className="flex justify-between space-x-2 items-center">
              <FormField
                control={form.control}
                name={`educations.${educationIndex}.isShow`}
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center space-y-0">
                    <FormControl>
                      <Switch
                        id={`show-${educationIndex}`}
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {field.value
                        ? TEXTS.educationCard.visibleLabel
                        : TEXTS.educationCard.hiddenLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Dialog
              open={isOpenRemoveDialogIndex === educationIndex}
              onOpenChange={(value) => {
                !value && setIsOpenRemoveDialogIndex(undefined);
              }}
            >
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpenRemoveDialogIndex(educationIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {TEXTS.educationCard.deleteConfirmationTitle}
                  </DialogTitle>
                  <DialogDescription>
                    {TEXTS.educationCard.deleteConfirmationMessage}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      removeEducation(educationIndex);
                      setIsOpenRemoveDialogIndex(undefined);
                    }}
                  >
                    {TEXTS.educationCard.deleteButton}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderEducationForm = () => {
    return form.watch("educations")?.map((education, educationIndex) => (
      <Card
        key={"education-" + educationIndex}
        className={clsx(
          "min-h-full",
          educationIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <FormField
            control={form.control}
            name={`educations.${educationIndex}.degree`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{TEXTS.educationForm.degreeLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.educationForm.degreePlaceholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Separator className="my-1" />
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`educations.${educationIndex}.isShowInstitute`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.educationForm.instituteLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`educations.${educationIndex}.institute`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(
                    `educations.${educationIndex}.isShowInstitute`
                  ) && "hidden"
                )}
              >
                <FormLabel>{TEXTS.educationForm.instituteLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.educationForm.institutePlaceholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Separator className="my-1" />
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`educations.${educationIndex}.isShowGpa`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.educationForm.showGpaLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`educations.${educationIndex}.gpa`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(`educations.${educationIndex}.isShowGpa`) &&
                    "hidden"
                )}
              >
                <FormLabel>{TEXTS.educationForm.gpaLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.educationForm.gpaPlaceholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="my-1" />
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`educations.${educationIndex}.isShowLocation`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.educationForm.showLocationLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`educations.${educationIndex}.location`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(
                    `educations.${educationIndex}.isShowLocation`
                  ) && "hidden"
                )}
              >
                <FormLabel>{TEXTS.educationForm.locationLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.educationForm.locationPlaceholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="my-1" />
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`educations.${educationIndex}.isShowDate`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.educationForm.showDateLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "grid grid-cols-2 gap-4",
              !form.getValues(`educations.${educationIndex}.isShowDate`) &&
                "hidden"
            )}
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`educations.${educationIndex}.from`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.educationForm.fromLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.educationForm.fromPlaceholder}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`educations.${educationIndex}.to`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.educationForm.toLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.educationForm.toPlaceholder}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator className="my-1" />
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`educations.${educationIndex}.isShowPoints`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.educationForm.showPointsLabel}{" "}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "space-y-2",
              !form.getValues(`educations.${educationIndex}.isShowPoints`) &&
                "hidden"
            )}
          >
            {education?.points?.map((_, pointIndex) => (
              <div
                key={`educations.${educationIndex}.points.${pointIndex}`}
                className="flex space-x-1 mb-2"
              >
                <div className="flex flex-col">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      changeOrderOfEducationPoints(
                        educationIndex,
                        pointIndex,
                        pointIndex - 1
                      )
                    }
                    disabled={pointIndex === 0}
                    className="h-5 w-7 pb-0"
                  >
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      changeOrderOfEducationPoints(
                        educationIndex,
                        pointIndex,
                        pointIndex + 1
                      )
                    }
                    disabled={
                      pointIndex === (education?.points?.length || 0) - 1
                    }
                    className="h-5 w-7 pb-0"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <FormField
                  key={pointIndex}
                  control={form.control}
                  name={`educations.${educationIndex}.points.${pointIndex}`}
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <AutoExpandingInput
                          placeholder={TEXTS.educationForm.pointPlaceholder}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="outline"
                  onClick={() => removePoint(educationIndex, pointIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => addNewPoint(educationIndex)}
            >
              <PlusCircle className="mr-2 h-4 w-4" />{" "}
              {TEXTS.educationForm.addPointButton}
            </Button>
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex-grow flex flex-col h-full max-h-full"
      >
        {renderHeader()}
        <div
          className={clsx(
            "flex space-x-1 flex-grow overflow-hidden",
            !form.getValues("isShowEducation") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderEducationsForm()}
        </div>
      </form>
    </Form>
  );
};
