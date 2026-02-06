import { pwease } from "./carousel.js";

const name = document.getElementById("nameHeader");
const contentHolder = document.getElementById("contentHolder");
const arrowR = document.getElementById("nameArrowRight");
const arrowL = document.getElementById("nameArrowLeft");

let db = true;
let finished = 0;
const duration = 1;

export let cur = 0;
const wrapAround = false; // :333 frfr

const people = [
    { // filiokp
        fullName: "Filip Jakub Minárik",
        content: document.getElementById("filipContent")
    },
    { // rkisko
        fullName: "Richard Hovanyecz",
        content: document.getElementById("richardContent"),
        bodyStyle: ["richardStyle", "backdrop"]
    },
];

function animateArrow(dir) {
    function set(state){
        arrowL.setAttribute("href", state ? "#headerC" : "#");
        arrowR.setAttribute("href", state ? "#headerC" : "#");
    }
    if (Math.sign(dir) == -1) {
        set(false);
        arrowL.addEventListener("animationend", () => { arrowL.classList.remove("clickedArrow"); set(true); }, { once: true });
        arrowL.classList.add("clickedArrow");
    }
    else if (Math.sign(dir) == 1) {
        set(false);
        arrowR.addEventListener("animationend", () => { arrowR.classList.remove("clickedArrow"); set(true); }, { once: true });
        arrowR.classList.add("clickedArrow");
    }
}

function awaitAnim(el) {
    return new Promise(resolve => {
        el.addEventListener("animationend", resolve, { once: true });
    });
}

async function animateName() {
    name.classList.remove("nameIn", "nameOut");
    name.classList.add("nameIn");
    await awaitAnim(name);
    name.classList.remove("nameIn");
    name.innerText = people[cur].fullName;
    name.classList.add("nameOut");
    await awaitAnim(name);
    name.classList.remove("nameOut");
    return;
}

function hideAllContents() {
    people.forEach(el => {
        el.content.style.display = "none";
    });
}

async function animateContent() {
    contentHolder.classList.remove("contentIn", "contentOut");
    contentHolder.classList.add("contentIn");
    await awaitAnim(contentHolder);
    contentHolder.classList.remove("contentIn");
    hideAllContents();
    people[cur].content.style.display = "unset";
    pwease();
    people.forEach(person => {
        if(person.bodyStyle == null) return;
        else if(Array.isArray(person.bodyStyle)){
            person.bodyStyle.forEach(style => {
                document.body.classList.remove(style);
            })
        }
        else
            document.body.classList.remove(person.bodyStyle);
    });
    if(people[cur].bodyStyle == null) return;
    else if(Array.isArray(people[cur].bodyStyle)){
        people[cur].bodyStyle.forEach(style => {
            document.body.classList.add(style);
        })
    }
    else
        document.body.classList.add(people[cur].bodyStyle);
    contentHolder.classList.add("contentOut");
    await awaitAnim(contentHolder);
    contentHolder.classList.remove("contentOut");
    return;
}

async function changePeople(dir = 0) {
    if ((!db && dir != 0) || !db || (Math.sign(dir) == -1 && cur == 0) || (Math.sign(dir) == 1 && cur == people.length - 1)) return;
    db = false;
    finished = 0;
    cur = Math.min(Math.max(cur + dir, 0), people.length - 1);
    const currentPerson = people[cur];

    const isFirst = cur === 0; const isLast = cur === people.length - 1;
    if (isLast)
        arrowR.classList.add("disabled");
    else
        arrowR.classList.remove("disabled");
    //arrowR.style.pointerEvents = isLast ? "none" : "all";
    if (isFirst)
        arrowL.classList.add("disabled");
    else
        arrowL.classList.remove("disabled");
    //arrowL.style.pointerEvents = isFirst ? "none" : "all";

    animateArrow(dir);
    if (dir != 0) {
        arrowL.classList.add("busy");
        arrowR.classList.add("busy");
        await Promise.all([
            animateName(),
            animateContent()
        ]);
        arrowL.classList.remove("busy");
        arrowR.classList.remove("busy");
        db = true;
        return;
    }
    name.textContent = currentPerson.fullName;

    people.forEach(person => {
        console.log(person.content);
        person.content.style.display = person === currentPerson ? "unset" : "none";
    });
    pwease();
    db = true;
    return;
}

arrowL.addEventListener("click", (c) => changePeople(-1));
arrowR.addEventListener("click", (c) => changePeople(1));

changePeople(0);