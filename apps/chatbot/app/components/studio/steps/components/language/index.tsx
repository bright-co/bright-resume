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
  Separator,
  Switch,
} from "@resume-template-components/shadcn-ui";
import { ChevronDown, ChevronUp, PlusCircle, Save, Trash2 } from "lucide-react";
import { FC } from "react";

import clsx from "clsx";
import { TEXTS } from "./texts";
import { useData } from "./use-data";

export const Language: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedLanguageIndex,
    addNewLanguage,
    removeLanguage,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
    changeOrderOfLanguages,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="languageLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.languageLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowLanguage"
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
                    {TEXTS.header.showLanguagesLabel}
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
    if (form.getValues("languages")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewLanguage.noLanguageSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewLanguage.noLanguageSelectedMessage}
            </p>
            <Button onClick={addNewLanguage}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewLanguage.addNewLanguageButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderLanguagesForm = () => {
    if (form.getValues("languages")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderLanguageCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewLanguage()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewLanguage.addNewLanguageButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderLanguageForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderLanguageCards = () => {
    return form.getValues("languages")?.map((language, languageIndex) => (
      <Card
        key={"language" + languageIndex}
        className={`relative cursor-pointer transition-all duration-200 mb-2 ${
          languageIndex === resumeSubSectionIndex
            ? "bg-primary/10 shadow-md"
            : "hover:bg-secondary/50"
        }`}
        onClick={() => changeSelectedLanguageIndex(languageIndex)}
      >
        <div className="absolute left-1 top-1 flex flex-col ml-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfLanguages(languageIndex, languageIndex - 1);
            }}
            disabled={languageIndex === 0}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              changeOrderOfLanguages(languageIndex, languageIndex + 1);
            }}
            disabled={languageIndex === form.getValues("languages")!.length - 1}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-2 pl-14">
          <div className="font-semibold">
            {language.name || TEXTS.languageCard.newLanguageLabel}
          </div>
          <div className="text-sm text-gray-500">{language.level}</div>
          <div className="mt-2 flex justify-between space-x-2 items-center">
            <div className="flex justify-between space-x-2 items-center">
              <FormField
                control={form.control}
                name={`languages.${languageIndex}.isShow`}
                render={({ field }) => (
                  <FormItem className="flex justify-between items-center space-y-0">
                    <FormControl>
                      <Switch
                        id={`show-${languageIndex}`}
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {field.value
                        ? TEXTS.languageCard.visibleLabel
                        : TEXTS.languageCard.hiddenLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Dialog
              open={isOpenRemoveDialogIndex === languageIndex}
              onOpenChange={(value) => {
                !value && setIsOpenRemoveDialogIndex(undefined);
              }}
            >
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpenRemoveDialogIndex(languageIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {TEXTS.languageCard.deleteConfirmationTitle}
                  </DialogTitle>
                  <DialogDescription>
                    {TEXTS.languageCard.deleteConfirmationMessage}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      removeLanguage(languageIndex);
                      setIsOpenRemoveDialogIndex(undefined);
                    }}
                  >
                    {TEXTS.languageCard.deleteButton}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderLanguageForm = () => {
    return form.watch("languages")?.map((language, languageIndex) => (
      <Card
        key={"language-" + languageIndex}
        className={clsx(
          "min-h-full",
          languageIndex !== resumeSubSectionIndex && "hidden"
        )}
      >
        <CardContent className="p-2 space-y-4">
          <FormField
            control={form.control}
            name={`languages.${languageIndex}.name`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{TEXTS.languageForm.nameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.languageForm.namePlaceholder}
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
              name={`languages.${languageIndex}.isShowLevel`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="ml-3">
                    {TEXTS.languageForm.levelLabel}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={`languages.${languageIndex}.level`}
            render={({ field }) => (
              <FormItem
                className={clsx(
                  !form.getValues(`languages.${languageIndex}.isShowLevel`) &&
                    "hidden"
                )}
              >
                <FormLabel>{TEXTS.languageForm.levelLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={TEXTS.languageForm.levelPlaceholder}
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
            !form.getValues("isShowLanguage") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderLanguagesForm()}
        </div>
      </form>
    </Form>
  );
};
