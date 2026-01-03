import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar theme="light" brand="global"></app-navbar>

    <div class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 w-full overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr4WCMUI0uxBgyWVVmnXOB535v6P4utXkQEHdz-1QjmmWMSFL4AbNQP1wCDRtqTYQeJ2SXAJKNlrmug8XmecneJOH2TMWE5eIoZ6n7xtu5KR63ZpiaGVOy2fqowl2qaGNq87LzFDMBPbmP9dOkj7jXG74D1BKu2pdo8ABnsy01S6FnCus7HW1-H1rEJZK_AWdlVzct4XA1r9Vo-TUuNUf3WpBv_4hi9qGq6q09MGWURgb3G6zu-F70OFmbUqGYnTIUGENrOyFGwNg" class="w-full h-full object-cover mix-blend-overlay" alt="network">
      </div>
      <div class="relative w-full px-6 lg:px-12 py-16 lg:py-24 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
         <div class="w-full max-w-4xl text-center mx-auto">
            <span class="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-6">Support Center</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-sm leading-tight">
               How can we help you today?
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-blue-100 font-light leading-relaxed">
               Search our knowledge base or browse categories below to find answers to your questions.
            </p>
            <div class="mt-10 w-full max-w-2xl mx-auto">
               <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                     <span class="material-icons text-slate-400 text-2xl group-focus-within:text-primary transition-colors">search</span>
                  </div>
                  <input type="text" class="block w-full pl-14 pr-4 py-5 border-none rounded-xl leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-lg shadow-xl transition-shadow" placeholder="Search for help topics, e.g. 'Reset Password'...">
                  <div class="absolute inset-y-2 right-2 flex items-center">
                     <button class="hidden sm:block bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-bold text-base transition h-full">Search</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>

    <div class="w-full px-6 lg:px-12 py-16 lg:py-24 bg-background-light">
      <div class="max-w-7xl mx-auto">
         <div class="mb-16">
            <h2 class="text-2xl font-bold text-slate-900 mb-8">Popular Topics</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
               <a href="#" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-all group flex items-start gap-4">
                  <div class="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                     <span class="material-icons">account_circle</span>
                  </div>
                  <div>
                     <h3 class="font-semibold text-slate-900 group-hover:text-primary transition-colors">Account Management</h3>
                     <p class="text-sm text-slate-500 mt-1">Update profile, change password, security settings.</p>
                  </div>
               </a>
                <a href="#" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-all group flex items-start gap-4">
                  <div class="flex-shrink-0 h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                     <span class="material-icons">payments</span>
                  </div>
                  <div>
                     <h3 class="font-semibold text-slate-900 group-hover:text-primary transition-colors">Billing & Payments</h3>
                     <p class="text-sm text-slate-500 mt-1">Invoices, payment methods, tax information.</p>
                  </div>
               </a>
                <a href="#" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-all group flex items-start gap-4">
                  <div class="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                     <span class="material-icons">work</span>
                  </div>
                  <div>
                     <h3 class="font-semibold text-slate-900 group-hover:text-primary transition-colors">Job Applications</h3>
                     <p class="text-sm text-slate-500 mt-1">Status updates, application tips, interview prep.</p>
                  </div>
               </a>
            </div>
         </div>
         
         <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2 space-y-12">
               <section>
                  <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                     <span class="material-icons text-primary">school</span> For Candidates
                  </h2>
                  <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                     <div class="divide-y divide-slate-100">
                        <a href="#" class="block p-6 hover:bg-slate-50 transition flex justify-between items-center group">
                           <div>
                              <h3 class="font-semibold text-slate-900">Getting Started as a Remote Worker</h3>
                              <p class="text-slate-500 text-sm mt-1">Complete guide to setting up your profile and finding your first job.</p>
                           </div>
                           <span class="material-icons text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                        </a>
                        <a href="#" class="block p-6 hover:bg-slate-50 transition flex justify-between items-center group">
                           <div>
                              <h3 class="font-semibold text-slate-900">Skills Assessment Process</h3>
                              <p class="text-slate-500 text-sm mt-1">Understanding our vetting process and how to prepare.</p>
                           </div>
                           <span class="material-icons text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                        </a>
                     </div>
                  </div>
               </section>
                <section>
                  <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                     <span class="material-icons text-indigo-600">business</span> For Employers
                  </h2>
                  <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                     <div class="divide-y divide-slate-100">
                        <a href="#" class="block p-6 hover:bg-slate-50 transition flex justify-between items-center group">
                           <div>
                              <h3 class="font-semibold text-slate-900">Posting a New Role</h3>
                              <p class="text-slate-500 text-sm mt-1">Step-by-step guide to creating effective job descriptions.</p>
                           </div>
                           <span class="material-icons text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                        </a>
                        <a href="#" class="block p-6 hover:bg-slate-50 transition flex justify-between items-center group">
                           <div>
                              <h3 class="font-semibold text-slate-900">Reviewing Candidates</h3>
                              <p class="text-slate-500 text-sm mt-1">How to use our dashboard to filter and interview top talent.</p>
                           </div>
                           <span class="material-icons text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                        </a>
                     </div>
                  </div>
               </section>
            </div>
            
            <div class="lg:col-span-1 space-y-8">
               <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-lg">
                  <h3 class="text-xl font-bold mb-4">Still need help?</h3>
                  <p class="text-slate-300 mb-6">Our support team is available 24/7 to assist you with any questions.</p>
                  <button class="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-lg transition shadow-md flex justify-center items-center gap-2">
                     <span class="material-icons text-sm">chat</span> Contact Support
                  </button>
                  <div class="mt-6 text-center text-xs text-slate-400 border-t border-slate-700 pt-4">
                     Typical response time: <span class="text-green-400 font-medium">< 15 mins</span>
                  </div>
               </div>
               
               <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <h3 class="text-lg font-bold text-slate-900 mb-4">Frequently Asked</h3>
                  <ul class="space-y-3">
                     <li><a href="#" class="text-primary hover:underline text-sm font-medium">How do I verify my identity?</a></li>
                     <li><a href="#" class="text-primary hover:underline text-sm font-medium">Why was my application declined?</a></li>
                     <li><a href="#" class="text-primary hover:underline text-sm font-medium">Can I apply for multiple jobs?</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
    
    <app-footer theme="light" brand="global"></app-footer>
  `
})
export class HelpComponent {}