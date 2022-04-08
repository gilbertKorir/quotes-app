import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuotesComponent } from './main-quotes.component';

describe('MainQuotesComponent', () => {
  let component: MainQuotesComponent;
  let fixture: ComponentFixture<MainQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
