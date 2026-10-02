'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { membershipCheckoutUrl } from '@/data/membershipTiers';

interface Benefit {
    title: string;
    description: string;
}

interface TierCardProps {
    title: string;
    slug: string;
    price: {
        monthly: string;
        yearly: string;
    };
    benefits: Benefit[];
    imageUrl?: string;
    previousTier?: string;
}

const TierCard = ({ title, price, benefits, imageUrl, previousTier, slug }: TierCardProps) => {
    const imageSrc = imageUrl || `https://picsum.photos/seed/${title}/300/`;

    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden group flex h-full flex-col"
            whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            transition={{ duration: 0.2 }}
        >
            <Link href={`/membership/${slug}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="px-6 pt-6">
                    <h2 className="text-2xl font-bold text-primary-dark">{title}</h2>
                    <p className="mt-2 text-sm font-semibold text-primary hover:underline">
                        See full tier details
                    </p>
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-6 pt-4">
                <div className="mb-5 space-y-1">
                    <p className="text-lg font-semibold text-gray-900">Monthly: {price.monthly}</p>
                    <p className="text-lg font-semibold text-gray-900">Annual: {price.yearly}</p>
                </div>

                <ul className="space-y-3">
                    {benefits.map((benefit, index) => {
                        const isPreviousTier =
                            previousTier && benefit.title.toLowerCase().includes(previousTier.toLowerCase());

                        return (
                            <li key={index} className="flex items-start">
                                <FaCheckCircle aria-hidden="true" className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <span className={`font-bold ${isPreviousTier ? 'text-primary-dark' : 'text-gray-900'}`}>
                                        {benefit.title}
                                        {benefit.description && ':'}
                                    </span>
                                    {benefit.description && (
                                        <span className="ml-1 text-gray-600">{benefit.description}</span>
                                    )}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-auto space-y-3 pt-6">
                    <a
                        href={membershipCheckoutUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Choose ${title} monthly membership on Zeffy, ${price.monthly}`}
                        className="block rounded-md bg-primary px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-dark"
                    >
                        Monthly · {price.monthly}
                    </a>
                    <a
                        href={membershipCheckoutUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Choose ${title} annual membership on Zeffy, ${price.yearly}`}
                        className="block rounded-md border border-primary px-4 py-3 text-center font-semibold text-primary transition-colors hover:bg-primary/5"
                    >
                        Annual · {price.yearly}
                    </a>
                    <p className="text-center text-xs text-gray-500">
                        Select this tier and billing schedule on Zeffy.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TierCard;
