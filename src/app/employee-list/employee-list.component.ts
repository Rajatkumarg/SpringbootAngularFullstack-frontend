import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  
  employees: Employee[] | undefined;
  employee: Employee | undefined;

  empObj: Employee = new Employee();
  

  constructor(private employeeService: EmployeeService, private router: Router){

  }

  ngOnInit(): void{
    // this.employees = [
    //   {
    //     "id": 1,
    //     "firstName": "Rajat",
    //     "lastName": "Kumar",
    //     "emailId": "abc@gmail.com"
    // },
    // {
    //     "id": 2,
    //     "firstName": "Nishant",
    //     "lastName": "Kumar",
    //     "emailId": "def@gmail.com"
    // }
    // ]
    // this.getEmployeeById(3);
    // this.saveEmployee();
    this.getEmployees();
  }
  // private saveEmployee() {
  //   this.empObj.firstName="Cheena",
  //   this.empObj.lastName="Khuntwal",
  //   this.empObj.emailId="ghi@gmail.com"

  //   this.employeeService.saveEmployee(this.empObj).subscribe((data: any)=>{
  //     console.log(data);
  //   },
  //     (    error: any)=>console.log(error));
  // }
  getEmployeeById(id:number) {
    return this.employeeService.getEmployeeById(id).subscribe(data=>{
        this.employee = data;
    })
  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(["update-employee",id]);
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
