function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

setInterval(createHearts, 800);