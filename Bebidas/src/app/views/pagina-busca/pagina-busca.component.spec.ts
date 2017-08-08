import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBuscaComponent } from './pagina-busca.component';

describe('PaginaBuscaComponent', () => {
  let component: PaginaBuscaComponent;
  let fixture: ComponentFixture<PaginaBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
