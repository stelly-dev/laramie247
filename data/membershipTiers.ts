export interface Benefit {
    title: string;
    description: string;
}

export interface Tier {
    title: string;
    slug: string;
    price: {
        monthly: string;
        yearly: string;
    };
    benefits: Benefit[];
    detailedDescription: string;
    /** Image path relative to public or absolute URL */
    heroImage: string;
}

export const membershipCheckoutUrl =
    "https://www.zeffy.com/en-US/ticketing/laramie247-incs-memberships";

export const tiers: Tier[] = [
    {
        title: "General Member",
        slug: "general-member",
        price: {
            monthly: "$4.99/month",
            yearly: "$100/year"
        },
        benefits: [
            {
                title: "Jackalope Alert",
                description: "Text notifications when new local shows are available on our Roku station."
            },
            {
                title: "Social media thank-you",
                description: "A fun, jackalope-themed post recognizing your support."
            }
        ],
        detailedDescription: "Support independent local media and help keep Laramie247's community programming going. General Members receive text alerts when new local shows are available on our Roku station and a jackalope-themed thank-you on social media.",
        heroImage: "/images/tiers/general-member-hero.png"
    },
    {
        title: "Prairie Listener",
        slug: "prairie-listener",
        price: {
            monthly: "$14.99/month",
            yearly: "$150/year"
        },
        benefits: [
            {
                title: "Voting membership",
                description: "Vote in annual board elections and have a voice in station priorities."
            },
            {
                title: "Jackalope Insider newsletter",
                description: "Weekly local show highlights, citizen journalism tips, and community events."
            },
            {
                title: "Bumper sticker",
                description: "A Laramie247 sticker to show your support."
            },
            {
                title: "Story pitches",
                description: "Suggest topics for community programs."
            },
            {
                title: "Virtual studio tour",
                description: "See how Laramie247 creates community content."
            }
        ],
        detailedDescription: "Get more involved in the future of local media. Prairie Listeners can vote in annual board elections, receive a weekly newsletter with local show highlights and community news, suggest story topics, take a virtual studio tour, and receive a Laramie247 bumper sticker.",
        heroImage: "/images/tiers/prairie-listener-hero.png"
    },
    {
        title: "Jackalope Producer",
        slug: "jackalope-producer",
        price: {
            monthly: "$49.99/month",
            yearly: "$500/year"
        },
        benefits: [
            {
                title: "Everything in Prairie Listener",
                description: "All Prairie Listener benefits, plus:"
            },
            {
                title: "Studio time and gear",
                description: "Monthly access to production equipment, with discounted staff rates to film your show."
            },
            {
                title: "Workshop access",
                description: "Free access to Laramie247 workshops."
            },
            {
                title: "Laramie247 T-shirt",
                description: "A shirt with the “Made in Laramie, Streamed Worldwide” tagline."
            },
            {
                title: "On-air shout-out",
                description: "Your name or local business featured in the credits of Laramie247 productions."
            }
        ],
        detailedDescription: "Make your own community media with support from Laramie247. Jackalope Producers receive all Prairie Listener benefits, monthly access to production equipment, discounted staff rates to film a show, free workshop access, a Laramie247 T-shirt, and an on-air credit in Laramie247 productions.",
        heroImage: "/images/tiers/jackalope-producer-hero.png"
    },
    {
        title: "Mountain Visionary",
        slug: "mountain-visionary",
        price: {
            monthly: "$100/month",
            yearly: "$1,000/year"
        },
        benefits: [
            {
                title: "Everything in Jackalope Producer",
                description: "All Jackalope Producer benefits, plus:"
            },
            {
                title: "Programming selection",
                description: "An opportunity to help select the next quarter's programming schedule."
            },
            {
                title: "Quarterly round tables",
                description: "An invitation to join all quarterly round-table meetings."
            },
            {
                title: "Legendary Jackalope Plaque",
                description: "Your name displayed on the plaque."
            }
        ],
        detailedDescription: "Help shape what Laramie247 brings to the community. Mountain Visionaries receive all Jackalope Producer benefits, an opportunity to help select the next quarter's programming schedule, invitations to quarterly round-table meetings, and recognition on the Legendary Jackalope Plaque.",
        heroImage: "/images/tiers/mountain-visionary-hero.png"
    }
];
