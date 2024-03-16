import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
          <DropdownMenuItem>
            <a href="#aboutMe">About Me</a>
          </DropdownMenuItem>
          <DropdownMenuItem>Skills</DropdownMenuItem>
          <DropdownMenuItem>Exhibits</DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#contact">Contact</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
