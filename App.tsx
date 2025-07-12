import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Globe, 
  Users, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Bot,
  Languages,
  Database,
  Webhook,
  Menu,
  X,
  ChevronDown,
  Target,
  BarChart3,
  Headphones,
  Award,
  Sparkles,
  Brain,
  Rocket,
  DollarSign,
  Timer,
  UserCheck,
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const changingWords = [
    "Inquiries 24/7",
    "Client Questions",
    "Visa Applications", 
    "Document Requests",
    "Appointment Booking",
    "Lead Qualification"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins overflow-x-hidden">
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      <div className="custom-cursor-dot"></div>

      

    <div className="flex items-center">
  <div className="w-10 h-10 mr-3">
    <img
      src="https://jmp.sh/Kj2FpSgisEDWoPnrENnd"
      alt="OptuneXAI Logo"
      className="h-full w-full object-contain"
    />
  </div>
  <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
    OptuneXAI
  </span>
</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-300 hover:text-purple-400 transition-colors">Solutions</a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">Reviews</a>
            </div>

<div className="hidden md:flex items-center space-x-4">
  <a href="https://wa.link/32be5y" target="_blank" rel="noopener noreferrer">
    <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
      🔥 Free Demo
    </button>
  </a>
  <a href="https://calendly.com/dhruvgupta-me/1hr" target="_blank" rel="noopener noreferrer">
    <button className="border border-purple-500 text-purple-400 px-6 py-3 rounded-xl font-medium hover:bg-purple-500/10 transition-all duration-300">
      📞 Book Call
    </button>
  </a>
</div>


            {/* Mobile Menu Button */}
      <div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
       </div>

<>
  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
    <div className="px-4 py-6 space-y-4">
      <a href="#features" className="block text-gray-300 hover:text-purple-400 transition-colors">Features</a>
      <a href="#solutions" className="block text-gray-300 hover:text-purple-400 transition-colors">Solutions</a>
      <a href="#pricing" className="block text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
      <a href="#testimonials" className="block text-gray-300 hover:text-purple-400 transition-colors">Reviews</a>
      
      <div className="pt-4 space-y-3">
        <a href="https://wa.link/32be5y" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-medium">
            🔥 Free Demo
          </button>
        </a>
        <a href="https://calendly.com/dhruvgupta-me/1hr" target="_blank" rel="noopener noreferrer">
          <button className="w-full border border-purple-500 text-purple-400 px-6 py-3 rounded-xl font-medium">
            📞 Book Call
          </button>
        </a>
      </div>
    </div>
  </div>
)}


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/10 via-transparent to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Immigration Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Let AI Handle</span>
                <span className="block text-white">Immigration</span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-text-shimmer">
                  {changingWords[currentWord]}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                From lead filtering to booking, our AI bots work so you don't have to. 
                <span className="text-purple-400 font-semibold"> Automate your practice</span> and focus on what matters most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
  <a href="https://wa.link/32be5y" target="_blank" rel="noopener noreferrer">
    <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center">
      🔥 Start Free Demo
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>
  <a href="https://calendly.com/dhruvgupta-me/1hr" target="_blank" rel="noopener noreferrer">
    <button className="group border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center">
      📞 Discovery Call
      <Phone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
    </button>
  </a>
