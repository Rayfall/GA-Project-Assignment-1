window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "dark2",
    exportFileName: "Doughnut Chart",
    exportEnabled: false,
    animationEnabled: true,
    data: [{
      type: "doughnut",
      innerRadius: 150,
      showInLegend: false,
      toolTipContent: "<b>{name}</b>: {y} (#percent%)",
      indexLabel: "{name} - #percent%",
      dataPoints: [
        { y: 47, name: "Intelligence" },
        { y: 28, name: "Problem Solving" },
        { y: 20, name: "Endurance" },
        { y: 45, name: "Leadership"},
        { y: 1, name: "Laziness"},
        
      ]
    }]
  });
  chart.render();
  
  function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
  }
  
  }





/*window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    data: [{
      type: "doughnut",
      startAngle: 60,
      indexLabelFontSize: 15,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 47, label: "Intelligence" },
        { y: 28, label: "Problem Solving" },
        { y: 20, label: "Endurance" },
        { y: 45, label: "Leadership"},
        { y: 1, label: "Laziness"},
      ]
    }]
  });
  chart.render();
}*/