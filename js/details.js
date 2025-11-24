const categoryDetailsData = {
    'web-development': {
        title: 'Web Development',
        icon: '💻',
        servicesCount: '5,234 Services Available',
        description: [
            'Build high-performing websites, web applications, and platforms tailored to your business goals. Our experienced developers cover everything from landing pages to full-stack applications.',
            'Get expert help with responsive layouts, CMS customization, API integrations, and performance optimization to deliver seamless user experiences on every device.'
        ],
        subcategories: ['Frontend Development', 'Backend Development', 'Full Stack', 'E-commerce', 'WordPress', 'React', 'Node.js', 'PHP'],
        serviceSlugs: [
            'custom-website-development',
            'ecommerce-store-build',
            'react-web-application',
            'wordpress-customization',
            'api-development',
            'website-redesign'
        ]
    },
    'design': {
        title: 'Design',
        icon: '🎨',
        servicesCount: '3,891 Services Available',
        description: [
            'Translate your brand vision into stunning visuals. From logos to full brand systems, our designers craft assets that resonate with your audience.',
            'Get expert help with UI/UX design, marketing collateral, and complete visual identity systems.'
        ],
        subcategories: ['Brand Identity', 'Logo Design', 'UI/UX', 'Product Design', 'Illustration', 'Print Design'],
        serviceSlugs: ['logo-design-package', 'brand-identity-package', 'ui-ux-design']
    },
    'writing': {
        title: 'Writing & Translation',
        icon: '✍️',
        servicesCount: '2,456 Services Available',
        description: [
            'Tell your story clearly and persuasively with professional copywriting, blogging, and technical writing services.',
            'Boost your search visibility with SEO-optimized content written by industry specialists.'
        ],
        subcategories: ['Copywriting', 'Blog Posts', 'Technical Writing', 'Proofreading', 'Localization'],
        serviceSlugs: ['seo-content-writing']
    },
    'mobile-apps': {
        title: 'Mobile Apps',
        icon: '📱',
        servicesCount: '1,923 Services Available',
        description: [
            'Launch polished mobile experiences across iOS and Android with cross-platform experts.',
            'From MVPs to enterprise solutions, get end-to-end product design and development support.'
        ],
        subcategories: ['iOS Development', 'Android Development', 'Cross-Platform', 'App UI/UX', 'App Maintenance'],
        serviceSlugs: ['react-web-application', 'custom-website-development']
    },
    'marketing': {
        title: 'Digital Marketing',
        icon: '📊',
        servicesCount: '4,567 Services Available',
        description: [
            'Grow your audience with data-backed marketing strategies covering SEO, SEM, and social media.',
            'Launch campaigns, optimize funnels, and automate outreach with certified experts.'
        ],
        subcategories: ['Social Media', 'SEO', 'Email Marketing', 'Paid Ads', 'Content Strategy'],
        serviceSlugs: ['social-media-management', 'seo-content-writing']
    },
    'video-editing': {
        title: 'Video & Animation',
        icon: '🎬',
        servicesCount: '1,234 Services Available',
        description: [
            'Bring your stories to life with cinematic edits, product explainers, and motion graphics.',
            'Perfect for ads, course content, podcasts, and branded storytelling.'
        ],
        subcategories: ['Video Editing', 'Motion Graphics', 'Explainers', 'Color Grading'],
        serviceSlugs: ['video-editing', 'brand-identity-package']
    },
    'music-audio': {
        title: 'Music & Audio',
        icon: '🔊',
        servicesCount: '987 Services Available',
        description: [
            'Level up your productions with pro audio editing, mixing, and voiceover talent.',
            'Great for podcasts, ads, video games, and immersive brand experiences.'
        ],
        subcategories: ['Voiceover', 'Mixing & Mastering', 'Podcast Editing', 'Sound Design'],
        serviceSlugs: ['video-editing']
    },
    'business': {
        title: 'Business & Consulting',
        icon: '💼',
        servicesCount: '2,345 Services Available',
        description: [
            'Partner with consultants to build business plans, automate workflows, and uncover insights.',
            'Tap into financial modeling, analytics, and go-to-market expertise.'
        ],
        subcategories: ['Business Plans', 'Strategy', 'Financial Modeling', 'Analytics'],
        serviceSlugs: ['brand-identity-package', 'seo-content-writing']
    },
    'photography': {
        title: 'Photography',
        icon: '📸',
        servicesCount: '1,567 Services Available',
        description: [
            'Showcase your products and team with crisp, conversion-focused visuals.',
            'Get editing, retouching, and creative direction tailored to your brand aesthetic.'
        ],
        subcategories: ['Product Photos', 'Lifestyle Shoots', 'Retouching', 'Event Coverage'],
        serviceSlugs: ['logo-design-package']
    },
    'data-entry': {
        title: 'Data Entry & Admin',
        icon: '🔧',
        servicesCount: '3,234 Services Available',
        description: [
            'Delegate repetitive tasks to specialists who keep your operations running smoothly.',
            'Perfect for research, CRM updates, product uploads, and lead enrichment.'
        ],
        subcategories: ['Data Entry', 'Web Research', 'Transcription', 'Virtual Assistance'],
        serviceSlugs: ['wordpress-customization']
    },
    'translation': {
        title: 'Translation & Localization',
        icon: '🌐',
        servicesCount: '1,456 Services Available',
        description: [
            'Reach new markets with culturally accurate localization and multilingual copywriting.',
            'From websites to legal documents, work with native speakers across 40+ languages.'
        ],
        subcategories: ['Document Translation', 'Website Localization', 'Subtitling', 'Transcreation'],
        serviceSlugs: ['seo-content-writing']
    },
    'analytics': {
        title: 'Data & Analytics',
        icon: '📈',
        servicesCount: '987 Services Available',
        description: [
            'Turn raw data into actionable dashboards, forecasts, and insights.',
            'Automate reporting and make smarter decisions with experienced analysts.'
        ],
        subcategories: ['Business Intelligence', 'Dashboarding', 'Data Engineering', 'Forecasting'],
        serviceSlugs: ['wordpress-customization', 'seo-content-writing']
    }
};

