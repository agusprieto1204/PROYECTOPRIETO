import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAereaComponent } from './content-aerea.component';

describe('ContentAereaComponent', () => {
  let component: ContentAereaComponent;
  let fixture: ComponentFixture<ContentAereaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAereaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentAereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
