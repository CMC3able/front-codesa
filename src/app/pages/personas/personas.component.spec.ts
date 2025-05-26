import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasComponent } from './personas.component';
import { MatIconModule } from '@angular/material/icon';

describe('PersonasComponent', () => {
  let component: PersonasComponent;
  let fixture: ComponentFixture<PersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasComponent,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
