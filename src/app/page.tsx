"use client"
import react from "react"
import Image from "next/image"

import Countdown from "react-countdown"
import { Time } from "./types"
import { Watch } from "react-loader-spinner"

const Completionist = () => <span>El código secreto para liberar vuestro tardío regalo de boda se encuentra en el interior de la caja. Buena suerte.</span>

const renderer = (time: Time) => {
    const { days, hours, minutes, seconds, completed } = time
    if (completed) {
        // Render a completed state
        return <Completionist />
    } else {
        // Render a countdown
        return (
            <span>
                {days} días <br />
                {hours} horas <br />
                {minutes} minutos <br />
                {seconds} segundos
                <Watch visible={true} height="80" width="80" radius="48" color="#545454" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClass="" />
            </span>
        )
    }
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative z-[-1] flex place-items-center">
                <Countdown date={new Date("2024-09-23")} renderer={renderer}>
                    <span>The end</span>
                </Countdown>
            </div>
        </main>
    )
}
