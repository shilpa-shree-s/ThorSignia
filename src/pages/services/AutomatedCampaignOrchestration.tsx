import React from 'react';
import { ArrowRight, Megaphone, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AutomatedCampaignOrchestrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88bf42]/10 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Mobile-only tag line that appears first */}
          <div className="lg:hidden mb-8 flex justify-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
              Marketing Automation Solutions
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Desktop-only tag line (hidden on mobile) */}
              <div className="hidden lg:inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                Marketing Automation Solutions
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                Automated Campaign Orchestration
              </h1>
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Streamline and maximize your marketing efforts with automated campaign orchestration. Our AI unifies messaging across all customer touchpoints, continuously learns and self-optimizes ad campaigns in real-time by adjusting targeting, bids, and creatives, ensuring superior ROI and performance without manual intervention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild
                  className="w-48 sm:w-32 md:w-48 mx-auto sm:mx-0 bg-[#88bf42] text-white rounded-lg px-6 py-3 text-base shadow-lg transition-all duration-300 hover:bg-[#88bf42]/90"
                >
                  <Link to="/contact#contact-form" className="flex items-center">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="w-48 sm:w-32 md:w-48 mx-auto sm:mx-0 border-[#88bf42] text-[#88bf42] rounded-lg px-6 py-3 text-base hover:bg-[#88bf42]/5"
                >
                  <Link to="/services" className="flex items-center">
                    Back to Services
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-[#88bf42]/10 rounded-full blur-xl"></div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative z-10 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-[#88bf42]/10 flex items-center justify-center">
                    <Megaphone className="h-16 w-16 text-[#88bf42]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              Key Benefits
            </h2>
            <p className="text-lg text-[#0f0326]/80">
              Our Automated Campaign Orchestration solution provides numerous advantages for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Unified Messaging</h3>
              <p className="text-gray-700">
                Create consistent, cohesive customer experiences across all touchpoints and channels.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Self-Optimizing Campaigns</h3>
              <p className="text-gray-700">
                AI continuously improves campaign performance by learning from results and adjusting in real-time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Superior ROI</h3>
              <p className="text-gray-700">
                Achieve better results with AI-powered targeting that maximizes your marketing budget efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              How It Works
            </h2>
            <p className="text-lg text-[#0f0326]/80">
              Our automated campaign orchestration system uses advanced AI to transform your marketing efforts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Channel Integration</h3>
                    <p className="text-gray-700">Connect all your marketing channels to our centralized platform.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Campaign Design</h3>
                    <p className="text-gray-700">Set campaign goals and parameters while AI suggests optimal strategies.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Automated Execution</h3>
                    <p className="text-gray-700">The system deploys and manages campaigns across all channels simultaneously.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Real-Time Optimization</h3>
                    <p className="text-gray-700">AI continuously analyzes performance and makes adjustments to maximize results.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[#88bf42]/5 rounded-full blur-xl"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative">
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-bold text-[#0f0326]">Thor Campaign Orchestration Dashboard</div>
                      <div className="text-xs text-[#88bf42]">Live</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Active Campaigns</div>
                        <div className="text-lg font-bold text-[#0f0326]">12</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Audience Reach</div>
                        <div className="text-lg font-bold text-[#0f0326]">24.8K</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Avg. ROI</div>
                        <div className="text-lg font-bold text-[#0f0326]">342%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Email</div>
                        <div className="text-sm font-bold text-[#0f0326]">42%</div>
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                          <div className="h-1 bg-[#88bf42] rounded-full" style={{width: '42%'}}></div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Social</div>
                        <div className="text-sm font-bold text-[#0f0326]">68%</div>
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                          <div className="h-1 bg-[#88bf42] rounded-full" style={{width: '68%'}}></div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Search</div>
                        <div className="text-sm font-bold text-[#0f0326]">53%</div>
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                          <div className="h-1 bg-[#88bf42] rounded-full" style={{width: '53%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#0f0326]">Campaign Performance</div>
                    <div className="text-xs text-green-500">+24% vs. Previous</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#88bf42]/5 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Email</div>
                      <div className="text-sm font-bold text-[#0f0326]">42%</div>
                      <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                        <div className="h-1 bg-[#88bf42] rounded-full" style={{width: '42%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-[#88bf42]/5 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Social</div>
                      <div className="text-sm font-bold text-[#0f0326]">68%</div>
                      <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                        <div className="h-1 bg-[#88bf42] rounded-full" style={{width: '68%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-[#88bf42]/5 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Search</div>
                      <div className="text-sm font-bold text-[#0f0326]">53%</div>
                      <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                        <div className="h-1 bg-[#88bf42] rounded-full" style={{width: '53%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#88bf42]/5 rounded-lg p-4">
                    <div className="text-sm font-bold text-[#0f0326] mb-2">AI Recommendations</div>
                    <div className="text-xs text-gray-700">
                      • Increase budget allocation to social media by 15%<br />
                      • Adjust email send times to 10:00 AM for higher open rates<br />
                      • Update ad creative with more product-focused imagery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#88bf42]/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              Ready to Transform Your Marketing Campaigns?
            </h2>
            <p className="text-lg text-[#0f0326]/80 mb-8">
              Contact us today to learn how our Automated Campaign Orchestration can revolutionize your marketing effectiveness.
            </p>
            
            <Button 
              asChild
              className="bg-[#88bf42] text-white rounded-lg px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:bg-[#88bf42]/90"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AutomatedCampaignOrchestrationPage;
