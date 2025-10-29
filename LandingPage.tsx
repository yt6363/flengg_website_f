import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';

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


const AnimatedLeaderboard: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute w-48 bg-white/80 border-4 border-fleng-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-center text-sm mb-2">Top Climbers</h4>
    <div className="relative space-y-2">
      {/* User Row 1 */}
      <div className="flex items-center gap-2 p-1 bg-fleng-blue/20 rounded-lg" style={{ animation: 'leaderboard-climb 8s ease-in-out infinite 2s' }}>
        <div className="w-6 h-6 bg-fleng-blue rounded-full border-2 border-fleng-dark"></div>
        <span className="font-bold text-xs">You</span>
        <span className="ml-auto font-bold text-xs">1250 pts</span>
      </div>
      {/* User Row 2 */}
      <div className="flex items-center gap-2 p-1 bg-fleng-pink/20 rounded-lg" style={{ animation: 'leaderboard-climb 8s ease-in-out infinite reverse 2s' }}>
        <div className="w-6 h-6 bg-fleng-pink rounded-full border-2 border-fleng-dark"></div>
        <span className="font-bold text-xs">Alex</span>
        <span className="ml-auto font-bold text-xs">1100 pts</span>
      </div>
    </div>
  </div>
);

const AnimatedChallengeCreation: FC<{ className?: string; style?: React.CSSProperties; challengeText: string; steps: number; }> = ({ className, style, challengeText, steps }) => (
  <div className={`absolute w-48 bg-white/80 border-4 border-fleng-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-sm mb-2">New Challenge</h4>
    <div className="relative h-8 bg-fleng-bg rounded-md border-2 border-fleng-dark/50 px-2 flex items-center">
        <span className="font-bold text-xs text-fleng-dark/80 whitespace-nowrap overflow-hidden" style={{ animation: `fill-text 6s steps(${steps}, end) infinite` }}>{challengeText}</span>
        <div className="w-0.5 h-4 bg-fleng-pink" style={{ animation: 'cursor-blink 1s infinite' }}></div>
    </div>
    <div className="h-8 mt-2 bg-fleng-green rounded-lg border-2 border-fleng-dark flex items-center justify-center font-bold text-xs text-white" style={{ animation: 'pop-in 6s infinite 4s' }}>
      Challenge Live!
    </div>
  </div>
);

const AnimatedFriendConnect: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute animated-shape ${className}`} style={style}>
    <div className="relative w-52 h-40 flex items-center justify-center">
      {/* Main User */}
      <div className="z-10 text-center">
        <div className="w-12 h-12 bg-fleng-blue rounded-full border-4 border-fleng-dark mx-auto"></div>
        <div className="mt-1 px-2 py-0.5 bg-fleng-pink text-white text-xs font-bold rounded-full border-2 border-fleng-dark" style={{ animation: 'pop-in 8s infinite 1s' }}>Invite</div>
      </div>

      {/* Friend 1 */}
      <div className="absolute top-0 left-0 opacity-0" style={{ animation: 'pop-in 8s infinite 2s' }}>
        <div className="w-8 h-8 bg-fleng-green rounded-full border-4 border-fleng-dark"></div>
      </div>
       {/* Friend 2 */}
       <div className="absolute bottom-0 left-8 opacity-0" style={{ animation: 'pop-in 8s infinite 2.5s' }}>
        <div className="w-8 h-8 bg-fleng-pink rounded-full border-4 border-fleng-dark"></div>
      </div>
       {/* Friend 3 */}
       <div className="absolute top-0 right-0 opacity-0" style={{ animation: 'pop-in 8s infinite 3s' }}>
        <div className="w-8 h-8 bg-fleng-green rounded-full border-4 border-fleng-dark"></div>
      </div>
    </div>
  </div>
);

const AnimatedFriendSearch: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute w-48 bg-white/80 border-4 border-fleng-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-sm mb-2">Find Friends</h4>
    <div className="relative h-8 bg-fleng-bg rounded-md border-2 border-fleng-dark/50 px-2 flex items-center">
        <span className="font-bold text-xs text-fleng-dark/80 whitespace-nowrap overflow-hidden" style={{ animation: 'fill-text 8s steps(10, end) infinite 1s' }}>Alex Ryder</span>
        <div className="w-0.5 h-4 bg-fleng-pink" style={{ animation: 'cursor-blink 1s infinite' }}></div>
    </div>
    <div className="mt-2 p-1 bg-fleng-green/20 rounded-lg flex items-center gap-2 opacity-0" style={{ animation: 'pop-in 8s infinite 3s' }}>
      <div className="w-6 h-6 bg-fleng-green rounded-full border-2 border-fleng-dark"></div>
      <span className="font-bold text-xs">Alex Ryder</span>
      <button className="ml-auto text-xs font-bold bg-fleng-green text-white rounded-md px-2 py-0.5 border-2 border-fleng-dark" style={{ animation: 'button-press 1s ease-in-out infinite 5s' }}>
        Add
      </button>
    </div>
  </div>
);

