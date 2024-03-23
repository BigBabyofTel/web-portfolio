import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full h-[800px] rounded-3xl text-center shadow-[#C38055] dark:shadow-inner dark:shadow-[#bf907e] border-2 dark:border-[#571c2e] dark:bg-[#571c2e] bg-[#bf907e] dark:text-[#eeb29e] lg:flex lg:justify-around lg:items-center">
      <img
        src="/dahab.jpg"
        alt="the sinai"
        className="w-full rounded-3xl lg:w-1/4"
      />
      <div className="flex flex-col p-5 my-3">
        <h1 className="text-4xl text-[#000] dark:text-[#eeb29b] lg:text-8xl">
          Hello, I'm T. Augustus Baker
        </h1>
        <h2 className="text-3xl text-[#000] dark:text-[#eeb29b] lg:text-7xl">
          Aspiring Web Developer
        </h2>
        <p className="text-lg lg:text-2xl py-2 my-2 text-[#000] dark:text-[#eeb29b] font-bold">
          Let's work together
        </p>
        <Button size={"lg"} variant={"default"}>
          <a href="#contact">Inquiry</a>
        </Button>
      </div>
    </header>
  );
}
