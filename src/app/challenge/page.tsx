import react from "react"

export default function Challenge() {
    return (
        <div style={{ padding: "75% 0 0 0", position: "relative" }}>
            <iframe
                src="https://player.vimeo.com/video/1014223181?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                title="cops"
            ></iframe>
        </div>
    )
}
