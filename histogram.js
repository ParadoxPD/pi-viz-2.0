const ctx = document.getElementById('histogram');
// digits = await getPiDigits();

const piChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Array.apply(null, { length: 10 }).map(Number.call, Number),
        datasets: [{
            label: 'Digit Count',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


function addDigitToHistogram(chart, digit) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data[digit]++;
    });
    chart.update();
}

function addFillColor(chart, colors) {
    chart.data.datasets[0].backgroundColor = colors;
}



