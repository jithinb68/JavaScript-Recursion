const inputArray = [{
        name: "company",
        type: "IS",
        value: ["Apple", "Google"],
    },
    {
        name: "technology",
        type: "IS",
        value: ["Javascript", "React"],
    },
    {
        name: "technology",
        type: "NOT",
        value: ["Vue", "Angular"],
    },
    {
        name: "company",
        type: "NOT",
        value: ["Microsoft", "Wipro"],
    },
    {
        name: "location",
        type: "NOT",
        value: ["Bangalore", "Chennai"],
    }, ];

const tempOutput = inputArray.reduce((acc, curr)=> {
    if (!(curr.name in acc)) acc[curr.name] = { 'IS': [], 'NOT': [] };
    if(curr.type === 'IS') {
        acc[curr.name]['IS'].push(curr.value)
    } else if(curr.type === 'NOT') {
        acc[curr.name]['NOT'].push(curr.value)
     }
    return acc
}, {})

console.log(tempOutput);




