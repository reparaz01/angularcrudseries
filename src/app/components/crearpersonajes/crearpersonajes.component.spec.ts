import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonajesComponent } from './crearpersonajes.component';

describe('CrearPersonajesComponent', () => {
  let component: CrearPersonajesComponent;
  let fixture: ComponentFixture<CrearPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPersonajesComponent]
    });
    fixture = TestBed.createComponent(CrearPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
