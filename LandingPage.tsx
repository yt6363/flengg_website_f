import React, { FC, ReactNode } from 'react';

// Custom Icons for Features section
const CustomIcons = {
  Leaderboard: () => (
    <div className="w-20 h-20 bg-fleng-blue rounded-3xl flex items-end justify-center p-2 gap-1.5 border-4 border-fleng-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
      <div className="w-4 h-8 bg-white rounded-md"></div>
      <div className="w-4 h-12 bg-white rounded-md"></div>
      <div className="w-4 h-6 bg-white rounded-md"></div>
    </div>
  ),
  Community: () => (
     <div className="w-20 h-20 bg-fleng-pink rounded-3xl flex items-center justify-center p-1 border-4 border-fleng-dark transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="white">
                 <path d="M12 22C12 21.4477 12.4477 21 13 21H25C25.5523 21 26 21.4477 26 22V36C26 39.3137 23.3137 42 20 42H18C14.6863 42 12 39.3137 12 36V22Z" />
                <circle cx="19" cy="14" r="6" />
                <path d="M26 23C26 22.4477 26.4477 22 27 22H35C35.5523 22 36 22.4477 36 23V32C36 34.2091 34.2091 36 32 36H30C27.7909 36 26 34.2091 26 32V23Z" />
                <circle cx="31" cy="18" r="4" />
            </g>
        </svg>
    </div>
  ),
  Customize: () => (
     <div className="w-20 h-20 bg-fleng-green rounded-3xl flex items-center justify-center p-2 relative border-4 border-fleng-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
      <div className="w-8 h-8 rounded-lg bg-white absolute top-3 left-3 transform -rotate-12"></div>
      <div className="w-8 h-8 rounded-lg bg-white absolute bottom-3 right-3 transform rotate-12"></div>
    </div>
  ),
};

const FlengIcon: FC = () => (
 <div className="relative w-40 h-40 md:w-48 md:h-48 animate-pop-in" style={{ animationDelay: '200ms', opacity: 0 }}>
    <div className="w-full h-full bg-white border-4 border-fleng-dark rounded-4xl flex items-center justify-center overflow-hidden transform shadow-cartoon">
        <div className="flex items-center justify-center gap-2 -rotate-12">
            <div className="w-8 h-20 bg-fleng-pink rounded-full border-4 border-fleng-dark"></div>
            <div className="w-8 h-20 bg-fleng-blue rounded-full mt-4 border-4 border-fleng-dark"></div>
        </div>
    </div>
 </div>
);

const FeatureCard: FC<{ icon: ReactNode, title: string, children: ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white border-4 border-fleng-dark p-8 rounded-4xl text-center group transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-2 hover:-translate-x-1">
        <div className="flex justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-extrabold text-fleng-dark mb-2">{title}</h3>
        <p className="text-fleng-muted font-bold">{children}</p>
    </div>
);

const Step: FC<{ num: string, title: string, children: ReactNode }> = ({ num, title, children }) => (
    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 group">
        <div className="flex-shrink-0 text-3xl font-extrabold bg-fleng-pink text-white rounded-full w-16 h-16 flex items-center justify-center border-4 border-fleng-dark transition-all duration-500 transform group-hover:bg-fleng-blue group-hover:scale-110 group-hover:rotate-[360deg] shadow-cartoon">
            {num}
        </div>
        <div>
            <h3 className="text-2xl font-extrabold text-fleng-dark mb-2">{title}</h3>
            <p className="text-fleng-muted font-bold max-w-md">{children}</p>
        </div>
    </div>
);

const LandingPage: FC = () => {
  return (
    <div className="bg-transparent min-h-screen overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 px-4 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
            <FlengIcon />
            <h1 className="text-5xl md:text-7xl font-extrabold mt-8 text-fleng-dark animate-pop-in" style={{ animationDelay: '400ms', opacity: 0 }}>Fleng</h1>
            <p className="text-xl md:text-2xl mt-4 font-bold text-fleng-muted max-w-2xl animate-pop-in" style={{ animationDelay: '600ms', opacity: 0 }}>
                Build habits. Together.
                <br/>
                Challenges made fun.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-pop-in" style={{ animationDelay: '800ms', opacity: 0 }}>
                <a href="#" className="bg-fleng-pink text-white font-bold py-3 px-8 rounded-full text-lg border-4 border-fleng-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1">
                    Let's Get Started!
                </a>
                <a href="#how-it-works" className="bg-white text-fleng-dark font-bold py-3 px-8 rounded-full text-lg border-4 border-fleng-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1">
                    Learn More
                </a>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 animate-pop-in opacity-0">
          <div className="max-w-5xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-fleng-dark">A positive vibe for your tribe.</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard icon={<CustomIcons.Leaderboard />} title="Claim Glory">
                    Compete on a live leaderboard. See who's really committed.
                </FeatureCard>
                <FeatureCard icon={<CustomIcons.Community />} title="Your Squad">
                    Invite friends to challenges. Nothing says 'friendship' like shared goals.
                </FeatureCard>
                <FeatureCard icon={<CustomIcons.Customize />} title="Show Off Wins">
                    Unlock fun badges and achievements for every milestone.
                </FeatureCard>
              </div>
          </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="bg-white border-y-4 border-fleng-dark py-20 px-4 mt-10 animate-pop-in opacity-0" style={{animationDelay: '200ms'}}>
          <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-fleng-dark">Keep your streaks alive.</h2>
              <div className="space-y-12">
                <Step num="1" title="Create a Goofy Goal">
                    Want to do 100 pushups? Or finally water that plant? No goal is too silly for a challenge.
                </Step>
                <Step num="2" title="Dare Your Friends">
                    Send an invite link. It's time to find out who's all talk and who's ready for action.
                </Step>
                <Step num="3" title="Log Progress & Brag">
                    Check in daily, rack up points, and watch your name climb the leaderboard. Bragging rights are real.
                </Step>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fleng-blue text-center py-20 px-4 mt-10 border-y-4 border-fleng-dark animate-pop-in opacity-0" style={{animationDelay: '400ms'}}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{textShadow: '3px 3px 0px #1E1E1E'}}>Ready to stop procrastinating?</h2>
        <p className="text-xl text-white/90 font-bold max-w-2xl mx-auto mb-8">Download Fleng today and turn your goals into a game. Your future self will thank you (probably).</p>
        <a href="#" className="bg-white text-fleng-pink font-bold py-3 px-10 rounded-full text-xl border-4 border-fleng-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transform inline-block">
            Let's Do This!
        </a>
      </section>
      
      {/* Footer */}
      <footer className="bg-transparent text-center py-8 px-4">
        <p className="text-fleng-muted font-bold">&copy; {new Date().getFullYear()} Fleng. Keep the streak alive.</p>
      </footer>
    </div>
  );
};

export default LandingPage;