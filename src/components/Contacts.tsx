import github from "@/assets/github-l.svg";
  import outlook from "@/assets/outlook.svg";
  import linkedin from "@/assets/linkedin-l.svg";
  import discord from "@/assets/discord-l.svg";
  import reddit from "@/assets/reddit-l.svg";


export default function Contacts() {


    return (

        <>
        <div className="w-full flex flex-col my-10">
        <h2 className="text-5xl p-5 flex justify-center dark:text-white">Contact</h2>
        <section className="flex items-center">
          <span>
            <a
              href="https://github.com/BigBabyofTel"
              className="flex justify-center"
            >
              <img src={github} className="w-1/2 lg:w-1/4" alt="github icon" />
            </a>
          </span>
          <span>
            <a
              href="mailto:augustus.tb@outlook.com"
              className="flex justify-center"
            >
              <img
                src={outlook}
                className="w-1/2 lg:w-1/4"
                alt="outlook icon"
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/taugustusb"
              className="flex justify-center"
            >
              <img
                src={linkedin}
                className="w-1/2 lg:w-1/4"
                alt="linkedin icon"
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.reddit.com/user/BigBabyofTel/"
              className="flex justify-center"
            >
              <img src={reddit} className="w-1/2 lg:w-1/4" alt="reddit icon" />
            </a>
          </span>
          <span>
            <a
              href="https://discordapp.com/users/1089614219600732160"
              className="flex justify-center"
            >
              <img
                src={discord}
                className="w-3/4 lg:w-1/3"
                alt="discord icon"
              />
            </a>
          </span>
        </section>
      </div>
        </>
    )
}