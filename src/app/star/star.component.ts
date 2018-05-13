import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  starArray: any = [];
  constructor() { }
  ngOnInit(): void {
    this.rating = Math.ceil(this.rating);
    for (let i = 1; i < this.rating; i++) {
        this.starArray.push(i);
    }
  }
}
