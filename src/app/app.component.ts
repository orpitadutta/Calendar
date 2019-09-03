import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-poc2demo';
  
  constructor (private httpService: HttpClient) { }
  arrWells: string [];

  ngOnInit () {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrWells = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrWells[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
