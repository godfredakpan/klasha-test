
export const lineLegends = [
  { title: 'Training sessions', color: 'bg-traning-sessions' },
  { title: 'Team meetings', color: 'bg-team-meetings' },
  { title: 'Medical checks', color: 'bg-medical-checks' },
]


export const lineOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

    datasets: [
      {
        label: 'Training sessions',
        backgroundColor: '#FFC961',
        borderColor: '#FFC961',
        data: [2.5, 5, 10, 3, 5, 6, 0],
        fill: false,
      },
      {
        label: 'Team meetings',
        fill: false,
        backgroundColor: '#F03C80',
        borderColor: '#F03C80',
        data: [5, 10, 0, 3, 5, 6, 2],
      },

      {
        label: 'Medical checks',
        fill: false,
        backgroundColor: '#505DD6',
        borderColor: '#505DD6',
        data: [0, 3, 0, 3, 5, 6, 5],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Schedules',
        },
      },
      y: {
        display: false,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}
