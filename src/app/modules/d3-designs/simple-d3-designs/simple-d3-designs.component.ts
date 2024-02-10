import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-simple-d3-designs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './simple-d3-designs.component.html',
    styleUrl: './simple-d3-designs.component.scss'
})
export class SimpleD3DesignsComponent implements OnInit {

    ngOnInit(): void {
        this.practiceD3();
    }

    practiceD3():void {
        d3.select('p').style('color', 'blue');
    }
}
