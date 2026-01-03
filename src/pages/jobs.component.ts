import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="global"></app-navbar>

    <main class="relative">
      <!-- Hero Section adapted to Blue Theme -->
      <section class="relative h-[400px] lg:h-[450px] flex flex-col justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3DsCGsg0_bEz4mkU0LWA8I9mXvElteOEHVotAX_mxKJFRkhYP-6R2AwYFAwrGW3s54iZaAiExiXSD5j7hIx4g60uL3RgyKGtT9Vqgw2BSaEobwzcOBLDDic_t2c1DAodi1cVlSKnDaYvRxvTd9be6psZDBphQKUAa3DL-ZayWDCu2sefVZVkhbvnG8NWEPBtPTUGDkpuxqsOkQSEdb9F3o9aWl4WIxrELP2J9yhyvfBuxz7zfF1CfEgPRoczTVAOadKX-XTxzdSc" class="w-full h-full object-cover object-center" alt="hero">
           <!-- Changed gradient to Blue/Indigo -->
           <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/80"></div>
        </div>
        
        <div class="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
           <nav class="flex items-center gap-2 text-xs md:text-sm text-blue-200 mb-6 font-medium tracking-wide">
             <a href="#" class="hover:text-white transition-colors">Home</a>
             <span class="text-blue-300">/</span>
             <span class="text-white">Current Openings</span>
           </nav>
           
           <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
             <div class="max-w-2xl">
               <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">Current Openings</h1>
               <p class="text-base md:text-lg text-blue-100 leading-relaxed font-light max-w-xl mb-8">
                  Match with world-class jobs at silicon valley software and EdTech companies. Earn USD from anywhere with a full-time remote job.
               </p>
               
               <div class="bg-white/10 backdrop-blur border border-white/30 rounded-full p-2 pl-6 pr-2 flex items-center justify-between max-w-sm w-full transition-all hover:bg-white/20 cursor-pointer group">
                  <div class="flex flex-col justify-center gap-0.5">
                     <div class="text-white text-base font-medium">Meet Kavya</div>
                     <div class="flex flex-wrap items-center gap-x-3 text-xs text-blue-200">
                        <div class="flex items-center gap-1"><span class="material-icons text-[14px]">location_on</span> India</div>
                        <div class="flex items-center gap-1"><span class="material-icons text-[14px]">work</span> Software Engineer</div>
                     </div>
                  </div>
                  <!-- Changed button color to Primary Blue -->
                  <button class="bg-white text-primary rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span class="material-icons">play_arrow</span>
                  </button>
               </div>
             </div>
           </div>
        </div>
      </section>

      <section class="bg-background-light py-8 lg:py-12 min-h-screen">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-8">
               <aside class="w-full lg:w-72 flex-shrink-0 space-y-8">
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                     <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Keywords</h3>
                     <div class="relative">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><span class="material-icons text-lg">search</span></span>
                        <input type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Job title, keywords...">
                     </div>
                  </div>
                  
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                     <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex justify-between items-center">
                        Job Category <span class="material-icons text-gray-400 text-sm">remove</span>
                     </h3>
                     <div class="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                        <label class="flex items-center gap-3 cursor-pointer group">
                           <input type="checkbox" class="form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary">
                           <span class="text-sm text-slate-600 group-hover:text-primary transition-colors">Software Engineering</span>
                           <span class="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">42</span>
                        </label>
                         <label class="flex items-center gap-3 cursor-pointer group">
                           <input type="checkbox" class="form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary">
                           <span class="text-sm text-slate-600 group-hover:text-primary transition-colors">Product Management</span>
                           <span class="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">12</span>
                        </label>
                     </div>
                  </div>
               </aside>

               <div class="flex-1">
                  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                     <h2 class="text-xl font-semibold text-slate-900">Showing <span class="text-primary">82</span> Jobs</h2>
                     <div class="flex items-center gap-2">
                        <span class="text-sm text-gray-500">Sort by:</span>
                        <select class="form-select py-1 pl-3 pr-8 border-gray-300 bg-white text-sm rounded-md focus:ring-primary focus:border-primary">
                           <option>Most Relevant</option>
                           <option>Newest First</option>
                           <option>Salary High to Low</option>
                        </select>
                     </div>
                  </div>

                  <div class="grid gap-4">
                     <!-- Job Card 1 -->
                     <div class="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 p-6 transition-all duration-200 group">
                        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                           <div class="flex-1">
                              <div class="flex items-center gap-2 mb-1">
                                 <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">New</span>
                                 <span class="text-xs text-gray-500 flex items-center gap-1"><span class="material-icons text-[12px]">schedule</span> Posted 2 days ago</span>
                              </div>
                              <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">Senior Java Chief Architect</h3>
                              <p class="text-slate-600 text-sm line-clamp-2 mb-4">We are looking for a deep technical expert to lead architectural decisions for our high-scale enterprise cloud products.</p>
                              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                 <div class="flex items-center gap-1"><span class="material-icons text-base text-gray-400">business</span> Enterprise Software</div>
                                 <div class="flex items-center gap-1"><span class="material-icons text-base text-gray-400">public</span> Remote (Global)</div>
                              </div>
                           </div>
                           <div class="flex flex-col items-start md:items-end gap-3 min-w-[140px]">
                              <div class="text-lg font-bold text-slate-900">$100,000<span class="text-sm font-normal text-gray-500">/yr</span></div>
                              <button class="w-full px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded transition-colors shadow-sm">Apply Now</button>
                           </div>
                        </div>
                     </div>
                     
                     <!-- Job Card 2 -->
                     <div class="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 p-6 transition-all duration-200 group">
                        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                           <div class="flex-1">
                              <div class="flex items-center gap-2 mb-1">
                                 <span class="text-xs text-gray-500 flex items-center gap-1"><span class="material-icons text-[12px]">schedule</span> Posted 5 days ago</span>
                              </div>
                              <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">VP of Engineering</h3>
                              <p class="text-slate-600 text-sm line-clamp-2 mb-4">Manage a portfolio of software products and lead a team of 100+ engineers.</p>
                              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                 <div class="flex items-center gap-1"><span class="material-icons text-base text-gray-400">business</span> Software Leadership</div>
                                 <div class="flex items-center gap-1"><span class="material-icons text-base text-gray-400">public</span> Remote (Global)</div>
                              </div>
                           </div>
                           <div class="flex flex-col items-start md:items-end gap-3 min-w-[140px]">
                              <div class="text-lg font-bold text-slate-900">$200,000<span class="text-sm font-normal text-gray-500">/yr</span></div>
                              <button class="w-full px-4 py-2 bg-white border border-gray-300 text-slate-700 hover:border-primary hover:text-primary text-sm font-semibold rounded transition-colors">See Details</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div class="pt-8 flex justify-center">
                     <button class="px-6 py-3 bg-white border border-gray-300 rounded text-sm font-semibold text-slate-700 hover:bg-gray-50 transition-colors shadow-sm">Load More Jobs</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </main>
    
    <div class="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center pointer-events-none">
       <div class="bg-white w-full max-w-4xl rounded-t-xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] p-6 relative border-t border-x border-gray-200 pointer-events-auto">
          <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><span class="material-icons text-xl">close</span></button>
          <div class="flex flex-col md:flex-row items-center gap-6">
             <div class="flex-1">
                <h4 class="text-sm font-bold text-slate-900 mb-1">Cookie Policy</h4>
                <p class="text-xs text-slate-600 leading-relaxed">By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.</p>
             </div>
             <div class="flex items-center gap-3 w-full md:w-auto">
                <button class="flex-1 md:flex-none py-2 px-4 rounded border border-gray-300 text-slate-600 font-medium text-xs hover:bg-gray-50">Preferences</button>
                <button class="flex-1 md:flex-none py-2 px-4 rounded bg-primary text-white font-medium text-xs hover:bg-primary-hover shadow-md">Accept All</button>
             </div>
          </div>
       </div>
    </div>
    
    <app-footer theme="light" brand="global"></app-footer>
  `
})
export class JobsComponent {}