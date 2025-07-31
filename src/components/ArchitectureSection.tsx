import { useState } from 'react';

const architectureComponents = [
  {
    name: 'Data Sources',
    description: 'Mobile towers, UPI, SMS, Social',
    latency: '0ms',
    position: { x: 10, y: 20 },
    connections: ['kafka']
  },
  {
    name: 'Kafka Streams',
    description: 'Real-time data ingestion',
    latency: '5ms',
    position: { x: 30, y: 20 },
    connections: ['entropy', 'ghost', 'gnn']
  },
  {
    name: 'Entropy Engine',
    description: 'Life stability calculation',
    latency: '15ms',
    position: { x: 50, y: 10 },
    connections: ['timescale']
  },
  {
    name: 'Ghost Detector',
    description: 'Identity fingerprinting',
    latency: '25ms',
    position: { x: 50, y: 30 },
    connections: ['neo4j']
  },
  {
    name: 'GNN Engine',
    description: 'Social risk analysis',
    latency: '20ms',
    position: { x: 50, y: 50 },
    connections: ['neo4j']
  },
  {
    name: 'TimescaleDB',
    description: 'Time-series storage',
    latency: '3ms',
    position: { x: 70, y: 15 },
    connections: ['api']
  },
  {
    name: 'Neo4j',
    description: 'Graph database',
    latency: '5ms',
    position: { x: 70, y: 40 },
    connections: ['api']
  },
  {
    name: 'Redis Cache',
    description: 'High-speed cache',
    latency: '1ms',
    position: { x: 70, y: 65 },
    connections: ['api']
  },
  {
    name: 'API Gateway',
    description: 'FastAPI endpoint',
    latency: '2ms',
    position: { x: 90, y: 40 },
    connections: []
  }
];

const techStack = [
  { name: 'Python', category: 'Backend', icon: '🐍' },
  { name: 'TensorFlow', category: 'ML', icon: '🧠' },
  { name: 'FastAPI', category: 'API', icon: '⚡' },
  { name: 'Kafka', category: 'Streaming', icon: '📡' },
  { name: 'Neo4j', category: 'Database', icon: '🕸️' },
  { name: 'TimescaleDB', category: 'Database', icon: '⏰' },
  { name: 'Redis', category: 'Cache', icon: '💾' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' }
];

export const ArchitectureSection = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [totalLatency, setTotalLatency] = useState(76);

  return (
    <section id="architecture" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            High-performance, scalable system processing 1TB data daily with sub-100ms latency
          </p>
          <div className="inline-block glass-card px-6 py-3 rounded-full">
            <span className="text-neon-green font-bold">Total Latency: {totalLatency}ms</span>
          </div>
        </div>

        {/* Interactive Architecture Diagram */}
        <div className="relative mb-16">
          <div className="glass-card p-8 rounded-xl min-h-96">
            <svg className="w-full h-96" viewBox="0 0 100 80">
              {/* Connection Lines */}
              <g stroke="hsl(var(--neon-blue))" strokeWidth="0.3" opacity="0.6">
                <line x1="20" y1="25" x2="35" y2="25" className="animate-pulse" />
                <line x1="35" y1="25" x2="50" y2="15" className="animate-pulse" />
                <line x1="35" y1="25" x2="50" y2="35" className="animate-pulse" />
                <line x1="35" y1="25" x2="50" y2="55" className="animate-pulse" />
                <line x1="55" y1="15" x2="70" y2="20" className="animate-pulse" />
                <line x1="55" y1="35" x2="70" y2="45" className="animate-pulse" />
                <line x1="55" y1="55" x2="70" y2="45" className="animate-pulse" />
                <line x1="75" y1="20" x2="85" y2="45" className="animate-pulse" />
                <line x1="75" y1="45" x2="85" y2="45" className="animate-pulse" />
                <line x1="75" y1="70" x2="85" y2="45" className="animate-pulse" />
              </g>

              {/* Architecture Components */}
              {architectureComponents.map((component, index) => (
                <g key={component.name}>
                  <circle
                    cx={component.position.x}
                    cy={component.position.y}
                    r="3"
                    fill={hoveredComponent === component.name ? "hsl(var(--neon-green))" : "hsl(var(--neon-blue))"}
                    className="cursor-pointer transition-all duration-300 hover:r-4"
                    onMouseEnter={() => setHoveredComponent(component.name)}
                    onMouseLeave={() => setHoveredComponent(null)}
                  />
                  <text
                    x={component.position.x}
                    y={component.position.y - 5}
                    textAnchor="middle"
                    className="text-xs fill-foreground cursor-pointer"
                    onMouseEnter={() => setHoveredComponent(component.name)}
                    onMouseLeave={() => setHoveredComponent(null)}
                  >
                    {component.name}
                  </text>
                  {hoveredComponent === component.name && (
                    <g>
                      <rect
                        x={component.position.x - 8}
                        y={component.position.y + 3}
                        width="16"
                        height="6"
                        fill="hsl(var(--background))"
                        stroke="hsl(var(--neon-blue))"
                        strokeWidth="0.2"
                        rx="1"
                      />
                      <text
                        x={component.position.x}
                        y={component.position.y + 6.5}
                        textAnchor="middle"
                        className="text-xs fill-neon-blue"
                      >
                        {component.latency}
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Component Details */}
          {hoveredComponent && (
            <div className="absolute top-4 right-4 glass-card p-4 rounded-lg max-w-xs fade-in">
              <h4 className="font-bold neon-blue mb-2">{hoveredComponent}</h4>
              <p className="text-sm text-muted-foreground">
                {architectureComponents.find(c => c.name === hoveredComponent)?.description}
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 neon-green">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-bold neon-blue text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">🚀</div>
            <div className="text-2xl font-bold neon-blue mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">Requests per second</div>
            <div className="mt-2 w-full bg-muted rounded-full h-2">
              <div className="bg-neon-blue h-2 rounded-full w-4/5"></div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-2xl font-bold neon-green mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
            <div className="mt-2 w-full bg-muted rounded-full h-2">
              <div className="bg-neon-green h-2 rounded-full w-full"></div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">📊</div>
            <div className="text-2xl font-bold gradient-text mb-2">Auto</div>
            <div className="text-sm text-muted-foreground">Horizontal scaling</div>
            <div className="mt-2 w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-to-r from-neon-blue to-neon-green h-2 rounded-full w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};