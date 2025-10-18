import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Resume } from './resume';

describe('Resume', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Resume);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render my name and occupation in the title', () => {
    const fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Collin Gibson - Software Developer',
    );
  });
});
