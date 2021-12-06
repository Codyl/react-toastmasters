const EVENTS = [
  {
    id: 0,
    name: "Club Meeting",
    date: new Date(2021, 11, 6, 18),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: null,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
  {
    id: 1,
    name: "Club Meeting",
    date: new Date(2021, 11, 13, 22),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: 0,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: null,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Leadership Training",
    date: new Date(2021, 11, 20, 19),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: 1,
      },
      {
        position: "speaker #1",
        userID: null,
      },
      {
        position: "speaker #2",
        userID: null,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 2,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 2,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 2,
      },
      {
        position: "Timer",
        userID: 1,
      },
      {
        position: "Sargent at arms",
        userID: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Club Meeting",
    date: new Date(2021, 11, 20, 18),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: null,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
  {
    id: 4,
    name: "Club Meeting",
    date: new Date(2021, 11, 27, 18),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: null,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
  {
    id: 5,
    name: "Club Meeting",
    date: new Date(2021, 11, 27, 18),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: null,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
  {
    id: 6,
    name: "Club Meeting",
    date: new Date(2022, 1, 3, 18),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: null,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
  {
    id: 7,
    name: "Club Meeting",
    date: new Date(2022, 1, 10, 18),
    location: "Midway",
    theme: 'Charting the course',
    positions: [
      {
        position: "toastmaster",
        userID: null,
      },
      {
        position: "speaker #1",
        userID: 0,
      },
      {
        position: "speaker #2",
        userID: 0,
      },
      {
        position: "speaker #3",
        userID: 0,
      },
      {
        position: "Evaluator #1",
        userID: 0,
      },
      {
        position: "Evaluator #2",
        userID: 0,
      },
      {
        position: "Evaluator #3",
        userID: 0,
      },
      {
        position: "Table Topic Master",
        userID: 0,
      },
      {
        position: "General Evaluator",
        userID: 0,
      },
      {
        position: "Timer",
        userID: 0,
      },
      {
        position: "Sargent at arms",
        userID: 0,
      },
    ],
  },
];
export default EVENTS;
