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
getRandCR()
