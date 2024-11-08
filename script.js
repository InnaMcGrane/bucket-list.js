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
    constructor () {

    }

    _getTemplate() {
        return `<a class="logo" href="/">Projects</a>
          <div class="header__btns">
            <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="btn"><i class="fa-solid fa-bars"></i></button>
          </div>
        </header>`;

    }

}

class Filter {
    constructor() {
        

    }

    _getTemplate(){
        return `  <div class="filter"></div>`;

    }
}

class FilterItem{
    constructor(item) {
        this_item = item 

    }
    _getTemplate(){
        return `<span class="filter-item filter-item--active">All</span>
            <span class="filter-item">Home</span>
            <span class="filter-item">Sport</span>`;
    }
}

class Task {
    constructor(title ,desc){
        this_title = title
        this_desc = desc

    }
    _getTemplate(){
        return ` <div class="bucket-list__content">
            <article class="task">
              <h3 class="task__title">Home</h3>
              <p class="task__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, pariatur</p>
            </article>
            <article class="task">
              <h3 class="task__title">Home</h3>
              <p class="task__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, pariatur</p>
            </article>
            <article class="task">
              <h3 class="task__title">Home</h3>
              <p class="task__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, pariatur</p>
            </article>
          </div>`;

    }
}
