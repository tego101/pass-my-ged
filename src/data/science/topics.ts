import type { Topic } from "@/lib/types"

export const scienceTopics: Topic[] = [
  {
    id: "life-science",
    name: "Life Science",
    description: "Cells, genetics, evolution, ecosystems, and human body systems",
    studyGuide: {
      introduction:
        "Life science makes up about 40% of the GED Science test. You need to understand cell structure, genetics, evolution, ecosystems, and how the human body works.",
      sections: [
        {
          title: "Cell Structure and Function",
          content:
            "All living things are made of cells. Plant cells have a cell wall and chloroplasts; animal cells do not. Both have a nucleus (contains DNA), cell membrane, mitochondria (energy), and cytoplasm.",
          examples: [
            "Nucleus: control center, contains DNA",
            "Mitochondria: produce energy (cellular respiration)",
            "Cell membrane: controls what enters and leaves the cell",
            "Chloroplasts: found only in plant cells, perform photosynthesis",
            "Ribosomes: make proteins",
          ],
        },
        {
          title: "Genetics and DNA",
          content:
            "DNA carries genetic information. Genes are segments of DNA that code for traits. You inherit one allele (version of a gene) from each parent. Dominant alleles (capital letter) mask recessive alleles (lowercase).",
          examples: [
            "Genotype: the genetic makeup (Bb, BB, bb)",
            "Phenotype: the physical expression (brown eyes, blue eyes)",
            "Bb × Bb → 25% BB, 50% Bb, 25% bb (Punnett square)",
            "DNA → RNA → Protein (central dogma of biology)",
          ],
        },
        {
          title: "Natural Selection and Evolution",
          content:
            "Evolution is the change in species over time. Natural selection is the mechanism: organisms with favorable traits survive and reproduce more, passing those traits to offspring.",
          examples: [
            "Variation exists in every population",
            "Some variations are advantageous in a given environment",
            "Organisms with advantageous traits survive longer and reproduce more",
            "Over many generations, the population changes",
          ],
        },
        {
          title: "Ecosystems and Energy Flow",
          content:
            "Energy flows through ecosystems: Sun → Producers (plants) → Consumers (animals) → Decomposers. Food chains and food webs show these relationships. Only about 10% of energy transfers from one level to the next.",
          examples: [
            "Producers (autotrophs): make their own food via photosynthesis",
            "Primary consumers: herbivores that eat plants",
            "Secondary consumers: carnivores that eat herbivores",
            "Decomposers: break down dead organisms, recycle nutrients",
          ],
        },
        {
          title: "Human Body Systems",
          content:
            "The human body has several organ systems that work together. Key systems: circulatory (heart, blood), respiratory (lungs), digestive (stomach, intestines), nervous (brain, nerves), immune (white blood cells).",
          examples: [
            "Circulatory: transports oxygen, nutrients, and waste",
            "Respiratory: exchanges oxygen and carbon dioxide",
            "Digestive: breaks down food into nutrients",
            "Nervous: sends and receives signals, controls body functions",
            "Immune: defends against pathogens (disease-causing organisms)",
          ],
        },
      ],
      tips: [
        "GED science questions often include diagrams — practice reading charts, graphs, and scientific diagrams.",
        "Focus on understanding concepts, not memorizing facts. The GED tests your ability to reason scientifically.",
        "Know the difference between a hypothesis (testable prediction), a theory (well-supported explanation), and a law (description of a pattern in nature).",
        "Remember: correlation does not equal causation.",
      ],
    },
    questions: [
      {
        id: "ls-1",
        question: "Which organelle is found in plant cells but NOT in animal cells?",
        options: ["Mitochondria", "Nucleus", "Chloroplast", "Cell membrane"],
        correctAnswer: 2,
        explanation:
          "Chloroplasts are found only in plant cells. They perform photosynthesis to make food from sunlight. Animal cells get energy from food they eat.",
      },
      {
        id: "ls-2",
        question: "A parent with genotype Bb and a parent with genotype bb have a child. What is the probability the child has the dominant phenotype?",
        options: ["0%", "25%", "50%", "75%"],
        correctAnswer: 2,
        explanation:
          "Using a Punnett square: Bb × bb → Bb, Bb, bb, bb. 2 out of 4 (50%) have the dominant phenotype (Bb).",
      },
      {
        id: "ls-3",
        question: "Which best describes natural selection?",
        options: [
          "The strongest animals always survive",
          "Organisms choose to evolve new traits",
          "Organisms with favorable traits are more likely to survive and reproduce",
          "All species change at the same rate",
        ],
        correctAnswer: 2,
        explanation:
          "Natural selection means organisms with traits better suited to their environment are more likely to survive and pass those traits to offspring.",
      },
      {
        id: "ls-4",
        question: "In a food chain: grass → rabbit → fox. What would most likely happen if all the foxes were removed?",
        options: [
          "The rabbit population would decrease",
          "The rabbit population would increase",
          "The grass would grow faster",
          "Nothing would change",
        ],
        correctAnswer: 1,
        explanation:
          "Without foxes (predators), the rabbit population would increase because fewer rabbits are being eaten. This would then lead to more grass being eaten.",
      },
      {
        id: "ls-5",
        question: "What is the primary function of the mitochondria?",
        options: ["Store DNA", "Produce energy", "Make proteins", "Control cell division"],
        correctAnswer: 1,
        explanation:
          "Mitochondria are the 'powerhouses' of the cell. They produce energy (ATP) through cellular respiration.",
      },
      {
        id: "ls-6",
        question: "What is the difference between a hypothesis and a theory?",
        options: [
          "They are the same thing",
          "A hypothesis is a testable prediction; a theory is a well-supported explanation backed by extensive evidence",
          "A theory is just a guess; a hypothesis is proven",
          "A hypothesis is broader than a theory",
        ],
        correctAnswer: 1,
        explanation:
          "A hypothesis is a testable prediction about a specific observation. A theory is a broad explanation supported by a large body of evidence.",
      },
      {
        id: "ls-7",
        question: "Which body system is responsible for fighting infections?",
        options: ["Nervous system", "Circulatory system", "Immune system", "Digestive system"],
        correctAnswer: 2,
        explanation:
          "The immune system, including white blood cells, antibodies, and lymph nodes, defends the body against pathogens (disease-causing organisms).",
      },
      {
        id: "ls-8",
        question: "Photosynthesis converts:",
        options: [
          "Chemical energy into light energy",
          "Light energy into chemical energy (glucose)",
          "Oxygen into carbon dioxide",
          "Water into hydrogen and oxygen",
        ],
        correctAnswer: 1,
        explanation:
          "Photosynthesis uses light energy from the sun to convert CO₂ and water into glucose (chemical energy) and oxygen. 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
      },
      {
        id: "ls-9",
        question: "What percentage of energy typically transfers from one trophic level to the next?",
        options: ["1%", "10%", "50%", "90%"],
        correctAnswer: 1,
        explanation:
          "Only about 10% of energy transfers from one trophic level to the next. The rest is lost as heat through metabolism.",
      },
      {
        id: "ls-10",
        question: "DNA is found in which part of the cell?",
        options: ["Mitochondria only", "Cell membrane", "Nucleus", "Ribosomes"],
        correctAnswer: 2,
        explanation:
          "Most DNA is found in the nucleus (nuclear DNA). A small amount is also in mitochondria (mtDNA), but the primary location is the nucleus.",
      },
    ],
    flashcards: [
      { id: "ls-f1", term: "Photosynthesis", definition: "Process by which plants convert light energy + CO₂ + water → glucose + oxygen" },
      { id: "ls-f2", term: "Cellular Respiration", definition: "Process by which cells break down glucose to produce energy (ATP). Occurs in mitochondria." },
      { id: "ls-f3", term: "Natural Selection", definition: "Organisms with favorable traits survive and reproduce more, passing those traits to offspring" },
      { id: "ls-f4", term: "Genotype", definition: "The genetic makeup of an organism (e.g., Bb, BB, bb)" },
      { id: "ls-f5", term: "Phenotype", definition: "The physical expression of a trait (e.g., brown eyes, tall plant)" },
      { id: "ls-f6", term: "Producer (Autotroph)", definition: "An organism that makes its own food, usually through photosynthesis (e.g., plants)" },
      { id: "ls-f7", term: "Homeostasis", definition: "The ability of an organism to maintain a stable internal environment despite external changes" },
      { id: "ls-f8", term: "Punnett Square", definition: "A diagram used to predict the probability of genotypes in offspring from a genetic cross" },
    ],
  },
  {
    id: "physical-science",
    name: "Physical Science",
    description: "Chemistry basics, physics concepts, energy, and forces",
    studyGuide: {
      introduction:
        "Physical science (chemistry and physics) makes up about 40% of the GED Science test. You need to understand basic chemistry, forces, motion, energy, and waves.",
      sections: [
        {
          title: "States of Matter and Phase Changes",
          content:
            "Matter exists as solid, liquid, or gas. Phase changes occur when energy (heat) is added or removed.",
          examples: [
            "Melting: solid → liquid (add heat)",
            "Freezing: liquid → solid (remove heat)",
            "Evaporation: liquid → gas (add heat)",
            "Condensation: gas → liquid (remove heat)",
            "Sublimation: solid → gas (add heat, skip liquid)",
          ],
        },
        {
          title: "Atoms and the Periodic Table",
          content:
            "Atoms have protons (+), neutrons (0), and electrons (-). The atomic number = number of protons. Elements are organized on the periodic table by atomic number. Elements in the same column (group) have similar properties.",
          examples: [
            "Protons: positive charge, in nucleus, determines the element",
            "Neutrons: no charge, in nucleus, affects mass",
            "Electrons: negative charge, orbit nucleus, involved in bonding",
            "Atomic number = protons. Mass number = protons + neutrons.",
          ],
        },
        {
          title: "Chemical Reactions",
          content:
            "In a chemical reaction, reactants form products. Atoms are rearranged but never created or destroyed (Law of Conservation of Mass). Look for evidence: color change, gas produced, heat released, precipitate formed.",
          examples: [
            "2H₂ + O₂ → 2H₂O (hydrogen + oxygen → water)",
            "Reactants are on the left side, products on the right",
            "Equations must be balanced: same number of each atom on both sides",
          ],
        },
        {
          title: "Forces and Motion",
          content:
            "Newton's Laws: 1st (Inertia) — objects at rest stay at rest unless acted on by a force. 2nd (F=ma) — force equals mass times acceleration. 3rd (Action-Reaction) — every action has an equal and opposite reaction.",
          examples: [
            "A heavier object needs more force to accelerate at the same rate (F=ma)",
            "A book on a table stays still until you push it (1st Law)",
            "When you push a wall, the wall pushes back on you (3rd Law)",
            "Speed = distance / time. Velocity = speed + direction.",
          ],
        },
        {
          title: "Energy",
          content:
            "Energy cannot be created or destroyed, only transformed (Law of Conservation of Energy). Kinetic energy is energy of motion. Potential energy is stored energy.",
          examples: [
            "A ball at the top of a hill has potential energy; rolling down, it converts to kinetic energy",
            "Chemical energy in food → kinetic energy when you move",
            "Electrical energy → light energy in a light bulb",
            "KE = ½mv², PE = mgh",
          ],
        },
      ],
      tips: [
        "GED science questions often give you the information you need — read carefully and apply it.",
        "For physics questions, draw a simple diagram to visualize forces and motion.",
        "Remember: temperature measures average kinetic energy, not total heat.",
        "On the periodic table: metals are on the left, nonmetals on the right, metalloids in between.",
      ],
    },
    questions: [
      {
        id: "ps-1",
        question: "What happens to water molecules when water boils?",
        options: [
          "They break apart into hydrogen and oxygen",
          "They move faster and spread apart, changing from liquid to gas",
          "They get larger",
          "They become heavier",
        ],
        correctAnswer: 1,
        explanation:
          "When water boils, heat energy makes molecules move faster and spread apart, changing from liquid to gas (water vapor). The molecules themselves don't break apart.",
      },
      {
        id: "ps-2",
        question: "An atom has 8 protons and 8 neutrons. What is its atomic number?",
        options: ["0", "8", "16", "24"],
        correctAnswer: 1,
        explanation: "The atomic number equals the number of protons, which is 8. (This element is oxygen.)",
      },
      {
        id: "ps-3",
        question: "According to Newton's Second Law, if you double the force on an object while keeping mass the same, what happens to acceleration?",
        options: ["It stays the same", "It doubles", "It halves", "It quadruples"],
        correctAnswer: 1,
        explanation: "F = ma. If F doubles and m stays the same, then a must double. Acceleration is directly proportional to force.",
      },
      {
        id: "ps-4",
        question: "A ball is dropped from a height. As it falls, what happens to its energy?",
        options: [
          "Potential energy increases, kinetic energy decreases",
          "Potential energy decreases, kinetic energy increases",
          "Both increase",
          "Both decrease",
        ],
        correctAnswer: 1,
        explanation:
          "As the ball falls, it loses height (less potential energy) but gains speed (more kinetic energy). Energy is conserved — it transforms from potential to kinetic.",
      },
      {
        id: "ps-5",
        question: "In the reaction 2H₂ + O₂ → 2H₂O, how many hydrogen atoms are on the reactant side?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        explanation: "2H₂ means 2 molecules of H₂, each with 2 hydrogen atoms = 4 hydrogen atoms total on the reactant side.",
      },
      {
        id: "ps-6",
        question: "Which is an example of Newton's Third Law?",
        options: [
          "A car accelerates when you press the gas pedal",
          "A book stays on a table until pushed",
          "A rocket pushes gas downward and the gas pushes the rocket upward",
          "A heavy truck takes longer to stop than a car",
        ],
        correctAnswer: 2,
        explanation:
          "Newton's Third Law: every action has an equal and opposite reaction. The rocket pushes gas down (action), gas pushes rocket up (reaction).",
      },
      {
        id: "ps-7",
        question: "What is the difference between speed and velocity?",
        options: [
          "They are the same thing",
          "Velocity includes direction; speed does not",
          "Speed is faster than velocity",
          "Velocity is measured in meters; speed in miles",
        ],
        correctAnswer: 1,
        explanation:
          "Speed is how fast something moves (distance/time). Velocity is speed WITH a direction (e.g., 60 mph north).",
      },
      {
        id: "ps-8",
        question: "The Law of Conservation of Mass states that:",
        options: [
          "Mass can be created in a chemical reaction",
          "Mass is destroyed when things burn",
          "Mass is neither created nor destroyed in a chemical reaction",
          "Mass increases when substances are mixed",
        ],
        correctAnswer: 2,
        explanation:
          "The Law of Conservation of Mass states that in a chemical reaction, the total mass of reactants equals the total mass of products. Atoms are rearranged, not created or destroyed.",
      },
    ],
    flashcards: [
      { id: "ps-f1", term: "Newton's First Law (Inertia)", definition: "An object at rest stays at rest, and an object in motion stays in motion, unless acted on by an outside force." },
      { id: "ps-f2", term: "Newton's Second Law", definition: "F = ma (Force equals mass times acceleration)" },
      { id: "ps-f3", term: "Newton's Third Law", definition: "Every action has an equal and opposite reaction" },
      { id: "ps-f4", term: "Conservation of Energy", definition: "Energy cannot be created or destroyed, only transformed from one form to another" },
      { id: "ps-f5", term: "Conservation of Mass", definition: "In a chemical reaction, mass is neither created nor destroyed" },
      { id: "ps-f6", term: "Kinetic Energy", definition: "Energy of motion. KE = ½mv²" },
      { id: "ps-f7", term: "Potential Energy", definition: "Stored energy based on position or state. PE = mgh (gravitational)" },
      { id: "ps-f8", term: "Atomic Number", definition: "The number of protons in an atom's nucleus. Determines what element it is." },
    ],
  },
  {
    id: "earth-space-science",
    name: "Earth & Space Science",
    description: "Weather, climate, geology, the solar system, and Earth's processes",
    studyGuide: {
      introduction:
        "Earth and space science makes up about 20% of the GED Science test. You need to understand weather, climate change, Earth's structure, plate tectonics, and basic astronomy.",
      sections: [
        {
          title: "Weather vs. Climate",
          content:
            "Weather is the short-term condition of the atmosphere (today's temperature, rain, wind). Climate is the average weather pattern in an area over a long period (30+ years).",
          examples: [
            "Weather: 'It's raining today in Miami'",
            "Climate: 'Miami has a tropical climate with hot, humid summers'",
            "Climate change refers to long-term shifts in global temperatures and weather patterns",
          ],
        },
        {
          title: "Plate Tectonics",
          content:
            "Earth's crust is broken into plates that float on the mantle. Plate movement causes earthquakes, volcanoes, and mountain formation. Plates can converge (push together), diverge (pull apart), or slide past each other.",
          examples: [
            "Convergent boundary: plates push together → mountains or subduction zones",
            "Divergent boundary: plates pull apart → rift valleys, mid-ocean ridges",
            "Transform boundary: plates slide past each other → earthquakes (San Andreas Fault)",
          ],
        },
        {
          title: "The Solar System",
          content:
            "Our solar system has 8 planets orbiting the Sun. Inner planets (Mercury, Venus, Earth, Mars) are rocky. Outer planets (Jupiter, Saturn, Uranus, Neptune) are gas/ice giants.",
          examples: [
            "Earth's rotation (spinning) causes day and night (24 hours)",
            "Earth's revolution (orbiting the Sun) takes 365.25 days (one year)",
            "Seasons are caused by Earth's tilted axis, NOT distance from the Sun",
            "The Moon's gravity causes ocean tides on Earth",
          ],
        },
        {
          title: "Rock Cycle",
          content:
            "Rocks are constantly changing between three types: igneous (cooled magma/lava), sedimentary (compressed layers of sediment), and metamorphic (changed by heat and pressure).",
          examples: [
            "Igneous: formed when magma or lava cools (granite, basalt)",
            "Sedimentary: formed from compressed sediments (sandstone, limestone). Often contain fossils.",
            "Metamorphic: existing rock changed by heat/pressure (marble from limestone)",
          ],
        },
      ],
      tips: [
        "Don't confuse weather (short-term) with climate (long-term average).",
        "Seasons are caused by Earth's 23.5° tilt, NOT by distance from the Sun.",
        "GED questions about Earth science often include maps or diagrams — read them carefully.",
        "Know the difference between rotation (spinning on axis = day/night) and revolution (orbiting Sun = year).",
      ],
    },
    questions: [
      {
        id: "es-1",
        question: "What causes Earth's seasons?",
        options: [
          "Earth's distance from the Sun",
          "The tilt of Earth's axis",
          "Changes in the Sun's brightness",
          "Earth's rotation on its axis",
        ],
        correctAnswer: 1,
        explanation:
          "Earth's 23.5° axial tilt causes different parts of Earth to receive more or less direct sunlight throughout the year, creating seasons.",
      },
      {
        id: "es-2",
        question: "What type of rock is formed from cooled magma?",
        options: ["Sedimentary", "Metamorphic", "Igneous", "Mineral"],
        correctAnswer: 2,
        explanation:
          "Igneous rocks form when magma (underground) or lava (above ground) cools and solidifies. Examples: granite, basalt.",
      },
      {
        id: "es-3",
        question: "At a transform plate boundary, plates:",
        options: [
          "Push together, forming mountains",
          "Pull apart, forming rift valleys",
          "Slide past each other, causing earthquakes",
          "One dives under the other",
        ],
        correctAnswer: 2,
        explanation:
          "At transform boundaries, plates slide horizontally past each other. The friction causes earthquakes. The San Andreas Fault is a famous example.",
      },
      {
        id: "es-4",
        question: "What is the difference between weather and climate?",
        options: [
          "They are the same thing",
          "Weather is short-term atmospheric conditions; climate is the long-term average",
          "Climate changes daily; weather stays the same",
          "Weather only refers to temperature; climate includes rain",
        ],
        correctAnswer: 1,
        explanation:
          "Weather describes current, short-term conditions. Climate describes the average weather pattern over 30+ years.",
      },
      {
        id: "es-5",
        question: "Earth's rotation on its axis causes:",
        options: ["Seasons", "Day and night", "Tides", "Earthquakes"],
        correctAnswer: 1,
        explanation:
          "Earth rotates (spins) on its axis once every 24 hours. The side facing the Sun experiences day; the side facing away experiences night.",
      },
      {
        id: "es-6",
        question: "Which type of rock is most likely to contain fossils?",
        options: ["Igneous", "Metamorphic", "Sedimentary", "Volcanic"],
        correctAnswer: 2,
        explanation:
          "Sedimentary rocks form from layers of compressed sediment. Organisms buried in sediment can become fossils. Igneous and metamorphic rocks involve heat that would destroy fossils.",
      },
      {
        id: "es-7",
        question: "What causes ocean tides?",
        options: [
          "Wind blowing across the ocean",
          "The gravitational pull of the Moon and Sun",
          "Earth's rotation",
          "Underwater volcanoes",
        ],
        correctAnswer: 1,
        explanation:
          "Tides are primarily caused by the Moon's gravitational pull on Earth's oceans. The Sun also contributes, but the Moon has a stronger effect because it's closer.",
      },
      {
        id: "es-8",
        question: "The greenhouse effect is:",
        options: [
          "Always harmful to life on Earth",
          "A natural process where gases trap heat in the atmosphere, keeping Earth warm enough for life",
          "Only caused by human activity",
          "The same as ozone depletion",
        ],
        correctAnswer: 1,
        explanation:
          "The greenhouse effect is a natural process where gases like CO₂ and water vapor trap heat. Without it, Earth would be too cold for life. However, excess greenhouse gases from human activity are causing enhanced warming.",
      },
    ],
    flashcards: [
      { id: "es-f1", term: "Weather vs. Climate", definition: "Weather = short-term atmospheric conditions. Climate = long-term average (30+ years)." },
      { id: "es-f2", term: "Plate Tectonics", definition: "Theory that Earth's crust is divided into plates that move, causing earthquakes, volcanoes, and mountain formation" },
      { id: "es-f3", term: "Rotation vs. Revolution", definition: "Rotation = spinning on axis (24 hrs = day/night). Revolution = orbiting the Sun (365.25 days = 1 year)." },
      { id: "es-f4", term: "Igneous Rock", definition: "Rock formed from cooled magma or lava" },
      { id: "es-f5", term: "Sedimentary Rock", definition: "Rock formed from compressed layers of sediment. Most likely to contain fossils." },
      { id: "es-f6", term: "Metamorphic Rock", definition: "Rock that has been changed by heat and pressure" },
      { id: "es-f7", term: "Greenhouse Effect", definition: "Natural process where atmospheric gases trap heat, keeping Earth warm. Enhanced by excess CO₂ from human activity." },
      { id: "es-f8", term: "Convergent Boundary", definition: "Where two tectonic plates push together, forming mountains or subduction zones" },
    ],
  },
]
