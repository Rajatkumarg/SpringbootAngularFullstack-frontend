import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent{

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router){

  }
  // ngOnInit(): void{
    
  // }

  onSubmit(){
    this.saveEmployee();
  }
  private saveEmployee() {

    this.employeeService.saveEmployee(this.employee).subscribe((data: any)=>{
      console.log(data);
      this.goToEmployeeList()
    },
      (    error: any)=>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(["employees"]);
  }
  
}
