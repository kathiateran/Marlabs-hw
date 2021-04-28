//document.createElement()
document.body.onload = addElement;
function addElement () {
  
    // createElement
    const newDiv = document.createElement("div");// div element created
 
    const newContent = document.createTextNode("This text was created dynamically");
  
    newDiv.appendChild(newContent); //text gets appended to new Div

    const currentDiv = document.getElementById("div1"); //this adds to the DOM
    document.body.insertBefore(newDiv, currentDiv.nextSibling);
  }

//textContent
function getText() {
  var x = document.getElementById("myBtn").textContent;
  document.getElementById("demo").innerHTML = x;  
}

//append
let div3 = document.querySelector('#div3');
div3.append('This text was appended');


//prepend
var prepnd = document.querySelector('#prepnd');
var elmntsP = ['prepended 1', 'prepended 2'];
let nodes = elmntsP.map(elmntP => {
  let li = document.createElement('li');
  li.textContent = elmntP;
  return li;
});
prepnd.prepend(...nodes);

//replaceChild
var menu = document.getElementById('menu');//this wouldn't work with querySelector
  // create a new node
var listEl = document.createElement('li');
listEl.textContent = 'this item replaced a previous one';
  // replace the first list item
menu.replaceChild(listEl, menu.firstElementChild);


//removeChild
function firstItem() {
  var list = document.getElementById("firstChild");
  list.removeChild(list.childNodes[0]);
}

//cloneChild
function cloneItem() {
  var itm = document.getElementById("myList2").firstChild;
  var cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}

//getAttribute
function whatAtt() {
  var x = document.getElementsByTagName("H4")[0].getAttribute("class"); 
  document.getElementById("attDemo").innerHTML = x;
}

//setAttribute
var dis = document.querySelector("#disabled");
dis.setAttribute("disabled", "");

//removeAttribute
var rmv = document.getElementById("rmv").removeAttribute("style");

//classList
function addStyle() {
  document.getElementById("myDIV").classList.add("style12");
}

//mouse event
function isKeyPressed(event) {
  if (event.shiftKey) {
    alert("The SHIFT key was pressed!");
  } else {
    alert("The SHIFT key was NOT pressed!");
  }
}