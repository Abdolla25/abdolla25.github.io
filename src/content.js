// ─────────────────────────────────────────────────────────────
// ALL SITE TEXT LIVES HERE. Edit this file, push to master, and
// GitHub Actions rebuilds and deploys the site (about 1–2 minutes).
// Every visible string is { en: "...", ar: "..." }.
// ─────────────────────────────────────────────────────────────

// Site-wide settings: public URL, contact links, default meta description.
export const SITE = {
  url: "https://abdolla25.github.io",
  linkedin: "https://www.linkedin.com/in/abdolla25",
  github: "https://github.com/Abdolla25",
  description: {
    en: "Software engineer with six years of experience. I find the real cause of failures, fix it, and prove the fix.",
    ar: "مهندس برمجيات بخبرة ست سنوات. أصل إلى السبب الحقيقي وراء الأعطال، وأصلحه، وأثبت أن الإصلاح نجح."
  }
};

// Short interface strings (nav, headings, buttons, footer). Every text is { en, ar }.
export const UI = {
  name: {
    en: "Abdulla Zahran",
    ar: "عبدالله زهران"
  },
  nav_work: {
    en: "Work",
    ar: "الأعمال"
  },
  nav_about: {
    en: "About",
    ar: "نبذة"
  },
  nav_consulting: {
    en: "Consulting",
    ar: "الاستشارات"
  },
  lang_label: {
    en: "عربي",
    ar: "English"
  },
  eyebrow: {
    en: "Software Engineer · Cloud & Systems Delivery",
    ar: "مهندس برمجيات · أنظمة سحابية وتسليم"
  },
  h1: {
    en: "I build software systems that stay fast and stable.",
    ar: "أبني أنظمة برمجية سريعة ومستقرة."
  },
  sub: {
    en: "Software engineer with six years of experience. I find the real cause of failures, fix it, and prove the fix.",
    ar: "مهندس برمجيات بخبرة ست سنوات. أصل إلى السبب الحقيقي وراء الأعطال، وأصلحه، وأثبت أن الإصلاح نجح."
  },
  cta1: {
    en: "Contact on LinkedIn",
    ar: "تواصل عبر لينكدإن"
  },
  cta2: {
    en: "See the work",
    ar: "استعرض الأعمال"
  },
  do_h: {
    en: "What I do",
    ar: "مجالات عملي"
  },
  sel_h: {
    en: "Selected work",
    ar: "أعمال مختارة"
  },
  all_work: {
    en: "All case studies",
    ar: "كل دراسات الحالة"
  },
  read: {
    en: "Read case study",
    ar: "اقرأ دراسة الحالة"
  },
  exp_h: {
    en: "Experience",
    ar: "الخبرة"
  },
  skills_h: {
    en: "Tools",
    ar: "الأدوات"
  },
  band_h: {
    en: "Open to consulting and technical discussions",
    ar: "متاح للاستشارات والنقاشات التقنية"
  },
  band_p: {
    en: "Have a system that is slow, unstable or hard to ship? Send me a short note on LinkedIn.",
    ar: "عندك نظام بطيء أو يتعطل أو صعب النشر؟ ابعتلي رسالة قصيرة على لينكدإن."
  },
  back: {
    en: "Back to all work",
    ar: "العودة إلى كل الأعمال"
  },
  g_role: {
    en: "Role",
    ar: "الدور"
  },
  g_ctx: {
    en: "Context",
    ar: "السياق"
  },
  g_result: {
    en: "Result",
    ar: "النتيجة"
  },
  g_stack: {
    en: "Stack",
    ar: "التقنيات"
  },
  work_h: {
    en: "Work",
    ar: "الأعمال"
  },
  work_p: {
    en: "Short write-ups of problems I worked on: what was wrong, what I did, what changed. No client or product names.",
    ar: "كتابات قصيرة عن مشكلات اشتغلت عليها: ما كان الخلل، وماذا فعلت، وما الذي تغيّر. بدون أسماء عملاء أو منتجات."
  },
  footer: {
    en: "Egypt",
    ar: "مصر"
  }
};

// The four numbers under the hero on the home page.
export const STATS = [
  {
    value: "6+",
    label: {
      en: "years of experience in live systems",
      ar: "سنوات خبرة في أنظمة تعمل فعليًا"
    }
  },
  {
    value: "35",
    label: {
      en: "microservices on one platform",
      ar: "خدمة على منصة واحدة"
    }
  },
  {
    value: "2M+",
    label: {
      en: "users on the platform I work on",
      ar: "مستخدم للمنصة التي أعمل عليها"
    }
  },
  {
    value: "100K+",
    label: {
      en: "client organizations",
      ar: "جهة عميلة"
    }
  }
];

