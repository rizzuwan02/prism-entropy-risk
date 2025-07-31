import { Card } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Hitesh Mehta',
    role: 'Computer Science',
    expertise: '3rd Year Student',
    avatar: '👨‍💻',
    background: 'Delhi Technological University',
    email: 'hteshpooja@gmail.com'
  },
  {
    name: 'Nipun Taneja',
    role: 'Electronics & Communication',
    expertise: '3rd Year Student',
    avatar: '👨‍🔬',
    background: 'Delhi Technological University',
    email: 'nipuntaneja05@gmail.com'
  },
  {
    name: 'Himanshu Mourya',
    role: 'Electronics & Communication',
    expertise: '3rd Year Student',
    avatar: '👨‍⚙️',
    background: 'Delhi Technological University',
    email: 'himanshumouryaa.2004@gmail.com'
  },
  {
    name: 'Aarushi Sangal',
    role: 'Computer Science with AI',
    expertise: '3rd Year Student',
    avatar: '👩‍💼',
    background: 'Gautam Buddha University',
    email: 'sangalaarushi2004cef@gmail.com'
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
            Passionate innovators from DTU & GBU building the future of credit assessment
          </p>
          
          {/* University Badge */}
          <div className="inline-flex items-center space-x-4 glass-card px-6 py-3 rounded-full">
            <div className="text-2xl">🏛️</div>
            <div>
              <div className="font-bold neon-blue">DTU & GBU</div>
              <div className="text-sm text-muted-foreground">Delhi Technological University & Gautam Buddha University</div>
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
                <span className="text-neon-blue">hteshpooja@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-muted">
              <div className="text-xs text-muted-foreground">
                Built with ❤️ by DTU & GBU Students<br />
                © 2025 PRISM Team
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};