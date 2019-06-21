import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../car.service';


@Component({
  selector: 'app-tablita',
  templateUrl: './tablita.component.html',
  styleUrls: ['./tablita.component.css']
})

export class TablitaComponent implements OnInit {

  
  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() { this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
        { field: 'vin', header: 'Vin' },
        {field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' },
     
    ];
  }

}
