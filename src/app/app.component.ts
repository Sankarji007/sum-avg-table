import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  inputNumber:number=0;
  tableData:Map<number,number[]> =new Map();
  sum:number[]=[];
  average:number[]=[];
  index:any=[]
 
  onSubmit(){
    if(this.inputNumber<1){ //validating input
      alert("Enter positive numbers only");
      return;
    }
  
    this.index=new Array(this.inputNumber); //initializeing empty array for indexing;

    for(let i=1;i<=this.inputNumber;i++){
      let val:number[]=[]
      for(let j=1;j<=this.inputNumber;j++){
          val.push(i*j);
      }
      this.tableData.set(i,val);  //storing the key , value pair of index and values of table
      let sumOfRow:number=val.reduce((sum, num) => sum + num, 0); //calculating sum of the values;
      let averageOfRow:number=sumOfRow/this.inputNumber; //calculating average of the values
      this.sum.push(sumOfRow);
      this.average.push(averageOfRow);
    }
    console.log(this.tableData);
  }
}
