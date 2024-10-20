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
import { Loader } from "lucide-react";

import { useData } from "./useData";
import {
  GithubIcon,
  GoogleIcon,
  LinkedinIcon,
} from "@resume-template-components/icons";
import { Logo } from "@@chatbot/app/components/logo";

import { TEXTS } from "./texts";

export function SignUpPage({ BACK_URL }: { BACK_URL: string }) {
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
          <CardTitle>{TEXTS.signUpTitle}</CardTitle>
          <CardDescription>{TEXTS.signUpDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{TEXTS.nameLabel}</Label>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={TEXTS.nameLabel} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">{TEXTS.usernameLabel}</Label>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={TEXTS.usernameLabel}
                          {...field}
                          required
                        />
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
                {TEXTS.signUpButton}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            {TEXTS.alreadyHaveAccount}{" "}
            <Link href="/auth/sign-in" className="text-primary hover:underline">
              {TEXTS.signInLink}
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
                window.location.replace(BACK_URL + "/back/auth/sign-in/google")
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
                window.location.replace(
                  BACK_URL + "/back/auth/sign-in/linkedin"
                )
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
                window.location.replace(BACK_URL + "/back/auth/sign-in/github")
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
