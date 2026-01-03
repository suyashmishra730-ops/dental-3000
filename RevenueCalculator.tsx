import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Calculator, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export const RevenueCalculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    leadValue: '',
    subscribers: '',
    frequency: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Explicitly construct params to avoid TypeScript/Linter inference issues with Object.entries
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('leadValue', formData.leadValue);
      params.append('subscribers', formData.subscribers);
      params.append('frequency', formData.frequency);

      // Updated to the production webhook URL
      await fetch('https://n8n-642200121.kloudbeansite.com/webhook/4842be54-31cd-4c74-9650-aa5881ee1ac1', {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      // With no-cors, we can't check response.ok. 
      // If the fetch promise resolves, we assume the network request was sent successfully.
      setStatus('success');
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Network error. Please check your connection.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (status === 'success') {
    return (
      <section className="py-24 relative border-t border-white/10 bg-black/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Audit Request Received!</h3>
          <p className="text-gray-400">
            We've analyzed your potential revenue loss. Check your email inbox shortly for the full breakdown and recovery strategy.
          </p>
          <Button variant="outline" className="mt-8" onClick={() => {
            setStatus('idle');
            setFormData({
                name: '',
                email: '',
                phone: '',
                leadValue: '',
                subscribers: '',
                frequency: ''
            });
          }}>
            Calculate Another Practice
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative border-t border-white/10 overflow-hidden" id="calculator">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent pointer-events-none"></div>
       
       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-4">
               <Calculator className="w-3 h-3" />
               <span>Revenue Leakage Audit</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How much is your patient list <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">actually costing you?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Most practices lose substantial revenue by neglecting their existing patient database. 
              Enter your metrics below to see your specific missed revenue.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] relative overflow-hidden">
             
             <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                <div className="pb-2 border-b border-gray-100">
                   <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      Practice Revenue Audit
                   </h3>
                   <p className="text-sm text-gray-500">Fill out the details below to generate your report.</p>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Full Name</label>
                   <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Dr. John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.name}
                      onChange={handleChange}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Email Address</label>
                   <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@dentalpractice.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.email}
                      onChange={handleChange}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                   <input 
                      name="phone"
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.phone}
                      onChange={handleChange}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Average Value Per Lead ($)</label>
                   <input 
                      required
                      name="leadValue"
                      type="number" 
                      placeholder="2500"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.leadValue}
                      onChange={handleChange}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Email Subscribers (Patients)</label>
                   <input 
                      required
                      name="subscribers"
                      type="number" 
                      placeholder="1500"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      value={formData.subscribers}
                      onChange={handleChange}
                   />
                </div>

                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Emails Sent Per Week</label>
                   <div className="relative">
                      <input 
                         required
                         name="frequency"
                         type="number" 
                         placeholder="0"
                         className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                         value={formData.frequency}
                         onChange={handleChange}
                      />
                      <span className="absolute right-4 top-3 text-gray-400 text-sm pointer-events-none">emails/week</span>
                   </div>
                   <p className="text-xs text-gray-500">How many marketing emails do you send per week? (Enter 0 if none)</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                   <Button 
                     type="submit" 
                     variant="secondary" 
                     size="lg" 
                     className="w-full justify-center py-4 text-base shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01]"
                     disabled={status === 'loading'}
                     icon={status === 'loading' ? <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"/> : <Send className="w-4 h-4" />}
                   >
                     {status === 'loading' ? 'Calculating...' : 'Reveal My Missed Revenue'}
                   </Button>
                   
                   {status === 'error' && (
                     <div className="flex flex-col items-center gap-2 mt-4 text-red-600 text-sm justify-center bg-red-50 p-3 rounded-lg border border-red-100">
                       <div className="flex items-center gap-2 font-medium">
                         <AlertCircle className="w-4 h-4" />
                         <span>Submission failed</span>
                       </div>
                       {errorMessage && <span className="text-xs text-red-500 text-center px-4">{errorMessage}</span>}
                       <button 
                         type="button" 
                         onClick={handleSubmit}
                         className="flex items-center gap-1 text-xs text-red-700 underline mt-1 hover:text-red-900"
                       >
                         <RefreshCw className="w-3 h-3" /> Try Again
                       </button>
                     </div>
                   )}
                </div>

             </form>
          </div>
       </div>
    </section>
  );
};