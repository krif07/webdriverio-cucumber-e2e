export class TableObject {

    table: string;
    tbody: string;
    thead: string;

    constructor(tableLocator: string){
        this.table = tableLocator;
        this.tbody = this.table + '/tbody';
        this.thead = this.table + '/thead';
    }

    get columnCount(){
        return $$(`${this.thead}/tr/th`).length;
    }
    get rowCount(){
        return $$(`${this.tbody}/tr`).length;
    }
    getCell(row, col){
        return $(`${this.tbody}/tr[${row}]/td[${col}]`);
    }
    getColumnHeadCell(col){
        return $(`${this.thead}/tr/th[${col}]/span`);
    }
    getCellValue(row, col){
        return this.getCell(row, col).getText();
    }
    getColumnHeadCellValue(col){
        return this.getColumnHeadCell(col).getText();
    }
    async getColumnNumberByName(columnName){
        const totalColumns = await this.columnCount;
        let columnNumber = -1;
        for(let i=0; i<totalColumns; i++){
            let columnHeadValue = await this.getColumnHeadCellValue(i+1);
            console.log(`>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<< columnHeaderValue ${columnHeadValue}`)
            console.log(`>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<< columnName ${columnName}`)
            if(columnHeadValue === columnName){
                columnNumber = i+1;
                break;
            }
        }
        console.log(`>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<< columnNumber ${columnNumber}`)
        return columnNumber;
    }
    async getSumColumn(colNumber){
        const columnValuesArr = await this.getNumberElementsFromColumn(colNumber);
        let sum = columnValuesArr.reduce((a, b) => a + b, 0);
        return sum;
    }
    async getNumberElementsFromColumn(colNumber){
        let columnValuesArr = [];
        const totalRows = await this.rowCount;
        for(let i=0; i<totalRows; i++){
            let val = await this.getCellValue(i+1, colNumber);
            val = val.replace('$', '');
            columnValuesArr.push(parseFloat(val));
        }
        return columnValuesArr;
    }
    async compareEachColumnElementWithGivenValue(colNumber, compareType, expectedValue){
        let validNumbers;
        let numberArr = await this.getNumberElementsFromColumn(colNumber);

        if(compareType === 'greater than') {
            validNumbers = numberArr.filter(ele => ele > parseFloat(expectedValue));
        }
        else if(compareType === 'equal to'){
            validNumbers = numberArr.filter(ele => ele == parseFloat(expectedValue));
        }
        else if(compareType === 'less than'){
            validNumbers = numberArr.filter(ele => ele < parseFloat(expectedValue));
        }
        let totalRows = await this.rowCount;

        return (validNumbers.length === totalRows);
    }

    /**
     * Busca el n??mero de la columna con el nombre de la columna
     * luego busca un valor dentro de esa columna y devuelve la fila donde est?? ese valor
     * @param columnName nombre de la columna donde buscar condition
     * @param condition el valor en la columna
     */
    async getRowNumberByColumnNameAndCondition(columnName, condition){
        let rowNumber = -1;
        const columnNumber = await this.getColumnNumberByName(columnName);
        const totalRows = await this.rowCount;
        for(let i=0; i<totalRows; i++){
            let cellValue = await this.getCellValue(i+1, columnNumber);
            if(condition === cellValue){
                rowNumber = i+1;
                break;
            }
        }

        return rowNumber;
    }

    async getCellValueByColumnNameCondition(columnName, condition){
        const columnNumber = await this.getColumnNumberByName(columnName);
        const rowNumber = await this.getRowNumberByColumnNameAndCondition(columnName, condition);
        return await this.getCellValue(rowNumber,columnNumber);
    }

    /**
     * Busca el n??mero de la fila con el nombre de la columna y el valor a buscar de esa columna
     * luego crea un objeto con los valores de la fila
     * @param columnName nombre de la columna donde buscar condition
     * @param condition el valor en la columna
     */
    async getCellValueInObjectByColumnNameCondition(columnName, condition){
        const rowNumber = await this.getRowNumberByColumnNameAndCondition(columnName, condition);
        let personObj = {
            lastName: "",
            firstName: "",
            email: "",
            due: "",
            web: ""
        };
       personObj.lastName = await this.getCellValue(rowNumber, 1);
       personObj.firstName = await this.getCellValue(rowNumber, 2);
       personObj.email = await this.getCellValue(rowNumber, 3);
       personObj.due = await this.getCellValue(rowNumber, 4);
       personObj.web = await this.getCellValue(rowNumber, 5);

        return personObj;
    }

}
