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

export const CourseWork: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedCourseWorkIndex,
    addNewCourseWork,
    addNewPoint,
    removePoint,
    removeCourseWork,
    changeOrderOfCourseWorkPoints,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
    changeOrderOfCourseWorks,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="courseWorkLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.courseWorkLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowCourseWork"
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
                    {TEXTS.header.showCourseWorksLabel}
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
    if (form.getValues("courseWorks")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewCourseWork.noCourseWorkSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewCourseWork.noCourseWorkSelectedMessage}
            </p>
            <Button onClick={addNewCourseWork}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewCourseWork.addNewCourseWorkButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderCourseWorksForm = () => {
    if (form.getValues("courseWorks")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderCourseWorkCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewCourseWork()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewCourseWork.addNewCourseWorkButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderCourseWorkForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderCourseWorkCards = () => {
    return form.getValues("courseWorks")?.map((courseWork, courseWorkIndex) => (
      <Card
        key={"courseWork" + courseWorkIndex}
        className={`relative cursor-pointer transition-all duration-200 mb-2 ${
          courseWorkIndex === resumeSubSectionIndex
            ? "bg-primary/10 shadow-md"
            : "hover:bg-secondary/50"
        }`}
        onClick={() => changeSelectedCourseWorkIndex(courseWorkIndex)}
      >
        <div className="absolute left-1 top-1 flex flex-col ml-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfCourseWorks(courseWorkIndex, courseWorkIndex - 1);
            }}
            disabled={courseWorkIndex === 0}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfCourseWorks(courseWorkIndex, courseWorkIndex + 1);
            }}
            disabled={
              courseWorkIndex === form.getValues("courseWorks")!.length - 1
            }
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-2 pl-14">
          <div className="font-semibold">
            {courseWork.name || TEXTS.courseWorkCard.newCourseWorkLabel}
          </div>
          <div className="text-sm text-gray-500">{courseWork.institute}</div>
          <div className="mt-2 flex justify-between space-x-2 items-center">
            <div className="flex justify-between space-x-2 items-center">
              <FormField
                control={form.control}
                name={`courseWorks.${courseWorkIndex}.isShow`}
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center space-y-0">
                    <FormControl>
                      <Switch
                        id={`show-${courseWorkIndex}`}
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {field.value
                        ? TEXTS.courseWorkCard.visibleLabel
                        : TEXTS.courseWorkCard.hiddenLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Dialog
              open={isOpenRemoveDialogIndex === courseWorkIndex}
              onOpenChange={(value) => {
                !value && setIsOpenRemoveDialogIndex(undefined);
              }}
            >
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Trash2
                    className="h-4 w-4"
                    onClick={() => setIsOpenRemoveDialogIndex(courseWorkIndex)}
                  />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {TEXTS.courseWorkCard.deleteConfirmationTitle}
                  </DialogTitle>
                  <DialogDescription>
                    {TEXTS.courseWorkCard.deleteConfirmationMessage}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      removeCourseWork(courseWorkIndex);
                      setIsOpenRemoveDialogIndex(undefined);
                    }}
                  >
                    {TEXTS.courseWorkCard.deleteButton}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderCourseWorkForm = () => {
    return form.watch("courseWorks")?.map((courseWork, courseWorkIndex) => (
      <Card
        key={"courseWork-" + courseWorkIndex}
        className={clsx(
          "min-h-full",
          courseWorkIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <FormField
            control={form.control}
            name={`courseWorks.${courseWorkIndex}.name`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{TEXTS.courseWorkForm.nameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.courseWorkForm.namePlaceholder}
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
              name={`courseWorks.${courseWorkIndex}.isShowInstitute`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.courseWorkForm.instituteLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`courseWorks.${courseWorkIndex}.institute`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(
                    `courseWorks.${courseWorkIndex}.isShowInstitute`
                  ) && "hidden"
                )}
              >
                <FormLabel>{TEXTS.courseWorkForm.instituteLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.courseWorkForm.institutePlaceholder}
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
              name={`courseWorks.${courseWorkIndex}.isShowDate`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.courseWorkForm.showDateLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              !form.getValues(`courseWorks.${courseWorkIndex}.isShowDate`) &&
                "hidden"
            )}
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`courseWorks.${courseWorkIndex}.year`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.courseWorkForm.yearLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.courseWorkForm.yearPlaceholder}
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
              name={`courseWorks.${courseWorkIndex}.isShowSkills`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.courseWorkForm.showSkillsLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              !form.getValues(`courseWorks.${courseWorkIndex}.isShowSkills`) &&
                "hidden"
            )}
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`courseWorks.${courseWorkIndex}.skills`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.courseWorkForm.skillsLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.courseWorkForm.skillsPlaceholder}
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
              name={`courseWorks.${courseWorkIndex}.isShowPoints`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.courseWorkForm.showPointsLabel}{" "}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "space-y-2",
              !form.getValues(`courseWorks.${courseWorkIndex}.isShowPoints`) &&
                "hidden"
            )}
          >
            {courseWork?.points?.map((_, pointIndex) => (
              <div
                key={`courseWorks.${courseWorkIndex}.points.${pointIndex}`}
                className="flex space-x-1 mb-2"
              >
                <div className="flex flex-col">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      changeOrderOfCourseWorkPoints(
                        courseWorkIndex,
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
                      changeOrderOfCourseWorkPoints(
                        courseWorkIndex,
                        pointIndex,
                        pointIndex + 1
                      )
                    }
                    disabled={
                      pointIndex === (courseWork?.points?.length || 0) - 1
                    }
                    className="h-5 w-7 pb-0"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <FormField
                  key={pointIndex}
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.points.${pointIndex}`}
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <AutoExpandingInput
                          placeholder={TEXTS.courseWorkForm.pointPlaceholder}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="outline"
                  onClick={() => removePoint(courseWorkIndex, pointIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => addNewPoint(courseWorkIndex)}
            >
              <PlusCircle className="mr-2 h-4 w-4" />{" "}
              {TEXTS.courseWorkForm.addPointButton}
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
            !form.getValues("isShowCourseWork") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderCourseWorksForm()}
        </div>
      </form>
    </Form>
  );
};
