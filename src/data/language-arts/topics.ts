import type { Topic } from "@/lib/types"

export const languageArtsTopics: Topic[] = [
  {
    id: "reading-comprehension",
    name: "Reading Comprehension",
    description: "Understanding main ideas, inferences, tone, and author's purpose",
    studyGuide: {
      introduction:
        "Reading comprehension is the largest part of the GED Reasoning Through Language Arts test. You'll read passages from literature, informational texts, and workplace documents, then answer questions about them.",
      sections: [
        {
          title: "Main Idea and Supporting Details",
          content:
            "The main idea is the central point the author is making. Supporting details are facts, examples, or reasons that back up the main idea. The main idea is often (but not always) in the first or last paragraph.",
          examples: [
            "Ask yourself: 'What is this passage mostly about?'",
            "Supporting details answer: Who? What? When? Where? Why? How?",
            "The title and topic sentences often hint at the main idea",
          ],
        },
        {
          title: "Making Inferences",
          content:
            "An inference is a conclusion you draw based on evidence in the text plus your own reasoning. It's not directly stated but is supported by clues in the passage.",
          examples: [
            "'The character slammed the door and threw his bag down' → You can infer he is angry",
            "Look for: word choice, character actions, cause-and-effect relationships",
            "Correct inferences are always supported by text evidence",
          ],
        },
        {
          title: "Author's Purpose and Tone",
          content:
            "Author's purpose: Why did they write this? Common purposes: to inform, to persuade, to entertain, to explain. Tone: The author's attitude toward the subject (serious, humorous, critical, optimistic, etc.).",
          examples: [
            "Persuasive: uses emotional language, presents one side strongly",
            "Informative: presents facts, balanced viewpoints, data",
            "Tone words: sarcastic, hopeful, neutral, angry, nostalgic",
          ],
        },
        {
          title: "Text Structure",
          content:
            "Passages are organized in different ways: chronological (time order), cause and effect, compare and contrast, problem and solution, or sequential (step by step). Identifying the structure helps you understand the content.",
          examples: [
            "Signal words for cause/effect: because, therefore, as a result, consequently",
            "Signal words for compare/contrast: however, similarly, on the other hand, unlike",
            "Signal words for chronological: first, then, next, finally, meanwhile",
          ],
        },
      ],
      tips: [
        "Read the questions BEFORE the passage so you know what to look for.",
        "Underline or note key details as you read.",
        "If a question asks about a specific line, re-read the surrounding context.",
        "Eliminate obviously wrong answers first, then choose the best remaining option.",
        "Don't choose an answer just because it sounds true — it must be supported by the passage.",
      ],
    },
    questions: [
      {
        id: "rc-1",
        question:
          "Read this passage: 'The city's recycling program has reduced waste by 40% in just two years. Residents have embraced the new sorting system, and local businesses have partnered with the city to reduce packaging.' What is the main idea?",
        options: [
          "Local businesses are reducing packaging",
          "The city's recycling program has been very successful",
          "Residents need to sort their recycling better",
          "Waste is a major problem in cities",
        ],
        correctAnswer: 1,
        explanation:
          "The main idea is that the recycling program has been successful. The 40% reduction, resident participation, and business partnerships all support this central point.",
      },
      {
        id: "rc-2",
        question:
          "'Maria stared at the acceptance letter, her hands trembling. She read it three times before calling her mother.' What can you infer about Maria?",
        options: [
          "She is angry about the letter",
          "She is excited and possibly overwhelmed",
          "She doesn't like her mother",
          "She expected to be rejected",
        ],
        correctAnswer: 1,
        explanation:
          "Trembling hands, reading it multiple times, and immediately calling her mother suggest excitement and being overwhelmed — likely a positive acceptance she was hoping for.",
      },
      {
        id: "rc-3",
        question: "Which word best describes a tone that is 'matter-of-fact and without emotion'?",
        options: ["Passionate", "Objective", "Sarcastic", "Melancholy"],
        correctAnswer: 1,
        explanation:
          "Objective means presenting facts without personal feelings or bias — matter-of-fact and neutral.",
      },
      {
        id: "rc-4",
        question: "A passage that uses words like 'however,' 'on the other hand,' and 'in contrast' is most likely organized by:",
        options: ["Chronological order", "Cause and effect", "Compare and contrast", "Problem and solution"],
        correctAnswer: 2,
        explanation:
          "These transition words signal a compare-and-contrast structure, showing differences between two or more things.",
      },
      {
        id: "rc-5",
        question:
          "'While some argue that social media connects people across distances, studies show it has actually increased feelings of loneliness and isolation among teenagers.' What is the author's purpose?",
        options: [
          "To entertain readers with a story",
          "To persuade readers that social media has negative effects",
          "To inform readers about how to use social media",
          "To describe the history of social media",
        ],
        correctAnswer: 1,
        explanation:
          "The author is making an argument (using 'studies show') that social media has negative effects on teenagers. This is persuasive writing.",
      },
      {
        id: "rc-6",
        question: "What does 'context clues' mean in reading?",
        options: [
          "Looking up words in a dictionary",
          "Using surrounding words and sentences to figure out the meaning of an unknown word",
          "Reading the footnotes at the bottom of the page",
          "Skipping words you don't know",
        ],
        correctAnswer: 1,
        explanation:
          "Context clues are hints found within the surrounding text that help readers determine the meaning of unfamiliar words.",
      },
      {
        id: "rc-7",
        question: "Which of the following is the BEST example of a fact (not an opinion)?",
        options: [
          "Chocolate ice cream is the best dessert",
          "The United States declared independence in 1776",
          "Everyone should exercise daily",
          "Math is the hardest subject in school",
        ],
        correctAnswer: 1,
        explanation:
          "A fact can be proven true or false. The year of US independence is a verifiable historical fact. The others are opinions or recommendations.",
      },
      {
        id: "rc-8",
        question: "When an author writes 'as a result of these findings,' the author is signaling:",
        options: ["A new topic", "A cause-and-effect relationship", "A personal opinion", "A definition"],
        correctAnswer: 1,
        explanation:
          "'As a result' is a signal phrase for cause and effect — it tells you the author is about to describe an effect or consequence.",
      },
    ],
    flashcards: [
      { id: "rc-f1", term: "Main Idea", definition: "The central point or most important idea in a passage" },
      { id: "rc-f2", term: "Inference", definition: "A conclusion drawn from evidence in the text combined with your own reasoning" },
      { id: "rc-f3", term: "Tone", definition: "The author's attitude toward the subject (e.g., serious, humorous, critical)" },
      { id: "rc-f4", term: "Author's Purpose", definition: "Why the author wrote the text: to inform, persuade, entertain, or explain" },
      { id: "rc-f5", term: "Context Clues", definition: "Surrounding words/sentences that help you figure out the meaning of an unknown word" },
      { id: "rc-f6", term: "Theme", definition: "The underlying message or lesson of a literary work" },
      { id: "rc-f7", term: "Bias", definition: "A prejudice or favoritism toward one side that affects fair judgment" },
      { id: "rc-f8", term: "Supporting Details", definition: "Facts, examples, and reasons that back up the main idea" },
    ],
  },
  {
    id: "grammar",
    name: "Grammar & Sentence Structure",
    description: "Parts of speech, sentence types, punctuation, and common errors",
    studyGuide: {
      introduction:
        "Grammar questions on the GED test your knowledge of standard English conventions. You'll need to identify and correct errors in sentence structure, punctuation, and word usage.",
      sections: [
        {
          title: "Subject-Verb Agreement",
          content:
            "The subject and verb must agree in number. Singular subjects take singular verbs; plural subjects take plural verbs. Watch out for tricky subjects with prepositional phrases between the subject and verb.",
          examples: [
            "CORRECT: The group of students IS studying. ('group' is singular)",
            "CORRECT: The students ARE studying. ('students' is plural)",
            "INCORRECT: The box of toys are on the shelf. → IS on the shelf ('box' is the subject)",
          ],
        },
        {
          title: "Common Punctuation Rules",
          content:
            "Commas: Use before 'and/but/or' in compound sentences, after introductory phrases, and to separate items in a list. Semicolons: Join two related independent clauses. Apostrophes: Show possession (dog's bone) or contractions (don't = do not).",
          examples: [
            "I wanted to go, but it was raining. (comma before 'but' in compound sentence)",
            "After the meeting ended, we went to lunch. (comma after introductory phrase)",
            "She studied hard; therefore, she passed. (semicolon between two complete sentences)",
          ],
        },
        {
          title: "Commonly Confused Words",
          content:
            "These word pairs trip up many test-takers. Learn the difference between each pair.",
          examples: [
            "their/there/they're: their = possession, there = place, they're = they are",
            "its/it's: its = possession, it's = it is or it has",
            "your/you're: your = possession, you're = you are",
            "affect/effect: affect = verb (to influence), effect = noun (a result)",
            "then/than: then = time, than = comparison",
          ],
        },
        {
          title: "Run-on Sentences and Fragments",
          content:
            "A run-on joins two sentences without proper punctuation or conjunction. A fragment is an incomplete sentence (missing a subject, verb, or complete thought).",
          examples: [
            "RUN-ON: I love reading it is my favorite hobby. → Fix: I love reading. It is my favorite hobby.",
            "FRAGMENT: Because I was tired. → Fix: Because I was tired, I went to bed early.",
            "RUN-ON: She ran fast she won the race. → Fix: She ran fast, so she won the race.",
          ],
        },
      ],
      tips: [
        "Read the sentence aloud in your head — if it sounds wrong, it probably is.",
        "Look for the subject and verb first when checking agreement.",
        "On the GED, 'NO ERROR' is sometimes the correct answer — don't assume every sentence has a mistake.",
        "When in doubt about comma placement, check if each part could stand alone as a complete sentence.",
      ],
    },
    questions: [
      {
        id: "gr-1",
        question: "Which sentence is correct?",
        options: [
          "The team of players are ready for the game.",
          "The team of players is ready for the game.",
          "The team of players were ready for the game.",
          "The team of players be ready for the game.",
        ],
        correctAnswer: 1,
        explanation:
          "'Team' is a collective noun treated as singular, so it takes 'is.' The phrase 'of players' is a prepositional phrase and doesn't change the subject.",
      },
      {
        id: "gr-2",
        question: "Choose the correct sentence:",
        options: [
          "Its going to rain today.",
          "It's going to rain today.",
          "Its' going to rain today.",
          "It going to rain today.",
        ],
        correctAnswer: 1,
        explanation: "'It's' is the contraction of 'it is.' 'Its' (no apostrophe) shows possession.",
      },
      {
        id: "gr-3",
        question: "Which sentence has correct comma usage?",
        options: [
          "After the movie ended we went home.",
          "After the movie ended, we went home.",
          "After, the movie ended we went home.",
          "After the movie, ended we went home.",
        ],
        correctAnswer: 1,
        explanation:
          "A comma is needed after an introductory phrase ('After the movie ended') before the main clause.",
      },
      {
        id: "gr-4",
        question: "Which word correctly completes the sentence: 'The medicine had a positive ___ on the patient.'",
        options: ["affect", "effect", "affected", "effecting"],
        correctAnswer: 1,
        explanation:
          "'Effect' is a noun meaning 'a result.' 'Affect' is a verb meaning 'to influence.' The sentence needs a noun.",
      },
      {
        id: "gr-5",
        question: "Which is a run-on sentence?",
        options: [
          "I went to the store and bought milk.",
          "I went to the store I bought milk.",
          "I went to the store, and I bought milk.",
          "After I went to the store, I bought milk.",
        ],
        correctAnswer: 1,
        explanation:
          "'I went to the store I bought milk' joins two complete sentences without proper punctuation or a conjunction.",
      },
      {
        id: "gr-6",
        question: "Choose the correct word: 'She did ___ than expected on the test.'",
        options: ["good", "well", "better", "best"],
        correctAnswer: 2,
        explanation:
          "'Better' is the comparative form needed with 'than.' 'Well' is an adverb, but 'better' is the correct comparative form of 'well.'",
      },
      {
        id: "gr-7",
        question: "Which sentence is a fragment?",
        options: [
          "The dog barked loudly.",
          "Running through the park.",
          "She enjoys reading books.",
          "We left early because of the rain.",
        ],
        correctAnswer: 1,
        explanation:
          "'Running through the park' is a fragment — it has no subject and no complete thought. It's just a phrase.",
      },
      {
        id: "gr-8",
        question: "Which sentence uses the semicolon correctly?",
        options: [
          "I have a test; tomorrow.",
          "I studied hard; I passed the exam.",
          "The dog; ran away.",
          "Because; I was tired.",
        ],
        correctAnswer: 1,
        explanation:
          "A semicolon joins two related independent clauses (complete sentences). 'I studied hard' and 'I passed the exam' are both complete sentences.",
      },
      {
        id: "gr-9",
        question: "Which is correct: 'Neither the students nor the teacher ___ ready.'",
        options: ["are", "is", "were", "have been"],
        correctAnswer: 1,
        explanation:
          "With 'neither/nor,' the verb agrees with the subject closest to it. 'Teacher' (singular) is closest, so use 'is.'",
      },
      {
        id: "gr-10",
        question: "Which sentence correctly uses 'their,' 'there,' or 'they're'?",
        options: [
          "Their going to the park later.",
          "They're books are on the table.",
          "They're going to the park later.",
          "There going to the park later.",
        ],
        correctAnswer: 2,
        explanation:
          "'They're' = 'they are.' The sentence means 'They are going to the park later.' 'Their' shows possession, 'there' refers to a place.",
      },
    ],
    flashcards: [
      { id: "gr-f1", term: "Subject-Verb Agreement", definition: "Singular subjects need singular verbs; plural subjects need plural verbs" },
      { id: "gr-f2", term: "Run-on Sentence", definition: "Two or more complete sentences joined without proper punctuation or conjunction" },
      { id: "gr-f3", term: "Sentence Fragment", definition: "An incomplete sentence missing a subject, verb, or complete thought" },
      { id: "gr-f4", term: "Semicolon", definition: "Used to join two related independent clauses (complete sentences)" },
      { id: "gr-f5", term: "Affect vs. Effect", definition: "Affect = verb (to influence). Effect = noun (a result)." },
      { id: "gr-f6", term: "Its vs. It's", definition: "Its = possession. It's = it is or it has." },
      { id: "gr-f7", term: "Comma Splice", definition: "Using only a comma to join two independent clauses (incorrect). Fix with a period, semicolon, or conjunction." },
      { id: "gr-f8", term: "Parallel Structure", definition: "Using the same grammatical form for items in a list or comparison" },
    ],
  },
  {
    id: "writing-skills",
    name: "Writing Skills & Essay",
    description: "Paragraph structure, thesis statements, evidence, and the GED essay",
    studyGuide: {
      introduction:
        "The GED Language Arts test includes an Extended Response (essay) section. You'll read two passages and write an argumentative essay explaining which passage makes a stronger argument. You have 45 minutes.",
      sections: [
        {
          title: "Essay Structure",
          content:
            "A strong GED essay has: an introduction with a thesis statement, 2-3 body paragraphs with evidence from the passages, and a conclusion. Aim for 4-5 paragraphs total.",
          examples: [
            "Introduction: Introduce the topic, state your thesis (which argument is stronger)",
            "Body Paragraph 1: First reason with evidence from the passage",
            "Body Paragraph 2: Second reason with evidence from the passage",
            "Body Paragraph 3 (optional): Address the weaker argument and explain why it's weaker",
            "Conclusion: Restate your thesis and summarize your main points",
          ],
        },
        {
          title: "Thesis Statement",
          content:
            "Your thesis tells the reader your main argument. It should be clear, specific, and debatable. Place it at the end of your introduction.",
          examples: [
            "WEAK: 'Both passages have good points.' (too vague)",
            "STRONG: 'Passage A presents a more convincing argument because it uses statistical evidence and expert testimony, while Passage B relies on emotional appeals without data.'",
          ],
        },
        {
          title: "Using Evidence",
          content:
            "Support every claim with specific evidence from the passages. Quote or paraphrase, and always explain how the evidence supports your point.",
          examples: [
            "Use phrases like: 'According to Passage A...' or 'The author of Passage B states...'",
            "Always follow evidence with your own analysis of why it matters",
            "Compare how each passage handles the same issue",
          ],
        },
        {
          title: "Transitions and Organization",
          content:
            "Use transition words to connect your ideas and make your essay flow smoothly.",
          examples: [
            "To add info: furthermore, moreover, in addition, also",
            "To contrast: however, on the other hand, in contrast, although",
            "To conclude: in conclusion, ultimately, overall, to summarize",
            "To give examples: for instance, specifically, for example",
          ],
        },
      ],
      tips: [
        "Spend 5-10 minutes planning before you write. Outline your main points.",
        "Always take a clear position — don't say 'both sides are equally good.'",
        "Use specific quotes or paraphrases from the passages as evidence.",
        "Save 5 minutes at the end to proofread for grammar and spelling errors.",
        "Practice writing essays timed — 45 minutes goes fast.",
        "Focus on analyzing the STRENGTH of the arguments, not whether you agree with them.",
      ],
    },
    questions: [
      {
        id: "wr-1",
        question: "Where should a thesis statement appear in an essay?",
        options: [
          "In the conclusion",
          "At the end of the introduction",
          "In the first body paragraph",
          "At the beginning of the introduction",
        ],
        correctAnswer: 1,
        explanation:
          "The thesis statement should appear at the end of the introduction paragraph. It tells the reader what the essay will argue.",
      },
      {
        id: "wr-2",
        question: "Which is the STRONGEST thesis statement?",
        options: [
          "This essay is about school uniforms.",
          "School uniforms have pros and cons.",
          "School uniforms should be required because they reduce bullying, save money, and create a sense of community.",
          "I think school uniforms are good.",
        ],
        correctAnswer: 2,
        explanation:
          "A strong thesis is specific, debatable, and previews the main arguments. Option C does all three.",
      },
      {
        id: "wr-3",
        question: "What is the purpose of a topic sentence?",
        options: [
          "To summarize the entire essay",
          "To introduce the main idea of a paragraph",
          "To provide evidence for a claim",
          "To conclude the essay",
        ],
        correctAnswer: 1,
        explanation:
          "A topic sentence introduces the main idea of a single paragraph and tells the reader what that paragraph will discuss.",
      },
      {
        id: "wr-4",
        question: "On the GED essay, you are asked to:",
        options: [
          "Write about a personal experience",
          "Summarize a single passage",
          "Analyze two passages and argue which makes a stronger argument",
          "Write a creative story",
        ],
        correctAnswer: 2,
        explanation:
          "The GED Extended Response asks you to read two passages on the same topic and write an argumentative essay about which argument is better supported.",
      },
      {
        id: "wr-5",
        question: "Which transition word shows contrast?",
        options: ["Furthermore", "However", "Additionally", "Therefore"],
        correctAnswer: 1,
        explanation:
          "'However' signals a contrast or opposing idea. 'Furthermore' and 'Additionally' add information. 'Therefore' shows a result.",
      },
      {
        id: "wr-6",
        question: "What should the conclusion of an essay do?",
        options: [
          "Introduce new evidence",
          "Restate the thesis and summarize main points",
          "Ask the reader a question",
          "Copy the introduction word for word",
        ],
        correctAnswer: 1,
        explanation:
          "A conclusion should restate the thesis (in different words) and briefly summarize the main points made in the body paragraphs. Don't introduce new evidence.",
      },
    ],
    flashcards: [
      { id: "wr-f1", term: "Thesis Statement", definition: "A clear, specific, debatable claim that states your main argument. Goes at the end of the introduction." },
      { id: "wr-f2", term: "Topic Sentence", definition: "The first sentence of a body paragraph that introduces its main idea" },
      { id: "wr-f3", term: "Evidence", definition: "Facts, quotes, data, or examples from the text that support your argument" },
      { id: "wr-f4", term: "Transition Words", definition: "Words that connect ideas: however (contrast), furthermore (addition), therefore (result)" },
      { id: "wr-f5", term: "Argumentative Essay", definition: "An essay that takes a position and supports it with evidence and reasoning" },
      { id: "wr-f6", term: "Counterargument", definition: "An opposing viewpoint that you acknowledge and then refute with evidence" },
    ],
  },
]
