////////////////////////////////////////////////////////////////////////////////

// STEP ONE : shows voting section when visitor clicks get voting button
function showVoting() {
    voteSection.setAttribute("style", "display:block");
}

////////////////////////////////////////////////////////////////////////////////

// STEP TWO : determines a random imageArray ite when called
function randomImageIndex() {
    var result = Math.floor(Math.random() * (imageArray.length - 1));
    return result;
}

////////////////////////////////////////////////////////////////////////////////

// STEP THREE : plugs in values for the three image areas to the createImageStructure function
function rotateImages() {
    createImageStructure(imageOneTag, captionOneTag);
    createImageStructure(imageTwoTag, captionTwoTag);
    createImageStructure(imageThreeTag, captionThreeTag);
}

////////////////////////////////////////////////////////////////////////////////

// STEP FOUR : takes the inputs from rotateImages and populates the three images
function createImageStructure(whichImageTag, whichCaptionTag) {
    var random = randomImageIndex();
    imageArray[random].countShow++;
    whichImageTag.setAttribute("src", imageArray[random].filepath);
    whichImageTag.setAttribute("id", imageArray[random].noSpaceName);
    whichImageTag.setAttribute("alt", imageArray[random].filename);
    whichCaptionTag.textContent = imageArray[random].filename;
}

////////////////////////////////////////////////////////////////////////////////

// STEP FIVE : track the vote based on click, iterate through 16 cycles, at which point hide the voting and show youDidIt + buttons
function imageClicked(whichImage) {
    totalClicks++;
    var targetId = whichImage.target.getAttribute("id");
    for (imageIndex = 0; imageIndex < imageArray.length; imageIndex++) {
        if (imageArray[imageIndex].noSpaceName == targetId) {
            imageArray[imageIndex].countClicks++;
        }
    }
    localStorage.setItem("totalClicks", totalClicks);
    localStorage.setItem("imageArray", JSON.stringify(imageArray));

    // console.log(targetId, imageArray[imageIndex].countClicks);
    var maxClicks = 16;
    if (roundTwo) {
        maxClicks = 8;
    }
// alert("totalClicks " + totalClicks + " // roundTwo " + roundTwo + " // maxClicks " + maxClicks);

    if (totalClicks == maxClicks && roundTwo == false) {
        youDidIt.setAttribute("style", "display:block");
        seeResults.setAttribute("style", "display:inline-block");
        voteMore.setAttribute("style", "display:inline-block");
        imageOne.setAttribute("style", "display:none");
        imageTwo.setAttribute("style", "display:none");
        imageThree.setAttribute("style", "display:none");
        totalClicks = 0;
        localStorage.setItem("totalClicks", totalClicks);
        roundTwo = true;
        localStorage.setItem("roundTwo", roundTwo);
        return;
    }
    else if (totalClicks == maxClicks && roundTwo == true) {
        showResults();
    }
    else if (totalClicks < maxClicks) {
        rotateImages();
    }
    else {
        alert("FLAG");
        showResults();
    }
}

////////////////////////////////////////////////////////////////////////////////

// STEP SIX, OPTION ONE : user wants to get results for 16 votes and refresh button
function showResults() {
    voteSection.setAttribute("style", "display:none");
    resultSection.setAttribute("style", "display:block;");
    seeResults.setAttribute("style", "display:none");
    voteMore.setAttribute("style", "display:none");
    generateChartClick();
    generateChartPercent();
}

////////////////////////////////////////////////////////////////////////////////

// STEP SIX, OPTION TWO : user wants to vote 8 more times
function voteAgain() {
    seeResults.setAttribute("style", "display:none");
    voteMore.setAttribute("style", "display:none");
    youDidIt.setAttribute("style", "display:none");
    imageOne.setAttribute("style", "display:inline-block");
    imageTwo.setAttribute("style", "display:inline-block");
    imageThree.setAttribute("style", "display:inline-block");
    rotateImages();
}

////////////////////////////////////////////////////////////////////////////////

// STEP SEVEN : user wants to play again, reset the display, the totalClicks, the roundTwo, the countClicks, and the countShow

// TODO figure out why the countClicks and the countShow aren't resetting.

function clearTotals() {
    seeResults.setAttribute("style", "display:none");
    voteMore.setAttribute("style", "display:none");
    youDidIt.setAttribute("style", "display:none");
    imageOne.setAttribute("style", "display:none");
    imageTwo.setAttribute("style", "display:none");
    imageThree.setAttribute("style", "display:none");
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].countClicks = 0;
        imageArray[i].countShow = 0;
    }
    localStorage.setItem("imageArray", JSON.stringify(imageArray))

}

////////////////////////////////////////////////////////////////////////////////

// EVENT LISTENERS
voteButton.addEventListener("click", showVoting);       // when get voting button is pressed, unhide voting section
imageOne.addEventListener("click", imageClicked);       // when image one spot is clicked, trigger imageClicked function
imageTwo.addEventListener("click", imageClicked);       // when image two spot is clicked, trigger imageClicked function
imageThree.addEventListener("click", imageClicked);     // when image three spot is clicked, trigger imageClicked function
resultsButton.addEventListener("click", showResults);   // when show results button is pressed, unhide results section
moreButton.addEventListener("click", voteAgain);        // when keep voting button is pressed, go back to voting
resetButton.addEventListener("click", clearTotals);     // when resetting votes

////////////////////////////////////////////////////////////////////////////////

// calling our randomize function on page load so that objects are already loaded
rotateImages();
