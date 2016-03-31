var labelArray = [];    //array to store labels for chart
var yAxisArray = [];    //array to store Yaxis or clicks numbers for chart
var percentArray = [];  //array to store yaxis or percent click per show rate

//function for chart's labels
var makeBarLabels = function() {
  for (var i = 0; i < imageArray.length; i++) {
    labelArray[i] = imageArray[i].filename;
  }
}

//function for chart's y axis or number of clicks
var makeYAxis = function() {
  for (var i = 0; i < imageArray.length; i++) {
    yAxisArray[i] = imageArray[i].countClicks;
  }
}

// //adding separate
// var makePercentChart = function() {
//   for (var i = 0; i < imageArray.length; i++) {
//     var x = Math.floor((imageArray[i].countClicks/imageArray[i].countShow)*100);
//     percentArray.push(x);
//   }
// }

//function to show results
//moved generageChart function from function section
function generateChart() {

  // makePercentChart();
  // barDataPercent.datasets[0].data = percentArray;

  makeBarLabels();
  barData.labels = labelArray;
  // barDataPercent.labels = labelArray;

  makeYAxis();
  barData.datasets[0].data = yAxisArray;
  clickChart.setAttribute('style','visibility:visible');

  var canvas = document.getElementById("clickChart");
  var context = canvas.getContext("2d");
  context = new Chart(context).Bar(barData, {responsive:true});
  //clicksChartGlobal = new Chart(clickChart).Bar(barData);
  //clickChart = clicksChartGlobal;

  canvas.setAttribute("style", "visibility:visible");
  // for (i = 0; i < barData.labels.length; i++) {
  //     console.log(barData.labels[i]);
  // }
  // //chart variable for barDataPercent
  // var percentChart = document.getElementById("percentChart").getContext("2d");
  // percentChartGlobal = new Chart(percentChart).Bar(barDataPercent);
  // percentChart = percentChartGlobal;
}

var barData = {
	labels : [], //these are our image titles or this.name
	datasets : [
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : [] // clicks
		}
	]
}

// var barDataPercent = {
//   labels : [], //these are our image titles or this.name
//   datasets : [
//     {
//       fillColor : "rgba(73,188,170,0.4)",
//       strokeColor : "rgba(72,174,209,0.4)",
//       data : [] // clicks
//     }
//   ]
// }
