const animals = {
    BigEyed: ["Coco", "Curtis", "Dodo", "Dundun", "Googoo", "Harry", "Lotus", "Moonmoon", "Om Nom", "Ori", "Pensky", "The Lamb"],
    Canines: ["Cabbage Dog", "Fluffy", "Hachi", "Kato", "Lou", "Max", "Nemo", "Pensky", "Ron", "Sam", "Snow", "Sparky", "Sunny", "Stella"],
    Diving: ["Bruce", "Coco", "Hammer", "Harry", "Lloyd", "Lotus", "Otta", "Pensky", "Tuskarr"],
    EggLaying: ["Bruce", "Coco", "Curtis", "Dodo", "Googoo", "Hammer", "Harry", "Lloyd", "Lotus", "Moonmoon", "Tyrex", "Underbite"],
    Felines: ["Dundun", "Garfat", "Kiko", "Levi", "Macchiato", "Maneki", "Miu", "Tiagra", "Sunday"],
    Fluffy: ["Barbie", "Bob", "Carrot", "Dundun", "Fluffy", "Fubao", "Fuguee", "Garfat", "Gopher", "Hachi", "Kiko", "Kola", "Levi", "Lotus", "Lou", "Macchiato", "Maneki", "Max", "Miu", "Morse", "Nemo", "Otta", "Pensky", "Ron", "Sam", "Snow", "Spike", "Stella", "Sunday", "The Lamb", "Tiagra", "Valiente"],
    Flying: ["Bruce", "Coco", "Dodo", "Googoo", "Hammer", "Harry", "Lloyd", "Lotus", "Moonmoon", "Tyrex", "Underbite"],
    Horned: ["Curtis", "Lotus", "Morse", "Tyrex", "Uni", "Valiente"],
    LongTailed: ["Coco", "Dundun", "Garfat", "Kiko", "Levi", "Macchiato", "Maneki", "Miu", "Tiagra", "Sunday"],
    MeatEating: ["Bruce", "Coco", "Dundun", "Garfat", "Hammer", "Harry", "Kiko", "Levi", "Macchiato", "Maneki", "Miu", "Tiagra", "Sunday"],
    PlantEating: ["Bacon", "Barbie", "Bob", "Cabbage Dog", "Carrot", "Curtis", "Dodo", "Fubao", "Fuguee", "Googoo", "Gopher", "Harry", "Kola", "Lloyd", "Morse", "Om Nom", "Shin", "Valiente", "Yurusa"]
};

function createCheckboxes() {
    const container = document.getElementById("checkboxes");
    for (let category in animals) {
        const label = document.createElement("label");
        label.classList.add("checkbox-label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = category;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(category));
        container.appendChild(label);
    }
}

function filterAnimals() {
    const checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
    const selectedCategories = Array.from(checkedBoxes).map(cb => cb.value);
    if (selectedCategories.length === 0) {
        document.getElementById("result").innerText = "Please select at least one category.";
        return;
    }
    let filteredAnimals = animals[selectedCategories[0]];
    selectedCategories.slice(1).forEach(category => {
        filteredAnimals = filteredAnimals.filter(animal => animals[category].includes(animal));
    });
    document.getElementById("result").innerText = filteredAnimals.length ? filteredAnimals.join(", ") : "No matching animals.";
}

createCheckboxes();
