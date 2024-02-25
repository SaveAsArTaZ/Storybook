import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStorybookComponent } from './testing-storybook.component';

describe('TestingStorybookComponent', () => {
  let component: TestingStorybookComponent;
  let fixture: ComponentFixture<TestingStorybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingStorybookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingStorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
