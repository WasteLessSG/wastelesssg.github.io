import react from "react";
import cdcLogo from './../assets/CDCLogo.png';
import moeLogo from './../assets/moe-logo.png';
import mseLogo from './../assets/mse-logo.png';
import riceLogo from './../assets/rice-logo.png';
import iscnLogo from './../assets/iscn-logo.svg';

const cdc = {
  src: cdcLogo,
  header: 'South West Eco Fund',
  link: 'https://www.facebook.com/210561071272/posts/10158895764591273/?d=n',
  elaboration:"We attained the initial seed funding through the South West Eco Fund Plus, awarded by the Southwest Community Development Council. CDC believed in our idea and the potential for change it could have, and laid the foundations for our efforts.",
  background: "#DBE6CD",
  linktwo: 'https://www.cdc.gov.sg/southwest/southwest/contentdetails/south-west-eco-fund-plus',
  linktwopres: true,
  linktext: "Learn more about CDC EcoFund"
};

const mse = {
  src: mseLogo,
  header: "SG Eco Fund",
  link: "https://www.mse.gov.sg/resources/awarded-projects.pdf?fbclid=IwAR0VxutcQ4UD_Ls6P96Eo48wL97OKO79kKlk6CsJVe1mLpI4AZuNz68RcUo",
  elaboration: "The Ministry of Sustainability and the Environment recognized NUS’s Towards Zero Waste precincts mission, and awarded a grant to further expand the projects under NUS’s Towards Zero Waste precincts. ",
  background:"#DBE6CD",
  linktwo: 'https://www.mse.gov.sg/resource-room/category/2021-05-22-press-release-eco-fund-first-grant-call',
  linktwopres: true,
  linktext: "Awarded Project List",

};

const sus = {
  src: iscnLogo,
  header: "Sustainable Campus Excellence Award",
  link: 'https://international-sustainable-campus-network.org/awards/2021-award-winners/',
  elaboration: "We are honored to be part of NUS’s Zero Waste testbed initiative. This initiative, along with NUS’s Zero Waste 2030 action plan, was awarded the Sustainable Campus Excellence Award. In the video celebrating this recognition of NUS’s efforts, our WasteLess chute was proudly featured, bringing us much pride.",
  background:"#CDDBE6",
  linktwo: "https://www.facebook.com/moesingapore/posts/10160722334367004",
  linktwopres: false,
  linktext: "Learn more about CDC EcoFund",

};

const rice ={
  src: riceLogo,
  header: "Feature by Rice Media",
  link: "https://www.ricemedia.co/current-affairs-features-the-rubbish-chute-is-the-reason-why-singapore-may-never-go-green/",
  elaboration: "Rice Media contacted us to get the low down on our WasteLess project. We were more than happy to show them around and share with them our vision for the project. Drilling down on our thoughts through the interview, they were kind enough to feature us on their website. ",
  background:"#E6CDDB",
  linktwo: "https://www.facebook.com/moesingapore/posts/10160722334367004",
  linktwopres: false,
  linktext: "Learn more about CDC EcoFund",

};

const moe ={
  src: moeLogo,
  header: "Feature by Ministry of Education",
  link: "https://www.facebook.com/moesingapore/posts/10160722334367004",
  elaboration: "MOE featured our efforts on their very own schoolbag site. They highlighted the efforts of our team with pictures of them at work designing and building the chute. More specifically, they acknowledged all the additional stuff we had to learn to create the project, as well as its hackathon beginnings.",
  background:"#E6CDDB",
  linktwo:"https://www.schoolbag.edu.sg/story/the-rubbish-chute-gets-smart",
  linktwopres: true,
  linktext: "Read Article Here..",

};

export {cdc, mse, sus, rice, moe};
