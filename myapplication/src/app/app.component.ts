import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>The hero's birthday is {{ birthday | date |lowercase}}</p>
  <p> currenct {{amount| currency:'RUP ':'Rupees'}}</p>
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(){
    // this.setCurrentClasses()
  }
  amount=100
  birthday = new Date(1988, 3, 15);
  title = 'myapplication';
  name:string='Nitin sharma'
  employee = ['Ashish','Goyal','raghav']
  employees={
    title:"Software Engineer",
    name:'Nitish',
    salary:100000,
    src:"https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  }
  value=1
  employeeList=[{name:'nishu',salary:'10000'},
{name:'nishu1',salary:'100200'}]
  Isdisabled=true
  myclass=['success','height20']
  getName(data:number):string{
    
    if(data==1)
    {
      return "hello from method"+data;
    }
    else
    {
      return "hello from data"+data;
    }
  }
  clicksave():void{
    alert('Wrong Input')
    this.name="updated Name"
  }
  over():void{
    this.name='Ashish'
  }
  txtchange():void{
    this.name="yup"
  }
  currentClasses:any = null;
/* . . . */
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    saveable: this.canSave,
    modified: !this.isUnchanged,
    special:  this.isSpecial
  };
}
  isSpecial=true
  isUnchanged=false
  canSave=true
  show=false
  src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  
}
