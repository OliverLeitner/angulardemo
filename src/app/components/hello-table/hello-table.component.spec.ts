import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTableComponent } from './hello-table.component';

describe('HelloTableComponent', () => {
  let component: HelloTableComponent;
  let fixture: ComponentFixture<HelloTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
