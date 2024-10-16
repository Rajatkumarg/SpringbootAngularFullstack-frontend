import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  employee: Employee = new Employee();
  id: number|any

  constructor(private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeService
  ){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    },
    error=>console.log(error)
  )
  }

}
