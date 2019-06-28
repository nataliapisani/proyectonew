import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car.model';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-linkeo',
  templateUrl: './linkeo.component.html',
  styleUrls: ['./linkeo.component.css']
})
export class LinkeoComponent implements OnInit {

 

  carSelected: Car = new Car();
  carId;
  constructor(
    private route:ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.carId = this.route.snapshot.params.id;
    this.carService.getCarSmallById(parseInt(this.carId,10)).then((car)=>{this.carSelected = car; console.log(car);
    });

    console.log(this.carSelected);
    
  }

}
