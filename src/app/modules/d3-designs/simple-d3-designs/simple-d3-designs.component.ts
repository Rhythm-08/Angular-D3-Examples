import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as d3 from 'd3';

@Component({
    selector: 'app-simple-d3-designs',
    standalone: true,
    imports: [CommonModule,RouterOutlet],
    templateUrl: './simple-d3-designs.component.html',
    styleUrl: './simple-d3-designs.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class SimpleD3DesignsComponent implements OnInit {

    private width = 640;
    private height  = 400;
    private marginTop = 20;
    private marginRight = 20;
    private marginBottom = 30;
    private marginLeft = 40;

    ngOnInit(): void {
        this.practiceD3();
    }

    practiceD3():void {
        // Declare the x (horizontal position) scale;
        const x = d3.scaleUtc()
            .domain([new Date("2024-01-01"),new Date("2025-01-01")])
            .range([this.marginLeft,this.width-this.marginRight]);

        // Declare the y (vertical position) scale;

        const y = d3.scaleLinear()
            .domain([0,100])
            .range([this.height - this.marginBottom,this.marginTop]);

        // Create the SVG Container;

        const svg = d3.select('#container').append("svg")
            .attr("width",this.width)
            .attr("height",this.height);

        // Add the X-axis;

        svg.append("g")
            .attr("transform",`translate(0,${this.height-this.marginBottom})`)
            .call(d3.axisBottom(x));

        // Add the Y-axis;

        svg.append("g")
            .attr('transform',`translate(${this.marginLeft},0)`)
            .call(d3.axisLeft(y));

    }
}
