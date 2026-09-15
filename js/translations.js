/**
 * CAS Jordan - Bilingual Translation Dictionary
 * English (LTR) / العربية (RTL)
 */

const translations = {
  en: {
    meta: {
      title: "Central Alarm Station (CAS) Jordan | 24/7 Security & Alarm Monitoring",
      description: "Central Alarm Station (CAS) provides 24/7 alarm monitoring, security integration and coordinated response solutions for residential and commercial clients in Jordan. Established in 1989."
    },
    nav: {
      brandSub: "Central Alarm Station",
      established: "Est. 1989",
      home: "Home",
      about: "About Us",
      solutions: "Solutions",
      howItWorks: "How It Works",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact Us",
      cta: "Request a Consultation",
      status: "24/7 Monitoring Active in Jordan",
      langSwitch: "العربية"
    },
    hero: {
      badge: "Jordan's First Registered Central Alarm Station • Est. 1989",
      scene1: {
        eyebrow: "CENTRAL ALARM STATION",
        headline: "Security starts with watching.",
        sub: "Professional protection begins with knowing what is happening in real time."
      },
      scene2: {
        eyebrow: "24 / 7 / 365 MONITORING",
        headline: "Always watching.",
        sub: "Our monitoring team evaluates security alerts in real time around the clock."
      },
      scene3: {
        eyebrow: "CONNECTED PROTECTION",
        headline: "Every signal matters.",
        sub: "From your property directly to the security professionals ready to respond."
      },
      scene4: {
        eyebrow: "CAS CENTRAL MONITORING",
        headline: "Technology meets human expertise.",
        sub: "Every alert is instantly evaluated by trained security response specialists."
      },
      scene5: {
        eyebrow: "RAPID COORDINATION",
        headline: "From detection to action.",
        sub: "Fast, coordinated response and authority dispatch when every second counts."
      },
      scene6: {
        eyebrow: "CENTRAL ALARM STATION",
        headline: "Technology detects. CAS responds.",
        sub: "Trusted security monitoring and on-ground response in Jordan since 1989.",
        primaryCta: "Request a Consultation",
        secondaryCta: "Explore Our Solutions"
      },
      timelineLabels: ["Watch", "Detect", "Connect", "Verify", "Respond", "Protect"],
      livePulse: "LIVE SIGNAL FEED",
      videoMute: "Toggle Audio",
      videoPlay: "Play / Pause Video"
    },
    trust: {
      eyebrow: "A LEGACY OF PROTECTION",
      title: "Security built on trust since 1989.",
      p1: "Since 1989, Central Alarm Station (CAS) has been dedicated to protecting people and property in Jordan through professional alarm monitoring, advanced security technology, and coordinated response.",
      p2: "As Jordan's first registered Central Alarm Station, CAS combines decades of operational experience with modern monitoring capabilities to provide dependable security and total peace of mind.",
      storyCta: "Discover Our Story",
      stats: [
        { value: "1989", label: "Established", sub: "Jordan's 1st registered station" },
        { value: "5000", suffix: "+", label: "Protected Clients", sub: "Homes & commercial sites" },
        { value: "24/7", suffix: "/365", label: "Active Monitoring", sub: "Zero downtime operations" },
        { value: "35", suffix: "+ Years", label: "Security Experience", sub: "Protecting Jordanian properties" }
      ]
    },
    whyUs: {
      eyebrow: "WHY CAS",
      title: "More than monitoring. A complete security response.",
      description: "Security is not only about detecting an alarm. It is about knowing what the signal means, evaluating it immediately, and coordinating the right on-ground action.",
      pillars: [
        {
          num: "01",
          title: "Safety",
          desc: "Every protocol and system is engineered around safeguarding life, property, and what matters most."
        },
        {
          num: "02",
          title: "Trust",
          desc: "Over 35 years of uncompromised reliability, established infrastructure, and recognized authority coordination."
        },
        {
          num: "03",
          title: "Compassion",
          desc: "Behind every alarm is a family, a business, or a human life that requires immediate, dedicated care."
        }
      ]
    },
    solutions: {
      eyebrow: "SECURITY SOLUTIONS",
      title: "Protection designed around you.",
      intro: "CAS provides security solutions tailored to residential and commercial environments. Our approach combines advanced technology with professional human monitoring to deliver unmatched protection.",
      items: [
        {
          id: "alarm-monitoring",
          num: "01",
          tag: "Core Capability",
          title: "24/7 Alarm Monitoring",
          desc: "Our professional monitoring team keeps watch around the clock, evaluating alerts in real time and addressing threats before they escalate.",
          features: ["Real-time multi-zone monitoring", "Intrusion, fire & panic alerts", "Instant cellular & IP backup channels"],
          cta: "Learn More"
        },
        {
          id: "ground-response",
          num: "02",
          tag: "Emergency",
          title: "Direct Connection & On-Ground Response",
          desc: "In an emergency, every second matters. CAS supports rapid coordination with relevant authorities and emergency services, deploying response teams when required.",
          features: ["Jordan police & civil defense coordination", "On-ground patrol dispatch capabilities", "Real-time incident verification"],
          cta: "Learn More"
        },
        {
          id: "security-integration",
          num: "03",
          tag: "Engineering",
          title: "Advanced Security Integration",
          desc: "CAS integrates with a wide range of alarm, CCTV, and access control systems, improving monitoring performance and operational reliability.",
          features: ["Legacy & modern hardware compatibility", "IP/GSM dual-path communicators", "Smart perimeter & sensor integration"],
          cta: "Learn More"
        },
        {
          id: "custom-solutions",
          num: "04",
          tag: "Bespoke",
          title: "Customized Security Solutions",
          desc: "Every property has unique risks. CAS engineers monitoring architectures suited to luxury residences, corporate offices, banks, and high-security facilities.",
          features: ["Tailored escalation protocols", "Multi-branch commercial monitoring", "Executive residential protection"],
          cta: "Learn More"
        },
        {
          id: "incident-analytics",
          num: "05",
          tag: "Intelligence",
          title: "Incident Reporting & Analytics",
          desc: "Detailed incident reporting provides actionable security insights and helps clients make informed decisions about their ongoing protection strategy.",
          features: ["Comprehensive incident log history", "Arm/disarm schedule tracking", "Monthly operational security audits"],
          cta: "Learn More"
        }
      ]
    },
    howItWorks: {
      eyebrow: "HOW WE WORK",
      title: "From signal to response.",
      subtitle: "A seamless 4-stage operational protocol executed within seconds of any security trigger.",
      steps: [
        {
          num: "01",
          name: "Connect",
          badge: "Signal Transmission",
          title: "System Connection",
          desc: "Your premises alarm and sensors connect securely to the CAS central monitoring matrix via encrypted dual-path telemetry."
        },
        {
          num: "02",
          name: "Monitor",
          badge: "24/7/365 Watch",
          title: "Continuous Monitoring",
          desc: "Certified security controllers monitor incoming telemetry streams 24 hours a day, 365 days a year without interruption."
        },
        {
          num: "03",
          name: "Verify",
          badge: "Human Intelligence",
          title: "Instant Verification",
          desc: "Alerts are immediately verified through live telemetry, eliminating false alarms and identifying genuine emergencies in seconds."
        },
        {
          num: "04",
          name: "Respond",
          badge: "Coordinated Action",
          title: "Rapid Response",
          desc: "CAS executes agreed escalation protocols, notifying owners, deploying ground teams, and coordinating direct official emergency dispatch."
        }
      ]
    },
    sectors: {
      eyebrow: "SECTORS WE PROTECT",
      title: "Protection for what matters most.",
      tabResidential: "Residential Security",
      tabCommercial: "Commercial Security",
      residential: {
        headline: "Your home. Your family. Your peace of mind.",
        desc: "CAS safeguards private villas, apartments, and residential compounds with tailored 24/7 alarm monitoring, panic alert response, and perimeter surveillance.",
        highlights: [
          "24/7 Silent Intrusion & Burglary Detection",
          "Medical Emergency & Panic Button Response",
          "Smoke, Heat & Water Leak Alarm Telemetry",
          "Arming/Disarming Activity Monitoring for Families"
        ],
        cta: "Explore Home Security"
      },
      commercial: {
        headline: "Your business. Your people. Your assets.",
        desc: "Enterprise-grade protection engineered for corporate offices, retail chains, financial institutions, warehouses, and critical infrastructure across Jordan.",
        highlights: [
          "Multi-Site Centralized Operations Dashboard",
          "Authorized Opening/Closing Schedule Compliance",
          "Vault, Server Room & Sensitive Area Supervision",
          "Direct Authority Coordination & Priority Dispatch"
        ],
        cta: "Explore Commercial Security"
      }
    },
    difference: {
      eyebrow: "THE CAS DIFFERENCE",
      title: "Technology detects. People respond.",
      lead: "Advanced technology can detect a signal. Professional security specialists give that signal context, urgency, and decisive execution.",
      flow: [
        { title: "Sensor Detection", sub: "Physical Trigger" },
        { title: "Encrypted Transmission", sub: "Sub-Second Uplink" },
        { title: "Operator Evaluation", sub: "Trained Human Intelligence" },
        { title: "Decisive Response", sub: "Authority & Ground Action" }
      ],
      cta: "Learn How We Protect You"
    },
    heritage: {
      year: "1989",
      eyebrow: "JORDANIAN HERITAGE",
      title: "Decades of protecting Jordan.",
      text: "CAS was established in 1989 with a foundational mission to create a safer environment for people, homes, and enterprises in Jordan. Today, that legacy continues through continuous technological innovation, disciplined operations, and an unwavering commitment to dependable service.",
      quote: "Jordan's pioneering security monitoring institution.",
      cta: "About CAS"
    },
    testimonials: {
      eyebrow: "CLIENT PERSPECTIVES",
      title: "Security you can depend on.",
      demoNote: "Demo Preview — Real client case studies available upon consultation.",
      items: [
        {
          quote: "CAS has monitored our corporate headquarters in Amman for over 15 years. Their response time, operator professionalism, and coordination with local authorities are unmatched.",
          author: "Corporate Client",
          role: "Financial Services Sector, Amman"
        },
        {
          quote: "Knowing that CAS is monitoring our home gives my family complete peace of mind, especially when traveling. Their team is always alert and courteous.",
          author: "Residential Villa Owner",
          role: "Abdoun, Amman"
        },
        {
          quote: "The seamless integration of our commercial alarm network across multiple branch locations made CAS the clear and only choice for our enterprise.",
          author: "Commercial Operations Director",
          role: "Retail Group, Jordan"
        }
      ]
    },
    faq: {
      eyebrow: "FREQUENTLY ASKED QUESTIONS",
      title: "Clear answers to essential security questions.",
      items: [
        {
          q: "What is Central Alarm Station (CAS)?",
          a: "CAS (Central Alarm Station) is Jordan's pioneering security monitoring and response company established in 1989. We provide 24/7/365 professional alarm monitoring, security system integration, and coordinated emergency response for residential and commercial properties across Jordan."
        },
        {
          q: "Does CAS provide 24/7 alarm monitoring?",
          a: "Yes. CAS operates a state-of-the-art central monitoring station that runs continuous 24/7/365 operations without interruption. Trained operators evaluate incoming alarm signals in real time and initiate immediate response procedures."
        },
        {
          q: "Does CAS serve both residential and commercial clients?",
          a: "Yes. CAS designs and monitors customized security setups for individual residences, villas, retail stores, corporate headquarters, industrial facilities, and diplomatic properties."
        },
        {
          q: "What happens when an alarm is triggered?",
          a: "When a sensor triggers, an encrypted alert reaches the CAS central monitoring room in sub-seconds. Our security controllers immediately verify the incident, contact designated property keyholders, and coordinate on-ground response and emergency authorities as required."
        },
        {
          q: "Where is CAS located in Jordan and how can we connect?",
          a: "CAS is located on Zahran Street, Building No. 304 in Amman, Jordan. You can reach our 24/7 monitoring dispatch and consultation teams directly at 06-5517057 or 0799085229."
        }
      ]
    },
    ctaBanner: {
      eyebrow: "READY TO PROTECT WHAT MATTERS?",
      title: "Your security starts with the right response.",
      desc: "Speak with a CAS security consultant about an alarm monitoring and response solution engineered around your property, family, and assets.",
      primaryCta: "Request a Consultation",
      callCta: "Call Dispatch: 06-5517057"
    },
    contact: {
      title: "Connect with CAS",
      addressLabel: "Headquarters",
      address: "Amman — Zahran Street — Building No. 304, Jordan",
      phoneLabel: "24/7 Monitoring Hotline",
      phones: ["06-5517057", "06-5537248"],
      mobileLabel: "Direct Mobile / WhatsApp",
      mobiles: ["0799085229", "0799464424"],
      availabilityLabel: "Operating Hours",
      availability: "24 Hours / 7 Days / 365 Days a Year"
    },
    footer: {
      brandDesc: "Central Alarm Station (CAS) is Jordan's first registered alarm monitoring institution, delivering 24/7/365 protection, technological integration, and coordinated security response since 1989.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Core Services",
      emergencyDispatch: "24/7 Emergency Dispatch",
      emergencyNote: "For registered clients undergoing active emergencies, our central station is staffed around the clock.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "© 2026 Central Alarm Station (CAS). All rights reserved. Amman, Jordan."
    },
    modal: {
      title: "Request a Security Consultation",
      sub: "Our security engineering team will review your requirements and design a tailored monitoring and response plan.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Tariq Al-Majali",
      phoneLabel: "Phone / Mobile Number",
      phonePlaceholder: "e.g. 079 000 0000",
      typeLabel: "Property Type",
      typeResidential: "Residential (Villa / Apartment)",
      typeCommercial: "Commercial (Office / Store / Warehouse)",
      typeEnterprise: "Enterprise / Multi-Site Institution",
      messageLabel: "Security Requirements (Optional)",
      messagePlaceholder: "Briefly describe your location and security needs...",
      submit: "Submit Consultation Request",
      successMsg: "Thank you. Your consultation request has been received. A CAS security specialist will contact you shortly.",
      close: "Close"
    }
  },

  ar: {
    meta: {
      title: "المحطة المركزية للإنذار (CAS) الأردن | مراقبة أمنية واستجابة 24/7",
      description: "المحطة المركزية للإنذار (CAS) توفر خدمات مراقبة الإنذار على مدار الساعة، والتكامل الأمني والاستجابة المنسقة للمنازل والمنشآت في الأردن. تأسست عام 1989."
    },
    nav: {
      brandSub: "المحطة المركزية للإنذار",
      established: "تأسست عام 1989",
      home: "الرئيسية",
      about: "من نحن",
      solutions: "الحلول الأمنية",
      howItWorks: "آلية العمل",
      testimonials: "آراء العملاء",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      cta: "اطلب استشارة",
      status: "المراقبة الأمنية نشطة على مدار الساعة في الأردن",
      langSwitch: "English"
    },
    hero: {
      badge: "أول محطة مركزية مسجلة للإنذار في الأردن • تأسست عام 1989",
      scene1: {
        eyebrow: "المحطة المركزية للإنذار — CAS",
        headline: "الأمن يبدأ بالمراقبة.",
        sub: "الحماية الفعّالة تبدأ بمعرفة ما يحدث، في كل ثانية وبأعلى درجات الدقة."
      },
      scene2: {
        eyebrow: "مراقبة على مدار الساعة 24 / 7 / 365",
        headline: "نراقب دائماً.",
        sub: "فريق أمني متخصص يتابع إشارات الإنذار ويقيّمها في الوقت الحقيقي دون انقطاع."
      },
      scene3: {
        eyebrow: "حماية متصلة وفورية",
        headline: "كل إشارة مهمة.",
        sub: "من موقعك مباشرة إلى المختصين المستعدين للتقييم والتدخل السريع."
      },
      scene4: {
        eyebrow: "مركز المراقبة المركزي — CAS",
        headline: "التكنولوجيا تلتقي بالخبرة البشرية.",
        sub: "كل إنذار يتم تقييمه فوراً من قبل كوادر أمنية مدربة للتعامل مع مختلف الحالات."
      },
      scene5: {
        eyebrow: "الاستجابة والتنسيق السريع",
        headline: "من الاكتشاف إلى الاستجابة.",
        sub: "استجابة سريعة ومنسقة وتنسيق مباشر مع الجهات المختصة عندما تكون كل ثانية حاسمة."
      },
      scene6: {
        eyebrow: "المحطة المركزية للإنذار — CAS",
        headline: "التكنولوجيا تكتشف. CAS تستجيب.",
        sub: "مراقبة أمنية موثوقة واستجابة ميدانية في الأردن منذ عام 1989.",
        primaryCta: "اطلب استشارة",
        secondaryCta: "اكتشف حلولنا"
      },
      timelineLabels: ["المراقبة", "الاكتشاف", "الاتصال", "التحقق", "الاستجابة", "الحماية"],
      livePulse: "بث الإشارات المباشر",
      videoMute: "كتم / تشغيل الصوت",
      videoPlay: "تشغيل / إيقاف الفيديو"
    },
    trust: {
      eyebrow: "إرث عريق في الحماية",
      title: "الأمن مبني على الثقة منذ 1989.",
      p1: "منذ عام 1989، كرّست المحطة المركزية للإنذار (CAS) جهودها لحماية الأفراد والممتلكات في المملكة الأردنية الهاشمية من خلال المراقبة المركزية المتطورة للإنذار، والتقنيات الأمنية المتقدمة، والاستجابة الميدانية المنسقة.",
      p2: "بصفتها أول محطة مركزية مسجلة للإنذار في الأردن، تجمع CAS بين عقود من الخبرة العملية العريقة وأحدث أنظمة المراقبة الرقمية لتقديم أمن لا يتزعزع وراحة بال مطلقة.",
      storyCta: "اكتشف قصة تأسيسنا",
      stats: [
        { value: "1989", label: "سنة التأسيس", sub: "أول محطة مركزية مسجلة في الأردن" },
        { value: "5000", suffix: "+", label: "عميل محمي", sub: "منازل ومنشآت تجارية ومؤسسية" },
        { value: "24/7", suffix: "/365", label: "مراقبة متواصلة", sub: "جاهزية تشغيلية مستمرة دون توقف" },
        { value: "35", suffix: "+ عاماً", label: "خبرة أمنية", sub: "في حماية الممتلكات الأردنية" }
      ]
    },
    whyUs: {
      eyebrow: "لماذا CAS",
      title: "أكثر من مجرد مراقبة. استجابة أمنية متكاملة.",
      description: "الأمن لا يقتصر على مجرد إطلاق إشارة الإنذار، بل يكمن في فهم معنى الإشارة فوراً، وتقييم طبيعتها، واتخاذ الإجراء الميداني المناسب دون تأخير.",
      pillars: [
        {
          num: "01",
          title: "السلامة أولاً",
          desc: "تم تصميم كافة الإجراءات والبروتوكولات حول هدف أسمى: حماية الأرواح، الممتلكات، وما له قيمة حقيقية في حياتك."
        },
        {
          num: "02",
          title: "الثقة والاعتمادية",
          desc: "أكثر من 35 عاماً من العمل المؤسسي المتواصل، وبنية تحتية معتمدة وتنسيق فعال مع الجهات المعنية."
        },
        {
          num: "03",
          title: "المسؤولية الإنسانية",
          desc: "وراء كل إنذار إنسان أو عائلة أو منشأة تعتمد علينا، ولهذا نتعامل مع كل تنبيه باهتمام وحرص مطلق."
        }
      ]
    },
    solutions: {
      eyebrow: "الحلول الأمنية",
      title: "حماية مصممة خصيصاً لاحتياجاتك.",
      intro: "توفر CAS حلولاً أمنية متكاملة مخصصة للمنازل والمنشآت التجارية. يجمع نهجنا بين أحدث تقنيات الإنذار والرقابة البشرية الاحترافية لضمان أقصى درجات الأمان.",
      items: [
        {
          id: "alarm-monitoring",
          num: "01",
          tag: "القدرة الأساسية",
          title: "المراقبة المركزية للإنذار 24/7",
          desc: "يقوم فريق المراقبة المتخصص بمتابعة الإشارات على مدار الساعة، وتقييم التنبيهات في الوقت الحقيقي للتعامل مع أي خطر قبل تفاقمه.",
          features: ["مراقبة متعددة المناطق في الوقت الحقيقي", "تنبيهات الاقتحام والسرقة والحريق والطوارئ", "قنوات اتصال خلوية ورقمية احتياطية"],
          cta: "تفاصيل الخدمة"
        },
        {
          id: "ground-response",
          num: "02",
          tag: "طوارئ واستجابة",
          title: "الاتصال المباشر والاستجابة الميدانية",
          desc: "في حالات الطوارئ، كل ثانية تصنع فارقاً. توفر CAS تنسيقاً سريعاً ومباشراً مع الجهات الرسمية المعنية وخدمات الطوارئ وتوجيه فرق الاستجابة الميدانية.",
          features: ["تنسيق مع الأمن العام والدفاع المدني", "جاهزية تحريك فرق الاستجابة الميدانية", "التحقق المباشر من تفاصيل الحادث"],
          cta: "تفاصيل الخدمة"
        },
        {
          id: "security-integration",
          num: "03",
          tag: "هندسة أمنية",
          title: "التكامل الأمني المتقدم",
          desc: "تتكامل أنظمة CAS مع مختلف أجهزة الإنذار وكاميرات المراقبة وأنظمة الدخول، مما يرفع الكفاءة التشغيلية وموثوقية الحماية.",
          features: ["التوافق مع مختلف الأجهزة الحديثة والتقليدية", "أجهزة إرسال مزدوجة IP و GSM", "ربط المستشعرات الذكية ومحيط المنشأة"],
          cta: "تفاصيل الخدمة"
        },
        {
          id: "custom-solutions",
          num: "04",
          tag: "حلول مخصصة",
          title: "حلول أمنية مخصصة",
          desc: "لكل موقع متطلبات أمنية فريدة. تطور CAS خطط مراقبة ملائمة للفلل السكنية، المقرات المؤسسية، البنوك، والمرافق الحساسة.",
          features: ["بروتوكولات تصعيد مصممة لكل عميل", "مراقبة متكاملة للفروع والمنشآت المتعددة", "حماية متقدمة للقصور والفلل السكنية"],
          cta: "تفاصيل الخدمة"
        },
        {
          id: "incident-analytics",
          num: "05",
          tag: "تحليلات وتقارير",
          title: "تقارير الحوادث والتحليلات الأمنية",
          desc: "تزودك التقارير التفصيلية برؤى دقيقة حول الوضع الأمني لمنشأتك، مما يساعد في اتخاذ القرارات السليمة لتعزيز الحماية المستمرة.",
          features: ["سجل تاريخي شامل لجميع إشارات الإنذار", "تتبع مواعيد فتح وإغلاق المنشأة وتشغيل النظام", "تدقيق أمني دوري للأداء التشغيلي"],
          cta: "تفاصيل الخدمة"
        }
      ]
    },
    howItWorks: {
      eyebrow: "آلية العمل",
      title: "من الإشارة إلى الاستجابة.",
      subtitle: "بروتوكول عملياتي متكامل ينفذ خلال ثوانٍ معدودة من لحظة استشعار أي خطر.",
      steps: [
        {
          num: "01",
          name: "الربط",
          badge: "إرسال الإشارة",
          title: "الربط الأمني للنظام",
          desc: "يتم ربط أجهزة الإنذار والمستشعرات في موقعك مع شبكة CAS المركزية عبر قنوات اتصال مشفرة ومزدوجة تضمن عدم انقطاع الإشارة."
        },
        {
          num: "02",
          name: "المراقبة",
          badge: "متابعة مستمرة 24/7",
          title: "المراقبة على مدار الساعة",
          desc: "يتابع ضباط المراقبة المعتمدون تدفق الإشارات الأمنية على مدار 24 ساعة يومياً طوال العام بأعلى درجات اليقظة."
        },
        {
          num: "03",
          name: "التحقق",
          badge: "خبرة بشرية",
          title: "التحقق والتقييم الفوري",
          desc: "يتم فحص وتحليل الإشارة فور وصولها لتحديد طبيعة الحالة واستبعاد الإنذارات الخاطئة والتعامل مع الطوارئ الحقيقية خلال ثوانٍ."
        },
        {
          num: "04",
          name: "الاستجابة",
          badge: "إجراء منسق",
          title: "الاستجابة والتنسيق الفوري",
          desc: "تنفذ CAS بروتوكول الاستجابة المعتمد فوراً بإشعار أصحاب الموقع، والتنسيق المباشر مع الجهات الرسمية وفرق الطوارئ."
        }
      ]
    },
    sectors: {
      eyebrow: "القطاعات التي نحميها",
      title: "حماية مصممة لما يهمك حقاً.",
      tabResidential: "حماية المنازل والفلل",
      tabCommercial: "حماية المنشآت والشركات",
      residential: {
        headline: "منزلك. عائلتك. راحة بالك.",
        desc: "توفر CAS حماية متخصصة للفلل والشقق السكنية والمجمعات الخاصة من خلال مراقبة الإنذار على مدار الساعة، والاستجابة لطوارئ الذعر، وحماية المحيط الخارجي.",
        highlights: [
          "مراقبة 24/7 للإنذار الصامت ضد الاقتحام والسرقة",
          "أزرار طوارئ واستجابة فورية للحالات الطبية والحرجة",
          "استشعار حرائق الدخان والحرارة وتسرب المياه",
          "متابعة سجلات تفعيل وتعطيل النظام لأمان العائلة"
        ],
        cta: "استكشف أمن المنازل"
      },
      commercial: {
        headline: "شركتك. فريقك. أصولك.",
        desc: "حلول حماية مؤسسية مصممة للمقرات الإدارية، وسلاسل المحلات التجارية، والمؤسسات المصرفية، والمستودعات والمرافق الحيوية في الأردن.",
        highlights: [
          "لوحة تحكم موحدة لإدارة ومراقبة الفروع المتعددة",
          "متابعة التزام مواعيد فتح وإغلاق الفروع المصرح بها",
          "حماية مشددة لغرف الخزائن والسيرفرات والمناطق الحساسة",
          "تنسيق مباشر مع الأجهزة الأمنية وأولوية الاستجابة"
        ],
        cta: "استكشف الحلول التجارية"
      }
    },
    difference: {
      eyebrow: "ما يميز CAS",
      title: "التكنولوجيا تكتشف. الإنسان يستجيب.",
      lead: "التقنيات الحديثة قادرة على رصد الإشارة، لكن المختصين الأمنيين في CAS هم من يمنحون هذه الإشارة معناها وسرعة اتخاذ القرار الحاسم.",
      flow: [
        { title: "استشعار الخطر", sub: "مستشعرات الموقع" },
        { title: "إرسال مشفر", sub: "اتصال فوري فائق السرعة" },
        { title: "تقييم المشغل الأمني", sub: "خبرة بشرية مدربة" },
        { title: "استجابة حاسمة", sub: "تنسيق ميداني ورسمي" }
      ],
      cta: "تعرف على أسلوب حمايتنا"
    },
    heritage: {
      year: "1989",
      eyebrow: "إرث أردني عريق",
      title: "عقود من حماية الأردن.",
      text: "تأسست المحطة المركزية للإنذار (CAS) في عام 1989 برؤية تهدف إلى بناء بيئة أكثر أماناً للمواطنين والمؤسسات في الأردن. واليوم، يتواصل هذا الإرث العريق من خلال التطوير التقني المستمر، والانضباط العملياتي، والالتزام المطلق بالخدمة الموثوقة.",
      quote: "المؤسسة الرائدة والأولى في المراقبة المركزية للإنذار في الأردن.",
      cta: "عن شركة CAS"
    },
    testimonials: {
      eyebrow: "ثقة عملائنا",
      title: "أمن يمكنك الاعتماد عليه دائماً.",
      demoNote: "عرض تجريبي للواجهة — تتوفر دراسات الحالة الفعلية للعملاء عند طلب الاستشارة.",
      items: [
        {
          quote: "تتولى CAS مراقبة مقر شركتنا الرئيسي في عمّان منذ أكثر من 15 عاماً. سرعة استجابتهم واحترافية مشغليهم وتنسيقهم الأمني لا مثيل لها.",
          author: "عميل تجاري",
          role: "قطاع الخدمات المالية، عمّان"
        },
        {
          quote: "معرفتنا بأن CAS تراقب منزلنا تمنح عائلتي راحة بال كاملة، خاصة أثناء السفر خارج البلاد. فريقهم متيقظ دائماً وقمة في اللباقة.",
          author: "مالك فيلا سكنية",
          role: "منطقة عبدون، عمّان"
        },
        {
          quote: "سهولة الربط المركزي لشبكة أجهزة الإنذار في كافة فروعنا في الأردن جعلت CAS خيارنا الوحيد والشريك الأمني الأنسب لمؤسستنا.",
          author: "مدير العمليات التجارية",
          role: "مجموعة تجارية كبرى، الأردن"
        }
      ]
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "إجابات واضحة ومباشرة لأهم الأسئلة الأمنية.",
      items: [
        {
          q: "ما هي المحطة المركزية للإنذار (CAS)؟",
          a: "CAS (المحطة المركزية للإنذار) هي أول شركة أردنية متخصصة في المراقبة المركزية للإنذار والاستجابة الأمنية تأسست عام 1989. نقدم خدمات مراقبة الإنذار على مدار الساعة 24/7/365، وتكامل الأنظمة الأمنية، والاستجابة المنسقة للطوارئ للمنازل والمنشآت في الأردن."
        },
        {
          q: "هل تقدم CAS خدمة مراقبة الإنذار على مدار 24 ساعة؟",
          a: "نعم. تدير CAS محطة مراقبة مركزية متطورة تعمل على مدار 24 ساعة يومياً طوال 365 يوماً في السنة دون أي توقف، حيث يقوم مشغلون أمنيون مدربون بتقييم الإشارات الواردة فوراً واتخاذ الإجراءات المعتمدة."
        },
        {
          q: "هل تخدم CAS كلاً من المنازل والمنشآت التجارية؟",
          a: "نعم. تصمم وتوفر CAS حلول مراقبة أمنية متخصصة للفلل والمنازل السكنية، وكذلك للمحلات، المكاتب، المقرات الرئيسية، البنوك، والمواقع الحساسة."
        },
        {
          q: "ماذا يحدث عند انطلاق جهاز الإنذار في موقعي؟",
          a: "عند استشعار أي خطر، تصل إشارة مشفرة إلى غرفة المراقبة المركزية في CAS خلال أجزاء من الثانية. يتحقق فريق المراقبة فوراً من الإشارة ويتواصل مع المفوضين وينسق الاستجابة الميدانية والجهات الرسمية المختصة حسب الإجراءات المعتمدة."
        },
        {
          q: "أين يقع مقر CAS في الأردن وكيف يمكننا التواصل؟",
          a: "يقع مقر CAS في مدينة عمّان — شارع زهران — عمارة رقم 304. يمكنك التواصل مباشرة مع غرفة المراقبة وخدمة العملاء عبر الأرقام: 06-5517057 أو 0799085229."
        }
      ]
    },
    ctaBanner: {
      eyebrow: "هل أنت مستعد لحماية ما يهمك؟",
      title: "أمنك يبدأ بالاستجابة الصحيحة.",
      desc: "تحدث مع مستشاري الحماية في CAS لتصميم حل متكامل لمراقبة الإنذار والاستجابة يناسب منزلك أو منشأتك بدقة متناهية.",
      primaryCta: "اطلب استشارة مجانية",
      callCta: "اتصل بغرفة العمليات: 06-5517057"
    },
    contact: {
      title: "تواصل مع CAS",
      addressLabel: "المقر الرئيسي",
      address: "عمّان — شارع زهران — عمارة رقم 304، المملكة الأردنية الهاشمية",
      phoneLabel: "هواتف المراقبة والعمليات 24/7",
      phones: ["06-5517057", "06-5537248"],
      mobileLabel: "الهاتف الخلوي المباشر / واتساب",
      mobiles: ["0799085229", "0799464424"],
      availabilityLabel: "أوقات الجاهزية والعمل",
      availability: "24 ساعة في اليوم / 7 أيام في الأسبوع / 365 يوماً في العام"
    },
    footer: {
      brandDesc: "المحطة المركزية للإنذار (CAS) هي أول مؤسسة مسجلة لمراقبة الإنذار في الأردن، تقدم الحماية المستمرة على مدار الساعة والتكامل التقني والاستجابة الأمنية المنسقة منذ عام 1989.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدماتنا الرئيسية",
      emergencyDispatch: "طوارئ العمليات 24/7",
      emergencyNote: "لعملائنا المشتركين في حالات الطوارئ النشطة، تعمل غرفة العمليات المركزية على مدار الساعة دون انقطاع.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      rights: "© 2026 المحطة المركزية للإنذار (CAS). جميع الحقوق محفوظة. عمّان، الأردن."
    },
    modal: {
      title: "طلب استشارة أمنية متخصصة",
      sub: "سيقوم فريق الهندسة الأمنية في CAS بدراسة متطلبات موقعك وتصميم خطة مراقبة واستجابة مخصصة تماماً.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: طارق المجالي",
      phoneLabel: "رقم الهاتف / الخلوي",
      phonePlaceholder: "مثال: 079 000 0000",
      typeLabel: "نوع المنشأة أو العقار",
      typeResidential: "سكني (فيلا / قصر / شقة)",
      typeCommercial: "تجاري (مكتب / متجر / مستودع)",
      typeEnterprise: "مؤسسي / فروع متعددة / بنك",
      messageLabel: "تفاصيل الاحتياج الأمني (اختياري)",
      messagePlaceholder: "يرجى ذكر الموقع التقريبي وأي متطلبات خاصة...",
      submit: "إرسال طلب الاستشارة",
      successMsg: "شكراً لتواصلك. تم استلام طلب الاستشارة بنجاح، وسيتواصل معك مستشار أمني من CAS في أقرب وقت.",
      close: "إغلاق"
    }
  }
};
