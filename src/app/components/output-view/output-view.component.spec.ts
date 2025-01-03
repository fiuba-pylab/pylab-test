import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputViewComponent } from './output-view.component';

describe('OutputViewComponent', () => {
  let component: OutputViewComponent;
  let fixture: ComponentFixture<OutputViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
