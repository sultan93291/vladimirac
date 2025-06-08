import {
  Car,
  Car1,
  Car2,
  Car3,
  Car4,
  Car5,
  Car6,
  Subicon,
  Subicon1,
  Subicon2,
} from "@/Components/Shared/Icons";
import { ReactElement } from "react";

interface DetailItem {
  icon: ReactElement;
  text: string;
}

interface ServiceDetails {
  [key: string]: DetailItem;
}

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  details: ServiceDetails;
}
type Certificate = {
  title: string;
  issuer: string;
  image: string;
  verified: boolean;
  downloadLink: string;
  viewLink: string;
};


export const certificates: Certificate[] = [
  {
    title: "ISO 9001 Certification",
    issuer: "International Organization for Standardization",
    image: "/certificate.png",
    verified: true,
    downloadLink: "/certificates/iso9001.pdf",
    viewLink: "/certificates/iso9001.pdf",
  },
  {
    title: "ADR Certificate",
    issuer: "ADR - European Agreement for Transport of Dangerous Goods",
    image: "/certificate.png",
    verified: true,
    downloadLink: "/certificates/adr.pdf",
    viewLink: "/certificates/adr.pdf",
  },
  {
    title: "UIECE Membership",
    issuer: "National Union of Freight Forwarders (Romania)",
    image: "/certificate.png",
    verified: true,
    downloadLink: "/certificates/uiece.pdf",
    viewLink: "/certificates/uiece.pdf",
  },
  {
    title: "EORI Registration",
    issuer: "Economic Operators Registration and Identification",
    image: "/certificate.png",
    verified: true,
    downloadLink: "/certificates/eori.pdf",
    viewLink: "/certificates/eori.pdf",
  },
];


