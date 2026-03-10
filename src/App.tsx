import { motion } from "motion/react";
import { Download, Gamepad2, Trophy, ShieldCheck, Zap, ChevronRight, Star, CheckCircle2, Smartphone, Flag, Swords, Users, Target } from "lucide-react";

// Reusable Button Component to ensure consistency across the app
const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon }: any) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-brand-500 text-dark-900 hover:bg-brand-400 shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]",
    secondary: "bg-dark-800 text-white border border-white/10 hover:bg-dark-700 hover:border-white/20",
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default function App() {
  const handleDownload = () => {
    // Open Google Drive download link
    window.open("https://drive.google.com/uc?export=download&id=1zSSYeK8JY4GQOMhnEuZ0odb0bSiC164w", "_blank");
  };

  const handleVisitSite = () => {
    window.open("https://sabmilega.vercel.app", "_blank");
  };

  return (
    <div className="min-h-screen bg-dark-900 font-sans selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.3)]">
              <Gamepad2 className="w-6 h-6 text-dark-900" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">SM EARN</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://sabmilega.vercel.app" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Visit Site
            </a>
            <Button onClick={handleVisitSite} className="hidden sm:flex">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 font-medium text-sm mb-6">
                <Flag className="w-4 h-4 text-brand-500" />
                <span>India's #1 Gaming App</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Play Free Fire <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
                  & Win Cash
                </span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                Play Free Fire (CS, BR, 1vs1, Duo, Squad), Bingo, and Tic Tac Toe. No entry fees, instant UPI withdrawals. Download the official SM EARN app now.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button onClick={handleDownload} icon={Download} className="w-full sm:w-auto text-lg px-8 py-4">
                  DOWNLOAD (17 MB)
                </Button>
                <a href="https://sabmilega.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full text-lg px-8 py-4">
                    Visit Site
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-6 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>100% Safe & Secure</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[320px] lg:max-w-none lg:w-[400px]"
            >
              {/* Abstract Phone Mockup */}
              <div className="relative aspect-[9/19] bg-dark-800 rounded-[3rem] border-8 border-dark-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-6 bg-dark-700 rounded-b-3xl w-1/2 mx-auto z-20" />
                
                {/* App UI Mockup */}
                <div className="absolute inset-0 bg-dark-900 p-6 pt-12 flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-brand-500" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Balance</div>
                      <div className="font-bold text-brand-500">₹1,250</div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-800 rounded-2xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Live Matches</span>
                      <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-md font-medium">LIVE</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Free Fire Clash Squad", prize: "₹500", icon: Swords },
                        { name: "Free Fire Battle Royale", prize: "₹2000", icon: Users },
                        { name: "Bingo Special", prize: "₹1000", icon: Target }
                      ].map((match, i) => (
                        <div key={i} className="bg-dark-700 p-3 rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
                              <match.icon className="w-5 h-5 text-brand-500" />
                            </div>
                            <div>
                              <div className="text-sm font-bold">{match.name}</div>
                              <div className="text-xs text-gray-400">Free Entry</div>
                            </div>
                          </div>
                          <div className="text-brand-500 font-bold text-sm">{match.prize}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="w-full bg-brand-500 text-dark-900 text-center py-3 rounded-xl font-bold text-sm">
                      Join Next Match
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-8 top-20 bg-dark-800 p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Prize Pool</div>
                  <div className="font-bold text-lg">₹10,000</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Popular Games</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Compete in your favorite games and win real cash daily.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Fire Card */}
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" alt="Free Fire" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-4xl font-black mb-2 tracking-wide text-white drop-shadow-lg">FREE FIRE</h3>
                <p className="text-gray-200 text-sm mb-6 font-medium drop-shadow">Experience the ultimate survival shooter. Compete in high-stakes matches and prove your skills.</p>
                <Button onClick={handleVisitSite} className="w-full" variant="primary">Play Now</Button>
              </div>
            </div>
            {/* Bingo Card */}
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <img src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80" alt="Bingo" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-4xl font-black mb-2 tracking-wide text-white drop-shadow-lg">BINGO</h3>
                <p className="text-gray-200 text-sm mb-6 font-medium drop-shadow">Classic multiplayer Bingo with a modern twist. Win real cash prizes daily.</p>
                <Button onClick={handleVisitSite} className="w-full" variant="secondary">Play Now</Button>
              </div>
            </div>
            {/* Tic Tac Toe Card */}
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <img src="https://images.unsplash.com/photo-1611996575749-79a3a250f563?auto=format&fit=crop&q=80" alt="Tic Tac Toe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-4xl font-black mb-2 tracking-wide text-white drop-shadow-lg">TIC TAC TOE</h3>
                <p className="text-gray-200 text-sm mb-6 font-medium drop-shadow">Quick 1v1 matches. Outsmart your opponent in this timeless classic.</p>
                <Button onClick={handleVisitSite} className="w-full" variant="secondary">Play Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark-800/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Why Play on SM EARN?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience the best competitive gaming platform built for players.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Free Entry",
                desc: "Never pay to play. All our tournaments are 100% free to enter with real cash prizes."
              },
              {
                icon: Trophy,
                title: "Daily Tournaments",
                desc: "Compete in multiple tournaments every single day across your favorite games."
              },
              {
                icon: ShieldCheck,
                title: "Instant Withdrawals",
                desc: "Won a tournament? Withdraw your winnings instantly to your preferred payment method."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800 p-8 rounded-3xl border border-white/5 hover:border-brand-500/30 transition-colors"
              >
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Install */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-dark-800 rounded-[3rem] p-8 sm:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">How to Install SM EARN</h2>
                <div className="space-y-6">
                  {[
                    "Click the 'DOWNLOAD' button.",
                    "If prompted, allow installation from 'Unknown Sources' in your settings.",
                    "Open the downloaded file and tap 'Install'.",
                    "Launch the app, create your free account, and start winning!"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-gray-300 text-lg">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleDownload} icon={Download} className="w-full sm:w-auto">
                    DOWNLOAD NOW (17 MB)
                  </Button>
                  <a href="https://sabmilega.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full">
                      Visit Site
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-dark-900 rounded-3xl p-6 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center">
                      <Gamepad2 className="w-8 h-8 text-dark-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">SM EARN App</h3>
                      <p className="text-sm text-gray-400">Version 2.4.1 • 17 MB</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-500" />
                      <span>Verified by Play Protect</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-500" />
                      <span>No Ads</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-500" />
                      <span>Free Tournaments Daily</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-dark-900" />
            </div>
            <span className="font-display font-bold text-xl">SM EARN</span>
          </div>
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SM EARN Tournaments. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="https://sabmilega.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Visit Site</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
