export interface ServicePackage {
    name: string;
    description: string;
    price: number | string;
    details?: string[];
}

export interface ServiceSession {
    name: string;
    ageRange: string;
    type?: string;
    price?: number | string;
}

export interface Service {
    service: string; // URL slug
    title: string;
    description: string;
    image: string;
    packages?: ServicePackage[];
    sessions?: ServiceSession[];
    features?: string[];
    pricing?: string;
    calendarLink?: string;
    additionalInfo?: string[];
}

export const services: Service[] = [
    {
        service: 'birthday-parties',
        title: 'Gym Rentals & Birthday Parties',
        description: 'Looking for the perfect place for a Birthday Party, Team Party or just an awesome Playdate? Imagymnation offers 2 hour PRIVATE GYM RENTALS in our stimulating, clean and colorful facility!',
        image: '/images/services/birthday-parties.jpg',
        packages: [
            {
                name: 'Small Party',
                description: 'Perfect for intimate celebrations',
                price: 350,
                details: ['Up to 10 kids', '2 hours private gym time', 'Access to all equipment']
            },
            {
                name: 'Medium Party',
                description: 'Great for most birthday parties',
                price: 500,
                details: ['Up to 20 kids', '2 hours private gym time', 'Access to all equipment']
            },
            {
                name: 'Large Party',
                description: 'For bigger celebrations',
                price: 650,
                details: ['Up to 30 kids', '2 hours private gym time', 'Access to all equipment']
            }
        ],
        features: [
            'Private gym rental for 2 hours',
            'Access to trampolines, climbing ropes, tunnels and mazes',
            'Supervised play in a safe, clean environment',
            'Perfect for birthdays, team parties, or playdates',
            'Purple boxes on calendar indicate available rental times'
        ],
        calendarLink: 'https://app.jackrabbitclass.com/eventcalendar.asp?orgid=507391',
        additionalInfo: [
            'Look for the PURPLE boxes on our calendar to see available times',
            'Book your party in advance to ensure availability',
            'Party host is responsible for setup and cleanup',
            'Outside food and drinks are welcome'
        ]
    },
    {
        service: 'camps',
        title: 'Camps & No School Fun Days',
        description: "Imagymnation's Camps and Fun Days are the perfect place for your kids to explore, build strength, develop body awareness and create new friendships! Each day is filled with exciting activities including gymnastics, open gym, arts & crafts, group games, & themed events!",
        image: '/images/services/camps.jpg',
        features: [
            'Gymnastics instruction and practice',
            'Open gym play time',
            'Arts & crafts activities',
            'Group games and team building',
            'Themed events and special activities',
            'Safe, supervised environment'
        ],
        sessions: [
            {
                name: 'Spring Break Camps',
                ageRange: 'Ages 5-12',
                type: 'Full Day & Half Day options'
            },
            {
                name: 'Summer Camps',
                ageRange: 'Ages 5-12',
                type: 'Weekly sessions available'
            },
            {
                name: 'Thanksgiving Break Camps',
                ageRange: 'Ages 5-12',
                type: 'Full Day options'
            },
            {
                name: 'Winter Break Camps',
                ageRange: 'Ages 5-12',
                type: 'Full Day & Half Day options'
            },
            {
                name: 'No School Fun Days',
                ageRange: 'Ages 5-12',
                type: 'Drop-off available'
            }
        ],
        calendarLink: 'https://app.jackrabbitclass.com/eventcalendar.asp?orgid=507391',
        additionalInfo: [
            'Check our Event Calendar for specific dates and times',
            'Early bird discounts available for some camps',
            'Bring a lunch and snacks for full-day camps',
            'Sign up early as spots fill up quickly!'
        ]
    },
    {
        service: 'open-gym',
        title: 'Open Gym',
        description: 'Imagymnation Open Gym is the perfect place for your kids to explore, build strength, develop body awareness and create new friendships! In our stimulating, clean and colorful facility, your children will be able to experience the joy of jumping on trampolines, climbing ropes and ladders, crawling through tunnels and mazes, and much more!',
        image: '/images/services/open-gym.jpg',
        sessions: [
            {
                name: 'Lil Explorers',
                ageRange: 'Babies to 5 years',
                type: 'Parent participation required',
                price: 13
            },
            {
                name: 'Family Open Gym',
                ageRange: 'All ages',
                type: 'Family fun for everyone',
                price: 13
            },
            {
                name: 'Gym Jam',
                ageRange: 'Ages 5 and up',
                type: 'Drop-off only',
                price: 13
            }
        ],
        pricing: '$13 per hour session OR 10 Passes for $100',
        features: [
            'Jump on trampolines',
            'Climb ropes and ladders',
            'Crawl through tunnels and mazes',
            'Explore foam pits and obstacle courses',
            'Safe, supervised environment',
            'Great for building strength and coordination'
        ],
        calendarLink: 'https://app.jackrabbitclass.com/eventcalendar.asp?orgid=507391',
        additionalInfo: [
            'Check our calendar for available times',
            'Socks required for all participants',
            'Parent participation required for children under 5',
            'Great value with 10-pass package!'
        ]
    }
];
