import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlitaComponent } from './carlita.component';

describe('CarlitaComponent', () => {
  let component: CarlitaComponent;
  let fixture: ComponentFixture<CarlitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
