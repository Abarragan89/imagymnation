// Shared navigation data - single source of truth
export const navigationData = {
    mainLinks: [
        { label: "Home", href: "/", key: "home" },
        { label: "Parties", href: "/birthday-parties", key: "parties" },
        // { label: "Coaches", href: "/coaches", key: "coaches" },
    ],
    classes: [
        {
            title: "All Classes",
            href: "/classes",
            description: "View all our gymnastics classes for every age and skill level.",
        },
        {
            title: "Baby Classes",
            href: "/classes/baby",
            description: "Gentle introduction to movement for our youngest athletes (6-24 months).",
        },
        {
            title: "Kindergym",
            href: "/classes/kindergym",
            description: "Fun developmental classes for toddlers and preschoolers (2-5 years).",
        },
        {
            title: "Gymnastics (6+)",
            href: "/classes/gymnastics",
            description: "Structured gymnastics training for school-age children and teens.",
        },
        {
            title: "Ninjas",
            href: "/classes/ninjas",
            description: "Obstacle course training inspired by ninja warrior challenges.",
        },
        {
            title: "Open Gym",
            href: "/classes/open-gym",
            description: "Supervised free play time for all ages to practice and explore.",
        },
    ],
    cta: {
        label: "Login/Signup",
        href: "/sign-up"
    },
    additionalServices: [
        { label: "Camps", href: "/camps" },
    ]
};