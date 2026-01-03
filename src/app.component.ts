import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <router-outlet></router-outlet>
    
    <!-- Quick Nav for Development/Demo purposes to switch between pages -->
    <div class="fixed bottom-4 right-4 z-[9999] group">
      <button class="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all">
        <span class="material-icons">menu</span>
      </button>
      <div class="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 hidden group-hover:block overflow-hidden">
        <div class="flex flex-col text-sm font-medium">
          <a routerLink="/" class="px-4 py-2 hover:bg-gray-50 text-gray-700">Home (GlobalTalent)</a>
          <a routerLink="/jobs" class="px-4 py-2 hover:bg-gray-50 text-gray-700">Jobs (Crossover)</a>
          <a routerLink="/apply" class="px-4 py-2 hover:bg-gray-50 text-gray-700">Apply</a>
          <a routerLink="/hire" class="px-4 py-2 hover:bg-gray-50 text-gray-700">Hire (Employer)</a>
          <a routerLink="/about" class="px-4 py-2 hover:bg-gray-50 text-gray-700">About Us</a>
          <a routerLink="/resources" class="px-4 py-2 hover:bg-gray-50 text-gray-700">Resources</a>
          <a routerLink="/help" class="px-4 py-2 hover:bg-gray-50 text-gray-700">Help Center</a>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {}