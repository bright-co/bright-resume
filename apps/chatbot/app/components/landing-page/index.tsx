"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { GithubIcon } from "@resume-template-components/icons";
import {
  Button,
  Card,
  CardContent,
  Input,
} from "@resume-template-components/shadcn-ui";
import { CheckCircle, FileText, Menu, Star, Users, X, Zap } from "lucide-react";

import { useData } from "./index.hook";
import { TEXTS } from "./texts";

export const Index: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useData();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-background z-50">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 mr-2" />
          <span className="font-bold">{TEXTS.header.logo}</span>
        </Link>
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex absolute lg:relative top-14 lg:top-0 left-0 right-0 flex-col lg:flex-row items-center bg-background lg:ml-auto gap-4 p-4 lg:p-0`}
        >
          {TEXTS.header.nav.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium hover:underline underline-offset-4"
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {TEXTS.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  {TEXTS.hero.description}
                </p>
              </div>
              <div className="space-x-4">
                <Link href={TEXTS.hero.cta.buttonLink}>
                  <Button>{TEXTS.hero.cta.buttonText}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-100 to-blue-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              {TEXTS.features.title}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {TEXTS.features.items.map((feature, index) => (
                <Card key={index} className="bg-white/80  backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    {feature.icon === "CheckCircle" && (
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    )}
                    {feature.icon === "Zap" && (
                      <Zap className="h-12 w-12 text-yellow-500" />
                    )}
                    {feature.icon === "Users" && (
                      <Users className="h-12 w-12 text-blue-500" />
                    )}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-center text-gray-500">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-100 to-orange-100 "
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              {TEXTS.testimonials.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TEXTS.testimonials.items.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white/80  backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 ">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="mb-4 italic">{`"${testimonial.content}"`}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-100 to-pink-100 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {TEXTS.cta.title}
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  {TEXTS.cta.description}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder={TEXTS.cta.inputPlaceholder}
                    type="email"
                  />
                  <Button type="submit">{TEXTS.cta.buttonText}</Button>
                </form>
                <p className="text-xs text-gray-500 ">{TEXTS.cta.disclaimer}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 to-cyan-100 "
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="h-12 w-12">
                <GithubIcon />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {TEXTS.about.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                {TEXTS.about.description}
              </p>
              <a href={TEXTS.about.buttonLink}>
                <Button variant="outline">
                  <div className="mr-2 h-4 w-4">
                    <GithubIcon />
                  </div>
                  {TEXTS.about.buttonText}
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-100 to-purple-100 "
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {TEXTS.contact.title}
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                {TEXTS.contact.description}
              </p>
              <a
                href={`mailto:${TEXTS.contact.email}`}
                className="text-primary hover:underline"
              >
                {TEXTS.contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 ">{TEXTS.footer.copyright}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {TEXTS.footer.links.map((link, index) => (
            <Link
              key={index}
              className="text-xs hover:underline underline-offset-4"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
};
