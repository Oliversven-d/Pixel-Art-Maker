//make first variables for Canvas and sizePicker
var can = document.getElementById('pixelCanvas');
var si = document.getElementById("sizePicker");

//Build the Grid
function makeGrid() {
  can.innerHTML = ''; //remove children
    //variables that are needed for the grid
    const h = document.getElementById("inputHeight").value;
    const w = document.getElementById("inputWidth").value;
    
    //make row r 
    let r = 0; //start
    while (r < h) { //row loop
      r++;
      //Source: https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Loops_and_iteration
      console.log('Rows created'); //gives message in console
      let createR = document.getElementById("pixelCanvas").insertRow();
      //make columns c
      let c = 0;
      while (c < w) { // cell loop
        c++;
        console.log('Cells created'); //gives message in console
        createR.insertCell(); //insert cell
        //make color for grid (Source: https://knowledge.udacity.com/questions/372344)
        
        can.addEventListener("click", function (event) { //click for color (first color: #000000)
          var coVar = colorPicker.value; //color input var
          let element = event.target.nodeName;
          if (element === "TD") {
            console.log("Color picked"); //gives message in console
            event.target.style.backgroundColor = coVar;
            // Source: https://stackoverflow.com/questions/53743577/how-to-get-data-attribute-of-element-when-click-on-it-or-it-child
            //Source: https://stackoverflow.com/questions/50785974/apply-eventlistener-to-table-instead-of-each-cell-how
          }})}}}
          
          si.onsubmit = function(event){ //sizePicker event
            console.log("Pick the size:"); //gives message in console
            event.preventDefault(); //Default
            makeGrid();
          };
          

  