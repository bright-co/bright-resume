"use client";

import {
  AlertDialogHeader,
  Button,
  Card,
  CardContent,
  Checkbox,
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
  Textarea,
} from "@resume-template-components/shadcn-ui";
import { AutoExpandingInput } from "@resume-template-components/auto-expanding-input";
import { FC, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  DeleteIcon,
  PlusCircle,
  Save,
  Trash2,
} from "lucide-react";

import { Separator } from "@radix-ui/react-menubar";
import clsx from "clsx";
import { useData } from "./use-data";

interface IExperience {
  id: string;
  role?: string | null;
  company?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowDate?: boolean | null;
  from?: string | null;
  to?: string | null;
  isShow?: boolean | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export const Experience: FC = () => {
  const [sectionTitle, setSectionTitle] = useState("My Experiences");
  const [experiences, setExperiences] = useState<IExperience[]>([
    {
      id: "1",
      role: "Software Developer",
      company: "Tech Co",
      isShowLocation: true,
      location: "New York, NY",
      isShowDate: true,
      from: "Jan 2020",
      to: "Present",
      isShow: true,
      isShowPoints: true,
      points: [
        "Developed web applications using React and Node.js, improving user engagement by 30%",
        "Collaborated with cross-functional teams to deliver high-quality software products on time and within budget",
      ],
    },
  ]);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    experiences[0]?.id || null
  );

  const handleExperienceChange = (
    id: string,
    field: keyof IExperience,
    value: any
  ) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleAddExperience = () => {
    const newExperience: IExperience = {
      id: Date.now().toString(),
      role: "",
      company: "",
      isShowLocation: true,
      location: "",
      isShowDate: true,
      from: "",
      to: "",
      isShow: true,
      isShowPoints: true,
      points: [""],
    };
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
    setSelectedExperience(newExperience.id);
  };

