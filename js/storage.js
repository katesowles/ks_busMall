function getLocalStorage(key, defaultValue) {
    var value = localStorage.setItem[key];
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

function resetToDefaultValues() {
    // localStorage.clear();
}




//
// var countClickToSave = elementById("");
// var countShowToSave = elementById("");
