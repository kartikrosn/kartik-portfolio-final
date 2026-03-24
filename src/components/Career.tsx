import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Experience <span>&</span>
          <br /> Education
        </h2>

        {/* Experience Section */}
        <h3 style={{ fontSize: '40px', fontWeight: 400, color: 'var(--accentColor)', marginBottom: '30px', textAlign: 'center' }}>Experience</h3>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOC Analyst intern</h4>
                <h5>Motherson Group</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a SOC Analyst intern. Monitoring and analyzing security events, identifying vulnerabilities, and supporting incident response activities to ensure robust security posture.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML & Cybersecurity intern</h4>
                <h5>NIRVEONX</h5>
              </div>
              <div className="career-time" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                <h3>2025</h3>
                <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--accentColor)', marginTop: '8px', letterSpacing: '1px' }}>Jul'25 - Sep'25</span>
              </div>
            </div>
            <p>
              Led quality testing initiatives for AI/ML systems, ensuring model accuracy. Supported security compliance by identifying control gaps and aligning with ISO 27001 and NIST.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. SOC Analyst intern</h4>
                <h5>NOIDA POWER COMPANY LIMITED</h5>
              </div>
              <div className="career-time" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                <h3>2025</h3>
                <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--accentColor)', marginTop: '8px', letterSpacing: '1px' }}>Apr'25 - Jun'25</span>
              </div>
            </div>
            <p>
              Monitored and analyzed security events using SIEM. Validated 40+ MDM use cases. Assisted in real-time monitoring and escalation of security incidents.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <h3 style={{ fontSize: '40px', fontWeight: 400, color: 'var(--accentColor)', marginTop: '80px', marginBottom: '30px', textAlign: 'center' }}>Education</h3>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a B.Tech in Computer Science and Engineering. Focusing on cybersecurity, software development, and network security.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (PCM)</h4>
                <h5>GBSS, Gaya</h5>
              </div>
              <h3>63%</h3>
            </div>
            <p>
              Completed Class 12th with subjects in Physics, Chemistry, and Mathematics (PCM), achieving 63%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>GBSS, Gaya</h5>
              </div>
              <h3>70%</h3>
            </div>
            <p>
              Completed Class 10th (Matriculation) with a solid academic foundation, achieving 70%.
            </p>
          </div>

        </div>

        {/* Certifications Section */}
        <h3 style={{ fontSize: '40px', fontWeight: 400, color: 'var(--accentColor)', marginTop: '80px', marginBottom: '30px', textAlign: 'center' }}>Certifications</h3>
        <div className="career-info" style={{ paddingBottom: '80px' }}>
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SQL Basic & Intermediate</h4>
                <h5>HackerRank</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              • Validated expertise in writing complex SQL queries and performing advanced data extraction.<br/>
              • Demonstrated strong relational database management skills.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Foundation of Cybersecurity</h4>
                <h5>Coursera</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • Gained foundational knowledge of cybersecurity principles, frameworks, and threat landscapes.<br/>
              • Learned best practices for protecting networks, devices, and sensitive data.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Job Simulation</h4>
                <h5>Forage</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • Completed hands-on tasks simulating real-world Security Operations Center (SOC) responsibilities.<br/>
              • Analyzed sample network traffic and identified potential security breaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