const serviceDetailsData = {
    'custom-website-development': {
        title: 'Custom Website Development',
        slug: 'custom-website-development',
        category: 'web-development',
        shortDescription: 'Professional website development with modern design and responsive layout.',
        image: 'assets/images/imgCustomWebsiteDevelopment.jfif',
        heroImage: 'assets/images/imgCustomWebsiteDevelopment.jfif',
        price: 500,
        priceNote: 'Starting from',
        rating: 4.9,
        reviews: 234,
        badge: 'popular',
        description: [
            'I will create a professional, fully responsive website tailored to your business goals. Every project starts with brand discovery and wireframes, ensuring we align on structure before moving into polished UI.',
            'Expect clean, maintainable code, SEO-ready markup, and detailed handoff documentation so you can confidently manage your site after launch.'
        ],
        bulletPoints: [
            'Custom design based on your brand identity',
            'Fully responsive layout (mobile, tablet, desktop)',
            'Up to 5 core pages + blog integration',
            'Contact forms with email automation',
            'On-page SEO and performance optimization',
            '30 days of post-launch support'
        ],
        includes: [
            { label: 'Number of Pages', value: '5 Pages' },
            { label: 'Design Customization', value: 'Full' },
            { label: 'Responsive Design', value: 'Included' },
            { label: 'Content Upload', value: 'Included' },
            { label: 'Revisions', value: '3 Rounds' },
            { label: 'Delivery Time', value: '7 Days' }
        ],
        sellerSlug: 'sarah-johnson',
        sellerName: 'Sarah Johnson',
        sellerTitle: 'Full-Stack Web Developer',
        sellerImage: 'assets/images/imgSarahJohnson.jfif',
        sellerRating: 4.9,
        reviewsList: [
            { name: 'John Smith', time: '2 weeks ago', rating: 5, text: 'Sarah delivered a beautiful site that loads fast and converts. Communication was effortless the entire sprint.' },
            { name: 'Emily Davis', time: '1 month ago', rating: 5, text: 'Great experience! The website exceeded our expectations and the documentation made handoff simple.' },
            { name: 'Michael Brown', time: '2 months ago', rating: 5, text: 'Professional service and pixel-perfect execution. We already booked her for phase two.' }
        ]
    },
    'ecommerce-store-build': {
        title: 'E-commerce Website Development',
        slug: 'ecommerce-store-build',
        category: 'web-development',
        shortDescription: 'Complete Shopify or WooCommerce builds with secure checkout and automation.',
        image: 'assets/images/imgE-commerceWebsite.png',
        heroImage: 'assets/images/imgE-commerceWebsite.png',
        price: 1200,
        priceNote: 'Average project size',
        rating: 4.8,
        reviews: 189,
        badge: 'popular',
        description: [
            'Launch a conversion-optimized online store with custom product pages, payment integrations, and automated fulfillment workflows.',
            'Includes analytics setup, abandoned cart automation, and training so your team can manage the store confidently.'
        ],
        bulletPoints: [
            'Custom product page templates',
            'Secure payment + tax configuration',
            'Inventory + shipping automation',
            'Email flows for abandoned carts',
            'Klaviyo/Mailchimp integration',
            'Loom walkthrough + documentation'
        ],
        includes: [
            { label: 'Platform', value: 'Shopify / WooCommerce' },
            { label: 'Products Setup', value: 'Up to 30' },
            { label: 'Integrations', value: 'Stripe, PayPal, Afterpay' },
            { label: 'Revisions', value: '3 Rounds' },
            { label: 'Delivery Time', value: '10 Days' }
        ],
        sellerSlug: 'sarah-johnson',
        sellerName: 'Sarah Johnson',
        sellerTitle: 'Full-Stack Web Developer',
        sellerImage: 'assets/images/imgSarahJohnson.jfif',
        sellerRating: 4.9,
        reviewsList: [
            { name: 'Noah Peterson', time: '3 weeks ago', rating: 5, text: 'Checkout flow looks great and works flawlessly. Sales are already up 18%!' },
            { name: 'Priya Kapoor', time: '1 month ago', rating: 4.8, text: 'Incredible attention to detail. Appreciate the after-launch support as well.' }
        ]
    },
    'react-web-application': {
        title: 'React Web Application',
        slug: 'react-web-application',
        category: 'web-development',
        shortDescription: 'Modern React apps with Redux, TypeScript, and API integrations.',
        image: 'assets/images/imgReactWebApplication.jfif',
        heroImage: 'assets/images/imgReactWebApplication.jfif',
        price: 800,
        priceNote: 'Project-based pricing',
        rating: 4.9,
        reviews: 156,
        badge: 'new',
        description: [
            'Build scalable, component-driven React applications with clean architecture and reusable UI systems.',
            'Includes API integration, auth flows, testing setup, and deployment guidance.'
        ],
        bulletPoints: [
            'React, Next.js, or Remix',
            'Redux Toolkit / Zustand state management',
            'REST or GraphQL API integration',
            'Full TypeScript coverage',
            'Storybook + automated tests',
            'CI/CD + deployment playbook'
        ],
        includes: [
            { label: 'Deliverables', value: 'SPA or SSR app' },
            { label: 'Testing', value: 'Unit + Integration' },
            { label: 'Docs', value: 'Technical handoff' },
            { label: 'Revisions', value: 'Unlimited within scope' },
            { label: 'Delivery Time', value: '2-4 Weeks' }
        ],
        sellerSlug: 'sarah-johnson',
        sellerName: 'Sarah Johnson',
        sellerTitle: 'Full-Stack Web Developer',
        sellerImage: 'assets/images/imgSarahJohnson.jfif',
        sellerRating: 4.9,
        reviewsList: [
            { name: 'Anita Flores', time: '3 weeks ago', rating: 5, text: 'Code quality is outstanding. Our internal team loved the documentation.' },
            { name: 'Leo Turner', time: '1 month ago', rating: 4.9, text: 'Delivered ahead of schedule and helped us deploy to Vercel without issues.' }
        ]
    },
    'wordpress-customization': {
        title: 'WordPress Customization',
        slug: 'wordpress-customization',
        category: 'web-development',
        shortDescription: 'Theme customization, performance tuning, and plugin development.',
        image: 'assets/images/imgWordPressCustomization.jfif',
        heroImage: 'assets/images/imgWordPressCustomization.jfif',
        price: 350,
        priceNote: 'Based on scope',
        rating: 4.7,
        reviews: 223,
        badge: 'popular',
        description: [
            'Transform your WordPress site with pixel-perfect themes, custom blocks, and performance enhancements.',
            'Includes security hardening, SEO setup, and training videos so your team can update content with confidence.'
        ],
        bulletPoints: [
            'Custom Gutenberg blocks',
            'WooCommerce integration',
            'Speed + Core Web Vitals optimization',
            'Security hardening + backups',
            'Multilingual (WPML/Polylang) setup',
            'Editor training resources'
        ],
        includes: [
            { label: 'Theme Work', value: 'Custom or premium' },
            { label: 'Plugins', value: 'Up to 10 configured' },
            { label: 'Revisions', value: '2 Rounds' },
            { label: 'Delivery Time', value: '5 Days' }
        ],
        sellerSlug: 'sarah-johnson',
        sellerName: 'Sarah Johnson',
        sellerTitle: 'Full-Stack Web Developer',
        sellerImage: 'assets/images/imgSarahJohnson.jfif',
        sellerRating: 4.9,
        reviewsList: [
            { name: 'Natalie V.', time: '2 weeks ago', rating: 5, text: 'Our WordPress site is finally fast and easy to manage. Highly recommend.' }
        ]
    },
    'api-development': {
        title: 'API Development & Integration',
        slug: 'api-development',
        category: 'web-development',
        shortDescription: 'Scalable REST and GraphQL APIs with documentation and testing.',
        image: 'assets/images/imgAPIDevelopment.jfif',
        heroImage: 'assets/images/imgAPIDevelopment.jfif',
        price: 600,
        priceNote: 'Fixed scope deliverable',
        rating: 4.8,
        reviews: 98,
        badge: 'new',
        description: [
            'Design and build secure APIs with Node.js, Express, and TypeScript. Includes schema design, authentication, rate limiting, and monitoring.',
            'Perfect for SaaS platforms, mobile backends, or third-party integrations.'
        ],
        bulletPoints: [
            'OpenAPI / Swagger documentation',
            'Token-based authentication',
            'Background jobs + queues',
            'Testing + monitoring setup',
            'Deployment scripts (Docker)',
            'Knowledge transfer call'
        ],
        includes: [
            { label: 'Tech Stack', value: 'Node.js, Express, TypeScript' },
            { label: 'Documentation', value: 'Swagger + README' },
            { label: 'Revisions', value: '2 Rounds' },
            { label: 'Delivery Time', value: '7 Days' }
        ],
        sellerSlug: 'sarah-johnson',
        sellerName: 'Sarah Johnson',
        sellerTitle: 'Full-Stack Web Developer',
        sellerImage: 'assets/images/imgSarahJohnson.jfif',
        sellerRating: 4.9,
        reviewsList: [
            { name: 'Victor Han', time: '1 month ago', rating: 4.9, text: 'API shipped with great tests and documentation. Plug-and-play experience for our mobile team.' }
        ]
    },
    'website-redesign': {
        title: 'Website Redesign & Optimization',
        slug: 'website-redesign',
        category: 'web-development',
        shortDescription: 'Refresh outdated websites with modern UI, UX, and performance boosts.',
        image: 'assets/images/imgWebsiteRedesign.jfif',
        heroImage: 'assets/images/imgWebsiteRedesign.jfif',
        price: 450,
        priceNote: 'Average engagement',
        rating: 4.9,
        reviews: 267,
        badge: 'popular',
        description: [
            'Give your site a fresh look with conversion-focused layouts, improved navigation, and accessibility polish.',
            'Includes design mockups, implementation, and analytics review to measure impact.'
        ],
        bulletPoints: [
            'UX audit + recommendations',
            'High-fidelity mockups',
            'Front-end implementation',
            'Accessibility + WCAG fixes',
            'Performance optimization',
            'Launch support + QA'
        ],
        includes: [
            { label: 'Pages Updated', value: 'Up to 6' },
            { label: 'Design System', value: 'Component library' },
            { label: 'Revisions', value: '3 Rounds' },
            { label: 'Delivery Time', value: '8 Days' }
        ],
        sellerSlug: 'michael-chen',
        sellerName: 'Michael Chen',
        sellerTitle: 'Senior UI/UX Designer',
        sellerImage: 'assets/images/imgMichaelChen.jfif',
        sellerRating: 4.8,
        reviewsList: [
            { name: 'Laura B.', time: '3 weeks ago', rating: 5, text: 'Traffic is up and bounce rate is down 22%. Beautiful redesign.' }
        ]
    },
    'logo-design-package': {
        title: 'Logo Design Package',
        slug: 'logo-design-package',
        category: 'design',
        shortDescription: 'Three unique logo concepts with unlimited revisions and brand guide.',
        image: 'assets/images/imgLogoDesignPackage.jfif',
        heroImage: 'assets/images/imgLogoDesignPackage.jfif',
        price: 99,
        priceNote: 'Flat rate',
        rating: 4.8,
        reviews: 189,
        badge: 'popular',
        description: [
            'Craft a memorable logo that scales across digital and print touchpoints. Deliverables include vector files, typography recommendations, and usage guidelines.'
        ],
        bulletPoints: [
            'Brand questionnaire + mood board',
            '3 initial concepts',
            'Unlimited revisions on chosen direction',
            'Primary, secondary, and icon marks',
            'Color palette + typography pairing',
            'Final files (AI, EPS, SVG, PNG, PDF)'
        ],
        includes: [
            { label: 'Concepts', value: '3 initial directions' },
            { label: 'Revision Policy', value: 'Unlimited' },
            { label: 'Brand Guide', value: 'Included (6 pages)' },
            { label: 'Delivery Time', value: '5 Days' }
        ],
        sellerSlug: 'lisa-anderson',
        sellerName: 'Lisa Anderson',
        sellerTitle: 'Brand & Visual Designer',
        sellerImage: 'assets/images/imgLisaAnderson.jfif',
        sellerRating: 4.8,
        reviewsList: [
            { name: 'Marcus Lee', time: '2 weeks ago', rating: 5, text: 'Our new logo nails the brief. Lisa iterated quickly and provided super organized files.' }
        ]
    },
    'brand-identity-package': {
        title: 'Brand Identity Package',
        slug: 'brand-identity-package',
        category: 'design',
        shortDescription: 'Complete visual identity with logos, colors, type, and usage guidelines.',
        image: 'assets/images/imgBrandIdentityPackage.jfif',
        heroImage: 'assets/images/imgBrandIdentityPackage.jfif',
        price: 450,
        priceNote: 'Project-based',
        rating: 4.9,
        reviews: 178,
        badge: 'popular',
        description: [
            'Elevate your brand with a cohesive visual system covering logos, typography, colors, imagery, and applications.',
            'Perfect for startups preparing for launch or mature brands ready for a refresh.'
        ],
        bulletPoints: [
            'Logo suite (primary, secondary, submark)',
            'Brand color system + usage ratios',
            'Typography pairings + hierarchy',
            'Iconography + imagery direction',
            'Business card + social templates',
            'Comprehensive PDF guidelines'
        ],
        includes: [
            { label: 'Deliverables', value: '40+ page brand book' },
            { label: 'Revisions', value: 'Unlimited within scope' },
            { label: 'Delivery Time', value: '12 Days' }
        ],
        sellerSlug: 'lisa-anderson',
        sellerName: 'Lisa Anderson',
        sellerTitle: 'Brand & Visual Designer',
        sellerImage: 'assets/images/imgLisaAnderson.jfif',
        sellerRating: 4.8,
        reviewsList: [
            { name: 'Sophie Patel', time: '1 month ago', rating: 5, text: 'Investing in the full brand system paid off instantly. Every deliverable was gorgeous.' }
        ]
    },
    'ui-ux-design': {
        title: 'Product UI/UX Design',
        slug: 'ui-ux-design',
        category: 'design',
        shortDescription: 'Complete UX flows, wireframes, and polished UI mockups for web or mobile.',
        image: 'assets/images/imgUI-UXDesign.jfif',
        heroImage: 'assets/images/imgUI-UXDesign.jfif',
        price: 800,
        priceNote: 'Per project sprint',
        rating: 4.8,
        reviews: 145,
        badge: 'popular',
        description: [
            'Turn product requirements into intuitive user journeys and beautiful interfaces. Includes research synthesis, UI kits, and developer-ready assets.'
        ],
        bulletPoints: [
            'User flow diagrams + sitemap',
            'Low/high fidelity wireframes',
            'Component-based UI library',
            'Clickable Figma prototype',
            'Design QA support',
            'Hand-off documentation'
        ],
        includes: [
            { label: 'Platforms', value: 'Web + Mobile' },
            { label: 'Tools', value: 'Figma, FigJam' },
            { label: 'Revisions', value: 'Unlimited within sprint' },
            { label: 'Delivery Time', value: '2 Weeks' }
        ],
        sellerSlug: 'michael-chen',
        sellerName: 'Michael Chen',
        sellerTitle: 'Senior UI/UX Designer',
        sellerImage: 'assets/images/imgMichaelChen.jfif',
        sellerRating: 4.8,
        reviewsList: [
            { name: 'Kylie Brooks', time: '3 weeks ago', rating: 5, text: 'Stakeholders loved the prototype. Handoff to engineering was seamless.' }
        ]
    },
    'video-editing': {
        title: 'Video Editing & Post Production',
        slug: 'video-editing',
        category: 'video-editing',
        shortDescription: 'Professional edits up to 5 minutes with motion graphics, color, and sound.',
        image: 'assets/images/imgVideoEditing.jfif',
        heroImage: 'assets/images/imgVideoEditing.jfif',
        price: 150,
        priceNote: 'Per video',
        rating: 4.9,
        reviews: 267,
        badge: 'popular',
        description: [
            'Transform your raw footage into polished stories optimized for YouTube, ads, or internal communications.'
        ],
        bulletPoints: [
            'Color correction + grading',
            'Licensed music + SFX',
            'Motion graphics & titles',
            'Subtitles + captions',
            '2 rounds of revisions',
            'Final files in 4K + social cuts'
        ],
        includes: [
            { label: 'Video Length', value: 'Up to 5 minutes' },
            { label: 'Revisions', value: '2 Rounds' },
            { label: 'Delivery Time', value: '4 Days' }
        ],
        sellerSlug: 'jessica-martinez',
        sellerName: 'Jessica Martinez',
        sellerTitle: 'Senior Video Editor',
        sellerImage: 'assets/images/imgJessicaMartinez.jfif',
        sellerRating: 4.8,
        reviewsList: [
            { name: 'Daniel R.', time: '2 weeks ago', rating: 5, text: 'Edits were cinematic and ready for paid campaigns out of the gate.' }
        ]
    },
    'social-media-management': {
        title: 'Social Media Management',
        slug: 'social-media-management',
        category: 'marketing',
        shortDescription: 'Monthly content calendar, creative, and community management for 3 platforms.',
        image: 'assets/images/imgSocialMediaManagementServices.jfif',
        heroImage: 'assets/images/imgSocialMediaManagementServices.jfif',
        price: 299,
        priceNote: 'Per month',
        rating: 4.8,
        reviews: 98,
        badge: 'popular',
        description: [
            'Build a consistent presence across Instagram, LinkedIn, and TikTok with strategic content, scheduled posts, and analytics reporting.'
        ],
        bulletPoints: [
            'Content strategy workshop',
            '12-15 posts per month',
            'Copywriting + hashtags',
            'Community management',
            'Monthly analytics deck',
            'Ad hoc campaign support'
        ],
        includes: [
            { label: 'Platforms', value: 'Up to 3' },
            { label: 'Content', value: '12-15 posts/mo' },
            { label: 'Revisions', value: 'Unlimited' },
            { label: 'Delivery Time', value: 'Ongoing retainer' }
        ],
        sellerSlug: 'david-kim',
        sellerName: 'David Kim',
        sellerTitle: 'Digital Marketing Strategist',
        sellerImage: 'assets/images/imgDavidKim.jfif',
        sellerRating: 4.7,
        reviewsList: [
            { name: 'Hannah S.', time: '1 month ago', rating: 5, text: 'Follower growth and engagement jumped dramatically after David revamped our content.' }
        ]
    },
    'seo-content-writing': {
        title: 'SEO Content Writing',
        slug: 'seo-content-writing',
        category: 'writing',
        shortDescription: '1,000-word articles optimized for search intent and conversions.',
        image: 'assets/images/imgSEOOptimization.jfif',
        heroImage: 'assets/images/imgSEOOptimization.jfif',
        price: 75,
        priceNote: 'Per article',
        rating: 4.9,
        reviews: 156,
        badge: 'popular',
        description: [
            'Well-researched blog posts and guides that balance readability with data-driven SEO strategy.'
        ],
        bulletPoints: [
            'Keyword + SERP analysis',
            'Outline + meta data creation',
            'Internal/external linking strategy',
            'Royalty-free imagery suggestions',
            '2 revision rounds',
            'Delivery as Google Doc + HTML'
        ],
        includes: [
            { label: 'Word Count', value: '1,000 words' },
            { label: 'Research', value: 'Included' },
            { label: 'Revisions', value: '2 Rounds' },
            { label: 'Delivery Time', value: '3 Days' }
        ],
        sellerSlug: 'emily-rodriguez',
        sellerName: 'Emily Rodriguez',
        sellerTitle: 'Senior Content Strategist',
        sellerImage: 'assets/images/imgEmilyRodriguez.jfif',
        sellerRating: 4.9,
        reviewsList: [
            { name: 'Olivia Park', time: '2 weeks ago', rating: 5, text: 'Content ranks and converts. Emily captured our tone perfectly.' }
        ]
    }
};

