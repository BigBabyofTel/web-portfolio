import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full h-[800px] rounded-3xl my-2 text-center bg-[#9BCBD7] dark:bg-[#005a7d] lg:flex lg:justify-around lg:items-center shadow-xl shadow-[#bf907e] dark:shadow-[#9bcbd7]">
      <img src="/sinai.jpg" alt="the sinai" className="w-full rounded-3xl" />
      <div className="flex flex-col p-10 my-6">
      <h1 className="text-5xl text-[#005a7d] dark:text-[#bf907e] lg:text-8xl">
        Hello, I'm T. Augustus Baker
      </h1>
      <h2 className="text-3xl text-[#005a7d] dark:text-[#bf907e] lg:text-7xl">
        Aspiring Web Developer
      </h2>
      </div>
      <div className="my-2">
        <p className="text-lg p-5 text-[#005a7d] dark:text-[#bf907e]">Let's work together</p>
      <Button size={"lg"} variant={"default"}><a href="#contact">Inquiry</a></Button>      
      </div>    
    </header>
  );
}
