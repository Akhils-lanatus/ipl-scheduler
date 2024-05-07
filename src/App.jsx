import React, { useEffect, useState } from "react";

const App = () => {
  let [teams] = useState([
    "MI",
    "CSK",
    "RCB",
    "LSG",
    "DC",
    "KXIP",
    "SRH",
    "KKR",
  ]);
  let [days] = useState([
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ]);

  let totalMatches = teams.length * (teams.length - 1);
  const matchSchedule = [];

  let counterWatcher = teams.map((items) => {
    return { team: items, teamMatchCount: 0 };
  });

  const selectedMatches = [];
  let previousMatchChecker = [];
  let testCounter = 0;

  const nonShuffledTeams = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
      if (i !== j) {
        nonShuffledTeams.push({ team1: teams[i], team2: teams[j] });
      }
    }
  }

  const getRandomMatches = () => {
    let team1 = Math.floor(Math.random() * teams.length);
    let team2 = Math.floor(Math.random() * teams.length);
    if (team1 !== team2) {
      previousMatchChecker.push({ team1, team2 });
      if (previousMatchChecker.length == 1) {
        ++counterWatcher[team1].teamMatchCount;
        ++counterWatcher[team2].teamMatchCount;
        return { team1, team2 };
      } else if (previousMatchChecker.length > 1) {
        if (
          previousMatchChecker[previousMatchChecker.length - 2].team1 !=
            team1 &&
          previousMatchChecker[previousMatchChecker.length - 2].team2 !=
            team1 &&
          previousMatchChecker[previousMatchChecker.length - 2].team1 !=
            team2 &&
          previousMatchChecker[previousMatchChecker.length - 2].team2 != team2
        ) {
          counterWatcher[team1].teamMatchCount = ++counterWatcher[team1]
            .teamMatchCount;
          counterWatcher[team2].teamMatchCount = ++counterWatcher[team2]
            .teamMatchCount;
          return { team1, team2 };
        } else {
          previousMatchChecker.pop();
          return getRandomMatches();
        }
      }
    } else {
      return getRandomMatches();
    }
  };

  for (let i = 0; i < totalMatches; i++) {
    let dayIndex = matchSchedule.length % 7;
    let matchToBePlayed = getRandomMatches();
    matchSchedule.push({
      day: days[dayIndex],
      match: `${teams[matchToBePlayed.team1]} v/s ${
        teams[matchToBePlayed.team2]
      }`,
    });
  }

  //consoles
  console.log(nonShuffledTeams, "NST");
  console.log(matchSchedule, "ST");
};
export default App;
