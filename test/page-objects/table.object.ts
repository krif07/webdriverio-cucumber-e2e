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
        let sum = 0;
        const rowNumber = await this.rowCount;
        for(let i=0; i< rowNumber; i++){
            let val = await this.getCellValue(i+1, colNumber);
            val = val.replace('$', '');
            sum += parseFloat(val);
        }
        return sum;
    }

}
