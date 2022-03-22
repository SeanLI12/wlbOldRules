var sportsViewer = document.getElementById("sports-viewer");
var distEvent;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  
  document.getElementById("myDropdown").classList.toggle("show");
}

function clickFrame() {
  
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("myDropdown").classList.remove("show");
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (event.target.matches('.menu-item')) {
      var itemID = event.target.id;
      var dropdownButton = document.getElementById('dropdown-button');
      dropdownButton.innerText = document.getElementById(itemID).innerText;

      const newLocation = './sports/' + event.target.id + '.html'

      sportsViewer.style.height = 0;
      sportsViewer.src = newLocation;
    }
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

}

function postMessageTo(data) {
  if (!distEvent) return;
  distEvent.source.postMessage(data, distEvent.origin);
}

function postMessageToSetHeight() {
  var offset = 50;
  postMessageTo({
    topic: 'setHeight',
    data: document.body.scrollHeight
  });
}

function postMessageToChangeContent() {
  postMessageTo({
    topic: 'changeContent',
    data: null,
  });
}

function postMessageToSetScrollValue(scrollValue) {
  postMessageTo({
    topic: 'setScrollValue',
    data: scrollValue
  });
}

function updateIFrameHeight(frame) {
  frame.style.height = frame.contentDocument.body.scrollHeight + 'px';
}

sportsViewer.scrolling = 'no';
sportsViewer.onload = function (e) {
  updateIFrameHeight(sportsViewer);
  postMessageToChangeContent();

  
  
    
    // Bubble events to parent
    sportsViewer.contentDocument.onclick= function(event) {
      document.getElementById("myDropdown").classList.remove("show");
    };
   
    
  

  if (sportsViewer.src.includes('/sports/football.html')) {
    var linkTable = sportsViewer.contentDocument.getElementById('linktable');
    linkTable.addEventListener('click', function (event) {
      if (event.target.matches('a')) {
        var anchorName = event.target.getAttribute('href').substring(1);
        var targetAnchorDom = sportsViewer.contentDocument.querySelector('a[name="' + anchorName + '"]');
        postMessageToSetScrollValue(targetAnchorDom.offsetTop + 8);
      }
    });
  }

  
  if(e.target.contentDocument.getElementsByClassName("tblrules").length>0){
    

    e.target.contentDocument.getElementsByClassName("tblrules")[0].parentElement.classList.toggle("tableContainer")



   


  }
  
};

window.onmessage = function(event) {
  if (event.data === 'initEvent') {
    distEvent = event;
  }
  if (event.data === 'getHeight') {
    // need calc iframe content height when change window size
    updateIFrameHeight(sportsViewer);
    postMessageToSetHeight();
  }
};



const childWindow = document.getElementById('sports-viewer').contentWindow;
window.addEventListener('message', message => {
    if (message.source !== childWindow) {
        return; // Skip message in this event listener
    }

    // ...
});