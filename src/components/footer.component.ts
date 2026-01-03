import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer [class]="'border-t pt-24 pb-12 ' + (theme() === 'dark' ? 'bg-[#0f1012] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-slate-500')">
      <div class="w-full px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-24 mb-16">
          <div class="col-span-2 lg:col-span-2">
            @if (brand() === 'crossover') {
               <span class="text-3xl font-bold mb-6 block" [class.text-white]="theme() === 'dark'" [class.text-slate-900]="theme() === 'light'">CROSSOVER</span>
            } @else {
               <span class="text-3xl font-bold mb-6 block" [class.text-white]="theme() === 'dark'" [class.text-slate-900]="theme() === 'light'">Global<span class="text-primary">Talent</span></span>
            }
            <p class="text-lg max-w-sm leading-relaxed">
              Connecting the world's best talent with the world's best companies. Remote, reliable, and rapid. We are bridging the gap in the global workforce.
            </p>
          </div>
          
          <div>
            <h3 class="text-sm font-bold tracking-wider uppercase mb-6" [class.text-white]="theme() === 'dark'" [class.text-slate-900]="theme() === 'light'">Job Seekers</h3>
            <ul class="space-y-4 text-base">
              <li><a href="#" class="hover:text-primary transition">Browse Jobs</a></li>
              <li><a href="#" class="hover:text-primary transition">Success Stories</a></li>
              <li><a href="#" class="hover:text-primary transition">Career Advice</a></li>
              <li><a href="#" class="hover:text-primary transition">Remote Guide</a></li>
            </ul>
          </div>
          
          <div>
             <h3 class="text-sm font-bold tracking-wider uppercase mb-6" [class.text-white]="theme() === 'dark'" [class.text-slate-900]="theme() === 'light'">Employers</h3>
            <ul class="space-y-4 text-base">
              <li><a href="#" class="hover:text-primary transition">Hire Talent</a></li>
              <li><a href="#" class="hover:text-primary transition">Enterprise Solutions</a></li>
              <li><a href="#" class="hover:text-primary transition">Pricing</a></li>
              <li><a href="#" class="hover:text-primary transition">Request Demo</a></li>
            </ul>
          </div>
          
          <div>
             <h3 class="text-sm font-bold tracking-wider uppercase mb-6" [class.text-white]="theme() === 'dark'" [class.text-slate-900]="theme() === 'light'">Company</h3>
            <ul class="space-y-4 text-base">
              <li><a href="#" class="hover:text-primary transition">About Us</a></li>
              <li><a href="#" class="hover:text-primary transition">Contact</a></li>
              <li><a href="#" class="hover:text-primary transition">Legal</a></li>
              <li><a href="#" class="hover:text-primary transition">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6" [class.border-gray-800]="theme() === 'dark'" [class.border-gray-200]="theme() === 'light'">
          <p class="text-sm">© 2024 {{ brand() === 'crossover' ? 'Crossover' : 'GlobalTalent' }} Inc. All rights reserved.</p>
          <div class="flex space-x-8 text-sm">
            <a href="#" class="hover:text-primary transition">Privacy Policy</a>
            <a href="#" class="hover:text-primary transition">Terms of Service</a>
            <a href="#" class="hover:text-primary transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  theme = input<'light' | 'dark'>('light');
  brand = input<'global' | 'crossover'>('global');
}