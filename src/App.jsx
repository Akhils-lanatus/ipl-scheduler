import React from "react";

const App = () => {
  let teams = ["MI", "CSK", "RCB", "LSG", "DC", "KXIP", "SRH", "KKR"];
  let days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  const matchSchedule = [];
  let totalMatches = teams.length * (teams.length - 1);

  let counterWatcher = teams.map((items) => {
    return { team: items, teamMatchCount: 0 };
  });

  const mindex = [];
  const selectedMatches = [];

  const getMatchDayIndex = () => {
    let num = Math.floor(Math.random() * totalMatches);
    const isExist = mindex.includes(num);
    if (isExist) {
      return getMatchDayIndex();
    } else {
      mindex.push(num);
      return num;
    }
  };

  for (let i = 0; i < totalMatches; i++) {
    let matchPosition = getMatchDayIndex();
    let dayIndex = matchSchedule.length % 7;
    // matchSchedule.push({ day: days[dayIndex], matchPosition });
  }

  return <div>App</div>;
};

export default App;
