import React from "react";

export interface CommandResult {
  output: React.ReactNode;
  type: 'success' | 'error' | 'info';
}

export class CommandExecutor {
  private commands: Map<string, (args: string[]) => Promise<CommandResult> | CommandResult> = new Map();

  constructor() {
    this.registerCommands();
  }

  private registerCommands() {
    this.commands.set('help', this.helpCommand);
    this.commands.set('whoami', this.whoamiCommand);
    this.commands.set('ls', this.lsCommand);
    this.commands.set('cd', this.cdCommand);
    this.commands.set('cat', this.catCommand);
    this.commands.set('git', this.gitCommand);
    this.commands.set('docker', this.dockerCommand);
    this.commands.set('npm', this.npmCommand);
    this.commands.set('curl', this.curlCommand);
    this.commands.set('ping', this.pingCommand);
    this.commands.set('clear', this.clearCommand);
    this.commands.set('pwd', this.pwdCommand);
    this.commands.set('date', this.dateCommand);
    this.commands.set('uname', this.unameCommand);
    this.commands.set('history', this.historyCommand);
    this.commands.set('htop', this.htopCommand);
    this.commands.set('ssh', this.sshCommand);
    this.commands.set('vim', this.vimCommand);
    this.commands.set('tree', this.treeCommand);
    this.commands.set('matrix', this.matrixCommand);
    this.commands.set('neofetch', this.neofetchCommand);
    this.commands.set('fortune', this.fortuneCommand);
    this.commands.set('theme', this.themeCommand);
  }

  async execute(input: string): Promise<CommandResult> {
    const [command, ...args] = input.trim().split(' ');
    const lowerCommand = command.toLowerCase();

    if (!this.commands.has(lowerCommand)) {
      return {
        output: (
          <div className="text-red-400">
            bash: {command}: command not found
            <br />
            <span className="text-gray-400">Type 'help' for available commands</span>
          </div>
        ),
        type: 'error'
      };
    }

    const handler = this.commands.get(lowerCommand)!;
    return await handler(args);
  }

  private helpCommand = (): CommandResult => {
    return {
      output: (
        <div className="space-y-1">
          <div className="text-yellow-400 font-bold">📋 Available Commands:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <div><span className="text-cyan-400">whoami</span><span className="text-gray-400"> - About me</span></div>
            <div><span className="text-cyan-400">ls</span><span className="text-gray-400"> - List portfolio sections</span></div>
            <div><span className="text-cyan-400">cat [file]</span><span className="text-gray-400"> - Display file contents</span></div>
            <div><span className="text-cyan-400">git log</span><span className="text-gray-400"> - Career timeline</span></div>
            <div><span className="text-cyan-400">docker ps</span><span className="text-gray-400"> - Current tech stack</span></div>
            <div><span className="text-cyan-400">npm list</span><span className="text-gray-400"> - Technology dependencies</span></div>
            <div><span className="text-cyan-400">curl /api/skills</span><span className="text-gray-400"> - Skills API</span></div>
            <div><span className="text-cyan-400">ping [tech]</span><span className="text-gray-400"> - Technology proficiency</span></div>
            <div><span className="text-cyan-400">htop</span><span className="text-gray-400"> - Skills dashboard</span></div>
            <div><span className="text-cyan-400">ssh contact</span><span className="text-gray-400"> - Contact form</span></div>
            <div><span className="text-cyan-400">tree</span><span className="text-gray-400"> - Portfolio structure</span></div>
            <div><span className="text-cyan-400">neofetch</span><span className="text-gray-400"> - System info</span></div>
            <div><span className="text-cyan-400">theme [name]</span><span className="text-gray-400"> - Change theme</span></div>
          </div>
          <div className="mt-3 text-gray-400">
            <div><span className="text-cyan-400">clear</span> - Clear terminal | <span className="text-cyan-400">history</span> - Command history</div>
            <div><span className="text-cyan-400">matrix</span> - Easter egg 🍃 | <span className="text-cyan-400">fortune</span> - Random quote</div>
          </div>
        </div>
      ),
      type: 'info'
    };
  };

