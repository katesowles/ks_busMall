var testArray = [];
var labelArrayPercent = [];    //array to store labels for chart
var yAxisArrayPercent = [];    //array to store Yaxis or clicks numbers for chart
var percentArray = [];  //array to store yaxis or percent click per show rate

//function for chart's labels
var makeBarLabelsPercent = function() {
  for (var i = 0; i < imageArray.length; i++) {
    labelArrayPercent[i] = imageArray[i].filename;
  }
}

//function for chart's y axis or number of clicks
var makeYAxisPercent = function() {
  for (var i = 0; i < imageArray.length; i++) {
    //   testArray[i];
    var temp = ((imageArray[i].countClicks / imageArray[i].countShow) * 100);
    if (isNaN(temp)) {
        temp = 0;
    }
      yAxisArrayPercent.push(temp);
  }
  console.log(yAxisArrayPercent);
}

function generateChartPercent() {

  makeBarLabelsPercent();
  // TODO
  barDataPercent.labels = labelArrayPercent;

  makeYAxisPercent();
  barDataPercent.datasets[0].data = yAxisArrayPercent;
  chartPercent.setAttribute('style','visibility:visible');

  var canvas = document.getElementById("percentChart");
  var context = canvas.getContext("2d");
  context = new Chart(context).Bar(barDataPercent, {responsive:false});

  canvas.setAttribute("style", "visibility:visible");
}

var barDataPercent = {
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
