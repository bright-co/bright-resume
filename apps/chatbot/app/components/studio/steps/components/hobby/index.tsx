"use client";

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
  Switch,
} from "@resume-template-components/shadcn-ui";
import { ChevronDown, ChevronUp, PlusCircle, Save, Trash2 } from "lucide-react";
import { FC } from "react";

import { AutoExpandingInput } from "@resume-template-components/auto-expanding-input";
import clsx from "clsx";
import { TEXTS } from "./texts";
import { useData } from "./use-data";

export const Hobby: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedHobbyIndex,
    addNewHobby,
    removeHobby,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="hobbyLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.hobbyLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowHobby"
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
                    {TEXTS.header.showHobbiesLabel}
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
    if (form.getValues("hobbies")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewHobby.noHobbySelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewHobby.noHobbySelectedMessage}
            </p>
            <Button onClick={addNewHobby}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewHobby.addNewHobbyButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderHobbiesForm = () => {
    if (form.getValues("hobbies")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderHobbyCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewHobby()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewHobby.addNewHobbyButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderHobbyForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderHobbyCards = () => {
    return form.getValues("hobbies")?.map((hobby, hobbyIndex) => (
      <Card
        key={"hobby" + hobbyIndex}
        className={`relative cursor-pointer transition-all duration-200 mb-2 ${
          hobbyIndex === resumeSubSectionIndex
            ? "bg-primary/10 shadow-md"
            : "hover:bg-secondary/50"
        }`}
        onClick={() => changeSelectedHobbyIndex(hobbyIndex)}
      >
        <div className="absolute left-1 top-1 flex flex-col ml-1">
          <Button
            variant="ghost"
            size="icon"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   handleMoveHobby(exp.id, "up");
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
            //   handleMoveHobby(exp.id, "down");
            // }}
            // disabled={index === hobbies.length - 1}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-2 pl-14">
          <div className="font-semibold  truncate max-w-[300px]">
            {hobby.point || TEXTS.hobbyCard.newHobbyLabel}
          </div>
          <div className="mt-2 flex justify-between space-x-2 items-center">
            <div className="flex justify-between space-x-2 items-center">
              <FormField
                control={form.control}
                name={`hobbies.${hobbyIndex}.isShow`}
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center space-y-0">
                    <FormControl>
                      <Switch
                        id={`show-${hobbyIndex}`}
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {field.value
                        ? TEXTS.hobbyCard.visibleLabel
                        : TEXTS.hobbyCard.hiddenLabel}
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
                    {TEXTS.hobbyCard.deleteConfirmationTitle}
                  </DialogTitle>
                  <DialogDescription>
                    {TEXTS.hobbyCard.deleteConfirmationMessage}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => removeHobby(hobbyIndex)}
                  >
                    {TEXTS.hobbyCard.deleteButton}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderHobbyForm = () => {
    return form.watch("hobbies")?.map((hobby, hobbyIndex) => (
      <Card
        key={"hobby-" + hobbyIndex}
        className={clsx(
          "min-h-full",
          hobbyIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <FormField
            control={form.control}
            name={`hobbies.${hobbyIndex}.point`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{TEXTS.hobbyForm.pointLabel}</FormLabel>
                <FormControl>
                  <AutoExpandingInput
                    placeholder={TEXTS.hobbyForm.pointPlaceholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
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
            !form.getValues("isShowHobby") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderHobbiesForm()}
        </div>
      </form>
    </Form>
  );
};
