import github from "@/assets/github-l.svg";
import outlook from "@/assets/outlook.svg";
import linkedin from "@/assets/linkedin-l.svg";
import discord from "@/assets/discord-l.svg";

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
      account: "Discord",
      url: "https://discordapp.com/users/1089614219600732160",
      svgComponent: discord,
    },
  ];

  const displayContact = contacts.map((contact) => (
    <section key={contact.id}>
      <a href={contact.url}>
        <img src={contact.svgComponent} className="w-1/2 mx-auto my-2 lg:w-1/4" />
      </a>
    </section>
  ));

  return (
    <div className="mx-auto p-2 my-8 text-center w-full rounded-3xl lg:w-1/2 lg:relative lg:bottom-1/4 flex justify-center flex-col lg:my-10 shadow-xl shadow-[#C38055] dark:shadow-inner dark:shadow-[#bf907e] border-2 dark:border-[#571c2e] dark:bg-[#571c2e] border-[#bf907e]" id="contact">
      <h2 className="text-4xl py-5 flex justify-center text-[#571c2e] dark:text-[#eeb29b]">
        Contact
      </h2>
      <div className="flex flex-row">{displayContact}</div>
    </div>
  );
}
