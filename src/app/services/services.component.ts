import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Service } from '../home/models/services.model';

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
  data: any[] = []
  services: Service [] = [
    {
      serviceName: "Genral Service",
      serviceDescription: "General Service description"
    },
    {
      serviceName: "Genral Service",
      serviceDescription: "General Service description"
    },
    {
      serviceName: "Genral Service",
      serviceDescription: "General Service description"
    },
    {
      serviceName: "Genral Service",
      serviceDescription: "General Service description"
    },
  ]
  fetchData(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any)=>{
        console.log(data);
        this.data = data;
      }
    )
  }

}

