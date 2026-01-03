import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="global"></app-navbar>

    <div class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 w-full overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4WCMUI0uxBgyWVVmnXOB535v6P4utXkQEHdz-1QjmmWMSFL4AbNQP1wCDRtqTYQeJ2SXAJKNlrmug8XmecneJOH2TMWE5eIoZ6n7xtu5KR63ZpiaGVOy2fqowl2qaGNq87LzFDMBPbmP9dOkj7jXG74D1BKu2pdo8ABnsy01S6FnCus7HW1-H1rEJZK_AWdlVzct4XA1r9Vo-TUuNUf3WpBv_4hi9qGq6q09MGWURgb3G6zu-F70OFmbUqGYnTIUGENrOyFGwNg" class="w-full h-full object-cover mix-blend-overlay" alt="network">
      </div>

      <div class="relative w-full px-6 lg:px-12 py-24 lg:py-40 flex flex-col items-center justify-center min-h-[600px] lg:min-h-[700px]">
        <div class="w-full max-w-6xl text-center mx-auto">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-sm leading-tight">
             Find Your Next High-Paying <br class="hidden md:block"/> Remote Role or Top Global Talent
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-2xl text-blue-100 font-light leading-relaxed">
            Join the exclusive network for elite professionals and world-class companies. Connecting the top 1% of global talent with the best opportunities.
          </p>
          
          <div class="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up">
             <button class="px-10 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white hover:bg-white hover:text-blue-700 transition">
               I'm a Job Seeker
             </button>
             <button class="px-10 py-4 border-2 border-transparent text-lg font-semibold rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition shadow-lg">
               I'm Hiring
             </button>
          </div>

          <div class="mt-16 w-full max-w-4xl mx-auto">
             <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                   <span class="material-icons text-slate-400 text-3xl">search</span>
                </div>
                <input type="text" placeholder="Search for jobs, skills, or companies (e.g. Senior React Developer)..." class="block w-full pl-16 pr-4 py-6 border-none rounded-2xl leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-xl shadow-2xl">
                <div class="absolute inset-y-2 right-2 flex items-center">
                   <button class="hidden sm:block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold text-lg transition h-full">
                     Search
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-6 lg:px-16 py-24 space-y-32 bg-background-light">
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-4 lg:pr-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">For Job Seekers</h2>
          <p class="text-xl text-slate-600 leading-relaxed">Unlock opportunities that match your potential. We curate the best roles from top-tier companies globally, ensuring you get the compensation and challenge you deserve.</p>
          <button class="mt-8 text-primary font-semibold text-lg hover:text-primary-hover flex items-center group">
             Explore Jobs <span class="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div class="lg:col-span-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
              <div class="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-blue-50 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-icons text-4xl">public</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">High-Paying Remote Jobs</h3>
              <p class="text-lg text-slate-600 leading-relaxed">Access a curated list of remote roles offering top-tier compensation packages.</p>
            </div>
            <div class="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
               <div class="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-blue-50 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-icons text-4xl">verified_user</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Verified Top Companies</h3>
              <p class="text-lg text-slate-600 leading-relaxed">We vet every employer to ensure you work with reputable, stable organizations.</p>
            </div>
             <div class="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
               <div class="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-blue-50 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-icons text-4xl">rocket_launch</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Fast Track Your Career</h3>
              <p class="text-lg text-slate-600 leading-relaxed">Get discovered by recruiters looking specifically for your elite skillset.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="relative py-8">
         <div class="absolute inset-0 flex items-center" aria-hidden="true">
           <div class="w-full border-t border-slate-200"></div>
         </div>
      </div>

      <section class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
         <div class="lg:col-span-8 order-2 lg:order-1">
             <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div class="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                 <div class="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-indigo-50 text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <span class="material-icons text-4xl">person_search</span>
                 </div>
                 <h3 class="text-2xl font-bold text-slate-900 mb-4">Access Elite Talent</h3>
                 <p class="text-lg text-slate-600 leading-relaxed">Filter through the noise and connect with the top 1% of professionals worldwide.</p>
               </div>
               <div class="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div class="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-indigo-50 text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <span class="material-icons text-4xl">speed</span>
                 </div>
                 <h3 class="text-2xl font-bold text-slate-900 mb-4">Speed Up Hiring</h3>
                 <p class="text-lg text-slate-600 leading-relaxed">Reduce time-to-hire by 50% with our automated matching technology.</p>
               </div>
               <div class="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div class="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-indigo-50 text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <span class="material-icons text-4xl">shield</span>
                 </div>
                 <h3 class="text-2xl font-bold text-slate-900 mb-4">Reduce Hiring Risks</h3>
                 <p class="text-lg text-slate-600 leading-relaxed">Every candidate is pre-screened for skills and cultural fit.</p>
               </div>
             </div>
         </div>
         <div class="lg:col-span-4 lg:pl-12 order-1 lg:order-2 text-right lg:text-left">
           <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">For Employers</h2>
           <p class="text-xl text-slate-600 leading-relaxed">Build your dream team with pre-vetted global talent. Scale your workforce efficiently without compromising on quality or cultural alignment.</p>
           <button class="mt-8 text-indigo-600 font-semibold text-lg hover:text-indigo-700 flex items-center group lg:justify-start justify-end ml-auto lg:ml-0">
                Start Hiring <span class="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
           </button>
         </div>
      </section>
    </div>

    <div class="bg-slate-900 py-32 w-full">
      <div class="w-full px-6 lg:px-12 text-center">
         <h2 class="text-primary font-bold tracking-widest uppercase mb-16 text-sm">Testimonials</h2>
         <div class="max-w-6xl mx-auto">
            <blockquote class="mb-12">
               <p class="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight font-display tracking-tight">
                    "GlobalTalent helped us find the perfect senior developer in record time. The quality of candidates was unmatched. Highly recommended!"
               </p>
            </blockquote>
            <div class="flex items-center justify-center space-x-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE4g0XMNS3Lr2eKLg0FgQrNzz4oapGKKemIyHQIugvl_6PMf6_G-zShKYWreNv7_x6AkcAqKY6cLnbyHsEzTpJuQaoZ0kObetLUYOs0rV8O_rt7b1_AGTN_LzfUi4MA-9zD7vowqhyvmZ6Ub8pUjmj9NXUdPr1jpt6Fdnx63-2vfc7tiOSzw4WSdTnmBe_KZ87uuqxeWN7Tzve-vtjawnQHaaVVrai2sw8cbKMME31V0SsUFvCEinrf00JVoWwIriZIR4YEMdw4YM" class="h-20 w-20 rounded-full border-4 border-slate-800 object-cover" alt="Alex D.">
              <div class="text-left">
                 <div class="text-xl font-bold text-white">Alex D.</div>
                 <div class="text-lg text-slate-400">CEO at TechInnovate</div>
              </div>
            </div>
         </div>
      </div>
    </div>
    
    <app-footer theme="light" brand="global"></app-footer>
  `
})
export class HomeComponent {}