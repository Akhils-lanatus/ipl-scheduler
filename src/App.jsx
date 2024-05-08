import React, { useState } from "react";

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

  const nonShuffledTeams = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
      let dayIndex = nonShuffledTeams.length % 7;
      if (i !== j) {
        nonShuffledTeams.push({
          day: days[dayIndex],
          team1: teams[i],
          team2: teams[j],
        });
      }
    }
  }

  const getMatch = (currentIndex, previousIndex) => {
    if (currentIndex >= totalMatches) {
      return 0;
    }
    if (
      nonShuffledTeams[currentIndex].team1 !==
        nonShuffledTeams[previousIndex].team1 &&
      nonShuffledTeams[currentIndex].team1 !==
        nonShuffledTeams[previousIndex].team2 &&
      nonShuffledTeams[currentIndex].team2 !==
        nonShuffledTeams[previousIndex].team1 &&
      nonShuffledTeams[currentIndex].team2 !==
        nonShuffledTeams[previousIndex].team2
    ) {
      return currentIndex;
    } else {
      return getMatch(currentIndex + 1, previousIndex);
    }
  };

  for (let i = 0; i < totalMatches; i++) {
    if (i > 0) {
      let ind = getMatch(i, i - 1);
      let temp1 = nonShuffledTeams[i].team1;
      let temp2 = nonShuffledTeams[i].team2;
      nonShuffledTeams[i].team1 = nonShuffledTeams[ind].team1;
      nonShuffledTeams[i].team2 = nonShuffledTeams[ind].team2;
      nonShuffledTeams[ind].team1 = temp1;
      nonShuffledTeams[ind].team2 = temp2;
    }
  }

  // let finalArray = [];
  // const matchSchedule = [];
  // let previousMatchChecker = [];
  // let testCounter = 0;

  // const getMatch = (i, i2) => {
  //   if (i === totalMatches) {
  //     return 0;
  //   }
  //   // console.log(
  //   //   nonShuffledTeams[i2].team1,
  //   //   "!==",
  //   //   nonShuffledTeams[i - 1].team1,
  //   //   "&&",
  //   //   nonShuffledTeams[i2].team1,
  //   //   "!==",
  //   //   nonShuffledTeams[i - 1].team2,
  //   //   "&&",
  //   //   nonShuffledTeams[i2].team2,
  //   //   "!==",
  //   //   nonShuffledTeams[i - 1].team1,
  //   //   "&&",
  //   //   nonShuffledTeams[i2].team2,
  //   //   "!==",
  //   //   nonShuffledTeams[i - 1].team2
  //   // );
  //   if (
  //     nonShuffledTeams[i2].team1 !== nonShuffledTeams[i - 1].team1 &&
  //     nonShuffledTeams[i2].team1 !== nonShuffledTeams[i - 1].team2 &&
  //     nonShuffledTeams[i2].team2 !== nonShuffledTeams[i - 1].team1 &&
  //     nonShuffledTeams[i2].team2 !== nonShuffledTeams[i - 1].team2
  //   ) {
  //     return i - 1;
  //   } else {
  //     return getMatch(i + 1, i2);
  //   }
  // };

  // for (let i = 0; i < totalMatches; i++) {
  //   if (i == 0) {
  //     finalArray.push(nonShuffledTeams[i]);
  //   } else {
  //     let selectedMatch = getMatch(i, i);
  //     console.log(nonShuffledTeams[selectedMatch]);

  //     let temp1 = nonShuffledTeams[selectedMatch].team1;
  //     let temp2 = nonShuffledTeams[selectedMatch].team2;
  //     nonShuffledTeams[selectedMatch].team1 = nonShuffledTeams[i].team1;
  //     nonShuffledTeams[selectedMatch].team2 = nonShuffledTeams[i].team2;
  //     nonShuffledTeams[i].team1 = temp1;
  //     nonShuffledTeams[i].team2 = temp2;

  // finalArray.push({
  //   day: nonShuffledTeams[i].day,
  //   team1: nonShuffledTeams[selectedMatch].team1,
  //   team2: nonShuffledTeams[selectedMatch].team2,
  // });
  //   }
  // }

  // console.log(teams);
  // console.log(finalArray);
  // console.log(nonShuffledTeams);
  // console.log(finalArray);

  // for (let i = 0; i < totalMatches; i++) {
  //   let dayIndex = i % 7;
  //   if (i == 0) {
  //     matchSchedule.push({
  //       day: days[dayIndex],
  //       match: `${nonShuffledTeams[i].team1} v/s ${nonShuffledTeams[i].team2}`,
  //     });
  //   } else {
  //     if (
  //       nonShuffledTeams[i].team1 === nonShuffledTeams[i - 1].team1 ||
  //       nonShuffledTeams[i].team1 === nonShuffledTeams[i - 1].team2
  //     ) {
  //     }
  //   }
  // }

  // console.log(nonShuffledTeams);

  // let counterWatcher = teams.map((items) => {
  //   return { team: items, teamMatchCount: 0 };
  // });

  // const getRandomMatches = (i) => {
  //   let team1 = Math.floor(Math.random() * teams.length);
  //   let team2 = Math.floor(Math.random() * teams.length);
  //   if (team1 !== team2) {
  //     previousMatchChecker.push({ team1, team2 });
  //     if (previousMatchChecker.length == 1) {
  //       counterWatcher[team1].teamMatchCount++;
  //       counterWatcher[team2].teamMatchCount++;
  //       return { team1, team2 };
  //     }
  //     if (previousMatchChecker.length > 1) {
  //       if (
  //         previousMatchChecker[previousMatchChecker.length - 2].team1 !==
  //           team1 &&
  //         previousMatchChecker[previousMatchChecker.length - 2].team2 !==
  //           team1 &&
  //         previousMatchChecker[previousMatchChecker.length - 2].team1 !==
  //           team2 &&
  //         previousMatchChecker[previousMatchChecker.length - 2].team2 !== team2
  //       ) {
  //         counterWatcher[team1].teamMatchCount++;
  //         counterWatcher[team2].teamMatchCount++;
  //         return { team1, team2 };
  //       } else {
  //         previousMatchChecker.pop();
  //         return getRandomMatches();
  //       }
  //     }
  //   } else {
  //     return getRandomMatches();
  //   }
  // };

  // for (let i = 0; i < totalMatches; i++) {
  //   let dayIndex = matchSchedule.length % 7;
  //   let matchToBePlayed = getRandomMatches(i);
  //   matchSchedule.push({
  //     day: days[dayIndex],
  //     match: `${teams[matchToBePlayed.team1]} v/s ${
  //       teams[matchToBePlayed.team2]
  //     }`,
  //   });
  // }

  //day-3 8-5-24

  //consoles
  // console.log(nonShuffledTeams, "NST");
  // console.log(matchSchedule, "ST");
  // console.log(counterWatcher, "ST");

  return (
    <div
      style={{
        backgroundColor: "#212121",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <table>
        <thead>
          <tr>
            <td style={{ padding: "10px" }}>DAY</td>
            <td style={{ padding: "10px" }}>MATCH 1</td>
          </tr>
        </thead>
        <tbody>
          {nonShuffledTeams.map((items, i) => (
            <tr key={i}>
              <td>{items?.day}</td>
              <td style={{ padding: "10px" }}>
                {items?.team1} v/s {items?.team2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