const services: Service[] = [
  {
    icon: <Car />,
    title: "FTL Transport",
    description:
      "Full Truck Load (FTL) transport uses an entire truck for a single shipment, offering faster transit, less handling, and enhanced security for large deliveries.",
    details: {
      heading: {
        icon: <Car />,
        text: "Full load transport FTL",
      },
      explanation: {
        icon: <Subicon />,
        text: "A full truck load (FTL) means filling a truck with goods based on weight or volume. This method benefits transporting large cargo from one sender, optimizing space and speeding delivery. FTL enhances shipping efficiency and reduces transit times.",
      },
      advantages: {
        icon: <Subicon1 />,
        text: "FTL transport is cost-effective, dedicating a truck to one shipment, lowering costs. It speeds up delivery with no stops and reduces damage risk, keeping cargo secure. Ideal for large shipments, it ensures timely and safe delivery.",
      },
      history: {
        icon: <Subicon2 />,
        text: "Full Truck Load (FTL) transport has evolved significantly since its inception, originally designed for businesses needing efficient movement of large goods. As demand for quicker shipping increased, FTL became the go-to method, allowing companies to fill entire trucks for single shipments. This streamlined logistics, improved safety, and lowered costs. Technological advancements have further enhanced FTL services, solidifying their role in today's supply chains.",
      },
    },
  },
  {
    icon: <Car1 />,
    title: "LTL Transport",
    description:
      "LTL (Less Than Truckload) transport shares truck space with other shipments, offering cost-effective solutions for smaller loads while ensuring reliable, timely delivery.",
    details: {
      heading: {
        icon: <Car1 />,
        text: "LTL Transport",
      },
      explanation: {
        icon: <Subicon />,
        text: "LTL transport combines multiple shipments in one truck. It's perfect for smaller cargo and helps reduce shipping costs by sharing space.",
      },
      advantages: {
        icon: <Subicon1 />,
        text: "It lowers transport expenses, minimizes environmental impact, and offers more frequent shipments due to higher route flexibility.",
      },
      history: {
        icon: <Subicon2 />,
        text: "LTL shipping developed to serve small to medium businesses. Over time, it has become more efficient with the rise of digital logistics and route optimization.",
      },
    },
  },
  {
    icon: <Car2 />,
    title: "Urgent Transport",
    description:
      "Urgent transport prioritizes fast, time-sensitive deliveries, ensuring quick transit and on-time arrival, ideal for businesses requiring expedited shipping solutions.",
    details: {
      heading: {
        icon: <Car2 />,
        text: "Our Urgent Solutions",
      },
      "24/7 Availability": {
        icon: <Subicon />,
        text: "Urgent transport ensures time-critical deliveries are prioritized, often using dedicated or express routes.",
      },
      PriorityShipments: {
        icon: <Subicon1 />,
        text: "It reduces lead times, enhances customer satisfaction, and avoids costly delays for sensitive shipments.",
      },
      UrgentFTL: {
        icon: <Subicon2 />,
        text: "E-commerce and just-in-time manufacturing increased demand for urgent shipping, making it a vital part of logistics.",
      },
      UrgentLTL: {
        icon: <Subicon />,
        text: "E-commerce and just-in-time manufacturing increased demand for urgent shipping, making it a vital part of logistics.",
      },
    },
  },
  {
    icon: <Car3 />,
    title: "Specialized Transport",
    description:
      "Specialized transport handles unique, oversized, or fragile goods, offering tailored solutions with equipment designed to ensure safety and compliance during transit.",
    details: {
      heading: {
        icon: <Car3 />,
        text: "Specialized Transport Service",
      },
      explanation: {
        icon: <Subicon />,
        text: "Used for transporting oversized, hazardous, or temperature-sensitive goods with customized equipment.",
      },
      advantages: {
        icon: <Subicon1 />,
        text: "Ensures compliance, reduces damage risks, and meets industry-specific requirements like pharma or chemicals.",
      },
      history: {
        icon: <Subicon2 />,
        text: "Specialized logistics grew with the complexity of supply chains needing custom handling and regulatory compliance.",
      },
    },
  },
  {
    icon: <Car4 />,
    title: " Warehousing",
    description:
      "Specialized transport handles unique, oversized, or fragile goods, offering tailored solutions with equipment designed to ensure safety and compliance during transit.",
    details: {
      heading: {
        icon: <Car4 />,
        text: " Warehousing",
      },
      explanation: {
        icon: <Subicon />,
        text: "Used for transporting oversized, hazardous, or temperature-sensitive goods with customized equipment.",
      },
      advantages: {
        icon: <Subicon1 />,
        text: "Ensures compliance, reduces damage risks, and meets industry-specific requirements like pharma or chemicals.",
      },
      history: {
        icon: <Subicon2 />,
        text: "Specialized logistics grew with the complexity of supply chains needing custom handling and regulatory compliance.",
      },
    },
  },
  {
    icon: <Car5 />,
    title: "Out OF EU",
    description:
      "Specialized transport handles unique, oversized, or fragile goods, offering tailored solutions with equipment designed to ensure safety and compliance during transit.",
    details: {
      heading: {
        icon: <Car5 />,
        text: "Out OF EU",
      },
      explanation: {
        icon: <Subicon />,
        text: "Used for transporting oversized, hazardous, or temperature-sensitive goods with customized equipment.",
      },
      advantages: {
        icon: <Subicon1 />,
        text: "Ensures compliance, reduces damage risks, and meets industry-specific requirements like pharma or chemicals.",
      },
      history: {
        icon: <Subicon2 />,
        text: "Specialized logistics grew with the complexity of supply chains needing custom handling and regulatory compliance.",
      },
    },
  },
  {
    icon: <Car6 />,
    title: "Customs",
    description:
      "Specialized transport handles unique, oversized, or fragile goods, offering tailored solutions with equipment designed to ensure safety and compliance during transit.",
    details: {
      heading: {
        icon: <Car6 />,
        text: "Customs",
      },
      explanation: {
        icon: <Subicon />,
        text: "Used for transporting oversized, hazardous, or temperature-sensitive goods with customized equipment.",
      },
      advantages: {
        icon: <Subicon1 />,
        text: "Ensures compliance, reduces damage risks, and meets industry-specific requirements like pharma or chemicals.",
      },
      history: {
        icon: <Subicon2 />,
        text: "Specialized logistics grew with the complexity of supply chains needing custom handling and regulatory compliance.",
      },
    },
  },
];




export default services;
