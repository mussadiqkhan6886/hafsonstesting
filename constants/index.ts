export const menu = [
    {title: "Sales", link: "/sales"},
    {title: "Projects", link: "/our-projects"},
    {title: "Lettings", link: "/lettings"},
    {title: "Insight", link: "/insights"},
    {title: "Team", link: "/team"},
    {title: "Fees", link: "/fees"},
    {title: "Contact", link: "/contact"},
]

export const services = [
  {
    title: "Buying",
    link: "/sales",
    image: "/services (1).jpg",
    description: "Find and purchase your dream property with expert guidance."
  },
  {
    title: "Letting or Renting",
    link: "/lettings",
    image: "/services (2).jpg",
    description: "Explore rental options or let out your property hassle-free."
  },
  {
    title: "Selling",
    link: "/contact",
    image: "/services (3).jpg",
    description: "Get the best value and exposure when selling your property."
  },
  {
    title: "Value my home",
    link: "/contact",
    image: "/services (3).jpg",
    description: "Request a free, accurate property valuation today."
  },
];



export const achivement = [
    {number : "1500", title: "Premium Property"},
    {number : "4000+", title: "Happy Customers"},
    {number : "100+", title: "Award Winning"},
    {number : "50", title: "Years Experience"},
]

export const test = [
  {
    name: "Sarah Ahmed",
    message:
      "Working with this team was a smooth and stress-free experience. They guided me through the buying process and found the perfect home for my family.",
  },
  {
    name: "James Turner",
    message:
      "I rented my property through them and was impressed by the professionalism and speed. Highly recommended for landlords!",
  },
  {
    name: "Ayesha Khan",
    message:
      "Their valuation service was spot on. I felt confident selling my house at the right price thanks to their expert advice.",
  },
  {
    name: "Michael Brown",
    message:
      "Excellent communication and support throughout the process. They truly care about customer satisfaction and it shows.",
  },
  {
    name: "Fatima Malik",
    message:
      "The team made my first-time home buying journey so easy. They answered all my questions and were very supportive.",
  },
];


export const properties = [
  // -------- BUYING (10) --------
  {
    id: 20,
    featured: true,
    address: "Théoule-sur-Mer",
    price: 29000000,
    description: "Stunning estate with 360° French Riviera sea views, rare elevated position.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "buying",
    size: "1000 m² (24000 m² land)"
  },
  {
    id: 17,
    featured: false,
    address: "Cap d'Antibes",
    price: 17000000,
    description: "Charming Provençal farmhouse renovated into a luxury villa.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "buying",
    size: "600 m² (5200 m² land)"
  },
  {
    id: 14,
    featured: true,
    address: "Mougins",
    price: 11900000,
    description: "Family villa with 6 ensuite bedrooms, private Domaine setting.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "buying",
    size: "427 m² (10491 m² land)"
  },
  {
    id: 13,
    featured: false,
    address: "Théoule-sur-Mer",
    price: 11850000,
    description: "Unique seafront property with direct private sea access.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "buying",
    size: "417 m²"
  },
  {
    id: 12,
    featured: false,
    address: "Mougins – Panoramic Views",
    price: 0, // POA
    description: "Contemporary villa with panoramic sea & mountain views.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "buying",
    size: "570 m² (7000 m² land)"
  },
  {
    id: 11,
    featured: false,
    address: "Cannes Hillside",
    price: 8600000,
    description: "Modern hillside villa overlooking Cannes, private pool & gardens.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "buying",
    size: "350 m² (5000 m² land)"
  },

  // -------- LETTING (10) --------
  {
    id: 8,
    featured: true,
    address: "Birmingham Luxury Penthouse",
    price: 4500,
    description: "Exclusive penthouse with private rooftop terrace and city views.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "letting",
    size: "140 m²"
  },
  {
    id: 5,
    featured: false,
    address: "Liverpool Marina Apartment",
    price: 2500,
    description: "Waterfront apartment with marina views and private balcony.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "letting",
    size: "100 m²"
  },
  {
    id: 4,
    featured: true,
    address: "Oxford Cottage",
    price: 3200,
    description: "Quaint 3-bedroom cottage in historic Oxfordshire countryside.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "letting",
    size: "110 m²"
  },
  {
    id: 3,
    featured: false,
    address: "Bristol Modern Duplex",
    price: 2700,
    description: "Contemporary duplex with open-plan living and river views.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "letting",
    size: "125 m²"
  },
  {
    id: 2,
    featured: false,
    address: "Nottingham Family House",
    price: 1800,
    description: "4-bedroom family home with large garden and parking.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "letting",
    size: "150 m²"
  },
  {
    id: 1,
    featured: true,
    address: "Newcastle Executive Flat",
    price: 2900,
    description: "Executive 2-bedroom apartment with premium amenities.",
    images: ["/prop.jpg", "/prop.jpg"],
    type: "letting",
    size: "105 m²"
  }
];


