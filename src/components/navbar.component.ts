import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav [class]="'sticky top-0 z-50 w-full transition-all duration-300 border-b ' + (theme() === 'dark' ? 'bg-[#0f1012] border-gray-800 text-white' : 'bg-white/95 backdrop-blur border-gray-200 text-slate-800')">
      <div class="w-full px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center gap-2">
            <a routerLink="/" class="flex items-center gap-2 group">
              @if (brand() === 'crossover') {
                 <div class="relative w-8 h-8 flex items-center justify-center">
                  <!-- Unified Color: Changed text-teal-primary to text-primary -->
                  <svg class="w-full h-full text-primary transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                 </div>
                 <span class="font-bold text-xl tracking-wide uppercase">Crossover</span>
              } @else {
                 <span class="text-2xl font-bold tracking-tight">Global<span class="text-primary">Talent</span></span>
              }
            </a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-10">
            <a routerLink="/jobs" routerLinkActive="text-primary" class="text-base font-medium hover:text-primary transition">Find Jobs</a>
            <a routerLink="/hire" routerLinkActive="text-primary" class="text-base font-medium hover:text-primary transition">Hire Talent</a>
            <a routerLink="/resources" routerLinkActive="text-primary" class="text-base font-medium hover:text-primary transition">Solutions</a>
            <a routerLink="/about" routerLinkActive="text-primary" class="text-base font-medium hover:text-primary transition">About</a>
          </div>

          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center space-x-6">
            <a href="#" class="text-base font-medium hover:text-primary transition">Log in</a>
            <!-- Unified Color: Always use primary blue button style -->
            <a routerLink="/apply" class="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-full text-white transition shadow-md hover:-translate-y-0.5 bg-primary hover:bg-primary-hover">
              Join Now
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex items-center md:hidden">
            <button class="p-2 rounded-md hover:bg-gray-100/10 focus:outline-none">
              <span class="material-icons">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  theme = input<'light' | 'dark'>('light');
  brand = input<'global' | 'crossover'>('global');
}