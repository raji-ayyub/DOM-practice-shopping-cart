const profiles = [
    {
        name: "Alice Johnson",
        title: "Frontend Developer",
        image: "images/avatar.png",
        bio: "Passionate about UI/UX and JavaScript frameworks."
    },
    {
        name: "Alice Johnson",
        title: "Frontend Developer",
        image: "images/avatar.png",
        bio: "Passionate about UI/UX and JavaScript frameworks."
    },
    {
        name: "Alice Johnson",
        title: "Frontend Developer",
        image: "images/avatar.png",
        bio: "Passionate about UI/UX and JavaScript frameworks."
    },
    
];


const cardsContainer = document.getElementById("cards-container");

// Create profile cards
profiles.forEach(profile => {

   const card = document.createElement("div")
   card.className = "card"

    card.innerHTML = `
        
            <img class="avatar" src=${profile.image} alt="John Doe">
            <div class="name">${profile.name}</div>
            <div class="role">${profile.title}</div>
            <div class="bio">${profile.bio}</div>
        
    `

    // push each created card inside div in the html (cards-container)
    cardsContainer.appendChild(card);
});

    // cardsContainer.appendChild(card);
