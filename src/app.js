//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  const data = [managerName, managerAge, currentTeam, trophiesWon]
  return data
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length === 0)
    return null;
  else
    var formationObject = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    }
  return formationObject;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  var debute = players.filter((player) =>
    player.debut == year)
  console.log(debute)
  return debute
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  var place = players.filter((player) => player.position == position)
  return place
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let array = players.filter((player) => {
    for (let i = 0; i < player.awards.length; i++) {
      if (player.awards[i].name == awardName) {
        return true;
      }
    }
    return false;
  })
  return array;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let legend = players.filter((player) => {
    let count = 0;
    for (let i = 0; i < player.awards.length; i++) {
      if (player.awards[i].name === awardName) {
        count++;
      }
    }
    return (count == noOfTimes)
  });
  return legend
}
//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let arr = filterByAward(awardName);
  let nation = arr.filter(player => player.country == country)
  return nation;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let special= players.filter((player) => {
  return player.awards.length>= noOfAwards && player.team == team && player.age < age
  });
    return special;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var sortedPlayers = players;
  for (let i = 0; i < sortedPlayers.length; i++) {
    for (let j = i + 1; j < sortedPlayers.length; j++) {
      if (sortedPlayers[i].age < sortedPlayers[j].age) {
        let temp = sortedPlayers[i];
        sortedPlayers[i] = sortedPlayers[j];
        sortedPlayers[j] = temp;
      }
    }
  }
  return sortedPlayers;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let filteredTeamPlayers = players.filter((player) => {
    return player.team == team;
  })
  for (let i = 0; i < filteredTeamPlayers.length; i++) {
    for (let j = i + 1; j < filteredTeamPlayers.length; j++) {
      if (filteredTeamPlayers[i].awards.length < filteredTeamPlayers[j].awards.length) {
        let temp = filteredTeamPlayers[i];
        filteredTeamPlayers[i] = filteredTeamPlayers[j];
        filteredTeamPlayers[j] = temp;
      }
    }
  }
  return filteredTeamPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(award,times,country){
  let arr = filterByAwardxTimes(award,times);
  let filteredTimes = arr.filter(function(player){
    return player.country == country;
  })
  return filteredTimes.sort()
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age){
  let arr = players.filter(function(player){
    return player.age>age;
  })
  let ronaldo = arr.sort();
  let temp = ronaldo;
  for (let i = 0; i < ronaldo.length; i++) {
    for (let j = 0; j < ronaldo.length; j++) {
      if (temp[j].awards.length < temp[j + 1].awards.length) {
        let temp = temp[j];
        temp[j] = temp[j + 1]
        temp[j + 1] = temp;
      }
    }
  }
  return temp;
}