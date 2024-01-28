function consumeJson() { 
    fetch("./doc_response.json") 
        .then((res) => 
         res.json()
    ) 
    .then((data) => {
        const keys = Object.keys(data.data);
        createColumn(countColumn(keys.length), keys.length);
        createViewContent(data);
        createBackgroundColor();
    }); 
}

function countColumn(dataCount){
    if(dataCount % 2 === 0){
        return dataCount / 2;
    } else {
        return Math.ceil(dataCount / 2);
    }
}

function getBoxes(){
    return document.querySelectorAll(".box-content");
}

function getTableHeader(readerContent){
    let row = document.createElement("tr");
    readerContent.forEach(header => {
        let th = document.createElement("th");
        th.innerHTML = header;
        row.appendChild(th);
    })
    return row;
}

function getTableContent(readerContent){
    let row = document.createElement("tr");
    readerContent.forEach(header => {
        let td = document.createElement("td");
        td.innerHTML = header;
        row.appendChild(td);
    })
    return row;
}

function createColumn(colCount, itemCount){
    const container = document.querySelector(".container");
    for (let i = 0; i < colCount; i++) {
        let colm = document.createElement("div");
        colm.classList.add("colm");

        for(let j = 0; j < 2 && itemCount > 0; j++){
            let box  = document.createElement("div");
            box.classList.add("box-content");
            
            // add to main box
            colm.appendChild(box);
            itemCount--;
        }

        container.appendChild(colm);
    }
}

function createViewContent(data){
    let i = 0;
    let innerContent = data.data;
    for(let item in innerContent){
        console.log(item);
        // if(data[item].content){

            const name = item.value;
            const keys = Object.keys(innerContent[item].content);
            const values = Object.values(innerContent[item].content);
            const typeContent = item.type;
            const boxCount = getBoxes();



            console.log(name);
            console.log(keys);
            console.log(values);
            console.log(typeContent);
            console.log(boxCount);
    
            switch (typeContent){
                case "bar":
                    break;
                default:
                    let table = document.createElement("table");
                    table.appendChild(getTableHeader(keys));
                    table.appendChild(getTableContent(values));
                    boxCount[i].appendChild(table);
                    break;
            }
        // }
        i++;
    }
}


function createBackgroundColor(){
    const cont = document.querySelector(".container");
    let colorHolder = document.createElement("div")
    colorHolder.classList.add("color-holder");

    let inpCol = document.createElement("input");
    inpCol.type = "color";
    inpCol.id = "color-inp";
    inpCol.value = "#ebebeb";

    colorHolder.appendChild(inpCol);

    cont.appendChild(colorHolder);

    document.getElementById("color-inp").addEventListener('change', (event) => {
        document.querySelector(".color-holder").style.backgroundColor = event.target.value;
        document.querySelector(".container").style.backgroundColor = event.target.value;
    })
}
