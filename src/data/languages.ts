interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "🇧🇷 Portuguese",
        level: "Native",
        description: "My native language, used daily in professional and academic contexts.",
        show: true
    },
    {
        name: "🇺🇸 English",
        level: "C1",
        description: "I work and study in English regularly, including writing academic papers and participating in technical discussions.",
        show: true
    },
    {
        name: "🇪🇸 Spanish",
        level: "B1",
        description: "I can understand and communicate on a range of topics, especially in Latin American professional settings.",
        show: true
    }
];

export default languages;