import { Button } from '@/components/ui/button';
import { AnimatedCounter } from './AnimatedCounter';
import heroBackground from '@/assets/hero-background.jpg';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Header Badge */}
        <div className="inline-block mb-6 fade-in">
          <span className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium">
            DTU & GBU Students
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-delay-1">
          <span className="gradient-text">PRISM:</span> Measuring<br />
          Life's <span className="neon-blue">Chaos</span> to Predict<br />
          <span className="neon-green">Credit Risk</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto fade-in-delay-2">
          Revolutionary AI-powered credit scoring using <span className="text-neon-blue font-semibold">Life Entropy Analysis</span> for 190M underbanked Indians
        </p>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 fade-in-delay-2">
          <div className="glass-card p-6 rounded-xl pulse-glow">
            <div className="text-3xl font-bold neon-green mb-2">
              <AnimatedCounter end={87} suffix="%" />
            </div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
            <div className="text-xs text-muted-foreground">(vs 72% traditional)</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl pulse-glow">
            <div className="text-3xl font-bold neon-blue mb-2">
              &lt;<AnimatedCounter end={100} />ms
            </div>
            <div className="text-sm text-muted-foreground">Scoring Speed</div>
            <div className="text-xs text-muted-foreground">Real-time</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl pulse-glow">
            <div className="text-3xl font-bold neon-green mb-2">
              <AnimatedCounter end={40} suffix="%" />
            </div>
            <div className="text-sm text-muted-foreground">More Coverage</div>
            <div className="text-xs text-muted-foreground">Underbanked reach</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl pulse-glow">
            <div className="text-3xl font-bold gradient-text mb-2">
              ₹<AnimatedCounter end={50} />L
            </div>
            <div className="text-sm text-muted-foreground">Defaults Prevented</div>
            <div className="text-xs text-muted-foreground">Proven impact</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-2">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue to-neon-green text-dark-primary font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon"
            onClick={() => scrollToSection('demo')}
          >
            🚀 View Live Demo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-bold px-8 py-4 rounded-full transition-all duration-300"
            onClick={() => scrollToSection('architecture')}
          >
            📚 Technical Docs
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};