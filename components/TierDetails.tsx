'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Tier, membershipCheckoutUrl } from '@/data/membershipTiers';
import { useRef } from 'react';

export default function TierDetails({ tier }: { tier: Tier }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the hero image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0]);

    return (
        <div ref={ref} className="min-h-screen bg-white">
            <div className="relative h-[60vh] overflow-hidden w-full bg-gray-900 flex items-end justify-center pb-16">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ y }}
                >
                    <Image
                        src={tier.heroImage}
                        alt={tier.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <motion.div style={{ opacity }} className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">{tier.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
                            {tier.price.monthly} · {tier.price.yearly}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-2xl p-4 md:p-12 max-w-4xl mx-auto"
                >
                    <Link href="/membership" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors group">
                        <FaArrowLeft aria-hidden="true" className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Membership Tiers
                    </Link>

                    <div className="prose prose-lg max-w-none mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">About this Tier</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {tier.detailedDescription}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">What&apos;s Included</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {tier.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start bg-white p-3 md:p-4 rounded-lg shadow-sm">
                                    <FaCheckCircle aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6 text-accent mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm md:text-base">
                                        <span className="font-bold text-gray-900">
                                            {benefit.title}
                                            {benefit.description && ':'}
                                        </span>
                                        {benefit.description && (
                                            <span className="ml-1 text-gray-600 font-normal">
                                                {benefit.description}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Choose your membership</h2>
                        <p className="mt-2 text-gray-600">
                            Both options open Laramie247&apos;s Zeffy membership form. Select this tier and billing schedule there.
                        </p>
                        <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                            <a
                                href={membershipCheckoutUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Choose ${tier.title} monthly membership on Zeffy, ${tier.price.monthly}`}
                                className="rounded-full bg-primary px-6 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-dark"
                            >
                                Monthly · {tier.price.monthly}
                            </a>
                            <a
                                href={membershipCheckoutUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Choose ${tier.title} annual membership on Zeffy, ${tier.price.yearly}`}
                                className="rounded-full border border-primary px-6 py-4 text-lg font-bold text-primary transition-colors hover:bg-primary/5"
                            >
                                Annual · {tier.price.yearly}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
