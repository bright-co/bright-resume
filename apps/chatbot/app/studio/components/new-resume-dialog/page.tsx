"use client";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@resume-template-components/shadcn-ui";

import { useData } from "./index.hook";

export default function Page() {
  const { form, onSubmit } = useData();

  const renderForm = () => {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full max-w-96"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of Your username</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            Submit
          </Button>
        </form>
      </Form>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center w-100 h-screen gap-1  px-4">
      <h1 className="text-2xl mb-3">Sign in</h1>
      {renderForm()}
    </div>
  );
}
