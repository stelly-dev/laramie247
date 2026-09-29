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
                description: "Text notifications when new local shows drop on our Roku station"
            },
            {
                title: "Social Media Horn Toss",
                description: "Your name shared in a fun jackalope-themed thank-you post"
            }
        ],
        detailedDescription: "Become a foundational part of the Laramie247 community. As a General Member, you're not just a viewer; you're a supporter of independent, local media. Get instant alerts so you never miss a show, and see your name up in lights (well, on our social feed) as a thank you for keeping us hopping.",
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
                title: "Voting Membership",
                description: "A vote in annual board elections and influence in station priorities"
            },
            {
                title: "Jackalope Insider Newsletter",
                description: "Weekly highlights of local shows, citizen journalism tips, and community events"
            },
            {
                title: "Bumper Sticker",
                description: "to showcase your support"
            },
            {
                title: "Virtual Studio Tour",
                description: "Peek behind the curtain at how Laramie247 makes community content"
            },
            {
                title: "Story Pitch Submission",
                description: "Suggest topics for community programs"
            }
        ],
        detailedDescription: "Step up your involvement with the Prairie Listener tier. You get a voice in our future with voting rights, inside scoops via our newsletter, and a tangible piece of Laramie247 with our bumper sticker. Plus, influence our content directly by pitching stories and seeing how the magic happens with a virtual tour.",
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
                title: "All Prairie Listener benefits",
                description: ""
            },
            {
                title: "Studio Time + Gear",
                description: "Monthly access to production equipment and discounted rates from our staff to film your show"
            },
            {
                title: "Swag Pack",
                description: "T-shirt with Laramie 247 logo and the tagline \"Made in Laramie, Streamed Worldwide\""
            },
            {
                title: "On-Air Shout-Out",
                description: "Your name or local business featured in the credits of all Laramie247 productions"
            },
            {
                title: "Free Access",
                description: "All Laramie247 workshops"
            }
        ],
        detailedDescription: "Ready to create? The Jackalope Producer tier is for the makers. Gain access to production equipment and discounted staff rates to bring your own vision to life. Wear your support with pride with our exclusive swag pack, and get recognized on-air for your substantial contribution to community media.",
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
                title: "All Jackalope Producer benefits",
                description: ""
            },
            {
                title: "Round-table meetings",
                description: "Invited to join all quarterly meetings"
            },
            {
                title: "Programming Selection",
                description: "An opportunity to help select the next quarter's programming schedule"
            },
            {
                title: "Name on Legendary Jackalope Plaque",
                description: ""
            }
        ],
        detailedDescription: "The pinnacle of support. As a Mountain Visionary, you help shape the strategic direction of Laramie247. Join our quarterly round-table meetings, help select the next quarter's programming schedule, and have your name added to our Legendary Jackalope Plaque.",
        heroImage: "/images/tiers/mountain-visionary-hero.png"
    }
];
