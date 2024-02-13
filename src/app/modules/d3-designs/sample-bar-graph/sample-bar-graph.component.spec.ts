import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBarGraphComponent } from './sample-bar-graph.component';

describe('SampleBarGraphComponent', () => {
  let component: SampleBarGraphComponent;
  let fixture: ComponentFixture<SampleBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleBarGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
