////////////////////////////////////////////////////////////////////////////////

// randomly selects an index number from the imageArray
function randomImageIndex() {
  var result = Math.floor(Math.random() * (imageArray.length - 1));
  return result;
}

////////////////////////////////////////////////////////////////////////////////

// checks to see which imageArray item matches the id for the image just clicked
imageOne.onclick = function() {
  var idValue = imageOne.getAttribute("id");
  for (var i = 0; i < imageArray.length; i++) {
    if (idValue == imageArray[i].noSpaceName) {
      imageArray[i].countClicks++;
    }
  }
}

imageTwo.onclick = function() {
  var idValue = imageTwo.getAttribute("id");
  for (var i = 0; i < imageArray.length; i++) {
    if (idValue == imageArray[i].noSpaceName) {
      imageArray[i].countClicks++;
      console.log(imageArray[i].noSpaceName + " #$% " + imageArray[i].countClicks);
    }
  }
}

imageThree.onclick = function() {
  var idValue = imageThree.getAttribute("id");
  for (var i = 0; i < imageArray.length; i++) {
    if (idValue == imageArray[i].noSpaceName) {
      imageArray[i].countClicks++;
      console.log(imageArray[i].noSpaceName + " #$% " + imageArray[i].countClicks);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

// this function creates the structure for hte new images when they're rotated
function createImageStructure(whichImageTag, whichCaptionTag) {
    var random = randomImageIndex();
    imageArray[random].countShow++;
    whichImageTag.setAttribute("src", imageArray[random].filepath);
    whichImageTag.setAttribute("id", imageArray[random].noSpaceName);
    whichImageTag.setAttribute("alt", imageArray[random].filename);
    whichCaptionTag.textContent = imageArray[random].filename;
}

////////////////////////////////////////////////////////////////////////////////

// this function rotates the images once the previous vote is cast
function rotateImages() {
    createImageStructure(imageOneTag, captionOneTag);
    createImageStructure(imageTwoTag, captionTwoTag);
    createImageStructure(imageThreeTag, captionThreeTag);
}

////////////////////////////////////////////////////////////////////////////////

// TODO i think this is where the trouble is coming from...

function imageClicked(event) {
    var targetId = event.target.getAttribute("id");
    for ( imageIndex = 0; imageIndex < imageArray.length; imageIndex++) {
        if (imageArray[imageIndex].noSpaceName == targetId) {
            imageArray[imageIndex].countClicks++;
        }
    }
    totalClicks++;
    // console.log(targetId, imageArray[imageIndex].countClicks);
    if (processClick) {
        rotateImages();
        if (totalClicks >= 16) {
            youDidIt.setAttribute("style", "visibility:visible");
            seeResults.setAttribute("style", "visibility:visible");
            voteMore.setAttribute("style", "visibility:visible");
            imageOne.setAttribute("style", "display:none");
            imageTwo.setAttribute("style", "display:none");
            imageThree.setAttribute("style", "display:none");
            processClick = false;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////

//event listeners
imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);
// resultsButton.addEventListener("click", );
// moreButton.addEventListener("click", );

////////////////////////////////////////////////////////////////////////////////

// calling our functions
rotateImages();
