/* Edit this file to update your portfolio content.
   This is the single source of truth for all text shown on the site. */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want the Splash screen.
};

// SEO Related settings
const seo = {
  title: "Ahmad Abdelghafoor | Engineering Manager & Software Engineer",
  description:
    "Engineering Manager and Software Engineer focused on SaaS platforms, logistics systems, integrations, backend architecture, cloud operations, and production reliability.",
  og: {
    title: "Ahmad Abdelghafoor | Engineering Manager & Software Engineer",
    type: "website",
    url: "https://rabaiaahmad.github.io/",
  },
};

// Home Page (Hero)
const greeting = {
  title: "Ahmad Abdelghafoor",
  logo_name: "AhmadAbdelghafoor",
  nickname: "Engineering Manager & Software Engineer",
  subTitle:
    "I lead engineering delivery and build reliable software systems across SaaS, logistics, integrations, workflow automation, and cloud-based enterprise platforms. I combine engineering leadership with hands-on execution across .NET backends, SQL Server, workflow engines, APIs, and modern frontends.",
  resumeLink:
    "https://drive.google.com/file/d/1kpDli_pBdS7I15GEQ5MsWCPoM3jDj-9F/view?usp=sharing",
  // PLACEHOLDER: verify this is your correct GitHub profile URL.
  githubProfile: "https://github.com/RabaiaAhmad",
};

