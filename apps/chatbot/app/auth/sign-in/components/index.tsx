"use client";

import Link from "next/link";
import {
  GithubIcon,
  GoogleIcon,
  LinkedinIcon,
} from "@resume-template-components/icons";
import { Loader } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Label,
} from "@resume-template-components/shadcn-ui";
import { Logo } from "@@chatbot/app/components/logo";

import { useData } from "./useData";
import { TEXTS } from "./texts";

export function SignInPage() {
  const { form, onSubmit, loading } = useData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link href="/" className="mb-8 text-center">
        <div className="inline-block p-2 text-primary-foreground rounded-full mb-2">
          <Logo width={68} height={68} />
        </div>
        <h1 className="text-3xl font-bold text-primary">{TEXTS.logoAltText}</h1>
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{TEXTS.signInTitle}</CardTitle>
          <CardDescription>{TEXTS.signInDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">{TEXTS.usernameLabel}</Label>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={TEXTS.usernameLabel} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{TEXTS.passwordLabel}</Label>
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
                {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                {TEXTS.signInButton}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            {TEXTS.dontHaveAccount}{" "}
            <Link href="/auth/sign-up" className="text-primary hover:underline">
              {TEXTS.signUpLink}
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
                {TEXTS.orContinueWith}
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