const AnimatedChallengeInvite: FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`absolute w-52 bg-white/80 border-4 border-fleng-dark rounded-2xl p-3 shadow-cartoon animated-shape ${className}`} style={style}>
    <h4 className="font-bold text-sm mb-1">Invite to: "Run a 5k"</h4>
    <div className="space-y-1 mt-2">
      {/* Friend 1 */}
      <div className="flex items-center gap-2 p-1 rounded-lg bg-fleng-pink/10">
        <div className="w-5 h-5 bg-white rounded border-2 border-fleng-dark/50 flex items-center justify-center">
            <svg className="w-4 h-4 text-fleng-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'checkmark-draw 0.5s ease-out infinite 2s', strokeDasharray: 25, strokeDashoffset: 25 }}>
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <div className="w-6 h-6 bg-fleng-pink rounded-full border-2 border-fleng-dark"></div>
        <span className="font-bold text-xs">Jess</span>
      </div>
      {/* Friend 2 */}
      <div className="flex items-center gap-2 p-1">
        <div className="w-5 h-5 bg-fleng-bg rounded border-2 border-fleng-dark/50"></div>
        <div className="w-6 h-6 bg-fleng-blue rounded-full border-2 border-fleng-dark"></div>
        <span className="font-bold text-xs">Mike</span>
      </div>
    </div>
    <div className="mt-2 h-8 bg-fleng-blue rounded-lg border-2 border-fleng-dark flex items-center justify-center font-bold text-xs text-white" style={{ animation: 'button-press 1s ease-in-out infinite 4s' }}>
      Send Invites (1)
    </div>
  </div>
);


// Character Illustrations
const Character1: FC = () => (
  <div className="relative w-32 h-40 md:w-40 md:h-48">
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="110" rx="30" ry="35" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Hair/Hat */}
      <ellipse cx="60" cy="30" rx="25" ry="18" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3"/>
      <circle cx="60" cy="25" r="8" fill="#E056AB" stroke="#1E1E1E" strokeWidth="2"/>
      {/* Eyes */}
      <circle cx="52" cy="48" r="4" fill="#1E1E1E"/>
      <circle cx="68" cy="48" r="4" fill="#1E1E1E"/>
      {/* Mouth (big smile) */}
      <path d="M 48 55 Q 60 65 72 55" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Arms - Flexing */}
      <ellipse cx="35" cy="95" rx="12" ry="25" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(-45 35 95)"/>
      <ellipse cx="85" cy="95" rx="12" ry="25" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(45 85 95)"/>
      {/* Legs */}
      <ellipse cx="50" cy="155" rx="10" ry="30" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3"/>
      <ellipse cx="70" cy="155" rx="10" ry="30" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Shoes */}
      <ellipse cx="50" cy="172" rx="12" ry="8" fill="#6C3483" stroke="#1E1E1E" strokeWidth="2"/>
      <ellipse cx="70" cy="172" rx="12" ry="8" fill="#6C3483" stroke="#1E1E1E" strokeWidth="2"/>
    </svg>
  </div>
);