const socialMediaLinks = [
  // PLACEHOLDER: verify this GitHub username is correct.
  {
    name: "Github",
    link: "https://github.com/RabaiaAhmad",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmad-abdelghafoor-82039155",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ahmad.abdulgafoor@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Ahmad.A.Abdulqader",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

// Skills Section ("What I Do?")
// Each entry is one row. fileName picks an illustration:
// "FullStackImg" | "CloudInfraImg" | "DataScienceImg" | "DesignImg".
const skills = {
  data: [
    {
      title: "Engineering Leadership & Delivery",
      fileName: "DesignImg",
      skills: [
        "⚡ Lead engineering delivery and own sprint planning, execution, and release quality",
        "⚡ Mentor developers and run 1:1s, code reviews, and architecture reviews",
        "⚡ Break complex features and domains into clear, reviewable implementation plans",
        "⚡ Partner with product owners, QA, and business stakeholders to ship practical solutions",
        "⚡ Drive incident analysis, production troubleshooting, and engineering process improvements",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {},
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "codicon:azure-devops",
          style: {
            color: "#0078D7",
          },
        },
      ],
    },
    {
      title: "Backend Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build .NET backends and REST APIs for SaaS and enterprise systems",
        "⚡ Design background and queue-based processing, workflow engines, and integration services",
        "⚡ Implement retries, validation rules, and failure handling for reliable message flows",
        "⚡ Investigate production performance and modernize legacy monoliths",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {},
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "logos:dotnet",
          style: {},
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {},
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Frontend Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build SaaS dashboards, admin portals, and data-heavy operational screens",
        "⚡ Develop shipment, workflow, and quote interfaces with Angular and React",
        "⚡ Focus on usability and clear UX for business-critical systems",
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
          style: {},
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {},
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {},
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Databases & Performance",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Model and optimize data for SaaS systems on SQL Server, Azure SQL, and PostgreSQL",
        "⚡ Tune queries with Query Store, indexing, and execution-plan analysis",
        "⚡ Diagnose locking, blocking, high CPU, and wait statistics in production",
      ],
      softwareSkills: [
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "Azure SQL",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {},
        },
      ],
    },
    {
      title: "Cloud, DevOps & Reliability",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Run workloads on Azure (VMs, Azure SQL PaaS) behind IIS and Nginx",
        "⚡ Containerize services with Docker and Docker Compose",
        "⚡ Automate CI/CD with GitHub Actions and Azure DevOps",
        "⚡ Monitor production with Grafana dashboards, logs, and health checks",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {},
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
          style: {},
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "logos:grafana",
          style: {},
        },
      ],
    },
    {
      title: "Logistics Domain & AI Automation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Deep freight forwarding / TMS domain: shipments, quotes, routing, cargo, parties, documents",
        "⚡ Design system-to-system integrations and workflow automation with reliable message handling",
        "⚡ Build AI-assisted operations: booking-confirmation extraction, airline tracking, human-in-the-loop review",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {},
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "How I Work",
      fileName: "DesignImg",
      skills: [
        "⚡ I connect business requirements with practical technical execution",
        "⚡ I lead teams while staying hands-on with code, architecture, databases, and infrastructure",
        "⚡ I build maintainable systems and care about production reliability and observability",
        "⚡ I prefer measurable improvements, clear ownership, and pragmatic delivery",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "An-Najah National University",
      subtitle: "BSc, Computer Science",
      logo_path: "najah.png",
      alt_name: "An-Najah National University",
      duration: "2008 - 2012",
      descriptions: [
        "⚡ Studied core computer science: data structures, algorithms, databases, operating systems, and software engineering.",
        "⚡ Built a foundation in full stack development that I have since applied to SaaS, logistics, and enterprise systems.",
      ],
      website_link: "https://www.najah.edu/en/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Engineering leadership and hands-on software delivery",
  description:
    "Over 8+ years I have grown from full stack developer to engineering manager, delivering SaaS and logistics software while staying close to backend architecture, databases, cloud infrastructure, and integrations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineering Manager",
          company: "Enterprise Logistics SaaS Platform",
          logo_path: "experience.svg",
          duration: "August 2021 - Present",
          location: "Ramallah, Palestine",
          description: `● Lead engineering delivery for a freight forwarding SaaS platform, owning planning, execution, and release quality across backend, frontend, database, and integration work.
● Manage and mentor developers through 1:1s, coaching, career planning, and promotions while staying close to architecture and production issues.
● Track engineering KPIs and delivery targets and report progress, risks, and technical performance to the R&D Director.
● Act as technical lead when needed, reviewing architecture and implementation choices and driving incident analysis and production diagnostics.
● Improve reliability and operational visibility through better monitoring, logging, retry handling, and process improvements.`,
          color: "#0879bf",
        },
        {
          title: "Full Stack Team Lead",
          company: "Enterprise Logistics SaaS Platform",
          logo_path: "experience.svg",
          duration: "February 2019 - August 2021",
          location: "Ramallah, Palestine",
          description: `● Led a full stack team through development sprints, balancing delivery deadlines with software quality.
● Performed code reviews, set unit and integration testing standards, and resolved complex technical problems.
● Contributed to the platform's software architecture and to performance and code-quality improvements.
● Planned and assigned work, set team and individual targets, and supported research, design, and development.
● Participated in hiring, interviewing, and onboarding new engineers.`,
          color: "#9b1578",
        },
        {
          title: "DevOps Engineer",
          company: "Enterprise Logistics SaaS Platform",
          logo_path: "experience.svg",
          duration: "May 2017 - February 2022",
          location: "Ramallah, Palestine",
          description: `● Owned deployments across staging, QA, and highly available production environments for multiple application teams.
● Built and maintained cloud infrastructure on Azure (VMs, virtual networks, load balancers, databases, storage accounts, and event hubs).
● Designed CI/CD pipelines and release automation across multiple environments using Azure DevOps and Jenkins.
● Monitored live applications and delivered maintenance and performance enhancements.`,
          color: "#9b1578",
        },
        {
          title: "Full Stack Developer",
          company: "Enterprise Logistics SaaS Platform",
          logo_path: "experience.svg",
          duration: "May 2015 - February 2019",
          location: "Ramallah, Palestine",
          description: `● Led the migration from Silverlight to Angular 2+ and kept the frontend current across later versions.
● Built reusable UI controls (grid view, editable grid, list data controls) and internal developer tooling to speed up the team.
● Contributed to frontend and backend infrastructure and to the backend architecture.
● Wrote unit tests for parts of the accounting system.`,
          color: "#fc1f20",
        },
        {
          title: "Software Developer",
          company: "Enterprise Software Company",
          logo_path: "experience.svg",
          duration: "August 2012 - May 2015",
          location: "Ramallah, Palestine",
          description: `● Developed ASP.NET applications supporting a library management system.
● Delivered customer support, data conversion, operational reporting, and system installation and deployment.`,
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected work across logistics SaaS, workflow automation, integrations, production reliability, and AI-assisted operations. Project descriptions are kept high level to respect confidentiality.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ahmad.png",
    description:
      "Open to Engineering Manager, Senior Engineering Manager, Technical Lead, Senior Software Engineer, and SaaS product engineering opportunities. Reach out if you'd like to talk about engineering leadership, SaaS platforms, logistics systems, or integrations.",
  },

  addressSection: {
    title: "Location & Availability",
    subtitle:
      "Based in Palestine. Open to opportunities in Saudi Arabia and remote roles.",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+970 599134104",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
