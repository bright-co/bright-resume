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
  Label,
  ScrollArea,
  Switch,
} from "@resume-template-components/shadcn-ui";
import { ChevronDown, ChevronUp, PlusCircle, Save, Trash2 } from "lucide-react";
import { FC } from "react";

import clsx from "clsx";
import { useData } from "./use-data";

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
  } = useData();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex-grow flex flex-col h-full max-h-full"
      >
        <div className="flex px-1 space-x-1 items-center border-b pb-2">
          <div className="flex flex-col flex-grow justify-between items-start space-y-1">
            <FormField
              control={form.control}
              name="experienceLabel"
              render={({ field }) => (
                <FormItem className=" flex-grow">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Experience Label"
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
                      Show Experiences
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button size={"sm"} type="submit" disabled={!form.formState.isValid}>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div>

        <div
          className={clsx(
            "flex space-x-1 flex-grow overflow-hidden",
            !form.getValues("isShowExperience") && "hidden"
          )}
        >
          {form.getValues("experiences")?.length === 0 ? (
            <Card className="w-[350px] mx-auto shadow-none border-0">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <h3 className="text-1xl font-semibold mb-4">
                  No Experience Selected
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Select an experience from the list on the left to view and
                  edit its details, or add a new experience to get started.
                </p>
                <Button onClick={addNewExperience}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Experience
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <ScrollArea className="w-1/3 pr-3">
                {form
                  .getValues("experiences")
                  ?.map((experience, experienceIndex) => (
                    <Card
                      key={"experience" + experienceIndex}
                      className={`relative cursor-pointer transition-all duration-200 mb-2 ${
                        experienceIndex === resumeSubSectionIndex
                          ? "bg-primary/10 shadow-md"
                          : "hover:bg-secondary/50"
                      }`}
                      onClick={() =>
                        changeSelectedExperienceIndex(experienceIndex)
                      }
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
                          {experience.role || "New Experience"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {experience.company}
                        </div>
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
                                      onCheckedChange={(checked) =>
                                        field.onChange(checked)
                                      }
                                    />
                                  </FormControl>
                                  <FormLabel className="ml-3">
                                    {field.value ? "Visible" : "Hidden"}
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
                                  Are you sure you want to delete this
                                  experience?
                                </DialogTitle>
                                <DialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete the experience and remove
                                  the data from our servers.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <Button
                                  variant="destructive"
                                  onClick={() =>
                                    removeExperience(experienceIndex)
                                  }
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                <div className="w-full p-1">
                  <Button
                    onClick={() => addNewExperience()}
                    className="w-full"
                    variant={"outline"}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Experience
                  </Button>
                </div>
              </ScrollArea>
              <ScrollArea className="w-2/3">
                {form
                  .watch("experiences")
                  ?.map((experience, experienceIndex) => (
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
                                  <FormLabel>Role</FormLabel>
                                  <FormControl>
                                    <Input placeholder="role" {...field} />
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
                                  <FormLabel>Company</FormLabel>
                                  <FormControl>
                                    <Input placeholder="company" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FormField
                            control={form.control}
                            name={`experiences.${experienceIndex}.isShowLocation`}
                            render={({ field }) => (
                              <FormItem className="flex items-center space-y-0">
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={(checked) =>
                                      field.onChange(checked)
                                    }
                                  />
                                </FormControl>
                                <FormLabel className="ml-3">
                                  Show Location
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
                              <FormLabel>location</FormLabel>
                              <FormControl>
                                <Input placeholder="location" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <div className="flex items-center space-x-2">
                          <FormField
                            control={form.control}
                            name={`experiences.${experienceIndex}.isShowDate`}
                            render={({ field }) => (
                              <FormItem className="flex items-center space-y-0">
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={(checked) =>
                                      field.onChange(checked)
                                    }
                                  />
                                </FormControl>
                                <FormLabel className="ml-3">
                                  Show Date
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div
                          className={clsx(
                            "grid grid-cols-2 gap-4",
                            !form.getValues(
                              `experiences.${experienceIndex}.isShowDate`
                            ) && "hidden"
                          )}
                        >
                          <div className="space-y-2">
                            <FormField
                              control={form.control}
                              name={`experiences.${experienceIndex}.from`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>from</FormLabel>
                                  <FormControl>
                                    <Input placeholder="from" {...field} />
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
                                  <FormLabel>to</FormLabel>
                                  <FormControl>
                                    <Input placeholder="to" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <FormField
                            control={form.control}
                            name={`experiences.${experienceIndex}.isShowPoints`}
                            render={({ field }) => (
                              <FormItem className="flex items-center space-y-0">
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={(checked) =>
                                      field.onChange(checked)
                                    }
                                  />
                                </FormControl>
                                <FormLabel className="ml-3">
                                  Show Points
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div
                          className={clsx(
                            "space-y-2",
                            !form.getValues(
                              `experiences.${experienceIndex}.isShowPoints`
                            ) && "hidden"
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
                                  // onClick={() =>
                                  //   handleMovePoint(
                                  //     selectedExperience,
                                  //     pointIndex,
                                  //     "up"
                                  //   )
                                  // }
                                  disabled={pointIndex === 0}
                                  className="h-5 w-7 pb-0"
                                >
                                  <ChevronUp className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  // onClick={() =>
                                  //   handleMovePoint(
                                  //     selectedExperience,
                                  //     pointIndex,
                                  //     "down"
                                  //   )
                                  // }
                                  // disabled={
                                  //   pointIndex ===
                                  //   (experiences.find(
                                  //     (exp) => exp.id === selectedExperience
                                  //   )?.points?.length || 0) -
                                  //     1
                                  // }
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
                                        placeholder="point"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <Button
                                variant="outline"
                                onClick={() =>
                                  removePoint(experienceIndex, pointIndex)
                                }
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            variant="outline"
                            onClick={() => addNewPoint(experienceIndex)}
                          >
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Point
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </ScrollArea>
            </>
          )}
        </div>
      </form>
    </Form>
  );
};
