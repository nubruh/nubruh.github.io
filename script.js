const messages = [
    "Are you sure?",
    "Sure tu???",
    "Besiiii Aruu!!!",
    "PUI!! please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "AAAA!! :( I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, aru nuxhudhu jaa...",
    "Just kidding muhehe, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}