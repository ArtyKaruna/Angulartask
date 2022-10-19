import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataformComponent } from './biodataform.component';

describe('BiodataformComponent', () => {
  let component: BiodataformComponent;
  let fixture: ComponentFixture<BiodataformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
