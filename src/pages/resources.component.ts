import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="crossover"></app-navbar>

    <div class="bg-background-light min-h-screen">
       <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div class="flex flex-col lg:flex-row gap-8 xl:gap-12">
             <!-- Sidebar -->
             <aside class="w-full lg:w-72 shrink-0 space-y-8">
                <div>
                   <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Search</h3>
                   <div class="relative group">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         <span class="material-icons text-gray-400 text-sm">search</span>
                      </div>
                      <input type="text" class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="Search resources...">
                   </div>
                </div>
                <div>
                   <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Categories</h3>
                   <div class="flex flex-col gap-1">
                      <button class="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-50 text-primary font-medium text-sm transition-colors text-left">
                        <span>All Resources</span>
                        <span class="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">42</span>
                      </button>
                      <button class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 text-slate-600 font-medium text-sm transition-colors text-left">
                        <span>Strategy</span>
                        <span class="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-full">12</span>
                      </button>
                      <button class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 text-slate-600 font-medium text-sm transition-colors text-left">
                        <span>Hiring</span>
                        <span class="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-full">8</span>
                      </button>
                   </div>
                </div>
                 <div>
                   <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Popular Topics</h3>
                   <div class="flex flex-wrap gap-2">
                      <span class="cursor-pointer px-3 py-1.5 rounded-md bg-white border border-gray-200 text-slate-600 text-xs font-medium hover:border-primary hover:text-primary transition-colors">Software Architecture</span>
                      <span class="cursor-pointer px-3 py-1.5 rounded-md bg-white border border-gray-200 text-slate-600 text-xs font-medium hover:border-primary hover:text-primary transition-colors">Compensation</span>
                      <span class="cursor-pointer px-3 py-1.5 rounded-md bg-white border border-gray-200 text-slate-600 text-xs font-medium hover:border-primary hover:text-primary transition-colors">Remote Work</span>
                   </div>
                </div>
             </aside>

             <!-- Main Content -->
             <main class="flex-1 min-w-0">
                <section class="mb-10 group cursor-pointer relative rounded-2xl overflow-hidden shadow-xl">
                   <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
                   <div class="w-full h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBL45CyNYl--HemI7ZW7VuMtkDDqFmATJsj7RFGCAW7mGgwukEuXAnYfG4NT9HRv_-yy8P3CBrRuNKfIbtSuou1zUnc3zCmBDGPlSklxTZQDtP5IQCsYxWqobY8a1yh7T_u-ZbNuXleCdZYRc8SgaMW9cAVWferCSsdTcru8vjuI772qVwpoVXdnOpnO3tC4F3CoX8A9dEDJq1khWzs6Id38KyNHAC1apswb6DAJlV9asevomBWN1d_ilfRIsm8g8fLhNhvP5Flwv0');"></div>
                   <div class="absolute bottom-0 top-0 left-0 p-8 z-20 flex flex-col justify-center max-w-2xl">
                      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary text-white text-xs font-bold uppercase tracking-wider w-fit mb-4">
                         <span class="material-icons text-[16px]">star</span> Editor's Pick
                      </span>
                      <h1 class="text-white text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">The Future of Remote Hiring 2024</h1>
                      <p class="text-gray-100 text-lg font-medium mb-6 drop-shadow-md max-w-lg">Comprehensive guide on global salary benchmarks and remote team management strategies for scaling companies effectively in the new digital era.</p>
                      <div>
                         <button class="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            Read Whitepaper <span class="material-icons text-[18px]">arrow_forward</span>
                         </button>
                      </div>
                   </div>
                </section>

                <section class="mb-12">
                   <div class="flex items-center justify-between mb-6">
                      <h2 class="text-slate-900 text-2xl font-bold leading-tight">Latest Insights</h2>
                      <a href="#" class="text-primary text-sm font-semibold hover:underline flex items-center gap-1">View Archive <span class="material-icons text-[16px]">chevron_right</span></a>
                   </div>
                   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <!-- Article 1 -->
                      <article class="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                         <div class="h-48 w-full bg-cover bg-center group-hover:opacity-90 transition-opacity" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlTBjnfmxCZTxBzO8CnMR6cpHfIyrrVvExbJiwArJ6BjSNriv3yc5Sh3ZhkxiMbKn10CfbYR11lv6s5FTPwC0MmJUVi1MCrZ2i4dY7dpchMUAzxDaPLFY9Uwa_cJuap4P5gj7bIHEi_6mYpb9eVITtKEWw8oxB5AVHf7vNoPb3afi7Ozz6Jgqe9nQCvk_N7Io1IrpxKi2rWPsfJ5aVhtENwn98P5TSxcEkuLuRC_AWvDA7dKsTCloBcS92p7RyU6JSbzxbo1wixR0');"></div>
                         <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-3">
                               <span class="text-primary text-xs font-bold uppercase tracking-wide">Hiring</span>
                               <span class="text-gray-300 text-xs">•</span>
                               <span class="text-gray-500 text-xs flex items-center gap-1"><span class="material-icons text-[14px]">schedule</span> 4 min read</span>
                            </div>
                            <h3 class="text-slate-900 font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">Top 1% Talent: How to Identify Them Early</h3>
                            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2">
                               <div class="w-6 h-6 rounded-full bg-gray-200 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv48YN13kL3BAlh3s-SeyW9OxCeqcvgc3qWCTG5ezChuFIeoM0m5-r-2UYnDcji9PvPAMMxJAweAaMsRarbLlt3K_WmXG202ZuXmYxU2oABbJeh1MAckQXPhw3sxdslYg-eSOWO6bftDbF4pCzeCvqujDoKM972v5d9oREdoDsOizYTlzYycgsINjMFwGEzIyTjNmbCHrHzc4egbtm-fVpWvNGrLpba3cQEy2Ux0rAKvggwn2_Hzd8ftZszkX9oUy2dOEy16UDjXE')"></div>
                               <span class="text-xs font-medium text-gray-500">Sarah Jenkins</span>
                            </div>
                         </div>
                      </article>
                       <!-- Article 2 -->
                      <article class="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                         <div class="h-48 w-full bg-cover bg-center group-hover:opacity-90 transition-opacity" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0Vzaz1MDpsj5DRa4aQv32Z9jarrqOWMeBMtFWziYRs-uXncwSy4NxDlBKVAdMhYC96y-mUxWgfAh3ohPkLAnicC4fQvygaankuG6gGO6Zdz4n0R5erAgFSZsUgSfCDEIYhL6vejV8eotvblhz5hBATkg5s6FkgaeBiFKtCb1azo0hb9bQNmINuAmKvZeSG0o9N81wD8gJbDEBqvq_HnGdqNi7Y6qG_15zx2hS_d9HuAHyRKMRJbVBOB1WISJN0aDbrZyY5BiKiYo');"></div>
                         <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-3">
                               <span class="text-primary text-xs font-bold uppercase tracking-wide">Management</span>
                               <span class="text-gray-300 text-xs">•</span>
                               <span class="text-gray-500 text-xs flex items-center gap-1"><span class="material-icons text-[14px]">schedule</span> 6 min read</span>
                            </div>
                            <h3 class="text-slate-900 font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">Async Workflows for Distributed Engineering Teams</h3>
                            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2">
                               <div class="w-6 h-6 rounded-full bg-gray-200 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYW07VWEQsYkIKnWUTePoPE60cJL7ReKnFaQ-yoP9Qmuec3dxq52FaGp6Yf9ncguKBuEl9xEnuoUDbvVemXHvIBtqNbNRvdk19chbb8P0JOwFi0fOlek4wPXJRhveKrK_Upvk54HGXkgifGSRcDRKgm1bYbumsQ_XGpHZJsgYsR0csIDLRFthIhfywmjER0Pi8eSZ0uDx2Gv1hkmdvFkZSrhxht-4NiqkTHYa-rQYV35_r9z0mNQGZajYhTFCXLG2BrwnwNsD3Jxs')"></div>
                               <span class="text-xs font-medium text-gray-500">Mike Ross</span>
                            </div>
                         </div>
                      </article>
                       <!-- Article 3 -->
                      <article class="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                         <div class="h-48 w-full bg-cover bg-center group-hover:opacity-90 transition-opacity" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvVuz2TeeX6r__CkegEI7GxASLjQt9tvqP9vBXPjUUY_xtRs0_FVZlAp1sIGJwMGtUob6w_atpvPV5q7C3Z-e_xYD0v90zOX6qu-nygz4uvF9_wDguRE--6ojhAYAoGw6Q95G9e1bmW9WYUfq-DNVhqHWsVNxEFfq_3EjpZ_ZY2RJugHX2kAl0mXpHbgVZ8_OhkyRF1bsVRhV8cnEQNdmssoKkCbpMTbwC9zSxhluoR0PQRWpkvBTVUM4sEuGZZtY68tsUPbIsaTg');"></div>
                         <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-center gap-2 mb-3">
                               <span class="text-primary text-xs font-bold uppercase tracking-wide">Remote</span>
                               <span class="text-gray-300 text-xs">•</span>
                               <span class="text-gray-500 text-xs flex items-center gap-1"><span class="material-icons text-[14px]">schedule</span> 3 min read</span>
                            </div>
                            <h3 class="text-slate-900 font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">Setting Up Your Home Office for Success</h3>
                            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2">
                               <div class="w-6 h-6 rounded-full bg-gray-200 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFlY_ANMuU4lemty8ZlmQjCQ7tYOjg7-D5XUwcx1HpkgtyPzhPZN92L8HDv-7PqVP2V1bsIfrgpqj_po4qF6Vy4exl85_RUurT59DX6p7iCQshzbMR8rSLyeBPnktQ1zwg8j6o-7vAcKEjcBEgCoTgijptX3CzinlMdsbm3phecAxNTRXklkDvSwGGK02kD2Lrqn-DFwmSsTypF7yF0sWk891aPl-otwHuUOWCVYnM8RwAgYtHs82mxuXLedW-Z9EoWIpQfURK8cE')"></div>
                               <span class="text-xs font-medium text-gray-500">Elena Fisher</span>
                            </div>
                         </div>
                      </article>
                   </div>
                </section>
             </main>
          </div>
       </div>
    </div>
    
    <app-footer theme="light" brand="crossover"></app-footer>
  `
})
export class ResourcesComponent {}