  private whoamiCommand = (): CommandResult => {
    return {
      output: (
        <div className="space-y-3">
          <div className="text-cyan-400 text-lg font-bold">Mehretab Ayalew Hailegebriel</div>
          <div className="text-yellow-400">Backend Engineer | AWS Solutions Architect</div>
          <div className="space-y-2 text-gray-300">
            <div>🏢 <span className="text-blue-400">Currently:</span> Backend Engineer at Shega Media and Technology</div>
            <div>📍 <span className="text-blue-400">Location:</span> Addis Ababa, Ethiopia</div>
            <div>🚀 <span className="text-blue-400">Specializes in:</span> C#, .NET, TypeScript, Cloud Architecture</div>
            <div>🔧 <span className="text-blue-400">Expertise:</span> AI-powered solutions, scalable backend systems</div>
            <div>📧 <span className="text-blue-400">Contact:</span> cyrmee@gmail.com</div>
          </div>
          <div className="text-green-400 mt-3">
            "I see backend engineering as a form of translation—turning complex needs into simple, reliable systems."
          </div>
        </div>
      ),
      type: 'success'
    };
  };

  private lsCommand = (args: string[]): CommandResult => {
    const items = [
      { name: 'about.md', type: 'file', description: 'Personal overview and background' },
      { name: 'experience/', type: 'dir', description: 'Professional work history' },
      { name: 'projects/', type: 'dir', description: 'Featured projects and code' },
      { name: 'skills.json', type: 'file', description: 'Technical skills and proficiency' },
      { name: 'education.txt', type: 'file', description: 'Academic background' },
      { name: 'certifications/', type: 'dir', description: 'Professional certifications' },
      { name: 'contact.vcard', type: 'file', description: 'Contact information' },
    ];

    return {
      output: (
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <span className={item.type === 'dir' ? 'text-blue-400' : 'text-green-400'}>
                {item.type === 'dir' ? '📁' : '📄'}
              </span>
              <span className={item.type === 'dir' ? 'text-blue-400 font-bold' : 'text-white'}>
                {item.name}
              </span>
              <span className="text-gray-500">- {item.description}</span>
            </div>
          ))}
        </div>
      ),
      type: 'success'
    };
  };

  private catCommand = (args: string[]): CommandResult => {
    const file = args[0];
    if (!file) {
      return {
        output: <div className="text-red-400">cat: missing file operand</div>,
        type: 'error'
      };
    }

    switch (file.toLowerCase()) {
      case 'about.md':
        return {
          output: (
            <div className="space-y-2">
              <div className="text-yellow-400"># About Mehretab</div>
              <div className="text-gray-300">
                I see backend engineering as a form of translation—turning complex needs into simple, reliable systems. 
                My latest work translated the challenge of financial analysis into an intuitive semantic search experience using GPT-4o.
              </div>
              <div className="text-gray-300">
                Currently at Shega Media and Technology, where I've developed AI-powered business intelligence tools 
                that enhanced both user engagement and internal efficiency.
              </div>
            </div>
          ),
          type: 'success'
        };

      case 'skills.json':
        return {
          output: (
            <pre className="text-green-400">
{`{
  "languages": ["C#", "TypeScript", "Python", "Java"],
  "frameworks": [".NET", "NestJS", "GraphQL"],
  "cloud": ["AWS", "Azure"],
  "databases": ["PostgreSQL", "MongoDB", "Redis"],
  "tools": ["Docker", "Kubernetes"],
  "payments": ["Stripe", "Chapa"],
  "proficiency": {
    "C#": 95,
    "AWS": 90,
    "TypeScript": 88,
    "Azure": 85,
    "Python": 80
  }
}`}
            </pre>
          ),
          type: 'success'
        };

      case 'contact.vcard':
        return {
          output: (
            <pre className="text-cyan-400">
{`BEGIN:VCARD
VERSION:3.0
FN:Mehretab Ayalew Hailegebriel
ORG:Shega Media and Technology
TITLE:Backend Engineer
EMAIL:cyrmee@gmail.com
EMAIL:mehretabhailegebriel@proton.me
TEL:+251942547895
URL:https://github.com/cyrmee
URL:https://linkedin.com/in/mehretab-hailegebriel
ADR:;;Addis Ababa;Ethiopia
END:VCARD`}
            </pre>
          ),
          type: 'success'
        };

      default:
        return {
          output: <div className="text-red-400">cat: {file}: No such file or directory</div>,
          type: 'error'
        };
    }
  };

  private gitCommand = (args: string[]): CommandResult => {
    const subCommand = args[0];
    
    if (subCommand === 'log') {
      return {
        output: (
          <div className="space-y-1 font-mono text-sm">
            <div className="text-yellow-400">
              <span className="text-orange-400">commit 2024-12</span> Backend Engineer at Shega Media
            </div>
            <div className="text-gray-400 ml-4">AI-powered business intelligence with GPT-4o</div>
            
            <div className="text-yellow-400">
              <span className="text-orange-400">commit 2023-10</span> Senior Backend Dev at MEDKET
            </div>
            <div className="text-gray-400 ml-4">Hospital scheduler, AWS infrastructure</div>
            
            <div className="text-yellow-400">
              <span className="text-orange-400">commit 2024-01</span> Contract Developer at Maraki
            </div>
            <div className="text-gray-400 ml-4">NestJS APIs, real-time features</div>
            
            <div className="text-yellow-400">
              <span className="text-orange-400">commit 2022-10</span> Backend Dev at Binary Tech
            </div>
            <div className="text-gray-400 ml-4">Laravel/MySQL optimization, Redis caching</div>
          </div>
        ),
        type: 'success'
      };
    }

    return {
      output: <div className="text-gray-400">Try: git log</div>,
      type: 'info'
    };
  };

  private dockerCommand = (args: string[]): CommandResult => {
    if (args[0] === 'ps') {
      return {
        output: (
          <div className="space-y-1 font-mono text-xs">
            <div className="text-gray-400">CONTAINER ID   IMAGE           STATUS    PORTS     NAMES</div>
            <div>
              <span className="text-green-400">a1b2c3d4</span> 
              <span className="ml-8 text-blue-400">csharp:latest</span> 
              <span className="ml-6 text-green-400">Up 3 years</span> 
              <span className="ml-6 text-yellow-400">primary-language</span>
            </div>
            <div>
              <span className="text-green-400">e5f6g7h8</span> 
              <span className="ml-8 text-blue-400">aws:cloud</span> 
              <span className="ml-9 text-green-400">Up 2 years</span> 
              <span className="ml-6 text-yellow-400">cloud-platform</span>
            </div>
            <div>
              <span className="text-green-400">i9j0k1l2</span> 
              <span className="ml-8 text-blue-400">typescript:node</span> 
              <span className="ml-4 text-green-400">Up 2 years</span> 
              <span className="ml-6 text-yellow-400">frontend-apis</span>
            </div>
            <div>
              <span className="text-green-400">m3n4o5p6</span> 
              <span className="ml-8 text-blue-400">azure:ai</span> 
              <span className="ml-11 text-green-400">Up 1 year</span> 
              <span className="ml-7 text-yellow-400">ai-services</span>
            </div>
          </div>
        ),
        type: 'success'
      };
    }

    return {
      output: <div className="text-gray-400">Try: docker ps</div>,
      type: 'info'
    };
  };

  private npmCommand = (args: string[]): CommandResult => {
    if (args[0] === 'list') {
      return {
        output: (
          <div className="space-y-1 text-sm">
            <div className="text-gray-400">mehretab-tech-stack@1.0.0</div>
            <div>├── <span className="text-green-400">@dotnet/core@8.0.0</span></div>
            <div>├── <span className="text-green-400">@aws/solutions-architect@2024.0.0</span></div>
            <div>├── <span className="text-green-400">typescript@5.0.0</span></div>
            <div>├── <span className="text-green-400">nestjs@10.0.0</span></div>
            <div>├── <span className="text-green-400">postgresql@15.0.0</span></div>
            <div>├── <span className="text-green-400">mongodb@7.0.0</span></div>
            <div>├── <span className="text-green-400">azure-ai@1.0.0</span></div>
            <div>└── <span className="text-green-400">graphql@16.0.0</span></div>
          </div>
        ),
        type: 'success'
      };
    }

    return {
      output: <div className="text-gray-400">Try: npm list</div>,
      type: 'info'
    };
  };

  private curlCommand = (args: string[]): CommandResult => {
    const url = args.find(arg => !arg.startsWith('-'));
    
    if (url === '/api/skills' || url === 'mehretab.dev/api/skills') {
      return {
        output: (
          <pre className="text-green-400 text-sm">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "backend": ["C#", ".NET", "NestJS", "GraphQL"],
  "cloud": ["AWS", "Azure", "Docker", "Kubernetes"],
  "databases": ["PostgreSQL", "MongoDB", "Redis"],
  "ai_ml": ["Azure AI", "GPT-4o", "Semantic Search"],
  "experience_years": 3,
  "certifications": ["AWS Solutions Architect", "AWS Cloud Practitioner"],
  "status": "Available for opportunities"
}`}
          </pre>
        ),
        type: 'success'
      };
    }

    return {
      output: <div className="text-red-400">curl: {url}: No route found</div>,
      type: 'error'
    };
  };

  private pingCommand = (args: string[]): CommandResult => {
    const tech = args[0]?.toLowerCase();
    
    const proficiencies: Record<string, number> = {
      'csharp': 95, 'c#': 95,
      'aws': 90,
      'typescript': 88,
      'azure': 85,
      'python': 80,
      'docker': 85,
      'postgresql': 88,
      'mongodb': 82,
      'nestjs': 85,
      'graphql': 80
    };

    const proficiency = proficiencies[tech] || Math.floor(Math.random() * 40) + 40;

    return {
      output: (
        <div className="space-y-1">
          <div>PING {tech} (proficiency.mehretab.dev)</div>
          <div>64 bytes from {tech}: time={proficiency}ms (proficiency level)</div>
          <div>64 bytes from {tech}: time={(proficiency + Math.floor(Math.random() * 10))}ms</div>
          <div>64 bytes from {tech}: time={(proficiency - Math.floor(Math.random() * 5))}ms</div>
          <div className="mt-2 text-yellow-400">
            Proficiency Level: {proficiency}% {proficiency > 80 ? '🟢 Expert' : proficiency > 60 ? '🟡 Proficient' : '🟠 Intermediate'}
          </div>
        </div>
      ),
      type: 'success'
    };
  };

  private cdCommand = (args: string[]): CommandResult => {
    const dir = args[0] || '~';
    return {
      output: <div className="text-blue-400">Changed directory to: {dir}</div>,
      type: 'success'
    };
  };

  private clearCommand = (): CommandResult => {
    // This will be handled specially in the Terminal component
    return {
      output: <div className="text-gray-400">Terminal cleared</div>,
      type: 'info'
    };
  };

  private pwdCommand = (): CommandResult => {
    return {
      output: <div className="text-blue-400">/home/visitor/mehretab-portfolio</div>,
      type: 'success'
    };
  };

  private dateCommand = (): CommandResult => {
    return {
      output: <div className="text-white">{new Date().toString()}</div>,
      type: 'success'
    };
  };

  private unameCommand = (args: string[]): CommandResult => {
    return {
      output: <div className="text-cyan-400">Mehretab-Portfolio 1.0.0 Backend-Engineer</div>,
      type: 'success'
    };
  };

  private historyCommand = (): CommandResult => {
    // This will be implemented with actual command history
    return {
      output: (
        <div className="text-gray-400">
          Command history will show your recent commands
        </div>
      ),
      type: 'info'
    };
  };

  private treeCommand = (): CommandResult => {
    return {
      output: (
        <div className="space-y-1 font-mono text-sm">
          <div className="text-cyan-400">📁 mehretab-portfolio</div>
          <div>├── 📄 <span className="text-white">about.md</span></div>
          <div>├── 📁 <span className="text-blue-400">experience/</span></div>
          <div>│   ├── 📄 shega-media.md</div>
          <div>│   ├── 📄 medket-solutions.md</div>
          <div>│   ├── 📄 maraki-consultancy.md</div>
          <div>│   └── 📄 binary-tech.md</div>
          <div>├── 📁 <span className="text-blue-400">projects/</span></div>
          <div>│   ├── 📄 ai-expense-tracker.json</div>
          <div>│   ├── 📄 hospital-scheduler.json</div>
          <div>│   └── 📄 payment-integration.json</div>
          <div>├── 📁 <span className="text-blue-400">certifications/</span></div>
          <div>│   ├── 📄 aws-solutions-architect.pdf</div>
          <div>│   ├── 📄 aws-cloud-practitioner.pdf</div>
          <div>│   └── 📄 alx-cloud-computing.pdf</div>
          <div>├── 📄 <span className="text-green-400">skills.json</span></div>
          <div>├── 📄 <span className="text-green-400">contact.vcard</span></div>
          <div>└── 📄 <span className="text-green-400">resume.pdf</span></div>
        </div>
      ),
      type: 'success'
    };
  };

  private neofetchCommand = (): CommandResult => {
    return {
      output: (
        <div className="flex space-x-4">
          <div className="text-cyan-400 text-4xl font-mono">
            <pre>{`
    ██████╗ 
   ██╔════╝ 
   ██║      
   ██║      
   ╚██████╗ 
    ╚═════╝ 
            `}</pre>
          </div>
          <div className="space-y-1 text-sm">
            <div><span className="text-cyan-400">Name:</span> Mehretab Hailegebriel</div>
            <div><span className="text-cyan-400">Role:</span> Backend Engineer</div>
            <div><span className="text-cyan-400">OS:</span> Linux (Ubuntu/AWS)</div>
            <div><span className="text-cyan-400">Shell:</span> bash 5.1.16</div>
            <div><span className="text-cyan-400">Languages:</span> C#, TypeScript, Python</div>
            <div><span className="text-cyan-400">Cloud:</span> AWS, Azure</div>
            <div><span className="text-cyan-400">Experience:</span> 3+ years</div>
            <div><span className="text-cyan-400">Location:</span> Addis Ababa, Ethiopia</div>
            <div><span className="text-cyan-400">Status:</span> <span className="text-green-400">● Online</span></div>
          </div>
        </div>
      ),
      type: 'success'
    };
  };

  private htopCommand = (): CommandResult => {
    const skills = [
      { name: 'C#', cpu: 95, mem: 88 },
      { name: 'AWS', cpu: 90, mem: 85 },
      { name: 'TypeScript', cpu: 88, mem: 82 },
      { name: 'Azure', cpu: 85, mem: 80 },
      { name: 'Python', cpu: 80, mem: 75 },
      { name: 'Docker', cpu: 85, mem: 78 },
      { name: 'PostgreSQL', cpu: 88, mem: 81 },
      { name: 'MongoDB', cpu: 82, mem: 79 },
    ];

    return {
      output: (
        <div className="space-y-1 font-mono text-xs">
          <div className="text-green-400">Skills Dashboard - htop 3.2.1</div>
          <div className="text-gray-400">Uptime: 3+ years, Load average: 0.95, 0.88, 0.85</div>
          <div className="border-t border-gray-600 pt-2">
            <div className="flex space-x-8 text-gray-400 mb-1">
              <span>PID</span>
              <span>SKILL</span>
              <span>%CPU</span>
              <span>%MEM</span>
              <span>STATUS</span>
            </div>
            {skills.map((skill, idx) => (
              <div key={skill.name} className="flex space-x-8">
                <span className="text-yellow-400">{(1000 + idx).toString()}</span>
                <span className="text-white w-12">{skill.name}</span>
                <span className={skill.cpu > 85 ? 'text-green-400' : 'text-yellow-400'}>
                  {skill.cpu.toString().padStart(3)}%
                </span>
                <span className={skill.mem > 80 ? 'text-green-400' : 'text-yellow-400'}>
                  {skill.mem.toString().padStart(3)}%
                </span>
                <span className="text-green-400">Active</span>
              </div>
            ))}
          </div>
          <div className="text-gray-400 text-xs mt-2">Press 'q' to quit (just kidding, this is read-only!)</div>
        </div>
      ),
      type: 'success'
    };
  };

  private sshCommand = (args: string[]): CommandResult => {
    const target = args[0];
    
    if (target === 'contact' || target === 'contact@mehretab.dev') {
      return {
        output: (
          <div className="space-y-2">
            <div className="text-green-400">🔐 SSH Connection Established</div>
            <div className="text-cyan-400">Connected to contact@mehretab.dev</div>
            <div className="border border-gray-600 p-3 rounded">
              <div className="text-yellow-400 mb-2">📧 Contact Information:</div>
              <div className="space-y-1 text-sm">
                <div><span className="text-blue-400">Primary:</span> cyrmee@gmail.com</div>
                <div><span className="text-blue-400">Secondary:</span> mehretabhailegebriel@proton.me</div>
                <div><span className="text-blue-400">Phone:</span> +251942547895</div>
                <div><span className="text-blue-400">LinkedIn:</span> linkedin.com/in/mehretab-hailegebriel</div>
                <div><span className="text-blue-400">GitHub:</span> github.com/cyrmee</div>
              </div>
              <div className="mt-3 text-green-400">
                ✅ Available for: Full-time positions, Contract work, Consulting
              </div>
            </div>
            <div className="text-gray-400">Connection to contact@mehretab.dev closed.</div>
          </div>
        ),
        type: 'success'
      };
    }

    return {
      output: <div className="text-red-400">ssh: Could not resolve hostname {target}: Name or service not known</div>,
      type: 'error'
    };
  };

  private matrixCommand = (): CommandResult => {
    return {
      output: (
        <div className="space-y-1">
          <div className="text-green-400 animate-pulse">
            <div>01001000 01100101 01101100 01101100 01101111</div>
            <div>01010111 01101111 01110010 01101100 01100100</div>
            <div>01000010 01100001 01100011 01101011 01100101</div>
            <div>01101110 01100100 00100000 01000101 01101110</div>
            <div>01100111 01101001 01101110 01100101 01100101</div>
          </div>
          <div className="text-cyan-400 mt-2">
            Decoding... "Hello World Backend Engineer"
          </div>
          <div className="text-yellow-400 text-xs">
            🐰 Welcome to the Matrix, Neo. Ready to build the backend of reality?
          </div>
        </div>
      ),
      type: 'success'
    };
  };

  private fortuneCommand = (): CommandResult => {
    const fortunes = [
      "A good API is like a joke. If you have to explain it, it's not good.",
      "There are only 10 types of people in this world: those who understand binary and those who don't.",
      "The best backend is the one users never notice.",
      "Debugging is like being the detective in a crime movie where you are also the murderer.",
      "Code never lies, comments sometimes do.",
      "A system administrator's life is a sorry one. One day they'll be replaced by a shell script.",
      "In a world without walls and fences, who needs Windows and Gates?",
      "The cloud is just someone else's computer.",
    ];
    
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    return {
      output: (
        <div className="border border-gray-600 p-3 rounded">
          <div className="text-yellow-400 italic">"{fortune}"</div>
          <div className="text-gray-400 text-xs mt-2">- Fortune Cookie for Engineers</div>
        </div>
      ),
      type: 'success'
    };
  };

  private vimCommand = (args: string[]): CommandResult => {
    return {
      output: (
        <div className="space-y-2">
          <div className="text-red-400">vim: Terminal mode detected</div>
          <div className="text-gray-400">This terminal doesn't support vim yet!</div>
          <div className="text-cyan-400">Try: cat [filename] to view files</div>
          <div className="text-yellow-400">Or visit: <a href="https://docs.google.com/document/d/1bW952D7A45oxZ35u06SGxaTqTDfU1-3Wn5JB_0rY2vk/edit" className="underline" target="_blank" rel="noopener noreferrer">Resume Link</a></div>
        </div>
      ),
      type: 'error'
    };
  };

  private themeCommand = (args: string[]): CommandResult => {
    const availableThemes = ["hacker", "matrix", "cyberpunk", "retro", "vscode"];
    
    if (!args[0]) {
      return {
        output: (
          <div className="space-y-2">
            <div className="text-yellow-400">🎨 Available Themes:</div>
            <div className="grid grid-cols-2 gap-1">
              {availableThemes.map(theme => (
                <div key={theme} className="text-cyan-400">
                  {theme}
                </div>
              ))}
            </div>
            <div className="text-gray-400 mt-2">Usage: theme [name]</div>
            <div className="text-gray-400">Example: theme matrix</div>
          </div>
        ),
        type: 'info'
      };
    }

    const theme = args[0].toLowerCase();
    if (availableThemes.includes(theme)) {
      // This would ideally trigger a theme change in the parent component
      return {
        output: (
          <div className="space-y-1">
            <div className="text-green-400">✓ Theme changed to: {theme}</div>
            <div className="text-gray-400">Note: Use the theme switcher in the header for actual theme changes!</div>
          </div>
        ),
        type: 'success'
      };
    } else {
      return {
        output: (
          <div className="text-red-400">
            Unknown theme: {theme}
            <br />
            Available: {availableThemes.join(', ')}
          </div>
        ),
        type: 'error'
      };
    }
  };
}