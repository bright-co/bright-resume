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

export const Project: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedProjectIndex,
    changeOrderOfProjects,
    addNewProject,
    addNewPoint,
    removePoint,
    removeProject,
    changeOrderOfProjectPoints,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="projectLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.projectLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowProject"
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
                    {TEXTS.header.showProjectsLabel}
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
    if (form.getValues("projects")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewProject.noProjectSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewProject.noProjectSelectedMessage}
            </p>
            <Button onClick={addNewProject}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewProject.addNewProjectButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderProjectsForm = () => {
    if (form.getValues("projects")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderProjectCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewProject()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewProject.addNewProjectButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderProjectForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderProjectCards = () => {
    return form.getValues("projects")?.map((project, projectIndex) => (
      <Card
        key={"project" + projectIndex}
        className={`relative cursor-pointer transition-all duration-200 mb-2 ${
          projectIndex === resumeSubSectionIndex
            ? "bg-primary/10 shadow-md"
            : "hover:bg-secondary/50"
        }`}
        onClick={() => changeSelectedProjectIndex(projectIndex)}
      >
        <div className="absolute left-1 top-1 flex flex-col ml-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfProjects(projectIndex, projectIndex - 1);
            }}
            disabled={projectIndex === 0}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfProjects(projectIndex, projectIndex + 1);
            }}
            disabled={projectIndex === form.getValues("projects")!.length - 1}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-2 pl-14">
          <div className="font-semibold">
            {project.title || TEXTS.projectCard.newProjectLabel}
          </div>
          <div className="text-sm text-gray-500">{project.role}</div>
          <div className="mt-2 flex justify-between space-x-2 items-center">
            <div className="flex justify-between space-x-2 items-center">
              <FormField
                control={form.control}
                name={`projects.${projectIndex}.isShow`}
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center space-y-0">
                    <FormControl>
                      <Switch
                        id={`show-${projectIndex}`}
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {field.value
                        ? TEXTS.projectCard.visibleLabel
                        : TEXTS.projectCard.hiddenLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Dialog
              open={isOpenRemoveDialogIndex === projectIndex}
              onOpenChange={(value) => {
                !value && setIsOpenRemoveDialogIndex(undefined);
              }}
            >
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpenRemoveDialogIndex(projectIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {TEXTS.projectCard.deleteConfirmationTitle}
                  </DialogTitle>
                  <DialogDescription>
                    {TEXTS.projectCard.deleteConfirmationMessage}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      removeProject(projectIndex);
                      setIsOpenRemoveDialogIndex(undefined);
                    }}
                  >
                    {TEXTS.projectCard.deleteButton}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderProjectForm = () => {
    return form.watch("projects")?.map((project, projectIndex) => (
      <Card
        key={"project-" + projectIndex}
        className={clsx(
          "min-h-full",
          projectIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <FormField
            control={form.control}
            name={`projects.${projectIndex}.title`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{TEXTS.projectForm.titleLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.projectForm.titlePlaceholder}
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
              name={`projects.${projectIndex}.isShowUrl`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.projectForm.showUrlLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`projects.${projectIndex}.url`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(`projects.${projectIndex}.isShowUrl`) &&
                    "hidden"
                )}
              >
                <FormLabel>{TEXTS.projectForm.urlLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.projectForm.urlPlaceholder}
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
              name={`projects.${projectIndex}.isShowRole`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.projectForm.showRoleLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`projects.${projectIndex}.role`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(`projects.${projectIndex}.isShowRole`) &&
                    "hidden"
                )}
              >
                <FormLabel>{TEXTS.projectForm.roleLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.projectForm.rolePlaceholder}
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
              name={`projects.${projectIndex}.isShowCompany`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.projectForm.showCompanyLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`projects.${projectIndex}.company`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(`projects.${projectIndex}.isShowCompany`) &&
                    "hidden"
                )}
              >
                <FormLabel>{TEXTS.projectForm.companyLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.projectForm.companyPlaceholder}
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
              name={`projects.${projectIndex}.isShowLocation`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.projectForm.showLocationLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`projects.${projectIndex}.location`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(`projects.${projectIndex}.isShowLocation`) &&
                    "hidden"
                )}
              >
                <FormLabel>{TEXTS.projectForm.locationLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.projectForm.locationPlaceholder}
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
              name={`projects.${projectIndex}.isShowDate`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.projectForm.showDateLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "grid grid-cols-2 gap-4",
              !form.getValues(`projects.${projectIndex}.isShowDate`) && "hidden"
            )}
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`projects.${projectIndex}.from`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.projectForm.fromLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.projectForm.fromPlaceholder}
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
                name={`projects.${projectIndex}.to`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.projectForm.toLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.projectForm.toPlaceholder}
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
              name={`projects.${projectIndex}.isShowPoints`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.projectForm.showPointsLabel}{" "}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "space-y-2",
              !form.getValues(`projects.${projectIndex}.isShowPoints`) &&
                "hidden"
            )}
          >
            {project?.points?.map((_, pointIndex) => (
              <div
                key={`projects.${projectIndex}.points.${pointIndex}`}
                className="flex space-x-1 mb-2"
              >
                <div className="flex flex-col">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      changeOrderOfProjectPoints(
                        projectIndex,
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
                      changeOrderOfProjectPoints(
                        projectIndex,
                        pointIndex,
                        pointIndex + 1
                      )
                    }
                    disabled={pointIndex === (project?.points?.length || 0) - 1}
                    className="h-5 w-7 pb-0"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <FormField
                  key={pointIndex}
                  control={form.control}
                  name={`projects.${projectIndex}.points.${pointIndex}`}
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <AutoExpandingInput
                          placeholder={TEXTS.projectForm.pointPlaceholder}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="outline"
                  onClick={() => removePoint(projectIndex, pointIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={() => addNewPoint(projectIndex)}>
              <PlusCircle className="mr-2 h-4 w-4" />{" "}
              {TEXTS.projectForm.addPointButton}
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
            !form.getValues("isShowProject") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderProjectsForm()}
        </div>
      </form>
    </Form>
  );
};
