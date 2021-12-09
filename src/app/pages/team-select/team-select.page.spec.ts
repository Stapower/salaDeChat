import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamSelectPage } from './team-select.page';

describe('TeamSelectPage', () => {
  let component: TeamSelectPage;
  let fixture: ComponentFixture<TeamSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
