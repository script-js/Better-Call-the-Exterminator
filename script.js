var roomPicker = ["living","kitchen","family","bed1","bed2","bedbath"];
var rooms = {
  "living": {"room1":"kitchen","room2":"family","freindly":"Living Room"},
  "kitchen": {"room1":"living","room2":"family","freindly":"Kitchen"},
  "family": {"room1":"living","room2":"kitchen","freindly":"Family Room"},
  "bath": {"room1":"bed2","room2":"bedbath","freindly":"Bathroom"},
  "bed1": {"room1":"living","room2":"bed2","freindly":"Master Bedroom"},
  "bed2": {"room1":"bed1","room2":"bedbath","freindly":"Bedroom"},
  "bedbath": {"room1":"bed2","room2":"bath","freindly":"Ensuite Bathroom"}
}

var sourceR = roomPicker[Math.floor(Math.random() * roomPicker.length)];
var currentRoom = "";

function setRandCR() {
  var src = rooms[sourceR]
  var options = [sourceR,sourceR.room1,sourceR.room2]
  currentRoom = options[Math.floor(Math.random() * options.length)]
}
setRandCR()

function guess(elem) {
  if (!elem.src.includes(sourceR)) {
    popout("incorrect")
  } else {
    popout("correct")
  }
}

function menu(text) {
  if (!text) {
    popup.style.height = "2px"
    popup.style.width = "2px"
    popup.innerHTML = "";
    close.style.display = "none"
    setTimeout(function() {
      popupBack.style.display = "none";
      popupBack.style.justifyContent = "center"
    },400)
  } else {
    popupBack.style.justifyContent = "right"
    popupBack.style.display = "flex";
    setTimeout(function() {
      popup.style.height = "90%"
      popup.style.width = "90%"
      
    },50)
    setTimeout(function() {
      popup.innerHTML = text;
      close.style.display = "inline"
    },400)
  }
}

function popout(text) {
  if (!text) {
    popup.style.height = "2px"
    popup.style.width = "2px"
    popup.innerHTML = "";
    setTimeout(function() {
      popupBack.style.display = "none";
    },400)
  } else {
    popupBack.style.display = "flex";
    setTimeout(function() {
      popup.style.height = "90%"
      popup.style.width = "90%"
    },50)
    setTimeout(function() {
      popup.innerHTML = text;
    },400)
  }
}