const freelancerDetailsData = {
    'sarah-johnson': {
        name: 'Sarah Johnson',
        title: 'Full-Stack Web Developer',
        avatar: 'assets/images/imgSarahJohnson.jfif',
        rating: 4.9,
        reviewCount: 127,
        hourlyRate: 75,
        badges: ['Top Rated', 'Available Now'],
        about: [
            'I specialize in React, Node.js, and TypeScript, helping startups and agencies build performant products that scale.',
            'Clean architecture, maintainable code, and thoughtful DX are at the core of every project I deliver.'
        ],
        skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB', 'AWS', 'Jest'],
        stats: {
            projects: '127',
            satisfaction: '98%',
            experience: '5 Years',
            response: '24hr'
        },
        portfolioImages: [
            'assets/images/imgCustomWebsiteDevelopment.jfif',
            'assets/images/imgE-commerceWebsite.png',
            'assets/images/imgReactWebApplication.jfif',
            'assets/images/imgWebsiteRedesign.jfif'
        ],
        education: [
            { title: 'B.S. Computer Science', meta: 'University of Washington · 2015-2019' },
            { title: 'AWS Certified Developer', meta: 'Amazon Web Services · 2021' },
            { title: 'React Advanced Certification', meta: 'Meta · 2022' }
        ],
        reviews: [
            { name: 'John Smith', time: '2 weeks ago', rating: 5, text: 'Sarah delivered exactly what we needed and was incredibly proactive with suggestions.' },
            { name: 'Emily Davis', time: '1 month ago', rating: 5, text: 'Top-tier engineering partner. Communication and output were flawless.' },
            { name: 'Michael Brown', time: '2 months ago', rating: 5, text: 'Great collaboration experience. Code quality impressed our internal team.' }
        ]
    },
    'michael-chen': {
        name: 'Michael Chen',
        title: 'Senior UI/UX Designer',
        avatar: 'assets/images/imgMichaelChen.jfif',
        rating: 4.8,
        reviewCount: 98,
        hourlyRate: 65,
        badges: ['Top Rated'],
        about: [
            'I craft inclusive, data-informed digital experiences for SaaS, fintech, and eCommerce brands.',
            'Every deliverable includes developer-ready assets, interaction specs, and design system components.'
        ],
        skills: ['Figma', 'FigJam', 'Adobe XD', 'Design Systems', 'Prototyping', 'User Research'],
        stats: {
            projects: '110',
            satisfaction: '97%',
            experience: '7 Years',
            response: '12hr'
        },
        portfolioImages: [
            'assets/images/imgUI-UXDesign.jfif',
            'assets/images/imgBrandIdentityPackage.jfif',
            'assets/images/imgCustomWebsiteDevelopment.jfif',
            'assets/images/imgReactWebApplication.jfif'
        ],
        education: [
            { title: 'B.A. Visual Communication', meta: 'Parsons School of Design · 2012-2016' },
            { title: 'Google UX Certificate', meta: 'Google · 2020' }
        ],
        reviews: [
            { name: 'Laura Chen', time: '3 weeks ago', rating: 5, text: 'Michael elevated our product experience and documented everything meticulously.' }
        ]
    },
    'emily-rodriguez': {
        name: 'Emily Rodriguez',
        title: 'Senior Content Strategist',
        avatar: 'assets/images/imgEmilyRodriguez.jfif',
        rating: 4.9,
        reviewCount: 156,
        hourlyRate: 45,
        badges: ['Available Now'],
        about: [
            'I write SEO-driven content that reads naturally and nurtures readers through the funnel.',
            'My deliverables include briefs, outlines, internal linking plans, and optimization checklists.'
        ],
        skills: ['SEO Strategy', 'Copywriting', 'Content Briefs', 'SurferSEO', 'MarketMuse'],
        stats: {
            projects: '210',
            satisfaction: '99%',
            experience: '6 Years',
            response: '6hr'
        },
        portfolioImages: [
            'assets/images/imgSEOOptimization.jfif',
            'assets/images/imgBrandIdentityPackage.jfif',
            'assets/images/imgLogoDesignPackage.jfif',
            'assets/images/imgCustomWebsiteDevelopment.jfif'
        ],
        education: [
            { title: 'B.A. Journalism', meta: 'NYU · 2012-2016' }
        ],
        reviews: [
            { name: 'James Miller', time: '2 weeks ago', rating: 5, text: 'Traffic uplifted within a month. Emily’s briefs made approvals simple.' }
        ]
    },
    'david-kim': {
        name: 'David Kim',
        title: 'Digital Marketing Strategist',
        avatar: 'assets/images/imgDavidKim.jfif',
        rating: 4.7,
        reviewCount: 203,
        hourlyRate: 55,
        badges: ['Top Rated'],
        about: [
            'I partner with scaling eCommerce brands to run full-funnel paid and organic campaigns.',
            'Expect detailed performance reporting, creative direction, and constant experimentation.'
        ],
        skills: ['SEO', 'Paid Media', 'Analytics', 'Content Strategy', 'Marketing Automation'],
        stats: {
            projects: '160',
            satisfaction: '96%',
            experience: '8 Years',
            response: '8hr'
        },
        portfolioImages: [
            'assets/images/imgSocialMediaManagementServices.jfif',
            'assets/images/imgSEOOptimization.jfif',
            'assets/images/imgBrandIdentityPackage.jfif',
            'assets/images/imgVideoEditing.jfif'
        ],
        education: [
            { title: 'MBA, Marketing', meta: 'UCLA Anderson · 2013-2015' }
        ],
        reviews: [
            { name: 'Amelia P.', time: '1 month ago', rating: 4.8, text: 'ROAS improved significantly. David is strategic and proactive.' }
        ]
    },
    'jessica-martinez': {
        name: 'Jessica Martinez',
        title: 'Senior Video Editor',
        avatar: 'assets/images/imgJessicaMartinez.jfif',
        rating: 4.8,
        reviewCount: 89,
        hourlyRate: 60,
        badges: ['Top Rated'],
        about: [
            'I create cinematic edits, motion graphics, and explainers for funded startups and agencies.',
            'Fast turnarounds with pristine audio, eye-catching titles, and exports tailored to every platform.'
        ],
        skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics'],
        stats: {
            projects: '140',
            satisfaction: '98%',
            experience: '6 Years',
            response: '10hr'
        },
        portfolioImages: [
            'assets/images/imgVideoEditing.jfif',
            'assets/images/imgFMP1.jfif',
            'assets/images/imgFMP2.jfif',
            'assets/images/imgBrandIdentityPackage.jfif'
        ],
        education: [
            { title: 'B.A. Film & Media', meta: 'USC · 2010-2014' }
        ],
        reviews: [
            { name: 'Riley G.', time: '2 weeks ago', rating: 5, text: 'Our promo video looks incredible. Jessica nailed the pacing and transitions.' }
        ]
    },
    'robert-taylor': {
        name: 'Robert Taylor',
        title: 'Mobile App Developer',
        avatar: 'assets/images/imgRobertTaylor.jfif',
        rating: 4.9,
        reviewCount: 112,
        hourlyRate: 85,
        badges: ['Top Rated'],
        about: [
            'Cross-platform engineer specializing in React Native and Flutter. I ship production-ready apps complete with CI/CD and analytics.',
            'Happy to collaborate with designers and backend teams or own the entire mobile stack.'
        ],
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store Deployment'],
        stats: {
            projects: '90',
            satisfaction: '97%',
            experience: '7 Years',
            response: '12hr'
        },
        portfolioImages: [
            'assets/images/imgReactWebApplication.jfif',
            'assets/images/imgE-commerceWebsite.png',
            'assets/images/imgAPIDevelopment.jfif',
            'assets/images/imgWebsiteRedesign.jfif'
        ],
        education: [
            { title: 'B.S. Software Engineering', meta: 'Georgia Tech · 2011-2015' }
        ],
        reviews: [
            { name: 'Ethan D.', time: '1 month ago', rating: 5, text: 'App shipped on time with zero bugs. Robert is incredibly reliable.' }
        ]
    },
    'lisa-anderson': {
        name: 'Lisa Anderson',
        title: 'Brand & Visual Designer',
        avatar: 'assets/images/imgLisaAnderson.jfif',
        rating: 4.8,
        reviewCount: 145,
        hourlyRate: 50,
        badges: ['Available Now'],
        about: [
            'I build personality-packed identities and marketing collateral that feel cohesive across channels.',
            'Expect collaborative workshops, thoughtful exploration, and production-ready assets.'
        ],
        skills: ['Illustrator', 'Photoshop', 'InDesign', 'Brand Strategy', 'Packaging'],
        stats: {
            projects: '180',
            satisfaction: '98%',
            experience: '9 Years',
            response: '6hr'
        ],
        portfolioImages: [
            'assets/images/imgBrandIdentityPackage.jfif',
            'assets/images/imgLogoDesignPackage.jfif',
            'assets/images/imgUI-UXDesign.jfif',
            'assets/images/imgFMP1.jfif'
        ],
        education: [
            { title: 'B.F.A. Graphic Design', meta: 'Rhode Island School of Design · 2008-2012' }
        ],
        reviews: [
            { name: 'Nina Lopez', time: '3 weeks ago', rating: 5, text: 'Lisa nailed our new visual identity and provided impeccable files for printers.' }
        ]
    },
    'james-wilson': {
        name: 'James Wilson',
        title: 'Data Analyst & BI Developer',
        avatar: 'assets/images/imgJamesWilson.jfif',
        rating: 4.7,
        reviewCount: 78,
        hourlyRate: 70,
        badges: ['Top Rated'],
        about: [
            'I transform messy datasets into dashboards and forecasts that drive confident decisions.',
            'Specialized in SQL, Python, Tableau, and Looker. Comfortable with finance, ops, and product analytics.'
        ],
        skills: ['Python', 'SQL', 'Tableau', 'Looker', 'Power BI', 'dbt'],
        stats: {
            projects: '120',
            satisfaction: '95%',
            experience: '6 Years',
            response: '18hr'
        ],
        portfolioImages: [
            'assets/images/imgFMP2.jfif',
            'assets/images/imgAPIDevelopment.jfif',
            'assets/images/imgSEOOptimization.jfif',
            'assets/images/imgWebsiteRedesign.jfif'
        ],
        education: [
            { title: 'B.S. Economics', meta: 'University of Michigan · 2010-2014' }
        ],
        reviews: [
            { name: 'Caleb W.', time: '1 month ago', rating: 4.8, text: 'James streamlined our reporting stack and automated weekly KPI emails.' }
        ]
    }
};

