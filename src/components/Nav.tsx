import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <div className="flex justify-between items-center text-center p-2 mt-1 mb-4 shadow-md shadow-[#0022BF] bg-[#C38055] dark:bg-[#571C2E] rounded-3xl">
      <ModeToggle />
      <div className="mr-5">
        <a href="#aboutMe" className="p-2 text-[#571C2E] dark:text-[#bf907e]">
          <strong>About Me</strong>
        </a>
        <a href="#skills" className="p-2 text-[#571C2E] dark:text-[#bf907e]">
          <strong>Skills</strong>
        </a>
        <a href="#exhibits" className="p-2 text-[#571C2E] dark:text-[#bf907e]">
          <strong>Exhibits</strong>
        </a>
        <a href="#contact" className="p-2 text-[#571C2E] dark:text-[#bf907e]">
          <strong>Contact</strong>
        </a>
      </div>
    </div>
  );
}
