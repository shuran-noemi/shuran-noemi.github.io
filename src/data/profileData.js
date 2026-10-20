import paperPecsi from "../assets/paperimage/pecsi.jpg";
import paperContentToExperience from "../assets/paperimage/content2e.png";
import paperTeleoperation from "../assets/paperimage/teleoperation.png";
import paperDelegatedAccess from "../assets/paperimage/delegated-access.png";
import profilePhoto from "../assets/profile.jpg";
import paperBird from "../assets/paperimage/paper1.png";
import paperMuseum from "../assets/paperimage/paper2.png";
import birdPdf from "../assets/paper/chi26d-sub2880-cam-i61.pdf";
import museumPdf from "../assets/paper/chi26d-sub4818-cam-i61.pdf";
import thuLogo from "../assets/logos/thu-mark.png";
import piLogo from "../assets/logos/pi-mark.png";
import iscasLogo from "../assets/logos/iscas-wide.jpg";
import herLogo from "../assets/logos/herlab-mark.png";
import xjtluLogo from "../assets/logos/xjtlu-mark.png";
import appleOne from "../assets/activity/a1_1.JPG";
import appleTwo from "../assets/activity/a1_2.JPG";
import appleThree from "../assets/activity/a1_3.JPG";
import appleFour from "../assets/activity/a1_4.jpg";
import forumOne from "../assets/activity/a2_1.JPG";
import forumTwo from "../assets/activity/a2_2.JPG";
import samsungLogo from "../assets/campaign/Font-Samsung-Logo.jpg";
import galaxyCampaign from "../assets/campaign/Galaxy.JPG";
import oppoLogo from "../assets/campaign/Oppo-Logo.wine.svg";
import oppoCampaignOne from "../assets/campaign/OPPO1.JPG";
import oppoCampaignTwo from "../assets/campaign/OPPO2.JPG";
import didiLogo from "../assets/campaign/didi logo.png";
import didiCampaignOne from "../assets/campaign/didi_2.jpg";
import didiCampaignTwo from "../assets/campaign/didi_3.jpg";
import alibabaLogo from "../assets/campaign/logos/alibaba.png";
import appleLogoBlack from "../assets/campaign/logos/Apple_logo_black.svg";
import byteDanceLogo from "../assets/campaign/logos/ByteDance_logo_English.svg";
import hpLogo from "../assets/campaign/logos/HP_logo_630x630.png";
import huaweiLogo from "../assets/campaign/logos/Huawei_Standard_logo.svg.webp";
import meituanLogo from "../assets/campaign/logos/Meituan-美团-Logo.png";
import nvidiaLogo from "../assets/campaign/logos/Nvidia-Logo.wine.png";
import tencentLogo from "../assets/campaign/logos/Tencent logo.png";
import vivoLogo from "../assets/campaign/logos/Vivo-Logo.png";
import lenovoLogo from "../assets/campaign/logos/lenovo logo.png";

