$.ajax({
    url:"https://cricapi.com/api/playerStats?apikey=GOIFHgTgUOggFpxfp6NmzPa2j4E3&pid=42639",
    success: function(data){

        let listA = data.data.batting.listA.Runs;
        let firstClass = data.data.batting.firstClass.Runs;
        let t20 = data.data.batting.T20Is.Runs;
        let ODIs = data.data.batting.ODIs.Runs;
        let tests = data.data.batting.tests.Runs;

        
        var ctx = document.getElementById("myPieChart");
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["List A","T20", "First Class", "ODIs", "Tests"],
                datasets: [{
                    label: '# of Votes',
                    data: [listA,firstClass,t20,ODIs,tests,],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

    }
})