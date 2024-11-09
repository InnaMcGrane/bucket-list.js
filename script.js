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
  constructor() {}

  _getTemplate() {
    return `<a class="logo" href="/">Projects</a>
          <div class="header__btns">
            <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="btn"><i class="fa-solid fa-bars"></i></button>
          </div>
        </header>`;
  }

  get element() {
    return this._element;
  }
}

class Filter {
  constructor() {}

  _getTemplate() {
    return `<div class="filter"></div>`;
  }

  get element() {
    return this._element;
  }
}

class FilterItem {
  constructor(item) {
    this_item = item;
  }
  _getTemplate() {
    return `<span class="filter-item filter-item--active">All</span>`
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
