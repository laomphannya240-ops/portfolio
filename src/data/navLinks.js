import { Home, User, Code, Briefcase, FileText, Mail } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
  { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
  { id: 'resume', label: 'Resume/CV', icon: FileText, href: '#resume' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];