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

export const Certification: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedCertificationIndex,
    addNewCertification,
    addNewPoint,
    removePoint,
    removeCertification,
    changeOrderOfCertificationPoints,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
    changeOrderOfCertifications,
  } = useData();

  const renderHeader = () => {
    return (
      <div className="flex px-1 space-x-1 items-start border-b pb-2">
        <div className="flex flex-col flex-grow justify-between items-start space-y-1">
          <FormField
            control={form.control}
            name="certificationLabel"
            render={({ field }) => (
              <FormItem className=" flex-grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={TEXTS.header.certificationLabelPlaceholder}
                    className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 mt-2">
            <FormField
              control={form.control}
              name="isShowCertification"
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
                    {TEXTS.header.showCertificationsLabel}
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
    if (form.getValues("certifications")?.length === 0)
      return (
        <Card className="w-[350px] mx-auto shadow-none border-0">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-1xl font-semibold mb-4">
              {TEXTS.addNewCertification.noCertificationSelectedTitle}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {TEXTS.addNewCertification.noCertificationSelectedMessage}
            </p>
            <Button onClick={addNewCertification}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {TEXTS.addNewCertification.addNewCertificationButton}
            </Button>
          </CardContent>
        </Card>
      );
  };

  const renderCertificationsForm = () => {
    if (form.getValues("certifications")?.length !== 0) {
      return (
        <>
          <ScrollArea className="w-1/3 pr-3">
            {renderCertificationCards()}
            <div className="w-full p-1">
              <Button
                onClick={() => addNewCertification()}
                className="w-full"
                variant={"outline"}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.addNewCertification.addNewCertificationButton}
              </Button>
            </div>
          </ScrollArea>
          <ScrollArea className="w-2/3">{renderCertificationForm()}</ScrollArea>
        </>
      );
    }
  };

  const renderCertificationCards = () => {
    return form
      .getValues("certifications")
      ?.map((certification, certificationIndex) => (
        <Card
          key={"certification" + certificationIndex}
          className={`relative cursor-pointer transition-all duration-200 mb-2 ${
            certificationIndex === resumeSubSectionIndex
              ? "bg-primary/10 shadow-md"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => changeSelectedCertificationIndex(certificationIndex)}
        >
          <div className="absolute left-1 top-1 flex flex-col ml-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                changeOrderOfCertifications(
                  certificationIndex,
                  certificationIndex - 1
                );
              }}
              disabled={certificationIndex === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                changeOrderOfCertifications(
                  certificationIndex,
                  certificationIndex + 1
                );
              }}
              disabled={
                certificationIndex ===
                form.getValues("certifications")!.length - 1
              }
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-2 pl-14">
            <div className="font-semibold">
              {certification.name ||
                TEXTS.certificationCard.newCertificationLabel}
            </div>
            <div className="text-sm text-gray-500">
              {certification.institute}
            </div>
            <div className="mt-2 flex justify-between space-x-2 items-center">
              <div className="flex justify-between space-x-2 items-center">
                <FormField
                  control={form.control}
                  name={`certifications.${certificationIndex}.isShow`}
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center space-y-0">
                      <FormControl>
                        <Switch
                          id={`show-${certificationIndex}`}
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">
                        {field.value
                          ? TEXTS.certificationCard.visibleLabel
                          : TEXTS.certificationCard.hiddenLabel}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <Dialog
                open={isOpenRemoveDialogIndex === certificationIndex}
                onOpenChange={(value) => {
                  !value && setIsOpenRemoveDialogIndex(undefined);
                }}
              >
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Trash2
                      className="h-4 w-4"
                      onClick={() =>
                        setIsOpenRemoveDialogIndex(certificationIndex)
                      }
                    />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {TEXTS.certificationCard.deleteConfirmationTitle}
                    </DialogTitle>
                    <DialogDescription>
                      {TEXTS.certificationCard.deleteConfirmationMessage}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        removeCertification(certificationIndex);
                        setIsOpenRemoveDialogIndex(undefined);
                      }}
                    >
                      {TEXTS.certificationCard.deleteButton}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      ));
  };

  const renderCertificationForm = () => {
    return form
      .watch("certifications")
      ?.map((certification, certificationIndex) => (
        <Card
          key={"certification-" + certificationIndex}
          className={clsx(
            "min-h-full",
            certificationIndex !== resumeSubSectionIndex && "hidden"
          )}
        >
          <CardContent className="p-2 space-y-4">
            <FormField
              control={form.control}
              name={`certifications.${certificationIndex}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{TEXTS.certificationForm.nameLabel}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={TEXTS.certificationForm.namePlaceholder}
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
                name={`certifications.${certificationIndex}.isShowInstitute`}
                render={({ field }) => (
                  <FormItem className="flex items-center space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {TEXTS.certificationForm.instituteLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name={`certifications.${certificationIndex}.institute`}
              render={({ field }) => (
                <FormItem
                  className={clsx(
                    !form.getValues(
                      `certifications.${certificationIndex}.isShowInstitute`
                    ) && "hidden"
                  )}
                >
                  <FormLabel>
                    {TEXTS.certificationForm.instituteLabel}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={TEXTS.certificationForm.institutePlaceholder}
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
                name={`certifications.${certificationIndex}.isShowDate`}
                render={({ field }) => (
                  <FormItem className="flex items-center space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {TEXTS.certificationForm.showDateLabel}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <div
              className={clsx(
                !form.getValues(
                  `certifications.${certificationIndex}.isShowDate`
                ) && "hidden"
              )}
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name={`certifications.${certificationIndex}.year`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{TEXTS.certificationForm.yearLabel}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={TEXTS.certificationForm.yearPlaceholder}
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
                name={`certifications.${certificationIndex}.isShowPoints`}
                render={({ field }) => (
                  <FormItem className="flex items-center space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="ml-3">
                      {TEXTS.certificationForm.showPointsLabel}{" "}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <div
              className={clsx(
                "space-y-2",
                !form.getValues(
                  `certifications.${certificationIndex}.isShowPoints`
                ) && "hidden"
              )}
            >
              {certification?.points?.map((_, pointIndex) => (
                <div
                  key={`certifications.${certificationIndex}.points.${pointIndex}`}
                  className="flex space-x-1 mb-2"
                >
                  <div className="flex flex-col">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        changeOrderOfCertificationPoints(
                          certificationIndex,
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
                        changeOrderOfCertificationPoints(
                          certificationIndex,
                          pointIndex,
                          pointIndex + 1
                        )
                      }
                      disabled={
                        pointIndex === (certification?.points?.length || 0) - 1
                      }
                      className="h-5 w-7 pb-0"
                    >
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </div>
                  <FormField
                    key={pointIndex}
                    control={form.control}
                    name={`certifications.${certificationIndex}.points.${pointIndex}`}
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <AutoExpandingInput
                            placeholder={
                              TEXTS.certificationForm.pointPlaceholder
                            }
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="outline"
                    onClick={() => removePoint(certificationIndex, pointIndex)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                onClick={() => addNewPoint(certificationIndex)}
              >
                <PlusCircle className="mr-2 h-4 w-4" />{" "}
                {TEXTS.certificationForm.addPointButton}
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
            !form.getValues("isShowCertification") && "hidden"
          )}
        >
          {renderAddNewButton()}
          {renderCertificationsForm()}
        </div>
      </form>
    </Form>
  );
};
