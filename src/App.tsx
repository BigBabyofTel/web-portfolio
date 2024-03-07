import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import Autoplay from "embla-carousel-autoplay";
import github from "./assets/github-l.svg";
import outlook from "./assets/outlook.svg";
import linkedin from "./assets/linkedin-l.svg";
import discord from "./assets/discord-l.svg";
import reddit from "./assets/reddit-l.svg";
import { ThemeProvider } from './components/ThemeProvider';
import { ModeToggle } from './components/ModeToggle';
import { Children } from 'react';

function App() {
 

  return (
    <ThemeProvider>
      <ModeToggle/>
    <header>
      <div className="border border-blue-500 m-10">
        <img src="./src/assets/reddit.png" alt="reddit avatar" />
      <h1 className="text-2xl">T. Augustus Baker</h1>
      <h2>Aspiring Web Dev</h2>
      </div>
    </header>
    <div className="mx-auto my-15 p-10 text-center w-1/2 flex justify-center flex-col">
          <h2 className="text-5xl p-5 m-10">About Me</h2>
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
            collaboration, and Communication are some of the critical skills
            that I have cultivated during my near decade as an Educator.
          </p>
        </div>
        <div className=" border flex flex-col">
          <h2 className="text-5xl p-5 m-10 flex justify-center">
            Skills
          </h2>
          <section className="flex flex-col text-center mx-auto">
            <Carousel
              className="p-5 m-5 h-60 border"
              plugins={[
                Autoplay({
                  delay: 1000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
                    <CardHeader>
                      <CardTitle>HTML</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
                    <CardHeader>
                      <CardTitle>CSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img />
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
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
              className="p-5 m-5 h-60"
              plugins={[
                Autoplay({
                  delay: 1000,
                }),
              ]}
            >
              <CarouselContent>
              <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
                    <CardHeader>
                      <CardTitle>JavaScript</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
                    <CardHeader>
                      <CardTitle>TypeScript</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
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
              className="p-5 m-5 h-60"
              plugins={[
                Autoplay({
                  delay: 1000,
                }),
              ]}
            >
              <CarouselContent>
              <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
                    <CardHeader>
                      <CardTitle>TailwindCSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img />
                    </CardContent>
                  </Card>
                </CarouselItem>
              <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
                    <CardHeader>
                      <CardTitle>Redux</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="shadow-2xl h-auto w-2/3 mx-auto">
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
        <div className=" border flex justify-center flex-col">
          <h2 className="text-5xl p-5 m-10 flex justify-center">Contact</h2>
          <section className="flex justify-around text-center leading-loose m-5 items-center">
            <span>
              <a href="">
                <img
                  src={github}
                  className="h-1/2 px-5 mx-5 sm:w-40 lg:w-1/2"
                  alt="github icon"
                />
              </a>
            </span>
            <span>
              <a href="">
                <img src={outlook} className="h-1/2 sm:w-40 lg:w-1/2" alt="outlook icon" />
              </a>
            </span>
            <span>
              <a href="">
                <img
                  src={linkedin}
                  className="h-1/2 sm:w-40 lg:w-1/2"
                  alt="linkedin icon"
                />
              </a>
            </span>
            <span>
              <a href="">
                <img src={reddit} className="h-1/2 sm:w-40 lg:w-1/2" alt="reddit icon" />
              </a>
            </span>
            <span>
              <a href="">
                <img
                  src={discord}
                  className="h-2/3 sm:w-2/3 lg:w-1/2"
                  alt="discord icon"
                />
              </a>
            </span>
          </section>
        </div>
        </ThemeProvider>
  )
}

export default App
