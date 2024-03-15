import { ReactMatrixAnimation } from "react-matrix-animation";

export default function Header() {
  return (
    <>
      <ReactMatrixAnimation />
      <header className="w-screen relative bottom-40">
        <div className="text-center mb-8">
          <h1 className="text-5xl text-white">T. Augustus Baker</h1>
          <h2 className="text-3xl text-white">Aspiring Web Dev</h2>
        </div>
      </header>
    </>
  );
}
