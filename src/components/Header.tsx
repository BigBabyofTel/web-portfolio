import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full h-[800px] flex flex-col items-center rounded-3xl text-center shadow-[#C38055] dark:shadow-inner dark:shadow-[#bf907e] border-2 dark:border-[#571c2e] dark:bg-[#571c2e] bg-[#bf907e] dark:text-[#eeb29e] lg:flex lg:justify-around lg:items-center">
      <img
        src="/dahab.jpg"
        alt="the sinai"
        className="w-4/5 p-2 rounded-3xl lg:w-1/4"
      />
      <div className="flex flex-col p-5">
        <h1 className="text-5xl text-[#000] dark:text-[#eeb29b] font-grenzegotisch lg:text-8xl">
          Hello, I'm T. Augustus Baker
        </h1>
        <h2 className="text-4xl text-[#000] dark:text-[#eeb29b] font-grenzegotisch lg:text-7xl">
          Aspiring Web Developer
        </h2>
        <p className="text-lg lg:text-2xl py-5 my-5 text-[#000] dark:text-[#eeb29b] font-serif font-bold">
          Let's work together
        </p>
        <Button size={"lg"} variant={"default"}>
          <a href="#contact" className="font-serif font-bold">Inquiry</a>
        </Button>
      </div>
    </header>
  );
}
