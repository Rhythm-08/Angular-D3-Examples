import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3AxisComponent } from './d3-axis.component';

describe('D3AxisComponent', () => {
    let component: D3AxisComponent;
    let fixture: ComponentFixture<D3AxisComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [D3AxisComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(D3AxisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
