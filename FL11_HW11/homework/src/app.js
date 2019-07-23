let rootNode = document.getElementById('root');

const header = document.createElement('h1');
header.textContent = 'TODO Cat List';
header.style.color = '#42B5FE';

const inputWrap = document.createElement('div');
inputWrap.classList.add('inputWrap');

const inputElement = document.createElement('input');
inputElement.classList.add('inputClass');
inputElement.placeholder = 'Add new action';
inputElement.type = 'text';

const iconAdd = document.createElement('img');
iconAdd.classList.add('iconAdd');
iconAdd.src = 'https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-4/24/5068-512.png';

const line = document.createElement('div');
line.classList.add('line');

let notesWrap = document.createElement('div');
let notesAttribute = document.createAttribute('id');
notesAttribute.value = 'columns';
notesWrap.setAttributeNode(notesAttribute);

rootNode.appendChild(header);
rootNode.appendChild(inputWrap);
rootNode.appendChild(line);
inputWrap.appendChild(inputElement);
inputWrap.appendChild(iconAdd);
rootNode.appendChild(notesWrap);

let maxNotes = 10;
let counter = 0;

function createNote() {

  if (inputElement.value.length === 0 || counter >= maxNotes) {
    if (counter >= maxNotes) {
      let notification = document.createElement('p');
      notification.classList.add('notification');
      notification.textContent = 'Maximum item per list are created';
      notification.style.fontSize = '20px';
      notification.style.color = 'black';
      header.appendChild(notification);

    }

  } else {

    const wrap = document.createElement('div');
    let wrapAttribute = document.createAttribute('draggable');
    wrapAttribute.value = 'true';
    wrap.setAttributeNode(wrapAttribute);

    wrap.classList.add('column');

    const rowWrap = document.createElement('div');
    rowWrap.classList.add('rowWrapClass');

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const attributeId = document.createAttribute('id');
    attributeId.value = valueId();
    checkBox.setAttributeNode(attributeId);
    const attributeName = document.createAttribute('name');
    attributeName.value = 'check';
    checkBox.setAttributeNode(attributeName);

    let note = document.createElement('label');
    let noteAttribute = document.createAttribute('for');
    noteAttribute.value = valueFor();
    note.setAttributeNode(noteAttribute);
    note.textContent = inputElement.value;

    const iconPen = document.createElement('img');
    iconPen.src = 'https://cdn1.iconfinder.com/data/icons/editing/60/cell-2-0-480.png';
    iconPen.width = 20;
    iconPen.classList.add('iconPen');

    const iconBin = document.createElement('img');
    iconBin.src = 'https://cdn3.iconfinder.com/data/icons/line/36/trash_can-512.png';
    iconBin.width = 20;
    iconBin.classList.add('iconBin');

    notesWrap.appendChild(wrap);
    wrap.appendChild(rowWrap);
    rowWrap.appendChild(checkBox);
    rowWrap.appendChild(note);
    rowWrap.appendChild(iconPen);
    wrap.appendChild(iconBin);
    counter = counter + 1;


    this.removeNote = function () {
      wrap.parentNode.removeChild(wrap);
    };


    iconBin.addEventListener('click', this.removeNote);

    this.editNote = function () {
      rowWrap.style.display = 'none';
      iconBin.style.display = 'none';
      let inputEdit = document.createElement('input');

      const iconSave = document.createElement('img');
      iconSave.src =
          'https://cdn2.iconfinder.com/data/icons/apple-classic/100/Apple_classic_10Icon_5px_grid-04-512.png';
      iconSave.width = 20;
      iconSave.classList.add('iconSave');
      wrap.style.justifyContent = 'start';
      wrap.appendChild(inputEdit);
      wrap.appendChild(iconSave);
      console.log(wrap);

      function saveChanges() {
        note.textContent = inputEdit.value;
        rowWrap.style.display = 'flex';
        wrap.style.justifyContent = 'space-between';
        iconBin.style.display = 'block';
        iconSave.style.display = 'none';
        inputEdit.style.display = 'none';
        wrap.style.justifyContent = 'space-between';
      }

      iconSave.addEventListener('click', saveChanges)
    };

    iconPen.addEventListener('click', this.editNote);

    let dragSrcEl = null;

    this.handleDragStart = function(e) {
      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.outerHTML);

      this.classList.add('dragElem');
    };
    this.handleDragOver = function (e) {

      if (e.preventDefault) {
        e.preventDefault();
      }
      this.classList.add('over');

      e.dataTransfer.dropEffect = 'move';

      return false;
    };

    this.handleDragLeave = function() {
      this.classList.remove('over');
    };

    this.handleDrop = function(e) {

      if (e.stopPropagation) {
        e.stopPropagation();
      }

      if (dragSrcEl !== this) {

        this.parentNode.removeChild(dragSrcEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin',dropHTML);
        let dropElem = this.previousSibling;
        this.addDnDHandlers(dropElem);
      }
      this.classList.remove('over');
      return false;
    };

    this.handleDragEnd = function() {
      this.classList.remove('over');
    };

    this.addDnDHandlers = function(elem) {
      elem.addEventListener('dragstart', this.handleDragStart, false);
      elem.addEventListener('dragover', this.handleDragOver, false);
      elem.addEventListener('dragleave', this.handleDragLeave, false);
      elem.addEventListener('drop', this.handleDrop, false);
      elem.addEventListener('dragend', this.handleDragEnd, false)
    };

    let cols = document.querySelectorAll('#columns .column');
    [].forEach.call(cols, this.addDnDHandlers);
  }
}

iconAdd.addEventListener('click', createNote);

let numb1 = 0;

function valueId() {
  numb1 = numb1 + 1;
  return numb1;
}

let numb2 = 0;

function valueFor() {
  numb2 = numb2 + 1;
  return numb2;
}
