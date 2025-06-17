interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: 'hackathon' | 'academic' | 'competition' | 'certification';
  rank?: string;
  participants?: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  stream?: string;
  status: 'completed' | 'pursuing';
}

export const personalInfo = {
  name: "Aryan Singh Thakur",
  title: "BCA Student & Full Stack Developer",
  subtitle: "Building innovative solutions through code",
  bio: "I'm a passionate BCA 3rd year student and aspiring full-stack developer with a strong track record in competitive programming and hackathons. I've been shortlisted for Smart India Hackathon finals and selected among top participants in Smart Delhi Ideathon, showcasing my problem-solving skills and innovative thinking.",
  location: "Delhi, India",
  email: "iamaryan721@gmail.com",
  phone: "+91 8384041061",
  social: {
    linkedin: "https://www.linkedin.com/in/aryan-singh-thakur-12a422281/",
    github: "https://github.com/heyoaryan",
  }
};

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kasturi Ram College of Higher Education",
    period: "2023 - 2026",
    status: "pursuing"
  },
  {
    id: "edu-2",
    degree: "12th Grade (Senior Secondary)",
    institution: "Sant Sujan Singh Ji International School",
    period: "2023",
    stream: "Commerce with Mathematics",
    status: "completed"
  },
  {
    id: "edu-3",
    degree: "10th Grade (Secondary)",
    institution: "Sant Sujan Singh Ji International School",
    period: "2021",
    status: "completed"
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Smart India Hackathon 2024",
    organization: "Government of India",
    year: "2024",
    description: "Shortlisted for the finals among thousands of participants nationwide. Developed an innovative solution addressing real-world societal problems using cutting-edge technology.",
    category: "hackathon",
    rank: "Finalist",
    participants: "1,00000+"
  },
  {
    id: "ach-2",
    title: "Smart Delhi Ideathon",
    organization: "Government of Delhi",
    year: "2025",
    description: "Selected among top 1000 participants and advanced to the second round. Proposed innovative solutions for urban challenges in Delhi using technology.",
    category: "hackathon",
    rank: "Top 1000",
    participants: "5,000+"
  },
  {
    id: "ach-3",
    title: "Academic Excellence",
    organization: "Kasturi Ram College of Higher Education",
    year: "2023-Present",
    description: "Maintaining good academic performance in BCA program while actively participating in coding competitions and hackathons.",
    category: "academic"
  },
  {
    id: "ach-4",
    title: "Coding Competition Participant",
    organization: "Various Platforms",
    year: "2023-Present",
    description: "Active participant in online coding competitions and programming contests, consistently improving problem-solving skills and algorithmic thinking.",
    category: "competition"
  }
];

export const skills: Skill[] = [
  { name: "React.js", level: 85, category: 'frontend' },
  { name: "JavaScript", level: 75, category: 'frontend' },
  { name: "HTML", level: 90, category: 'frontend' },
  { name: "Node.js", level: 80, category: 'backend' },
  { name: "Tailwind CSS", level: 88, category: 'frontend' },
  { name: "MongoDB", level: 75, category: 'backend' },
  { name: "MySQL", level: 80, category: 'backend' },
  { name: "Express.js", level: 78, category: 'backend' },
  { name: "Git", level: 65, category: 'tools' },
  { name: "Github", level: 80, category: 'tools' },
  { name: "Figma", level: 70, category: 'other' },
  { name: "Problem Solving", level: 92, category: 'other' },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Tic Tac Toe Game",
    description: "A classic 2-player Tic Tac Toe game using HTML, CSS, and JavaScript with win/draw detection.",
    longDescription: "A simple 2-player Tic Tac Toe game built using vanilla JavaScript. The game features a clean UI, real-time move tracking, win/draw detection, and a reset button to restart anytime. Fully responsive and works smoothly across all screen sizes.",
    technologies: ["HTML", "Talwind CSS", "Javascript"],
    imageUrl: "https://th.bing.com/th/id/OIP.gayGrVz7dWbWzA1riH5jbQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain",
    liveUrl: "https://heyoaryan.github.io/Tic-Tac-Toe/",
    githubUrl: "https://github.com/heyoaryan/Tic-Tac-Toe",
    featured: true
  },
];