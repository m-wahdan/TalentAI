import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="global"></app-navbar>

    <!-- Converted to Light Theme -->
    <div class="bg-background-light min-h-screen flex flex-col">
       <div class="flex-grow w-full flex flex-col items-center justify-center p-4 lg:p-8">
          <div class="w-full max-w-7xl flex flex-col items-center gap-6">
             
             <div class="w-full max-w-7xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                <div class="flex flex-col lg:flex-row min-h-[500px]">
                   <div class="flex-1 p-8 lg:p-12 flex flex-col justify-start">
                      <div class="mb-8">
                         <h1 class="text-3xl font-light text-slate-900 mb-6">Welcome to GlobalTalent!</h1>
                         <hr class="border-gray-200"/>
                      </div>
                      <div class="flex-grow">
                         <p class="text-xl sm:text-2xl leading-relaxed text-slate-600 mb-10 font-light">
                            Are you ready to apply for the <span class="text-primary cursor-pointer hover:underline font-normal">SVP of Technical Product Management</span> role at <span class="text-primary cursor-pointer hover:underline font-normal">2 Hour Learning</span>?
                         </p>
                         <div class="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 lg:p-8 mb-8 flex flex-col xl:flex-row xl:items-center gap-8 shadow-sm">
                            <div class="flex-shrink-0 min-w-[220px]">
                               <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                  <span class="material-icons text-lg">payments</span> Compensation
                               </div>
                               <div class="flex items-baseline gap-2">
                                  <span class="text-4xl lg:text-5xl font-bold text-primary tracking-tight">$400,000</span>
                                  <span class="text-lg text-slate-500 font-medium">/year</span>
                               </div>
                               <div class="text-slate-600 font-medium mt-1 text-lg">($200 USD/hour)</div>
                            </div>
                            <div class="hidden xl:block w-px h-24 bg-gray-200"></div>
                            <div class="block xl:hidden w-full h-px bg-gray-200"></div>
                            <div class="flex-grow">
                                <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                  <span class="material-icons text-lg">fact_check</span> Role Details
                               </div>
                               <div class="flex flex-wrap gap-3 mb-4">
                                  <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-slate-600 text-sm font-medium shadow-sm">
                                     <span class="material-icons text-[20px] text-slate-400">public</span> Fully-remote
                                  </div>
                                  <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-slate-600 text-sm font-medium shadow-sm">
                                     <span class="material-icons text-[20px] text-slate-400">location_on</span> Remote
                                  </div>
                                  <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-slate-600 text-sm font-medium shadow-sm">
                                     <span class="material-icons text-[20px] text-slate-400">schedule</span> Full-time (40h/wk)
                                  </div>
                               </div>
                               <button class="group flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
                                  Show full requirements <span class="material-icons text-[18px] group-hover:translate-y-0.5 transition-transform">expand_more</span>
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                   
                   <div class="lg:w-[420px] bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 p-8 lg:p-12 flex flex-col justify-center">
                      <div class="space-y-5 w-full">
                         <button class="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-slate-800 font-medium py-4 px-6 rounded-lg shadow-sm border border-gray-300 transition-all duration-200 text-base group">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO2hvwnPfGCC7JtZNx4h4_Vb1leGC-eDwGq1_jg2WwXbT75RhRRj6wO0AnhWrbpoePV1vp-quoP8tXU4QOwn8fHS5dhEnHbMO-Hfiy4uXlgFe1f0YLZC1VIzsAeF9uBqBQyGo6KZsXx5oyxwcnbNUiQSE4pt-1DLC-MYdoHVRrTjdV8jdd85KxWC6-469tL4PsBhuKboMOaO2TLnPT7EjIyqGOKa71zd5o1CoY97acTTPUSGptcwFVx_ZOPbifgM520aZ5M98hYHw" class="w-6 h-6 group-hover:scale-110 transition-transform" alt="Google">
                            <span>Apply with Google</span>
                         </button>
                         <button class="w-full bg-primary hover:bg-primary-hover text-white font-medium py-4 px-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 text-base transform hover:-translate-y-0.5">
                            Apply with Resume
                         </button>
                      </div>
                      <div class="mt-10 text-center">
                         <p class="text-sm text-slate-500">Already have an account? <a href="#" class="text-primary hover:underline font-medium ml-1">Log in</a></p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    
    <app-footer theme="light" brand="global"></app-footer>
  `
})
export class ApplyComponent {}