export default function Header() {
  return (
    <header className="w-full h-[400px] rounded-3xl text-center flex flex-col bg-[url('/sinai.jpg')] bg-cover bg-center bg-no-repeat justify-center">
      <div className=" bg-gray-500 opacity-75">
      <h1 className="text-5xl text-black dark:text-white lg:text-8xl">
        T. Augustus Baker
      </h1>
      <h2 className="text-3xl text-black dark:text-white lg:text-7xl">
        Aspiring Web Dev
      </h2>
      </div>
    </header>
  );
}
