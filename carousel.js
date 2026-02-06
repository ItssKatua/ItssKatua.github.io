import { cur } from './nameSwap.js'

const carousels = document.querySelectorAll(".project-carousel");
const cards = document.querySelectorAll(".project-card");

export function pwease() {
    updateCard();
}

/*
function updateCard() {
    const carousel = carousels[cur];
    const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

    let closestCard = null;
    let closestDistance = Infinity; // thats like over 9000

    cards.forEach(card => {
        const cardCenter =
            card.offsetLeft + card.offsetWidth / 2; // :o meth

        const distance = Math.abs(carouselCenter - cardCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });

    document.querySelectorAll(".active").forEach(c => c.classList.remove("active"));
    closestCard.classList.add("active");

    document.querySelectorAll(".project-panel")
        .forEach(p => p.classList.remove("active"));
    document.querySelectorAll("#" + closestCard.dataset.project).forEach(el => {el.classList.add("active");});
}
/**/

/**/
const carPairs = [];
carousels.forEach(car => {
    const pair = [car, [], []];
    cards.forEach(card => {if(card.parentElement == car) pair[1].push(card);})
    pair[1].forEach(card => {document.querySelectorAll("#" + card.dataset.project).forEach(proj => {pair[2].push(proj)})});
    carPairs.push(pair);
});
console.log(carPairs);
function updateCard(car) {
    const _carousel = carPairs[car];

    if (_carousel == null) {
        carPairs.forEach(_carousel => {
            const carousel = _carousel[0];
            const _cards = _carousel[1];
            const els = _carousel[2];
            els.forEach(c => c.classList.remove("active"));

            const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

            let closestCard = null;
            let closestDistance = Infinity; // thats like over 9000

            _cards.forEach(card => {
                const cardCenter =
                    card.offsetLeft + card.offsetWidth / 2; // :o meth

                const distance = Math.abs(carouselCenter - cardCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            _cards.forEach(card => {card.classList.remove("active");});
            closestCard.classList.add("active");

            els.forEach(el => { if(el.id == closestCard.dataset.project) el.classList.add("active"); });
        })
    }
    else {
        const carousel = _carousel[0];
        const _cards = _carousel[1];
        const els = _carousel[2];
        els.forEach(c => c.classList.remove("active"));

        const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

        let closestCard = null;
        let closestDistance = Infinity; // thats like over 9000

        _cards.forEach(card => {
            const cardCenter =
                card.offsetLeft + card.offsetWidth / 2; // :o meth

            const distance = Math.abs(carouselCenter - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = card;
            }
        });

        _cards.forEach(card => {card.classList.remove("active");});
        closestCard.classList.add("active");

        els.forEach(el => { if(el.id == closestCard.dataset.project) el.classList.add("active"); });
    }
};
/**/


// meowement ;3

let isDown = false;
let startX;
let scrollLeft;

carousels.forEach((c, i) => {
    c.addEventListener("pointerdown", e => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = c.scrollLeft;
        c.setPointerCapture(e.pointerId);
        updateCard(i);
    });

    c.addEventListener("pointermove", e => {
        if (!isDown) return;
        const x = e.pageX;
        const walk = (startX - x);
        c.scrollLeft = scrollLeft + walk;
        updateCard(i);
    });

    c.addEventListener("pointerup", () => isDown = false);
    c.addEventListener("pointerleave", () => isDown = false);

    c.addEventListener("scroll", () => updateCard(i));
});

//updateCard();