// The three "What I do" cards on the home page.
export const WHAT_I_DO = [
  {
    title: {
      en: "Performance",
      ar: "الأداء"
    },
    text: {
      en: "Slow queries and heavy pages on large MySQL and Postgres databases. I measure, fix the cause, and confirm the results did not change.",
      ar: "استعلامات بطيئة وصفحات ثقيلة على قواعد بيانات كبيرة. أقيس، وأعالج السبب، وأتأكد أن النتائج لم تتغير."
    }
  },
  {
    title: {
      en: "Production reliability",
      ar: "ثبات الأنظمة"
    },
    text: {
      en: "Tracing intermittent failures to their root, and building the tooling and process that stop them coming back.",
      ar: "تتبع الأعطال المتقطعة حتى جذرها، وبناء الأدوات والإجراءات التي تمنع تكرارها."
    }
  },
  {
    title: {
      en: "Delivery and leadership",
      ar: "التسليم والقيادة"
    },
    text: {
      en: "Automated delivery, integrations and system design, leading small teams to ship.",
      ar: "نشر آلي وتكاملات وتصميم أنظمة، مع قيادة فرق صغيرة للتسليم."
    }
  }
];

// Which case studies appear on the home page, in order (use the case slug).
export const FEATURED = [
  "admin-list-performance",
  "platform-delivery",
  "video-fetch-failures",
  "bug-management",
  "appgain-microservices",
  "legal-pm-platform"
];

// Timeline on Home and About. Newest first.
export const EXPERIENCE = [
  {
    when: {
      en: "2026 – now",
      ar: "2026 – الآن"
    },
    title: {
      en: "Technical Lead",
      ar: "قائد تقني"
    },
    org: {
      en: "Freelance · Legal project-management SaaS, Saudi Arabia",
      ar: "عمل حر · منصة اشتراكات لإدارة مشاريع قانونية، السعودية"
    },
    text: {
      en: "Lead a three-person team. Own servers, design and delivery.",
      ar: "أقود فريقًا من ثلاثة. مسؤول عن الخوادم والتصميم والتسليم."
    }
  },
  {
    when: {
      en: "Oct 2024 – now",
      ar: "أكتوبر 2024 – الآن"
    },
    title: {
      en: "Senior Software Engineer & Bug Management Lead",
      ar: "مهندس برمجيات أول ومسؤول إدارة الأخطاء"
    },
    org: {
      en: "Crocosoft · Remote",
      ar: "Crocosoft · عن بُعد"
    },
    text: {
      en: "Server development for a cybersecurity platform serving many organizations on AWS. Bug management lead since January 2026.",
      ar: "تطوير خوادم منصة أمن سيبراني تخدم مؤسسات كثيرة على AWS. وأدير أخطاء الفريق منذ يناير 2026."
    }
  },
  {
    when: {
      en: "Feb 2023 – Jun 2025",
      ar: "فبراير 2023 – يونيو 2025"
    },
    title: {
      en: "Backend Engineer, then part-time Tech Lead",
      ar: "مهندس برمجيات، ثم قائد تقني بدوام جزئي"
    },
    org: {
      en: "Appgain",
      ar: "Appgain"
    },
    text: {
      en: "Built 10+ Flask services with full automated delivery and the team's first monitoring, then handed them to a new team.",
      ar: "بنيت أكثر من 10 خدمات Flask بنشر آلي كامل وأول مراقبة للفريق، ثم سلّمتها لفريق جديد."
    }
  },
  {
    when: {
      en: "Nov 2021 – Dec 2022",
      ar: "نوفمبر 2021 – ديسمبر 2022"
    },
    title: {
      en: "Backend Engineer",
      ar: "مهندس برمجيات"
    },
    org: {
      en: "Healthcare organization (confidential)",
      ar: "جهة طبية (سرّية)"
    },
    text: {
      en: "Replaced a paper procurement process; approvals 80% faster.",
      ar: "استبدلت دورة مشتريات ورقية بنظام إلكتروني؛ الموافقات أسرع بنسبة 80%."
    }
  }
];

// Education card on About.
export const EDUCATION = {
  degree: {
    en: "B.E., Systems and Biomedical Engineering",
    ar: "بكالوريوس الهندسة، النظم والهندسة الطبية الحيوية"
  },
  school: {
    en: "Cairo University · 2016 – 2021",
    ar: "جامعة القاهرة · 2016 – 2021"
  }
};

// Languages card on About.
export const LANGUAGES = {
  title: {
    en: "Languages",
    ar: "اللغات"
  },
  text: {
    en: "Arabic (native). English (strong technical).",
    ar: "العربية (لغة أم). الإنجليزية (تقنية قوية)."
  }
};

// Tool chips on Home and About (same text in both languages).
export const SKILLS = [
  "Python",
  "Flask",
  "Django",
  "MySQL",
  "PostgreSQL",
  "AWS Lambda",
  "API Gateway",
  "Cognito",
  "S3 / SES",
  "Docker",
  "GitHub Actions",
  "GitLab CI",
  "Prometheus",
  "Sentry",
  "TypeScript",
  "Next.js",
  "Terraform"
];

