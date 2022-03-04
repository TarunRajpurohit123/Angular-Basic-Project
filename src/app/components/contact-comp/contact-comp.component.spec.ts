import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCompComponent } from './contact-comp.component';

describe('ContactCompComponent', () => {
  let component: ContactCompComponent;
  let fixture: ComponentFixture<ContactCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