export const projects = [
  {
    title: "Garratt Lane Development",
    description:
      "A modern residential development offering premium apartments with easy access to local amenities and transport links.",
    price: 100000,
    size: "850 sq ft",
    images: ["/project.jpeg", "/project.jpeg"],
    slug: "garratt-lane-development",
    location: "Garratt Lane, Earlsfield",
  },
  {
    title: "Green Lane",
    description:
      "A sustainable housing project designed with eco-friendly materials and contemporary architecture.",
    price: 12300,
    size: "720 sq ft",
    images: ["/project.jpeg", "/project.jpeg"],
    slug: "green-lane",
    location: "Green Lane, London",
  },
  {
    title: "Streatham High Road",
    description:
      "A high-quality mixed-use development featuring both commercial spaces and modern living apartments.",
    price: 12300,
    size: "900 sq ft",
    images: ["/project.jpeg", "/project.jpeg"],
    slug: "streatham-high-road",
    location: "Streatham High Road, London",
  },
  {
    title: "London Road",
    description:
      "Elegant apartments located in the heart of London Road with convenient access to transport and retail hubs.",
    price: 12300,
    size: "780 sq ft",
    images: ["/project.jpeg", "/project.jpeg"],
    slug: "london-road",
    location: "London Road, London",
  },
];



export const team = [
  {name: "Amaan", image: "/imageTeam1.jpeg", role: "Estate Director"},
  {name: "Asim", image: "/imageTeam2.jpeg", role: "Property Development Director"},
  {name: "Aamer", image: "/imageTeam3.jpeg", role: "Finance Director"},
  {name: "Maz", image: "/imageTeam4.jpeg", role: "Property Management Director"},
]

export const fees = [
  {
    heading: "Let Only Service",
    subheading: "Fee: 8% of the total annual rent",
    include: "Includes",
    points: [
      "Rental valuation and marketing of the property",
      "Conducting viewings and tenant referencing",
      "Drafting tenancy agreement",
      "Collecting initial rent and deposit",
      "Registering the deposit with a government-approved scheme"
    ]
  },
  {
    heading: "Rent Collection Service",
    subheading: "Fee: 10% of the monthly rent",
    include: "Includes all Let Only services, plus:",
    points: [
      "Monthly rent collection",
      "Monthly statements",
      "Chasing late payments",
      "Advising on rent arrears and next steps"
    ]
  },
  {
    heading: "Full Management Service",
    subheading: "Fee: 12% of the monthly rent",
    include: "Includes all Let Only and Rent Collection services, plus:",
    points: [
      "Property inspections every 3–6 months with written reports",
      "Handling repairs and maintenance",
      "Managing tenant queries",
      "Serving legal notices (e.g., Section 21 or 8)",
      "End-of-tenancy check-out and deposit return process"
    ]
  }
];

export const insights = [
  {
    title: "Best Questions to Ask When Viewing a Property",
    image: "/insightImage.jpg",
    date: "10 Mar 2024",
    category: "Buying Guide",
    description: `
      Choosing the right home for your family is exciting, but it can be a lot of work. Buying a house is no easy game; it is daunting even if you are not a first-time buyer. 
      Even with a great and experienced real estate agent, locating and reviewing homes takes time and energy. As buying a home is typically the single most expensive purchase 
      you will ever make, we recommend you be careful and extra conscious. For the same reason, we advise you to prepare a list of possible questions that you may ask when 
      looking for a property. These questions will help you understand more about the property in detail and will equip you to make informed decisions.

      • What is the area like?  
      • How old is the roof?  
      • How old is the heating and cooling system?  
      • Are there any easements?  
      • For how long have owners lived there?  
      • Has major renovation been done recently?  
      • What is the water pressure like?  
      • What is included in the sale?  
      • Leasehold or freehold check  

      With this, we conclude a list of possible questions you may ask before viewing a property. Getting answers in advance can help you with the homebuying process.
      At Hafsons, we can help you find the best property and related services as per your requirements.
    `,
    linkText: "Read More",
    slug: "best-questions-to-ask-when-viewing-a-property"
  },
  {
    title: "Housing Benefits Expected to Lag Behind Rising Rents by 14% in 2025",
    date: "04 Jan 2024",
    image: "/insightImage.jpg",
    category: "Market Insights",
    description: `
      A new forecast shows that housing benefits are expected to lag behind rising rents by around 14% in 2025. 
      This widening gap could make it harder for low-income households to secure affordable accommodation and may put additional 
      pressure on both landlords and tenants. Policymakers and property managers will need to pay attention to this trend as it 
      directly impacts affordability in the rental market.
    `,
    linkText: "Read More",
    slug: "housing-benefits-rising-rents-2025"
  },
  {
    title: "Property Management & Tax Benefits",
    image: "/insightImage.jpg",
    date: "11 Dec 2023",
    category: "Property Management",
    description: `
      Property management is more than just handling tenant issues—it can also bring tax benefits. 
      From expense deductions to depreciation and capital gains planning, landlords who manage their properties effectively 
      (or hire professional management services) can maximize returns while minimizing liabilities. 
      Knowing these tax advantages is crucial for long-term profitability.
    `,
    linkText: "Read More",
    slug: "property-management-tax-benefits"
  },
  {
    title: "Renting out furnished or unfurnished: What works best?",
    image: "/insightImage.jpg",
    date: "21 Nov 2023",
    category: "Renting Out",
    description: `
      Deciding whether to rent out a property furnished or unfurnished can affect tenant demand and rental income. 
      Furnished properties often attract short-term tenants and can yield higher rents, while unfurnished homes 
      usually appeal to long-term tenants who want to personalize the space. Landlords should weigh flexibility, 
      tenant type, and ongoing maintenance costs before making the decision.
    `,
    linkText: "Read More",
    slug: "renting-furnished-vs-unfurnished"
  },
];
