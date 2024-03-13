import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import github from "./assets/github-l.svg";
import outlook from "./assets/outlook.svg";
import linkedin from "./assets/linkedin-l.svg";
import discord from "./assets/discord-l.svg";
import reddit from "./assets/reddit-l.svg";
import avatar from "./assets/avatar.svg";
import html from "@/assets/html-5.svg";
import css from "@/assets/css-3.svg";
import js from "@/assets/js.svg";
import bootstrap from "@/assets/bootstrap.svg";
import ts from "@/assets/typescript.svg";
import react from "@/assets/react.svg";
import redux from "@/assets/redux.svg";
import tailwind from "@/assets/tailwind.svg";
import bun from "@/assets/bun 1.svg";
import vite from "@/assets/vite.svg";
import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ModeToggle";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <header className="border-4 w-screen">
        <div>
          <div className="text-center mb-8 dark:bg-black">
            <h1 className="text-5xl dark:text-gray-400">T. Augustus Baker</h1>
            <h2 className="text-3xl lg:text-5xl dark:text-gray-400">
              Aspiring Web Dev
            </h2>
          </div>
          <section className="">
            <img src={avatar} alt="reddit avatar" className="w-1/6 mx-auto" />
          </section>
        </div>
      </header>
      <div className="mx-auto m-10 p-10 text-center w-full lg:w-1/2 flex justify-center flex-col">
        <h2 className="text-5xl lg:text-5xl p-5 m-5 border">About Me</h2>
        <p className="mb-5 flex leading-10">
          I’ve spent a year studying Front-End Web Development. Learning the
          basics and applying them to understand core concepts, I hope to be
          able to offer my services for individuals and businesses alike;
          Moreover, perpetually, all aspects of my life involve learning and
          growing.
        </p>
        <p className="flex leading-10">
          For almost a decade, I have been living in Cairo teaching in the
          British Primary School system. I have worked at 4 schools during my
          time and gained the skills of an effective teacher. Problem solving,
          collaboration, and communication are some of the critical skills that
          I have cultivated during my near decade as an Educator. These skills
          contribute to my work as a web developer.
        </p>
      </div>
      <div className="w-full flex flex-col">
        <h2 className="text-5xl flex justify-center mb-10">Skills</h2>
        <section className="w-full flex flex-col text-center mx-auto">
          <Carousel
            className="h-40"
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>HTML</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={html} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={css} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Bootstrap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={bootstrap} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            className="h-40"
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>JavaScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={js} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>TypeScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={ts} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>React</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={react} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            className="h-40"
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>TailwindCSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={tailwind} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Redux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={redux} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Bun</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={bun} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Vite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={vite} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
      </div>
      <div className="w-full border flex flex-col basis-1/2">
        <h2 className="text-5xl p-5 flex justify-center">Contact</h2>
        <section className="flex items-center">
          <span>
            <a
              href="https://github.com/BigBabyofTel"
              className="flex justify-center"
            >
              <img src={github} className="w-1/2 lg:w-1/4" alt="github icon" />
            </a>
          </span>
          <span>
            <a
              href="mailto:augustus.tb@outlook.com"
              className="flex justify-center"
            >
              <img
                src={outlook}
                className="w-1/2 lg:w-1/4"
                alt="outlook icon"
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/taugustusb"
              className="flex justify-center"
            >
              <img
                src={linkedin}
                className="w-1/2 lg:w-1/4"
                alt="linkedin icon"
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.reddit.com/user/BigBabyofTel/"
              className="flex justify-center"
            >
              <img src={reddit} className="w-1/2 lg:w-1/4" alt="reddit icon" />
            </a>
          </span>
          <span>
            <a
              href="https://discordapp.com/users/1089614219600732160"
              className="flex justify-center"
            >
              <img
                src={discord}
                className="w-3/4 lg:w-1/3"
                alt="discord icon"
              />
            </a>
          </span>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
