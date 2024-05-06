import React from "react";

const App = () => {
  let teams = [0, 1, 2, 3, 4, 5, 6, 7];
  // let teams = ["MI", "CSK", "RCB", "LSG", "DC", "KXIP", "SRH", "KKR"];
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
  let previousMatch = [];

  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
      if (i !== j) {
        previousMatch = [teams[i], teams[j]];
        let daysIndex = matchSchedule.length % 7;
        let match = `${teams[i]} v/s ${teams[j]}`;
        // console.log(previousMatch[0], previousMatch[1], i, j);
        // if (
        //   previousMatch[0] != i &&
        //   previousMatch[1] != i &&
        //   previousMatch[0] != j &&
        //   previousMatch[1] != j
        // ) {
        //   // console.log(match);
        // } else {
        //   console.log(match);
        //   // console.log("No");
        // }

        if (daysIndex == 5 || daysIndex == 6) {
          matchSchedule.push({
            day: days[daysIndex],
            match,
            match2: `${teams[i]} v/s ${teams[j]}`,
          });
        } else {
          matchSchedule.push({
            day: days[daysIndex],
            match,
          });
        }
      }
    }
  }

  // let temp = matchSchedule[0].match;
  // matchSchedule[0].match = matchSchedule[1].match;
  // matchSchedule[1].match = temp;
  // for (let i = 0; i < totalMatches; i++) {
  //   if (i > 6) {
  //     matchSchedule[i].match = matchSchedule[i + 2]?.match;
  //   }
  //   if (i > 4) {
  //     if (i % 7 == 5 || i % 7 == 6) {
  //       matchSchedule[i].match2 = matchSchedule[i + 2]?.match;
  //     }
  //   }
  // }

  // ====
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#212121",
        color: "#fff",
      }}
    >
      <table style={{ border: "1px solid #fff", width: "100%" }}>
        <thead>
          <tr>
            <td
              style={{
                border: "1px solid #fff",
                padding: "10px",
              }}
            >
              Day
            </td>
            <td
              style={{
                border: "1px solid #fff",
                padding: "10px",
              }}
            >
              Match 1
            </td>
            <td
              style={{
                border: "1px solid #fff",
                padding: "10px",
              }}
            >
              Match 2
            </td>
          </tr>
        </thead>
        <tbody>
          {matchSchedule.map((items, i) => {
            return (
              <tr key={i} style={{ padding: "20px" }}>
                <td
                  style={{
                    border: "1px solid #fff",
                    padding: "10px",
                  }}
                >
                  {items.day}
                </td>
                <td
                  style={{
                    border: "1px solid #fff",
                    padding: "10px",
                  }}
                >
                  {items.match}
                </td>
                <td
                  style={{
                    border: "1px solid #fff",
                    padding: "10px",
                  }}
                >
                  {items.match2}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
