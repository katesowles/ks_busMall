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
      yAxisArrayPercent[i] = (imageArray[i].countClicks / imageArray[i].countShow);
  }
}

function generateChartPercent() {

  makeBarLabelsPercent();
  barDataPercent.labels = labelArrayPercent;

  makeYAxisPercent();
  barDataPercent.datasets[0].data = yAxisArrayPercent;
  chartPercent.setAttribute('style','visibility:visible');

  var canvas = document.getElementById("percentChart");
  var context = canvas.getContext("2d");
  context = new Chart(context).Bar(barDataPercent, {responsive:true});

  canvas.setAttribute("style", "visibility:visible");
}

var barDataPercent = {
  labels : [], //these are our image titles or this.name
  datasets : [
    {
        fillColor : "rgba(255,255,255,0.8)",
        strokeColor : "rgba(255,255,255,0.8)",
        scaleGridLineColor : "rgba(255,255,255,.8)",
        data : [] // clicks
    }
  ]
}
