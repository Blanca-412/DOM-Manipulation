// main.js

const IMAGE_URL = "http://placehold.co/100";

const users = [
    {
        id: 1,
        user_name: 'Blanca',
        description: 'Me gusta el clima cálido',
        age: '26',
        fav_music: {
            singers: ['Michael Jackson', 'Lady Gaga', 'Harry Styles', 'BTS']
        }
    },
    {
        id: 2,
        user_name: 'Ramón',
        description: 'Me gustan los atardeceres',
        age: '23',
        fav_music: {
            bands: ['Metallica', 'Band Maid', 'Iron Maider', 'Megadeth']
        }
    }
];

// Function to create a user card
function createCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = IMAGE_URL;
    img.alt = "User profile photo";
    img.classList.add("card-img");

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = user.user_name;

    const age = document.createElement("p");
    age.textContent = `Age: ${user.age}`;

    const description = document.createElement("p");
    description.textContent = user.description;

    card.append(img, title, age, description);

    return card;
}

// Function to render user cards
function renderUsers(users) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ''; // Clear existing content
    users.forEach(user => {
        const userCard = createCard(user);
        cardContainer.appendChild(userCard);
    });
}

// Function to handle DOM manipulation example
function setupDOMManipulation() {
    const p1 = document.getElementById("p1");
    const textInput = document.getElementById("username-input");

    textInput.addEventListener("input", (e) => {
        p1.textContent = e.target.value;
    });
}

// Event listeners for links
document.getElementById("show-cards").addEventListener("click", () => {
    document.getElementById("card-container").style.display = "block";
    document.getElementById("dom-example").style.display = "none";
    renderUsers(users);
});

document.getElementById("show-dom").addEventListener("click", () => {
    document.getElementById("card-container").style.display = "none";
    document.getElementById("dom-example").style.display = "block";
    setupDOMManipulation();
});

// Initially hide the card container
document.getElementById("card-container").style.display = "none";
