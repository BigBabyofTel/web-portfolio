
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <div className="flex justify-between">
      <ModeToggle/>
       <div className="text-center p-5 mt-1 mb-4 bg-[#9BCBD7] dark:bg-[#005a7d] rounded-3xl shadow-lg shadow-[#bf907e] dark:shadow-[#9bcbd7]">
          <a href="#aboutMe" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>About Me</strong></a>
          <a href="#skills" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>Skills</strong></a>
          <a href="#exhibits" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>Exhibits</strong></a>
          <a href="#contact" className="p-2 text-[#005a7d] dark:text-[#bf907e]"><strong>Contact</strong></a>
          </div>
    </div>
  );
}
