let additem = document.getElementById('submit-btn');
let itemList = document.getElementById('list');
let filter = document.getElementById('filter');

//Submit Event
additem.addEventListener('click',addEvent);
function addEvent(e){
    let newItem = document.getElementById('new-item').value;
    if(newItem != "")
    {
        e.preventDefault();//normal submission to not happen
    
        //create new li element
        let li = document.createElement('li');
        li.className = 'item-list';
    
        //get input value
    
        document.getElementById('new-item').value = "";;
        li.appendChild(document.createTextNode(newItem));
    
        //delete btn
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'item-btn';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);

        console.log(li);
        itemList.appendChild(li);
    }
    else
    {
        alert("No Input");
    }
}

//Delete Event
itemList.addEventListener('click',removeItem);
function removeItem(e)
{
    if(confirm('Are You Sure?'))
    {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

//Filter/search event
filter.addEventListener('keyup',filterItems)
function filterItems(e)
{
    let text = e.target.value.toLowerCase();  //input from search
    
    let items = itemList.getElementsByTagName('li');
    
    //Conver to Array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'flex';
        }
        else
        {
            item.style.display = 'none';
        }
    });
}
