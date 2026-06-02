import type { Topic } from "@/lib/types"

export const socialStudiesTopics: Topic[] = [
  {
    id: "us-history",
    name: "US History",
    description: "Colonial era through modern times, key events, and movements",
    studyGuide: {
      introduction:
        "US History makes up about 20% of the GED Social Studies test. You need to understand major events, movements, and turning points from colonial America through the modern era.",
      sections: [
        {
          title: "Colonial Era and Revolution (1600s-1783)",
          content:
            "The 13 colonies were established by Britain. Colonists grew frustrated with taxation without representation. The Declaration of Independence (1776) declared the colonies free from Britain. The Revolutionary War ended in 1783 with American victory.",
          examples: [
            "Stamp Act, Tea Act → colonists protested 'no taxation without representation'",
            "Boston Tea Party (1773): colonists dumped British tea into the harbor",
            "Declaration of Independence (1776): written by Thomas Jefferson",
            "Key battles: Lexington & Concord (first shots), Yorktown (final victory)",
          ],
        },
        {
          title: "The Constitution and Government (1787-present)",
          content:
            "The Constitution (1787) created the framework for US government. It established three branches with checks and balances. The Bill of Rights (first 10 amendments) protects individual freedoms.",
          examples: [
            "Legislative (Congress): makes laws",
            "Executive (President): enforces laws",
            "Judicial (Supreme Court): interprets laws",
            "Checks and balances: each branch can limit the power of the others",
            "Bill of Rights: freedom of speech, religion, press, right to bear arms, etc.",
          ],
        },
        {
          title: "Civil War and Reconstruction (1861-1877)",
          content:
            "The Civil War was fought over slavery and states' rights. The North (Union) defeated the South (Confederacy). The 13th Amendment abolished slavery. Reconstruction attempted to rebuild the South and integrate freed slaves into society.",
          examples: [
            "Causes: slavery, states' rights, economic differences between North and South",
            "Emancipation Proclamation (1863): freed slaves in Confederate states",
            "13th Amendment: abolished slavery",
            "14th Amendment: citizenship and equal protection under the law",
            "15th Amendment: voting rights regardless of race",
          ],
        },
        {
          title: "20th Century: Wars and Movements",
          content:
            "The US became a world power through WWI, WWII, and the Cold War. Major social movements fought for civil rights, women's suffrage, and workers' rights.",
          examples: [
            "WWI (1914-1918): US entered 1917",
            "Great Depression (1929-1939): stock market crash, New Deal programs",
            "WWII (1939-1945): Pearl Harbor (1941) brought US into the war",
            "Civil Rights Movement (1950s-60s): Brown v. Board, MLK, Civil Rights Act of 1964",
            "Women's Suffrage: 19th Amendment (1920) gave women the right to vote",
          ],
        },
      ],
      tips: [
        "Focus on cause and effect — understand WHY events happened, not just dates.",
        "Know the key amendments: 1st (freedoms), 13th (end slavery), 14th (equal protection), 15th (voting), 19th (women's vote).",
        "The GED often asks about primary sources — letters, speeches, photographs from the time period.",
        "Understand the concept of 'checks and balances' — it appears frequently.",
      ],
    },
    questions: [
      {
        id: "uh-1",
        question: "What was the main reason American colonists rebelled against Britain?",
        options: [
          "They wanted to expand westward",
          "Taxation without representation",
          "Britain banned all trade",
          "The king abolished colonial churches",
        ],
        correctAnswer: 1,
        explanation:
          "The colonists' main grievance was being taxed by the British Parliament without having any elected representatives in it — 'no taxation without representation.'",
      },
      {
        id: "uh-2",
        question: "Which amendment abolished slavery in the United States?",
        options: ["1st Amendment", "13th Amendment", "14th Amendment", "15th Amendment"],
        correctAnswer: 1,
        explanation: "The 13th Amendment (1865) abolished slavery throughout the United States.",
      },
      {
        id: "uh-3",
        question: "What event brought the United States into World War II?",
        options: [
          "The sinking of the Lusitania",
          "The invasion of Poland",
          "The attack on Pearl Harbor",
          "The bombing of London",
        ],
        correctAnswer: 2,
        explanation:
          "Japan's attack on Pearl Harbor, Hawaii on December 7, 1941, led the US to declare war on Japan and enter WWII.",
      },
      {
        id: "uh-4",
        question: "The principle of 'checks and balances' means:",
        options: [
          "The president can veto any law without limit",
          "Each branch of government can limit the power of the other branches",
          "Congress controls all government spending",
          "The Supreme Court makes the final decision on everything",
        ],
        correctAnswer: 1,
        explanation:
          "Checks and balances means each branch (legislative, executive, judicial) has the ability to limit or check the other branches, preventing any one branch from becoming too powerful.",
      },
      {
        id: "uh-5",
        question: "The 19th Amendment granted:",
        options: [
          "Freedom of speech",
          "The right to bear arms",
          "Women the right to vote",
          "Abolition of slavery",
        ],
        correctAnswer: 2,
        explanation:
          "The 19th Amendment (1920) granted women the right to vote (women's suffrage). This was the result of decades of activism by the women's suffrage movement.",
      },
      {
        id: "uh-6",
        question: "What was the purpose of the New Deal?",
        options: [
          "To expand the military before WWII",
          "To help Americans recover from the Great Depression through government programs",
          "To rebuild Europe after WWII",
          "To end segregation in the South",
        ],
        correctAnswer: 1,
        explanation:
          "President Franklin Roosevelt's New Deal was a series of government programs (jobs, relief, reforms) designed to help Americans recover from the Great Depression.",
      },
      {
        id: "uh-7",
        question: "Brown v. Board of Education (1954) ruled that:",
        options: [
          "School prayer is constitutional",
          "Racial segregation in public schools is unconstitutional",
          "Students cannot be forced to salute the flag",
          "Schools can charge tuition",
        ],
        correctAnswer: 1,
        explanation:
          "The Supreme Court ruled unanimously that racial segregation in public schools violated the 14th Amendment's Equal Protection Clause. This overturned the 'separate but equal' doctrine.",
      },
      {
        id: "uh-8",
        question: "Who wrote the Declaration of Independence?",
        options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
        correctAnswer: 2,
        explanation:
          "Thomas Jefferson was the primary author of the Declaration of Independence, adopted by the Continental Congress on July 4, 1776.",
      },
      {
        id: "uh-9",
        question: "The Emancipation Proclamation:",
        options: [
          "Ended the Civil War immediately",
          "Freed slaves in Confederate states",
          "Gave all African Americans the right to vote",
          "Was issued by George Washington",
        ],
        correctAnswer: 1,
        explanation:
          "President Lincoln issued the Emancipation Proclamation in 1863, declaring slaves in Confederate states to be free. It did not free slaves in border states loyal to the Union.",
      },
      {
        id: "uh-10",
        question: "The Civil Rights Act of 1964:",
        options: [
          "Gave women the right to vote",
          "Ended the Vietnam War",
          "Outlawed discrimination based on race, color, religion, sex, or national origin",
          "Established the minimum wage",
        ],
        correctAnswer: 2,
        explanation:
          "The Civil Rights Act of 1964 was a landmark law that outlawed discrimination in employment, public places, and schools based on race, color, religion, sex, or national origin.",
      },
    ],
    flashcards: [
      { id: "uh-f1", term: "Declaration of Independence", definition: "Document (1776) declaring the 13 colonies free from British rule. Written primarily by Thomas Jefferson." },
      { id: "uh-f2", term: "Bill of Rights", definition: "The first 10 amendments to the Constitution, protecting individual freedoms (speech, religion, press, etc.)" },
      { id: "uh-f3", term: "Checks and Balances", definition: "System where each branch of government can limit the power of the other branches" },
      { id: "uh-f4", term: "Emancipation Proclamation", definition: "Lincoln's 1863 order freeing slaves in Confederate states" },
      { id: "uh-f5", term: "13th Amendment", definition: "Abolished slavery in the United States (1865)" },
      { id: "uh-f6", term: "14th Amendment", definition: "Granted citizenship and equal protection under the law to all people born in the US (1868)" },
      { id: "uh-f7", term: "New Deal", definition: "FDR's programs to combat the Great Depression: jobs, relief, and economic reforms" },
      { id: "uh-f8", term: "Civil Rights Act of 1964", definition: "Landmark law outlawing discrimination based on race, color, religion, sex, or national origin" },
    ],
  },
  {
    id: "civics-government",
    name: "Civics & Government",
    description: "US government structure, rights, elections, and political processes",
    studyGuide: {
      introduction:
        "Civics and Government makes up about 50% of the GED Social Studies test. You need to understand how the US government works, the Constitution, citizens' rights and responsibilities, and the political process.",
      sections: [
        {
          title: "Three Branches of Government",
          content:
            "The Constitution divides power among three branches to prevent any one from becoming too powerful.",
          examples: [
            "Legislative (Congress = Senate + House): writes and passes laws, declares war, controls budget",
            "Executive (President): enforces laws, commander-in-chief, can veto laws, appoints judges",
            "Judicial (Supreme Court + lower courts): interprets laws, can declare laws unconstitutional",
            "Senate: 100 members (2 per state), 6-year terms",
            "House: 435 members (based on population), 2-year terms",
          ],
        },
        {
          title: "Rights and Responsibilities of Citizens",
          content:
            "Citizens have both rights (protected freedoms) and responsibilities (duties to the community).",
          examples: [
            "Rights: speech, religion, press, assembly, petition (1st Amendment), due process, vote",
            "Responsibilities: obey laws, pay taxes, serve on juries, register for Selective Service (men 18-25), vote (civic duty, not required)",
          ],
        },
        {
          title: "Elections and Political Process",
          content:
            "US citizens vote for representatives at local, state, and federal levels. The Electoral College elects the President. Political parties organize candidates and platforms.",
          examples: [
            "President: elected every 4 years via Electoral College (270 votes to win)",
            "Senators: elected every 6 years (staggered)",
            "Representatives: elected every 2 years",
            "Primary elections: parties choose their candidate",
            "General election: voters choose between party candidates",
          ],
        },
        {
          title: "Federalism",
          content:
            "Federalism divides power between the national (federal) government and state governments. Some powers belong only to the federal government, some to states, and some are shared.",
          examples: [
            "Federal powers: declare war, print money, regulate interstate commerce, make treaties",
            "State powers: run elections, establish schools, regulate intrastate business, issue driver's licenses",
            "Shared powers: tax, build roads, enforce laws, establish courts",
          ],
        },
      ],
      tips: [
        "Know the difference between the Senate (100, 2 per state) and House (435, by population).",
        "Understand federalism — which powers belong to federal vs. state government.",
        "The GED often uses political cartoons and primary source documents — practice analyzing them.",
        "Know how a bill becomes a law: introduced → committee → vote in both houses → president signs or vetoes.",
      ],
    },
    questions: [
      {
        id: "cg-1",
        question: "How many members are in the US Senate?",
        options: ["100", "435", "50", "535"],
        correctAnswer: 0,
        explanation:
          "The Senate has 100 members — 2 from each of the 50 states, regardless of population.",
      },
      {
        id: "cg-2",
        question: "Which branch of government has the power to declare laws unconstitutional?",
        options: ["Legislative", "Executive", "Judicial", "State"],
        correctAnswer: 2,
        explanation:
          "The Judicial branch (Supreme Court and lower courts) can declare laws unconstitutional through judicial review.",
      },
      {
        id: "cg-3",
        question: "How many electoral votes does a presidential candidate need to win?",
        options: ["100", "200", "270", "538"],
        correctAnswer: 2,
        explanation:
          "There are 538 total electoral votes. A candidate needs a majority (more than half) = 270 to win the presidency.",
      },
      {
        id: "cg-4",
        question: "Which is a power of the federal government but NOT state governments?",
        options: ["Issue driver's licenses", "Run elections", "Declare war", "Build roads"],
        correctAnswer: 2,
        explanation:
          "Declaring war is exclusively a federal power. Issuing licenses and running elections are state powers. Building roads is a shared power.",
      },
      {
        id: "cg-5",
        question: "The First Amendment protects all of the following EXCEPT:",
        options: ["Freedom of speech", "Freedom of religion", "The right to bear arms", "Freedom of the press"],
        correctAnswer: 2,
        explanation:
          "The right to bear arms is protected by the 2nd Amendment, not the 1st. The 1st Amendment protects speech, religion, press, assembly, and petition.",
      },
      {
        id: "cg-6",
        question: "What is federalism?",
        options: [
          "A system where all power belongs to the president",
          "A system that divides power between national and state governments",
          "A system where states have all the power",
          "A type of election process",
        ],
        correctAnswer: 1,
        explanation:
          "Federalism is the division of power between the national (federal) government and state governments. Both levels have their own areas of authority.",
      },
      {
        id: "cg-7",
        question: "If the President vetoes a bill, Congress can:",
        options: [
          "Do nothing — the bill is dead",
          "Override the veto with a 2/3 vote in both houses",
          "Override the veto with a simple majority",
          "Send it to the Supreme Court",
        ],
        correctAnswer: 1,
        explanation:
          "Congress can override a presidential veto with a 2/3 supermajority vote in both the House and Senate. The bill then becomes law without the President's signature.",
      },
      {
        id: "cg-8",
        question: "Which is a responsibility (not just a right) of US citizens?",
        options: ["Voting", "Running for office", "Serving on a jury", "Joining a political party"],
        correctAnswer: 2,
        explanation:
          "Serving on a jury when summoned is a legal responsibility (required by law). Voting and running for office are rights, not requirements.",
      },
      {
        id: "cg-9",
        question: "How long is a term for a member of the House of Representatives?",
        options: ["2 years", "4 years", "6 years", "Life"],
        correctAnswer: 0,
        explanation:
          "Members of the House serve 2-year terms. Senators serve 6-year terms. The President serves 4-year terms.",
      },
      {
        id: "cg-10",
        question: "The Supreme Court has how many justices?",
        options: ["5", "7", "9", "12"],
        correctAnswer: 2,
        explanation:
          "The Supreme Court has 9 justices. They are nominated by the President and confirmed by the Senate. They serve for life.",
      },
    ],
    flashcards: [
      { id: "cg-f1", term: "Legislative Branch", definition: "Congress (Senate + House of Representatives). Makes laws. Senate = 100, House = 435." },
      { id: "cg-f2", term: "Executive Branch", definition: "President, Vice President, Cabinet. Enforces laws. Can veto bills." },
      { id: "cg-f3", term: "Judicial Branch", definition: "Supreme Court (9 justices) and lower courts. Interprets laws. Can declare laws unconstitutional." },
      { id: "cg-f4", term: "Electoral College", definition: "System for electing the President. 538 total votes, 270 needed to win." },
      { id: "cg-f5", term: "Federalism", definition: "Division of power between national (federal) government and state governments" },
      { id: "cg-f6", term: "Veto", definition: "The President's power to reject a bill passed by Congress. Can be overridden by 2/3 vote in both houses." },
      { id: "cg-f7", term: "Judicial Review", definition: "The power of courts to declare laws or actions unconstitutional" },
      { id: "cg-f8", term: "Bill of Rights", definition: "First 10 amendments protecting individual freedoms: speech, religion, press, assembly, bear arms, due process, etc." },
    ],
  },
  {
    id: "economics",
    name: "Economics",
    description: "Supply and demand, economic systems, trade, and personal finance",
    studyGuide: {
      introduction:
        "Economics makes up about 15% of the GED Social Studies test. You need to understand basic economic principles, supply and demand, economic systems, and personal finance concepts.",
      sections: [
        {
          title: "Supply and Demand",
          content:
            "Supply is how much of a product is available. Demand is how much people want it. Price is determined by the interaction of supply and demand.",
          examples: [
            "High demand + low supply = high price (rare collectibles)",
            "Low demand + high supply = low price (surplus goods on sale)",
            "Equilibrium: where supply equals demand — the market price",
            "If a new study shows coffee is healthy → demand increases → price goes up",
          ],
        },
        {
          title: "Economic Systems",
          content:
            "Different countries organize their economies differently. The US has a mixed economy (mostly free market with some government regulation).",
          examples: [
            "Free market (capitalism): private ownership, competition, supply/demand sets prices",
            "Command economy: government controls production and prices (e.g., North Korea, Cuba)",
            "Mixed economy: combination of free market and government intervention (US, most countries)",
            "Socialism: government provides key services (healthcare, education) while allowing private business",
          ],
        },
        {
          title: "Inflation and Unemployment",
          content:
            "Inflation is a general increase in prices over time (money buys less). Unemployment is the percentage of workers who want a job but can't find one.",
          examples: [
            "If inflation is 3%, something that cost $100 last year now costs $103",
            "Types of unemployment: frictional (between jobs), structural (skills don't match), cyclical (recession)",
            "The Federal Reserve tries to control inflation by adjusting interest rates",
            "Higher interest rates → borrowing costs more → spending slows → inflation decreases",
          ],
        },
        {
          title: "International Trade",
          content:
            "Countries trade because no country can produce everything efficiently. Comparative advantage means specializing in what you produce best and trading for the rest.",
          examples: [
            "Imports: goods bought from other countries",
            "Exports: goods sold to other countries",
            "Tariff: a tax on imported goods (makes imports more expensive, protects domestic producers)",
            "Free trade: removing barriers (tariffs, quotas) between countries",
          ],
        },
      ],
      tips: [
        "Supply and demand graphs are common on the GED. Price is on the y-axis, quantity on the x-axis.",
        "Remember: when supply goes UP (more product available), price goes DOWN.",
        "Understand the Federal Reserve's role: it controls the money supply and interest rates.",
        "Know the difference between GDP (total output) and per capita GDP (output per person).",
      ],
    },
    questions: [
      {
        id: "ec-1",
        question: "If the supply of oranges decreases while demand stays the same, what happens to the price?",
        options: ["Price decreases", "Price increases", "Price stays the same", "Price becomes zero"],
        correctAnswer: 1,
        explanation:
          "When supply decreases but demand stays the same, there are fewer oranges available for the same number of buyers, so the price increases.",
      },
      {
        id: "ec-2",
        question: "The United States has what type of economic system?",
        options: ["Pure capitalism", "Command economy", "Mixed economy", "Traditional economy"],
        correctAnswer: 2,
        explanation:
          "The US has a mixed economy — mostly free market (capitalism) with some government regulation and intervention (minimum wage, environmental laws, Social Security).",
      },
      {
        id: "ec-3",
        question: "What is inflation?",
        options: [
          "A decrease in prices over time",
          "A general increase in prices over time, reducing purchasing power",
          "An increase in the stock market",
          "When the government prints too much money",
        ],
        correctAnswer: 1,
        explanation:
          "Inflation is a general increase in prices over time. Each dollar buys less than it did before. A small amount of inflation is considered normal in a growing economy.",
      },
      {
        id: "ec-4",
        question: "A tariff is:",
        options: [
          "A limit on how much can be imported",
          "A tax on imported goods",
          "A subsidy for domestic producers",
          "An agreement between trading partners",
        ],
        correctAnswer: 1,
        explanation:
          "A tariff is a tax placed on imported goods, making them more expensive. This protects domestic producers from foreign competition but raises prices for consumers.",
      },
      {
        id: "ec-5",
        question: "When the Federal Reserve raises interest rates, what typically happens?",
        options: [
          "Borrowing increases and spending goes up",
          "Borrowing decreases and spending slows down",
          "Inflation increases",
          "Nothing changes",
        ],
        correctAnswer: 1,
        explanation:
          "Higher interest rates make borrowing more expensive (mortgages, car loans, credit cards). People and businesses borrow and spend less, which slows the economy and reduces inflation.",
      },
      {
        id: "ec-6",
        question: "GDP (Gross Domestic Product) measures:",
        options: [
          "The total population of a country",
          "The total value of all goods and services produced in a country in a year",
          "The total amount of money the government spends",
          "The total number of businesses in a country",
        ],
        correctAnswer: 1,
        explanation:
          "GDP is the total market value of all final goods and services produced within a country in a given year. It's the main measure of a country's economic output.",
      },
      {
        id: "ec-7",
        question: "What is 'comparative advantage'?",
        options: [
          "When one country can produce everything cheaper than another",
          "When a country specializes in producing what it makes most efficiently and trades for the rest",
          "When a country has more natural resources",
          "When a country has a larger population",
        ],
        correctAnswer: 1,
        explanation:
          "Comparative advantage means a country (or person) should specialize in what they produce at the lowest opportunity cost and trade for other goods.",
      },
      {
        id: "ec-8",
        question: "In a command economy, who makes the major economic decisions?",
        options: ["Consumers", "Businesses", "The government", "The stock market"],
        correctAnswer: 2,
        explanation:
          "In a command economy (like North Korea or the former Soviet Union), the government controls production, sets prices, and decides what goods are made.",
      },
    ],
    flashcards: [
      { id: "ec-f1", term: "Supply and Demand", definition: "Supply = how much is available. Demand = how much people want it. Together they determine price." },
      { id: "ec-f2", term: "Inflation", definition: "A general increase in prices over time, reducing the purchasing power of money" },
      { id: "ec-f3", term: "GDP", definition: "Gross Domestic Product — the total value of all goods and services produced in a country in a year" },
      { id: "ec-f4", term: "Tariff", definition: "A tax on imported goods, making them more expensive to protect domestic producers" },
      { id: "ec-f5", term: "Federal Reserve", definition: "The US central bank that controls the money supply and interest rates to manage the economy" },
      { id: "ec-f6", term: "Mixed Economy", definition: "An economic system combining free market capitalism with some government regulation and intervention" },
      { id: "ec-f7", term: "Opportunity Cost", definition: "The value of the next best alternative you give up when making a choice" },
      { id: "ec-f8", term: "Comparative Advantage", definition: "Specializing in what you produce most efficiently (lowest opportunity cost) and trading for the rest" },
    ],
  },
  {
    id: "geography",
    name: "Geography",
    description: "Maps, regions, migration, and human-environment interaction",
    studyGuide: {
      introduction:
        "Geography makes up about 15% of the GED Social Studies test. You need to read maps, understand how geography affects human activity, and know key geographic concepts.",
      sections: [
        {
          title: "Reading Maps",
          content:
            "Maps use symbols, scales, and legends to represent geographic information. Know how to read a compass rose, scale bar, and map key/legend.",
          examples: [
            "Compass rose: shows N, S, E, W directions",
            "Scale: shows the relationship between map distance and real distance",
            "Legend/Key: explains what symbols on the map represent",
            "Latitude: horizontal lines (measures N/S of equator)",
            "Longitude: vertical lines (measures E/W of Prime Meridian)",
          ],
        },
        {
          title: "Human-Environment Interaction",
          content:
            "Geography studies how humans interact with their environment. People adapt to, modify, and depend on their environment.",
          examples: [
            "Adapt: building homes on stilts in flood-prone areas",
            "Modify: building dams, clearing forests for farmland, constructing roads",
            "Depend: relying on rivers for water, fertile soil for farming",
            "Human activities can cause: deforestation, pollution, climate change",
          ],
        },
        {
          title: "Migration and Population",
          content:
            "People move for push factors (reasons to leave) and pull factors (reasons to go somewhere). Population distribution is affected by geography, climate, and resources.",
          examples: [
            "Push factors: war, poverty, natural disaster, persecution",
            "Pull factors: jobs, freedom, better climate, family",
            "Most people live near water sources and in moderate climates",
            "Urbanization: movement from rural areas to cities",
          ],
        },
      ],
      tips: [
        "GED geography questions often include maps — always read the title, legend, and scale.",
        "Understand how geography affects history and economics (e.g., rivers enable trade, mountains create barriers).",
        "Know the difference between latitude (horizontal, N/S) and longitude (vertical, E/W).",
        "Think about push vs. pull factors when questions ask about migration.",
      ],
    },
    questions: [
      {
        id: "ge-1",
        question: "Lines of latitude run:",
        options: [
          "North to South and measure East/West position",
          "East to West and measure North/South position",
          "In circles around the poles",
          "Only through the Prime Meridian",
        ],
        correctAnswer: 1,
        explanation:
          "Lines of latitude run horizontally (east-west) but measure how far north or south a location is from the equator.",
      },
      {
        id: "ge-2",
        question: "Which is an example of humans MODIFYING their environment?",
        options: [
          "Wearing warm clothes in winter",
          "Building a dam to control flooding",
          "Moving to a warmer climate",
          "Studying weather patterns",
        ],
        correctAnswer: 1,
        explanation:
          "Building a dam is modifying (changing) the environment. Wearing warm clothes is adapting to it. Moving is migration.",
      },
      {
        id: "ge-3",
        question: "Which is a 'push factor' for migration?",
        options: ["Better job opportunities", "War or conflict", "Pleasant climate", "Family connections"],
        correctAnswer: 1,
        explanation:
          "Push factors are reasons people LEAVE a place. War, poverty, and natural disasters are push factors. Jobs, climate, and family are pull factors.",
      },
      {
        id: "ge-4",
        question: "Why do most major cities develop near rivers or coastlines?",
        options: [
          "Rivers are pretty",
          "Water provides transportation, trade routes, drinking water, and resources",
          "Governments require it",
          "Mountains push people to the water",
        ],
        correctAnswer: 1,
        explanation:
          "Rivers and coastlines provide transportation, trade access, drinking water, irrigation, and food. These advantages have made waterways ideal locations for cities throughout history.",
      },
      {
        id: "ge-5",
        question: "Urbanization refers to:",
        options: [
          "People moving from cities to farms",
          "The growth of cities as people move from rural to urban areas",
          "Building more parks in cities",
          "The decline of city populations",
        ],
        correctAnswer: 1,
        explanation:
          "Urbanization is the process of population moving from rural (countryside) areas to urban (city) areas, leading to city growth.",
      },
      {
        id: "ge-6",
        question: "On a map, the legend (key) tells you:",
        options: [
          "The direction north",
          "What the symbols on the map represent",
          "The distance between two cities",
          "The date the map was made",
        ],
        correctAnswer: 1,
        explanation:
          "The map legend (or key) explains what the various symbols, colors, and patterns on the map represent.",
      },
    ],
    flashcards: [
      { id: "ge-f1", term: "Latitude", definition: "Horizontal lines on a map measuring distance north or south of the equator (0°)" },
      { id: "ge-f2", term: "Longitude", definition: "Vertical lines on a map measuring distance east or west of the Prime Meridian (0°)" },
      { id: "ge-f3", term: "Push Factors", definition: "Reasons people leave a place: war, poverty, natural disaster, persecution" },
      { id: "ge-f4", term: "Pull Factors", definition: "Reasons people move to a place: jobs, freedom, climate, family" },
      { id: "ge-f5", term: "Urbanization", definition: "The movement of people from rural areas to cities" },
      { id: "ge-f6", term: "Human-Environment Interaction", definition: "How humans adapt to, modify, and depend on their environment" },
    ],
  },
]
