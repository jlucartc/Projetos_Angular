import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaDetalhesComponent } from './loja-detalhes.component';

describe('LojaDetalhesComponent', () => {
  let component: LojaDetalhesComponent;
  let fixture: ComponentFixture<LojaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
