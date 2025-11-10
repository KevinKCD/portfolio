import './About.css';
import Profile from "../../Images/ProfileSq.jpg";
import Law from "../../Images/Law.webp";

function About() {
  const birthDate = "1998-05-13"; // YYYY-MM-DD
  const age = getAge(birthDate);

  return (
    <div id="About" className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-section-break"></div>
        <div className="text-content">
            <p className='content'>
            Hello! I'm Kevin Doan, a passionate software developer with a knack for creating efficient and scalable solutions. With a background in computer science and hands-on experience in various programming languages.                    </p>
            <p className='content'>
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or indulging in my love for photography. I'm always eager to learn new skills and take on exciting challenges that push the boundaries of innovation.
            </p>
        </div>
      <div className="about-body">
        {/* Left side: profile image */}
        <img src={Profile} alt="Profile" className="profile-pic" />

        {/* Right side: info container */}
        <div className="info-container">
          <p className="role">Solutions Engineer - Software Engineer/Developer</p>

          {/* Info grid */}
          <div className="info-grid">
            <div>
                <i className="bi bi-cup-hot"></i> <strong>Birthday:</strong> 13th May 1998
                </div>
                <div>
                <i className="bi bi-globe"></i> <strong>Website:</strong> www.example.com
                </div>
                <div>
                <i className="bi bi-telephone"></i> <strong>Phone:</strong> +447542962985
                </div>
                <div>
                <i className="bi bi-geo-alt"></i> <strong>City:</strong> London, United Kingdom
                </div>
                <div>
                <i className="bi bi-person"></i> <strong>Age:</strong> {age}
                </div>
                <div>
                <i className="bi bi-envelope"></i> <strong>Email:</strong> Kevinkcdoan@gmail.com
                </div>
                <div>
                <i className="bi bi-mortarboard"></i> <strong>Degree:</strong> Bachelors Degree in Computer Science (First class honours)
                </div>
          </div>
        </div>
      </div>
            <div className="about-gifs">
            {/* <img src={Onepiece} alt="Animation" /> */}
            <img src={Law} alt="Animation" />
            </div>
    </div>
  );
}

// Helper function outside component
function getAge(birthday) {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export default About;
