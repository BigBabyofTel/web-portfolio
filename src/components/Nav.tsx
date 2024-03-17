import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Nav() {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="default">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <a href="#aboutMe">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#exhibits">Exhibits</a>
          <a href="#contact">Contact</a>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
