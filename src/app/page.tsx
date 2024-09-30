"use client"
import react from "react"

import Countdown from "react-countdown"
import { Time } from "./types"
import { Watch } from "react-loader-spinner"

const Completionist = () => (
    <span id="completed">
        Para liberar vuestro tardío regalo de boda el código secreto debereis hallar. Para resolverlo, necesitaréis ver muy detenidamente el siguiente{" "}
        <a href="/challenge">link</a>. Insistimos: MUY detenidamente. Para ayudaros, la caja contiene una herramienta esencial para resolverlo. De hecho, la
        herramienta tiene a su vez también la mitad del código... Buena suerte.
    </span>
)

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
            <div className="relative flex place-items-center">
                <Countdown date={new Date("2024-09-24")} renderer={renderer}>
                    <span>The end</span>
                </Countdown>
            </div>
        </main>
    )
}
