// Select color input
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');

let w = document.getElementById('inputWidth').value;
let h = document.getElementById('inputHeight').value;
const btn = document.querySelector('#submit');

btn.addEventListener('click', makeGrid);

function makeGrid() {
  //reset table
  table.innerHTML = "";

  w = document.getElementById('inputWidth').value;
  h = document.getElementById('inputHeight').value;
  // Add new element <tbody> and <td>

  for(i=1; i<=h; i++) {
    const addNewTr = document.createElement('tr');
        for(j=1; j<=w; j++) {
            const addNewTd = document.createElement('td');
            addNewTr.appendChild(addNewTd);
        } 
    // tr-->table    
    table.appendChild(addNewTr);
  } 
}

//模拟点击一次
btn.click();

// Add event listener. get picked color.
table.addEventListener('click', function(event){
    let td = event.target;
    // 查看nodeName
    console.log('clicked' + event.target.nodeName);
    // 查看backgroundColor
    console.info("color=" + event.target.style.backgroundColor);

    if(td.style.backgroundColor != ''){
        td.style.backgroundColor = '';
    }else{
        td.style.backgroundColor = color.value;
    }   
});

