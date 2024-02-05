export const EDUCATION_TYPES_ENUM = {
  DEGREE: "DEGREE",
  CERTIFICATION: "CERTIFICATION",
};

const messages = {
  fullName: "Jake Stubbs",
  title: "Software & Security Engineer",
  links: {
    linkedIn: "https://linkedin.com/in/jake-stubbs-software",
    gitHub: "https://github.com/JakeStubbs4/"
  },
  aboutMe: "Technical leader and security architect with industry experience designing and leading the implementation of secure production grade applications at scale.",
  skills: [
    {title: "API Security", rating: 5},
    {title: "Application Security", rating: 4},
    {title: "Git", rating: 5},
    {title: "Cloud [Azure, GCP]", rating: 4},
    {title: "Kubernetes", rating: 3},
    {title: "Networking", rating: 3},
    {title: "ReactJs", rating: 4},
    {title: "NodeJs", rating: 4},
    {title: "CI/CD", rating: 5},
    {title: "GraphQL", rating: 4},
    {title: "Express", rating: 4},
  ],
  experiences: [
    {
      title: "Technical Lead",
      organization: "Symcor",
      start: "01/2023",
      end: "Present",
      descriptionPoints: [
        "Technical lead on a large scale application enabling secure financial data exchanges in Canada.",
        "Design and lead the implementation of secure APIs adhering to Financial Grade API standards following OAuth 2.0 and FDX specifications.",
        "Create and delegate development tasks and provide mentorship to developers of all levels.",
        "Inform and collaborate with enterprise architecture on technology and integrations decisions."
      ]
    },
    {
      title: "Team Lead",
      organization: "TELUS",
      start: "09/2022",
      end: "01/2023",
      descriptionPoints: [
        "Squad leader within a medium sized Agile team.",
        "Squad responsibilities include application wide administrative functionality and security controls.",
        "Lead Engineer for Kubernetes native application CI/CD.",
      ]
    },
    {
      title: "Software Development Engineer",
      organization: "TELUS",
      start: "12/2021",
      end: "09/2022",
      descriptionPoints: [
        "Working in a medium-sized agile team to develop a large scale application with ReactJS, Redux, NodeJS, GraphQL, and Redis.",
        "Strong focus on code quality with testing using Jest and employing CI/CD best practices."
      ]
    },
    {
      title: "Software Defined Network Engineer",
      organization: "TELUS",
      start: "03/2021",
      end: "12/2021",
      descriptionPoints: [
        "The functions of this role included operational and development tasks to deploy and configure equipment for the TELUS core network.",
      ]
    },
    {
      title: "Security Engineer",
      organization: "TELUS",
      start: "07/2020",
      end: "03/2021",
      descriptionPoints: [
        "Worked with an agile team of developers to incorporate automation into the design of managed security products for TELUS Business Security Solutions.",
      ]
    },
    {
      title: "Security Engineer [Internship]",
      organization: "Department of National Defence",
      start: "05/2019",
      end: "08/2019",
      descriptionPoints: [
        "Worked with a variety of technologies to determine creative solutions to problems relating to Canada’s national cyber security posture.",
      ]
    },
    {
      title: "Full Stack Software Developer [Internship]",
      organization: "Palmer Andersen",
      start: "05/2018",
      end: "08/2018",
      descriptionPoints: [
        "Designed and developed web-based software applications using JavaScript, PHP, html, and CSS.",
        "Communicated with clients to understand their design requirements and programmed applications based on clients input and feedback."
      ]
    }
  ],
  education: [
    {
      type: EDUCATION_TYPES_ENUM.DEGREE,
      title: "Bachelor of Applied Science",
      institution: "Queen's University",
      specialization: "Mathematics and Engineering, Computing and Communications.",
      start: "08/2016",
      end: "05/2020",
    },
    {
      type: EDUCATION_TYPES_ENUM.CERTIFICATION,
      title: "Cisco Certified Network Associate [CCNA]",
      link: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/3296cddca1a94fe3b0b83cf462e8e374',
      credentialId: "3296cddca1a94fe3b0b83cf462e8e374",
      issued: "10/2022",
      expires: "10/2027",
    },
  ],
};

export default messages;