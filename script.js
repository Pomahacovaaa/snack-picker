const items = [
    // Prep = 0 minutes
    { name: "fruits", prep: 0, health: "hel" },
    { name: "yogurt", prep: 0, health: "hel" },
    { name: "granola bar", prep: 0, health: "hel" },
    { name: "protein bar", prep: 0, health: "hel" },
    { name: "carrot sticks", prep: 0, health: "hel" },
    { name: "trail mix", prep: 0, health: "hel" },
    { name: "rice cakes", prep: 0, health: "hel" },
    { name: "chips", prep: 0, health: "unhel" },
    { name: "chocolate", prep: 0, health: "unhel" },
    { name: "cookies", prep: 0, health: "unhel" },
    { name: "ice cream", prep: 0, health: "unhel" },
    { name: "candy", prep: 0, health: "unhel" },
    { name: "crackers", prep: 0, health: "unhel" },
    { name: "donut", prep: 0, health: "unhel" },
    { name: "muffin", prep: 0, health: "unhel" },
    { name: "pudding", prep: 0, health: "unhel" },
    { name: "milkshake", prep: 0, health: "unhel" },
    { name: "pretzels", prep: 0, health: "unhel" },
    { name: "cupcake", prep: 0, health: "unhel" },

    // Prep = 5 minutes
    { name: "toast", prep: 5, health: "hel" },
    { name: "avocado toast", prep: 5, health: "hel" },
    { name: "hummus with veggies", prep: 5, health: "hel" },
    { name: "popcorn", prep: 5, health: "unhel" },
    { name: "instant noodles", prep: 5, health: "unhel" },
    { name: "nachos", prep: 5, health: "unhel" },

    // Prep = 20 minutes
    { name: "hard boiled eggs", prep: 20, health: "hel" },
    { name: "grilled chicken salad", prep: 20, health: "hel" },
    { name: "veggie omelette", prep: 20, health: "hel" },
    { name: "banana pancakes", prep: 20, health: "hel" },
    { name: "avocado egg toast", prep: 20, health: "hel" },
    { name: "bananas with chocolate", prep: 20, health: "unhel" },
    { name: "peanut butter chocolate toast", prep: 20, health: "unhel" }, 
    { name: "sweet waffles with syrup", prep: 20, health: "unhel" },
    { name: "pizza rolls", prep: 20, health: "unhel" }
];


function displayResults(result) {
    const container = document.getElementById("result");
    container.innerHTML = "";

    result.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.name;
        container.appendChild(div);
    });
}


function FilterItems() {
    const selectedHealth = document.getElementById("health").value;
    const selectedPrep = document.getElementById("prep").value;

    const result = items.filter(item => {
        return (
            (selectedHealth ==="all" || item.health === selectedHealth) && (selectedPrep ==="all" || item.prep <=Number(selectedPrep))

        );
});
displayResults(result);
}


const b = document.getElementById("bouncer");
let x = 0, y = 0;             // starting position
let dx = 2, dy = 2;           // speed in px per frame
 
function move() {
  const w = window.innerWidth - b.offsetWidth;
  const h = window.innerHeight - b.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= w) dx *= -1;  // reverse horizontal direction
  if (y <= 0 || y >= h) dy *= -1;  // reverse vertical direction

  b.style.left = x + "px";
  b.style.top = y + "px";

  requestAnimationFrame(move);
}

move();
