import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl,FormControlName,ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [MatButtonModule,ReactiveFormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: 'jobs.component.css'
})

export class JobsComponent {
  msg:string="";
  jobCardFormGrp = new FormGroup({
    make : new FormControl<string>(''),
    model : new FormControl<string>(' '),
    vehicleNumber: new FormControl<string>(' '),
    services : new FormControl<string>(' '),
    deliveryDate : new FormControl<string>(' '),
    estimatedCost : new FormControl<string>(' '),
    contactNumber : new FormControl<string>(' ')
  });
  constructor(private formBuilder: FormBuilder) {}

  onAddJobs(event : any): void{
    console.log(event);
  }
  onSubmit(): void{
    console.log("Hello now are ................");
    console.log(this.jobCardFormGrp.controls)
  }

}
