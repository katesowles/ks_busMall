var labelArray = [];    //array to store labels for chart
var yAxisArray = [];    //array to store Yaxis or clicks numbers for chart

var makeBarLabels = function() {
  for (var i = 0; i < imageArray.length; i++) {
    labelArray[i] = imageArray[i].filename;
  }
}

var makeYAxis = function() {
  for (var i = 0; i < imageArray.length; i++) {
    yAxisArray[i] = imageArray[i].countClicks;
  }
}


function generateChartClick() {

  makeBarLabels();
  barDataClick.labels = labelArray;

  makeYAxis();
  barDataClick.datasets[0].data = yAxisArray;
  clickChart.setAttribute('style','visibility:visible');

  var canvas = document.getElementById("clickChart");
  var context = canvas.getContext("2d");
  context = new Chart(context).Bar(barDataClick, {responsive:false, maintainAspectRatio:false});

  canvas.setAttribute("style", "visibility:visible");
}

var barDataClick = {
	labels : [], //these are our image titles or this.name
	datasets : [
		{
			fillColor : "#ffffff",
			strokeColor : "#ffffff",
            scaleGridLineColor : "#ffffff",
            scaleFontColor: "#ffffff",
            barShowStroke : false,
			data : [] // clicks
		}
	]

}
