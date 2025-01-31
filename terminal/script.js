// KTX.dev - kitxchi copyright.
// type text for site
var data = [
    {
      AboutDevTypeText: "<span>about KTX project<br><br>the site was written by kitxchi - ktx.dev, if you want to know something about the site write on discord: ktx.dev<br><br>ktx © 2024-2025</span><br><br><br><span>do you want to proceed?<br>Y/N<br></span>"
    }
  ];
  
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) {
        enableUserInput(); // enable input
        return;
      }
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }
  
  function enableUserInput() {
    let userText = "";
  
    // keyboard
    document.addEventListener("keydown", function(event) {
      const validKeys = ["Y", "N"];
      const key = event.key.toUpperCase();
  
      if (validKeys.includes(key)) {
        userText += key;
        document.getElementById("AboutDevTypeText").innerHTML = data[0].AboutDevTypeText + userText;
  
        // decision
        if (key === "Y") {
          setTimeout(() => {
            window.location.href = "../old/index.html";
          }, 1000);
        } else if (key === "N") {
          setTimeout(() => {
            window.location.href = "https://kitxchi.github.io/";
          }, 1000);
        }
      }
    });
  }
  