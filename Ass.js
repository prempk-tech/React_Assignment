let citiesVisited = ["Kiev","Prague","Zurich","Amsterdam","Barcelona","Berlin","Kiev"];
let tickets = [
    ["Kiev", "Prague"],
    ["Prague", "Zurich"],
    ["Zurich", "Amsterdam"],
    ["Amsterdam", "Barcelona"],
    ["Barcelona", "Berlin"],
    ["Berlin", "Kiev"]
];

let visitedNodes = [];
let currentNode = citiesVisited[0];

while(citiesVisited.length > 0) {
    visitedNodes.push(currentNode);

    // Find the next node
    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        if (ticket[0] === currentNode) {
            currentNode = ticket[1];
            break;
        }
    }

    // Remove the current node from the list of cities to visit
    let index = citiesVisited.indexOf(currentNode);
    citiesVisited.splice(index, 1);
}

console.log(visitedNodes); // ["Boston", "New York", "Chicago", "San Francisco"]l