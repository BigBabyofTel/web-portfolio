import { ReactMatrixAnimation } from "react-matrix-animation";

export default function Header() {
  return (
    <div className="lg:flex lg:justify-center">
      <ReactMatrixAnimation />
      <header className="w-screen relative bottom-40 lg:absolute lg:bottom-1/3 lg:max-w-screen-lg lg:flex lg:justify-center">
        <div className="m-5 text-center">
          <h1 className="text-5xl text-white lg:text-8xl">T. Augustus Baker</h1>
          <h2 className="text-3xl text-white lg:text-7xl">Aspiring Web Dev</h2>
        </div>
      </header>
      </div>
  );
}
