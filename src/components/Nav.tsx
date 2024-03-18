import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <div className="flex justify-between">
      <ModeToggle/>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="default">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <div className="flex flex-col text-center">
          <a href="#aboutMe" className="p-2">About Me</a>
          <a href="#skills" className="p-2">Skills</a>
          <a href="#exhibits" className="p-2">Exhibits</a>
          <a href="#contact" className="p-2">Contact</a>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
