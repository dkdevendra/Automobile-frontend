import { Component, OnInit,inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { JobCard } from '../home/models/jobcard.model';
import { FormControl,FormControlName,ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobServices } from './job.services';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [MatButtonModule,ReactiveFormsModule,MatDialogModule],
  templateUrl: './jobs.component.html',
  styleUrl: 'jobs.component.css'
})
export class JobsComponent implements OnInit {
  msg:string="";
  jobCardService = inject(JobServices);
  jobCards: JobCard [] = []
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.jobCardService.getJobCard().subscribe(
      (data: any)=>{
        console.log(data);
        this.jobCards = data;
      })};


  jobCardFormGrp = new FormGroup({
    make : new FormControl<string>(''),
    model : new FormControl<string>(' '),
    vehicleNumber: new FormControl<string>(' '),
    services : new FormControl<string>(' '),
    deliveryDate : new FormControl<string>(' '),
    estimatedCost : new FormControl<string>(' '),
    contactNumber : new FormControl<string>(' ')
  });
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  onAddJobs(event : any): void{
    console.log(event);
  }
  onSubmit(): void{
    console.log("Hello now are ................");
    console.log(JSON.stringify(this.jobCardFormGrp.value));
    this.jobCardService.addJobCard(JSON.stringify(this.jobCardFormGrp.value)).subscribe(
      (response) =>{
          console.log("response");
          console.log(response);
      }
    
    );
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'jobs.createjob.dialog.html',
  standalone: true,
  styleUrl: 'jobs.component.css',
  imports: [MatDialogModule, MatButtonModule,ReactiveFormsModule],
})
export class DialogContentExampleDialog {

  jobCardService = inject(JobServices);

  jobCardFormGrp = new FormGroup({
    make : new FormControl<string>(''),
    model : new FormControl<string>(' '),
    vehicleNumber: new FormControl<string>(' '),
    services : new FormControl<string>(' '),
    deliveryDate : new FormControl<string>(' '),
    estimatedCost : new FormControl<string>(' '),
    contactNumber : new FormControl<string>(' ')
  });

  onSubmit(): void{
    console.log("Hello now are ................");
    console.log(JSON.stringify(this.jobCardFormGrp.value));
    this.jobCardService.addJobCard(JSON.stringify(this.jobCardFormGrp.value)).subscribe(
      (response) =>{
          console.log("response");
          console.log(response);
      }
    
    );
  }
}