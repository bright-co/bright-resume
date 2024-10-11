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

export const Experience: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedExperienceIndex,
    addNewExperience,
    addNewPoint,
    removePoint,
    removeExperience,
    changeOrderOfExperiencePoints,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="experienceLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.experienceLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowExperience"
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
                    {TEXTS.header.showExperiencesLabel}
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
    if (form.getValues("experiences")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewExperience.noExperienceSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewExperience.noExperienceSelectedMessage}
            </p>
            <Button onClick={addNewExperience}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewExperience.addNewExperienceButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderExperiencesForm = () => {
    if (form.getValues("experiences")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderExperienceCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewExperience()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewExperience.addNewExperienceButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderExperienceForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderExperienceCards = () => {
    return form.getValues("experiences")?.map((experience, experienceIndex) => (
      <Card
        key={"experience" + experienceIndex}
        className={`relative cursor-pointer transition-all duration-200 mb-2 ${
          experienceIndex === resumeSubSectionIndex
            ? "bg-primary/10 shadow-md"
            : "hover:bg-secondary/50"
        }`}
        onClick={() => changeSelectedExperienceIndex(experienceIndex)}
      >
        <div className="absolute left-1 top-1 flex flex-col ml-1">
          <Button
            variant="ghost"
            size="icon"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   handleMoveExperience(exp.id, "up");
            // }}
            // disabled={index === 0}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   handleMoveExperience(exp.id, "down");
            // }}
            // disabled={index === experiences.length - 1}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-2 pl-14">
          <div className="font-semibold">
            {experience.role || TEXTS.experienceCard.newExperienceLabel}
          </div>
          <div className="text-sm text-gray-500">{experience.company}</div>
          <div className="mt-2 flex justify-between space-x-2 items-center">
            <div className="flex justify-between space-x-2 items-center">
              <FormField
                control={form.control}
                name={`experiences.${experienceIndex}.isShow`}
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center space-y-0">
                    <FormControl>
                      <Switch
                        id={`show-${experienceIndex}`}
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {field.value
                        ? TEXTS.experienceCard.visibleLabel
                        : TEXTS.experienceCard.hiddenLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {TEXTS.experienceCard.deleteConfirmationTitle}
                  </DialogTitle>
                  <DialogDescription>
                    {TEXTS.experienceCard.deleteConfirmationMessage}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => removeExperience(experienceIndex)}
                  >
                    {TEXTS.experienceCard.deleteButton}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderExperienceForm = () => {
    return form.watch("experiences")?.map((experience, experienceIndex) => (
      <Card
        key={"experience-" + experienceIndex}
        className={clsx(
          "min-h-full",
          experienceIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`experiences.${experienceIndex}.role`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.experienceForm.roleLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.experienceForm.rolePlaceholder}
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
                name={`experiences.${experienceIndex}.company`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.experienceForm.companyLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.experienceForm.companyPlaceholder}
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
              name={`experiences.${experienceIndex}.isShowLocation`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.experienceForm.showLocationLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`experiences.${experienceIndex}.location`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(
                    `experiences.${experienceIndex}.isShowLocation`
                  ) && "hidden"
                )}
              >
                <FormLabel>{TEXTS.experienceForm.locationLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.experienceForm.locationPlaceholder}
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
              name={`experiences.${experienceIndex}.isShowDate`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.experienceForm.showDateLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "grid grid-cols-2 gap-4",
              !form.getValues(`experiences.${experienceIndex}.isShowDate`) &&
                "hidden"
            )}
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`experiences.${experienceIndex}.from`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.experienceForm.fromLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.experienceForm.fromPlaceholder}
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
                name={`experiences.${experienceIndex}.to`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.experienceForm.toLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.experienceForm.toPlaceholder}
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
              name={`experiences.${experienceIndex}.isShowPoints`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.experienceForm.showPointsLabel}{" "}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "space-y-2",
              !form.getValues(`experiences.${experienceIndex}.isShowPoints`) &&
                "hidden"
            )}
          >
            {experience?.points?.map((_, pointIndex) => (
              <div
                key={`experiences.${experienceIndex}.points.${pointIndex}`}
                className="flex space-x-1 mb-2"
              >
                <div className="flex flex-col">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      changeOrderOfExperiencePoints(
                        experienceIndex,
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
                      changeOrderOfExperiencePoints(
                        experienceIndex,
                        pointIndex,
                        pointIndex + 1
                      )
                    }
                    disabled={
                      pointIndex === (experience?.points?.length || 0) - 1
                    }
                    className="h-5 w-7 pb-0"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <FormField
                  key={pointIndex}
                  control={form.control}
                  name={`experiences.${experienceIndex}.points.${pointIndex}`}
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <AutoExpandingInput
                          placeholder={TEXTS.experienceForm.pointPlaceholder}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="outline"
                  onClick={() => removePoint(experienceIndex, pointIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => addNewPoint(experienceIndex)}
            >
              <PlusCircle className="mr-2 h-4 w-4" />{" "}
              {TEXTS.experienceForm.addPointButton}
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
            !form.getValues("isShowExperience") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderExperiencesForm()}
        </div>
      </form>
    </Form>
  );
};
