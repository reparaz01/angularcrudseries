import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPersonajesComponent } from './modificarpersonajes.component';

describe('ModificarPersonajesComponent', () => {
  let component: ModificarPersonajesComponent;
  let fixture: ComponentFixture<ModificarPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPersonajesComponent]
    });
    fixture = TestBed.createComponent(ModificarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
