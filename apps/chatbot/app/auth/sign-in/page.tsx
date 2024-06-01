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

import { useData } from "./useData";

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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="Password" {...field} />
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
