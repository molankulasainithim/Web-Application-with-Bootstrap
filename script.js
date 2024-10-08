// Load the Google Charts package
google.charts.load('current', {'packages':['corechart']});

// Draw the chart after the library is loaded
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create the data table
    var data = google.visualization.arrayToDataTable([
        ['Programming Language', 'Popularity'],
        ['JavaScript', 25],
        ['Python', 30],
        ['Java', 20],
        ['C++', 10],
        ['PHP', 5],
        ['Others', 10]
    ]);

    // Set chart options
    var options = {
        title: 'Popularity of Programming Languages in 2024',
        is3D: true
    };

    // Create and draw the chart
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
