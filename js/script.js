

let team = [
  {
    displayName : "Jaybee",
    fullName : "Ogundipe Ajibike",
    image : "./images/jaybee.jpg",
    bestFood : "Fried Rice",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap", "Git & GitHub"],
    bestMovie : "Lion heart",
    age : undefined,
  },

  { 
    displayName : "(Danny)",
    fullName : "Daniel Udechukwu",
    image : "./images/danny.jpg",
    bestFood : "Egusi Soup",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap", "Git & GitHub"],
    bestMovie : "Avengers Endgame",
    age : 24,
  },

  {
    displayName : "Johnson Francis",
    fullName : "Johnson Francis",
    image : "./images/francis.png",
    bestFood : "Fried Yam",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap"],
    bestMovie : "G.I Joe",
    age : undefined,
  },

  {
    displayName : "Spaghettiii",
    fullName : "Maduka Chiamaka",
    image : "./images/spaghettiii.jpg",
    bestFood : "Spaghetti",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap", "Git & GitHub"],
    bestMovie : "Money Heist",
    age : undefined,
  },

  {
    displayName : "Iam_Daniel_Ikpe",
    fullName : "Daniel Ikpe",
    image : "./images/daniel.jpg",
    bestFood : "Rice and Sauce",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap", "Git & GitHub"],
    bestMovie : "Jumanji",
    age : undefined,
  },

  {
    displayName : "Chidinma",
    fullName : "Chidinma Udo",
    image : "./images/chidinma.jpg",
    bestFood : "Jollof Rice",
    complexion : "Light Skinned",
    things_learnt : ["javascript", "html", "css", "bootstrap", "Git & GitHub"],
    bestMovie : "Wonderwoman",
    age : undefined,
  },

  {
    displayName : "Smartlify",
    fullName : "Anosike Obinna",
    image : "./images/smartlify.jpg",
    bestFood : "Roasted Yam",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap", "Git & GitHub"],
    bestMovie : "The Flash",
    age : undefined,
  },

  {
    displayName : "Michael",
    fullName : "Thaddyoparaocha Michael Chiagoziem",
    image : "./images/michael.png",
    bestFood : "Fried Rice",
    complexion : "Dark",
    things_learnt : ["javascript", "html", "css", "bootstrap"],
    bestMovie : "Wolf of Wall Street",
    age : undefined,
  },
];

let row = document.querySelector(".row");

for (var i = 0; i < team.length; i++) {  // loop through the array
  
  let card = `
    <div class="col-lg-3 col-md-6 col-12 column pb-5">
      <div class="card">
        <img src="${team[i].image}" alt="">
        <div class="card-body">
          <h5 class="card-title fs-4 fw-bold">${team[i].displayName}</h5>
          <p class=" fw-bold">${team[i].bestFood}</p>

          <div>
            <button class="btn btn-primary" onclick="moreInfo(${i})">Full Name</button>
          </div>
        </div>
      </div>
    </div>
  `;

  row.innerHTML += card;

  function moreInfo(i) {
    alert(team[i].fullName);
  }

  //  let img = document.querySelector("img");
  //  img.src = team[i].image;
  //  document.querySelector('img').appendChild(img);
}