import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as d3 from 'd3';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss'],
  standalone: true,
  imports: [IonicModule],

})

export class TableroComponent implements OnInit {

  tablero = [
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],
]

  constructor() { }

  ngOnInit() {
    var data = d3.range(64).map(function(d) {
      return {
        x: d % 8,
        y: Math.floor(d / 8),
        color: (d % 2) ^ (Math.floor(d / 8) % 2)
      };
    });
    
    var svg = d3.select("svg");
    
    var g = svg.append("g")
      .attr("transform", "translate(20,20)");
    
    var rect = g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "rect")
      .attr("x", function(d) { return d.x * 40; })
      .attr("y", function(d) { return d.y * 40; })
      .attr("width", 40)
      .attr("height", 40)
      .attr("fill", function(d) { return d.color ? "gray" : "white"; })
      .attr("stroke", "black")
      .attr("stroke-width", "2px")
      .on("click", function(event, d) {
        console.log(`Clicked on cell (${d.x}, ${d.y})`);
      });
  }
}