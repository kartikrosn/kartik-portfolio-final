import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Inventory & Stock Analysis Management System",
    category: "Management System",
    description: [
      "Built a smart Inventory & Stock Analysis System to manage products, track sales, and monitor overall stock performance.",
      "Created an automatic low-stock alert system to prevent stock shortages and improve inventory control.",
      "Developed a modern dashboard with dynamic charts to visually represent sales trends and product performance in real-time."
    ],
    tools: "Python, Django, HTML5, CSS, JS",
    githubLink: "https://github.com/Kartikrosn/inventory-stock-analysis",
    liveLink: "https://inventory-stock-analysis.onrender.com/"
  },
  {
    title: "Web Application Session Hijacking",
    category: "Web Security Tool",
    description: [
      "Built an automated web security tool to detect session hijacking vulnerabilities using OWASP WSTG guidelines, analyzing cookies for HTTPOnly, Secure and Same Site flags.",
      "Implemented real-time vulnerability scanner with risk scoring system that identifies 10+ security threats including Session Fixation,  CSRF and XSS attack vectors.",
      "Designed interactive security dashboard with dynamic charts and exportable vulnerability reports with           remediation advice  for each detected security issue."
    ],
    tools: "Python, Flask, JavaScript, chart.js",
    githubLink: "https://github.com/Kartikrosn/Web-session-security-scanner",
    liveLink: ""
  },
  {
    title: "AI Yoga Posture Detection",
    category: "AI-Powered System",
    description: [
      "Engineered and AI-powered yoga posture detection system using computer vision and pose estimation to analyze body joint angles and validate posture accuracy in real time.",
      "Designed an interactive web interface integrated with a Python backend to visualize pose landmark, posture correctness scores, and real-time feedback.",
      "Optimised real-time pose detection to ensure accurate results with smooth performance and minimal delay."
    ],
    tools: "Python, Flask, HTML, OpenCV, MediaPipe",
    githubLink: "https://github.com/Kartikrosn",
    liveLink: ""
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <ul className="carousel-description" style={{ listStyleType: "disc", paddingLeft: "15px", marginTop: "10px", fontSize: "0.80rem", lineHeight: "1.3", color: "var(--text-light, #ccc)", display: "flex", flexDirection: "column", gap: "6px" }}>
                          {project.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                        <div className="carousel-tools" style={{ marginTop: "12px" }}>
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                          {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', padding: '10px 20px', backgroundColor: 'var(--accentColor)', border: '1px solid var(--accentColor)', borderRadius: '50px', color: '#111', fontSize: '14px', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: 600 }}>
                              View Live <MdArrowForward />
                            </a>
                          )}
                          {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', padding: '10px 20px', border: '1px solid var(--accentColor)', borderRadius: '50px', color: 'var(--accentColor)', fontSize: '14px', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                              View on GitHub <MdArrowForward />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
