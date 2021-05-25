am4core.ready(function() {


am4core.useTheme(am4themes_animated);



var chart = am4core.create("chartdiv", am4charts.RadarChart);


chart.data = [{
  "subject": "Mat",
  "score": 95
}, {
  "subject": "Sci",
  "score": 90
}, {
  "subject": "Eng",
  "score": 60
}, {
  "subject": "His",
  "score": 94
}, {
  "subject": "Geo",
  "score": 93
}, {
  "subject": "Com",
  "score": 80
}, {
  "subject": "Art",
  "litscoreres": 85
}, {
  "subject": "Bio",
  "score": 91
}];


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "subject";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
valueAxis.renderer.axisFills.template.fillOpacity = 0.05;


var series = chart.series.push(new am4charts.RadarSeries());
series.dataFields.valueY = "score";
series.dataFields.categoryX = "subject";
series.name = "Skill";
series.strokeWidth = 3;

});