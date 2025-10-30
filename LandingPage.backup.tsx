import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';

// Custom Icons for Features section
const CustomIcons = {
  Leaderboard: () => (
    <div className="w-20 h-20 bg-Flengg-blue rounded-3xl flex items-end justify-center p-2 gap-1.5 border-4 border-Flengg-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
      <div className="w-4 h-8 bg-white rounded-md"></div>
      <div className="w-4 h-12 bg-white rounded-md"></div>
      <div className="w-4 h-6 bg-white rounded-md"></div>
    </div>
  ),
  Community: () => (
     <div className="w-20 h-20 bg-Flengg-pink rounded-3xl flex items-center justify-center p-1 border-4 border-Flengg-dark transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
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
     <div className="w-20 h-20 bg-Flengg-green rounded-3xl flex items-center justify-center p-2 relative border-4 border-Flengg-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
      <div className="w-8 h-8 rounded-lg bg-white absolute top-3 left-3 transform -rotate-12"></div>
      <div className="w-8 h-8 rounded-lg bg-white absolute bottom-3 right-3 transform rotate-12"></div>
    </div>
  ),
};


const AnimatedLeaderboard: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute w-48 bg-white/80 border-4 border-Flengg-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-center text-sm mb-2">Top Climbers</h4>
    <div className="relative space-y-2">
      {/* User Row 1 */}
      <div className="flex items-center gap-2 p-1 bg-Flengg-blue/20 rounded-lg" style={{ animation: 'leaderboard-climb 8s ease-in-out infinite 2s' }}>
        <div className="w-6 h-6 bg-Flengg-blue rounded-full border-2 border-Flengg-dark"></div>
        <span className="font-bold text-xs">You</span>
        <span className="ml-auto font-bold text-xs">1250 pts</span>
      </div>
      {/* User Row 2 */}
      <div className="flex items-center gap-2 p-1 bg-Flengg-pink/20 rounded-lg" style={{ animation: 'leaderboard-climb 8s ease-in-out infinite reverse 2s' }}>
        <div className="w-6 h-6 bg-Flengg-pink rounded-full border-2 border-Flengg-dark"></div>
        <span className="font-bold text-xs">Alex</span>
        <span className="ml-auto font-bold text-xs">1100 pts</span>
      </div>
    </div>
  </div>
);

const AnimatedChallengeCreation: FC<{ className?: string; style?: React.CSSProperties; challengeText: string; steps: number; }> = ({ className, style, challengeText, steps }) => (
  <div className={`absolute w-48 bg-white/80 border-4 border-Flengg-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-sm mb-2">New Challenge</h4>
    <div className="relative h-8 bg-Flengg-bg rounded-md border-2 border-Flengg-dark/50 px-2 flex items-center">
        <span className="font-bold text-xs text-Flengg-dark/80 whitespace-nowrap overflow-hidden" style={{ animation: `fill-text 6s steps(${steps}, end) infinite` }}>{challengeText}</span>
        <div className="w-0.5 h-4 bg-Flengg-pink" style={{ animation: 'cursor-blink 1s infinite' }}></div>
    </div>
    <div className="h-8 mt-2 bg-Flengg-green rounded-lg border-2 border-Flengg-dark flex items-center justify-center font-bold text-xs text-white" style={{ animation: 'pop-in 6s infinite 4s' }}>
      Challenge Live!
    </div>
  </div>
);

const AnimatedFriendConnect: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute animated-shape ${className}`} style={style}>
    <div className="relative w-52 h-40 flex items-center justify-center">
      {/* Main User */}
      <div className="z-10 text-center">
        <div className="w-12 h-12 bg-Flengg-blue rounded-full border-4 border-Flengg-dark mx-auto"></div>
        <div className="mt-1 px-2 py-0.5 bg-Flengg-pink text-white text-xs font-bold rounded-full border-2 border-Flengg-dark" style={{ animation: 'pop-in 8s infinite 1s' }}>Invite</div>
      </div>

      {/* Friend 1 */}
      <div className="absolute top-0 left-0 opacity-0" style={{ animation: 'pop-in 8s infinite 2s' }}>
        <div className="w-8 h-8 bg-Flengg-green rounded-full border-4 border-Flengg-dark"></div>
      </div>
       {/* Friend 2 */}
       <div className="absolute bottom-0 left-8 opacity-0" style={{ animation: 'pop-in 8s infinite 2.5s' }}>
        <div className="w-8 h-8 bg-Flengg-pink rounded-full border-4 border-Flengg-dark"></div>
      </div>
       {/* Friend 3 */}
       <div className="absolute top-0 right-0 opacity-0" style={{ animation: 'pop-in 8s infinite 3s' }}>
        <div className="w-8 h-8 bg-Flengg-green rounded-full border-4 border-Flengg-dark"></div>
      </div>
    </div>
  </div>
);

