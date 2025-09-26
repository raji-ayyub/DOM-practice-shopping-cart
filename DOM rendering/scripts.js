const profiles = [
    {
        id: 1, 
        imageUrl: "images/avatar.png",
        name: "John Doe", 
        role: "Frontend Developer", 
        description: "Passionate about building interactive UIs and web experiences."
    },
    {
        imageUrl: "images/practice-card.jpg",
        id: 2, 
        name: "Mary Jane", 
        role: "Frontend Developer", 
        description: "Passionate about building interactive UIs and web experiences."
    },
     {
        imageUrl: "images/avatar.png",
        id: 2, 
        name: "John Doe", 
        role: "Frontend Developer", 
        description: "Passionate about building interactive UIs and web experiences."
    },
];



const cardsContainer = document.getElementById("cards-container");

// Create profile cards
profiles.forEach(profile => {

   const card = document.createElement("div")
   card.className = "card"

    card.innerHTML = `
        <img class="avatar" src=${profile.imageUrl}  alt="John Doe">
        <div class="name">${profile.name}</div>
        <div class="role">${profile.role}</div>
        <div class="bio">${profile.description}</div>
        
        
    `

    // push each created card inside div in the html (cards-container)
    cardsContainer.appendChild(card);
});

// cardsContainer.appendChild(card);
