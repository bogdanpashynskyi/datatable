import Component from '../component.js';

console.log(Component)
export default class Table {
    constructor({ element, data , columnConfig}) {
        this._element = element; 
        this._data = data;
        this.config = columnConfig;

        this._render();
    }

    _render() {
        if (this._data == undefined) {
            return;
        }

        this._element.innerHTML = `
        <h2> Hello Table </h2>
        <table>
            <tr>
                ${Object.values(this.config).map(typeOfSort => {
                    return `
                        <th>${typeOfSort.title}</th>
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

