import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleD3DesignsComponent } from './simple-d3-designs.component';

describe('SimpleD3DesignsComponent', () => {
    let component: SimpleD3DesignsComponent;
    let fixture: ComponentFixture<SimpleD3DesignsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SimpleD3DesignsComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(SimpleD3DesignsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
