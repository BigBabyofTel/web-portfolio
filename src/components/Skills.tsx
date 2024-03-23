import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import html from "@/assets/html-5.svg";
import css from "@/assets/css-3.svg";
import js from "@/assets/js.svg";
import bootstrap from "@/assets/bootstrap.svg";
import ts from "@/assets/typescript.svg";
import react from "@/assets/react.svg";
import redux from "@/assets/redux.svg";
import tailwind from "@/assets/tailwind.svg";
import bun from "@/assets/bun1.svg";
import vite from "@/assets/vite.svg";

export default function Skills() {
  return (
    <div
      className="mx-auto p-5 my-8 text-center w-full rounded-3xl lg:w-1/2 flex justify-center flex-col lg:my-28 shadow-xl shadow-[#C38055] dark:shadow-inner dark:shadow-[#bf907e] dark:bg-[#571c2e] border-2 dark:border-[#571c2e] border-[#bf907e] "
      id="skills"
    >
      <h2 className="text-4xl lg:text-5xl flex justify-center p-5 text-[#000] dark:text-[#eeb29b]">
        Skills
      </h2>
      <section className="w-full flex flex-col text-center mx-auto lg:w-4/5">
        <Carousel
          className="h-1/2 w-auto m-3 lg:flex lg:items-center"
          plugins={[
            Autoplay({
              delay: 1500,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="m-3">
            <CarouselItem>
              <Card className="w-3/4 shadow-xl mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2 dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>HTML</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={html} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2 dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>CSS</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={css} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#cbf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2  dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
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
          className="h-1/4 m-3 w-auto lg:flex lg:items-center"
          plugins={[
            Autoplay({
              delay: 1500,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="m-3">
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2 dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>JavaScript</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={js} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2  dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>TypeScript</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={ts} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#cf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2  dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
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
          className="h-1/4 m-3 lg:flex lg:items-center"
          plugins={[
            Autoplay({
              delay: 1500,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="m-3">
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2  dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>TailwindCSS</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={tailwind} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2  dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>Redux</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={redux} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2 dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
                <CardHeader>
                  <CardTitle>Bun</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={bun} className="w-1/4 mx-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#bf907e] text-[#000] dark:text-[#eeb29b] lg:w-1/2 dark:border-2 dark:shadow-[#571c2e] dark:bg-[#571c2e] y dark:shadow-inner">
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
  );
}
