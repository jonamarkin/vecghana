export interface ValuePillar {
  title: string;
  description: string;
}

export interface VocalSection {
  name: string;
  description: string;
}

export interface AboutContent {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  story: {
    badge: string;
    title: string;
    paragraphs: string[];
    image: { src: string; alt: string };
    exploreMusicHref: string;
    bookChoirHref: string;
  };
  pillars: {
    badge: string;
    title: string;
    subtitle: string;
    items: ValuePillar[];
  };
  sections: {
    badge: string;
    title: string;
    subtitle: string;
    items: VocalSection[];
  };
  timelineHeader: {
    badge: string;
    title: string;
    subtitle: string;
  };
  ctaBanner: {
    badge: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    image: { src: string; alt: string };
  };
}

export const aboutContent: AboutContent = {
  header: {
    badge: "Who We Are",
    title: "A Legacy of Faith, Artistry & Community",
    description:
      "From humble beginnings in Dansoman, Accra to continental stages across Africa, discover the heart, history, and people behind VocalEssence Chorale Ghana.",
  },
  story: {
    badge: "Our Story",
    title: "Founded on Faith & Choral Artistry",
    paragraphs: [
      "In 2013, a circle of devoted young choristers in Dansoman, Accra, came together bound by a shared conviction: that choral music could be elevated into a vibrant, soul-stirring vehicle for Christian worship, Ghanaian cultural preservation, and world-class artistic excellence.",
      "Over the past 13+ years, VocalEssence Chorale Ghana has staged dozens of acclaimed concert productions, represented Ghana at international festivals, released 10 albums, EPs, and live recordings, and spearheaded life-changing philanthropic initiatives.",
    ],
    image: {
      src: "/images/choir-6.jpg",
      alt: "VocalEssence Chorale Story",
    },
    exploreMusicHref: "/music",
    bookChoirHref: "/contact",
  },
  pillars: {
    badge: "Our Pillars",
    title: "Mission, Vision & Core Values",
    subtitle: "The foundational anchors that guide every rehearsal, anthem, and ministration.",
    items: [
      {
        title: "Our Mission",
        description:
          "To inspire, impact, and ignite a profound passion for Christ through choral excellence, bridging indigenous African rhythms with classical choral traditions.",
      },
      {
        title: "Our Vision",
        description:
          "To be West Africa's premier choral brand, recognized globally for musical mastery, spiritual authenticity, and compassionate community impact.",
      },
      {
        title: "Excellence",
        description:
          "Uncompromising dedication to pitch accuracy, dynamic nuance, diction, and vocal artistry in every performance and studio recording.",
      },
      {
        title: "Fellowship",
        description:
          "A close-knit family of believers united in prayer, mutual growth, and selfless service to our church, nation, and community.",
      },
    ],
  },
  sections: {
    badge: "Choral Anatomy",
    title: "The Four Vocal Sections & Orchestra",
    subtitle: "Our harmonious sound is engineered by five specialized performance sections.",
    items: [
      {
        name: "Sopranos",
        description: "Luminous, crystalline high registers that soar with expressive brilliance and vocal clarity.",
      },
      {
        name: "Altos",
        description: "Warm, velvety, and resonant harmonic foundation delivering rich mid-range color.",
      },
      {
        name: "Tenors",
        description: "Dynamic, melodic, and powerful upper-range passion bringing vibrant energy to every piece.",
      },
      {
        name: "Basses",
        description: "Deep, commanding, and grounded sonic bedrock anchor that solidifies our four-part harmony.",
      },
    ],
  },
  timelineHeader: {
    badge: "Our Journey",
    title: "13+ Years of Choral Milestones",
    subtitle: "A look at key moments that have shaped the growth and legacy of VocalEssence Chorale Ghana.",
  },
  ctaBanner: {
    badge: "Work With Us",
    title: "Experience the VocalEssence Sound",
    description: "Invite our ensemble for your church ministration, wedding ceremony, or corporate gala.",
    buttonLabel: "Request a Booking",
    buttonHref: "/contact",
    image: {
      src: "/images/choir-1.jpg",
      alt: "Book VocalEssence",
    },
  },
};