</div>

              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="text-2xl">🇨🇦</span>
                    <span className="text-2xl">🇦🇺</span>
                    <span className="text-2xl">🇬🇧</span>
                  </div>
                  <span>Global Immigration Support</span>
                </div>
              </div>
            </div>
            
            {/* Chat Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-6 max-w-md mx-auto border border-purple-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">OptuneXAI Chat</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <span className="ml-2 font-medium text-white">AI Assistant</span>
                    </div>
                    <p className="text-white/90 mb-3">Hi! I'm here to help with your immigration questions. What would you like to know about visa requirements?</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">Work Visa</button>
                      <button className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">Student Visa</button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gray-800 rounded-2xl p-3 max-w-xs">
                      <p className="text-gray-200 text-sm">I need help with Express Entry requirements for Canada</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-4">
                    <p className="text-white/90 text-sm">Perfect! I can help you with that. Let me gather some information and schedule a consultation with our expert...</p>
                    <div className="mt-3 flex items-center text-white/70 text-xs">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white/70 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-white/70 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1 h-1 bg-white/70 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="ml-2">AI is typing...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-400 font-medium">Immigration Firms</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                300%
              </div>
              <div className="text-gray-400 font-medium">Lead Increase</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-400 font-medium">Availability</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                70%
              </div>
              <div className="text-gray-400 font-medium">Task Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-red-600/10 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Stop Losing Clients to</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Manual Processes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immigration consultants lose <span className="text-red-400 font-bold">60% of potential clients</span> due to slow response times. OptuneXAI changes everything.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <Clock className="h-8 w-8 mr-3" />
                  The Problem
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-red-200">Manual replies take hours, clients move on to competitors</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-red-200">Slow follow-ups result in 70% lead loss within 24 hours</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-red-200">Staff overwhelmed with repetitive questions daily</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-red-200">Missed opportunities after business hours cost thousands</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center">
                  <Zap className="h-8 w-8 mr-3" />
                  The Solution
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-200">Instant responses 24/7, never miss a lead again</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-200">Automated follow-ups increase conversion by 300%</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-200">AI handles 80% of routine inquiries automatically</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-200">Global reach with multilingual support in 50+ languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Powerful AI Features</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Built for Immigration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every feature designed specifically for immigration consultants' unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Smart Document Collection",
                description: "Automatically guide clients through document requirements and collect necessary files for their visa applications with AI validation.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Languages,
                title: "Multilingual Support",
                description: "Communicate with clients in their preferred language. Support for 50+ languages including Hindi, Mandarin, Spanish, and more.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Database,
                title: "CRM Integration",
                description: "Seamlessly sync with your existing CRM. Auto-populate client data and track interactions across all touchpoints.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Smartphone,
                title: "WhatsApp Integration",
                description: "Meet clients where they are. Full WhatsApp Business API integration for seamless communication and instant responses.",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "AI-powered appointment booking that considers time zones, availability, and consultation types automatically.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Brain,
                title: "Intelligent Routing",
                description: "Smart lead qualification and routing to the right consultant based on expertise, availability, and client needs.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="solutions" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Automate Every Part</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">of Your Practice</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From first contact to final approval, OptuneXAI handles it all
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Qualification & Filtering",
                gradient: "from-purple-600/20 to-purple-800/10",
                border: "border-purple-500/30",
                items: [
                  "Automatically assess client eligibility with AI scoring",
                  "Score leads based on visa probability and success rate",
                  "Route high-value prospects to senior consultants",
                  "Filter out unqualified inquiries to save time"
                ]
              },
              {
                title: "Visa FAQ & Information Hub",
                gradient: "from-blue-600/20 to-blue-800/10",
                border: "border-blue-500/30",
                items: [
                  "Answer complex visa questions instantly with accuracy",
                  "Provide country-specific requirements and updates",
                  "Update with latest immigration laws automatically",
                  "Multilingual support for global client base"
                ]
              },
              {
                title: "Smart Appointment Scheduling",
                gradient: "from-green-600/20 to-green-800/10",
                border: "border-green-500/30",
                items: [
                  "Intelligent calendar management with conflict resolution",
                  "Time zone optimization for international clients",
                  "Automated reminders and confirmation sequences",
                  "Reschedule and cancellation handling with rebooking"
                ]
              },
              {
                title: "Client Reactivation Campaigns",
                gradient: "from-orange-600/20 to-orange-800/10",
                border: "border-orange-500/30",
                items: [
                  "Re-engage dormant clients with personalized outreach",
                  "Automated follow-up campaigns based on client journey",
                  "Status update notifications for ongoing applications",
                  "Renewal and extension reminders with scheduling"
                ]
              }
            ].map((useCase, index) => (
              <div key={index} className={`bg-gradient-to-br ${useCase.gradient} border ${useCase.border} rounded-2xl p-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>
                <div className="space-y-4">
                  {useCase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & ROI Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Proven Results That</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Drive Revenue</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join 500+ immigration consultants who've transformed their practice with measurable results
            </p>
          </div>
          
          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-purple-500/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Calculate Your ROI</h3>
              <p className="text-gray-300">See how much OptuneXAI can save and earn for your practice</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 mb-4">
                  <DollarSign className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">$15,000</div>
                  <div className="text-red-100">Monthly Lost Revenue</div>
                </div>
                <p className="text-gray-400 text-sm">From missed leads & slow responses</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 mb-4">
                  <Rocket className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">$45,000</div>
                  <div className="text-purple-100">Monthly Potential</div>
                </div>
                <p className="text-gray-400 text-sm">With OptuneXAI automation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 mb-4">
                  <TrendingUp className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">$30,000</div>
                  <div className="text-green-100">Monthly ROI</div>
                </div>
                <p className="text-gray-400 text-sm">Net increase in revenue</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "300%", label: "Lead Conversion Increase", icon: Target },
              { metric: "70%", label: "Task Reduction", icon: Timer },
              { metric: "24/7", label: "Availability", icon: Clock },
              { metric: "50+", label: "Languages Supported", icon: Languages }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">What Our Clients</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Are Saying</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from immigration consultants who transformed their practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Immigration Consultant",
                location: "Toronto, Canada",
                rating: 5,
                testimonial: "OptuneXAI transformed our practice completely. We went from manually handling 50 inquiries per day to our AI managing 200+ with perfect accuracy. Our conversion rate doubled in just 3 months.",
                results: "200% increase in leads"
              },
              {
                name: "Rajesh Patel",
                role: "Immigration Law Firm Owner",
                location: "Vancouver, Canada",
                rating: 5,
                testimonial: "The WhatsApp integration is absolutely game-changing. Clients love the instant responses, and we've reduced our administrative workload by 80%. ROI was immediate and substantial.",
                results: "80% workload reduction"
              },
              {
                name: "Maria Rodriguez",
                role: "Senior Immigration Advisor",
                location: "Sydney, Australia",
                rating: 5,
                testimonial: "I was skeptical about AI handling complex immigration queries, but OptuneXAI exceeded all expectations. It handles 90% of initial consultations perfectly, letting me focus on complex cases.",
                results: "90% automation rate"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-200 mb-6 text-lg leading-relaxed">"{testimonial.testimonial}"</p>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-4 mb-6">
                  <div className="text-purple-300 font-semibold">{testimonial.results}</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Get Started in</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From setup to success in just 48 hours with full support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Discovery Call",
                description: "We analyze your current process and identify automation opportunities tailored specifically to your practice and client base.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                step: "02",
                icon: Bot,
                title: "Custom AI Build",
                description: "Our team builds and trains your personalized AI bot with your specific immigration expertise, workflows, and brand voice.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                step: "03",
                icon: Rocket,
                title: "Launch & Scale",
                description: "Go live with full support and training. Watch your practice grow with automated lead generation and client management.",
                gradient: "from-green-500 to-green-600"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can OptuneXAI be set up for my practice?",
                answer: "Most clients are up and running within 48-72 hours. Our team handles the entire setup process, including AI training with your specific immigration expertise and integration with your existing systems."
              },
              {
                question: "Does the AI understand complex immigration law?",
                answer: "Yes! Our AI is specifically trained on immigration law for multiple countries and is continuously updated with the latest regulations. It can handle 90% of common inquiries and seamlessly escalates complex cases to your team."
              },
              {
                question: "Can I customize the AI's responses to match my brand?",
                answer: "Absolutely. We train the AI with your specific tone, terminology, and brand voice. You can also customize response templates and approval workflows to match your practice's standards."
              },
              {
                question: "What happens if the AI can't answer a question?",
                answer: "The AI is designed to recognize when it needs human intervention. It will gracefully escalate complex queries to your team while keeping the client informed about the handoff process."
              },
              {
                question: "Is my client data secure and compliant?",
                answer: "Security is our top priority. We're SOC 2 compliant, use enterprise-grade encryption, and follow all data protection regulations including GDPR and PIPEDA for Canadian practices."
              },
              {
                question: "Can I try OptuneXAI before committing?",
                answer: "Yes! We offer a 14-day free trial with full access to all features. You can also book a personalized demo to see exactly how it would work for your specific practice."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    {index + 1}
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-800/20 to-blue-600/30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="text-white">Don't Let Another</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Lead Slip Away</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            While you're manually handling inquiries, your competitors are capturing clients 24/7 with AI. 
            <span className="text-purple-400 font-semibold"> Join the revolution today.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
  <a href="https://calendly.com/dhruvgupta-me/1hr" target="_blank" rel="noopener noreferrer">
    <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center">
      🔥 Start Your Free Trial
      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
    </button>
  </a>
  <a href="https://wa.link/32be5y" target="_blank" rel="noopener noreferrer">
    <button className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center">
      💬 Chat on WhatsApp
      <MessageCircle className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
    </button>
  </a>
</div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>24*7 Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>1 setup fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>300% ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                  OptuneXAI
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                AI-powered automation for immigration consultants worldwide. Transform your practice with intelligent automation.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Shield className="h-4 w-4 text-green-400" />
                <span>SOC 2 Compliant & Secure</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Support</a></li>
                <li><a href="https://calendly.com/dhruvgupta-me/1hr" className="hover:text-purple-400 transition-colors">Book Demo</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Training Resources</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Status Page</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:support@optunexai.com" className="hover:text-purple-400 transition-colors">
                    optunexai@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+15551234567" className="hover:text-purple-400 transition-colors">
                    +91 9752528577
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Navlakha, Indore</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <a href="https://wa.link/32be5y" className="hover:text-purple-400 transition-colors">
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 OptuneXAI. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