const AnimatedFriendSearch: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute w-48 bg-white/80 border-4 border-Flengg-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-sm mb-2">Find Friends</h4>
    <div className="relative h-8 bg-Flengg-bg rounded-md border-2 border-Flengg-dark/50 px-2 flex items-center">
        <span className="font-bold text-xs text-Flengg-dark/80 whitespace-nowrap overflow-hidden" style={{ animation: 'fill-text 8s steps(10, end) infinite 1s' }}>Alex Ryder</span>
        <div className="w-0.5 h-4 bg-Flengg-pink" style={{ animation: 'cursor-blink 1s infinite' }}></div>
    </div>
    <div className="mt-2 p-1 bg-Flengg-green/20 rounded-lg flex items-center gap-2 opacity-0" style={{ animation: 'pop-in 8s infinite 3s' }}>
      <div className="w-6 h-6 bg-Flengg-green rounded-full border-2 border-Flengg-dark"></div>
      <span className="font-bold text-xs">Alex Ryder</span>
      <button className="ml-auto text-xs font-bold bg-Flengg-green text-white rounded-md px-2 py-0.5 border-2 border-Flengg-dark" style={{ animation: 'button-press 1s ease-in-out infinite 5s' }}>
        Add
      </button>
    </div>
  </div>
);

const AnimatedChallengeInvite: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute w-52 bg-white/80 border-4 border-Flengg-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-sm mb-1">Invite to: "Run a 5k"</h4>
    <div className="space-y-1 mt-2">
      {/* Friend 1 */}
      <div className="flex items-center gap-2 p-1 rounded-lg bg-Flengg-pink/10">
        <div className="w-5 h-5 bg-white rounded border-2 border-Flengg-dark/50 flex items-center justify-center">
            <svg className="w-4 h-4 text-Flengg-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'checkmark-draw 0.5s ease-out infinite 2s', strokeDasharray: 25, strokeDashoffset: 25 }}>
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <div className="w-6 h-6 bg-Flengg-pink rounded-full border-2 border-Flengg-dark"></div>
        <span className="font-bold text-xs">Jess</span>
      </div>
      {/* Friend 2 */}
      <div className="flex items-center gap-2 p-1">
        <div className="w-5 h-5 bg-Flengg-bg rounded border-2 border-Flengg-dark/50"></div>
        <div className="w-6 h-6 bg-Flengg-blue rounded-full border-2 border-Flengg-dark"></div>
        <span className="font-bold text-xs">Mike</span>
      </div>
    </div>
    <div className="mt-2 h-8 bg-Flengg-blue rounded-lg border-2 border-Flengg-dark flex items-center justify-center font-bold text-xs text-white" style={{ animation: 'button-press 1s ease-in-out infinite 4s' }}>
      Send Invites (1)
    </div>
  </div>
);


const FlenggIcon: FC = () => (
 <div className="relative w-40 h-40 md:w-48 md:h-48 animate-pop-in" style={{ animationDelay: '200ms', opacity: 0 }}>
    <div className="w-full h-full bg-white border-4 border-Flengg-dark rounded-4xl flex items-center justify-center overflow-hidden transform shadow-cartoon">
        <div className="flex items-center justify-center gap-2 -rotate-12">
            <div className="w-8 h-20 bg-Flengg-pink rounded-full border-4 border-Flengg-dark"></div>
            <div className="w-8 h-20 bg-Flengg-blue rounded-full mt-4 border-4 border-Flengg-dark"></div>
        </div>
    </div>
 </div>
);

const FeatureCard: FC<{ icon: ReactNode, title: string, children: ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white border-4 border-Flengg-dark p-8 rounded-4xl text-center group transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-2 hover:-translate-x-1">
        <div className="flex justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-extrabold text-Flengg-dark mb-2">{title}</h3>
        <p className="text-Flengg-muted font-bold">{children}</p>
    </div>
);

