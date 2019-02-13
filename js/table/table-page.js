import Table from './components/table.js';
import Header from './components/header.js';
import Pagination from './components/pagination.js';
import GetDataFromServer from './service/server.js';
import Component from './component.js';

export default class TablePage {
    constructor({ element }) {
        this._element = element;

        this._render();
        this._initTable();
    }

    _initTable() {

        GetDataFromServer().
            then(items => {
                this._table = new Table ({
                    element: document.querySelector('.table-page'),
                    data: items,

                    columnConfig: {
                        imageUrl: {
                            title: ''
                        },

                        name: {
                          title: 'Название', // в таблице колонка будет так называться 
                          isSortable: true, // Поиск будет проверять эту и последнюю колонки 
                          isSearchable: true,
                        },
                        age: {
                          title: 'Возраст',
                          isSortable: true, // по этой колонке можно сортировать
                        },
                        snippet: { // Только для тех ключей которые есть в columnConfig будут колонки в таблице
                          title: 'Описание',
                          isSearchable: true, // В этой колонке тоже будет происходить поиск query
                        }
                      }
                })        
            });
    }

    _render() {
        this._element.innerHTML = `
        <div class="table-page"></div>
        `
    }
    
}