  const handleRemoveExperience = (id: string) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((exp) => exp.id !== id)
    );
    if (selectedExperience === id) {
      setSelectedExperience(
        experiences.find((exp) => exp.id !== id)?.id || null
      );
    }
  };

  const handleAddPoint = (id: string) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.id === id ? { ...exp, points: [...(exp.points || []), ""] } : exp
      )
    );
  };

  const handleRemovePoint = (id: string, pointIndex: number) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.id === id
          ? { ...exp, points: exp.points?.filter((_, i) => i !== pointIndex) }
          : exp
      )
    );
  };

  const handlePointChange = (id: string, pointIndex: number, value: string) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              points: exp.points?.map((point, i) =>
                i === pointIndex ? value : point
              ),
            }
          : exp
      )
    );
  };

  const handleMovePoint = (
    experienceId: string,
    pointIndex: number,
    direction: "up" | "down"
  ) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) => {
        if (exp.id !== experienceId) return exp;
        const points = exp.points || [];
        if (
          (direction === "up" && pointIndex === 0) ||
          (direction === "down" && pointIndex === points.length - 1)
        ) {
          return exp;
        }
        const newIndex = direction === "up" ? pointIndex - 1 : pointIndex + 1;
        const newPoints = [...points];
        [newPoints[pointIndex], newPoints[newIndex]] = [
          newPoints[newIndex],
          newPoints[pointIndex],
        ];
        return { ...exp, points: newPoints };
      })
    );
  };

  const handleMoveExperience = (id: string, direction: "up" | "down") => {
    const index = experiences.findIndex((exp) => exp.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === experiences.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const updatedExperiences = [...experiences];
    const [removed] = updatedExperiences.splice(index, 1);
    updatedExperiences.splice(newIndex, 0, removed);
    setExperiences(updatedExperiences);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving experiences:", experiences);
    console.log("Section title:", sectionTitle);
  };

  // const {
  //   form,
  //   onSubmit,
  //   resumeSubSectionIndex,
  //   changeSelectedExperienceIndex,
  //   addNewExperience,
  //   addNewPoint,
  //   removePoint,
  //   removeExperience,
  // } = useData();

  return (
    <div className="space-y-2 flex-grow flex flex-col h-full max-h-full">
      <div className="flex justify-between items-start pb-2 px-1 border-t border-b py-3">
        <Input
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          className="text-2xl font-bold border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <div className="flex items-center space-x-2 mt-2">
          <Switch id="show-location" />
          <Label htmlFor="show-location">Show Experiences</Label>
        </div>

        {/* <div className="flex justify-end">
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div> */}
      </div>
      <div className="flex space-x-1 flex-grow overflow-hidden">
        {experiences.length === 0 || !selectedExperience ? (
          <Card className="w-[350px] mx-auto shadow-none border-0">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-1xl font-semibold mb-4">
                No Experience Selected
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Select an experience from the list on the left to view and edit
                its details, or add a new experience to get started.
              </p>
              <Button onClick={handleAddExperience}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Experience
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <ScrollArea className="w-1/3 pr-3">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.id}
                  className={`relative cursor-pointer transition-all duration-200 mb-2 ${
                    selectedExperience === exp.id
                      ? "bg-primary/10 shadow-md"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() => setSelectedExperience(exp.id)}
                >
                  <div className="absolute left-1 top-1 flex flex-col ml-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveExperience(exp.id, "up");
                      }}
                      disabled={index === 0}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveExperience(exp.id, "down");
                      }}
                      disabled={index === experiences.length - 1}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-2 pl-14">
                    <div className="font-semibold">
                      {exp.role || "New Experience"}
                    </div>
                    <div className="text-sm text-gray-500">{exp.company}</div>
                    <div className="mt-2 flex justify-between space-x-2 items-center">
                      <div className="flex justify-between space-x-2 items-center">
                        <Switch
                          id={`show-${exp.id}`}
                          checked={!!exp.isShow}
                          onCheckedChange={(checked) =>
                            handleExperienceChange(exp.id, "isShow", checked)
                          }
                        />
                        <Label htmlFor={`show-${exp.id}`} className="text-sm">
                          {exp.isShow ? "Visible" : "Hidden"}
                        </Label>
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
                              Are you sure you want to delete this experience?
                            </DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will
                              permanently delete the experience and remove the
                              data from our servers.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button
                              variant="destructive"
                              onClick={() => handleRemoveExperience(exp.id)}
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
                  onClick={handleAddExperience}
                  className="w-full"
                  variant={"outline"}
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Experience
                </Button>
              </div>
            </ScrollArea>
            <ScrollArea className="w-2/3">
              <Card className="min-h-full">
                <CardContent className="p-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        value={
                          experiences.find(
                            (exp) => exp.id === selectedExperience
                          )?.role || ""
                        }
                        onChange={(e) =>
                          handleExperienceChange(
                            selectedExperience,
                            "role",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={
                          experiences.find(
                            (exp) => exp.id === selectedExperience
                          )?.company || ""
                        }
                        onChange={(e) =>
                          handleExperienceChange(
                            selectedExperience,
                            "company",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="show-location"
                      checked={
                        experiences.find((exp) => exp.id === selectedExperience)
                          ?.isShowLocation || false
                      }
                      onCheckedChange={(checked) =>
                        handleExperienceChange(
                          selectedExperience,
                          "isShowLocation",
                          checked
                        )
                      }
                    />
                    <Label htmlFor="show-location">Show Location</Label>
                  </div>
                  {experiences.find((exp) => exp.id === selectedExperience)
                    ?.isShowLocation && (
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={
                          experiences.find(
                            (exp) => exp.id === selectedExperience
                          )?.location || ""
                        }
                        onChange={(e) =>
                          handleExperienceChange(
                            selectedExperience,
                            "location",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="show-date"
                      checked={
                        experiences.find((exp) => exp.id === selectedExperience)
                          ?.isShowDate || false
                      }
                      onCheckedChange={(checked) =>
                        handleExperienceChange(
                          selectedExperience,
                          "isShowDate",
                          checked
                        )
                      }
                    />
                    <Label htmlFor="show-date">Show Date</Label>
                  </div>
                  {experiences.find((exp) => exp.id === selectedExperience)
                    ?.isShowDate && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from">From</Label>
                        <Input
                          id="from"
                          value={
                            experiences.find(
                              (exp) => exp.id === selectedExperience
                            )?.from || ""
                          }
                          onChange={(e) =>
                            handleExperienceChange(
                              selectedExperience,
                              "from",
                              e.target.value
                            )
                          }
                          placeholder="e.g. Jan 2020"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to">To</Label>
                        <Input
                          id="to"
                          value={
                            experiences.find(
                              (exp) => exp.id === selectedExperience
                            )?.to || ""
                          }
                          onChange={(e) =>
                            handleExperienceChange(
                              selectedExperience,
                              "to",
                              e.target.value
                            )
                          }
                          placeholder="e.g. Present"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="show-points"
                      checked={
                        experiences.find((exp) => exp.id === selectedExperience)
                          ?.isShowPoints || false
                      }
                      onCheckedChange={(checked) =>
                        handleExperienceChange(
                          selectedExperience,
                          "isShowPoints",
                          checked
                        )
                      }
                    />
                    <Label htmlFor="show-points">Show Points</Label>
                  </div>
                  {experiences.find((exp) => exp.id === selectedExperience)
                    ?.isShowPoints && (
                    <div className="space-y-2">
                      <Label>Points</Label>
                      {experiences
                        .find((exp) => exp.id === selectedExperience)
                        ?.points?.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex space-x-1 mb-2">
                            <div className="flex flex-col">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() =>
                                  handleMovePoint(
                                    selectedExperience,
                                    pointIndex,
                                    "up"
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
                                  handleMovePoint(
                                    selectedExperience,
                                    pointIndex,
                                    "down"
                                  )
                                }
                                disabled={
                                  pointIndex ===
                                  (experiences.find(
                                    (exp) => exp.id === selectedExperience
                                  )?.points?.length || 0) -
                                    1
                                }
                                className="h-5 w-7 pb-0"
                              >
                                <ChevronDown className="h-3 w-3" />
                              </Button>
                            </div>

                            <AutoExpandingInput
                              value={point}
                              onChange={(value) =>
                                handlePointChange(
                                  selectedExperience,
                                  pointIndex,
                                  value
                                )
                              }
                              placeholder={`Point ${pointIndex + 1}`}
                              className="flex-grow"
                            />
                            <Button
                              variant="outline"
                              onClick={() =>
                                handleRemovePoint(
                                  selectedExperience,
                                  pointIndex
                                )
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      <Button
                        variant="outline"
                        onClick={() => handleAddPoint(selectedExperience)}
                      >
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Point
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollArea>
          </>
        )}
      </div>
    </div>

    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="space-y-2 w-full flex flex-col gap-2"
    //   >

    //     <FormField
    //       control={form.control}
    //       name="isShowExperience"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormControl>
    //             <Checkbox
    //               checked={field.value}
    //               onCheckedChange={(checked) => field.onChange(checked)}
    //             />
    //           </FormControl>
    //           <FormLabel className="ml-3">isShowExperience</FormLabel>
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="experienceLabel"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Label</FormLabel>
    //           <FormControl>
    //             <Input placeholder="experienceLabel" {...field} />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     />

    //     <Separator />
    //     <div className="flex">
    //       <div className="p-1 bg-slate-400 w-[400px]">
    //         <ScrollArea>
    //           <div className="flex flex-col gap-2  pt-0">
    //             {form
    //               .getValues("experiences")
    //               ?.map((experience, experienceIndex) => (
    //                 <button
    //                   key={"experience" + experienceIndex}
    //                   type="button"
    //                   className={clsx(
    //                     "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
    //                     experienceIndex === resumeSubSectionIndex &&
    //                       "bg-blue-400"
    //                   )}
    //                   onClick={() => {
    //                     changeSelectedExperienceIndex(experienceIndex);
    //                   }}
    //                 >
    //                   <div className="flex w-full flex-col gap-1">
    //                     <div className="flex items-center">
    //                       <div className="flex items-center gap-2">
    //                         <div className="font-semibold">
    //                           {experience.role}
    //                         </div>
    //                       </div>
    //                       <div className="ml-auto text-xs">
    //                         {experience.from} {"-"} {experience.to}
    //                       </div>
    //                     </div>
    //                     <div className="text-xs font-medium">
    //                       {experience.company} - {experience.location}
    //                     </div>
    //                   </div>
    //                   <div className="flex items-center space-x-2">
    //                     <FormField
    //                       control={form.control}
    //                       name={`experiences.${experienceIndex}.isShow`}
    //                       render={({ field }) => (
    //                         <FormItem>
    //                           <FormControl>
    //                             <Checkbox
    //                               checked={field.value}
    //                               onCheckedChange={(checked) =>
    //                                 field.onChange(checked)
    //                               }
    //                             />
    //                           </FormControl>
    //                           <FormLabel className="ml-3">Show/hide</FormLabel>
    //                         </FormItem>
    //                       )}
    //                     />
    //                   </div>
    //                 </button>
    //               ))}

    //             <button
    //               type="button"
    //               className={clsx(
    //                 "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-blue-400"
    //               )}
    //               onClick={() => addNewExperience()}
    //             >
    //               New experience
    //             </button>
    //           </div>
    //         </ScrollArea>
    //       </div>
    //       <div className="grow p-3">
    //         {form.watch("experiences")?.map((experience, experienceIndex) => (
    //           <div
    //             key={"experience-" + experienceIndex}
    //             className={clsx(
    //               "grow p-3 flex flex-col gap-2",
    //               experienceIndex !== resumeSubSectionIndex && "hidden"
    //             )}
    //           >
    //             <Button
    //               variant="destructive"
    //               size="icon"
    //               onClick={() => removeExperience(experienceIndex)}
    //               type="button"
    //             >
    //               <DeleteIcon className="h-4 w-4" />
    //             </Button>
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.role`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Role</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="role" {...field} />
    //                   </FormControl>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.company`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Role</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="company" {...field} />
    //                   </FormControl>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.isShowLocation`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormControl>
    //                     <Checkbox
    //                       checked={field.value}
    //                       onCheckedChange={(checked) => field.onChange(checked)}
    //                     />
    //                   </FormControl>
    //                   <FormLabel className="ml-3">isShowLocation</FormLabel>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.location`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>location</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="location" {...field} />
    //                   </FormControl>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.isShowDate`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormControl>
    //                     <Checkbox
    //                       checked={field.value}
    //                       onCheckedChange={(checked) => field.onChange(checked)}
    //                     />
    //                   </FormControl>
    //                   <FormLabel className="ml-3">isShowDate</FormLabel>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.from`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>from</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="from" {...field} />
    //                   </FormControl>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.to`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>to</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="to" {...field} />
    //                   </FormControl>
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name={`experiences.${experienceIndex}.isShowPoints`}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormControl>
    //                     <Checkbox
    //                       checked={field.value}
    //                       onCheckedChange={(checked) => field.onChange(checked)}
    //                     />
    //                   </FormControl>
    //                   <FormLabel className="ml-3">isShowPoints</FormLabel>
    //                 </FormItem>
    //               )}
    //             />
    //             {experience?.points?.map((_, pointIndex) => (
    //               <div
    //                 className="flex justify-center items-center gap-2"
    //                 key={`experiences.${experienceIndex}.points.${pointIndex}`}
    //               >
    //                 <div className="grow">
    //                   <FormField
    //                     key={pointIndex}
    //                     control={form.control}
    //                     name={`experiences.${experienceIndex}.points.${pointIndex}`}
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormLabel>point</FormLabel>
    //                         <FormControl>
    //                           <Textarea placeholder="point" {...field} />
    //                         </FormControl>
    //                       </FormItem>
    //                     )}
    //                   />
    //                 </div>

    //                 <button
    //                   type="button"
    //                   className="grow-0"
    //                   onClick={() => removePoint(experienceIndex, pointIndex)}
    //                 >
    //                   remove
    //                 </button>
    //               </div>
    //             ))}
    //             <button
    //               type="button"
    //               onClick={() => addNewPoint(experienceIndex)}
    //             >
    //               AddPoint
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <Button type="submit" disabled={!form.formState.isValid}>
    //       Submit
    //     </Button>
    //   </form>
    // </Form>
  );
};