const Character2: FC = () => (
  <div className="relative w-32 h-40 md:w-40 md:h-48">
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="110" rx="30" ry="35" fill="#F64291" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Hair */}
      <path d="M 35 45 Q 32 28 45 25 Q 50 22 55 28 Q 60 20 65 28 Q 70 22 75 25 Q 88 28 85 45" fill="#8B4513" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Eyes (excited) */}
      <circle cx="50" cy="48" r="5" fill="#1E1E1E"/>
      <circle cx="70" cy="48" r="5" fill="#1E1E1E"/>
      {/* Mouth (open excited) */}
      <ellipse cx="60" cy="60" rx="8" ry="6" fill="#1E1E1E"/>
      {/* Sweat drops */}
      <ellipse cx="38" cy="38" rx="4" ry="6" fill="#2FBDFD" stroke="#1E1E1E" strokeWidth="2"/>
      <ellipse cx="82" cy="42" rx="3" ry="5" fill="#2FBDFD" stroke="#1E1E1E" strokeWidth="2"/>
      {/* Arms - Waving/energetic */}
      <ellipse cx="30" cy="100" rx="12" ry="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(-30 30 100)"/>
      <ellipse cx="90" cy="100" rx="12" ry="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(30 90 100)"/>
      {/* Legs */}
      <ellipse cx="50" cy="155" rx="10" ry="30" fill="#C62368" stroke="#1E1E1E" strokeWidth="3"/>
      <ellipse cx="70" cy="155" rx="10" ry="30" fill="#C62368" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Shoes */}
      <ellipse cx="50" cy="172" rx="12" ry="8" fill="#8B1A4A" stroke="#1E1E1E" strokeWidth="2"/>
      <ellipse cx="70" cy="172" rx="12" ry="8" fill="#8B1A4A" stroke="#1E1E1E" strokeWidth="2"/>
    </svg>
  </div>
);

