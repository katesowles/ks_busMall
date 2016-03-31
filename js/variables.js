// finds all the elements into which we'll be pushing content later on
var imageOne = document.getElementById("one");
var imageTwo = document.getElementById("two");
var imageThree = document.getElementById("three");
var imageOneTag = document.getElementById("img1");
var imageTwoTag = document.getElementById("img2");
var imageThreeTag = document.getElementById("img3");
var captionOneTag = document.getElementById("figcap1");
var captionTwoTag = document.getElementById("figcap2");
var captionThreeTag = document.getElementById("figcap3");
var voteButton = document.getElementById("goVote");
var voteSection = document.getElementById("vote");
var resultsButton = document.getElementById("seeResults");
var resultSection = document.getElementById("results");
var moreButton = document.getElementById("voteMore");
var voteSection2 = document.getElementById("moreVoting");

var chartClick = document.getElementById("clickChart");
var chartPercent = document.getElementById("percentChart");

// sets global variables
var totalClicks = 0;
var processClick = true;
var roundTwo = false;

var clicksChartGlobal;
var percentChartGlobal;

var x = true;
