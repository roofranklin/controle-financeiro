import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTransacaoComponent } from './adicionar-transacao.component';

describe('AdicionarTransacaoComponent', () => {
  let component: AdicionarTransacaoComponent;
  let fixture: ComponentFixture<AdicionarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarTransacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
