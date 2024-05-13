/* 
    This program uses the chart.js library to create a pie chart based on the user's trending spend data.
*/

window.addEventListener('load', function() {
    var data = [
        {color: "#B22222", value: 200.5},
        {color: "yellow", value: 147.131},
        {color: "green", value: 89.286},
        {color: "orange", value: 53.160},
        {color: "dodgerblue", value: 164.6},
        {color: "skyblue", value: 17.952}
    ];

    var categories = ["Food and Dining", "Auto and Transport", "Shopping", "Bills and Utilities", "Mortgage", "Entertainment"];
    var spending = ["2005.00", "1471.31", "892.86", "531.60", "1646.00", "179.52"];

    var ctx = document.getElementById('myPieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: spending,
                backgroundColor: data.map(item => item.color)
            }]
        },
        options: {
            responsive: true
        }
    });
});