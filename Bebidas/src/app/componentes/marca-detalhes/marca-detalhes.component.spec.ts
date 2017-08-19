import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDetalhesComponent } from './marca-detalhes.component';

describe('MarcaDetalhesComponent', () => {
  let component: MarcaDetalhesComponent;
  let fixture: ComponentFixture<MarcaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
