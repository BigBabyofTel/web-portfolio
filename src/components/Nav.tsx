
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <div className="flex justify-between items-center text-center p-2 mt-1 mb-4 bg-[#9BCBD7] dark:bg-[#005a7d] rounded-3xl shadow-md shadow-[#bf907e] dark:shadow-[#9bcbd7]">
      <ModeToggle/>
       <div className="mr-5">
          <a href="#aboutMe" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>About Me</strong></a>
          <a href="#skills" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>Skills</strong></a>
          <a href="#exhibits" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>Exhibits</strong></a>
          <a href="#contact" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>Contact</strong></a>
          </div>
    </div>
  );
}
