import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateStrPage } from './create-str.page';

describe('CreateStrPage', () => {
  let component: CreateStrPage;
  let fixture: ComponentFixture<CreateStrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateStrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
