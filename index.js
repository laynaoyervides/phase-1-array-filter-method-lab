// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name){
    const exactName = function(person){
        return person.toLowerCase() === name.toLowerCase();
    }
        return drivers.filter(exactName);
    }


function fuzzyMatch(drivers, name){
    function test(first2){
        let name2 = name.substring(0.2);
        return first2.substring(0,2) === name2;
    }
    return drivers.filter(test);

}

function matchName(drivers, string){
    const driversWho = function(drivers){
        return drivers.name === string;
    }
    return drivers.filter(driversWho);
}