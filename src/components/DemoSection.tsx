import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const useCases = [
  {
    name: 'Rajesh',
    type: 'Rural Farmer',
    story: 'Got his first loan based on consistent movement patterns between home and fields',
    avatar: '👨‍🌾',
    metrics: {
      entropy: 0.234,
      score: 720,
      factors: ['Stable location', 'Regular patterns', 'Community trust']
    }
  },
  {
    name: 'Priya',
    type: 'Small Business Owner',
    story: "Tea stall qualified through stable utility payments and foot traffic patterns",
    avatar: '👩‍💼',
    metrics: {
      entropy: 0.156,
      score: 785,
      factors: ['Consistent payments', 'Business location', 'Customer flow']
    }
  },
  {
    name: 'Amit',
    type: 'Gig Worker',
    story: 'Delivery patterns and app usage proved creditworthiness despite irregular income',
    avatar: '🚴‍♂️',
    metrics: {
      entropy: 0.445,
      score: 680,
      factors: ['Active work patterns', 'Digital footprint', 'Timely deliveries']
    }
  }
];

export const DemoSection = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationProgress(0);
    
    const interval = setInterval(() => {
      setSimulationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCase(prev => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCase = useCases[selectedCase];

  return (
    <section id="demo" className="py-20 px-4 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See PRISM in action with real-world scenarios from underbanked individuals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Use Case Carousel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold neon-green mb-6">Success Stories</h3>
            
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className={`p-6 cursor-pointer transition-all duration-500 ${
                  selectedCase === index 
                    ? 'gradient-border pulse-glow' 
                    : 'glass-card hover:scale-105'
                }`}
                onClick={() => setSelectedCase(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold neon-blue">{useCase.name}</h4>
                      <span className="text-sm text-muted-foreground">• {useCase.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{useCase.story}</p>
                    
                    {selectedCase === index && (
                      <div className="space-y-2 fade-in">
                        <div className="flex justify-between text-sm">
                          <span>Credit Score:</span>
                          <span className="font-bold neon-green">{useCase.metrics.score}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Life Entropy:</span>
                          <span className="font-bold neon-blue">{useCase.metrics.entropy}</span>
                        </div>
                        <div className="mt-3">
                          <div className="text-xs text-muted-foreground mb-1">Key Factors:</div>
                          {useCase.metrics.factors.map((factor, i) => (
                            <div key={i} className="text-xs flex items-center">
                              <span className="w-1 h-1 bg-neon-green rounded-full mr-2"></span>
                              {factor}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex space-x-2 justify-center">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedCase === index ? 'bg-neon-blue' : 'bg-muted'
                  }`}
                  onClick={() => setSelectedCase(index)}
                />
              ))}
            </div>
          </div>

          {/* Interactive Demo Panel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold neon-green mb-6">Real-time Analysis</h3>
            
            <Card className="glass-card p-6">
              <h4 className="font-bold mb-4 neon-blue">Entropy Calculator</h4>
              
              {/* Live Entropy Visualization */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Life Entropy Score</span>
                  <span className="font-bold">{currentCase.metrics.entropy}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4 relative overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-green rounded-full transition-all duration-1000"
                    style={{ width: `${(1 - currentCase.metrics.entropy) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-dark-primary">
                    {((1 - currentCase.metrics.entropy) * 100).toFixed(0)}% Stable
                  </div>
                </div>
              </div>

              {/* Risk Score Display */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Credit Score</span>
                  <span className="font-bold neon-green">{currentCase.metrics.score}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className={`p-2 rounded text-center ${currentCase.metrics.score >= 700 ? 'bg-neon-green/20 text-neon-green' : 'bg-muted'}`}>
                    Good
                  </div>
                  <div className={`p-2 rounded text-center ${currentCase.metrics.score >= 600 && currentCase.metrics.score < 700 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-muted'}`}>
                    Fair
                  </div>
                  <div className={`p-2 rounded text-center ${currentCase.metrics.score < 600 ? 'bg-red-500/20 text-red-400' : 'bg-muted'}`}>
                    Poor
                  </div>
                </div>
              </div>

              {/* Simulation Button */}
              <Button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-green text-dark-primary font-bold hover:scale-105 transition-all duration-300"
              >
                {isSimulating ? 'Analyzing...' : '🔄 Run Analysis'}
              </Button>

              {/* Simulation Progress */}
              {isSimulating && (
                <div className="mt-4 fade-in">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Processing...</span>
                    <span>{simulationProgress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-neon-blue to-neon-green h-2 rounded-full transition-all duration-100"
                      style={{ width: `${simulationProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </Card>

            {/* ROI Calculator */}
            <Card className="glass-card p-6">
              <h4 className="font-bold mb-4 neon-blue">Bank ROI Calculator</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Default Reduction:</span>
                  <span className="font-bold neon-green">62%</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Speed:</span>
                  <span className="font-bold neon-blue">&lt;100ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Coverage:</span>
                  <span className="font-bold gradient-text">40%</span>
                </div>
                <div className="border-t border-muted pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Est. Annual Savings:</span>
                    <span className="neon-green">₹2.5Cr</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};