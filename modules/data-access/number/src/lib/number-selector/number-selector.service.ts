import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberSelectorService {
  private selectedNumbers: number[] = [];

  selectNumber(num: number): void {
    if (this.selectedNumbers.includes(num)) {
      this.selectedNumbers = this.selectedNumbers.filter((n) => n !== num);
    } else if (this.selectedNumbers.length < 15) {
      this.selectedNumbers.push(num);
    }
  }

  getSelectedNumbers(): number[] {
    return [...this.selectedNumbers];
  }

  resetSelection(): void {
    this.selectedNumbers = [];
  }

  generateRandomSelection(): void {
    this.resetSelection();
    while (this.selectedNumbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 60) + 1;
      if (!this.selectedNumbers.includes(randomNum)) {
        this.selectedNumbers.push(randomNum);
      }
    }
  }
}
