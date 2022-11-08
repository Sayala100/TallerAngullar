import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  seasonAverage: number = this.Average(dataSeries);


  getSerieList(): Array<Serie> {
    return dataSeries
  }


  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });

  }


  ngOnInit() {
    this.getSeries();
    this.Average(this.series);
  }

  Average(seriess: Array<Serie>): number {
    let average: number = 0;
    seriess.forEach(serie => {
        average += serie.seasons;
    });
    return average / seriess.length;

  }

}




