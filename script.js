/* 

4 компонента:

- bucketList
- filter
- filterItem
- task

*/

function createElement(html) {
    const element = document.createElement("div");
    element.insertAdjacentHTML("beforeend",html);
    return element.firstElementChild;

}

class BucketList {
  constructor(tasks, Filter, FilterItem, Task) {
    this._Filter = Filter;
    this._FilterItem = FilterItem;
    this._Task = Task;
    this._tasks = tasks;
  }

  _getTemplate() {
    return `<div class="bucket-list">
       <header class="header">
          <a class="logo" href="/">Projects</a>
          <div class="header__btns">
            <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="btn"><i class="fa-solid fa-bars"></i></button>
          </div>
        </header>
       <main class="bucket-list__main">
        <div class="bucket-list__content"></div>
       </main>
    </div>`;
  }

  get element() {
    return this._element;
  }
}

class Filter {
  constructor(FilterItem) {
    this._FilterItem = FilterItem;
  }

  _getTemplate() {
    return `<div class="filter"></div>`;
  }

  get element() {
    return this._element;
  }
}

class FilterItem {
  constructor({text, active}) {
    this._text = text;
    this._active = active;
  }

  _getTemplate() {
    return `<span class="filter-item ${this._active === true ? "filter-item--active" : ""}">${this._text}</span>`
  }

  get element() {
    return this._element;
  }
}

class Task {
    constructor({title, desc}){
        this._title = title
        this._desc = desc
    }

    _getTemplate(){
        return `<article class="task">
              <h3 class="task__title">${this._title}</h3>
              <p class="task__desc">${this._desc}</p>
            </article>`;

    }
    
    get element() {
        return this._element
    }
}


const root = document.querySelector('.root')
root.insertAdjacentElement("beforeend")
