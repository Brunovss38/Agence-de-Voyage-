"use client"
import { useRouter } from "next/navigation";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import {Cards} from"./Components/Cards";
import Image from "next/image";
import "./globals.css"

export default function Home() {
  const {push} = useRouter()
  return (
    <main>
      <Header/>
<div>
 <Image className="	position: relative;" src="/bg-hero.jpg" width={1600} height={500} alt="Bg Hero"/>
 <div>
  <h2 className="text-blue-600 text-center text-xl m-4 font-semibold ">Destinations coup de coeur</h2>
<Cards/>
 </div>
</div>
{/* <Footer/> */}
    </main>
  );
}
