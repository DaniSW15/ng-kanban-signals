import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kanban } from './kanban';

describe('Kanban', () => {
  let component: Kanban;
  let fixture: ComponentFixture<Kanban>;

  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => false,
      }),
    });

    await TestBed.configureTestingModule({
      imports: [Kanban]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Kanban);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
