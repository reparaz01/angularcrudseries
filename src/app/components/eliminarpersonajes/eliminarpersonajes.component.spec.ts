import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPersonajesComponent } from './eliminarpersonajes.component';

describe('EliminarpersonajesComponent', () => {
  let component: EliminarPersonajesComponent;
  let fixture: ComponentFixture<EliminarPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarPersonajesComponent]
    });
    fixture = TestBed.createComponent(EliminarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
