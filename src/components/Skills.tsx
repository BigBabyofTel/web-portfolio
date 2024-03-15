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
    <>
      <div className="w-full flex flex-col my-5">
        <h2 className="text-5xl flex justify-center mb-10 dark:text-white">
          Skills
        </h2>
        <section className="w-full flex flex-col text-center mx-auto">
          <Carousel
            className="h-40 m-3"
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="m-3">
              <CarouselItem>
                <Card className="w-3/4 shadow-xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>HTML</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={html} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={css} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
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
            className="h-40 m-3"
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="m-3">
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>JavaScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={js} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>TypeScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={ts} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
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
            className="h-40 m-3"
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="m-3">
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>TailwindCSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={tailwind} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>Redux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={redux} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white">
                  <CardHeader>
                    <CardTitle>Bun</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={bun} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto dark:shadow-white dark:shadow-inner">
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
    </>
  );
}
