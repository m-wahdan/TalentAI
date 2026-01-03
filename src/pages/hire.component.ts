import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-hire',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="global"></app-navbar>

    <!-- Converted to Light Theme -->
    <div class="bg-background-light text-slate-800 min-h-screen relative overflow-x-hidden font-sans">
      
      <!-- Background Abstract Shape -->
      <div class="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div class="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <main class="relative z-10 pt-12 pb-32 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
         <section class="w-full max-w-5xl mx-auto text-center mb-20 mt-10">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-bold tracking-wide uppercase text-primary mb-8 shadow-sm">
               <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               Work Smart
            </div>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-slate-900">
               Hire <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">smarter</span>,<br class="hidden sm:block"/> not harder.
            </h1>
            <p class="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
               The most important task of a leader is recruiting the right team. We invented a better way to find elite global talent—without blowing your budget or lowering your standards.
            </p>
            
            <div class="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-start md:items-center mb-12 text-sm sm:text-base text-slate-600 bg-white p-4 rounded-xl border border-gray-200 inline-flex mx-auto shadow-sm">
               <div class="flex items-center gap-3 text-left">
                  <span class="material-icons text-primary text-xl shrink-0">check_circle</span>
                  <span>Find world-class people in overlooked places</span>
               </div>
               <div class="hidden md:block w-px h-6 bg-gray-200"></div>
               <div class="flex items-center gap-3 text-left">
                  <span class="material-icons text-primary text-xl shrink-0">check_circle</span>
                  <span>Easy AI-powered shortlisting</span>
               </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
               <button class="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">Start Hiring Now</button>
               <a href="#" class="w-full sm:w-auto group flex items-center justify-center gap-2 text-slate-700 font-semibold py-4 px-8 border border-gray-300 rounded-lg hover:bg-white transition-colors bg-white shadow-sm">
                  View Solutions <span class="material-icons text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
               </a>
            </div>
         </section>

         <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <!-- Card 1 -->
            <section class="group relative bg-white rounded-2xl border border-gray-100 p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
               <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
               <div class="relative z-10">
                  <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-primary">
                     <span class="material-icons text-3xl">public</span>
                  </div>
                  <h2 class="text-2xl font-bold text-slate-900 mb-3">Global Reach, Local Budget</h2>
                  <p class="text-slate-600 leading-relaxed mb-8 h-20">Our platform scans 180+ countries to find elite talent in emerging markets. You get Silicon Valley quality without the markup.</p>
                  <div class="space-y-6">
                     <div>
                        <div class="flex justify-between items-end mb-2">
                           <span class="text-sm font-medium text-slate-500">Cost Savings</span>
                           <span class="text-lg font-bold text-slate-900">50%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                           <div class="bg-primary h-full w-[50%]"></div>
                        </div>
                     </div>
                     <div>
                        <div class="flex justify-between items-end mb-2">
                           <span class="text-sm font-medium text-slate-500">Global Coverage</span>
                           <span class="text-lg font-bold text-slate-900">180+ Countries</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                           <div class="bg-primary h-full w-[95%]"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            
            <!-- Card 2 -->
             <section class="group relative bg-white rounded-2xl border border-gray-100 p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
               <div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
               <div class="relative z-10">
                  <div class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
                     <span class="material-icons text-3xl">psychology</span>
                  </div>
                  <h2 class="text-2xl font-bold text-slate-900 mb-3">AI-Powered Velocity</h2>
                  <p class="text-slate-600 leading-relaxed mb-8 h-20">Skip the resume screening. Our AI evaluates skills, cognitive ability, and English proficiency instantly.</p>
                  <div class="grid grid-cols-2 gap-4">
                     <div class="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center group/stat hover:border-indigo-100 transition-colors">
                        <div class="text-4xl font-extrabold text-indigo-600 mb-1">80%</div>
                        <div class="text-xs uppercase tracking-wider text-slate-500 font-semibold">Time Saved</div>
                     </div>
                      <div class="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center group/stat hover:border-indigo-100 transition-colors">
                        <div class="text-4xl font-extrabold text-indigo-600 mb-1">24h</div>
                        <div class="text-xs uppercase tracking-wider text-slate-500 font-semibold">Avg Hire Time</div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <section class="mt-24 w-full max-w-4xl relative px-4">
            <div class="absolute -top-6 left-6 text-slate-200">
               <span class="material-icons text-[8rem] rotate-180">format_quote</span>
            </div>
            <div class="relative z-10 text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
               <p class="text-xl md:text-2xl font-medium text-slate-800 mb-8 leading-relaxed italic">"We built a full engineering team in 2 weeks. The quality of candidates was higher than anything we saw locally, at half the cost."</p>
               <div class="flex items-center justify-center gap-4">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJQpwjVAEBpIpI7V73LeRx8bc74DdULg6XNGum8FtdC6sONVUA_Q4SrnhgqXq0Mf7BL1wOTL6zgWpUJIbneKhkvkbO3E8zkZkWuDi3kwcaXayTYiuPIvqHC4Def_Pac9XhqrGkzMGEVlcwjXlqYINMwiWiB0iM5276pjsG5ph4oJL9WQuiR9EWcwC_Nl2XxTU2rgBcnQ98MX_uyGY3YRsOEh4bJKmkBjhq_K3nD4gTkbX9R3QqVMR8kb7RTb3pfugOg64Q02D_wXI" class="w-12 h-12 rounded-full border-2 border-primary object-cover shadow-md" alt="David Chen">
                  <div class="text-left">
                     <div class="font-bold text-slate-900">David Chen</div>
                     <div class="text-sm text-primary">CTO, TechFlow Inc.</div>
                  </div>
               </div>
            </div>
         </section>
      </main>

      <!-- Cookie Banner adapted to Light Theme -->
      <div class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-start gap-4">
               <span class="material-icons text-primary text-3xl hidden md:block">cookie</span>
               <p class="text-sm text-slate-600 leading-relaxed max-w-2xl">We use cookies to improve your experience, analyze traffic, and show personalized content. By clicking "Accept All", you agree to our use of cookies. <a href="#" class="text-primary underline hover:text-primary-hover transition-colors">Privacy Policy</a></p>
            </div>
            <div class="flex items-center gap-3 w-full md:w-auto shrink-0">
               <button class="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap">Reject All</button>
               <button class="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-colors rounded-lg shadow-md whitespace-nowrap">Accept All</button>
            </div>
         </div>
      </div>
    </div>
    
    <app-footer theme="light" brand="global"></app-footer>
  `
})
export class HireComponent {}