'use client'
import react from "react"
import Image from "next/image";
import Countdown from "react-countdown";
import { Time } from "./types";


const Completionist = () => <span>You are good to go!</span>;

const renderer = (time: Time) => {
  const { days, hours, minutes, seconds, completed } = time;
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} días {hours} horas {minutes} minutos {seconds} segundos</span>;
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center">
        <Countdown date={new Date("2024-09-12")} renderer={renderer}>
          <span>The end</span>
        </Countdown>
      </div>
    </main>
  );
}
