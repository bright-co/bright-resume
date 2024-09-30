"use client";

import Link from "next/link";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Label,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@resume-template-components/shadcn-ui";

import { useData } from "./useData";
import {
  GithubIcon,
  GoogleIcon,
  LinkedinIcon,
} from "@resume-template-components/icons";

export default function Page() {
  const { form, onSubmit } = useData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-8 text-center">
        <div className="inline-block p-2 bg-primary text-primary-foreground rounded-full mb-2">
          <svg
            className="w-12 h-12"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2 2 7l10 5 10-5-10-5Z" />
            <path d="m2 17 10 5 10-5" />
            <path d="m2 12 10 5 10-5" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-primary">Bright Resume</h1>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your Bright Resume account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">username</Label>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Username" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="Password" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={!form.formState.isValid}
              >
                Sign Up
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="h-20"
              onClick={() =>
                window.location.replace("/back/auth/sign-in/google")
              }
            >
              <div className="w-14 h-14">
                <GoogleIcon />
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-20"
              onClick={() =>
                window.location.replace("/back/auth/sign-in/linkedin")
              }
            >
              <div className="w-14 h-14">
                <LinkedinIcon />
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-20"
              onClick={() =>
                window.location.replace("/back/auth/sign-in/github")
              }
            >
              <div className="w-14 h-14">
                <GithubIcon />
              </div>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
