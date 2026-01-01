export interface ClassSchedule {
    name: string;
    description: string;
    day: string;
    time: string;
    ageRange: string;
    instructor: string;
    price: number;
    status?: 'open' | 'waitlist';
}

export interface ClassCategory {
    class: string; // URL slug
    title: string;
    description: string;
    ageRange: string;
    image: string;
    schedules: ClassSchedule[];
}

export const classes: ClassCategory[] = [
    {
        class: 'baby',
        title: 'Baby Classes',
        description: 'Gentle introduction to movement for our youngest athletes. Parent participation classes designed to promote motor development, sensory exploration, and parent-child bonding.',
        ageRange: '0-2 years',
        image: '/images/classes/baby-classes.jpg',
        schedules: [
            // Busy Babies (0-1 yr) - FREE
            { name: 'Busy Babies M 9:15 JP', description: 'Infant/Parent participation class. FREE monthly tuition', day: 'Monday', time: '9:15am-9:45am', ageRange: '0-1 yr', instructor: 'Jordyn Parra', price: 0 },
            { name: 'Busy Babies Th9:15 SR', description: 'Infant/Parent participation class. FREE monthly tuition', day: 'Thursday', time: '9:15am-9:45am', ageRange: '0-1 yr', instructor: 'Sofia Rocha', price: 0 },
            { name: 'Busy Babies Th10:30 HL', description: 'Infant/Parent participation class. FREE monthly tuition', day: 'Thursday', time: '10:30am-11:00am', ageRange: '0-1 yr', instructor: 'Hailey Lugg', price: 0 },
            { name: 'Busy Babies F8:45 SR', description: 'Infant/Parent participation class. FREE monthly tuition', day: 'Friday', time: '8:45am-9:15am', ageRange: '0-1 yr', instructor: 'Sofia Rocha', price: 0 },
            { name: 'Busy Babies S8:30 AZ', description: 'Infant/Parent participation class. FREE monthly tuition', day: 'Saturday', time: '8:30am-9:00am', ageRange: '0-1 yr', instructor: 'Aliyah Zeliah', price: 0 },

            // Diaper Daredevils (1-2 yrs) - Walkers
            { name: 'Diaper Daredevils M 9:15 SR', description: 'Parent participation class for walkers!', day: 'Monday', time: '9:15am-9:45am', ageRange: '1-2 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Diaper/Mini Th9:15 JP', description: 'Parent participation class for walkers!', day: 'Thursday', time: '9:15am-9:45am', ageRange: '1-2 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Diaper Daredevils Th9:45 SR', description: 'Parent participation class for walkers!', day: 'Thursday', time: '9:45am-10:15am', ageRange: '1-2 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Diaper Daredevils S8:30 SR', description: 'Parent participation class for walkers!', day: 'Saturday', time: '8:30am-9:00am', ageRange: '1-2 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Diaper Daredevils S9:00 TB/AA', description: 'Parent participation class for walkers!', day: 'Saturday', time: '9:00am-9:30am', ageRange: '1-2 yrs', instructor: 'Avery Adair', price: 65 },

            // Mini Monkey (2 yrs) - Toddlers on the Move
            { name: 'Mini Monkey M 9:45 SR', description: 'Parent participation class for toddlers on the move!', day: 'Monday', time: '9:45am-10:15am', ageRange: '2 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Mini Monkey T10:30 HL', description: 'Parent participation class for toddlers on the move!', day: 'Tuesday', time: '10:30am-11:00am', ageRange: '2 yrs', instructor: 'Hailey Lugg', price: 65 },
            { name: 'Mini Monkey T6:00 TB/AA', description: 'Parent participation class for toddlers on the move!', day: 'Tuesday', time: '6:00pm-6:30pm', ageRange: '2 yrs', instructor: 'Tiffany Brown', price: 65 },
            { name: 'Mini Monkey Th10:00 HL', description: 'Parent participation class for toddlers on the move!', day: 'Thursday', time: '10:00am-10:30am', ageRange: '2 yrs', instructor: 'Hailey Lugg', price: 65 },
            { name: 'Mini Monkey Th4:00 SR/BN', description: 'Parent participation class for toddlers on the move!', day: 'Thursday', time: '4:00pm-4:30pm', ageRange: '2 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Mini Monkey Th6:30 AM', description: 'Parent participation class for toddlers on the move!', day: 'Thursday', time: '6:30pm-7:00pm', ageRange: '2 yrs', instructor: 'Addison MacNeal', price: 65 },
            { name: 'Mini Monkey F8:45 JP', description: 'Parent participation class for toddlers on the move!', day: 'Friday', time: '8:45am-9:15am', ageRange: '2 yrs', instructor: 'Jordyn Parra', price: 65 },
            { name: 'Mini Monkey F10:30 JP', description: 'Parent participation class for toddlers on the move!', day: 'Friday', time: '10:30am-11:00am', ageRange: '2 yrs', instructor: 'Jordyn Parra', price: 65 },
            { name: 'Mini Monkey F5:00 HL', description: 'Parent participation class for toddlers on the move!', day: 'Friday', time: '5:00pm-5:30pm', ageRange: '2 yrs', instructor: 'Hailey Lugg', price: 65 },
            { name: 'Mini Monkey S8:30 TB/AA', description: 'Parent participation class for toddlers on the move!', day: 'Saturday', time: '8:30am-9:00am', ageRange: '2 yrs', instructor: 'Hailey Lugg', price: 65 },
            { name: 'Mini Monkey S9:00 SR', description: 'Parent participation class for toddlers on the move!', day: 'Saturday', time: '9:00am-9:30am', ageRange: '2 yrs', instructor: 'Hailey Lugg', price: 65 },

            // Diaper/Mini Combined (1-3 yrs)
            { name: 'Diaper/Mini M10:30 JP', description: 'Parent participation class for walkers!', day: 'Monday', time: '10:30am-11:00am', ageRange: '1-3 yrs', instructor: 'Briana Fenerty', price: 65 },
            { name: 'Diaper/Mini T10:00 HL', description: 'Parent participation class for walkers!', day: 'Tuesday', time: '10:00am-10:30am', ageRange: '1-3 yrs', instructor: 'Hailey Lugg', price: 65 },
            { name: 'Diaper/Mini T5:30 SR/AA', description: 'Parent participation class for walkers!', day: 'Tuesday', time: '5:30pm-6:00pm', ageRange: '1-3 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Diaper/Mini Th3:30 SR/BN', description: 'Parent participation class for walkers!', day: 'Thursday', time: '3:30pm-4:00pm', ageRange: '1-3 yrs', instructor: 'Sofia Rocha', price: 65 },
            { name: 'Diaper/Mini F9:15 JP', description: 'Parent participation class for walkers!', day: 'Friday', time: '9:15am-9:45am', ageRange: '1-3 yrs', instructor: 'Jordyn Parra', price: 65 },
        ],
    },
    {
        class: 'kindergym',
        title: 'Kindergym',
        description: 'Fun developmental classes for toddlers and preschoolers. Our Kindergym program builds confidence, coordination, and social skills through age-appropriate gymnastics activities.',
        ageRange: '3-5 years',
        image: '/images/classes/kindergym.jpg',
        schedules: [
            // Tumble Tots (3 yrs)
            { name: 'Tumble Tots M9:45 JP', description: 'Gymnastics for independent 3 yr. olds!', day: 'Monday', time: '9:45am-10:30am', ageRange: '3-4 yrs', instructor: 'Jordyn Parra', price: 90 },
            { name: 'Tumble Tots M10:15 SR', description: 'Gymnastics for independent 3 yr. olds!', day: 'Monday', time: '10:15am-11:00am', ageRange: '3-4 yrs', instructor: 'Sofia Rocha', price: 90 },
            { name: 'Tumble Tots M4:45 DS', description: 'Gymnastics for independent 3 yr. olds!', day: 'Monday', time: '4:45pm-5:30pm', ageRange: '3-4 yrs', instructor: 'Dylan Stepan', price: 90 },
            { name: 'Tumble Tots M5:30 HT/BN', description: 'Gymnastics for independent 3 yr. olds!', day: 'Monday', time: '5:30pm-6:15pm', ageRange: '3-4 yrs', instructor: 'Hannah Tawil', price: 90 },
            { name: 'Tumble Tots T9:15 HL', description: 'Gymnastics for independent 3 yr. olds!', day: 'Tuesday', time: '9:15am-10:00am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90, status: 'waitlist' },
            { name: 'Tumble Tots T3:45 AZ', description: 'Gymnastics for independent 3 yr. olds!', day: 'Tuesday', time: '3:45pm-4:30pm', ageRange: '3-4 yrs', instructor: 'Aliyah Zeliah', price: 90 },
            { name: 'Tumble Tots T4:30 AZ', description: 'Gymnastics for independent 3 yr. olds!', day: 'Tuesday', time: '4:30pm-5:15pm', ageRange: '3-4 yrs', instructor: 'Aliyah Zeliah', price: 90 },
            { name: 'Tumble Tots T5:15 AZ', description: 'Gymnastics for independent 3 yr. olds!', day: 'Tuesday', time: '5:15pm-6:00pm', ageRange: '3-4 yrs', instructor: 'Aliyah Zeliah', price: 90 },
            { name: 'Tumble Tots W6:30 HT', description: 'Gymnastics for independent 3 yr. olds!', day: 'Wednesday', time: '6:30pm-7:15pm', ageRange: '3-4 yrs', instructor: 'Hannah Tawil', price: 90 },
            { name: 'Tumble Tots Th9:15 HL', description: 'Gymnastics for independent 3 yr. olds!', day: 'Thursday', time: '9:15am-10:00am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90 },
            { name: 'Tumble Tots Th9:45 JP', description: 'Gymnastics for independent 3 yr. olds!', day: 'Thursday', time: '9:45am-10:30am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90 },
            { name: 'Tumble Tots Th10:15 SR', description: 'Gymnastics for independent 3 yr. olds!', day: 'Thursday', time: '10:15am-11:00am', ageRange: '3-4 yrs', instructor: 'Sofia Rocha', price: 90 },
            { name: 'Tumble Tots Th4:30 SR/BN', description: 'Gymnastics for independent 3 yr. olds!', day: 'Thursday', time: '4:30pm-5:15pm', ageRange: '3-4 yrs', instructor: 'Sofia Rocha', price: 90, status: 'waitlist' },
            { name: 'Tumble Tots Th6:30 AZ', description: 'Gymnastics for independent 3 yr. olds!', day: 'Thursday', time: '6:30pm-7:15pm', ageRange: '3-4 yrs', instructor: 'Aliyah Zeliah', price: 90 },
            { name: 'Tumble Tots F9:15 SR', description: 'Gymnastics for independent 3 yr. olds!', day: 'Friday', time: '9:15am-10:00am', ageRange: '3-4 yrs', instructor: 'Sofia Rocha', price: 90 },
            { name: 'Tumble Tots F9:45 JP', description: 'Gymnastics for independent 3 yr. olds!', day: 'Friday', time: '9:45am-10:30am', ageRange: '3-4 yrs', instructor: 'Jordyn Parra', price: 90 },
            { name: 'Tumble Tots F3:45 HT', description: 'Gymnastics for independent 3 yr. olds!', day: 'Friday', time: '3:45pm-4:30pm', ageRange: '3-4 yrs', instructor: 'Hannah Tawil', price: 90, status: 'waitlist' },
            { name: 'Tumble Tots F5:30 HT', description: 'Gymnastics for independent 3 yr. olds!', day: 'Friday', time: '5:30pm-6:15pm', ageRange: '3-4 yrs', instructor: 'Hannah Tawil', price: 90 },
            { name: 'Tumble Tots S8:30 HL', description: 'Gymnastics for independent 3 yr. olds!', day: 'Saturday', time: '8:30am-9:15am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90, status: 'waitlist' },
            { name: 'Tumble Tots S9:15 HL', description: 'Gymnastics for independent 3 yr. olds!', day: 'Saturday', time: '9:15am-10:00am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90, status: 'waitlist' },
            { name: 'Tumble Tots S9:30 TB/AA', description: 'Gymnastics for independent 3 yr. olds!', day: 'Saturday', time: '9:30am-10:15am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90 },
            { name: 'Tumble Tots S10:15 AA/TB', description: 'Gymnastics for independent 3 yr. olds!', day: 'Saturday', time: '10:15am-11:00am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90 },
            { name: 'Tumble Tots S11:00 AA', description: 'Gymnastics for independent 3 yr. olds!', day: 'Saturday', time: '11:00am-11:45am', ageRange: '3-4 yrs', instructor: 'Hailey Lugg', price: 90, status: 'waitlist' },

            // KinderKids (4-5 yrs) - Beginner
            { name: 'KinderKids M3:30 DS', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Monday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Dylan Stepan', price: 105 },
            { name: 'Kinder/Gym Kids M5:30 DS', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Monday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Dylan Stepan', price: 105 },
            { name: 'Kinder/Gym Kids T 9:00 EV', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Tuesday', time: '9:00am-10:00am', ageRange: '4-6 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Kinder/Gym Kids T10:00 EV', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Tuesday', time: '10:00am-11:00am', ageRange: '4-5 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'KinderKids T4:30 HT', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Tuesday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Kinder/Gym Kids W3:30 HT', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Wednesday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'KinderKids W5:30 HT', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Wednesday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Kinder/Gym Kids Th2:30 SR/BN', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Thursday', time: '2:30pm-3:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kinder/Gym Kids Th 3:30 AM', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Thursday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Addison MacNeal', price: 105 },
            { name: 'Kinder/Gym Kids Th4:30 AM/AZ', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Thursday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Addison MacNeal', price: 105 },
            { name: 'KinderKids Th5:30 AM', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Thursday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Addison MacNeal', price: 105 },
            { name: 'Kinder/Gym Kids Th 6:30 SR/BN', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Thursday', time: '6:30pm-7:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kinder/Gym Kids F10:00 SR', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Friday', time: '10:00am-11:00am', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },
            { name: 'Kinder/Gym Kids F3:30 SR', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Friday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },
            { name: 'Kinder/Gym Kids F4:30 SR', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Friday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kinder/Gym Kids F5:30 SR', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Friday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kinder/Gym Kids S9:00 AZ', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Saturday', time: '9:00am-10:00am', ageRange: '4-6 yrs', instructor: 'Aliyah Zeliah', price: 105 },
            { name: 'KinderKids S10:00 AZ', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Saturday', time: '10:00am-11:00am', ageRange: '4-6 yrs', instructor: 'Aliyah Zeliah', price: 105 },
            { name: 'Kinder/Gym Kids S10:30 SR', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Saturday', time: '10:30am-11:30am', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kinder/Gym Kids S11:30 SR', description: 'Beginner class for kids ages 4 & 5 yrs!', day: 'Saturday', time: '11:30am-12:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },

            // Gym/Mighty Kids (4-5 yrs) - Intermediate (By Invitation)
            { name: 'Gym/Mighty Kids M3:30 HT/BN', description: 'By Invitation ONLY', day: 'Monday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil, Brianna Nighswonger', price: 105 },
            { name: 'Gym/Mighty Kids M4:30 JP', description: 'By Invitation ONLY', day: 'Monday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Jordyn Parra', price: 105 },
            { name: 'Gym/Mighty Kids T3:30 AM/BN', description: 'By Invitation ONLY', day: 'Tuesday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Addison MacNeal', price: 105, status: 'waitlist' },
            { name: 'Gym/Mighty Kids T4:30 SR/BN', description: 'By Invitation ONLY', day: 'Tuesday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },
            { name: 'Gym/Mighty Kids T5:30 AM/BN', description: 'By Invitation ONLY', day: 'Tuesday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Addison MacNeal', price: 105 },
            { name: 'Gym/Mighty Kids W4:30 HT', description: 'By Invitation ONLY', day: 'Wednesday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Gym/Mighty Kids W4:30 SR/JP', description: 'By invitation ONLY', day: 'Wednesday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Gym/Mighty Kids W5:30 SR/BN', description: 'By Invitation Only', day: 'Wednesday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kids Inv. (Mighty/Super/Mega) Th3:00 EV', description: 'By Invitation ONLY', day: 'Thursday', time: '3:00pm-4:00pm', ageRange: '4-6 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Gym/Mighty Kids F5:30 EV', description: 'By Invitation ONLY', day: 'Friday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Gym/Mighty Kids S10:00 HL', description: 'By Invitation ONLY', day: 'Saturday', time: '10:00am-11:00am', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },

            // Kids Invitational (4-5 yrs) - Advanced
            { name: 'Kids Inv. (Mighty/Super/Mega) M5:30 SR/JP', description: 'By Invitation ONLY', day: 'Monday', time: '5:30pm-6:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Kids Inv. (Mighty/Super/Mega) W3:30 SR/JP', description: 'By Invitation ONLY', day: 'Wednesday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },
            { name: 'Kids Inv. (Mighty/Super/Mega) W6:30 SR/BN', description: 'By Invitation ONLY', day: 'Wednesday', time: '6:30pm-7:30pm', ageRange: '4-6 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },
            { name: 'Kids Inv. (Mighty/Super/Mega) Th3:30 HT/AZ', description: 'By Invitation ONLY', day: 'Thursday', time: '3:30pm-4:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Kids Inv. (Mighty/Super/Mega) Th5:00 EV', description: 'By Invitation ONLY', day: 'Thursday', time: '5:00pm-6:00pm', ageRange: '4-6 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Kids Inv. (Mighty/Super/Mega) F4:30 HT/AM', description: 'By Invitation ONLY', day: 'Friday', time: '4:30pm-5:30pm', ageRange: '4-6 yrs', instructor: 'Hannah Tawil', price: 105 },
        ],
    },
    {
        class: 'gymnastics',
        title: 'Gymnastics (6+)',
        description: 'Structured gymnastics training for school-age children and teens. Progressive skill development across all apparatus with multiple levels from beginner to advanced.',
        ageRange: '6-12 years',
        image: '/images/classes/gymnastics.jpg',
        schedules: [
            // Beginner (Sparkler) 6+
            { name: 'Beginner 6+ yrs. M3:30 JP', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Monday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Jordyn Parra', price: 105 },
            { name: 'Beginner 6+yrs. M6:30 DS', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Monday', time: '6:30pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Dylan Stepan', price: 105 },
            { name: 'Beginner 6+yrs. T4:30 AM', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Tuesday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Addison MacNeal', price: 105 },
            { name: 'Beginner 6+ yrs. T5:30 CF', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Tuesday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Chris Fenerty', price: 105 },
            { name: 'Beginner 6+ yrs. T6:30 CF', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Tuesday', time: '6:30pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Chris Fenerty', price: 105 },
            { name: 'Beginner 6+ yrs. W3:30 JR/BN', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Wednesday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+ yrs. W4:30 JR/BN', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Wednesday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+ yrs. W5:30 JR', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Wednesday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+ yrs. Th2:30 JR', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Thursday', time: '2:30pm-3:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+yrs. Th5:30 SR/BN', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Thursday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Beginner 6+yrs. F4:30 JR/DDR', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Friday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+yrs. F5:30 JR/DDR', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Friday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+yrs. S8:30 JR', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Saturday', time: '8:30am-9:30am', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Beginner 6+yrs. S9:30 SR', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Saturday', time: '9:30am-10:30am', ageRange: '6-12 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Beg. 6+yrs. S11:00 AZ', description: 'Beginner gymnastics for 6 yrs. & up!', day: 'Saturday', time: '11:00am-12:00pm', ageRange: '6-12 yrs', instructor: 'Aliyah Zeliah', price: 105 },

            // Intermediate (Star/Mighty) 6+
            { name: 'Intermediate (Star/Mighty) 6 + yrs. M3:30 EV', description: 'By Invitation ONLY', day: 'Monday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. M4:30 HT', description: 'By Invitation ONLY', day: 'Monday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6 + yrs. M6:30 HT', description: 'By Invitation ONLY', day: 'Monday', time: '6:30pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6 + yrs. M6:30 SR/JP', description: 'By Invitation ONLY', day: 'Monday', time: '6:30pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Sofia Rocha', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. T3:30 HT', description: 'By Invitation ONLY', day: 'Tuesday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Hannah Tawil', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. T3:30 SR', description: 'By Invitation ONLY', day: 'Tuesday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Sofia Rocha', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. T5:00 EV', description: 'By Invitation ONLY', day: 'Tuesday', time: '5:00pm-6:00pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. T6:30 TB/AA', description: 'By Invitation ONLY', day: 'Tuesday', time: '6:30pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Tiffany Brown', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. W3:30 EV', description: 'By Invitation ONLY', day: 'Wednesday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. W4:30 EV', description: 'By Invitation ONLY', day: 'Wednesday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. W5:30 EV /CF', description: 'By Invitation ONLY', day: 'Wednesday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. W6:30 JR/TB/JP', description: 'By Invitation ONLY', day: 'Wednesday', time: '6:30pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. Th3:30 JR', description: 'By Invitation ONLY', day: 'Thursday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. Th4:30 HT', description: 'By Invitation ONLY', day: 'Thursday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Hannah Tawil', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. Th 5:30 HT/AZ', description: 'By Invitation ONLY', day: 'Thursday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Hannah Tawil', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. Th6:00 JR', description: 'By Invitation ONLY', day: 'Thursday', time: '6:00pm-7:00pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. F3:30 JR/AM', description: 'By Invitation ONLY', day: 'Friday', time: '3:30pm-4:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105, status: 'waitlist' },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. F4:30 EV', description: 'By Invitation ONLY', day: 'Friday', time: '4:30pm-5:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs F5:30 HL/AM', description: 'By Invitation ONLY', day: 'Friday', time: '5:30pm-6:30pm', ageRange: '6-12 yrs', instructor: 'Hailey Lugg', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. S9:30 JR', description: 'By Invitation ONLY', day: 'Saturday', time: '9:30am-10:30am', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. S10:30 JR', description: 'By Invitation ONLY', day: 'Saturday', time: '10:30am-11:30am', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },
            { name: 'Intermediate (Star/Mighty) 6+ yrs. S11:30 JR', description: 'By Invitation ONLY', day: 'Saturday', time: '11:30am-12:30pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 105 },

            // Int/Adv (Bright/Shooting) 6+
            { name: 'Int/Adv (Bright/Shooting) M3:30 SR', description: 'By Invitation ONLY.', day: 'Monday', time: '3:30pm-5:00pm', ageRange: '6-12 yrs', instructor: 'Sofia Rocha', price: 130 },
            { name: 'Int/Adv (Bright/Shooting) M4:30 EV', description: 'By Invitation ONLY.', day: 'Monday', time: '4:30pm-6:00pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 130 },
            { name: 'Int/Adv (Bright/Shooting) M6:00pm EV', description: 'By Invitation ONLY.', day: 'Monday', time: '6:00pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 130 },
            { name: 'Int/Adv (Bright/Shooting) T3:30 EV', description: 'By Invitation ONLY', day: 'Tuesday', time: '3:30pm-5:00pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 130, status: 'waitlist' },
            { name: 'Int/Adv (Bright/Shooting) T6:00 SR', description: 'By Invitation ONLY', day: 'Tuesday', time: '6:00pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Sofia Rocha', price: 130 },
            { name: 'Int/Adv (Bright/Shooting) Th4:30 JR', description: 'By Invitation ONLY', day: 'Thursday', time: '4:30pm-6:00pm', ageRange: '6-12 yrs', instructor: 'Jacob Rosales', price: 130 },
            { name: 'Int/Adv (Bright/Shooting) F3:30 HL', description: 'By Invitation ONLY', day: 'Friday', time: '3:30pm-5:00pm', ageRange: '6-12 yrs', instructor: 'Hailey Lugg', price: 130 },
            { name: 'Int/Adv (Bright/Shooting) S11:00 EV/HL', description: 'By Invitation ONLY', day: 'Saturday', time: '11:00am-12:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 130 },

            // Advanced (Shining + ONLY) 6+
            { name: 'Adv. Invitational (Shining +) T6:00 EV', description: 'By Invitation ONLY', day: 'Tuesday', time: '6:00pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 130 },
            { name: 'Adv. Invitational (Shining +) Th6:00 EV', description: 'By Invitation ONLY', day: 'Thursday', time: '6:00pm-7:30pm', ageRange: '6-12 yrs', instructor: 'Elijiah Vaughan', price: 130 },
        ],
    },
    {
        class: 'ninjas',
        title: 'Ninjas',
        description: 'Obstacle course training inspired by ninja warrior challenges. High-energy classes that build strength, agility, and problem-solving skills through fun obstacle courses.',
        ageRange: '5-12 years',
        image: '/images/classes/ninjas.jpg',
        schedules: [
            // Beginner NINJAS (5+)
            { name: 'Ninjas Beg/Int 5+ yrs W4:30 CF', description: 'Ninja warrior obstacle training', day: 'Wednesday', time: '4:30pm-5:30pm', ageRange: '5-12 yrs', instructor: 'Chris Fenerty', price: 105, status: 'waitlist' },
            { name: 'Ninjas Beg/Int 5+ yrs Th 4:00 EV', description: 'Ninja warrior obstacle training', day: 'Thursday', time: '4:00pm-5:00pm', ageRange: '5-12 yrs', instructor: 'Elijiah Vaughan', price: 105 },
            { name: 'Ninjas Beg/Int 5+ yrs F3:30 EV/DDR', description: 'Ninja warrior obstacle training', day: 'Friday', time: '3:30pm-4:30pm', ageRange: '5-12 yrs', instructor: 'Elijiah Vaughan', price: 105 },

            // Intermediate/Advanced NINJAS (Stars+ ONLY)
            { name: 'Ninjas Int/Adv (Turtles+ ONLY) W6:30 EV/CF', description: 'By Invitation ONLY', day: 'Wednesday', time: '6:30pm-7:30pm', ageRange: '5-12 yrs', instructor: 'Elijiah Vaughan', price: 105, status: 'waitlist' },
        ],
    },
    {
        class: 'open-gym',
        title: 'Open Gym',
        description: 'Supervised free play time for all ages to practice skills and explore our equipment. Great for families and students who want extra practice time in a fun, safe environment.',
        ageRange: 'All ages',
        image: '/images/classes/open-gym.jpg',
        schedules: [
            // Open gym schedules would go here if available from the website
            // The website has a separate page for open gym that wasn't in the data
        ],
    },
];