// Paragraphs at the top of the About page.
export const ABOUT = [
  {
    en: "Software engineer in Egypt with six years building systems people actually use.",
    ar: "مهندس برمجيات في مصر، خبرة ست سنوات في أنظمة يستخدمها الناس فعليًا."
  },
  {
    en: "I care about the parts that break in operation: slow queries, timeouts, stuck deploys. I find the real cause, prove the fix, and leave something that keeps the problem from coming back.",
    ar: "أهتم بالأجزاء التي تتعطل أثناء التشغيل: استعلامات بطيئة، وانتهاء مهلات، ونشر يتعثر. أصل إلى السبب الحقيقي، وأثبت الإصلاح، وأترك ما يمنع عودة المشكلة."
  },
  {
    en: "I lead as well as build. At Crocosoft I triage the team's bugs and write its delivery reports. With clients I lead a small team and own system design.",
    ar: "أقود كما أبني. في Crocosoft أفرز أخطاء الفريق وأوزعها وأكتب تقارير التسليم. ومع العملاء أقود فريقًا صغيرًا وأتولى تصميم النظام."
  }
];

// Everything on the Consulting page.
export const CONSULTING = {
  h: {
    en: "Consulting",
    ar: "الاستشارات"
  },
  lead: {
    en: "Technical discussions and short engagements for teams that need an experienced eye on their systems.",
    ar: "نقاشات تقنية وارتباطات قصيرة للفرق التي تحتاج عينًا خبيرة على أنظمتها."
  },
  help_h: {
    en: "Where I can help",
    ar: "أين أستطيع المساعدة"
  },
  items: [
    {
      title: {
        en: "Database performance",
        ar: "أداء قواعد البيانات"
      },
      text: {
        en: "Slow queries and heavy pages: find the cause, fix it, and prove the results match.",
        ar: "استعلامات بطيئة وصفحات ثقيلة: أحدد السبب وأصلحه وأثبت تطابق النتائج."
      }
    },
    {
      title: {
        en: "Production debugging",
        ar: "تتبع أعطال الأنظمة العاملة"
      },
      text: {
        en: "Intermittent failures and timeouts that do not reproduce on demand.",
        ar: "أعطال متقطعة وانتهاء مهلات لا تتكرر عند الطلب."
      }
    },
    {
      title: {
        en: "Integrations",
        ar: "التكاملات"
      },
      text: {
        en: "Payments, messaging, video and email providers.",
        ar: "مزودو الدفع والمراسلة والفيديو والبريد."
      }
    },
    {
      title: {
        en: "CI/CD and deployment",
        ar: "أتمتة النشر"
      },
      text: {
        en: "Automated delivery, multiple environments, full automation.",
        ar: "نشر آلي وبيئات متعددة وأتمتة كاملة."
      }
    },
    {
      title: {
        en: "Architecture and delivery",
        ar: "تصميم الأنظمة والتسليم"
      },
      text: {
        en: "Server design for subscription products, including leading a small team.",
        ar: "تصميم أنظمة خوادم لمنتجات اشتراكات، بما فيها قيادة فريق صغير."
      }
    }
  ],
  start_h: {
    en: "How to start",
    ar: "كيف نبدأ"
  },
  start_p: {
    en: "Send a short note on LinkedIn with what you are working on and what is not working. I will reply with whether I can help and how.",
    ar: "ابعتلي رسالة قصيرة على لينكدإن فيها ما تعمل عليه وما الذي لا يعمل، وسأرد عليك بما إذا كنت أستطيع المساعدة وكيف."
  }
};

