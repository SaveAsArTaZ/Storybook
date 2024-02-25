import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-testing-storybook',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf
  ],
  templateUrl: './testing-storybook.component.html',
  styleUrl: './testing-storybook.component.css'
})
export class TestingStorybookComponent {
  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Button';

  public isVisible:boolean = false;

  public onClick():void {
    this.isVisible = !this.isVisible
  }
  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
