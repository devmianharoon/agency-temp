import thumbOne from "../../public/assets/img/service/ser-10.jpg";
import thumbTwo from "../../public/assets/img/service/ser-09.jpg";
import thumbThree from "../../public/assets/img/service/ser-08.jpg";
import thumbFour from "../../public/assets/img/service/ser-07.jpg";
import thumbFive from "../../public/assets/img/service/ser-05.jpg";
import thumbSix from "../../public/assets/img/service/ser-06.jpg";

// services
import imgOne from "../../public/assets/img/service/ser-01.jpg";
import imgTwo from "../../public/assets/img/service/ser-02.jpg";
import imgThree from "../../public/assets/img/service/ser-03.jpg";
import imgFour from "../../public/assets/img/service/ser-04.jpg";

import { servicesType } from "@/interFace/interFace";

export const servicesData: servicesType[] = [
  {
    id: 1,
    img: thumbOne,
    title: "Product Design",
    details:
      "Product Design involves creating innovative and user-friendly products that meet the needs and desires of consumers.",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgOne,
  },
  {
    id: 2,
    img: thumbTwo,
    title: "UX/UI Strategy",
    details:
      "UX/UI Strategy focuses on enhancing user satisfaction by improving the usability, accessibility, and pleasure testing.",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgTwo,
  },
  {
    id: 3,
    img: thumbThree,
    title: "IT Marketing",
    details:
      "IT Marketing involves promoting information technology products and services to target audiences...",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgThree,
  },
  {
    id: 4,
    img: thumbFour,
    title: "Web Security",
    details:
      "Web Security focuses on protecting websites and web applications from cyber threats, such as hacking, malware...",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgFour,
  },
  {
    id: 5,
    img: thumbFive,
    title: "Marketing Strategy",
    details:
      "Marketing Strategy involves developing plans and tactics to promote products or services and achieve business objectives...",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgTwo,
  },

  {
    id: 6,
    img: thumbSix,
    title: "Desktop Computing",
    details:
      "Desktop Computing refers to the use of personal computers (PCs) for various tasks, such as word processing, internet browsing...",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgThree,
  },
  // service home two
  {
    id: 7,
    img: thumbSix,
    title: "Product Design",
    details:
      "Product Design involves creating innovative and user-friendly products that meet the needs and desires of consumers...",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgOne,
    prev: "fas fa-gem",
  },
  {
    id: 8,
    img: thumbSix,
    title: "UX/UI Strategy",
    details:
      "UX/UI Strategy focuses on enhancing user satisfaction by improving the usability, accessibility, and pleasure...",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgTwo,
    prev: "fas fa-laptop-code",
  },
  {
    id: 9,
    img: thumbSix,
    title: "IT Marketing",
    details:
      "IT Marketing involves promoting information technology products and services to target audiences. It includes ..",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgThree,
    prev: "fas fa-chart-bar",
  },
  {
    id: 10,
    img: thumbSix,
    title: "Web Security",
    details:
      "Web Security focuses on protecting websites and web applications from cyber threats, such as hacking, malware..",
    icon: "fas fa-long-arrow-alt-right",
    banner: imgFour,
    prev: "fas fa-fingerprint",
  },
];
