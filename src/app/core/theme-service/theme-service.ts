import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.isDarkMode() ? 'dark' : 'light';
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
      localStorage.setItem('theme', theme);
    });
  }

  toggleTheme() {
    this.isDarkMode.update((isDark) => !isDark);
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
