import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Service } from '../home/models/services.model';
import {Services} from './services.service';
@Component({
  selector: 'app-services',
  standalone: true,
  imports:[HttpClientModule,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  
  ngOnInit(): void {
    this.fetchData();
  }
  httpClient = inject(HttpClient);
  service = inject(Services);
  services: Service [] = []
  fetchData(){
    this.service.getServices().subscribe(
      (data: any)=>{
        console.log(data);
        this.services = data;
      }
    )
  }

}

