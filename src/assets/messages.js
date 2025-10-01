export const EDUCATION_TYPES_ENUM = {
  DEGREE: "DEGREE",
  CERTIFICATION: "CERTIFICATION",
};

const LOCATION_TYPES_ENUM = {
  REMOTE: "Remote",
  OFFICE: "In Office",
}

const messages = {
  fullName: "Jake Stubbs",
  title: "Software Engineer & Architect",
  links: {
    linkedIn: "https://linkedin.com/in/jake-stubbs-software",
    gitHub: "https://github.com/JakeStubbs4/"
  },
  aboutMe: {
    intro: "I am a software engineer with professional experience spanning the financial services, telecommunications, and cybersecurity industries. With a multifaceted skill set in software development and architecture, I am passionate about solving problems relating to...",
    callToAction: "If you could benefit from expertise in any of these domains, get in touch on ",
    highlights: [
      {
        intro: "Architecture, design, and development of production grade web applications and APIs",
        skills: [
          "Secure, reliable, performant, and cost efficient cloud architecture",
        ],
      },
      {
        intro: "Web application and API security",
        skills: [
          "Best practices for secure coding, network security, web service protection, authentication, and authorization",
        ],
      },
      {
        intro: "Open Banking and third-party API integrations",
        skills: [
          "OAuth 2.0 and supporting protocols including the Open ID Foundations Financial Grade API [FAPI 2.0] security profile",
          "Financial Data Exchange [FDX] standards and API specifications",
        ]
      },
      {
        intro: "Data science and machine learning",
        skills: [
          "Batch and stream processing using Databricks and Apache Spark for data warehousing and analytics",
          "Machine learning implementation and operations [continuous model training, monitoring and analysis, and model serving]",
        ]
      },
      {
        intro: "Continuous integration and continuous deployment [CI/CD]",
        skills: [
          "Automated integration testing, code quality gates, and static application security testing",
          "Containerization, infrastructure as code, and configuration as code",
        ],
      },
    ],
  },
  experience: [
    {
      organizationName: "Symcor Inc.",
      location: "Toronto, ON, Canada",
      locationType: LOCATION_TYPES_ENUM.REMOTE,
      roles: [
        {
          title: "Senior Software Architect | Open Banking & Payments Fraud",
          start: "6/2024",
          end: "Present",
          descriptionPoints: [
            "As the lead software architect, I designed open banking and payments fraud products to serve hundreds of real-time API requests per second and analyze millions of payments per day using machine learning.",
            "Achieved a 20% reduction in annual cloud infrastructure costs.",
            "Increased real-time API request capacity by 10X while enhancing workload operability.",
            "Mentored and provided technical direction to a division of over 25 Software Engineers.",
            "Designed zero-trust security architectures for Kubernetes and serverless runtimes hosted on Cloudflare, Microsoft Azure, and on-premises environments.",
            "Designed batch, stream, and real-time processing systems for data science and machine learning applications.",
          ],
        },
        {
          title: "Software Engineering Technical Lead | Open Banking",
          start: "01/2023",
          end: "06/2024",
          descriptionPoints: [
            "Led a team of 10 Software and Quality Assurance Engineers in the design and delivery of applications and Financial Data Exchange (FDX) APIs to enable open banking for over 30 million Canadian consumers.",
            "Led a team of 4 Software Engineers in delivering machine learning solutions using PySpark and Databricks.",
            "Developed applications and APIs using TypeScript, Node, Express, React, GraphQL, Azure and Cloudflare.",
            "Implemented secure standards for authentication, authorization, and cryptography. Achieved certification from the OpenID Foundation for conformance to the Financial Grade API (FAPI 2.0) security profile.",
          ],
        },
      ],
    },
    {
      organizationName: "TELUS Communications",
      location: "Toronto, ON, Canada",
      locationType: LOCATION_TYPES_ENUM.REMOTE,
      roles: [
        {
          title: "Software Engineer & Squad Lead",
          start: "07/2020",
          end: "01/2023",
          descriptionPoints: [
            "Led a squad of 3 Software Engineers in the design and development of micro-frontend modules and role-based access controls for a project management application using React.js, Redux, Node.js, GraphQL, and Redis.",
            "Implemented CI/CD pipelines with GitHub Actions and Google Cloud Deploy to build and deploy microservice applications to Google Kubernetes Engine and execute automated regression testing with Cypress.",
            "Developed applications to manage the configuration of network devices using Python, Flask, and Gitlab CI/CD achieving 80% automation coverage.",
            "Modernized managed security products using Java, Spring, React.js, Ansible AWX, Postgres, and Microsoft Azure reducing operational efforts by over 600 hours per year.",
          ],
        },
      ],
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
      expires: "10/2025",
    },
  ],
};

export default messages;