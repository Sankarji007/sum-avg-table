import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  inputNumber:number=1;
  tableData:Map<number,number[]> =new Map();
  sum:number[]=[];
  average:number[]=[];
  index:any=[]
 
  onSubmit(){
    this.index=new Array(this.inputNumber);
    for(let i=1;i<=this.inputNumber;i++){
      let val:number[]=[]
      for(let j=1;j<=this.inputNumber;j++){
          val.push(i*j);
      }
      this.tableData.set(i,val);
      let sumOfRow:number=val.reduce((sum, num) => sum + num, 0);
      let averageOfRow:number=sumOfRow/this.inputNumber;
      this.sum.push(sumOfRow);
      this.average.push(averageOfRow);
    }
    console.log(this.tableData);
  }
}
