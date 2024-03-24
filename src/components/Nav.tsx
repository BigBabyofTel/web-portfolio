import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <div className="flex justify-between items-center text-center p-2 mt-1 mb-4 shadow-md bg-[#bf907e] dark:bg-[#571c2e] dark:shadow-[#bf907e] rounded-3xl">
      <ModeToggle />
      <div className="mr-5">
        <a href="#aboutMe" className="p-2 text-[#000] dark:text-[#eeb29b] font-serif">
          <strong>About Me</strong>
        </a>
        <a href="#skills" className="p-2 text-[#000] dark:text-[#eeb29b] font-serif">
          <strong>Skills</strong>
        </a>
        <a href="#exhibits" className="p-2 text-[#000] dark:text-[#eeb29b] font-serif">
          <strong>Exhibits</strong>
        </a>
        <a href="#contact" className="p-2 text-[#000] dark:text-[#eeb29b] font-serif">
          <strong>Contact</strong>
        </a>
      </div>
    </div>
  );
}
