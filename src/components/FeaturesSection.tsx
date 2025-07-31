import { useState } from 'react';

const features = [
  {
    title: 'Life Entropy Scoring',
    icon: '🌀',
    description: 'First-ever system measuring behavioral predictability through movement, transaction, social, and temporal entropy',
    detail: 'Our proprietary algorithm analyzes 250+ data points to calculate life stability across 4 dimensions, providing unprecedented insight into financial behavior patterns.',
    visualization: 'entropy'
  },
  {
    title: 'Ghost Defaulter Detection',
    icon: '🧬',
    description: 'Behavioral DNA fingerprinting tracks defaulters across identity changes with 99.7% accuracy',
    detail: 'Advanced ML models create unique behavioral signatures that persist even when users change phone numbers, addresses, or other identifiers.',
    visualization: 'dna'
  },
  {
    title: 'Cascade Risk Prediction',
    icon: '🕸️',
    description: 'Graph neural networks predict how defaults spread through social connections',
    detail: 'Our GNN analyzes social graphs to predict contagion effects, identifying high-risk clusters before defaults propagate.',
    visualization: 'network'
  }
];

const EntropyVisualization = () => {
  const [entropy, setEntropy] = useState(0.673);
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-32 h-32 relative">
        <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-neon-blue rounded-full transition-all duration-1000"
          style={{ 
            clipPath: `conic-gradient(from 0deg, transparent 0deg, transparent ${(1-entropy) * 360}deg, white ${(1-entropy) * 360}deg, white 360deg)`,
            background: `conic-gradient(from 0deg, hsl(var(--neon-blue)) 0deg, hsl(var(--neon-blue)) ${entropy * 360}deg, transparent ${entropy * 360}deg)`
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold neon-blue">{entropy.toFixed(3)}</span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">Life Entropy Score</div>
    </div>
  );
};

const DNAVisualization = () => (
  <div className="flex items-center justify-center">
    <div className="relative w-32 h-32">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-neon-green rounded-full animate-pulse"
          style={{
            left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
            top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl">🧬</div>
      </div>
    </div>
  </div>
);

const NetworkVisualization = () => (
  <div className="relative w-32 h-32">
    <svg className="w-full h-full" viewBox="0 0 128 128">
      {/* Network connections */}
      <g stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6">
        <line x1="20" y1="20" x2="60" y2="40" className="animate-pulse" />
        <line x1="60" y1="40" x2="100" y2="30" className="animate-pulse" />
        <line x1="100" y1="30" x2="80" y2="80" className="animate-pulse" />
        <line x1="80" y1="80" x2="40" y2="90" className="animate-pulse" />
        <line x1="40" y1="90" x2="20" y2="60" className="animate-pulse" />
      </g>
      {/* Network nodes */}
      <g fill="hsl(var(--neon-blue))">
        <circle cx="20" cy="20" r="3" className="animate-pulse" />
        <circle cx="60" cy="40" r="4" className="animate-pulse" />
        <circle cx="100" cy="30" r="3" className="animate-pulse" />
        <circle cx="80" cy="80" r="3" className="animate-pulse" />
        <circle cx="40" cy="90" r="3" className="animate-pulse" />
        <circle cx="20" cy="60" r="3" className="animate-pulse" />
      </g>
    </svg>
  </div>
);

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const renderVisualization = (type: string) => {
    switch (type) {
      case 'entropy':
        return <EntropyVisualization />;
      case 'dna':
        return <DNAVisualization />;
      case 'network':
        return <NetworkVisualization />;
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary <span className="gradient-text">Innovations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three breakthrough technologies that redefine credit risk assessment for the underbanked population
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedFeature === index ? 'gradient-border' : ''
              }`}
              onClick={() => setSelectedFeature(index)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 float">{feature.icon}</div>
                {renderVisualization(feature.visualization)}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center neon-blue">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center">
                {feature.description}
              </p>
              
              {selectedFeature === index && (
                <div className="border-t border-neon-blue/30 pt-6 fade-in">
                  <p className="text-sm text-muted-foreground">
                    {feature.detail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 neon-green">Breakthrough Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold neon-blue mb-2">1TB</div>
              <div className="text-sm text-muted-foreground">Data processed daily</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold neon-green mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Mobile data points</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold gradient-text mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Behavioral profiles</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold neon-blue mb-2">62%</div>
              <div className="text-sm text-muted-foreground">Default reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};