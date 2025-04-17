interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Master's in Computer Science - Computer Graphics",
        startDate: "2024-01-01",
        endDate: "",
        school: "Federal University of Ceará",
        location: "Brazil",
        description: "Currently pursuing graduate studies focused on Computer Graphics, including programming, 3D rendering, and visualization techniques.",
        currentUni: true,
    },
    {
        title: "Degree in Architecture and Urbanism",
        startDate: "2013-01-01",
        endDate: "2015-07-01",
        school: "Federal University of Ceará",
        location: "Brazil",
        description: "Undergraduate degree in Architecture and Urbanism with training in spatial planning, public and commercial architecture.",
        currentUni: false,
    }
];


export default education;