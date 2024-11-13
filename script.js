/* 

4 компонента:

- bucketList
- filter
- filterItem
- task

*/

function createElement(html) {
  const element = document.createElement("div");
  element.insertAdjacentHTML("beforeend", html);
  return element.firstElementChild;
}

class BucketList {
  constructor(tasks, Filter, FilterItem, Task) {
    this._tasks = tasks;
    this._Filter = Filter;
    this._FilterItem = FilterItem;
    this._Task = Task;
    this._init();
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
       <div class="bucket-list__filter"></div>
        <div class="bucket-list__content"></div>
       </main>
    </div>`;
  }


  _generateTasks(){
   return this._tasks.map((data) => new this._Task(data).element)
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render();
  }

  _render() {
    this._element.querySelector(".bucket-list__filter").append(new this._Filter(this._FilterItem).element);
    this._element.querySelector(".bucket-list__content").append(...this._generateTasks());
  }

  get element() {
    return this._element;
  }
}

class Filter {
  constructor(FilterItem) {
    this._FilterItem = FilterItem;
    this._init();
  }

  _getTemplate() {
    return `<div class="filter"></div>`;
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render()
  }

  _generateItems() {
    return [new this._FilterItem({ text: "All", active: true }).element, new this._FilterItem({ text: "Home", active: false }).element, new this._FilterItem({ text: "Sport", active: false }).element];
  }

  _render() {
    this._element.append(...this._generateItems());
  }

  get element() {
    return this._element;
  }
}

class FilterItem {
  constructor({ text, active }) {
    this._text = text;
    this._active = active;
    this._init()
  }

  _getTemplate() {
    return `<span class="filter-item ${this._active === true ? "filter-item--active" : ""}">${this._text}</span>`;
  }

  _init(){
    this._element = createElement(this._getTemplate());
  }

  get element() {
    return this._element;
  }
}

class Task {
  constructor({ title, desc }) {
    this._title = title;
    this._desc = desc;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate())
  }

  _getTemplate() {
    return `<article class="task">
              <h3 class="task__title">${this._title}</h3>
              <p class="task__desc">${this._desc}</p>
            </article>`;
  }

  get element() {
    return this._element;
  }
}

const tasks = [
  {
    id: 241,
    title: "home title",
    desc: "home desc",
  },
  {
    id: 234,
    title: "sport title",
    desc: "sport desc",
  },
];

const root = document.querySelector(".root");
root.insertAdjacentElement("beforeend", new BucketList(tasks, Filter, FilterItem, Task).element);
