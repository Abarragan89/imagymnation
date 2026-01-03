// Shared navigation data - single source of truth
const BASE_URL = import.meta.env.BASE_URL;

export const navigationData = {
    mainLinks: [
        { label: "Home", href: `${BASE_URL}`, key: "home" },
        { label: "Parties", href: `${BASE_URL}/services/birthday-parties`, key: "parties" },
        // { label: "Coaches", href: `${BASE_URL}coaches`, key: "coaches" },
    ],
    classes: [
        {
            title: "All Classes",
            href: `${BASE_URL}/classes`,
            description: "View all our gymnastics classes for every age and skill level.",
        },
        {
            title: "Baby Classes",
            href: `${BASE_URL}/classes/baby`,
            description: "Gentle introduction to movement for our youngest athletes (6-24 months).",
        },
        {
            title: "Kindergym",
            href: `${BASE_URL}/classes/kindergym`,
            description: "Fun developmental classes for toddlers and preschoolers (2-5 years).",
        },
        {
            title: "Gymnastics (6+)",
            href: `${BASE_URL}/classes/gymnastics`,
            description: "Structured gymnastics training for school-age children and teens.",
        },
        {
            title: "Ninjas",
            href: `${BASE_URL}/classes/ninjas`,
            description: "Obstacle course training inspired by ninja warrior challenges.",
        },
        {
            title: "Open Gym",
            href: `${BASE_URL}/classes/open-gym`,
            description: "Supervised free play time for all ages to practice and explore.",
        },
    ],
    cta: {
        label: "Login/Signup",
        href: `https://app.jackrabbitclass.com/regv2.asp?id=507391`
    },
    additionalServices: [
        { label: "Camps", href: `${BASE_URL}/services/camps` },
    ]
};