// Case studies. Each one becomes /en/work/<slug> and /ar/work/<slug>.
// To add one: copy a block, give it a new unique slug, fill en + ar. The build creates the pages.
// body = the sections of the write-up, in order.
export const CASES = [
  {
    slug: "admin-list-performance",
    tag: {
      en: "Performance",
      ar: "الأداء"
    },
    org: {
      en: "Crocosoft",
      ar: "Crocosoft"
    },
    title: {
      en: "Making a slow admin client list fast",
      ar: "تسريع قائمة العملاء البطيئة في لوحة الإدارة"
    },
    sum: {
      en: "A page that took about two minutes. I rebuilt it 3 to 4 times faster, with proof the results did not change.",
      ar: "صفحة كانت تستغرق نحو دقيقتين. أعدت بناءها فصارت أسرع 3 إلى 4 مرات، مع إثبات أن النتائج لم تتغير."
    },
    role: {
      en: "Backend engineer",
      ar: "مهندس برمجيات"
    },
    result: {
      en: "About 25 to 28 s down to 7 to 9 s, identical results",
      ar: "من نحو 25 إلى 28 ثانية إلى 7 إلى 9 ثوانٍ، بنتائج مطابقة"
    },
    stack: "Python · Flask · MySQL · Docker",
    body: [
      {
        heading: {
          en: "Problem",
          ar: "المشكلة"
        },
        text: {
          en: "Some admins could not open certain client accounts. The list took about two minutes then failed, search was slow, and the data is tens of millions of rows.",
          ar: "تعذّر على بعض المشرفين فتح حسابات عملاء معيّنة. القائمة تستغرق نحو دقيقتين ثم تفشل، والبحث بطيء، والبيانات عشرات الملايين من الصفوف."
        }
      },
      {
        heading: {
          en: "Approach",
          ar: "المنهج"
        },
        text: {
          en: "I profiled the query on a copy of live data. Most of the slowness came from table joins feeding columns only needed for visible rows. The list now skips those joins and fills the columns for the roughly 200 visible rows; sorting on those columns still uses the original query.",
          ar: "حلّلت الاستعلام على نسخة من بيانات التشغيل. معظم البطء من ربط جداول يغذي أعمدة لا تلزم إلا للصفوف الظاهرة. جعلت القائمة تتجاوز هذا الربط وتملأ الأعمدة لنحو 200 صف فقط، وبقي الفرز على هذه الأعمدة على الاستعلام الأصلي."
        }
      },
      {
        heading: {
          en: "Verification",
          ar: "التحقق"
        },
        text: {
          en: "I wrote tests comparing count, order and values between the old and new queries across representative cases. One sort path was left unchanged because the faster version could not match it exactly.",
          ar: "كتبت اختبارات تقارن العدد والترتيب والقيم بين الاستعلامين في حالات تمثيلية. تُرك مسار فرز واحد دون تغيير لأن النسخة الأسرع لا تطابقه تمامًا."
        }
      }
    ]
  },
  {
    slug: "video-fetch-failures",
    tag: {
      en: "Production debugging",
      ar: "تتبع أعطال الإنتاج"
    },
    org: {
      en: "Crocosoft",
      ar: "Crocosoft"
    },
    title: {
      en: "Tracing intermittent video failures to a rate limit",
      ar: "تتبع أعطال فيديو متقطعة وصولًا إلى حدّ الطلبات"
    },
    sum: {
      en: "An error that appeared at random across web and mobile. I traced it to one lookup pattern and fixed it with a reversible plan.",
      ar: "خطأ يظهر عشوائيًا على الويب والموبايل. تتبعته حتى نمط بحث واحد وأصلحته بخطة قابلة للتراجع."
    },
    role: {
      en: "Backend engineer",
      ar: "مهندس برمجيات"
    },
    result: {
      en: "Passed dev testing; reusable upload toolkit built",
      ar: "اجتاز اختبار بيئة التطوير؛ وبُنيت أداة رفع قابلة لإعادة الاستخدام"
    },
    stack: "Cloudflare Stream · MySQL · Flask",
    body: [
      {
        heading: {
          en: "Problem",
          ar: "المشكلة"
        },
        text: {
          en: "Users saw an intermittent \"failed to fetch training\" error across web and Microsoft Teams, including mobile. It did not reproduce on demand.",
          ar: "ظهر للمستخدمين خطأ متقطع «فشل تحميل التدريب» عبر الويب وMicrosoft Teams، بما فيها الموبايل، ولم يكن يتكرر عند الطلب."
        }
      },
      {
        heading: {
          en: "Root cause",
          ar: "السبب الجذري"
        },
        text: {
          en: "Every view looked up its video by name with the provider. Under load that hit the request limit, so failures only appeared when traffic was high.",
          ar: "كل عرض كان يبحث عن الفيديو باسمه لدى المزوّد. تحت الضغط يبلغ ذلك سقف الطلبات، فلا تظهر الأعطال إلا عند ارتفاع الحركة."
        }
      },
      {
        heading: {
          en: "Plan",
          ar: "الخطة"
        },
        text: {
          en: "A staged fix: store the provider's video ID at upload, fix the incoming notification data, backfill old records, then read by ID only. Each stage has a rollback path.",
          ar: "إصلاح على مراحل: تخزين معرّف الفيديو عند الرفع، وإصلاح الإشعارات الواردة، وتعبئة السجلات القديمة، ثم البحث بالمعرّف فقط. لكل مرحلة مسار تراجع."
        }
      },
      {
        heading: {
          en: "Along the way",
          ar: "في الطريق"
        },
        text: {
          en: "The work also produced a reusable Python toolkit for bulk uploads and caption management.",
          ar: "وأنتج العمل أداة Python قابلة لإعادة الاستخدام للرفع الجماعي وإدارة الترجمات."
        }
      }
    ]
  },
  {
    slug: "email-infrastructure-decision",
    tag: {
      en: "Architecture",
      ar: "المعمارية"
    },
    org: {
      en: "Crocosoft",
      ar: "Crocosoft"
    },
    title: {
      en: "An email migration decision that made test environments safe",
      ar: "قرار ترحيل البريد الذي جعل بيئات الاختبار آمنة"
    },
    sum: {
      en: "After a move to a new email provider flooded real inboxes, I wrote the decision record that fixed it.",
      ar: "بعد أن أغرق الانتقال إلى مزوّد بريد جديد صناديق بريد حقيقية، كتبت سجل القرار الذي عالج ذلك."
    },
    role: {
      en: "Author of the architecture decision",
      ar: "صاحب قرار المعمارية"
    },
    result: {
      en: "Real sends locked to production; one bounded test send per deploy",
      ar: "الإرسال الحقيقي مقصور على الإنتاج؛ مع إرسال اختباري محدود لكل نشر"
    },
    stack: "AWS SES · SendGrid · Lambda",
    body: [
      {
        heading: {
          en: "Problem",
          ar: "المشكلة"
        },
        text: {
          en: "Moving email templates to a new provider multiplied mail sent from test environments by about ten. Real inboxes started rejecting it.",
          ar: "نقل قوالب البريد إلى مزوّد جديد ضاعف البريد المرسَل من بيئات الاختبار نحو عشر مرات، وبدأت صناديق حقيقية ترفض الرسائل."
        }
      },
      {
        heading: {
          en: "Approach",
          ar: "المنهج"
        },
        text: {
          en: "I mapped the whole email path from the code, then wrote a decision record balancing cost, reliability and test safety. The rules: only the live environment sends real email, others log and skip, one bounded test send runs per deploy, and both providers pass through one shared layer.",
          ar: "رسمت خريطة كاملة لمسار البريد من الشيفرة، ثم كتبت سجل قرار يوازن التكلفة والموثوقية وسلامة الاختبارات. القواعد: بيئة التشغيل وحدها ترسل بريدًا حقيقيًا، وغيرها يسجّل ويتخطى، مع إرسال اختباري محدود واحد لكل نشر، ويمر المزوّدان عبر طبقة واحدة."
        }
      },
      {
        heading: {
          en: "Outcome",
          ar: "المحصلة"
        },
        text: {
          en: "The team accepted the design. The per-deploy test send keeps the integration healthy without risking another flood.",
          ar: "اعتمد الفريق التصميم. الإرسال الاختباري لكل نشر يبقي التكامل سليمًا دون خطر فيضان جديد."
        }
      }
    ]
  },
  {
    slug: "database-risk-detector",
    tag: {
      en: "Reliability tooling",
      ar: "أدوات الموثوقية"
    },
    org: {
      en: "Crocosoft",
      ar: "Crocosoft"
    },
    title: {
      en: "A CI check that flags risky database changes",
      ar: "فحص آلي ينبّه إلى تغييرات قواعد البيانات الخطرة"
    },
    sum: {
      en: "After a login outage, I built a small tool that warns when a merge request adds risky database changes to a critical path.",
      ar: "بعد انقطاع في تسجيل الدخول، بنيت أداة صغيرة تحذّر عندما يضيف طلب دمج تغييرات خطرة في قواعد البيانات إلى مسار حرج."
    },
    role: {
      en: "Proposal author and builder",
      ar: "صاحب المقترح ومنفّذه"
    },
    result: {
      en: "On 12 months of history it would have flagged 5 of 11 relevant changes",
      ar: "على 12 شهرًا من السجل كانت ستنبّه إلى 5 من 11 تغييرًا ذا صلة"
    },
    stack: "Python (stdlib) · TOML · git",
    body: [
      {
        heading: {
          en: "Problem",
          ar: "المشكلة"
        },
        text: {
          en: "A login outage pushed leadership to ask for a way to stop risky database changes from slipping through unnoticed.",
          ar: "دفع انقطاع تسجيل الدخول الإدارةَ إلى طلب وسيلة تمنع مرور تغييرات قواعد البيانات الخطرة دون ملاحظة."
        }
      },
      {
        heading: {
          en: "Approach",
          ar: "المنهج"
        },
        text: {
          en: "I built a dependency-free command-line tool. Critical flows are declared at function level in one config file, and the tool flags merge requests that add table joins, sorting or grouping to those functions.",
          ar: "بنيت أداة سطر أوامر بلا اعتماديات. تُعلن المسارات الحرجة على مستوى الدالة في ملف إعداد واحد، وتنبّه إلى طلبات الدمج التي تضيف ربط جداول أو فرزًا أو تجميعًا إلى هذه الدوال."
        }
      },
      {
        heading: {
          en: "Why function level",
          ar: "لماذا على مستوى الدالة"
        },
        text: {
          en: "A file-level rule would be noisy: one file was touched by about one in four changes. Function-level scoping keeps the signal useful.",
          ar: "قاعدة على مستوى الملف ستكون مزعجة: ملف واحد كان يُعدَّل في نحو واحد من كل أربعة تعديلات. التحديد على مستوى الدالة يبقي الإشارة مفيدة."
        }
      },
      {
        heading: {
          en: "Next",
          ar: "الخطوة التالية"
        },
        text: {
          en: "The CI automation layer is the next step.",
          ar: "ربط الفحص بخط النشر الآلي هو الخطوة التالية."
        }
      }
    ]
  },
  {
    slug: "bug-management",
    tag: {
      en: "Leadership",
      ar: "القيادة"
    },
    org: {
      en: "Crocosoft",
      ar: "Crocosoft"
    },
    title: {
      en: "Running a team's bug flow",
      ar: "إدارة تدفّق الأخطاء لفريق كامل"
    },
    sum: {
      en: "Bug Management Lead since January 2026: daily triage, load-based routing and a redesigned stale-bug process.",
      ar: "مسؤول إدارة الأخطاء منذ يناير 2026: فرز يومي، وتوزيع حسب حمل الفريق، وإعادة تصميم إجراء الأخطاء الراكدة."
    },
    role: {
      en: "Bug Management Lead",
      ar: "مسؤول إدارة الأخطاء"
    },
    result: {
      en: "A daily, weekly and monthly reporting rhythm for the whole team",
      ar: "إيقاع تقارير يومي وأسبوعي وشهري للفريق كله"
    },
    stack: "Jira · Teams · Python",
    body: [
      {
        heading: {
          en: "Triage and routing",
          ar: "الفرز والتوزيع"
        },
        text: {
          en: "Every work day I read the incoming bugs, decide whether each is interface or server, and assign by team load and ownership. Batches are often 10 to 25 tickets. I put live incidents first and defer lower-priority bugs while a developer is on a large project.",
          ar: "يوميًا أقرأ الأخطاء الواردة، وأحدد إن كان الخطأ في الواجهة أم في الخوادم، وأسنده حسب حمل الفريق ومجالات الملكية. الدفعات غالبًا من 10 إلى 25 تذكرة. أقدّم حوادث التشغيل، وأؤجل الأخطاء الأقل أولوية عن المطوّر المشغول بمشروع كبير."
        }
      },
      {
        heading: {
          en: "Unblocking",
          ar: "فك الاختناقات"
        },
        text: {
          en: "I take bugs back from overloaded teammates and fix them myself, walk tickets through review and deployment, and write test notes for the quality team.",
          ar: "أستعيد الأخطاء من الزملاء المثقلين وأحلّها بنفسي، وأتابع التذاكر عبر المراجعة والنشر، وأكتب ملاحظات الاختبار لفريق الجودة."
        }
      },
      {
        heading: {
          en: "Stale-bug process",
          ar: "إجراء الأخطاء الراكدة"
        },
        text: {
          en: "A bug that sat for two weeks was escalated by leadership. I traced it to detection and response being decoupled and a query that produced false positives. I fixed the query, introduced four inactivity tiers with escalation paths, moved from weekly to twice-weekly checks, and added a responsibility matrix and chat notifications.",
          ar: "صُعّد خطأ ظل راكدًا أسبوعين إلى الإدارة. تتبعت السبب إلى انفصال الكشف عن الاستجابة واستعلام ينتج إنذارات كاذبة. أصلحت الاستعلام، وأضفت أربع مستويات للركود مع مسارات تصعيد، وانتقلت من فحص أسبوعي إلى فحصين أسبوعيًا، وأضفت مصفوفة مسؤوليات وإشعارات في المحادثة."
        }
      },
      {
        heading: {
          en: "Reporting",
          ar: "التقارير"
        },
        text: {
          en: "A daily three-point update, weekly wraps and the monthly delivery report for the whole team. I also built an automated daily work journal that reads from the ticket system and posts a briefing to the team channel. It is read-only on the ticket system: it recommends, and I make every change by hand.",
          ar: "تحديث يومي من ثلاث نقاط، وملخصات أسبوعية، والتقرير الشهري للتسليم للفريق كله. وبنيت أيضًا سجل عمل يوميًا آليًا يقرأ من نظام التذاكر وينشر ملخصًا في قناة الفريق. هو للقراءة فقط على نظام التذاكر: يقترح، وأجري أنا كل تغيير يدويًا."
        }
      }
    ]
  },
  {
    slug: "platform-delivery",
    tag: {
      en: "Backend",
      ar: "أنظمة الخوادم"
    },
    org: {
      en: "Crocosoft",
      ar: "Crocosoft"
    },
    title: {
      en: "Feature delivery across a 35-service platform",
      ar: "تسليم الميزات عبر منصة من 35 خدمة"
    },
    sum: {
      en: "Server work on a cybersecurity platform: a new product tier, an AI skills module, and a lighter delivery package.",
      ar: "عمل على خوادم منصة أمن سيبراني: فئة منتج جديدة، ووحدة مهارات بالذكاء الاصطناعي، وحزمة نشر أخف."
    },
    role: {
      en: "Backend lead on one of three epics; backend owner of a new module",
      ar: "قائد خوادم لأحد ثلاثة مسارات، ومسؤول الخوادم لوحدة جديدة"
    },
    result: {
      en: "Tier shipped June 2026; about 90 MB removed from a Lambda package",
      ar: "صدرت الفئة في يونيو 2026؛ وأُزيل نحو 90 ميجابايت من حزمة النشر"
    },
    stack: "Python · Flask · MySQL · AWS Lambda · Cognito · S3 · SES",
    body: [
      {
        heading: {
          en: "Context",
          ar: "السياق"
        },
        text: {
          en: "A security awareness platform sold through partner companies: about 35 Python and Flask services on AWS servers, 2M+ users and 100K+ client organizations.",
          ar: "منصة توعية أمنية تُباع عبر شركات شريكة: نحو 35 خدمة Python وFlask على خوادم AWS، وأكثر من مليوني مستخدم و100 ألف جهة عميلة."
        }
      },
      {
        heading: {
          en: "New product tier",
          ar: "فئة منتج جديدة"
        },
        text: {
          en: "I led the servers on one of three work streams for a new tier. I analyzed requirements across 8+ services, estimated the full lifecycle, and defined 25 tasks. The change is fully reversible.",
          ar: "قدت الخوادم في واحد من ثلاثة مسارات لفئة جديدة. حلّلت المتطلبات عبر أكثر من 8 خدمات، وقدّرت دورة الحياة كاملة، وحدّدت 25 مهمة. التغيير قابل للتراجع بالكامل."
        }
      },
      {
        heading: {
          en: "AI skills module",
          ar: "وحدة المهارات بالذكاء الاصطناعي"
        },
        text: {
          en: "I own the servers: schema, client access, the library, search and filtering. I compared query performance before and after on a copy of live data.",
          ar: "أملك الخوادم: المخطط، وصلاحيات العملاء، والمكتبة، والبحث والتصفية. وقارنت الأداء قبل التغيير وبعده على نسخة من بيانات التشغيل."
        }
      },
      {
        heading: {
          en: "Smaller package",
          ar: "حزمة أصغر"
        },
        text: {
          en: "I replaced a heavy data-analysis library with the standard CSV reader after checking the output matched field by field. That removed about 90 MB from the delivery package.",
          ar: "استبدلت مكتبة تحليل بيانات ثقيلة بقارئ CSV قياسي بعد التأكد من تطابق المخرجات. أزال ذلك نحو 90 ميجابايت من حزمة النشر."
        }
      },
      {
        heading: {
          en: "Quality",
          ar: "الجودة"
        },
        text: {
          en: "I raised one service's test coverage from about 55% to about 80% and wrote the team's integration testing guidelines.",
          ar: "رفعت تغطية الاختبارات في إحدى الخدمات من نحو 55% إلى نحو 80%، وكتبت إرشادات اختبار التكامل للفريق."
        }
      }
    ]
  },
  {
    slug: "appgain-microservices",
    tag: {
      en: "Backend and DevOps",
      ar: "الخوادم والتشغيل"
    },
    org: {
      en: "Appgain",
      ar: "Appgain"
    },
    title: {
      en: "Owning delivery for 10+ microservices",
      ar: "مسؤولية التسليم لأكثر من 10 خدمات مصغّرة"
    },
    sum: {
      en: "Built and ran a set of Flask services with full CI/CD and the team's first monitoring layer, then led the handover.",
      ar: "بنيت وشغّلت مجموعة خدمات Flask مع نشر آلي كامل وأول طبقة مراقبة للفريق، ثم قدت التسليم."
    },
    role: {
      en: "Backend Engineer, then part-time Tech Lead",
      ar: "مهندس برمجيات، ثم قائد تقني بدوام جزئي"
    },
    result: {
      en: "Every service on repeatable multi-environment deploys, with metrics and error tracking",
      ar: "كل الخدمات على نشر متكرر متعدد البيئات، مع مقاييس وتتبع أخطاء"
    },
    stack: "Flask · MongoDB · Redis · Celery · GitLab CI · Prometheus · Sentry",
    body: [
      {
        heading: {
          en: "Context",
          ar: "السياق"
        },
        text: {
          en: "Appgain is a mobile marketing platform: notifications, messaging, automation and integrations. I worked there full time until October 2024, then as part-time technical lead until June 2025.",
          ar: "Appgain منصة تسويق موبايل: إشعارات ورسائل وأتمتة وتكاملات. عملت بها بدوام كامل حتى أكتوبر 2024، ثم قائدًا تقنيًا بدوام جزئي حتى يونيو 2025."
        }
      },
      {
        heading: {
          en: "Services",
          ar: "الخدمات"
        },
        text: {
          en: "I built and maintained 10+ Flask microservices: authentication with OTP and JWT, a Celery and Redis task queue, a push sender for FCM and APNs, a marketing automation engine, and a Shopify and Odoo integration. I moved the push sender to FCM v1 and fixed a Redis memory problem that caused job failures under load.",
          ar: "بنيت وصنت أكثر من 10 خدمات Flask: مصادقة بـ OTP وJWT، وطابور مهام Celery وRedis، ومُرسل إشعارات لـ FCM وAPNs، ومحرك أتمتة تسويق، وتكامل مع Shopify وOdoo. ونقلت مُرسل الإشعارات إلى FCM v1 وأصلحت مشكلة ذاكرة Redis التي كانت تُفشل المهام تحت الضغط."
        }
      },
      {
        heading: {
          en: "Delivery and servers",
          ar: "التسليم والخوادم"
        },
        text: {
          en: "I owned automated delivery in GitLab for every service: staged environments up to production, Docker builds and Slack notifications. I also ran the self-hosted Linux servers.",
          ar: "تولّيت النشر الآلي في GitLab لكل خدمة: بيئات متدرجة حتى التشغيل، وبناء Docker، وإشعارات Slack. وأدرت خوادم Linux المستضافة ذاتيًا."
        }
      },
      {
        heading: {
          en: "Monitoring",
          ar: "المراقبة"
        },
        text: {
          en: "I added Prometheus metrics and Sentry error tracking, the team's first consistent monitoring layer.",
          ar: "أضفت مقاييس Prometheus وتتبع أخطاء Sentry، وكانت أول طبقة مراقبة متسقة للفريق."
        }
      },
      {
        heading: {
          en: "Handover",
          ar: "التسليم للفريق"
        },
        text: {
          en: "As part-time tech lead I mentored the newly hired team, recorded handover videos, documented the architecture and ran daily async check-ins and weekly standups.",
          ar: "كقائد تقني بدوام جزئي، أرشدت الفريق الجديد، وسجلت فيديوهات تسليم، ووثّقت تصميم النظام، وأدرت متابعات يومية غير متزامنة واجتماعات أسبوعية."
        }
      }
    ]
  },
  {
    slug: "procurement-system",
    tag: {
      en: "Systems",
      ar: "الأنظمة"
    },
    org: {
      en: "Healthcare organization (confidential)",
      ar: "جهة طبية (سرّية)"
    },
    title: {
      en: "Replacing a paper procurement process",
      ar: "استبدال دورة المشتريات الورقية"
    },
    sum: {
      en: "A procurement system that cut purchase-approval time by 80%, and that the same unit asked me to extend years later.",
      ar: "نظام مشتريات خفّض زمن اعتماد الشراء بنسبة 80%، وطلبت الجهة نفسها توسيعه بعد سنوات."
    },
    role: {
      en: "Backend Engineer, later sole developer",
      ar: "مهندس برمجيات، ثم مطوّر وحيد"
    },
    result: {
      en: "Purchase approvals 80% faster",
      ar: "اعتماد المشتريات أسرع بنسبة 80%"
    },
    stack: "Django · Vue.js · PostgreSQL · pytest · Docker",
    body: [
      {
        heading: {
          en: "Problem",
          ar: "المشكلة"
        },
        text: {
          en: "Purchasing ran on paper. Requests moved by hand between people, and approvals were slow.",
          ar: "كانت المشتريات تسير على الورق. تنتقل الطلبات يدويًا بين الأشخاص، وكانت الموافقات بطيئة."
        }
      },
      {
        heading: {
          en: "What I built",
          ar: "ما بنيته"
        },
        text: {
          en: "A Django and Vue.js system covering the full lifecycle: purchase request, multi-level approval and fulfilment. Automated routing and notifications removed the waiting between steps. I wrote unit and integration tests with pytest across the critical business logic.",
          ar: "نظام Django وVue.js يغطي الدورة كاملة: طلب الشراء، والاعتماد متعدد المستويات، والتنفيذ. التوجيه الآلي والإشعارات أزالا الانتظار بين الخطوات. وكتبت اختبارات وحدة وتكامل بـ pytest على منطق العمل الحرج."
        }
      },
      {
        heading: {
          en: "Years later",
          ar: "بعد سنوات"
        },
        text: {
          en: "In 2026 the unit asked me to reactivate it and add enhancements: a configurable approval workflow, an electronic archive and offline two-factor sign-in for an isolated network.",
          ar: "في 2026 طلبت الجهة إعادة تفعيله وإضافة تحسينات: سير اعتماد قابل للضبط، وأرشيف إلكتروني، وتسجيل دخول بخطوتين يعمل دون اتصال لشبكة معزولة."
        }
      }
    ]
  },
  {
    slug: "legal-pm-platform",
    tag: {
      en: "Team lead",
      ar: "قيادة الفريق"
    },
    org: {
      en: "Freelance",
      ar: "عمل حر"
    },
    title: {
      en: "Leading delivery for a legal project-management SaaS",
      ar: "قيادة تسليم منصة برمجية لإدارة المشاريع القانونية"
    },
    sum: {
      en: "Technical lead for a subscription platform for law firms in Saudi Arabia: servers, design and a team of three.",
      ar: "قائد تقني لمنصة اشتراكات لمكاتب محاماة في السعودية: خوادم وتصميم وفريق من ثلاثة."
    },
    role: {
      en: "Technical Lead",
      ar: "قائد تقني"
    },
    result: {
      en: "Migrated off a managed backend service to an owned stack; now in pre-launch QA",
      ar: "نُقلت المنصة من نظام مُدار خارجيًا إلى منظومة نملكها؛ وهي الآن في اختبار ما قبل الإطلاق"
    },
    stack: "Next.js · Hono · Postgres · Drizzle · Google Cloud · Terraform · Expo",
    body: [
      {
        heading: {
          en: "Context",
          ar: "السياق"
        },
        text: {
          en: "A project-management platform for law firms, built around the client's own project regulation: launch, planning, execution and closure, with risks and changes tracked in separate logs. Fully Arabic, with a mobile app.",
          ar: "منصة إدارة مشاريع لمكاتب المحاماة، مبنية على لائحة المشاريع الخاصة بالعميل: إطلاق وتخطيط وتنفيذ وإغلاق، مع سجلات للمخاطر والتغييرات. عربية بالكامل، مع تطبيق موبايل."
        }
      },
      {
        heading: {
          en: "My role",
          ar: "دوري"
        },
        text: {
          en: "Technical lead for a three-person delivery team. I own backend, architecture and delivery.",
          ar: "قائد تقني لفريق تسليم من ثلاثة. أتولى أنظمة الخوادم وتصميم النظام والتسليم."
        }
      },
      {
        heading: {
          en: "Key work",
          ar: "أبرز الأعمال"
        },
        text: {
          en: "I led the move to a stack we own: a typed API, Postgres, and authentication and storage on Google Cloud. I also set up isolated test environments.",
          ar: "قدت الانتقال إلى منظومة نملكها: واجهة برمجية محكمة، وقاعدة بيانات Postgres، ومصادقة وتخزين على Google Cloud. وجهزت بيئات تجريبية معزولة."
        }
      },
      {
        heading: {
          en: "Status",
          ar: "الحالة"
        },
        text: {
          en: "In pre-launch QA.",
          ar: "في اختبار ما قبل الإطلاق."
        }
      }
    ]
  }
];