function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
}

function createBadge(text) {
    const span = document.createElement('span');
    span.className = text.toLowerCase().includes('top') ? 'badge badge-success' : 'badge badge-primary';
    span.textContent = text;
    return span;
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'card filter-item';
    card.dataset.category = service.badge === 'new' ? 'new' : 'popular';
    card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="card-img">
        <h4 class="card-title">${service.title}</h4>
        <div class="rating mb-2">
            <span class="stars">★★★★★</span>
            <span>${service.rating.toFixed(1)} (${service.reviews})</span>
        </div>
        <p class="card-body">${service.shortDescription}</p>
        <div class="card-footer">
            <span class="price">$${service.price.toLocaleString()}</span>
            <a href="service-details.html?service=${service.slug}" class="btn btn-sm btn-primary">View Details</a>
        </div>
    `;
    return card;
}

function populateCategoryDetails() {
    if (document.body.dataset.page !== 'category-details') return;
    const slug = getQueryParam('category') || 'web-development';
    const data = categoryDetailsData[slug] || categoryDetailsData['web-development'];
    document.title = `${data.title} - Category Details | FreelanceHub`;
    document.getElementById('category-breadcrumb').textContent = data.title;
    document.getElementById('category-icon').textContent = data.icon;
    document.getElementById('category-title').textContent = data.title;
    document.getElementById('category-count').textContent = data.servicesCount;

    const descriptionContainer = document.getElementById('category-description');
    descriptionContainer.innerHTML = '';
    data.description.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        descriptionContainer.appendChild(p);
    });

    const subcategoriesContainer = document.getElementById('category-subcategories');
    subcategoriesContainer.innerHTML = '';
    data.subcategories.forEach(sub => {
        const badge = document.createElement('span');
        badge.className = 'badge badge-primary';
        badge.textContent = sub;
        subcategoriesContainer.appendChild(badge);
    });

    const servicesGrid = document.getElementById('category-services-grid');
    servicesGrid.innerHTML = '';
    data.serviceSlugs.forEach(serviceSlug => {
        const service = serviceDetailsData[serviceSlug];
        if (!service) return;
        servicesGrid.appendChild(createServiceCard(service));
    });
}

function populateServiceDetails() {
    if (document.body.dataset.page !== 'service-details') return;
    const slug = getQueryParam('service') || 'custom-website-development';
    const data = serviceDetailsData[slug] || serviceDetailsData['custom-website-development'];
    document.title = `${data.title} - Service Details | FreelanceHub`;
    document.getElementById('service-breadcrumb').textContent = data.title;
    document.getElementById('service-hero-image').src = data.heroImage;
    document.getElementById('service-title').textContent = data.title;
    document.getElementById('service-rating').innerHTML = `<span class="stars">★★★★★</span><span>${data.rating.toFixed(1)} (${data.reviews} reviews)</span>`;
    document.getElementById('service-price').textContent = `$${data.price.toLocaleString()}`;
    document.getElementById('service-price-note').textContent = data.priceNote;
    document.getElementById('service-order-link').href = `checkout.html?service=${slug}`;

    const descriptionContainer = document.getElementById('service-description');
    descriptionContainer.innerHTML = '';
    data.description.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        descriptionContainer.appendChild(p);
    });
    const bulletList = document.createElement('ul');
    bulletList.style.margin = '1rem 0';
    bulletList.style.paddingLeft = '1.5rem';
    bulletList.style.color = 'var(--text-gray)';
    data.bulletPoints.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        bulletList.appendChild(li);
    });
    descriptionContainer.appendChild(bulletList);

    const includesContainer = document.getElementById('service-includes');
    includesContainer.innerHTML = '';
    data.includes.forEach(item => {
        const row = document.createElement('div');
        row.className = 'flex flex-between';
        row.style.padding = '0.75rem 0';
        row.style.borderBottom = '1px solid var(--border-color)';
        row.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
        includesContainer.appendChild(row);
    });

    document.getElementById('service-seller-image').src = data.sellerImage;
    document.getElementById('service-seller-name').textContent = data.sellerName;
    document.getElementById('service-seller-title').textContent = data.sellerTitle;
    document.getElementById('service-seller-rating').innerHTML = `<span class="stars">★★★★★</span><span>${data.sellerRating.toFixed(1)}</span>`;
    document.getElementById('service-seller-link').href = `freelancer-profile.html?freelancer=${data.sellerSlug}`;

    const reviewsContainer = document.getElementById('service-reviews');
    reviewsContainer.innerHTML = '';
    data.reviewsList.forEach(review => {
        const wrapper = document.createElement('div');
        wrapper.style.padding = '1.5rem 0';
        wrapper.style.borderBottom = '1px solid var(--border-color)';
        wrapper.innerHTML = `
            <div class="flex flex-between mb-2">
                <div>
                    <strong>${review.name}</strong>
                    <div class="rating" style="font-size: 0.875rem;">
                        <span class="stars">★★★★★</span>
                    </div>
                </div>
                <span style="color: var(--text-gray); font-size: 0.875rem;">${review.time}</span>
            </div>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(wrapper);
    });
    document.getElementById('service-review-count').textContent = `Reviews (${data.reviews})`;
}

