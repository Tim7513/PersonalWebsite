// Personal Information
export const personalInfo = {
  name: "Tim Mai",
  title: "Full-Stack Developer",
  tagline: "Crafting digital experiences with modern technologies",
  bio: "I'm a passionate full-stack developer with over 5 years of experience in creating web applications. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  email: "tim@example.com",
  location: "San Francisco, CA",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/Tim7513",
  linkedin: "https://linkedin.com/in/timmai",
  twitter: "https://twitter.com/timmai",
  email: "mailto:tim@example.com",
};

// Skills Data
export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "FaReact" },
    { name: "JavaScript", level: 95, icon: "FaJs" },
    { name: "TypeScript", level: 85, icon: "SiTypescript" },
    { name: "HTML/CSS", level: 90, icon: "FaHtml5" },
    { name: "Tailwind CSS", level: 88, icon: "SiTailwindcss" },
    { name: "Next.js", level: 82, icon: "SiNextdotjs" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "FaNodeJs" },
    { name: "Python", level: 80, icon: "FaPython" },
    { name: "Express.js", level: 85, icon: "SiExpress" },
    { name: "MongoDB", level: 75, icon: "SiMongodb" },
    { name: "PostgreSQL", level: 80, icon: "SiPostgresql" },
    { name: "Firebase", level: 70, icon: "SiFirebase" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "FaGitAlt" },
    { name: "Docker", level: 75, icon: "FaDocker" },
    { name: "AWS", level: 70, icon: "FaAws" },
    { name: "Figma", level: 80, icon: "FaFigma" },
    { name: "VS Code", level: 95, icon: "SiVisualstudiocode" },
    { name: "Postman", level: 85, icon: "SiPostman" },
  ],
};

// Projects Data - Easy to modify and add new projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern technologies for optimal performance.",
    longDescription: "This comprehensive e-commerce platform features user authentication, product catalog management, shopping cart functionality, secure checkout with Stripe integration, order tracking, and a powerful admin panel for inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Responsive design for all devices"
    ],
    githubUrl: "https://github.com/Tim7513/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.timmai.dev",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    category: "Full-Stack",
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop functionality for efficient task organization.",
    longDescription: "This task management application helps teams organize their work with features like project boards, task assignments, deadline tracking, file attachments, and real-time collaboration through WebSocket connections.",
    techStack: ["React", "Firebase", "Material-UI", "WebSocket", "Context API"],
    features: [
      "Drag-and-drop task organization",
      "Real-time collaboration",
      "Team member assignments",
      "Due date tracking and notifications",
      "File attachments and comments",
      "Project progress visualization",
      "Mobile-responsive interface"
    ],
    githubUrl: "https://github.com/Tim7513/task-manager",
    liveUrl: "https://taskmanager.timmai.dev",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
    category: "Frontend",
    featured: true,
    status: "Completed"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather application featuring location-based forecasts, detailed weather data visualization, and a clean, modern interface with dark mode support.",
    longDescription: "This weather dashboard provides comprehensive weather information including current conditions, 7-day forecasts, hourly predictions, weather maps, and historical data with beautiful data visualizations.",
    techStack: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS", "Axios"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Hourly weather predictions",
      "Interactive weather maps",
      "Location-based weather search",
      "Weather data visualization with charts",
      "Dark/light mode toggle"
    ],
    githubUrl: "https://github.com/Tim7513/weather-dashboard",
    liveUrl: "https://weather.timmai.dev",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format",
    category: "Frontend",
    featured: false,
    status: "Completed"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media metrics with real-time data processing, custom reporting, and advanced data visualization capabilities.",
    longDescription: "This analytics platform aggregates data from multiple social media platforms, providing insights through interactive dashboards, custom reports, and automated alert systems for social media managers.",
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Multi-platform data aggregation",
      "Real-time analytics dashboard",
      "Custom report generation",
      "Data visualization with D3.js",
      "Automated alerts and notifications",
      "User engagement tracking",
      "Export functionality for reports"
    ],
    githubUrl: "https://github.com/Tim7513/social-analytics",
    liveUrl: "https://analytics.timmai.dev",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    category: "Full-Stack",
    featured: false,
    status: "In Progress"
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and comprehensive market analysis tools for crypto enthusiasts.",
    longDescription: "This crypto tracker provides real-time price updates, portfolio tracking, market analysis, price alerts, and detailed charts for over 1000+ cryptocurrencies with a focus on user experience and data accuracy.",
    techStack: ["React Native", "Redux", "CoinGecko API", "AsyncStorage", "Expo"],
    features: [
      "Real-time cryptocurrency prices",
      "Portfolio tracking and management",
      "Price alerts and notifications",
      "Market analysis and trends",
      "Detailed price charts",
      "Watchlist functionality",
      "Cross-platform mobile app"
    ],
    githubUrl: "https://github.com/Tim7513/crypto-tracker",
    liveUrl: "https://crypto.timmai.dev",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop&auto=format",
    category: "Mobile",
    featured: false,
    status: "Completed"
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps creators produce high-quality written content using advanced natural language processing and machine learning.",
    longDescription: "This AI content generator leverages cutting-edge NLP models to help users create blog posts, social media content, product descriptions, and marketing copy with customizable tone and style options.",
    techStack: ["Python", "FastAPI", "OpenAI API", "React", "PostgreSQL", "Celery"],
    features: [
      "AI-powered content generation",
      "Multiple content types support",
      "Customizable writing styles and tones",
      "Content optimization suggestions",
      "Bulk content generation",
      "Integration with popular platforms",
      "Usage analytics and insights"
    ],
    githubUrl: "https://github.com/Tim7513/ai-content-generator",
    liveUrl: "https://ai-content.timmai.dev",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
    category: "AI/ML",
    featured: true,
    status: "In Progress"
  }
];

// Filter projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Get projects by status
export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
}; 