const Character3: FC = () => (
  <div className="relative w-32 h-40 md:w-40 md:h-48">
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="110" rx="30" ry="35" fill="#2FBDFD" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Headband */}
      <rect x="35" y="32" width="50" height="12" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3" rx="6"/>
      {/* Eyes (happy) */}
      <circle cx="50" cy="50" r="4" fill="#1E1E1E"/>
      <circle cx="70" cy="50" r="4" fill="#1E1E1E"/>
      {/* Big smile */}
      <path d="M 45 58 Q 60 68 75 58" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Arms - Holding dumbbells up */}
      <ellipse cx="30" cy="85" rx="12" ry="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(-60 30 85)"/>
      <ellipse cx="90" cy="85" rx="12" ry="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(60 90 85)"/>
      {/* Dumbbells */}
      <circle cx="20" cy="65" r="8" fill="#777777" stroke="#1E1E1E" strokeWidth="3"/>
      <circle cx="100" cy="65" r="8" fill="#777777" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Legs */}
      <ellipse cx="50" cy="155" rx="10" ry="30" fill="#1A8FCC" stroke="#1E1E1E" strokeWidth="3"/>
      <ellipse cx="70" cy="155" rx="10" ry="30" fill="#1A8FCC" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Shoes */}
      <ellipse cx="50" cy="172" rx="12" ry="8" fill="#116A99" stroke="#1E1E1E" strokeWidth="2"/>
      <ellipse cx="70" cy="172" rx="12" ry="8" fill="#116A99" stroke="#1E1E1E" strokeWidth="2"/>
      {/* Motion lines */}
      <path d="M 15 58 L 8 58" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 105 58 L 112 58" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const Character4: FC = () => (
  <div className="relative w-32 h-40 md:w-40 md:h-48">
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="115" rx="30" ry="35" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
      {/* Hair/Hat */}
      <ellipse cx="60" cy="30" rx="25" ry="18" fill="#F64291" stroke="#1E1E1E" strokeWidth="3"/>
      <circle cx="60" cy="25" r="8" fill="#C62368" stroke="#1E1E1E" strokeWidth="2"/>
      {/* Eyes (excited) */}
      <circle cx="50" cy="48" r="5" fill="#1E1E1E"/>
      <circle cx="70" cy="48" r="5" fill="#1E1E1E"/>
      {/* Big smile */}
      <path d="M 45 58 Q 60 68 75 58" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Arms - One raised with flag */}
      <ellipse cx="85" cy="90" rx="12" ry="30" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(50 85 90)"/>
      <ellipse cx="35" cy="105" rx="12" ry="25" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3" transform="rotate(-20 35 105)"/>
      {/* Checkered flag */}
      <rect x="92" y="45" width="20" height="15" fill="#FFFFFF" stroke="#1E1E1E" strokeWidth="2"/>
      <rect x="92" y="45" width="7" height="5" fill="#1E1E1E"/>
      <rect x="99" y="50" width="6" height="5" fill="#1E1E1E"/>
      <rect x="105" y="45" width="7" height="5" fill="#1E1E1E"/>
      <rect x="99" y="55" width="6" height="5" fill="#1E1E1E"/>
      <line x1="95" y1="45" x2="95" y2="65" stroke="#1E1E1E" strokeWidth="2"/>
      {/* Legs - Running pose */}
      <ellipse cx="50" cy="158" rx="10" ry="30" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3" transform="rotate(-15 50 158)"/>
      <ellipse cx="70" cy="155" rx="10" ry="30" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3" transform="rotate(10 70 155)"/>
      {/* Shoes */}
      <ellipse cx="48" cy="175" rx="12" ry="8" fill="#6C3483" stroke="#1E1E1E" strokeWidth="2"/>
      <ellipse cx="72" cy="170" rx="12" ry="8" fill="#6C3483" stroke="#1E1E1E" strokeWidth="2"/>
      {/* Motion lines */}
      <path d="M 100 62 Q 105 60 108 62" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
      <path d="M 102 68 Q 107 66 110 68" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
    </svg>
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
        <section className="relative py-12 md:py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text */}
              <div className="text-left animate-pop-in" style={{ opacity: 0 }}>
                <div className="bg-white border-4 border-fleng-dark rounded-4xl p-8 md:p-10 shadow-cartoon relative">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-fleng-dark leading-tight mb-6">
                    Fleng: Where Fun, Friends, and Frazzled Faces Collide!
                  </h1>
                  <p className="text-lg md:text-xl font-bold text-fleng-muted mb-8">
                    The app that makes building habits hilarious (and actually happens!)
                  </p>
                  <a href="https://flengg.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-fleng-pink text-white font-bold py-3 px-10 rounded-full text-lg border-4 border-fleng-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1">
                      Join the Fun!
                  </a>
                  {/* Speech bubble tail */}
                  <div className="hidden md:block absolute -right-4 top-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-white border-b-[20px] border-b-transparent" style={{transform: 'translateY(-50%)'}}></div>
                  <div className="hidden md:block absolute -right-5 top-1/2 w-0 h-0 border-t-[22px] border-t-transparent border-l-[32px] border-l-fleng-dark border-b-[22px] border-b-transparent" style={{transform: 'translateY(-50%)'}}></div>
                </div>
              </div>

              {/* Right Side - Characters */}
              <div className="flex justify-center items-end gap-4 animate-pop-in" style={{ animationDelay: '200ms', opacity: 0 }}>
                <Character1 />
                <Character2 />
                <Character3 />
                <Character4 />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Bottom illustration with people */}
        <section className="py-20 px-4 mt-16">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Custom Challenges */}
              <div className="bg-fleng-pink border-4 border-fleng-dark rounded-3xl p-6 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-white border-3 border-fleng-dark rounded-xl p-2 flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <rect x="8" y="8" width="24" height="24" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="2" rx="4"/>
                      <path d="M 14 20 L 20 26 L 30 14" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Custom Challenges*</h3>
                <p className="text-sm font-bold text-white/90">From "Eat L Veggies" to "Daily Disco Dancing" – Create Anything!</p>
              </div>

              {/* Daily Log Reminders */}
              <div className="bg-fleng-blue border-4 border-fleng-dark rounded-3xl p-6 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-white border-3 border-fleng-dark rounded-xl p-2 flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="14" fill="#2FBDFD" stroke="#1E1E1E" strokeWidth="2"/>
                      <path d="M 20 12 L 20 20 L 26 26" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Daily Log Reminders</h3>
                <p className="text-sm font-bold text-white/90">Keep Those Nasty Free Set! Drop Notifications So!</p>
              </div>

              {/* Private Profiles */}
              <div className="bg-fleng-green border-4 border-fleng-dark rounded-3xl p-6 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-white border-3 border-fleng-dark rounded-xl p-2 flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="14" fill="#28C76F" stroke="#1E1E1E" strokeWidth="2"/>
                      <circle cx="20" cy="15" r="5" fill="#FFF" stroke="#1E1E1E" strokeWidth="2"/>
                      <path d="M 12 28 Q 12 22 20 22 Q 28 22 28 28" fill="#FFF" stroke="#1E1E1E" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Private Profiles</h3>
                <p className="text-sm font-bold text-white/90">Now Forget text card (Who Someone Cookies to back towny fun!</p>
              </div>

              {/* Create Frengee Invitations */}
              <div className="bg-fleng-green border-4 border-fleng-dark rounded-3xl p-6 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-white border-3 border-fleng-dark rounded-xl p-2 flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <rect x="6" y="12" width="28" height="18" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="2" rx="3"/>
                      <path d="M 6 14 L 20 22 L 34 14" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Create Frengee Invitations!</h3>
                <p className="text-sm font-bold text-white/90">Keep Out Those Carnley Goal fun!</p>
              </div>
            </div>

            {/* Bottom illustration with three cartoon people */}
            <div className="bg-white border-4 border-fleng-dark rounded-4xl p-8 md:p-12 shadow-cartoon">
              <div className="flex justify-center items-end gap-8">
                <div>
                  <svg width="100" height="140" viewBox="0 0 100 140">
                    <ellipse cx="50" cy="90" rx="28" ry="32" fill="#9B59B6" stroke="#1E1E1E" strokeWidth="3"/>
                    <circle cx="50" cy="42" r="24" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
                    <path d="M 35 38 Q 32 22 42 20 Q 50 18 58 20 Q 68 22 65 38" fill="#8B4513" stroke="#1E1E1E" strokeWidth="3"/>
                    <circle cx="43" cy="40" r="4" fill="#1E1E1E"/>
                    <circle cx="57" cy="40" r="4" fill="#1E1E1E"/>
                    <path d="M 40 48 Q 50 56 60 48" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <ellipse cx="30" cy="78" rx="10" ry="22" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="70" cy="78" rx="10" ry="22" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="40" cy="125" rx="10" ry="20" fill="#6C3483" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="60" cy="125" rx="10" ry="20" fill="#6C3483" stroke="#1E1E1E" strokeWidth="2"/>
                  </svg>
                </div>

                <div>
                  <svg width="100" height="140" viewBox="0 0 100 140">
                    <ellipse cx="50" cy="90" rx="28" ry="32" fill="#2FBDFD" stroke="#1E1E1E" strokeWidth="3"/>
                    <circle cx="50" cy="42" r="24" fill="#A67C52" stroke="#1E1E1E" strokeWidth="3"/>
                    <ellipse cx="50" cy="25" rx="22" ry="15" fill="#1E1E1E" stroke="#1E1E1E" strokeWidth="3"/>
                    <circle cx="43" cy="40" r="4" fill="#1E1E1E"/>
                    <circle cx="57" cy="40" r="4" fill="#1E1E1E"/>
                    <path d="M 40 48 Q 50 56 60 48" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <ellipse cx="30" cy="78" rx="10" ry="22" fill="#A67C52" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="70" cy="78" rx="10" ry="22" fill="#A67C52" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="40" cy="125" rx="10" ry="20" fill="#1A8FCC" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="60" cy="125" rx="10" ry="20" fill="#1A8FCC" stroke="#1E1E1E" strokeWidth="2"/>
                  </svg>
                </div>

                <div>
                  <svg width="100" height="140" viewBox="0 0 100 140">
                    <ellipse cx="50" cy="90" rx="28" ry="32" fill="#F64291" stroke="#1E1E1E" strokeWidth="3"/>
                    <circle cx="50" cy="42" r="24" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
                    <path d="M 30 35 L 35 22 L 42 28 L 48 20 L 55 28 L 62 22 L 67 35" fill="#8B4513" stroke="#1E1E1E" strokeWidth="3"/>
                    <circle cx="43" cy="42" r="4" fill="#1E1E1E"/>
                    <circle cx="57" cy="42" r="4" fill="#1E1E1E"/>
                    <path d="M 40 50 Q 50 58 60 50" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <ellipse cx="28" cy="78" rx="10" ry="22" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2" transform="rotate(-10 28 78)"/>
                    <ellipse cx="72" cy="78" rx="10" ry="22" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2" transform="rotate(10 72 78)"/>
                    <ellipse cx="40" cy="125" rx="10" ry="20" fill="#C62368" stroke="#1E1E1E" strokeWidth="2"/>
                    <ellipse cx="60" cy="125" rx="10" ry="20" fill="#C62368" stroke="#1E1E1E" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section id="how-it-works" className="py-20 px-4 mt-10 animate-pop-in opacity-0" style={{animationDelay: '200ms'}}>
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-12 text-fleng-dark">How It Works</h2>

                {/* Horizontal Scrolling Cards */}
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
                  {/* Card 1 - Create a Challenge */}
                  <div className="flex-shrink-0 w-80 md:w-96 snap-start">
                    <div className="bg-fleng-blue border-4 border-fleng-dark rounded-3xl p-6 h-full shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-white border-3 border-fleng-dark rounded-2xl p-4 flex-shrink-0">
                          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Lightbulb icon */}
                            <circle cx="30" cy="38" r="12" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="2"/>
                            <path d="M 30 26 L 30 10" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M 20 30 L 10 20" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M 40 30 L 50 20" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round"/>
                            <rect x="26" y="48" width="8" height="6" fill="#777" stroke="#1E1E1E" strokeWidth="2" rx="1"/>
                            <circle cx="30" cy="38" r="8" fill="#FFF" opacity="0.4"/>
                          </svg>
                        </div>
                        <div className="flex-1 text-white">
                          <div className="text-sm font-bold mb-2 bg-white/20 rounded-full px-3 py-1 inline-block">STEP 1</div>
                          <h3 className="text-2xl font-extrabold mb-2">1. Create a Challenge</h3>
                          <p className="font-bold text-white/90">Pick Your Goal: Start Your Fitness Quest – Invite Friends to Belly Challenge – Envise Finish Line Ahead</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Invite Friends */}
                  <div className="flex-shrink-0 w-80 md:w-[500px] snap-start">
                    <div className="bg-fleng-blue border-4 border-fleng-dark rounded-3xl p-6 h-full shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200 relative overflow-hidden">
                      <div className="text-white mb-4">
                        <div className="text-sm font-bold mb-2 bg-white/20 rounded-full px-3 py-1 inline-block">STEP 2</div>
                        <h3 className="text-2xl font-extrabold mb-2">2. Invite Friends</h3>
                        <p className="font-bold text-white/90 mb-4">Envite Your Posse! Pull Emotes Invest!</p>
                      </div>
                      {/* Three characters running/connecting */}
                      <div className="flex gap-4 items-center justify-center">
                        <div className="animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>
                          <svg width="70" height="100" viewBox="0 0 80 120">
                            <ellipse cx="40" cy="70" rx="22" ry="28" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="3"/>
                            <circle cx="40" cy="35" r="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
                            <circle cx="35" cy="33" r="3" fill="#1E1E1E"/>
                            <circle cx="45" cy="33" r="3" fill="#1E1E1E"/>
                            <path d="M 33 40 Q 40 45 47 40" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
                            <ellipse cx="25" cy="65" rx="8" ry="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                            <ellipse cx="55" cy="65" rx="8" ry="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                          </svg>
                        </div>
                        <div className="animate-bounce" style={{animationDelay: '0.3s', animationDuration: '2s'}}>
                          <svg width="70" height="100" viewBox="0 0 80 120">
                            <ellipse cx="40" cy="70" rx="22" ry="28" fill="#F64291" stroke="#1E1E1E" strokeWidth="3"/>
                            <circle cx="40" cy="35" r="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
                            <circle cx="35" cy="33" r="3" fill="#1E1E1E"/>
                            <circle cx="45" cy="33" r="3" fill="#1E1E1E"/>
                            <path d="M 33 40 Q 40 45 47 40" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
                            <ellipse cx="25" cy="65" rx="8" ry="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                            <ellipse cx="55" cy="65" rx="8" ry="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                          </svg>
                        </div>
                        <div className="animate-bounce" style={{animationDelay: '0.6s', animationDuration: '2s'}}>
                          <svg width="70" height="100" viewBox="0 0 80 120">
                            <ellipse cx="40" cy="70" rx="22" ry="28" fill="#2FBDFD" stroke="#1E1E1E" strokeWidth="3"/>
                            <circle cx="40" cy="35" r="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="3"/>
                            <circle cx="35" cy="33" r="3" fill="#1E1E1E"/>
                            <circle cx="45" cy="33" r="3" fill="#1E1E1E"/>
                            <path d="M 33 40 Q 40 45 47 40" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
                            <ellipse cx="25" cy="65" rx="8" ry="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                            <ellipse cx="55" cy="65" rx="8" ry="20" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                      {/* Speech bubbles */}
                      <div className="absolute bottom-4 right-6 bg-white border-3 border-fleng-dark rounded-2xl px-3 py-2 text-sm font-bold">Let's go!</div>
                      <div className="absolute bottom-4 left-6 bg-white border-3 border-fleng-dark rounded-2xl px-3 py-2 text-sm font-bold">I'm in!</div>
                    </div>
                  </div>

                  {/* Card 3 - Track Progress */}
                  <div className="flex-shrink-0 w-80 md:w-96 snap-start">
                    <div className="bg-fleng-blue border-4 border-fleng-dark rounded-3xl p-6 h-full shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                      <div className="text-white mb-4">
                        <div className="text-sm font-bold mb-2 bg-white/20 rounded-full px-3 py-1 inline-block">STEP 3</div>
                        <h3 className="text-2xl font-extrabold mb-2">3. Track Log Progress</h3>
                        <p className="font-bold text-white/90">Beat Your Best Week Winning! Log Daily. Check Over You Hosted Data!</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Compete & Celebrate */}
                  <div className="flex-shrink-0 w-80 md:w-96 snap-start">
                    <div className="bg-fleng-green border-4 border-fleng-dark rounded-3xl p-6 h-full shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200 relative overflow-hidden">
                      <div className="text-white mb-4">
                        <div className="text-sm font-bold mb-2 bg-white/20 rounded-full px-3 py-1 inline-block">STEP 4</div>
                        <h3 className="text-2xl font-extrabold mb-4">WINNER!</h3>
                      </div>
                      {/* Trophy/celebration illustration */}
                      <div className="flex justify-center items-center">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                          <rect x="45" y="75" width="30" height="35" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="3" rx="4"/>
                          <ellipse cx="60" cy="55" rx="25" ry="22" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="3"/>
                          <path d="M 35 55 Q 28 45 25 35" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
                          <path d="M 85 55 Q 92 45 95 35" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round"/>
                          <rect x="20" y="30" width="10" height="15" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="2" rx="2"/>
                          <rect x="90" y="30" width="10" height="15" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="2" rx="2"/>
                          <text x="60" y="65" fontSize="24" fontWeight="bold" fill="#1E1E1E" textAnchor="middle">1st</text>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 - Celebration characters */}
                  <div className="flex-shrink-0 w-80 md:w-96 snap-start">
                    <div className="bg-fleng-green border-4 border-fleng-dark rounded-3xl p-6 h-full shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                      <div className="text-white mb-4">
                        <div className="text-sm font-bold mb-2 bg-white/20 rounded-full px-3 py-1 inline-block">STEP 5</div>
                        <h3 className="text-2xl font-extrabold mb-2">🎉 Celebrate!</h3>
                        <p className="font-bold text-white/90 mb-4">Victory Dance Time! You Did It!</p>
                      </div>
                      <div className="flex gap-4 items-end justify-center">
                        <div className="animate-pulse">
                          <svg width="70" height="110" viewBox="0 0 60 100">
                            <ellipse cx="30" cy="60" rx="18" ry="24" fill="#F64291" stroke="#1E1E1E" strokeWidth="2"/>
                            <circle cx="30" cy="28" r="18" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                            <circle cx="25" cy="26" r="3" fill="#1E1E1E"/>
                            <circle cx="35" cy="26" r="3" fill="#1E1E1E"/>
                            <path d="M 23 32 Q 30 38 37 32" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
                            <ellipse cx="15" cy="50" rx="6" ry="18" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2" transform="rotate(-20 15 50)"/>
                            <ellipse cx="45" cy="50" rx="6" ry="18" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2" transform="rotate(20 45 50)"/>
                          </svg>
                        </div>
                        <div className="animate-pulse" style={{animationDelay: '0.3s'}}>
                          <svg width="70" height="110" viewBox="0 0 60 100">
                            <ellipse cx="30" cy="60" rx="18" ry="24" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="2"/>
                            <circle cx="30" cy="28" r="18" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2"/>
                            <circle cx="25" cy="26" r="3" fill="#1E1E1E"/>
                            <circle cx="35" cy="26" r="3" fill="#1E1E1E"/>
                            <path d="M 23 32 Q 30 38 37 32" stroke="#1E1E1E" strokeWidth="2" fill="none"/>
                            <ellipse cx="15" cy="50" rx="6" ry="18" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2" transform="rotate(-20 15 50)"/>
                            <ellipse cx="45" cy="50" rx="6" ry="18" fill="#FFD1A1" stroke="#1E1E1E" strokeWidth="2" transform="rotate(20 45 50)"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 px-4 animate-pop-in opacity-0" style={{animationDelay: '300ms'}}>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-fleng-dark">Why We Built Fleng</h2>
                <div className="bg-white border-4 border-fleng-dark rounded-4xl p-8 md:p-12 shadow-cartoon">
                    <p className="text-xl md:text-2xl text-fleng-muted font-bold leading-relaxed">
                        Born from a desperate need for accountability (and a love for silly competitions),
                        Fleng is here to make habits stick – with a smile! We believe that goals shouldn't
                        feel like a chore. So we built an app that turns every challenge into a celebration.
                        Welcome to the fun side of self-improvement! 🎉
                    </p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-fleng-bg mt-10 animate-pop-in opacity-0" style={{animationDelay: '400ms'}}>
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-fleng-dark">FAQ (Frequently Amusing Questions)</h2>
                <div className="space-y-6">
                    <div className="bg-white border-4 border-fleng-dark rounded-3xl p-6 md:p-8 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                        <h3 className="text-2xl font-extrabold text-fleng-dark mb-3">Q: Will Fleng make me instantly productive and wise?</h3>
                        <p className="text-lg text-fleng-muted font-bold">A: Probably not, but you'll have fun trying! (And maybe you'll accidentally build a habit or two along the way.)</p>
                    </div>
                    <div className="bg-white border-4 border-fleng-dark rounded-3xl p-6 md:p-8 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                        <h3 className="text-2xl font-extrabold text-fleng-dark mb-3">Q: Can I challenge my cat?</h3>
                        <p className="text-lg text-fleng-muted font-bold">A: We don't recommend it, but if you succeed, please send us pictures! Our lawyers would also like a word.</p>
                    </div>
                    <div className="bg-white border-4 border-fleng-dark rounded-3xl p-6 md:p-8 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                        <h3 className="text-2xl font-extrabold text-fleng-dark mb-3">Q: Is this app suitable for serious goals?</h3>
                        <p className="text-lg text-fleng-muted font-bold">A: Absolutely! We're silly, but we're serious about helping you succeed. Whether it's fitness, reading, or learning – Fleng has your back.</p>
                    </div>
                    <div className="bg-white border-4 border-fleng-dark rounded-3xl p-6 md:p-8 shadow-cartoon hover:shadow-cartoon-hover transition-all duration-200">
                        <h3 className="text-2xl font-extrabold text-fleng-dark mb-3">Q: What if I miss a day?</h3>
                        <p className="text-lg text-fleng-muted font-bold">A: No judgment here! Life happens. Jump back in whenever you're ready – your friends will cheer you on. (Or gently roast you. It's part of the fun!)</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-fleng-blue text-center py-20 px-4 mt-10 border-y-4 border-fleng-dark animate-pop-in opacity-0" style={{animationDelay: '500ms'}}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{textShadow: '3px 3px 0px #1E1E1E'}}>Ready to stop procrastinating?</h2>
          <p className="text-xl text-white/90 font-bold max-w-2xl mx-auto mb-8">Download Fleng today and turn your goals into a game. Your future self will thank you (probably).</p>
          <a href="https://flengg.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-fleng-pink font-bold py-3 px-10 rounded-full text-xl border-4 border-fleng-dark transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transform inline-block">
              Let's Do This!
          </a>
        </section>
        
        {/* Footer */}
        <footer className="bg-transparent text-center py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="w-12 h-12 bg-fleng-pink rounded-full border-4 border-fleng-dark flex items-center justify-center text-white text-xl transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="w-12 h-12 bg-fleng-blue rounded-full border-4 border-fleng-dark flex items-center justify-center text-white text-xl transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="w-12 h-12 bg-fleng-green rounded-full border-4 border-fleng-dark flex items-center justify-center text-white text-xl transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1" aria-label="Instagram">
                📸
              </a>
              <a href="#" className="w-12 h-12 bg-fleng-dark rounded-full border-4 border-fleng-dark flex items-center justify-center text-white text-xl transition-all duration-200 shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-1 hover:-translate-x-1" aria-label="Email">
                ✉️
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-fleng-muted font-bold">
              <a href="#" className="hover:text-fleng-pink transition-colors duration-200">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-fleng-pink transition-colors duration-200">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-fleng-pink transition-colors duration-200">Contact Us</a>
              <span>•</span>
              <a href="#" className="hover:text-fleng-pink transition-colors duration-200">Support</a>
            </div>

            {/* Tagline */}
            <p className="text-2xl font-extrabold text-fleng-dark mb-2">
              Fleng: Making habits less 'meh' and more 'YAY!'
            </p>

            {/* Copyright */}
            <p className="text-fleng-muted font-bold">
              &copy; {new Date().getFullYear()} Fleng. Keep the streak alive. ✨
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