function populateFreelancerProfile() {
    if (document.body.dataset.page !== 'freelancer-profile') return;
    const slug = getQueryParam('freelancer') || 'sarah-johnson';
    const data = freelancerDetailsData[slug] || freelancerDetailsData['sarah-johnson'];
    document.title = `${data.name} - Freelancer Profile | FreelanceHub`;
    document.getElementById('freelancer-breadcrumb').textContent = data.name;
    document.getElementById('freelancer-avatar').src = data.avatar;
    document.getElementById('freelancer-name').textContent = data.name;
    document.getElementById('freelancer-title').textContent = data.title;
    document.getElementById('freelancer-rating').innerHTML = `<span class="stars">★★★★★</span><span>${data.rating.toFixed(1)} (${data.reviewCount} reviews)</span>`;
    document.getElementById('freelancer-rate').innerHTML = `$${data.hourlyRate}<small class="price-small">/hour</small>`;

    const badgesContainer = document.getElementById('freelancer-badges');
    badgesContainer.innerHTML = '';
    data.badges.forEach(badge => badgesContainer.appendChild(createBadge(badge)));

    const aboutContainer = document.getElementById('freelancer-about');
    aboutContainer.innerHTML = '';
    data.about.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        aboutContainer.appendChild(p);
    });

    const skillsContainer = document.getElementById('freelancer-skills');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'badge badge-primary';
        badge.style.fontSize = '1rem';
        badge.style.padding = '0.5rem 1rem';
        badge.textContent = skill;
        skillsContainer.appendChild(badge);
    });

    const portfolioContainer = document.getElementById('freelancer-portfolio');
    portfolioContainer.innerHTML = '';
    data.portfolioImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${data.name} portfolio`;
        img.style.width = '100%';
        img.style.borderRadius = 'var(--radius-md)';
        img.style.cursor = 'pointer';
        portfolioContainer.appendChild(img);
    });

    const statsContainer = document.getElementById('freelancer-stats');
    statsContainer.innerHTML = '';
    const statsList = [
        { label: 'Completed Projects', value: data.stats.projects },
        { label: 'Client Satisfaction', value: data.stats.satisfaction },
        { label: 'Experience', value: data.stats.experience },
        { label: 'Avg. Response Time', value: data.stats.response }
    ];
    statsList.forEach(stat => {
        const statBlock = document.createElement('div');
        statBlock.style.textAlign = 'center';
        statBlock.style.padding = '1rem';
        statBlock.innerHTML = `
            <div class="stat-value" style="font-size: 2.5rem;">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        statsContainer.appendChild(statBlock);
    });

    const educationContainer = document.getElementById('freelancer-education');
    educationContainer.innerHTML = '';
    data.education.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.style.padding = '1rem 0';
        wrapper.style.borderBottom = '1px solid var(--border-color)';
        wrapper.innerHTML = `<h4>${item.title}</h4><p style="color: var(--text-gray);">${item.meta}</p>`;
        educationContainer.appendChild(wrapper);
    });

    const reviewsContainer = document.getElementById('freelancer-reviews');
    reviewsContainer.innerHTML = '';
    data.reviews.forEach(review => {
        const wrapper = document.createElement('div');
        wrapper.style.padding = '1.5rem 0';
        wrapper.style.borderBottom = '1px solid var(--border-color)';
        wrapper.innerHTML = `
            <div class="flex flex-between mb-2">
                <div>
                    <strong>${review.name}</strong>
                    <div class="rating" style="font-size: 0.875rem;">
                        <span class="stars">★★★★★</span>
                    </div>
                </div>
                <span style="color: var(--text-gray); font-size: 0.875rem;">${review.time}</span>
            </div>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(wrapper);
    });
    document.getElementById('freelancer-review-count').textContent = `Reviews (${data.reviewCount})`;
}

document.addEventListener('DOMContentLoaded', () => {
    populateCategoryDetails();
    populateServiceDetails();
    populateFreelancerProfile();
});

