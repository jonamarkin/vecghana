export interface OutreachPillar {
  title: string;
  description: string;
}

export interface ImpactContent {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  flagship: {
    badge: string;
    title: string;
    description: string;
    partnerPrimary: string;
    partnerSecondary: string;
    image: { src: string; alt: string };
  };
  pillars: {
    badge: string;
    title: string;
    subtitle: string;
    items: OutreachPillar[];
  };
  quote: {
    text: string;
    author: string;
  };
}

export const impactContent: ImpactContent = {
  header: {
    badge: "Philanthropy & Outreach",
    title: "Music That Changes Lives",
    description:
      "At VocalEssence Chorale Ghana, our ministry extends far beyond the concert stage. Through strategic partnerships and benevolence, we channel our musical giftings to heal hearts and restore hope.",
  },
  flagship: {
    badge: "Flagship Charity Initiative",
    title: "The Saving Hearts Project",
    description:
      "In commemoration of our 10th Anniversary, VocalEssence Chorale Ghana officially partnered with the National Cardiothoracic Centre and the Children's Block at the Korle Bu Teaching Hospital to sponsor life-saving open-heart surgeries for children with congenital heart defects.",
    partnerPrimary: "National Cardiothoracic Centre",
    partnerSecondary: "Children's Block at Korle Bu Teaching Hospital",
    image: {
      src: "/images/choir-4.jpg",
      alt: "The Saving Hearts Project",
    },
  },
  pillars: {
    badge: "Benevolence Pillars",
    title: "How We Serve Our Community",
    subtitle: "Guided by Christ's love, our choir actively engages in regular benevolence and community support.",
    items: [
      {
        title: "Pediatric Ward Visits",
        description:
          "Regular hospital visits to pediatric wards at Korle Bu, bringing uplifting hymns, prayer ministrations, provisions, and direct medical bill relief.",
      },
      {
        title: "Support for Widows",
        description:
          "Annual welfare care packages, food supplies, and financial relief for vulnerable widows during Easter and Christmas seasons.",
      },
      {
        title: "Orphanage Outreach",
        description:
          "Educational materials, clothing donations, and interactive choral music workshops for children in foster homes and orphanages.",
      },
    ],
  },
  quote: {
    text: "Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction...",
    author: "James 1:27",
  },
};
