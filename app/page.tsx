import Image from "next/image";
import ThreeScene from '../components/ThreeScene';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Look at this cube</h1>
      <ThreeScene />
    </main>
  );
}
