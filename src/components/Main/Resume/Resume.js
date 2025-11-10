import './Resume.css';

function Resume() {
  const experienceData = [
    {
      title: "Associate Solutions Engineer",
      dates: "January 2024 - September 2025",
      company: "LivePerson",
      summary: "Specialized in delivering tailored enterprise solutions in a client-facing role, focusing on mobile integrations, API development, and AI-driven deployments. Collaborated closely with clients to design scalable, maintainable systems that enhanced performance and ensured seamless adoption across platforms.",
      description: [
        "Designed, tested, and deployed integrations using iOS and Android SDKs, enabling smooth mobile implementation for enterprise clients.",
        "Built and optimized REST API workflows, creating and maintaining Postman collections to improve testing efficiency and collaboration.",
        "Delivered expertise in Generative AI, FaaS, SaaS, and knowledge base integrations, ensuring scalable and efficient conversational AI solutions.",
        "Supported Google Cloud Platform (GCP) migrations through architecture design, troubleshooting, and performance optimization.",
        "Partnered with clients to identify challenges and translate business requirements into innovative, reliable technical solutions.",
        "Acted as a liaison between technical and business teams, ensuring successful delivery, adoption, and long-term solution stability."
      ]
    },
    {
      title: "Digital Team Supplier",
      dates: "May 2022 - November 2023",
      company: "NewDay",
      summary: "Focused on front-end development and system observability within a digital engineering team, specializing in modern JavaScript frameworks and performance monitoring solutions. Collaborated with cross-functional teams to enhance internal tools, optimize testing workflows, and improve application reliability across large-scale environments.",
      description: [
        "Developed responsive, user-centric interfaces using JavaScript, TypeScript, and React, improving engagement and usability for internal agents.",
        "Enhanced testing efficiency by creating parallel test execution scripts, significantly reducing suite runtimes.",
        "Integrated Azure App Insights and Grafana for comprehensive observability, enabling real-time performance insights and proactive issue resolution.",
        "Improved API platform performance through innovative scripting, reporting, and monitoring solutions, strengthening system reliability.",
        "Collaborated with engineers and product teams to build intuitive tools and dashboards, streamlining operations and elevating user satisfaction.",
        "This integration offered enhanced transparency into system behavior."
      ]
    },
    {
      title: "Software Developer",
      dates: "Nov 2021 - Mar 2022",
      company: "Capgemini",
      summary: "Contributed to a major energy provider project, focusing on CI/CD pipeline optimization, technical documentation, and seamless project handovers. Collaborated closely with clients and internal teams to ensure high-quality deliverables and efficient development workflows.",
      description: [
        "Developed and implemented a CI/CD Toolchain package, streamlining deployment processes and reducing manual interventions.",
        "Ensured smooth project handovers by reviewing documentation, resolving technical gaps, and maintaining architectural integrity.",
        "Partnered with clients to analyze requirements and troubleshoot deployment issues, enhancing delivery reliability.",
        "Integrated a range of DevOps tools and automation scripts, improving development efficiency and reducing delivery time."
      ]
    },
    {
      title: "Tech Consultant",
      dates: "June 2021 - October 2024",
      company: "QA Limited",
      summary: "Completed an intensive 12-week technical training program focused on software engineering fundamentals and full-stack development. Gained hands-on experience building end-to-end applications using Java, Node.js, and the MERN stack.",
      description: [
        "Acquired strong foundations in Java, Git, Node.js, and the MERN stack, applying these skills in practical development projects.",
        "Led the full development of an Inventory Management System, using Java for backend logic and React for the frontend interface.",
        "Designed and deployed a Cinema Booking Website using the MERN stack, implementing booking and payment functionality.",
        "Demonstrated strong collaboration, problem-solving, and front-end development skills through agile project delivery."
      ]
    }
  ];

  // Split experience into two halves for horizontal layout
  const half = Math.ceil(experienceData.length / 2);
  const leftJobs = experienceData.slice(0, half);
  const rightJobs = experienceData.slice(half);

  const renderJobs = (jobs) => (
    jobs.map((job, idx) => (
      <div className="job-container" key={idx}>
        <div className="timeline">
          <span className="timeline-dot"></span>
          <span className="timeline-line"></span>
        </div>
        <div className="job">
          <p className="job-title">{job.title}</p>
          <p className="job-dates">{job.dates}</p>
          <p className="job-company">{job.company}</p>
          <p className="job-summary">{job.summary}</p>

          {/* Use CSS for custom braces bullets */}
          <ul className="job-description braces-bullets">
            {job.description.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    ))
  );

  return (
    <div id="resume" className="resume-container">
      <h1 className="resume-header">Resume</h1>
      <div className="resume-section-break"></div>

      <div className="summary">
        Results-driven Software and Solutions Engineer with experience designing and deploying scalable digital solutions across enterprise environments. Skilled in JavaScript, React, Node.js, and cloud integrations (Azure, GCP). Adept at bridging the gap between technical teams and business stakeholders to deliver impactful, reliable software solutions.
      </div>

      <h2 className="experience-header">Experience:</h2>

      <div className="experience-horizontal">
        <div className="experience-half">
          {renderJobs(leftJobs)}
        </div>
        <div className="experience-half">
          {renderJobs(rightJobs)}
        </div>
      </div>
    </div>
  );
}

export default Resume;
