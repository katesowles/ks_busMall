function getLocalStorage(key, defaultValue) {
    var value = localStorage[key];
    if (value != null) {
        return value;
    }
    else {
        return defaultValue;
    }
}

function loadImageArray() {
    var imageArrayString = localStorage["imageArray"];
    var storedImageArray;
    if (imageArrayString != null) {
        storedImageArray = JSON.parse(localStorage["imageArray"]);
        imageArray = storedImageArray;
    }
}

function elementById(id) {
    return document.getElementById(id);
}

function elementByTag(tagname) {
    return document.getElementsByTagName(tagname);
}


function resetToDefaultValues() {
    totalClicks = getLocalStorage("totalClicks", 0);
    roundTwo = getLocalStorage("roundTwo", false);
    loadImageArray();
}

resetToDefaultValues();


//
// var countClickToSave = elementById("");
// var countShowToSave = elementById("");
