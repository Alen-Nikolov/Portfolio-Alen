import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPointerComponent } from './section-pointer.component';

describe('SectionPointerComponent', () => {
  let component: SectionPointerComponent;
  let fixture: ComponentFixture<SectionPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPointerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
