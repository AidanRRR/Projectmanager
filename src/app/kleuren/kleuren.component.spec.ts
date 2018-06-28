import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KleurenComponent } from './kleuren.component';

describe('KleurenComponent', () => {
  let component: KleurenComponent;
  let fixture: ComponentFixture<KleurenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KleurenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KleurenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
