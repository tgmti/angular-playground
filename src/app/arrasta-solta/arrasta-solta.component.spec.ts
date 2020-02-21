import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ArrastaSoltaComponent } from './arrasta-solta.component';

describe('ArrastaSoltaComponent', () => {
  let component: ArrastaSoltaComponent;
  let fixture: ComponentFixture<ArrastaSoltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrastaSoltaComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrastaSoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
