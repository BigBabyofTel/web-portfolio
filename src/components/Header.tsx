export default function Header() {
  return (
    <header className="w-full h-[400px] border p-5 text-center flex flex-col bg-[url('/public/sinai.jpg')] bg-center">
      <h1 className="text-5xl text-black dark:text-white lg:text-8xl">
        T. Augustus Baker
      </h1>
      <h2 className="text-3xl text-black dark:text-white lg:text-7xl">
        Aspiring Web Dev
      </h2>
    </header>
  );
}
