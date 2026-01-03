import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="crossover"></app-navbar>

    <div class="w-full relative h-[500px] overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style='background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJsqdES7PaktJP71eoOGYZWPDlDnanxcgmFJ9UivhISQz71oXC-x6p-ZZVACZnAMopw2v5utVgbEwZjior3bGmam6AZ7uVaO952f-Sbw1LMvRtwSomBeE2YkkMDL8RUpGMjK2HBe_NcOqzxNdcjx1Ui2ryTe7ub78ymz8MUrn0hin8xTG8OU8Go5iMAnw0ab5jO4dDuTZ3DCq9mI9YPDbcdG56EBq2ZX8e5GndyE_-EDsL3D2X49jDFw2OPdsVAvPcc-uRuYkj9BA");'></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div class="max-w-3xl">
          <h1 class="text-white tracking-tight text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-6">Connecting the world's top talent with leading companies</h1>
          <p class="text-white/90 text-xl md:text-2xl font-normal max-w-2xl leading-relaxed">
             Redefining the future of work by bridging the gap between exceptional global talent and high-growth opportunities.
          </p>
        </div>
      </div>
    </div>

    <section class="w-full bg-white py-16 md:py-24">
       <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div>
            <span class="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Mission</span>
            <h2 class="text-[#111318] tracking-tight text-4xl font-bold leading-tight mb-6">Talent is universal,<br/> opportunity is not.</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
               We believe that the best people shouldn't be limited by geography. We're building a bridge that connects the top 1% of global talent with companies that are changing the world. By removing borders, we unlock potential and drive innovation at an unprecedented scale.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
               <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span class="material-icons text-primary text-3xl">public</span>
                  <div>
                    <p class="font-bold text-xl">130+</p>
                    <p class="text-sm text-gray-500">Countries</p>
                  </div>
               </div>
               <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span class="material-icons text-primary text-3xl">groups</span>
                  <div>
                    <p class="font-bold text-xl">500K+</p>
                    <p class="text-sm text-gray-500">Talent Pool</p>
                  </div>
               </div>
               <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span class="material-icons text-primary text-3xl">handshake</span>
                  <div>
                    <p class="font-bold text-xl">10K+</p>
                    <p class="text-sm text-gray-500">Hires Made</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
           <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#135bec 1.5px, transparent 1.5px); background-size: 24px 24px;"></div>
           <div class="relative w-3/4 h-3/4 bg-contain bg-no-repeat bg-center opacity-80" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV7X6y_JEO9r6vHMxT0JIocKVkhjnUqak35lPsKTv2eaNGXGpMKwKXQeD1llau88PNMkO0xvqTsCBK-y7m7rMagEiQdac4d4Fi2HkNuNrz-cG1NrzU9RSd7NIrsQKPwGswYkg2pSzA0mlcrbzDXF0TRLhl5TeufFZclnoA6HfKNY3hN17ew7-P7p0sNnesE-DS88TURWbpRlFjZfIZ5FP-RJzzhB5exS3ZXqUtC1NApa-mZhuLnzfYOwP0TxHPU5niuiWYhvYdpW0');">
             <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
             <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full"></div>
             <div class="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full animate-ping delay-75"></div>
             <div class="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full"></div>
           </div>
           <div class="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs border border-gray-100">
              <p class="font-bold text-sm mb-1">Truly Global Reach</p>
              <p class="text-xs text-gray-500">Candidates placed in over 130 countries, creating a borderless workforce.</p>
           </div>
         </div>
       </div>
    </section>

    <section class="w-full bg-gray-50 py-20 border-y border-gray-100">
       <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
             <h2 class="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
             <p class="text-gray-600 text-lg">Our process is designed for speed and quality, ensuring the perfect match every time.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-6">
                 <span class="material-icons text-3xl">fact_check</span>
               </div>
               <h3 class="text-xl font-bold mb-3">Rigorous Vetting</h3>
               <p class="text-gray-600 leading-relaxed">We receive thousands of applications. Only the top 1% pass our cognitive, language, and technical assessments, ensuring you get world-class talent.</p>
             </div>
             <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-6">
                 <span class="material-icons text-3xl">psychology</span>
               </div>
               <h3 class="text-xl font-bold mb-3">AI Matching</h3>
               <p class="text-gray-600 leading-relaxed">Our proprietary AI analyzes thousands of data points to match candidates to roles where they will thrive, significantly reducing turnover and boosting productivity.</p>
             </div>
             <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-6">
                 <span class="material-icons text-3xl">rocket_launch</span>
               </div>
               <h3 class="text-xl font-bold mb-3">Instant Hiring</h3>
               <p class="text-gray-600 leading-relaxed">Companies can hire pre-vetted talent in less than 48 hours. We eliminate the wasted time of traditional interviewing processes.</p>
             </div>
          </div>
       </div>
    </section>
    
    <app-footer theme="light" brand="crossover"></app-footer>
  `
})
export class AboutComponent {}