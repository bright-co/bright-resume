"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
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
import { Save, Upload } from "lucide-react";
import { FC, useState } from "react";

import clsx from "clsx";
import { TEXTS } from "./texts";
import { useData } from "./use-data";

export const Header: FC = () => {
  const { form, onSubmit } = useData();

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex px-1 items-start pb-2 ">
        <h3 className="text-2xl font-bold flex-grow mt-1">
          {"Personal Information"}
        </h3>
        <Button
          className="mt-2 "
          size={"sm"}
          type="submit"
          disabled={!form.formState.isValid}
        >
          <Save className="mr-2 h-4 w-4" /> {TEXTS.header.saveChangesButton}
        </Button>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <Card className={clsx("min-h-full", "w-full")}>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2 mb-6">
            <FormField
              control={form.control}
              name={`title`}
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>{"Resume Title"}</FormLabel>
                  <FormControl>
                    <Input placeholder={"Resume Title"} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={imageUrl || ""} alt="Profile" />
                <AvatarFallback>
                  {form
                    .getValues("name")
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <div className="flex items-center space-x-2 text-sm text-primary hover:underline">
                    <Upload className="h-4 w-4" />
                    <span>Upload Image</span>
                  </div>
                </Label>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name={`isShowImage`}
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
                        <FormLabel className="ml-3">{"Show Image"}</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Name"}</FormLabel>
                    <FormControl>
                      <Input placeholder={"Your Name"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name={`role`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Role"}</FormLabel>
                    <FormControl>
                      <Input placeholder={"Role"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="phone-number">Phone Number</Label>
                <FormField
                  control={form.control}
                  name={`isShowPhoneNumber`}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">{"Show"}</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`phoneNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={"PhoneNumber"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="phone-number">Linkedin</Label>
                <FormField
                  control={form.control}
                  name={`isShowLinkedin`}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">{"Show"}</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`linkedin`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={"linkedin"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="phone-number">Website</Label>
                <FormField
                  control={form.control}
                  name={`isShowWebsite`}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">{"Show"}</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`website`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={"Website"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="phone-number">Email</Label>
                <FormField
                  control={form.control}
                  name={`isShowEmail`}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">{"Show"}</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`email`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={"Email"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="phone-number">Location</Label>
                <FormField
                  control={form.control}
                  name={`isShowLocation`}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">{"Show"}</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`location`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={"location"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="phone-number">BirthDay</Label>
                <FormField
                  control={form.control}
                  name={`isShowBirthDay`}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">{"Show"}</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`birthDay`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={"BirthDay"} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex-grow flex flex-col h-full max-h-full"
      >
        {renderHeader()}
        <div className={clsx("flex space-x-1 flex-grow overflow-hidden")}>
          <ScrollArea className="w-full">{renderForm()}</ScrollArea>
        </div>
      </form>
    </Form>
  );
};
