import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsDetailComponent } from './statistics-detail.component';


describe('StatisticsDetailComponent', () => {
  let component: StatisticsDetailComponent;
  let fixture: ComponentFixture<StatisticsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [StatisticsDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should raise saved when save', () => {
  //   const resource = new Resource();
  //   component.saved.subscribe(x => expect(x).toBe(resource));
  //   component.save(resource);
  // });
});
