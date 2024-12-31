import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NumberSelectorService } from '@sorteia-ae/number-data-access';

@Component({
  selector: 'lib-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  numbers: number[] = Array.from({ length: 60 }, (_, i) => i + 1);
  numberService = inject(NumberSelectorService);

  isSelected(num: number): boolean {
    return this.numberService.getSelectedNumbers().includes(num);
  }

  toggleNumber(num: number): void {
    this.numberService.selectNumber(num);
  }

  resetSelection(): void {
    this.numberService.resetSelection();
  }

  generateRandom(): void {
    this.numberService.generateRandomSelection();
  }
}
