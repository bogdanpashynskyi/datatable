import Component from '../component.js';

export default class Table extends Component {
    constructor({ element, data , columnConfig }) {
        super({ element }); 
        this._data = data;
        this.config = columnConfig;

        this._render();
        
        this.on('click', 'header', (event) => {
          const headerType = event.target.dataset.sort;

          console.log(event.target.dataset.isSortable)
          if(event.target.dataset.isSortable) {
            this._sort(this._data, headerType);
            this._render();
          } 

          return;
        })
    }

    _sort(data, orderBy) {
      const orderByText = ['name'];

      if(orderByText.includes(orderBy)){
        data.sort((a, b) => {
          return a[orderBy].toLowerCase() > b[orderBy].toLowerCase() ? 1 : -1;
        })
      } else {
        data.sort((a, b) => {
          return a[orderBy] - b[orderBy];
        })
      }

    }

    _render() {
        if (this._data == undefined) {
            return;
        }

        this._element.innerHTML = `
        <h2> Hello Table </h2>
        <table>
            <tr>
                ${Object.entries(this.config).map(typeOfSort => {
                  console.log(typeOfSort)
                    return `
                        <th 

                        data-element="header"
                        data-sort="${typeOfSort[0]}"
                        ${typeOfSort[1].isSortable ? `data-is-sortable="${typeOfSort[1].isSortable}"` : ''}>
                        ${typeOfSort[1].title}
                        </th>
                    `
                }).join('')}
            </tr>
            ${this._data.map(item => {
                return `
                    <tr>
                        ${Object.keys(this.config).map(tableName => {
                            return `
                                <td>${ tableName === 'imageUrl' 
                                ? `<img src="${ item[tableName] }">` 
                                : item[tableName]} </td>
                            `
                        }).join('')}
                    </tr>
                `
            }).join('')}
            
        </table>
        `
    }
}

