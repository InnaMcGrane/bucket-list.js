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
     _state = {
      curruntFilterCategory: "All"
     }
  
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

  _setStateCurrentFilterCategory(newCurrentFilterCategory){
    this._state.curruntFilterCategory = newCurrentFilterCategory;
  }

  _setStateCurrentFilterCategoryHandler(newCurrentFilterCategory){
  this._setStateCurrentFilterCategory(newCurrentFilterCategory);
  this._render()
  }

  _getCategories() {
    const arr = this._tasks.reduce(
      (acc, el) => {
        return [...acc, el.category];
      },
      ["All"]
    );

    return Array.from(new Set(arr));
  }

  _generateTasks() {
    if (this._state.curruntFilterCategory === "All" ) {
      return this._tasks.map((data) => new this._Task(data).element);
    }
    
    return this._tasks.filter((task) => task.category === this._state.curruntFilterCategory).map((data) => new this._Task(data).element) 
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render();
  }

  _render() {
    this._element.querySelector(".bucket-list__filter").textContent = "";
    this._element.querySelector(".bucket-list__filter").append(new this._Filter(this._FilterItem, this._getCategories(), this._setStateCurrentFilterCategoryHandler.bind(this), this._state.curruntFilterCategory).element)
    this._element.querySelector(".bucket-list__content").textContent = "";
    this._element.querySelector(".bucket-list__content").append(...this._generateTasks());
  }

  get element() {
    return this._element;
  }
}

class Filter {
  constructor(FilterItem, categories, handler, currentCategory) {
    this._FilterItem = FilterItem;
    this._categories = categories;
    this._handler = handler;
    this._currentCategory = currentCategory;
    this._init();
  }

  _getTemplate() {
    return `<div class="filter"></div>`;
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render();
  }

  _generateItems() {
    return this._categories.map((text) => {
      return new this._FilterItem({ text, active: text === this._currentCategory ? true : false }, this._handler).element;
    });
  }

  _render() {
    this._element.append(...this._generateItems());
  }

  get element() {
    return this._element;
  }
}

class FilterItem {
  constructor({ text, active }, handler) {
    this._text = text;
    this._active = active;
    this._handler = handler;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._addListeners()
  }

  _addListeners() {
    this._element.addEventListener("click", () => {
      this._handler(this._text)
    })
  }

  _getTemplate() {
    return `<span class="filter-item ${this._active === true ? "filter-item--active" : ""}">${this._text}</span>`;
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
    this._element = createElement(this._getTemplate());
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
    category: "home",
  },
  {
    id: 234,
    title: "sport title",
    desc: "sport desc",
    category: "sport",
  },
  {
    id: 54,
    title: "sport title2",
    desc: "sport desc2",
    category: "sport",
  },
  {
    id: 2352,
    title: "game title",
    desc: "game desc",
    category: "game",
  },
  {
    id: 56,
    title: "happy title",
    desc: "happy desc",
    category: "happy",
  },
];

const root = document.querySelector(".root");
root.insertAdjacentElement("beforeend", new BucketList(tasks, Filter, FilterItem, Task).element);
