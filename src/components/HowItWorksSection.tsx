import { useState, useEffect } from 'react';

const steps = [
  {
    id: 1,
    title: 'Data Collection',
    description: 'Mobile towers, UPI transactions, SMS patterns, Social graph',
    details: ['Location patterns', 'Transaction frequency', 'Communication behavior', 'Social connections'],
    icon: '📱',
    color: 'neon-blue'
  },
  {
    id: 2,
    title: 'Entropy Analysis',
    description: 'Calculate life stability across 4 dimensions',
    details: ['Movement entropy', 'Transaction entropy', 'Social entropy', 'Temporal entropy'],
    icon: '🔬',
    color: 'neon-green'
  },
  {
    id: 3,
    title: 'ML Processing',
    description: 'XGBoost + LightGBM + CatBoost ensemble',
    details: ['Feature engineering', 'Model ensemble', 'Cross-validation', 'Hyperparameter tuning'],
    icon: '🤖',
    color: 'neon-blue'
  },
  {
    id: 4,
    title: 'Risk Score',
    description: 'Real-time score with explanations',
    details: ['Credit score', 'Risk factors', 'Recommendations', 'Confidence intervals'],
    icon: '⚡',
    color: 'neon-green'
  },
  {
    id: 5,
    title: 'Monitoring',
    description: 'Continuous tracking and alerts',
    details: ['Real-time updates', 'Anomaly detection', 'Risk alerts', 'Portfolio monitoring'],
    icon: '📊',
    color: 'gradient-text'
  }
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-20 px-4 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">PRISM</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From raw data to actionable insights in under 100 milliseconds
          </p>
        </div>

        {/* Timeline View */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted transform -translate-y-1/2 md:block hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-blue to-neon-green transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-500 ${
                  index <= activeStep ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl transition-all duration-500 ${
                  index <= activeStep 
                    ? 'glass-card gradient-border pulse-glow' 
                    : 'bg-muted'
                }`}>
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className={`text-lg font-bold mb-2 ${
                    index <= activeStep ? step.color : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  {/* Detailed Features - Show for active step */}
                  {index === activeStep && (
                    <div className="glass-card p-4 rounded-lg fade-in">
                      <ul className="text-xs space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-muted-foreground flex items-center">
                            <span className="w-1 h-1 bg-neon-blue rounded-full mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center text-xs font-bold text-dark-primary">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold neon-blue mb-2">&lt;100ms</div>
            <div className="text-sm text-muted-foreground">End-to-end latency</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-2xl font-bold neon-green mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">System uptime</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl mb-2">📈</div>
            <div className="text-2xl font-bold gradient-text mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">Daily evaluations</div>
          </div>
        </div>
      </div>
    </section>
  );
};