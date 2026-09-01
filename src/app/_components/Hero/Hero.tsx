import Link from "next/link"

const config = [
    {
        server: "Lobby Config",
        tags: [
            "Lobby",
            "NPCs",
            "Menus",
            "Ranks",
            "Utilities",
            "Staff Utilities",
            "Custom Commands"
        ],
        link: "https://youtu.be/7ZjcjEUsOdc"
    },
    {
        server: "KitPvP Config",
        tags: [
            "Minigames",
            "Kill Messages",
            "Kits",
            "Leveling System",
            "Ranks",
            "Tags",
            "Leaderboards",
            "Utilities",
            "Perks",
            "Custom Commands"
        ],
        link: "https://www.youtube.com/watch?v=t5TIcEpVzMY"
    },
    {
        server: "BedWars Config",
        tags: [
            "Minigames",
            "Perks",
            "Kill Messages",
            "Anticheat",
            "Utilities",
            "Cosmetics",
            "Join Messages",
            "Custom Commands"
        ],
        link: "https://www.youtube.com/watch?v=jyf3dWts8wo"
    },
    {
        server: "Lifesteal Config",
        tags: [
            "Player Levels",
            "Ranks",
            "Staff Utilities",
            "Custom Commands",
            "Utilities",
            "New Gamemode",
        ],
        link: "https://www.youtube.com/watch?v=mexzKZOWwJQ"
    },
    {
        server: "Practice Config",
        tags: [
            "Bots",
            "Ranked",
            "Unranked",
            "Utilities",
            "Custom Commands",
            "1.8",
        ],
        link: "https://www.youtube.com/watch?v=N-CL0g6XCgg"
    },
    {
        server: "Practice Config",
        tags: [
            "Bots",
            "Ranked",
            "Unranked",
            "Utilities",
            "Custom Commands",
            "1.8",
        ],
        link: "https://www.youtube.com/watch?v=N-CL0g6XCgg"
    },
]

export function Hero() {
    return (
        <section className="relative text-center overflow-hidden px-6 py-6 md:py-12 md:px-48">
            <header className="text-white flex flex-col font-inter gap-1 md:gap-2">
                <h1 className="font-bold text-3xl md:text-5xl">yyokaii's portfolio</h1>
                <p className="text-yokai-muted text-base md:text-xl">portfolio of my work as configurator</p>
            </header>

            <div className="mt-10 w-full h-0.5 bg-white/5"></div>

            <div className="mt-20 gap-20 flex flex-col md:flex-row md:grid md:grid-cols-3">
                {config.map((server, index) =>
                    <div key={index} className="flex flex-col justify-between w-full min-h-[256px] bg-white/5 border border-solid border-white/10 rounded-[12px] py-3 px-5">
                        <h1 className="text-left font-bold text-white font-inter text-base md:text-xl">{server.server}</h1>
                        {/*
                        <p className="mt-2 text-left text-yokai-muted font-inter text-base">{server.description}</p>
                        */}
                        <div className="mt-0 flex flex-wrap gap-2">
                            {server.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="text-xs text-white font-inter font-normal bg-white/5 border border-solid border-white/10 rounded-full px-2.5 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={server.link}
                            className="mt-6 inline-block text-center text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors py-2 px-4 rounded-lg no-underline"
                        >
                            View Showcase
                        </Link>
                    </div>
                )}
            </div>

            <div className="mt-20 w-full h-0.5 bg-white/5"></div>

            <header className="mt-20 text-white flex flex-col font-inter gap-1 md:gap-2">
                <h1 className="font-bold text-3xl md:text-5xl">Contact</h1>
                <p className="text-yokai-muted text-base md:text-xl">contact me if necessary:</p>
            </header>

            <ol className="mt-10 text-base md:text-lg">
                <li className="font-normal text-yokai-muted">Discord: <span className="font-bold text-white font-inter">@yyokaiii.</span></li>
                <li className="font-normal text-yokai-muted">Email: <span className="font-bold text-white font-inter">nemciksimon1@gmail.com</span></li>
            </ol>
        </section>
    )
}
