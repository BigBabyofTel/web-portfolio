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
      <div className="mx-auto m-10 p-10 text-center w-full lg:w-1/2 flex justify-center flex-col border">
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
      <div className="w-full border flex flex-col">
        <h2 className="text-5xl flex justify-center mb-10">Skills</h2>
        <section className="w-full flex flex-col text-center mx-auto">
          <Carousel
            className="h-40"
            plugins={[
              Autoplay({
                delay: 1000,
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
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Bootstrap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            className="h-40"
            plugins={[
              Autoplay({
                delay: 1000,
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
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>TypeScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>React</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            className="h-40"
            plugins={[
              Autoplay({
                delay: 1000,
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
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Redux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto">
                  <CardHeader>
                    <CardTitle>Bun</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
      </div>
      <div className="w-full border flex flex-col basis-1/2">
        <h2 className="text-5xl p-5 flex justify-center">Contact</h2>
        <section className="border flex items-center">
          <span className="border">
            <a href="">
              <img src={github} className="w-1/2 lg:w-1/2" alt="github icon" />
            </a>
          </span>
          <span className="border">
            <a href="">
              <img
                src={outlook}
                className="w-1/2 lg:w-1/2"
                alt="outlook icon"
              />
            </a>
          </span>
          <span>
            <a href="">
              <img
                src={linkedin}
                className="w-1/2 lg:w-1/2"
                alt="linkedin icon"
              />
            </a>
          </span>
          <span>
            <a href="">
              <img
                src={reddit}
                className="w-2/3 lg:w-1/2 border"
                alt="reddit icon"
              />
            </a>
          </span>
          <span>
            <a href="">
              <img
                src={discord}
                className="w-3/4 lg:w-1/2 border"
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
