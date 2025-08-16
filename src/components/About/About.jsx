import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            *About Us*
                        </h2>
                        <p className="mt-6 text-gray-600">

                            At *PRISMA, we believe safety should be *proactive, intelligent, and unstoppable. We are a team of innovators, engineers, and visionaries on a mission to eliminate accidents caused by intoxication, fatigue, and unmonitored human risk factors.

                            Our flagship innovation—*PRISMA (Proactive Risk & Intoxication Safety Monitoring Assistant)—combines *AI, IoT, biosensors, and predictive analytics to detect danger before it becomes disaster. Unlike conventional systems that react too late, PRISMA anticipates risk, enabling real-time interventions that save lives and protect assets.

                            We design with adaptability in mind—whether safeguarding drivers, industrial workers, or high-security environments, PRISMA's modular system integrates seamlessly into any safety ecosystem. Our work is guided by one principle: *prevention is the ultimate form of protection*.

                            Every line of code, every sensor calibration, and every AI model we build is driven by one goal—making the world a place where preventable tragedies simply don't happen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}