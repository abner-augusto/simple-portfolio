/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Architect / Visualization and Video Producer",
        startDate: "2024-07-01",
        company: "Integrarte.Arq",
        location: "Fortaleza, CE, Brazil",
        description: "Currently working with architectural visualization and audiovisual production for real estate and construction sectors.",
        goals: [
            "Produce high-quality renders and animation videos for real estate marketing.",
            "Develop visual content tailored for construction companies and agencies.",
            "Work closely with clients to translate architectural concepts into compelling media.",
        ],
        currentJob: true,
    },
    {
        title: "Tech Artist / Game Developer / 3D Designer",
        startDate: "2022-12-01",
        endDate: "2024-07-01",
        company: "Bugaboo Studio",
        location: "Fortaleza, CE, Brazil",
        description: "Worked on the development of immersive and interactive experiences for VR, creative coding, and photogrammetry.",
        goals: [
            "Developed Virtual Reality applications focused on interactivity and immersion.",
            "Created 3D models and digital assets for real-time engines and game prototypes.",
            "Applied creative coding techniques in the development of experimental visual applications.",
        ],
        currentJob: false,
    },
    {
        title: "Architect and Urban Planner",
        startDate: "2018-05-01",
        endDate: "2022-12-01",
        company: "Integrarte.Arq",
        location: "Fortaleza, CE, Brazil",
        description: "Co-founded the firm and led the design and delivery of high-quality commercial and residential projects.",
        goals: [
            "Directed the creative process and client communication for architecture projects.",
            "Produced architectural visualizations and technical documentation.",
            "Oversaw project delivery and team coordination from concept to execution.",
        ],
        currentJob: false,
    },
    {
        title: "Architect and 3D Designer",
        startDate: "2016-02-01",
        endDate: "2018-04-01",
        company: "Marrocos Aragão Arquitetura",
        location: "Fortaleza, CE, Brazil",
        description: "Executed architectural and urban planning projects with emphasis on residential developments and 3D visualization.",
        goals: [
            "Designed and developed residential architecture and urban plans.",
            "Created 3D models and renderings for client presentations and competitions.",
            "Collaborated with multidisciplinary teams to meet design and planning goals.",
        ],
        currentJob: false,
    },
];

export default workExperience;