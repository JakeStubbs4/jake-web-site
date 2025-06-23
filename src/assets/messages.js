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
    callToAction: "If your organization is facing challenges with software design and could benefit from expertise in any of these domains, get in touch with me on ",
    highlights: [
      {
        intro: "Architecture, design, and development of production grade web applications and APIs",
        skills: [
          "Secure, reliable, performant, and cost efficient cloud architecture",
          "Caching and transactional database design",
          "Development of distributed systems which are observable, operable, and maintainable",
        ],
      },
      {
        intro: "Web application and API security",
        skills: [
          "Application and network security",
          "Secure software development",
          "Cryptography, authentication, and authorization",
        ],
      },
      {
        intro: "Continuous integration and continuous deployment [CI/CD]",
        skills: [
          "Automated integration testing, code quality gates, and static application security testing",
          "Containerization, infrastructure as code, and configuration as code",
        ],
      },
      {
        intro: "Open Banking and third-party API integrations",
        skills: [
          "OAuth 2.0 and supporting protocols",
          "Open ID Foundations Financial Grade API [FAPI 2.0] specifications",
          "Financial Data Exchange [FDX] standards and API specifications",
        ]
      },
      {
        intro: "Data science and machine learning",
        skills: [
          "Batch and stream processing using Databricks and Apache Spark",
          "Machine learning operations [continuous model training, monitoring and analysis, and model serving]",
          "Data warehouse design and OLAP database systems",
        ]
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
          title: "Technical Solutions Architect II [Open Banking]",
          start: "6/2024",
          end: "Present",
          descriptionPoints: null,
        },
        {
          title: "Software Engineering Technical Lead [Open Banking]",
          start: "01/2023",
          end: "06/2024",
          descriptionPoints: [
            "Led the design and implementation of an Open Banking platform to enable the secure exchange of Canadian consumers financial data between third-party applications and the nation's largest financial institutions.",
            "Designed and developed Financial Data Exchange [FDX] APIs adhering to the OpenID Foundations Financial Grade API [FAPI 2.0] security profile.",
            "Delivered machine learning solutions with continuous learning and real-time inference capabilities.",
            "Developed data schemas and pipelines to establish a data warehouse and integrated materialized views with Microsoft Power BI to provide product and customer insights.",
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
          title: "Squad Leader",
          start: "09/2022",
          end: "01/2023",
          descriptionPoints: null,
        },
        {
          title: "Software Engineer",
          start: "12/2021",
          end: "01/2023",
          descriptionPoints: [
            "Oversaw and contributed to the design and full-stack development of a web-based project management application owning a micro-frontend module and application wide security and access controls.",
            "Led the implementation of CI/CD pipelines to test and deploy the application to Google Kubernetes Engine.",
          ],
        },
        {
          title: "Software Engineer [Core Networking/SDN]",
          start: "03/2021",
          end: "12/2021",
          descriptionPoints: [
            "Designed, developed, and maintained applications to generate and deploy configuration to network devices.",
            "Planned and executed manual tasks to configure networking equipment for the TELUS core network.",
          ],
        },
        {
          title: "Software Engineer [TELUS Security]",
          organization: "TELUS",
          start: "07/2020",
          end: "03/2021",
          descriptionPoints: [
            "Developed software solutions focused on the integration of cloud and automation into next-generation B2B security products.",
            "Led a new initiative to design and develop a web application which automatically collected and reported on the teams KPIs to further drive adoption of automation and cloud.",
          ],
        },
      ],
    },
    {
      organizationName: "Department of National Defence",
      location: "Ottawa, ON, Canada",
      locationType: LOCATION_TYPES_ENUM.OFFICE,
      roles: [
        {
          title: "Security Engineer [Internship]",
          start: "05/2019",
          end: "08/2019",
          descriptionPoints: [
            "Worked with various technologies to determine creative solutions to problems relating to Canada’s national cyber security posture.",
          ],
        },
      ],
    },
    {
      organizationName: "Palmer Andersen",
      location: "Thornbury, ON, Canada",
      locationType: LOCATION_TYPES_ENUM.OFFICE,
      roles: [
        {
          title: "Software Developer [Internship]",
          start: "05/2018",
          end: "08/2018",
          descriptionPoints: [
            "Interfaced with clients to deliver new application features based on their requirements and feedback.",
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