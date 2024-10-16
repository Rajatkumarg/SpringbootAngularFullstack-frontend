import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id:number| any;
  employee: Employee = new Employee();

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private employeeService: EmployeeService){

  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log('Data from db to update',data);
      this.employee = data;
    },
    error=>console.log(error)
  )
  }

onSubmit() {
  this.employeeService.saveEmployee(this.employee).subscribe(data=>{
    console.log('Record update successfully with '+this.employee)
    this.router.navigate(['/employees'])
  },
  error=>console.log(error)
)
}

}
