document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || "en";
    setLanguage(saved);
    if (saved === "sk")
        changeFlag(true);
});

let currLang = "en";

const translation = {
    en: {
        headerLeft: "Portfolio",
        aboutMe: "About Me:",
        oPH: "We\'ve also worked on projects together...",
        aboutMeTextF: "Junior game & web developer and electronics student. \nStudying game design and development, fullstack web development and basic electronics."
            + "\nProficient in C# as a primary language, also experienced in C++, HTML, PHP (Laravel), CSS, JS, SQL."
            + "\nMore confident in frontend and design.",
        aboutMeTextR: "Junior game and web developer, primarily studying game, but also website development."
            + "\nProficient in the languages C# and Lua, but also confident in GLSL, HTML, JS, PHP (Laravel), SQL queries and have seen C++."
            + "\nPrimarily experienced in backend (coding, logic, futureproofing..) works."
            + "\nOpen to learning new languages, frameworks, environments and concepts."
        ,
        oPT: "We have a few group projects we\'re proud to present."
            + "\nWe\'ve worked on them together, which allowed us to learn how to efficiently split our roles and manage our tasks."
        ,
        myProjects: "Personal Projects:",
        ourProjects: "Our group projects:",

        // filipko
        p1FH: "C++ Peggle",
        p1FC1: "A work in progress C++ remake of the classic game Peggle (2007)."
            + "\nBuilt with a custom no-GUI engine",
        p1FC1I1: "Main menu screen",
        p1FC1I2: "Level selector screen",

        p2FH: "Electronics",
        p2FC1H: "Distance sensor",
        p2FC1: "A simple distance sensor made using arduino and an ultrasonic sensor.\nPrints out the distance on an LCD display.",
        p2FC1I1: "Book close to sensor",
        p2FC1I2: "Close LCD reading",
        p2FC1I3: "Book far from sensor",
        p2FC1I4: "Far LCD reading",
        p2FC2H: "Home sensor",
        p2FC2: "All in one home wellbeing sensor, includes light and temperature control printing the current state on an LCD display, as well as a smoke sensor with an inbuilt alarm.",
        p2FC2I1: "Normal data reading",
        p2FC2I2: "Low temperature level reading",
        p2FC2I3: "High light level reading",
        p2FC2I4: "Smoke deteted",


        p3FH: "C# Console & Forms apps",
        p3FC1H: "Command Line",
        p3FC1: "Custom windows based command line with basic commands and directory navigation.\nCan be used to make, remove, copy directories, edit files...",
        p3FC1I1: "-help and find command output",
        p3FC1I2: "DIR command output",
        p3FC2H: "Tree",
        p3FC2: "Linux 'tree' command recreated for windows.\nThis command prints out a list of all files in the current directory (and subdirectories) in a treelike branching pattern.",
        p3FC2I1: "-help command output",
        p3FC2I2: "Tree view of debug directories",
        p3FC2I3: "Tree view of debug files",
        p3FC2I4: "Tree view of Desktop folder",
        p3FC3H: "Paint",
        p3FC3: "Paint program with basic functions such as drawing, erasing, various shapes.",
        p3FC3I1: "Paint GUI",
        p3FC3I2: "Shape selector",
        p3FC3I3: "Rectangle shape drawing",
        p3FC3I4: "Reverse triangle drawing",


        p4FH: "Websites",
        p4FC1H: "DPB webpage",
        p4FC1: "A one to one recreation of the Dopravný Podnik Bratislava home page from 2023. No functionallity.",
        p4FC1I4: "avtobus",
        p4FC2H: "Calculator",
        p4FC2: "Simple JS powered calculator.",
        p4FC2I1: "Calculator layout",
        p4FC2I2: "First input",
        p4FC2I3: "Second input",
        p4FC2I4: "Result",



        // risko
        // proj 1 c# console
        p1RH: "C# console applications",
        // windows
        p1RC1H: "Windows console",
        p1RC1: "> A simple remake of the Windows console in C#."
            + "\n> Features a limited set of commands, including file operations and device hibernation."
            + "\n> Doesn\'t rely solely on exceptions for errors."
            + "\n> Offers a few easter eggs, like a lorem ipsum generator and a scrolling, randomized grid."
        ,
        p1RC1I1: "Help command showcase",
        p1RC1I2: "Directory printing example",
        p1RC1I3: "File printing example",
        p1RC1I4: "Scrolling texture showcase",
        // csvkit
        p1RC2H: "CSVKIT suite",
        p1RC2: "> An attempt at cloning the python CSVKIT toolset."
            + "\n> Features a few select commands, as well as some basic console commands (similar to the Windows console project)"
            + "\n> Supports command arguments (eg. --h...), as well as printing to files."
            + "\n> Uses a modular class system for commands, adding onto the ease of further development."
        ,
        p1RC2I1: "Help command showcase",
        p1RC2I2: "Command attribute example",
        p1RC2I3: "CSVLook command example (table view of a file)",
        p1RC2I4: "CSVStat command example (table statistics)",
        // proj 2 c# forms
        p2RH: "C# Forms applications",
        // skicar
        p2RC1H: "MS Paint clone",
        p2RC1: "> Simple copy of the MS Paint program."
            + "\n> Features a rich toolset of brushes and shapes."
            + "\n> Supports loading to and from files."
            + "\n> Brushes have their own settings menus."
            + "\n> Functional undo system with up to 16 steps."
            + "\n> Allows for using images as brushes, with transparency support."
            + "\n> Shows a real-time statistic footer."
        ,
        p2RC1I1: "Drawing example",
        p2RC1I2: "Text settings window",
        p2RC1I3: "Image pasting example with transparency",
        p2RC1I4: "Image settings window",
        // sweeper
        p2RC2H: "Minesweeper",
        p2RC2: "> My own version of minesweeper."
            + "\n> Displays a simple statistics screen."
            + "\n> Has 3 difficulties."
            + "\n> Features unique, humorful victory/game over effects."
            + "\n> Uses built-in elements and characters."
        ,
        p2RC2I1: "Running minesweeper game example",
        p2RC2I2: "Victory chaos showcase",
        // grapher
        p2RC3H: "File graph renderer",
        p2RC3: "> Simple data to image converter"
            + "\n> Supports 3 graph types (pie, bar and line)"
            + "\n> Loads data from files with some foolproofing."
            + "\n> Saves to images."
            + "\n> Supports a header, value titles and value colors."
        ,
        p2RC3I1: "Pie chart example",
        p2RC3I2: "Line graph example",
        // proj 3 roblox
        p3RH: "ROBLOX games",
        // cup game
        p3RC1H: "Cup sorting game",
        p3RC1: "> Recreation of the popular cup sorting game from social media."
            + "\n> Features a set of tables with procedurally generated cups."
            + "\n> Players get cues whether they made the right or wrong choice."
            + "\n> Uses a dark atmosphere as a plot twist, filled with eery lights and sound effects."
            + "\n> Features simple networking, allowing others to see the games progress."
        ,
        p3RC1I1: "",
        p3RC1I2: "Moving cups example",
        p3RC1I3: "Custom particle system example (stars)",
        p3RC1I4: "Third person view of the game (networking aspect)",
        // horror game
        p3RC2H: "Multiplayer horror game",
        p3RC2: "> Uninspired freeroam corridor explorer."
            + "\n> Features accurate networking, allowing players to see each others flashlights and head rotations."
            + "\n> Features a dark, dirty atmosphere, requiring players to use their flashlight for navigation."
            + "\n> Contains a direction, where players have to find keys and eventually get a hammer to break out."
            + "\n> There roams a monster, which can be lured by certain events like creaking floor boards or opened doors."
            + "\n> Uses a simple, intuitive UI."
            + "\n> Runs performantly on weaker devices."
        ,
        p3RC2I1: "Horror game graphics, UI and interaction popup example",
        p3RC2I2: "Networking and another graphics example",
        // raytracer
        p3RC3H: "Raytracer experiment",
        p3RC3: "> Set of ray tracers made exclusively with no resources."
            + "\n> It aims for realistic lighting results, at the cost of a rendering time."
            + "\n> Features two models, one for general purpose use, another for volumetric fog."
            + "\n>> The general purpose model features shadows, ambient occlusion, specular highlights, reflections and bounce lighting, as well as material properties and experimental texture support."
            + "\n>> The volumetric model features a simplified lighting model for performance, but allows for the rendering of fog, which can be lit by light sources with shadow support as well."
            + "\n> Both models employ optimisation techniques, but due to ROBLOX\'s limitations, they can only use a singular CPU core for calculations."
            + "\n> The entire project served as an experiment and a gateway to graphics research for me."
        ,
        p3RC3I1: "Showcase of speculars, reflections, shadows, ambient occlusion and bounce lighting",
        p3RC3I2: "Lighting example, showcasing applyable VHS shader",
        p3RC3I3: "Outdoor rock example, showcasing penumbra sun shadows, ambient occlusion and bounce lighting",
        p3RC3I4: "Showcase of experimental volumetric lighting",
        p3RC3I5: "Volumetric lighting example, showcasing applyable VHS shader",
        // bus game
        p3RC4H: "Vehicle dynamics simulator",
        p3RC4: "> A simple simulator of a vehicles suspension and powertrain."
            + "\n> Features suspension, tire grip, engine and transmission simulations."
            + "\n> The chassis is a block with ROBLOX\'s built-in physics, while the wheels, suspension and powertrain use custom calculations under the hood."
            + "\n> It allows for custom suspension setups (4 wheelers, 12 wheelers...) with camber, spring frequency, dampening..."
            + "\n> Wheels have customizable parameters, like friction, power contribution, braking force, steer axis..."
            + "\n> The engine also has parameters, like engine mass, friction, power, gears..."
            + "\n> The wheels and engine employ a feedback system, where the engine can send the power to the wheels, but the wheels can also use momentum to spin the engine. This also allows engine braking."
            + "\n> It features a static-dynamic friction system."
            + "\n> The engine simulation also has a thermal component, simulating cold start behaviour and the eventual warmup of the engine."
            + "\n> Wheel simulation takes mass into account for friction."
        ,
        p3RC4I1: "Incline friction equilibrium example",
        p3RC4I2: "Drifting with effects example",
        // proj 4 shaders
        p4RH: "Shaders",
        // ball tracer
        p4RC1H: "Material shader",
        p4RC1: "> Graphics evaluation for spheres."
            + "\n> It features a simple geometric sphere intersection solver."
            + "\n> Supports cubemap but also procedural sky rendering."
            + "\n> Materials can be shiny, transparent, foggy, metallic..."
            + "\n> Simple volumetric fog implementation with transparency (also texture based, allowing for leaf shadows...) support."
            + "\n> Offers an accumulative mode (noisy output that converges into a stable image), as well as a coherent, slower preview mode."
            + "\n> Runs at interactive speeds, reaching 60fps at native resolution without trouble on a mobile device."
        ,
        p4RC1I1: "Shiny ball example with volumetric fog",
        p4RC1I2: "Glass ball example with refraction",
        // vhs
        p4RC2H: "VHS shader",
        p4RC2: "> Simple VHS distortion approximation."
            + "\n> Uses a global variable for the distortion amount."
            + "\n> Features horizontal distortion, color modulation and tape noise approximations."
            + "\n> Contains some stylization."
            + "\n> Runs on one buffer and has room for optimization."
        ,
        p4RC2I1: "VHS shader at 0% intensity (before)",
        p4RC2I2: "VHS shader at ~20% intenisty (after)",
        // vapor
        p4RC3H: "Vaporisation shader",
        p4RC3: "> Simple fun experiment for simulating a gas."
            + "\n> Features a simple, stylistic gas simulation (gas purely propagates upwards)."
            + "\n> Uses brightness data as the gas source, where bright pixels emit gas."
            + "\n> Runs at interactive speeds and allows the user to create gas spheres with their mouse."
        ,
        p4RC3I1: "Vapor effect inactive (before)",
        p4RC3I2: "Vapor effect active (after)",
        // mobile vhs
        p4RC4H: "Mobile VHS shader",
        p4RC4: "> A newer, more accurate VHS shader"
            + "\n> Upgrade over the previous VHS shader."
            + "\n> Contains all the same features, as well as timing distorsion, better tape noise and luma burning (lingering bright spots)."
            + "\n> Also runs on the same buffer, but at a way lower cost, allowing real-time performance on mobile devices at 2x native resolution."
        ,
        p4RC4I1: "VHS shader at 0% intensity (before)",
        p4RC4I2: "VHS shader at ~20% intensity (after)",
        p4RC4I3: "VHS shader at ~50% intensity (after)",
        // mobile camera
        p4RC5H: "Camera accumulation shader",
        p4RC5: "> Simple tool for light painting or night shots."
            + "\n> Uses the devices camera."
            + "\n> Samples light values over multiple frames, allowing light to stay after movement, or accumulation in dark environments."
        ,
        p4RC5I1: "Camera sampler in light, inactive (before)",
        p4RC5I2: "Camera sampler in light, active (after)",
        p4RC5I3: "Camera sampler in dark, inactive (before)",
        p4RC5I4: "Camera sampler in dark, active (after)",
        // proj 5 websites
        p5RH: "Websites",
        // openlab
        p5RC1H: "OpenLab recreation",
        p5RC1: "> Simple recreation of the OpenLab (now part of the Skyro school) website."
            + "\n> Doesn\'t feature any logic."
            + "\n> Tries to be as accurate to the real deal as possible, without looking at the source code."
            + "\n> Very start into website development."
        ,
        p5RC1I1: "",
        p5RC1I2: "",
        p5RC1I3: "",
        p5RC1I4: "",
        // shader site
        p5RC2H: "Shader application website",
        p5RC2: "> Custom website for trying out shader effects."
            + "\n> Features a settings menu with customizable values."
            + "\n> Allows the user to pick a custom file to be processed."
            + "\n> Runs on the client, not requiring any internet connections."
            + "\n> Lets the user save the result as a PNG"
            + "\n> Example shader gives the same results regardless of resolution."
            + "\n> Can easily be expanded to support custom shader files, URL media loading, proper animated media support..."
        ,
        p5RC2I1: "Original image (before)",
        p5RC2I2: "Shader website front page, featuring settings",
        p5RC2I3: "Processed image (after)",
        // clock
        p5RC3H: "Mobile clock site",
        p5RC3: "> Simple website for showing the current time and date."
            + "\n> Contains a few fun features, like a random quest or \"KYS\" meaning."
            + "\n> Produces a faint flash on every clock tick."
            + "\n> Completely offline."
            + "\n> Displays the date as a number, but also the current day as text."
        ,
        p5RC3I1: "",
        p5RC3I2: "Tick effect",
        // proj 6 lua
        p6RH: "Lua projects (mobile)",
        // stopwatch
        p6RC1H: "Timer",
        p6RC1: "> Simple timer with a bar graph"
            + "\n> Allows the user to set a start and finish time."
            + "\n> Uses devices current time."
            + "\n> Displays the progress with a bar graph."
        ,
        p6RC1I1: "Running countdown example",
        // dictionary
        p6RC2H: "Dictionary searcher",
        p6RC2: "> Allows for querying within the English dictionary"
            + "\n> Uses a local file (~466K words)"
            + "\n> Uses a pagination system."
            + "\n> Offers syntax options, like matching the beginning/ending of a word, length comparison or exact index pulling."
        ,
        p6RC2I1: "\"world\" query example",
        // fuel calculator
        p6RC3H: "Fuel calculator",
        p6RC3: "> Inspired by our cars faulty fuel level sensor."
            + "\n> Has 3 modes."
            + "\n>> 1. Range calculation from fuel level and consumption"
            + "\n>> 2. Consumption calculation from distance and used fuel"
            + "\n>> 3. The main mode, fuel level calculation"
            + "\n> The fuel level calculation takes in a fuel capacity, fuel level, consumption reading and trip meter as inputs."
            + "\n> It then calculates the exact estimated fuel level, as well as a bloated, emergency level."
            + "\n> Can be used as an accurate indicator if a car fails to show its fuel level."
            + "\n> Adjusted from testing, often coming only tenths of a liter short in calculations."
            + "\n> Can be further expanded with a car database, which could house emergency calibrations, odometer saves and average lifetime fuel consumption."
        ,
        p6RC3I1: "Calculated amount of fuel consumed",
        p6RC3I2: "Full tank refuel, average consumption was innacurate from the onboard computer, but the emergency mode was still reliable (200ml error)",

        // communism projects (pet slave IT conenction reference??))
        // proj 1 TrainAffinity
        oP1H: "TrainAffinity",
        // overview
        p1OC1H: "A gallery site",
        p1OC1: "TrainAffinity (TA) is a gallery/forum like website. It allows users to sign up and create posts, whether theyre images or even plain text. Users can react and communicate using comments on posts.",
        taHost: "This site is hosted online!",
        // notable features
        p1OC2H: "Notable features",
        p1OC2: "TA allows users to use markdown text on their About Mes and post descriptions. It also features a functional search system, which supports the OR, AND logic operators. There\'s also a tagging system, which allows users to tag and search posts. Posts also keep track of their views and can be favourited, which adds onto statistics visible on the authors page. There\'s also editing menus with safe request and frontend handling, allowing users to edit their own posts/pages while disallowing others.",
        // future expandability
        p1OC3H: "Future expandability",
        p1OC3: "TA can be expanded by allowing comments on further places, like user profiles, or even a Direct Messaging system. We've also implemented foundations for user profile pictures. Another step forward we see would be allowing more media types, like videos.",
        // key learning points
        p1OC4H: "What we\'ve learned",
        p1OC4: "This project has given us valuable experience with developing a functional website, as well as hosting one. It allowed us to get familiar with the Laravel framework, both in its frontend and backend capabilities.",
        // proj 2 Learn To Expedite
        oP2H: "Learn To Expedite 2023",
        // overview
        p2OC1H: "Satirical arcade strategy simulator",
        p2OC1: "Learn To Expedite is a mobile F2P game about using a submarine to try and find the Titanic. The gameplay is inspired by the Learn To Fly franchise. The player has to purchase upgrades to proceed further, eventually discovering the timely wreck.",
        // mechanics
        p2OC2H: "Mechanics",
        p2OC2: "The game features a repeatable gameplay loop, complete with a comprehensive saving system. The game keeps track of the players current game, such as their upgrades, money, etc., as well as their all-time statistics and settings. The game also features immersive fish AI, with a best to made realistic ecosystem with unique loners, groupers and predators that actively hunt the player, at each depth. The player movement uses a joystick and a touch trigger for boosting, useful for dodging predator attacks. The player can pick up various scrap from the water, which is traded for cash at the end of each run. The collected cash can be used for scaleable upgrades. The game UI is intuitive and easy to understand, giving players all the information they need.",
        // future expandability
        p2OC3H: "Future updates",
        p2OC3: "The game already has foundations for a great audio system, like ambient noises and sound effects, however due to time limitations we were unable to get audio files. Player skins and cosmetics bought for gems from collecting special fish, which can also change actual game mechanics was another planned feature. Our gameplay system also runs on a modular gamemode system, which allows us to easily create different gamemodes. The last noteful thing that we\'d like to add was some kind of monetization, like ads or micro-transactions.",
        // learnt or learned :X
        p2OC4H: "What we\'ve learned",
        p2OC4: "This project taught us how to make a functional, persistent game in the Unity engine. It also helped us realize the importance of efficient code, as we\'ve had to keep performance in mind, due to the target device being mobile phones.",


        tahome: "Home page with posts",
        tapost: "User page, showcasing markdown functionality",
        taedit: "Post owner dashboard",
        tacomment1: "Example of comment section, outlining user's own posts highlights",
        tacomment2: "Popup example",
        tadelete: "Password confirmation for account deletion",
        tadeletepost: "Modularable popup example",
        tajax: "AJAX form",
        tasettings: "Settings menu, visible only to the account owner",

        extit: "Titanic wreck discovery, showcase of endgame graphics",
        exmine: "Examples of player's threats, seamines and predators",
        exfish: "The oceans vast ecosystem swarming the player",
        exover: "Game over menu, showing player's statistics",
        excrit: "Low health popup",
        exship: "In-game shop, the place where the player purchases upgrades",
        exmenu: "Main menu, showcasing an unused player skin",
        exsettings: "Simple, incomplete settings menu",
        exfull: "Fully maxxed out upgrade shop",
        exhull: "Very noticable warning that the player's venturing too deep for their subs capabilities",
        exsplash: "Splash effect upon starting a run"


    },
    //
    // SLOVENSKOOOOO EJA EJA EJ
    //
    sk: {
        headerLeft: "Portfólio",
        aboutMe: "O mne:",
        oPH: "Taktiež sme sa podielali na spoločných projektoch...",
        aboutMeTextF: "Študent a junior herný a webový programátor a elektrotechnik."
            + "\nŠtúdium herného dizajnu a vývoja, fullstack webového vývoja a základov elektroniky."
            + "\nHlavný programovací jazyk je C#, no mám skúsenosti aj s C++, HTML, PHP (Laravel), CSS, JS a SQL."
            + "\nViac skúseny vo frontende a dizajne.",
        aboutMeTextR: "Junior herný a web programátor, študujúci vývoj hier a webových stránok."
            + "\nMám hlavne skúsenosti s jazykmi C# a Lua, ale vyznám sa aj v GLSL, HTML, JS, PHP (Laravel), SQL dopytoch a stretol som sa s C++."
            + "\nSom viac skúsený s backend-om (logika, futureproofing...) ako frontend-om."
            + "\nNebojím sa naučit nové jazyky, koncepty, framework-y alebo prostredia."
        ,
        oPT: "Máme pár projektov, ktoré hrdo prezentujeme."
            + "\nPracovali sme na nich spolu, v tíme, čo nám pomohlo naučiť sa efektívne rozdeliť úlohy a role."
        ,
        myProjects: "Moje projekty:",
        ourProjects: "Naše spoločné projekty:",

        // filipko
        p1FH: "C++ Peggle",
        p1FC1: "Rozpracovaný C++ remake klasickej hry Peggle (2007)."
            + "\nVytvorený pomocou vlastného C++ enginu bez GUI.",
        p1FC1I1: "Hlavné menu",
        p1FC1I2: "Výber levelov",


        p2FH: "Elektronika",
        p2FC1H: "Diaľkový senzor",
        p2FC1: "Jednoduchý diaľkový senzor ktorý používa Arduino a ultrazvukový senzor.\nNa LCD monitor vypiše diaľku predmentu pred ním.",
        p2FC1I1: "Kniha pri senzore",
        p2FC1I2: "LCD pri blízkej vzdialenosti",
        p2FC1I3: "Kniha ďalej od senzoru",
        p2FC1I4: "LCD pri ďalekej vzdialenosti",
        p2FC2H: "Domáci senzor",
        p2FC2: "All-in-one senzor stavu domu, ktorý zahŕňa detektor svetla a teploty s LCD výstupom ako aj dymový senzor so zabudovaným alarmom.",
        p2FC2I1: "Normálny stav",
        p2FC2I2: "Nízka teplota",
        p2FC2I3: "Vysoká žiarivosť svetla",
        p2FC2I4: "Detekovaný dym",


        p3FH: "C# Console & Forms aplikácie",
        p3FC1H: "Príkazový riadok",
        p3FC1: "Vlastný Windows príkazový riadok so základnými príkazmi a navigáciou v adresároch.\nMôže vytvárať, mazať, premenovávať adresáre a súbory, otvárať aplikácie...",
        p3FC1I1: "Výstup príkazov -help a FIND",
        p3FC1I2: "Výstup príkazu DIR",
        p3FC2H: "Tree",
        p3FC2: "Príkaz 'tree' z Linuxu prerobený pre Windows.\nTento príkaz vypíše všetky adresáre, podadresáre a ich obsach v štýle stromu, konárov.",
        p3FC2I1: "Výstup -help",
        p3FC2I2: "Výstup debugových priečinkov",
        p3FC2I3: "Výstup debugových súborov",
        p3FC2I4: "Výstup plochy",
        p3FC3H: "Paint",
        p3FC3: "Kresliaci program so základnými funkciami, ako kreslenie, gumovanie a rôzne geometrické tvary.",
        p3FC3I1: "GUI",
        p3FC3I2: "Výber 2D objektu",
        p3FC3I3: "Kresba štvorca",
        p3FC3I4: "Kresba obráteného trojuhoľníku",


        p4FH: "Webové stránky",
        p4FC1H: "Web DPB",
        p4FC1: "Prerobená domovská stránka Dopravného Podniku Bratislava z roku 2023. Nemá funkcionalitu.",
        p4FC1I4: "avtobus",
        p4FC2H: "Kalkulačka",
        p4FC2: "Jednoduchá kalkulačka vyrobená pomocou javascriptu.",
        p4FC2I1: "GUI",
        p4FC2I2: "Prvá operácia",
        p4FC2I3: "Druhá operácia",
        p4FC2I4: "Výsledok",


        // pet (eheeeeee thansk flip :33)
        // proj 1 c# console
        // windows
        p1RH: "C# konzolové aplikácie",
        p1RC1H: "Windows konzola",
        p1RC1: "> Jednoduchá kópia Windows konzoly v C#."
            + "\n> Obsajuhe zopár príkazov, ako napr. operácie so súbormi alebo režim hibernácie počítača."
            + "\n> Zachytávanie chýb nezáleží čisto na výnimkách."
            + "\n> Má aj pár prekvapení, ako Lorem Ipsum generátor alebo vykreslovanie náhodnej mriežky."
        ,
        p1RC1I1: "Príkaz pomoci",
        p1RC1I2: "Výpis adresára",
        p1RC1I3: "Výpis súbora",
        p1RC1I4: "Náhodná mriežka",
        // csvkit
        p1RC2H: "CSVKIT nástroje",
        p1RC2: "> Pokus pretvoriť Python CSVKIT do jazyka C#."
            + "\n> Má zakomponovaných iba zopár príkazov, ale aj nápomocné konzolové príkazy (podobné Windows konzolovému projektu)."
            + "\n> Podporuje argumenty príkazov (napr. --h...), ako aj výpis do súborov."
            + "\n> Má vstavaný modulárny systém príkazov."
        ,
        p1RC2I1: "Príkaz pomoci",
        p1RC2I2: "Príklad atribútu príkazu",
        p1RC2I3: "CSVLook príklad (tabuľka zo súboru)",
        p1RC2I4: "CSVStat príklad (štatistiky tabuľky)",
        // proj 2 c# forms
        // skicar
        p2RH: "C# Formuláre",
        p2RC1H: "Nápodobnenina Skicára",
        p2RC1: "> Jednoduchá, upravená kópia Skicára do C#."
            + "\n> Obsahuje mnoho nástrojov ako tvary, štetce, text atď."
            + "\n> Podporuje načítavanie a ukladanie z/do súboru."
            + "\n> Nástroje majú individuálne nastavenia."
            + "\n> Funkčná história so 16 záznamami."
            + "\n> Umožňuje používať obrázky ako štetce, taktiež s funkčnou priehľadnosťou."
            + "\n> Poskytuje interaktívny stavový riadok."
        ,
        p2RC1I1: "Príkladová kresba",
        p2RC1I2: "Nastavenia textu",
        p2RC1I3: "Nalepenie obrázka s priehľadnosťou",
        p2RC1I4: "Nastavenia obrázkov",
        // sweeper
        p2RC2H: "Minesweeper",
        p2RC2: "> Vlastná verzia Minesweepera."
            + "\n> Obsahuje jednoduché menu štatistík hry."
            + "\n> 3 obtiažnosti."
            + "\n> Ponúka unikátne a sarkastické efekty výhry/prehry."
            + "\n> Používa vstavané elementy a znaky."
        ,
        p2RC2I1: "Prebiehajúca hra",
        p2RC2I2: "Výherný chaos",
        // grapher
        p2RC3H: "Vykreslovač grafov",
        p2RC3: "> Jednoduché prekreslenie dát do obrázkov."
            + "\n> Zobrazuje 3 typy grafov (stĺpcový, kolačový a čiarový)."
            + "\n> Náčítava dáta zo súborov aj s istým overením integrity."
            + "\n> Ukladá do PNG obrázkov."
            + "\n> Podpora nadpisu, názvov, hodnôt a farieb stĺpcov."
        ,
        p2RC3I1: "Koláčový graf",
        p2RC3I2: "Čiarový graf",
        // proj 3 roblox
        // cup game
        p3RH: "ROBLOX hry",
        p3RC1H: "Zoraďovanie pohárikov",
        p3RC1: "> Pretvorenie populárnej párty hry zo sociálnych médií."
            + "\n> Obsahuje stoly s procedurálne generovanými pohárikmi."
            + "\n> Hráč dostáva nápovedy, či dal správny alebo nesprávny ťah."
            + "\n> Využíva temnú atmosféru ako zápletku, so znepokojivým osvetlením a zvukovými efektami."
            + "\n> Implementuje jednoduchú replikáciu, čo umožňuje hráčom navzájom si vidieť priebeh hier."
        ,
        p3RC1I1: "",
        p3RC1I2: "Hýbanie pohárikov",
        p3RC1I3: "Vlastný particle systém (hviezdy)",
        p3RC1I4: "Pohľad tretej osoby prebiehajúcej hry (networking aspekt)",
        // horror game
        p3RC2H: "Hororovka pre viacerých hráčov",
        p3RC2: "> Voľný pohyb po chodbách domu s cieľom."
            + "\n> Implementuje pokročilejšiu replikáciu, čo umožnuje hráčom navzájom si vidieť baterky a kam sa pozerajú."
            + "\n> Atmosféra mapy je temná a zaprášena, hráč bez baterky skoro nič nevidí."
            + "\n> Hráčom dáva cieľ nájsť všetky kľúče, aby sa dostali ku kladivu a mohli utiecť, zatiaľ čo sa vyhýbajú AI monštru."
            + "\n> Monštrum sa túla chodbami kým niekoho neuvidí, alebo nezapočuje dvere/vŕzgot dlážiek."
            + "\n> Rozhranie má jednoduché, sústreduje sa na horrorový, skoro prázdny aspekt."
            + "\n> Dobrý výkon aj na horších zariadeniach."
        ,
        p3RC2I1: "Hororová grafika, UI a popup interakcie",
        p3RC2I2: "Networking a ďalší príklad grafiky",
        // raytracer
        p3RC3H: "Raytracing experiment",
        p3RC3: "> Sada raytracerov (vykreslovanie sveteľnými ľúčmi) tvorených čisto mnou."
            + "\n> Snaží sa dosiahnuť fotorealistické výsledky, aj keď na úkor času výpočtov."
            + "\n> Ponúka dva modely: jeden na všeobecnú, realistickú grafiku a druhý na zobrazenie hmly a svetiel."
            + "\n>> Všeobecný model obsahuje mäkké tiene, zatmenie okolím, odrazy v hladkých predmetch, odlesk svetla, svietiace objekty, materiály a experimentálnu podporu textúr."
            + "\n>> Model hmly zjednodušuje všeobecnú grafiku (ostré tiene, žiadne odrazy...) ale umožňuje vykreslovanie hlmy a jej ovplyvnenia svetlami, aj s podporou tieňov."
            + "\n> Obsahuje pokusy o optimalizáciu, ale kvôli limitáciám ROBLOX-u (možnosť výpočtov iba na jednom jadre CPU..) je celkom pomalý."
            + "\n> Celý projekt bol skôr experiment a slúžil ako úvod do grafických výpočtov."
        ,
        p3RC3I1: "Všeobecný model - ukážka odlesku slnka, odrazov prostredia, tieňov, zatmenia okolím a odrazov svetla (zelenanie zeme od kociek...)",
        p3RC3I2: "Všeobecný model, ukážka aplikovateľného VHS efektu",
        p3RC3I3: "Všeobecný model - kameň pri strome, ukážka mäkkých tieňov, stmavenia okolím (vnútro stromu) a sveteľných odrazov",
        p3RC3I4: "Model hmly - ukážka volumetrického osvetlenia",
        p3RC3I5: "Model hmly, ukážka aplikovateľného VHS efektu",
        // bus game
        p3RC4H: "Simulátor dynamiky vozidiel",
        p3RC4: "> Zjednodušený simulátor odpruženia, priľnavosti a hnacej súpravy."
            + "\n> Simuluje odpruženie, príľnavosť pneumatík, riadenie a motor vozidla."
            + "\n> Trup vozidla je kocka simulovaná ROBLOX fyzikou, zatiaľ čo kolesá, odpruženie a hnacia súprava používajú vlastné výpočty."
            + "\n> Umožňuje ľubovoľné rozloženie súprav (4 kolesá, 12 kolies...), kde sa dá upraviť sila, tĺmenie, výška, sklon odpruženia atď."
            + "\n> Kolesá majú upraviteľné parametre, ako trenie, napojenie na motor, silu bŕzd, osi riadenia atď."
            + "\n> Motory sú taktiež konfigurovateľné, s podporou hmotnosti, trenia, spaľovacej sily, prevodových stupňov atď."
            + "\n> Motor a kolesá majú systém spätnej väzby, čo znamená že motor môže hnať kolesá, ale kolesá takisto môžu hnať motor (napr. za pohybu...). Motor môže trením aj brzdiť."
            + "\n> Používa systém kombinovaného statického a dynamického trenia (pri státí do kopca pneumatiky držia, pri náhlom zrýchlení začnú prešmykovať a vozidlo sa šmýka dole)."
            + "\n> Simulácia motora berie ohľad aj na termálnu stránku, čo umožňuje simulovať studený štart, prehrievanie atď."
            + "\n> Simulácia trenia taktiež berie ohlaď na hmotnosť a moment kolies."
        ,
        p3RC4I1: "Rovnováha trenia v kopci",
        p3RC4I2: "Driftovanie s efektami",
        // proj 4 shaders
        // ball tracer
        p4RH: "Grafické shadery (efekty)",
        p4RC1H: "Vykreslovanie materiálov",
        p4RC1: "> Grafické vykreslovanie gulí."
            + "\n> Obsahuje jednoduchý geometrický vzorec na priesek s lúčom."
            + "\n> Podporuje textúrované, ale aj procedurálne prostredia (obloha)."
            + "\n> Materiály majú nastaviteľný lesk, priehlaďnosť, zahmlytosť, kovovosť, svietivosť atď."
            + "\n> Jednoduchá integrácia hmly, s podporou tieňov (aj texturovaných, čiže napr. tiene listov, atď.)"
            + "\n> Ponúka akumulatívny, šumivý režim (potrebuje čas na zaostrenie) ale aj stabilný, pomalší režim."
            + "\n> Beží interaktívnou rýchlosťou, bez problému dosahuje 60 snímok v plnom rozlíšení na mobilných zariadeniach."
        ,
        p4RC1I1: "Lesklá guľa s hmlou",
        p4RC1I2: "Sklenená guľa s priehľadnosťou",
        // vhs
        p4RC2H: "VHS efekt",
        p4RC2: "> Snaží sa napodobniť efekt VHS pásky."
            + "\n> Používa jednoduchú premennú pre intenzitu efektu."
            + "\n> Obsahuje horizontálne skryvenie, skreslenie farieb a signálový šum."
            + "\n> Výpočty majú určitú štylizáciu."
            + "\n> Používa iba jednu textúru na výkres, má ale aj priestor na optimalizáciu."
        ,
        p4RC2I1: "VHS efekt pri 0% intenzite (pred)",
        p4RC2I2: "VHS efekt pri ~20% intenzite (po)",
        // vapor
        p4RC3H: "Dymový efekt",
        p4RC3: "> Jednoduchý experiment pre simuláciu plynov."
            + "\n> Používa primitívnu, štylizovanú fyziku plynov (čisto iba stúpajú smerom hore...)."
            + "\n> Ako zdroj plynu, alebo napr. dymovnicu, používa svetlosť pixelov alebo aj myš."
            + "\n> Beží interaktívnou rýchlosťou bez problémov."
        ,
        p4RC3I1: "Dymový efekt vypnutý (pred)",
        p4RC3I2: "Dymový efekt zapnutý (po)",
        // mobile vhs
        p4RC4H: "Mobilný VHS efekt",
        p4RC4: "> Novšia, presnejšia verzia môjho VHS efektu."
            + "\n> Má tie isté efekty ako predošlá verzia."
            + "\n> Pridáva nepresné časovanie, presnejší signálový šum a vpalovanie svetla."
            + "\n> Stále používa jednú výstupnú textúru, ale s oveľa hojnejším výkonom. Dá sa utiahnuť na dvojnásobnom rozlíšení aj na mobilných zariadeniach."
        ,
        p4RC4I1: "VHS efekt pri 0% intenzite (pred)",
        p4RC4I2: "VHS efekt pri ~20% intenzite (po)",
        p4RC4I3: "VHS efekt pri ~50% intenzite (po)",
        // mobile camera
        p4RC5H: "Snímkovač kamery",
        p4RC5: "> Jednoduchý nástroj na svetlomaľbu alebo nočné zábery."
            + "\n> Používa kameru zariadenia."
            + "\n> Vzorkuje svetlo cez viaceré snímky, čím umožňuje napr. zachytiť trasy svetiel, alebo aj viacej dát pre nočné zábery."
        ,
        p4RC5I1: "Snímkovač počas svetla, neaktívny (pred)",
        p4RC5I2: "Snímkovač počas svetla, aktívny (po)",
        p4RC5I3: "Snímkovač počas tmy, neaktívny (pred)",
        p4RC5I4: "Snímkovač počas tmy, aktívny (po)",
        // proj 5 websites
        // openlab
        p5RH: "Webové stránky",
        p5RC1H: "Kópia OpenLab stránky",
        p5RC1: "> Menšia kópia stránky OpenLab-u (teraz súčasťou SŠ Skyro)."
            + "\n> Čiste iba dizajn, bez logiky."
            + "\n> Pokus o čo najpresnejšiu nápodobneninu bez použitia zdrojového kódu."
            + "\n> Bol to môj začiatok do vývoja webov."
        ,
        p5RC1I1: "",
        p5RC1I2: "",
        p5RC1I3: "",
        p5RC1I4: "",
        // shader site
        p5RC2H: "Aplikátor shader-ov",
        p5RC2: "> Moja plne vlastná stránka na skúšku shader efektov."
            + "\n> Ponúka určité vstupy na zmenu premenných, ktoré sa neskôr posielajú grafickej karte."
            + "\n> Umožňuje výber ľubovoľného obrázka (aj typov ako GIF alebo menej zaužívaných, vďaka dobrej podpore HTML)."
            + "\n> Beží plne lokálne, čiže nevyžaduje internetové pripojenie."
            + "\n> Umožňuje natívne uložiť výsledok ako obrázok plnej kvality."
            + "\n> Vbudovaný shader ponúka rovnaké výsledky nezávislé od rozlíšenia (UV koordináty, niche vlastnosť shader-ov)"
            + "\n> Má možnosť jednoduchého rozšírenia o napr. výber shader súboru, načítavania obrázkov z internetu, pravej podpory animovaných médií..."
        ,
        p5RC2I1: "Originálny obrázok (pred)",
        p5RC2I2: "Stránka aplikátora s možnosťami",
        p5RC2I3: "Spracovaný obrázok (po)",
        // clock
        p5RC3H: "Mobilné hodiny",
        p5RC3: "> Jednoduchá webstránka na kontrolu času a dátumu."
            + "\n> Obsahuje zopár zábavných funkcií, ako úlohy alebo význam spojenia \"KYS\"."
            + "\n> Robí jemný efekt každú sekundu."
            + "\n> Plne lokálna, nevyžaduje internet."
            + "\n> Zobrazuje dátum ako text, ale taktiež ukazuje momentálny deň ako text."
        ,
        p5RC3I1: "",
        p5RC3I2: "Efekt ručičky",
        // proj 6 lua
        // stopwatch
        p6RH: "Lua projekty (mobilné)",
        p6RC1H: "Časovač",
        p6RC1: "> Časovač, ktorý ukazuje aj bar priebehu."
            + "\n> Umožňuje výber začiatočného a konečného času."
            + "\n> Automaticky používa momentálny čas zariadenia."
            + "\n> Ukazuje priebeh časovača pomocou baru, taktiež aj ukazuje, či časovač čaká na štart alebo už skončil."
        ,
        p6RC1I1: "Prebiehajúci odpočet",
        // dictionary
        p6RC2H: "Dohladávač slovníka",
        p6RC2: "> Robí dopyty pre databázu Anglického slovníka (staršieho, bez významu slov)"
            + "\n> Používa stiahnutý offline súbor (~466tisíc slovných spojení)"
            + "\n> Podporuje systém stránkovania."
            + "\n> Ponúka možnosti dopytu, ako napr. zhodu iba na začiatku/konci spojenia, porovnávanie dĺžky alebo aj výber presnej pozície zo slovníka."
        ,
        p6RC2I1: "\"world\" dopyt",
        // fuel calculator
        p6RC3H: "Kalkulačka pre palivo",
        p6RC3: "> Inšpirovaná pokazeným senzorom hladiny paliva v našom aute."
            + "\n> Ponúka 3 režimy."
            + "\n>> 1. Dojazdu (z množstva paliva a spotreby)"
            + "\n>> 2. Spotreba (z prejdenej vzdialenosti a spotrebovaného paliva)"
            + "\n>> 3. Zostatok paliva (hlavný režim)"
            + "\n> Hlavný režim zostatku paliva berie parametre množstva paliva, prejdenej vzdialenosti a nahlásenej spotreby."
            + "\n> Z týchto dát vypočíta presný zostatok paliva, aj s rezervnou, nafúknutou hodnotou."
            + "\n> Dá sa použiť ako spoľahlivá záloha, ak zlyhá ukazovateľ množstva paliva."
            + "\n> Nafúknutá hodnota je kalibrovaná podľa tankovania paliva, ale dá sa jednoducho prispôsobiť iným autám."
            + "\n> Existuje možnosť rozšíriť to o databázu áut, ako aj napr. kalibračné hodnoty, zrátavanie ich celkového dojazdu alebo priemernej spotreby."
        ,
        p6RC3I1: "Vypočítané spotrebované palivo",
        p6RC3I2: "Dotankovanie plnej nádrže, palubný počítač skreslil priemernú spotrebu, ale núdzový režim bol stále spoľahlivý (odchýľka 200ml)",



        // communism projects (pet slave IT conenction reference??))
        // proj 1 TrainAffinity
        oP1H: "TrainAffinity",
        // overview
        p1OC1H: "Online galéria",
        p1OC1: "TrainAffinity (TA) je webová galéria/fórum. Umožňuje používateľom zaregistrovať sa a vytvárať príspevky, ako obrázky alebo len obyčajný text. Používatelia môžu reagovať a komunikovať pomocou komentárov pod príspevkami.",
        taHost: "Táto stránka je online!",
        // notable features
        p1OC2H: "Funkcie",
        p1OC2: "TA využíva markdown, systém na jemnú modifikáciu textov, napr. podčiarkovanie, hrubé pismo, ... Obsahuje taktiež funkčný vyhľadávací systém, ktorý podporuje logické OR a AND na lepšiu filtráciu. K dispozícii je aj systém tagov, ktorý umožňuje označovať a vyhľadávať príspevky. Príspevky tiež sledujú počet zobrazení a môžu byť pridané medzi obľúbené, čo sa započítava do štatistík viditeľných na profile autora. Príspevky môžu byť upravené pomocou menu, ktoré je viditeľne len pre autora a má zabezpečený frontend handling.",
        // future expandability
        p1OC3H: "Budúce rozšírenia",
        p1OC3: "TA je možné rozšíriť pridaním komentárov aj na ďalšie miesta, napríklad na profily, alebo pridaním P2P správ. Tiež sme implementovali základy pre profilové obrázky. Ďalším krokom by mohlo byť pridanie ďalších typov médií, napr. videí.",
        // key learning points
        p1OC4H: "Čo sme sa naučili",
        p1OC4: "Tento projekt nám poskytol cenné skúsenosti s vývojom funkčnej webovej stránky, ako aj s hostingom. Zoznámili sme sa s frameworkom Laravel, vo aj frontende aj backende.",

        // proj 2 Learn To Expedite
        oP2H: "Learn To Expedite 2023",
        // overview
        p2OC1H: "Satirický arkádový strategický simulátor",
        p2OC1: "Learn To Expedite je mobilná F2P hra ktorej cieľom je nájsť Titanik pomocou ponorky. Inšpirovaná sériou Learn To Fly, aby sa hráč dostal k vraku, musí najpr vylepšiť svoju ponorku.",
        // mechanics
        p2OC2H: "Mechaniky",
        p2OC2: "Hra obsahuje opakovateľnú hernú slučku spolu s komplexným systémom ukladania. Hra sleduje aktuálny stav hráča, ako sú jeho upgrady, peniaze atď., ako aj jeho celoherné štatistiky a nastavenia. Ryby v hre maju dôkladnú AI a tvoria vlastný ekosystém; jedinečný samotári, skupinkári a predátori, ktorí hráča aktívne lovia. Pohyb je joystick a touch area, ktorý zväčší hráčovu rýchlosť, čo je užitočné pri vyhýbaní sa predátorom. Hráč môže zbierať rôzny šrot z vody, ktorý sa na konci expedície vymení za peniaze, ktoré možno použiť na upgrady. Hra má intuitívny UI, ktorý ponúka hráčovi všetky informácie ktoré potrebuje.",
        // future expandability
        p2OC3H: "Čo možno pridať",
        p2OC3: "Hra už má základy pre komplexný zvuk, ako sú ambientné zvuky a zvukové efekty, no kvôli časovým obmedzeniam sa nám nepodarilo zohnať audio súbory. Ďalšou takmer dokončenou funkciou sú hráčske skiny, ktoré by umožnili používať gemy na kozmetické úpravy, ktoré môžu meniť aj samotné herné mechaniky. Náš herný systém beží na modulárnom systéme herných režimov, čo nám umožňuje jednoducho vytvárať rôzne režimy. Poslednou dôležitou vecou, ktorú by sme chceli pridať, je nejaká forma monetizácie, napríklad reklamy alebo mikrotransakcie.",
        // learnt or learned :X
        p2OC4H: "Čo sme sa naučili",
        p2OC4: "Tento projekt nás naopak naučil, ako vytvoriť funkčnú, perzistentnú hru v engine Unity. Pomohol nám tiež uvedomiť si dôležitosť efektívneho kódu, keďže sme museli myslieť na výkon vzhľadom na cieľové zariadenie – mobilné telefóny.",


        tahome: "Domovská stránka s príspevkami",
        tapost: "Profil, ukážka markdown",
        taedit: "Úprava príspevku",
        tacomment1: "Ukážka komentárov, označenia vlastných komentárov",
        tacomment2: "Popup ukážka",
        tadelete: "Potvrdenie hesla pri mazaní účtu",
        tadeletepost: "Modulárna popup ukážka",
        tajax: "Formulár s AJAX",
        tasettings: "Nastavenia uživateľa",

        extit: "Titanik cutscéna",
        exmine: "Ukážka míny a predátora",
        exfish: "Fúra rýb okolo hráča",
        exover: "Game over menu, ukážka štatistík",
        excrit: "Oznam nízkeho života",
        exship: "In-game obchod, tu sa kupujú upgrady",
        exmenu: "Hlavné menu s nepoužitým skinom",
        exsettings: "Jednoduché nekompletné menu nastavení",
        exfull: "Upgrade obchod na maxime",
        exhull: "Veľmi nenápadny náznak veľmi vysokého tlaku na ponorku",
        exsplash: "Efekt špliechania pri vpáde do vody"

    }
}

function changeFlag(override) {
    const front = document.getElementById("flag-front");
    const back = document.getElementById("flag-back");

    front.classList.add("fade-out");
    back.classList.add("fade-out");

    setTimeout(() => {
        const tempSrc = front.src;
        front.src = back.src;
        back.src = tempSrc;
        front.classList.remove("fade-out");
        back.classList.remove("fade-out");
    }, 150);

    /*
    front.id = front.id == "flag-back" ? "flag-front" : "flag-back";
    back.id = back.id == "flag-back" ? "flag-front" : "flag-back";*/

    if (override) return;
    const newLang = currLang === "en" ? "sk" : "en";

    setLanguage(newLang);
}

function setLanguage(lang) {
    if (!translation[lang]) return;

    currLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (el.nodeName != "IMG")
            el.textContent = translation[lang][key] ?? key;
        else
            el.dataset.title = translation[lang][key] ?? key;
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
}