const Step: FC<{ num: string, title: string, children: ReactNode }> = ({ num, title, children }) => (
    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 group">
        <div className="flex-shrink-0 text-3xl font-extrabold bg-Flengg-pink text-white rounded-full w-16 h-16 flex items-center justify-center border-4 border-Flengg-dark transition-all duration-500 transform group-hover:bg-Flengg-blue group-hover:scale-110 group-hover:rotate-[360deg] shadow-cartoon">
            {num}
        </div>
        <div>
            <h3 className="text-2xl font-extrabold text-Flengg-dark mb-2">{title}</h3>
            <p className="text-Flengg-muted font-bold max-w-md">{children}</p>
        </div>
    </div>
);

const CustomCursor: FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const visibleFired = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!visibleFired.current) {
        visibleFired.current = true;
        setIsVisible(true);
      }
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', handleMouseMove);

    // Using a timeout to ensure all interactive elements are in the DOM before adding listeners
    const timer = setTimeout(() => {
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', onMouseEnter);
          el.addEventListener('mouseleave', onMouseLeave);
        });
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
      });
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures this effect runs only once.

  return (
    <div
      className={`custom-cursor ${isHovering ? 'is-hovering' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0, 
      }}
    >
      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>
    </div>
  );
};

const LandingPage: FC = () => {
  return (
    <>
      <CustomCursor />
      {/* Background Layer */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-white"></div>
        {/* Animated Feature Vignettes */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <AnimatedLeaderboard className="top-[10%] left-[5%]" style={{ animationDelay: '0s' }} />
          <AnimatedChallengeCreation className="top-[15%] right-[8%]" challengeText="Workout 3x a week" steps={20} style={{ animationDelay: '1s' }} />
          <AnimatedFriendSearch className="top-[40%] left-[15%]" style={{ animationDelay: '0.5s' }} />
          <AnimatedChallengeInvite className="top-[55%] right-[12%]" style={{ animationDelay: '2.5s' }} />
          <AnimatedFriendConnect className="bottom-[15%] left-[5%]" style={{ animationDelay: '1.5s' }} />
          <AnimatedChallengeCreation className="bottom-[10%] right-[30%]" challengeText="Read 10 pages daily" steps={20} style={{ animationDelay: '3s' }} />
          <AnimatedLeaderboard className="top-[70%] left-[60%]" style={{ animationDelay: '3.5s' }} />
        </div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(30, 30, 30, 0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>
      </div>

      <div className="bg-transparent min-h-screen overflow-hidden font-sans">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 px-4 overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
              <FlenggIcon />
              <h1 className="text-5xl md:text-7xl font-extrabold mt-8 text-Flengg-dark animate-pop-in" style={{ animationDelay: '400ms', opacity: 0 }}>Flengg</h1>
              <p className="text-xl md:text-2xl mt-4 font-bold text-Flengg-muted max-w-2xl animate-pop-in" style={{ animationDelay: '600ms', opacity: 0 }}>
                  Build habits. Together.
                  <br/>
                  Challenges made fun.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-pop-in" style={{ animationDelay: '800ms', opacity: 0 }}>
                  <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="bg-Flengg-pink text-white font-bold py-3 px-8 rounded-full text-lg border-4 border-Flengg-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1">
                      Let's Get Started!
                  </a>
                  <a href="#how-it-works" className="bg-white text-Flengg-dark font-bold py-3 px-8 rounded-full text-lg border-4 border-Flengg-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1 scroll-smooth">
                      Learn More
                  </a>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 animate-pop-in opacity-0">
            <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-Flengg-dark">A positive vibe for your tribe.</h2>
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
        <section id="how-it-works" className="bg-white border-y-4 border-Flengg-dark py-20 px-4 mt-10 animate-pop-in opacity-0" style={{animationDelay: '200ms'}}>
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-Flengg-dark">Keep your streaks alive.</h2>
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
        <section className="bg-Flengg-blue text-center py-20 px-4 mt-10 border-y-4 border-Flengg-dark animate-pop-in opacity-0" style={{animationDelay: '400ms'}}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{textShadow: '3px 3px 0px #1E1E1E'}}>Ready to stop procrastinating?</h2>
          <p className="text-xl text-white/90 font-bold max-w-2xl mx-auto mb-8">Download Flengg today and turn your goals into a game. Your future self will thank you (probably).</p>
          <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="bg-white text-Flengg-pink font-bold py-3 px-10 rounded-full text-xl border-4 border-Flengg-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transform inline-block">
              Let's Do This!
          </a>
        </section>
        
        {/* Footer */}
        <footer className="bg-transparent text-center py-8 px-4">
          <p className="text-Flengg-muted font-bold">&copy; {new Date().getFullYear()} Flengg. Keep the streak alive.</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
