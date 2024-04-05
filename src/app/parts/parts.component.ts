import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Part } from '../home/models/part.model';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {PartService} from './partService';
import { FormControl,FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatDividerModule],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent implements OnInit{
  msg:string="";
  partService =inject(PartService);
  parts :Part[] = []
  ngOnInit(): void {
    this.fatchData();
  }
  fatchData(){
    this.partService.getPart().subscribe(
      (data: any)=>{
        console.log(data);
        this.parts = data;
      })};

      partFormGrp = new FormGroup({
        inveinventoryId:new FormControl<String>(''),
        partName:new FormControl<String>(''),
        description:new FormControl<String>(''),
        partType:new FormControl<String>(''),
        partAvailable:new FormControl<String>(''),
        serviceRepairPart:new FormControl<String>(''),
        partCount:new FormControl<String>(''),
        updatingDate:new FormControl<String>(''),
      });
     constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}
     onAddJobs(event : any): void{
      console.log(event);
    }
    onSubmit(): void{
      console.log("Hello now are ................");
      console.log(JSON.stringify(this.partFormGrp.value));
      this.partService.addPart(JSON.stringify(this.partFormGrp.value)).subscribe(
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
    templateUrl: 'part.createpart.dialog.html',
    standalone: true,
    styleUrl: 'parts.component.css',
    imports: [MatDialogModule, MatButtonModule,ReactiveFormsModule],
  })
  export class DialogContentExampleDialog {
  
    partService = inject(PartService);
  
    partFormGrp = new FormGroup({
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
      console.log(JSON.stringify(this.partFormGrp.value));
      this.partService.addPart(JSON.stringify(this.partFormGrp.value)).subscribe(
        (response) =>{
            console.log("response");
            console.log(response);
        }
      );
    }
  }
  
  // dataSource: MatTableDataSource<Part>;

  // // @ViewChild(MatPaginator) paginator: MatPaginator;
  // // @ViewChild(MatSort) sort: MatSort;

  // // constructor() {

  // //   // Assign the data to the data source for the table to render
  // //   this.dataSource = new MatTableDataSource(this.parts);
  // // }
 
  // ngAfterViewInit() {
  //   // this.dataSource.paginator = this.paginator;
  //   // this.dataSource.sort = this.sort;
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
//   addPart(part: Part):{
//     //adding part
//   }
//   removePart():{

//   }

