export default function Header() {
  return (
    <header className="w-full h-[400px] border text-center flex flex-col bg-[url('/public/sinai.jpg')] bg-cover bg-bottom bg-no-repeat justify-center">
      <div className=" bg-gray-500 opacity-75">
      <h1 className="text-3xl text-black dark:text-white lg:text-8xl">
        T. Augustus Baker
      </h1>
      <h2 className="text-xl text-black dark:text-white lg:text-7xl">
        Aspiring Web Dev
      </h2>
      </div>
    </header>
  );
}
