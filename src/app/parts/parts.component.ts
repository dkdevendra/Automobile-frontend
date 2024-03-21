import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Part } from '../home/models/part.model';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatDividerModule],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent implements OnInit, AfterViewInit{

  dataSource: MatTableDataSource<Part>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
  }

  parts: Part[] = [
    {partName:"Clutch Plate",partCount:"10"},{partName:"Clutch Plate",partCount:"10"},{partName:"Clutch Plate",partCount:"10"},{partName:"Clutch Plate",partCount:"10"}
  ]
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
//   addPart(part: Part):{
//     //adding part
//   }
//   removePart():{

//   }
  createNewUser(id: number): Part {
    const name = "Part Name"
  
    return {
      partName: name,
      partCount: "100"
    };
 }
}
