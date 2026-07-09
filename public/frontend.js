const output = document.getElementById("output");
const charactersDiv = document.getElementById("characters");

const API_BASE = "https://comedyforge.onrender.com";

// Generate Scene
document.getElementById("sceneBtn").addEventListener("click", async () => {
    output.innerHTML = "Loading scene...";
    charactersDiv.innerHTML = "";

    try {
        const res = await fetch(`${API_BASE}/scene`);
        const data = await res.json();
        output.innerHTML = data.scene || "No scene returned.";
    } catch (err) {
        output.innerHTML = "Error generating scene.";
        console.error(err);
    }
});

// Chaos Mode
document.getElementById("chaosBtn").addEventListener("click", async () => {
    output.innerHTML = "Unleashing chaos...";
    charactersDiv.innerHTML = "";

    try {
        const res = await fetch(`${API_BASE}/chaos`);
        const data = await res.json();
        output.innerHTML = data.chaos || "Chaos failed.";
    } catch (err) {
        output.innerHTML = "Chaos Mode error.";
        console.error(err);
    }
});

// Show Characters
document.getElementById("charactersBtn").addEventListener("click", async () => {
    output.innerHTML = "Loading characters...";
    charactersDiv.innerHTML = "";

    try {
        const res = await fetch(`${API_BASE}/characters`);
        const data = await res.json();

        output.innerHTML = "Characters Loaded";

        data.characters.forEach(char => {
            const card = document.createElement("div");
            card.className = "character-card";

            card.innerHTML = `
                <img src="public/images/${char.image}" alt="${char.name}">
                <h3>${char.name}</h3>
                <p>${char.description}</p>
            `;

            charactersDiv.appendChild(card);
        });

    } catch (err) {
        output.innerHTML = "Error loading characters.";
        console.error(err);
    }
});
