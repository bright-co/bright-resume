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

export const Involvement: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedInvolvementIndex,
    addNewInvolvement,
    addNewPoint,
    removePoint,
    removeInvolvement,
    changeOrderOfInvolvementPoints,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="involvementLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.involvementLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowInvolvement"
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
                    {TEXTS.header.showInvolvementsLabel}
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
    if (form.getValues("involvements")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewInvolvement.noInvolvementSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewInvolvement.noInvolvementSelectedMessage}
            </p>
            <Button onClick={addNewInvolvement}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewInvolvement.addNewInvolvementButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderInvolvementsForm = () => {
    if (form.getValues("involvements")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderInvolvementCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewInvolvement()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewInvolvement.addNewInvolvementButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderInvolvementForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderInvolvementCards = () => {
    return form
      .getValues("involvements")
      ?.map((involvement, involvementIndex) => (
        <Card
          key={"involvement" + involvementIndex}
          className={`relative cursor-pointer transition-all duration-200 mb-2 ${
            involvementIndex === resumeSubSectionIndex
              ? "bg-primary/10 shadow-md"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => changeSelectedInvolvementIndex(involvementIndex)}
        >
          <div className="absolute left-1 top-1 flex flex-col ml-1">
            <Button
              variant="ghost"
              size="icon"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   handleMoveInvolvement(exp.id, "up");
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
              //   handleMoveInvolvement(exp.id, "down");
              // }}
              // disabled={index === involvements.length - 1}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-2 pl-14">
            <div className="font-semibold">
              {involvement.role || TEXTS.involvementCard.newInvolvementLabel}
            </div>
            <div className="text-sm text-gray-500">{involvement.company}</div>
            <div className="mt-2 flex justify-between space-x-2 items-center">
              <div className="flex justify-between space-x-2 items-center">
                <FormField
                  control={form.control}
                  name={`involvements.${involvementIndex}.isShow`}
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center space-y-0">
                      <FormControl>
                        <Switch
                          id={`show-${involvementIndex}`}
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">
                        {field.value
                          ? TEXTS.involvementCard.visibleLabel
                          : TEXTS.involvementCard.hiddenLabel}
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
                      {TEXTS.involvementCard.deleteConfirmationTitle}
                    </DialogTitle>
                    <DialogDescription>
                      {TEXTS.involvementCard.deleteConfirmationMessage}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="destructive"
                      onClick={() => removeInvolvement(involvementIndex)}
                    >
                      {TEXTS.involvementCard.deleteButton}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      ));
  };

  const renderInvolvementForm = () => {
    return form.watch("involvements")?.map((involvement, involvementIndex) => (
      <Card
        key={"involvement-" + involvementIndex}
        className={clsx(
          "min-h-full",
          involvementIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`involvements.${involvementIndex}.role`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.involvementForm.roleLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.involvementForm.rolePlaceholder}
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
                name={`involvements.${involvementIndex}.company`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.involvementForm.companyLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.involvementForm.companyPlaceholder}
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
              name={`involvements.${involvementIndex}.isShowLocation`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.involvementForm.showLocationLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`involvements.${involvementIndex}.location`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(
                    `involvements.${involvementIndex}.isShowLocation`
                  ) && "hidden"
                )}
              >
                <FormLabel>{TEXTS.involvementForm.locationLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.involvementForm.locationPlaceholder}
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
              name={`involvements.${involvementIndex}.isShowDate`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.involvementForm.showDateLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "grid grid-cols-2 gap-4",
              !form.getValues(`involvements.${involvementIndex}.isShowDate`) &&
                "hidden"
            )}
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`involvements.${involvementIndex}.from`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.involvementForm.fromLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.involvementForm.fromPlaceholder}
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
                name={`involvements.${involvementIndex}.to`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{TEXTS.involvementForm.toLabel}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={TEXTS.involvementForm.toPlaceholder}
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
              name={`involvements.${involvementIndex}.isShowPoints`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.involvementForm.showPointsLabel}{" "}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div
            className={clsx(
              "space-y-2",
              !form.getValues(
                `involvements.${involvementIndex}.isShowPoints`
              ) && "hidden"
            )}
          >
            {involvement?.points?.map((_, pointIndex) => (
              <div
                key={`involvements.${involvementIndex}.points.${pointIndex}`}
                className="flex space-x-1 mb-2"
              >
                <div className="flex flex-col">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      changeOrderOfInvolvementPoints(
                        involvementIndex,
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
                      changeOrderOfInvolvementPoints(
                        involvementIndex,
                        pointIndex,
                        pointIndex + 1
                      )
                    }
                    disabled={
                      pointIndex === (involvement?.points?.length || 0) - 1
                    }
                    className="h-5 w-7 pb-0"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <FormField
                  key={pointIndex}
                  control={form.control}
                  name={`involvements.${involvementIndex}.points.${pointIndex}`}
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <AutoExpandingInput
                          placeholder={TEXTS.involvementForm.pointPlaceholder}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="outline"
                  onClick={() => removePoint(involvementIndex, pointIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => addNewPoint(involvementIndex)}
            >
              <PlusCircle className="mr-2 h-4 w-4" />{" "}
              {TEXTS.involvementForm.addPointButton}
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
            !form.getValues("isShowInvolvement") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderInvolvementsForm()}
        </div>
      </form>
    </Form>
  );
};
