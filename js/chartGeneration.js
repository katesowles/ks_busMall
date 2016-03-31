var labelArray = [];
var yAxisArray = [];
var percentArray = [];

var makeBarLabels = function() {
  for (var i = 0; i < catArray.length; i++) {
    labelArray[i] = catArray[i].name;
  }
}

var makeYAxis = function() {
  for (var i = 0; i < catArray.length; i++) {
    yAxisArray[i] = catArray[i].nClicks;
  }
}

var makePercentChart = function() {
  for (var i = 0; i < catArray.length; i++) {
    var x = Math.floor((catArray[i].nClicks/catArray[i].nShow)*100);
    percentArray.push(x);
  }
}

function showResults() {

  makePercentChart();
  barDataPercent.datasets[0].data = percentArray;

  makeBarLabels();
  barData.labels = labelArray;
  barDataPercent.labels = labelArray;
  makeYAxis();
  barData.datasets[0].data = yAxisArray;

  displayButton.setAttribute('style','visibility:hidden');
  var clicksChart = document.getElementById("clicksChart").getContext("2d");
  clicksChartGlobal = new Chart(clicksChart).Bar(barData);
  clicksChart = clicksChartGlobal;

  var percentChart = document.getElementById("percentChart").getContext("2d");
  percentChartGlobal = new Chart(percentChart).Bar(barDataPercent);
  percentChart = percentChartGlobal;

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

var barDataPercent = {
  labels : [], //these are our image titles or this.name
  datasets : [
    {
      fillColor : "rgba(73,188,170,0.4)",
      strokeColor : "rgba(72,174,209,0.4)",
      data : [] // clicks
    }
  ]
}



//
function imageClicked() {
  if (processClick) {
    totalClicks++;

    //for each addition image add in code to call the image here:
    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);

    //+++++++++++++
    //added in logic here
    if (totalClicks >= clicks && x && totalClicks < 24) {
      console.log(totalClicks);
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      voteMoreButton.setAttribute('style','visibility:visible');
      processClick = false;
      //+++++++++++++++++++++++++++
      //added in else statement here
    } else if (totalClicks === 24) {
      x = false;
      voteMoreButton.setAttribute('style', 'visibility:hidden');
      console.log(totalClicks);
      processClick = false;
      // voteMoreButton <-- remove event listener here
      voteMoreButton.removeEventListener('click', eightMore);
      resetButton.setAttribute('style','visibility:visible');
      showResults();
    }
  }
}

/*
===========
constructor
===========
*/


//constructor function to make new image objects
function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
}


/*
random number generation to go through amount of images within
constructors
*/
function randomImageIndex() {
  var result = Math.floor(Math.random() * (catArray.length));
  return result;
}

//function to display random image from list
function showRandomImg(image) {
  // var clickCount = newImage.getAttribute("src");


  //replacing image function
  var n = randomImageIndex();
  image.setAttribute("src", catArray[n].path);
  catArray[n].nShow++;
}


//function to implement vote more button disappearing after clicking and allow for an additional 8 clicks
function eightMore() {
  clicks = 24;
  processClick = true;
  voteMoreButton.setAttribute('style','visibility:hidden');
  displayButton.setAttribute('style','visibility:hidden');
  displayButton.removeEventListener('click', showResults);
}

function newVoteRound() {

  //destroys charts
  clicksChartGlobal.destroy();
  percentChartGlobal.destroy();

  //resets all global variables
  totalClicks = 0;
  console.log(totalClicks);
  processClick = true;
  clicks = 16;
  x = true;
  console.log(clicks);
  clicksChartGlobal = 0;
  percentChartGlobal = 0;

  //resets all image object's counters
  for (var i = 0; i < catArray.length; i++) {
    catArray[i].nClicks = 0;
    catArray[i].nShow = 0;
  }

  //hides reset button
  resetButton.setAttribute('style','visibility:hidden');

  //repopulate image spaces
  showRandomImg(imageOne);
  showRandomImg(imageTwo);
  showRandomImg(imageThree);

  //rest chart data objects
  barData.labels = [];
  barDataPercent.labels = [];

  //add back in eventListeners
  displayButton.addEventListener('click', showResults);
  voteMoreButton.addEventListener('click', eightMore);
}

/*
===============
event listeners
===============
*/

/*
addin eventListener per imageNUMBER variables set at the top of the js file
*/
imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);

//adding eventListener for vote more button
voteMoreButton.addEventListener("click", eightMore);

resetButton.addEventListener("click", newVoteRound);
