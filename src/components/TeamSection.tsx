import { Card } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Arjun Sharma',
    role: 'ML Engineer & Team Lead',
    expertise: 'Deep Learning, Graph Neural Networks',
    avatar: '👨‍💻',
    background: 'Ex-Google, IIT Hyderabad CSE'
  },
  {
    name: 'Priya Patel',
    role: 'Data Scientist',
    expertise: 'Statistical Modeling, Risk Analytics',
    avatar: '👩‍🔬',
    background: 'Ex-Goldman Sachs, IIT Hyderabad MS'
  },
  {
    name: 'Rohit Kumar',
    role: 'Backend Engineer',
    expertise: 'Distributed Systems, APIs',
    avatar: '👨‍⚙️',
    background: 'Ex-Microsoft, IIT Hyderabad BTech'
  },
  {
    name: 'Anisha Singh',
    role: 'Product Manager',
    expertise: 'Fintech, User Research',
    avatar: '👩‍💼',
    background: 'Ex-Paytm, IIT Hyderabad MBA'
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Passionate innovators from IIT Hyderabad building the future of credit assessment
          </p>
          
          {/* University Badge */}
          <div className="inline-flex items-center space-x-4 glass-card px-6 py-3 rounded-full">
            <div className="text-2xl">🏛️</div>
            <div>
              <div className="font-bold neon-blue">IIT Hyderabad</div>
              <div className="text-sm text-muted-foreground">Bank of India Innovation Challenge</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 hover:gradient-border"
            >
              <div className="text-6xl mb-4 float">{member.avatar}</div>
              
              <h3 className="text-xl font-bold neon-blue mb-2">
                {member.name}
              </h3>
              
              <div className="text-sm font-medium neon-green mb-3">
                {member.role}
              </div>
              
              <div className="text-sm text-muted-foreground mb-4">
                {member.expertise}
              </div>
              
              <div className="text-xs text-muted-foreground border-t border-muted pt-3">
                {member.background}
              </div>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold neon-blue mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Combined Experience</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold neon-green mb-2">5</div>
            <div className="text-sm text-muted-foreground">Patents Filed</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-sm text-muted-foreground">Research Papers</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold neon-blue mb-2">1st</div>
            <div className="text-sm text-muted-foreground">Place Goal</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold neon-green mb-4">Get In Touch</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span className="text-neon-blue">team-prism@iiith.ac.in</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span>🐱</span>
                <span className="text-neon-blue">github.com/prism-credit</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span>📚</span>
                <span className="text-neon-blue">docs.prism-credit.com</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-muted">
              <div className="text-xs text-muted-foreground">
                Built with ❤️ at IIT Hyderabad<br />
                © 2024 PRISM Team
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};