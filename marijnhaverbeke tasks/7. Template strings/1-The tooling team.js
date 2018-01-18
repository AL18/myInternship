// Template strings.1:
// The tooling team
//
// Given the data in the starting code, use a template string to produce the following string. Make sure the numbers, names, and team name actually come from the data.
//
//     There are 4 people on the tooling team.
//     Their names are Jennie, Ronald, Martin, Anneli.
//     2 of them have a senior role.


const teamName = "tooling"
const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}]

const checkTemplate = 'senior';

const message = (`There are ${people.length} people on the ${teamName} team.
Their names are${ people.map( item => ` ${item.name}` ) }.
${people.filter( 
    item => (item.role === checkTemplate) ).length} of them have a ${people.filter( 
    item => item.role === checkTemplate)[0].role} role.`)


console.log(message)