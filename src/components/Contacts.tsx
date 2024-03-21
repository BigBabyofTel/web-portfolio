import github from "@/assets/github-l.svg";
import outlook from "@/assets/outlook.svg";
import linkedin from "@/assets/linkedin-l.svg";
import discord from "@/assets/discord-l.svg";
import reddit from "@/assets/reddit-l.svg";

export default function Contacts() {
  interface Contact {
    id: number;
    account: string;
    url: string;
    svgComponent: string;
  }

  const contacts: Contact[] = [
    {
      id: 0,
      account: "GitHub",
      url: "https://github.com/BigBabyofTel",
      svgComponent: github,
    },
    {
      id: 1,
      account: "Outlook",
      url: "mailto:augustus.tb@outlook.com",
      svgComponent: outlook,
    },
    {
      id: 3,
      account: "LinkedIn",
      url: "https://www.linkedin.com/in/taugustusb",
      svgComponent: linkedin,
    },
    {
      id: 4,
      account: "Reddit",
      url: "https://www.reddit.com/user/BigBabyofTel/",
      svgComponent: reddit,
    },
    {
      id: 5,
      account: "Discord",
      url: "https://discordapp.com/users/1089614219600732160",
      svgComponent: discord,
    },
  ];

  const displayContact = contacts.map((contact) => (
    <section key={contact.id}>
      <a href={contact.url}>
        <img src={contact.svgComponent} className="w-1/2 mx-auto my-2" />
      </a>
    </section>
  ));

  return (
    <div className="w-full lg:my-30 rounded-3xl bg-blue-400" id="contact">
      <h2 className="text-2xl py-5 flex justify-center dark:text-white">
        Contact
      </h2>
      <div className="flex flex-row">{displayContact}</div>
    </div>
  );
}
