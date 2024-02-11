import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-d3-axis',
    standalone: true,
    imports: [],
    templateUrl: './d3-axis.component.html',
    styleUrl: './d3-axis.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class D3AxisComponent implements OnInit,OnDestroy{

    private width = 640;
    private height  = 100;
    private marginTop = 20;
    private marginRight = 20;
    private marginBottom = 30;
    private marginLeft = 40;
    private intervalId: any;

    x:any;
    gx:any;

    ngOnInit(): void {
        this.practiceD3();
    }

    practiceD3(){

        this.x = d3.scaleLinear()
            .domain([0,200])
            .range([this.marginLeft,this.width-this.marginRight]);

        const svg = d3.select('#container').append('svg')
            .attr("width",this.width)
            .attr("height",this.height);

        this.gx = svg.append('g')
            .attr('transform',`translate(0,${this.height-this.marginBottom})`)
            .call(d3.axisBottom(this.x));

        this.intervalId = setInterval(() => {
            this.updateXAxis();
        }, 3000);

    }
    updateXAxis(){
        const initialVal = Math.floor(Math.random() * 100);
        const finalVal = initialVal + Math.floor(Math.random() * (100 - initialVal));

        this.x =this.x.domain([initialVal,finalVal]);
        this.gx.transition()
            .duration(1000)  // Adjust the duration as needed
            .call(d3.axisBottom(this.x));
    }

    private startUpdating(): void {
        this.intervalId = setInterval(() => {
            this.updateXAxis();
        }, 2000); // Call updateXAxis every 2 seconds
    }

    private stopUpdating(): void {
        clearInterval(this.intervalId);
    }

    ngOnDestroy(): void {
        this.stopUpdating();
    }
}
