import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFComponent } from './section-f.component';

describe('SectionFComponent', () => {
  let component: SectionFComponent;
  let fixture: ComponentFixture<SectionFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
