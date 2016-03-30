var imageOne = document.getElementById("one");
var imageTwo = document.getElementById("two");
var imageThree = document.getElementById("three");
var imageOneTag = document.getElementById("img1");
var imageTwoTag = document.getElementById("img2");
var imageThreeTag = document.getElementById("img3");
var captionOneTag = document.getElementById("figcap1");
var captionTwoTag = document.getElementById("figcap2");
var captionThreeTag = document.getElementById("figcap3");

// var showButton = document.getElementById("seeResults");

var imageArray = [];
var totalClicks = 0;
var processClick = true;

imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

// showButton.addEventListener("click", showResults);

// generates an object for each image
function addImages(filename, filepath, noSpaceName) {
    this.filename = filename;
    this.filepath = filepath;
    this.noSpaceName = noSpaceName;
    this.countShow = 0;
    this.countClicks = 0;
}

// imageArray
imageArray[0] = new addImages("Walnut Supply Bowl", "./images/products/box-walnut.jpg", "walnutBox");
imageArray[1] = new addImages("Walnut iPhone Bumper Case", "./images/products/bumpercase-walnut-front.jpg", "walnutBumperCase");
imageArray[2] = new addImages("Walnut Wall-Mounted Catch All", "./images/products/catchall-walnut.jpg", "walnutCatchAll");
imageArray[3] = new addImages("Walnut Desktop Stand", "./images/products/desktopstand-walnut-front.jpg", "walnutDesktopStand");
imageArray[4] = new addImages("Walnut and Black Metal iPhone Dock", "./images/products/dock-black-walnut.jpg", "walnutBlackDock");
imageArray[5] = new addImages("Walnut and Brass iPhone Dock", "./images/products/dock-brass-walnut.jpg", "walnutBrassDock");
imageArray[6] = new addImages("Walnut and Black Leather Wall Hook ", "./images/products/hook-walnut.jpg", "walnutHook");
imageArray[7] = new addImages("Walnut Keyboard Tray", "./images/products/keyboard-walnut-closed.jpg", "walnutKeyboardTray");
imageArray[8] = new addImages("Black Metal Keychain ", "./images/products/keychain-black.jpg", "blackKeychain");
imageArray[9] = new addImages("Brass Keychain", "./images/products/keychain-brass.jpg", "brassKeychain");
imageArray[10] = new addImages("Steel Keychain ", "./images/products/keychain-steel.jpg", "steelKeychain");
imageArray[11] = new addImages("Walnut Lamp", "./images/products/lamp-walnut-on.jpg", "walnutLamp");
imageArray[12] = new addImages("Walnut Laptop Charging Base", "./images/products/laptopholder-walnut-front.jpg", "walnutLaptopHolder");
imageArray[13] = new addImages("Walnut Laptop Stand", "./images/products/laptopstand-walnut-front.jpg", "walnutLaptopStand");
imageArray[14] = new addImages("Walnut and Black Leather iPhone Case", "./images/products/leathercase-walnut-open.jpg", "walnutLeatherPhoneCase");
imageArray[15] = new addImages("Walnut Wall-Mounted Mirror", "./images/products/mirror-walnut.jpg", "walnutMirror");
imageArray[16] = new addImages("Walnut and Black Leather Mousepad and Pen Tray", "./images/products/mousepad-walnut.jpg", "walnutMousepad");
imageArray[17] = new addImages("Walnut Pen Holder", "./images/products/penholder-walnut.jpg", "walnutPenHolder");
imageArray[18] = new addImages("Walnut Planter, Short", "./images/products/planter-short-walnut.jpg", "walnutPlanterShort");
imageArray[19] = new addImages("Walnut Planter, Tall", "./images/products/planter-tall-walnut.jpg", "walnutPlanterTall");
imageArray[20] = new addImages("Walnut Trackpad Tray", "./images/products/trackpad-walnut-closed.jpg", "walnutTrackpadTray");
imageArray[21] = new addImages("Black Leather and Metal Wallet ", "./images/products/wallet-black.jpg", "blackWallet");
imageArray[22] = new addImages("Black Leather and Brass Wallet ", "./images/products/wallet-brass.jpg", "brassWallet");
imageArray[23] = new addImages("Red Leather and Steel Wallet ", "./images/products/wallet-steel.jpg", "steelWallet");
imageArray[24] = new addImages("Walnut and Black Leather Watch, Round Face", "./images/products/watch-round-walnut.jpg", "walnutWatchRound");
imageArray[25] = new addImages("Walnut and Black Leather Watch, Square Face", "./images/products/watch-square-walnut.jpg", "walnutWatchSquare");

// randomly selects an index number from the imageArray
function randomImageIndex() {
  var result = Math.floor(Math.random() * (imageArray.length - 1));
  return result;
}

function imageClicked(event) {
    var targetId = event.target.getAttribute("id");
    console.warn("targetId: " + targetId);

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

    var targetImage;
    for ( imageIndex = 0; imageIndex < imageArray.length; imageIndex++) {
        if (imageArray[imageIndex].id = targetId) {
            targetImage = imageArray[imageIndex];
        }
    }

    targetImage.countClicks++;
    totalClicks++;
    console.log(targetId, targetId.countClicks);
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

// function showResults() {
//     console.log(totalClicks + " this is working, yes?");
// }

function createImageStructure(whichImageTag, whichCaptionTag) {
    var random = randomImageIndex();
    imageArray[random].countShow++;
    whichImageTag.setAttribute("src", imageArray[random].filepath);
    whichImageTag.setAttribute("id", imageArray[random].noSpaceName);
    whichImageTag.setAttribute("alt", imageArray[random].filename);
    whichCaptionTag.textContent = imageArray[random].filename;
}

function rotateImages() {
    createImageStructure(imageOneTag, captionOneTag);
    createImageStructure(imageTwoTag, captionTwoTag);
    createImageStructure(imageThreeTag, captionThreeTag);
}

rotateImages();
