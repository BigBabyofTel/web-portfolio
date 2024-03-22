import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full h-[800px] rounded-3xl text-center bg-[#C38055] dark:bg-[#571C2E] lg:flex lg:justify-around lg:items-center">
      <img
        src="/dahab.jpg"
        alt="the sinai"
        className="w-full rounded-3xl lg:w-1/4"
      />
      <div className="flex flex-col p-5 my-3">
        <h1 className="text-4xl text-[#571C2E] dark:text-[#bf907e] lg:text-8xl">
          Hello, I'm T. <span>Augustus</span> Baker
        </h1>
        <h2 className="text-3xl text-[#571C2E] dark:text-[#bf907e] lg:text-7xl">
          Aspiring Web Developer
        </h2>
        <p className="text-lg lg:text-2xl py-2 my-2 text-[#571C2E] dark:text-[#bf907e]">
          Let's work together
        </p>
        <Button size={"lg"} variant={"default"}>
          <a href="#contact">Inquiry</a>
        </Button>
      </div>
    </header>
  );
}
