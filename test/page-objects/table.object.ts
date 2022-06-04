export class TableObject {

    table: string;
    tbody: string;
    thead: string;

    constructor(tableLocator: string){
        this.table = tableLocator;
        this.tbody = this.table += '/tbody';
        this.thead = this.table += '/head';
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
    getCellValue(row, col){
        return this.getCell(row, col).getText();
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

}