export const profile = {
  name: "Shuran Fan",
  chineseName: "范舒然",
  roles: ["Researcher", "Developer", "Designer"],
  email: "shuran@whu.edu.cn",
  affiliation: "Wuhan University",
  location: "Wuhan, China",
  profilePhoto,
  links: [
    { label: "Email", href: "mailto:shuran@whu.edu.cn", type: "email" },
    { label: "Google Scholar", href: "#", type: "scholar", placeholder: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shuran-fan-213943324", type: "linkedin" },
  ],
};

export const news = [
  {
    time: "Apr 2026",
    content: "Presented two posters at CHI 2026 in Barcelona, Spain 🇪🇸.",
  },
  {
    time: "May 2025",
    content: "I was admitted to the HCI+ 2025 Summer Research Program, with a 5% acceptance rate for my group!",
  },
];

export const publications = [
  {
    id: "bird-perception",
    title:
      "Seeing with a Bird's Perception: Designing a Wearable Experience to Reorient Attention to Everyday Nature",
    image: paperBird,
    authors: [
      { name: "Shuran Fan", role: "corresponding" },
      { name: "Yuyang Zheng" },
    ],
    venues: [{ name: "CHI '26 Poster", type: "conference" }],
    venueDetail: "In Proceedings of the CHI Conference on Human Factors in Computing Systems",
    links: [
      { label: "PDF", href: birdPdf },
      { label: "DOI", href: "https://doi.org/10.1145/3772363.3798350" },
    ],
    tags: ["Interaction Technology", "Embodied Interaction", "System / Prototype"],
    abstract:
      "Despite cohabiting with diverse non-human species, urban residents increasingly experience disconnection from everyday nature. Prior more-than-human design work has explored perspective-taking to prompt reflection on human–nature relationships, yet often remains situated in virtual or isolated contexts. To address this gap, we present a nature walk experience based on Perch, a sparrow-inspired zoomorphic wearable robot. Perch translates birds’ attentional patterns into subtle multimodal cues, aiming to reorient users’ attention toward cohabiting nature through shared and non-intrusive perceptual proxy. A mixed-methods study with 18 participants shows that the proposed experience enhances nature relatedness and promotes reflection, initiative, and experiential engagement with everyday nature. Our work contributes an embodied, calm interaction approach to more-than-human design and offers design implications for integrating peripheral attention reorientation into everyday urban environments.",
  },
  {
    id: "museum-expression",
    title:
      "Read and Reflect: Exploring How the Display of User-Generated Content Shapes In-Situ Museum Expression",
    image: paperMuseum,
    authors: [
      { name: "Wenzhe Hu", role: "equal" },
      { name: "Shuran Fan", role: "equal" },
      { name: "Yue Li", role: "advisor" },
    ],
    venues: [{ name: "CHI '26 Poster", type: "conference" }],
    venueDetail: "In Proceedings of the CHI Conference on Human Factors in Computing Systems",
    links: [
      { label: "PDF", href: museumPdf },
      { label: "DOI", href: "https://doi.org/10.1145/3772363.3798691" },
    ],
    tags: ["UX Design", "Understanding People"],
    abstract:
      "Museums increasingly collect user-generated content (UGC), yet such materials are often presented as fragmented messages of visitors' voluntary expressions. Prior work suggests that encountering others’ perspectives can prompt reflection and dialogue, but it remains unclear how different UGC display approaches shape visitors’ experiences and in-situ expression during a visit. In this work, we distill strategies from prior research into four UGC display modes and design corresponding prototypes as design probes. Through a field study conducted in a museum, we compare how different display approaches influence visitors’ meaning-making and expressive behaviors. Based on our findings, we derive design implications for supporting UGC-driven in-situ expression and offer insights into designing more communicative museum experiences.",
  },
  {
    "id": "parent-learning",
    "title": "Designing AI Scaffolding for Parent Learning in Live Parent–Child Emotion Coaching",
    "image": paperPecsi,
    "authors": [
      {
        "name": "Shuran Fan"
      },
      {
        "name": "Ming Chen"
      },
      {
        "name": "Yu Mei"
      },
      {
        "name": "Haoling Bai"
      },
      {
        "name": "Yiduo Xu"
      },
      {
        "name": "Jie Cai",
        "role": "corresponding"
      },
      {
        "name": "Chun Yu"
      }
    ],
    "venues": [
      {
        "name": "Work In Progress",
        "type": "work-in-progress"
      }
    ],
    "links": [],
    "tags": [
      "Human-AI Collaboration",
      "Understanding People",
      "System / Prototype"
    ],
    "abstract": "Parents struggle to translate emotion coaching principles into appropriate responses during emotionally challenging interactions. Existing real-time AI can address immediate needs, but may not build transferable coaching capabilities. We investigate how AI can support practice while promoting parent learning. A formative study with 10 parents informed PECSI, an AI scaffolding system combining a five-phase emotion-coaching framework with two schedules. We evaluated PECSI in a between-subjects mixed-methods study with 39 Chinese parent–child dyads, using expert-reviewed criteria for behavioral analysis. Both schedules supported initial learning and were perceived as adaptive. Yet the schedules followed distinct learning pathways: repeated situated modeling fostered reusable response templates, whereas progressive fading encouraged active generation and feedback-mediated self-correction. Our findings further explain how live relational interaction reshapes scaffolding and offer design implications for supporting parent learning while preserving relational responsibility."
  },
  {
    "id": "content-to-experience",
    "title": "Content to Experience: A Multi-Stakeholder Design Framework for Heritage XR Experiences",
    "image": paperContentToExperience,
    "authors": [
      {
        "name": "Shuran Fan"
      },
      {
        "name": "Qingxuan Yan"
      },
      {
        "name": "Xinyi Fu"
      },
      {
        "name": "Yue Li",
        "role": "corresponding"
      }
    ],
    "venues": [
      {
        "name": "Work In Progress",
        "type": "work-in-progress"
      }
    ],
    "links": [],
    "tags": [
      "Framework / Survey",
      "Interaction Technology",
      "Understanding People"
    ],
    "abstract": "Extended Reality (XR) offers transformative potential for cultural heritage, but its development must reconcile the conflicting needs of diverse stakeholders. However, existing approaches lack a common way to articulate and compare design decisions across roles. In this work, we present Content to Experience—Narrative, Immersion, Interactivity, and Sociality (C2X-NIIS), a review-derived and stakeholder-refined relational design framework for heritage XR. A theory-informed scoping review of 163 studies describing 178 projects established a design space comprising six dimensions and representative alternatives. A collaborative design workshop and interviews with experienced stakeholders then organized this space into an Input–Mechanics–Target relation and examined its potential uses. The resulting framework connects Content Source to Experiential Goal through Narrative Structure, Immersion, Interactivity, and Sociality. It provides a relational account of how role-specific priorities bear on a shared design configuration and offers formative evidence for future multi-stakeholder use."
  },
  {
    "id": "teleoperation-experience",
    "title": "How Do We Measure Subjective Experience in Teleoperation? A Scoping Review of Constructs and Measurement Practices",
    "image": paperTeleoperation,
    "authors": [
      {
        "name": "Duocan Li",
        "role": "equal"
      },
      {
        "name": "Shuran Fan",
        "role": "equal"
      },
      {
        "name": "Jiayue Huang"
      },
      {
        "name": "Qian Zhu"
      },
      {
        "name": "Tianren Luo"
      },
      {
        "name": "Hao Zhang"
      },
      {
        "name": "Teng Han"
      },
      {
        "name": "Nianlong Li",
        "role": "corresponding"
      },
      {
        "name": "Feng Tian"
      }
    ],
    "venues": [
      {
        "name": "Work In Progress",
        "type": "work-in-progress"
      }
    ],
    "links": [],
    "tags": [
      "Framework / Survey",
      "Human-Robot Collaboration",
      "Embodied Interaction"
    ],
    "abstract": "Teleoperation extends human sensing and action into remote environments and is increasingly shifting from direct control toward broader human-robot collaboration. As robotic autonomy and immersive interfaces advance, evaluation must consider both task performance and operators' perceptions and experiences. Scale-based subjective evaluation captures these human-centered aspects, yet its constructs and measures remain fragmented across contexts. We conducted a scoping review of empirical teleoperation research published in 2016–2025. From 1,297 records, we included 187 publications reporting 196 studies and 661 study–construct–measure records. We consolidated reported constructs into 13 categories and mapped their distribution across tasks, interfaces, and experimental factors. Evaluation centered on workload, usability, and perceived performance, while less frequently studied constructs were often measured with custom instruments. The comparable use of standardized and custom measures indicates limited consensus and context-dependent operationalization. We provide evidence and construct maps and recommend transparent reporting and shared measurement resources to support comparable, cumulative teleoperation research."
  },
  {
    "id": "delegated-access",
    "title": "Delegated Access: When Artifacts Come to the Visitor in Agent-Native VR Museums",
    "image": paperDelegatedAccess,
    "authors": [
      {
        "name": "Qingxuan Yan"
      },
      {
        "name": "Chenyu Du"
      },
      {
        "name": "Shuran Fan"
      },
      {
        "name": "Xueqi Wang"
      },
      {
        "name": "Yue Li",
        "role": "corresponding"
      }
    ],
    "venues": [
      {
        "name": "Work In Progress",
        "type": "work-in-progress"
      }
    ],
    "links": [],
    "tags": [
      "Interaction Technology",
      "System / Prototype"
    ],
    "abstract": "In a physical museum, being guided has always been optional; crossing the distance to each artifact is not. Virtual museums inherit this convention: artifacts stay fixed while visitors do the traveling. We ask whether a meaningful museum visit survives when the visitor stays still and the collection comes to them, and, once it does, who should compose what arrives. We study the question as delegated access, crossing access mode (authored-gallery travel versus carousel-mediated collection delivery) with visit guidance (self versus agent) in an agent-native replica of the Anonymized Museum: an LLM-driven embodied agent understands what the visitor means, can plan and arrange the visit, and interprets whatever they encounter, in every condition. In a 2 x 2 within-participant study (N=36), delivery lowered physical demand and enabled broader artifact encounters. Agent guidance reduced perceived visit agency, though proposals that could be refused and revised preserved a sense of authorship for some visitors. This work contributes a delegated-access design space for immersive 3D collection interfaces, an agent-native museum implementation that makes the comparison possible, and empirical evidence about the tradeoffs of the four conditions."
  },
];

export const experiences = [
  {
    category: "Research Experience",
    organization: "PI Lab, Department of Computer Science and Technology, Tsinghua University",
    link: "https://pi.cs.tsinghua.edu.cn/",
    logos: [
      { src: thuLogo, className: "logo-small" },
      { src: piLogo, className: "logo-pi" },
    ],
    details: [
      {
        label: "Advisors",
        people: [
          { name: "Prof. Chun Yu", link: "https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" },
          { name: "Dr. Jie Cai", link: "https://jc926.github.io/Jie_Cai/" },
        ],
      },
      "Research Direction: Human-AI Collaboration for user modeling and intention computing",
    ],
  },
  {
    category: "Research Experience",
    organization: "HCI Lab, Institute of Software, Chinese Academy of Sciences",
    link: "https://www.iscas.ac.cn/",
    logos: [{ src: iscasLogo, className: "logo-wide" }],
    details: [
      {
        label: "Advisors",
        people: [
          { name: "Prof. Teng Han", link: "http://teng-han.com/" },
          { name: "Prof. Nianlong Li", link: "https://nianlongl.com/" },
        ],
      },
      "Research Direction: embodied AI interaction",
    ],
  },
  {
    category: "Research Experience",
    organization: "HER Lab, School of Advanced Technology, Xi'an Jiaotong-Liverpool University",
    link: "https://hiherlab.github.io/",
    logos: [
      { src: xjtluLogo, className: "logo-small" },
      { src: herLogo, className: "logo-small" },
    ],
    details: [
      {
        label: "Advisor",
        people: [{ name: "Prof. Yue Li", link: "https://imyueli.github.io/" }],
        note: "HCI+ 2025 Summer Research Program",
      },
      "Research Direction: culturally suited XR and embodiment agents",
    ],
  },
  {
    category: "Work Experience",
    organization: "Product Manager Intern",
    affiliation: "Bluefocus",
    period: "Jun 2024 - Sep 2024",
    details: [],
  },
  {
    category: "Work Experience",
    organization: "Product Growth Intern",
    affiliation: "Trip.com",
    period: "Mar 2024 - Jun 2024",
    details: [],
  },
];

export const experienceGroups = [
  {
    title: "Research Experience",
    items: experiences.filter((item) => item.category === "Research Experience"),
  },
  {
    title: "Work Experience",
    items: experiences.filter((item) => item.category === "Work Experience"),
  },
];

export const creatorCampaigns = {
  title: "Creator Partnerships",
  note: "Participated as a creator partner in commercial collaborations and communication campaigns with leading brands.",
  partnerLogos: [
    { name: "Alibaba", src: alibabaLogo },
    { name: "Apple", src: appleLogoBlack },
    { name: "ByteDance", src: byteDanceLogo },
    { name: "HP", src: hpLogo },
    { name: "Huawei", src: huaweiLogo },
    { name: "Meituan", src: meituanLogo },
    { name: "NVIDIA", src: nvidiaLogo },
    { name: "Tencent", src: tencentLogo },
    { name: "vivo", src: vivoLogo },
    { name: "Lenovo", src: lenovoLogo },
  ],
  items: [
    {
      brand: "Samsung Galaxy",
      logo: samsungLogo,
      layout: "portrait",
      images: [galaxyCampaign],
      description:
        "Led the Samsung Galaxy S Series summer campaign, driving topics to 10M+ views and trending on both Weibo and Douyin.",
    },
    {
      brand: "OPPO",
      logo: oppoLogo,
      layout: "landscape-stack",
      images: [oppoCampaignOne, oppoCampaignTwo],
      description:
        "Joined Reno and Find series launches and co-creation meetings as a creator guest, leading campus communications.",
    },
    {
      brand: "DiDi",
      logo: didiLogo,
      layout: "landscape-stack",
      images: [didiCampaignOne, didiCampaignTwo],
      description:
        "Contributed to an S-tier social video campaign, directing and creating an episode with 1M+ views.",
    },
  ],
};

export const activities = [
  {
    title: "Apple University Showcase",
    datePlace: "Jul 5, 2025 · Shanghai",
    hostPrefix: "Hosted by",
    hostName: "Apple",
    hostLink: "https://www.apple.com/",
    description:
      "Participated as a student creator representative and delivered a featured presentation.",
    images: [appleFour, appleTwo, appleThree, appleOne],
  },
  {
    title: "Global Overseas Talents Innovation & Development Forum",
    datePlace: "Aug 8-10, 2024 · Shenzhen",
    hostPrefix: "Hosted by",
    hostName: "Longgang District Government",
    hostSuffix: ", Shenzhen",
    hostLink: "https://www.lg.gov.cn/",
    description:
      'Invited as a youth KOL speaker and delivered a keynote presentation; awarded "Most Promising Young Representative."',
    images: [forumTwo, forumOne],
  },
];
