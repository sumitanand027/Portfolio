import emoji from "react-easy-emoji";

const illustration = {
  animated: true
};

const greeting = {
  username: "Sumit Anand",
  title: "Hi all, i'm Sumit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true 
};

const socialMediaLinks = {
  github: "https://github.com/sumitanand027",
  linkedin: "https://www.linkedin.com/in/sumit-anand-285162190/",
  gmail: "sumitanand027@gmail.com",
  display: true 
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

 
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDb-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Dayananda Sagar Academy of Technology and Management , Bangalore",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of engineering in Information Science",
      duration: "August 2019 - July 2023",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "DAV Public School , Bokaro steel city",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "High School",
      duration: "September 2017 - April 2019",
      desc: "",
      descBullets: ["87 percent in class 12th" ,
        "10 CGPA in class 10th"
    ]
    }
  ]
};


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false 
};


// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: false // Set false to hide this section, defaults to true
// };



const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "International Collegiate Programming Contest (ICPC)",
      subtitle:
        "Qualified for the Regionals of Amritapuri Region. Top team in the college.",
      image: require("./assets/images/icpc.png"),
      footerLink: [
      ]
    },
    {
      title: "4 Star Codechef",
      subtitle:
        "Global rank of 46 in September Long Challenge and Global rank of 819 in Short Contest",
      image: require("./assets/images/codechef.jpg"),
      footerLink: [
        {
          name: "Codehcef profile",
          url: "https://www.codechef.com/users/dpfy"
        }
      ]
    },
    {
      title: "Coding Ninjas",
      subtitle: "Data Structres and Algorithm Course",
      image: require("./assets/images/codingNinjas.jpg"),
      footerLink: [
      ]
    }
  ],
  display: true 
};

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "sumitanand027@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  openSource,
  // bigProjects,
  achievementSection,
  contactInfo,
};
