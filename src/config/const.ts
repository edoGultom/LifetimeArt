import IcKitchen from "@/assets/images/icon-kitchen.svg";
import IcLoftConversions from "@/assets/images/icon-loft-conversions.svg";
import IcBathRoom from "@/assets/images/icon-bathroom.svg";
import IcExtensions from "@/assets/images/icon-extension.svg";
import IcRestoration from "@/assets/images/icon-restoration.svg";
import IcExternalWork from "@/assets/images/icon-external-works.svg";
import User1 from "@/assets/images/emily-carter.png";
import User2 from "@/assets/images/rachel-morgan.png";
import User3 from "@/assets/images/michael-turner.png";
import User4 from "@/assets/images/michael-turner.png";
import Work1 from "@/assets/images/our-work-1.png";
import Work2 from "@/assets/images/our-work-2.png";
import Work3 from "@/assets/images/our-work-3.png";
import { Testimonial, OurWork } from "@/types/testimonials";

export const aboutsNumber = [
    {
      label: "Years experience",
      desc: "Improving homes with expert craftsmanship for years",
      count: "8",
    },
    {
      label: "Projects completed",
      desc: "Over 250 successful projects delivered with quality and care",
      count: "26",
    },
    {
      label: "Skilled Tradespeople",
      desc: "Our team of 30 experts ensures top-quality results",
      count: "30",
    },
    {
      label: "Client satisfaction",
      desc: "All of our clients are satisfied with our work and service",
      count: "100%",
    },
  ];
export const menuItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#our_work" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#get-in-touch" },
];
export const ourWorks: OurWork[] = [
    {
        name: "Modern kitchen refit",
        desc: "This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
        url:Work1.src,
        type: "Kitchen",
        weeks: "4 weeks",
        feedback: {
            user: "Rachel Morgan",
            url: User2.src,
            desc:
                "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
        }

    },
    {
        name: "External garden path build",
        desc: "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
        type: "External",
        url:Work2.src,
        weeks: "6 weeks",
        feedback: {
            user: "Michael Turner",
            url: User3.src,
            desc:
                "The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
        }
    },
    {
        name: "Bathroom renovation",
        desc: "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
        url:Work3.src,
        type: "Kitchen",
        weeks: "4 weeks",
        feedback: {
            user: "Laura Davies",
            url: User4.src,
            desc:
                "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
        }

    },
];
export const menuItemsFooter = [
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonial" },
    { label: "Our Work", href: "#our_work" },
    { label: "FAQs", href: "#faq" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];
export const services = [
    {
        label: "Kitchens",
        desc: "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
        url: IcKitchen,
    },
    {
        label: "Loft Conversions",
        desc: "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
        url: IcLoftConversions,
    },
    {
        label: "Bathrooms",
        desc: "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
        url: IcBathRoom,
    },
    {
        label: "Extensions",
        desc: "Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
        url: IcExtensions,
    },
    {
        label: "Restorations",
        desc: "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
        url: IcRestoration,
    },
    {
        label: "External Work",
        desc: "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
        url: IcExternalWork,
    },
];

export const faqs = [
    {
        label: "What area are you based in?",
        desc: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
        label: "How long does a typical project take?",
        desc: "Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
    },
    {
        label: "Do you offer free quotes?",
        desc: "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
    },
    {
        label: "Will I need planning permission for my project?",
        desc: "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
    },
    {
        label: "Do you provide a guarantee for your work?",
        desc: "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
    },
    {
        label: "Can I stay in my home while the work is being done?",
        desc: "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
    },
    {
        label: "How do I get started with a project?",
        desc: "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
    },
];
export const testimonials: Testimonial[] = [
    {
        rate: 5,
        desc: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!.",
        name: "Emily Carter",
        url: User1.src,
    },
    {
        rate: 5,
        desc: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!.",
        url: User1.src,
        name: "Emily Carter",
    },
    {
        rate: 5,
        desc: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!.",
        url: User1.src,
        name: "Emily Carter",
    },
];
