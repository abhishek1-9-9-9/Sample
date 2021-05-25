google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Previous week', 'This week',],
            ['S',  27,       30],
            ['M',  26,       37],
            ['T',  24,       25],
            ['W',  28,       22],
            ['T',  35,       24],
            ['F',  32,       25],
            ['S',  39,       21]
        ]);

        var options = {
          title: 'Spent Time',
          hAxis: {title: 'Days',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Hour', minValue: 10}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }