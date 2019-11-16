
var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeall');
removeAllButton.addEventListener('click', removeAll);



function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item)

    if (item === '') {
        return false;
    } else {
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        var label = document.createElement('label')
        
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);

        li.appendChild(label);

        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual'
        },200)

        input.value = '';

        
    }
}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
            
        }
    }
    
    
}

function removeAll() {
    let l = ul.children;
    let n = l.length;
    for (let index = 0; index < n; index++) {
        ul.removeChild(l[0]);
    }

    
}