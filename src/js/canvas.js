const ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-undef, no-unused-vars
const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['jan', 'feb', 'march', 'april', 'may', 'jun'],
    // 3
    datasets: [
      {
        // 4
        label: 'To Do',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [2, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'Done',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      },
    ],
  },
});
