import type { Topic } from "@/lib/types"

export const mathTopics: Topic[] = [
  {
    id: "basic-math",
    name: "Basic Math & Number Sense",
    description: "Whole numbers, fractions, decimals, percents, and order of operations",
    studyGuide: {
      introduction:
        "Basic math skills are the foundation of the GED Mathematical Reasoning test. You need to be comfortable working with whole numbers, fractions, decimals, and percents, as well as understanding the order of operations (PEMDAS).",
      sections: [
        {
          title: "Order of Operations (PEMDAS)",
          content:
            "When an expression has multiple operations, follow this order: Parentheses first, then Exponents, then Multiplication and Division (left to right), then Addition and Subtraction (left to right). Remember: Please Excuse My Dear Aunt Sally.",
          examples: [
            "3 + 4 × 2 = 3 + 8 = 11 (multiply before adding)",
            "(3 + 4) × 2 = 7 × 2 = 14 (parentheses first)",
            "2 + 3² × 4 = 2 + 9 × 4 = 2 + 36 = 38",
          ],
        },
        {
          title: "Working with Fractions",
          content:
            "To add or subtract fractions, find a common denominator. To multiply fractions, multiply numerators and denominators. To divide fractions, multiply by the reciprocal of the second fraction.",
          examples: [
            "1/3 + 1/4 = 4/12 + 3/12 = 7/12",
            "2/5 × 3/7 = 6/35",
            "3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8 = 1 1/8",
          ],
        },
        {
          title: "Decimals and Percents",
          content:
            "To convert a percent to a decimal, divide by 100 (move the decimal point two places left). To convert a decimal to a percent, multiply by 100. To find a percent of a number, convert to decimal and multiply.",
          examples: [
            "25% = 0.25",
            "0.6 = 60%",
            "15% of 200 = 0.15 × 200 = 30",
            "What percent is 8 of 40? → 8/40 = 0.20 = 20%",
          ],
        },
        {
          title: "Absolute Value",
          content:
            "The absolute value of a number is its distance from zero on the number line. It is always positive or zero. Written as |x|.",
          examples: [
            "|5| = 5",
            "|-3| = 3",
            "|0| = 0",
            "|-7| + |3| = 7 + 3 = 10",
          ],
        },
      ],
      keyFormulas: [
        "Percent of a number: (percent/100) × number",
        "Percent change: (new - old) / old × 100%",
        "Simple interest: I = P × r × t",
      ],
      tips: [
        "Always follow PEMDAS — many GED questions test whether you know the correct order.",
        "When working with fractions on the GED, you can use the calculator. But practice by hand to build confidence.",
        "Percent problems often appear as word problems on the GED. Identify what you're solving for: the part, the whole, or the percent.",
      ],
    },
    questions: [
      {
        id: "bm-1",
        question: "What is the value of 3 + 4 × (5 - 2)²?",
        options: ["63", "39", "147", "48"],
        correctAnswer: 1,
        explanation:
          "Following PEMDAS: First parentheses (5-2=3), then exponents (3²=9), then multiplication (4×9=36), then addition (3+36=39).",
      },
      {
        id: "bm-2",
        question: "What is 3/8 + 1/6?",
        options: ["4/14", "13/24", "1/2", "5/24"],
        correctAnswer: 1,
        explanation:
          "Find common denominator (24): 3/8 = 9/24 and 1/6 = 4/24. So 9/24 + 4/24 = 13/24.",
      },
      {
        id: "bm-3",
        question: "A shirt costs $40 and is on sale for 25% off. What is the sale price?",
        options: ["$10", "$30", "$35", "$15"],
        correctAnswer: 1,
        explanation:
          "25% of $40 = 0.25 × 40 = $10 discount. Sale price = $40 - $10 = $30.",
      },
      {
        id: "bm-4",
        question: "What is the value of |-12| + |5|?",
        options: ["-7", "7", "17", "-17"],
        correctAnswer: 2,
        explanation: "|-12| = 12 and |5| = 5. So 12 + 5 = 17.",
      },
      {
        id: "bm-5",
        question: "Convert 0.045 to a percent.",
        options: ["45%", "4.5%", "0.45%", "0.045%"],
        correctAnswer: 1,
        explanation: "To convert decimal to percent, multiply by 100: 0.045 × 100 = 4.5%.",
      },
      {
        id: "bm-6",
        question: "What is 2/3 ÷ 5/6?",
        options: ["10/18", "5/9", "4/5", "12/15"],
        correctAnswer: 2,
        explanation:
          "To divide fractions, multiply by the reciprocal: 2/3 × 6/5 = 12/15 = 4/5.",
      },
      {
        id: "bm-7",
        question: "A population increased from 500 to 600. What is the percent increase?",
        options: ["10%", "20%", "16.7%", "100%"],
        correctAnswer: 1,
        explanation:
          "Percent increase = (new - old) / old × 100 = (600 - 500) / 500 × 100 = 100/500 × 100 = 20%.",
      },
      {
        id: "bm-8",
        question: "What is the value of 2³ × 3 + 4?",
        options: ["28", "36", "14", "100"],
        correctAnswer: 0,
        explanation: "Exponents first: 2³ = 8. Then multiply: 8 × 3 = 24. Then add: 24 + 4 = 28.",
      },
      {
        id: "bm-9",
        question: "If you invest $500 at 4% simple interest for 3 years, how much interest do you earn?",
        options: ["$20", "$40", "$60", "$80"],
        correctAnswer: 2,
        explanation: "I = P × r × t = 500 × 0.04 × 3 = $60.",
      },
      {
        id: "bm-10",
        question: "Which of the following is equivalent to 7/20?",
        options: ["0.035", "0.35", "3.5", "35"],
        correctAnswer: 1,
        explanation: "7 ÷ 20 = 0.35.",
      },
    ],
    flashcards: [
      { id: "bm-f1", term: "PEMDAS", definition: "Order of operations: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction" },
      { id: "bm-f2", term: "Reciprocal", definition: "A fraction flipped upside down. The reciprocal of a/b is b/a." },
      { id: "bm-f3", term: "Absolute Value", definition: "The distance of a number from zero on the number line. Always positive. Written as |x|." },
      { id: "bm-f4", term: "Simple Interest", definition: "I = Prt, where P = principal, r = rate (as decimal), t = time in years" },
      { id: "bm-f5", term: "Percent Increase", definition: "(New Value - Old Value) / Old Value × 100%" },
      { id: "bm-f6", term: "Common Denominator", definition: "A shared multiple of two or more denominators, used to add or subtract fractions" },
      { id: "bm-f7", term: "Composite Number", definition: "A whole number with more than two factors (not prime). Examples: 4, 6, 8, 9, 10" },
      { id: "bm-f8", term: "GCF (Greatest Common Factor)", definition: "The largest number that divides evenly into two or more numbers" },
    ],
  },
  {
    id: "algebra",
    name: "Algebra",
    description: "Linear equations, inequalities, systems of equations, and polynomials",
    studyGuide: {
      introduction:
        "Algebra makes up about 55% of the GED Math test. You need to solve linear equations, work with inequalities, understand functions, and manipulate polynomials.",
      sections: [
        {
          title: "Solving Linear Equations",
          content:
            "To solve a linear equation, isolate the variable on one side. Whatever you do to one side, do to the other. Work in reverse order of operations: undo addition/subtraction first, then multiplication/division.",
          examples: [
            "2x + 5 = 13 → 2x = 8 → x = 4",
            "3(x - 2) = 12 → x - 2 = 4 → x = 6",
            "5x - 3 = 2x + 9 → 3x = 12 → x = 4",
          ],
        },
        {
          title: "Linear Inequalities",
          content:
            "Solve inequalities like equations, but flip the inequality sign when you multiply or divide by a negative number.",
          examples: [
            "2x + 1 > 7 → 2x > 6 → x > 3",
            "-3x ≤ 12 → x ≥ -4 (sign flips!)",
          ],
        },
        {
          title: "Slope and Linear Functions",
          content:
            "The slope of a line measures its steepness. Slope = rise/run = (y₂ - y₁)/(x₂ - x₁). The slope-intercept form of a line is y = mx + b, where m is the slope and b is the y-intercept.",
          examples: [
            "Points (1, 3) and (4, 9): slope = (9-3)/(4-1) = 6/3 = 2",
            "y = 3x + 2 has slope 3 and y-intercept (0, 2)",
            "y = -x + 5 has slope -1 and y-intercept (0, 5)",
          ],
        },
        {
          title: "Systems of Equations",
          content:
            "A system of two equations with two variables can be solved by substitution or elimination. The solution is the point where the two lines intersect.",
          examples: [
            "y = 2x + 1 and y = -x + 4: Set equal → 2x + 1 = -x + 4 → 3x = 3 → x = 1, y = 3",
            "Elimination: x + y = 5 and x - y = 1 → add equations → 2x = 6 → x = 3, y = 2",
          ],
        },
        {
          title: "Polynomials and Factoring",
          content:
            "To factor a quadratic x² + bx + c, find two numbers that multiply to c and add to b. For ax² + bx + c, use the AC method or the quadratic formula.",
          examples: [
            "x² + 5x + 6 = (x + 2)(x + 3)",
            "x² - 9 = (x + 3)(x - 3) [difference of squares]",
            "2x² + 7x + 3 = (2x + 1)(x + 3)",
          ],
        },
      ],
      keyFormulas: [
        "Slope: m = (y₂ - y₁) / (x₂ - x₁)",
        "Slope-intercept form: y = mx + b",
        "Point-slope form: y - y₁ = m(x - x₁)",
        "Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a",
        "Difference of squares: a² - b² = (a+b)(a-b)",
      ],
      tips: [
        "Always check your answer by plugging it back into the original equation.",
        "On the GED, you can use the formula sheet — memorize how to USE formulas, not just the formulas themselves.",
        "When you see 'greater than' or 'less than' on a graph, remember the inequality sign flip rule.",
        "Word problems often translate to linear equations. Identify the unknown and write an equation.",
      ],
    },
    questions: [
      {
        id: "alg-1",
        question: "Solve for x: 3x - 7 = 14",
        options: ["x = 3", "x = 7", "x = 21", "x = -7"],
        correctAnswer: 1,
        explanation: "3x - 7 = 14 → 3x = 21 → x = 7.",
      },
      {
        id: "alg-2",
        question: "What is the slope of the line passing through (2, 5) and (6, 13)?",
        options: ["1/2", "2", "4", "8"],
        correctAnswer: 1,
        explanation: "Slope = (13 - 5) / (6 - 2) = 8/4 = 2.",
      },
      {
        id: "alg-3",
        question: "Solve: -2x + 4 > 10",
        options: ["x > -3", "x < -3", "x > 3", "x < 3"],
        correctAnswer: 1,
        explanation: "-2x + 4 > 10 → -2x > 6 → x < -3 (sign flips when dividing by negative).",
      },
      {
        id: "alg-4",
        question: "Factor: x² - 5x + 6",
        options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x + 1)(x - 6)"],
        correctAnswer: 0,
        explanation: "Find two numbers that multiply to 6 and add to -5: -2 and -3. So (x - 2)(x - 3).",
      },
      {
        id: "alg-5",
        question: "If y = 4x - 3, what is y when x = 5?",
        options: ["17", "20", "23", "12"],
        correctAnswer: 0,
        explanation: "y = 4(5) - 3 = 20 - 3 = 17.",
      },
      {
        id: "alg-6",
        question: "Solve the system: y = x + 2 and y = 3x - 4",
        options: ["(3, 5)", "(2, 4)", "(1, 3)", "(4, 6)"],
        correctAnswer: 0,
        explanation: "Set equal: x + 2 = 3x - 4 → 6 = 2x → x = 3. Then y = 3 + 2 = 5. Solution: (3, 5).",
      },
      {
        id: "alg-7",
        question: "What is the y-intercept of the line 2x + 3y = 12?",
        options: ["2", "3", "4", "6"],
        correctAnswer: 2,
        explanation: "Set x = 0: 3y = 12, so y = 4. The y-intercept is 4.",
      },
      {
        id: "alg-8",
        question: "Simplify: (3x² + 2x) - (x² - 5x + 1)",
        options: ["2x² + 7x - 1", "2x² - 3x - 1", "4x² + 7x + 1", "2x² + 7x + 1"],
        correctAnswer: 0,
        explanation: "Distribute the negative: 3x² + 2x - x² + 5x - 1 = 2x² + 7x - 1.",
      },
      {
        id: "alg-9",
        question: "If f(x) = 2x² - 3x + 1, what is f(2)?",
        options: ["3", "5", "7", "1"],
        correctAnswer: 0,
        explanation: "f(2) = 2(4) - 3(2) + 1 = 8 - 6 + 1 = 3.",
      },
      {
        id: "alg-10",
        question: "A gym charges a $50 sign-up fee plus $30 per month. Which equation represents the total cost (C) for m months?",
        options: ["C = 50m + 30", "C = 30m + 50", "C = 80m", "C = 50m - 30"],
        correctAnswer: 1,
        explanation: "The $50 is a one-time fee (constant) and $30/month is the rate (coefficient of m). C = 30m + 50.",
      },
      {
        id: "alg-11",
        question: "Solve: 2(x + 3) = x + 10",
        options: ["x = 4", "x = 7", "x = 13", "x = 2"],
        correctAnswer: 0,
        explanation: "2x + 6 = x + 10 → x = 4.",
      },
      {
        id: "alg-12",
        question: "What is the product of (x + 4)(x - 4)?",
        options: ["x² - 16", "x² + 16", "x² - 8", "x² - 8x + 16"],
        correctAnswer: 0,
        explanation: "This is a difference of squares: (a+b)(a-b) = a² - b². So x² - 16.",
      },
    ],
    flashcards: [
      { id: "alg-f1", term: "Slope-Intercept Form", definition: "y = mx + b, where m is slope and b is y-intercept" },
      { id: "alg-f2", term: "Slope Formula", definition: "m = (y₂ - y₁) / (x₂ - x₁)" },
      { id: "alg-f3", term: "Quadratic Formula", definition: "x = (-b ± √(b² - 4ac)) / 2a" },
      { id: "alg-f4", term: "Difference of Squares", definition: "a² - b² = (a + b)(a - b)" },
      { id: "alg-f5", term: "Function Notation", definition: "f(x) means 'the output of function f when input is x'. f(3) means plug in 3 for x." },
      { id: "alg-f6", term: "System of Equations", definition: "Two or more equations with the same variables. Solution is where they intersect." },
      { id: "alg-f7", term: "Inequality Sign Flip", definition: "When multiplying or dividing both sides of an inequality by a negative number, flip the sign." },
      { id: "alg-f8", term: "Distributive Property", definition: "a(b + c) = ab + ac" },
    ],
  },
  {
    id: "geometry",
    name: "Geometry",
    description: "Shapes, area, volume, perimeter, angles, and the Pythagorean theorem",
    studyGuide: {
      introduction:
        "Geometry makes up about 25% of the GED Math test. You need to calculate area, perimeter, volume, and surface area of common shapes, work with angles, and use the Pythagorean theorem.",
      sections: [
        {
          title: "Area and Perimeter",
          content:
            "Area measures the space inside a shape (square units). Perimeter measures the distance around a shape (linear units).",
          examples: [
            "Rectangle: Area = l × w, Perimeter = 2l + 2w",
            "Triangle: Area = ½ × b × h",
            "Circle: Area = πr², Circumference = 2πr",
            "Trapezoid: Area = ½ × h × (b₁ + b₂)",
          ],
        },
        {
          title: "Volume and Surface Area",
          content:
            "Volume measures the space inside a 3D shape (cubic units). Surface area measures the total area of all faces.",
          examples: [
            "Rectangular prism: V = l × w × h",
            "Cylinder: V = πr²h",
            "Sphere: V = (4/3)πr³",
            "Cone: V = (1/3)πr²h",
          ],
        },
        {
          title: "Pythagorean Theorem",
          content:
            "In a right triangle, a² + b² = c², where c is the hypotenuse (longest side, opposite the right angle). Use this to find a missing side.",
          examples: [
            "If a = 3 and b = 4: c² = 9 + 16 = 25, so c = 5",
            "If c = 13 and a = 5: b² = 169 - 25 = 144, so b = 12",
          ],
        },
        {
          title: "Angles",
          content:
            "Complementary angles add to 90°. Supplementary angles add to 180°. Vertical angles (opposite angles when lines cross) are equal. The angles in a triangle always add to 180°.",
          examples: [
            "If one angle in a triangle is 60° and another is 80°, the third is 180° - 60° - 80° = 40°",
            "If two angles are supplementary and one is 125°, the other is 55°",
          ],
        },
      ],
      keyFormulas: [
        "Area of rectangle: A = lw",
        "Area of triangle: A = ½bh",
        "Area of circle: A = πr²",
        "Circumference: C = 2πr",
        "Volume of rectangular prism: V = lwh",
        "Volume of cylinder: V = πr²h",
        "Pythagorean theorem: a² + b² = c²",
        "Surface area of cylinder: SA = 2πr² + 2πrh",
      ],
      tips: [
        "The GED provides a formula sheet — practice using it so you know where each formula is.",
        "Always check your units. Area is in square units, volume in cubic units.",
        "Draw a diagram if one isn't provided. Label what you know and what you need to find.",
        "Common Pythagorean triples to memorize: 3-4-5, 5-12-13, 8-15-17.",
      ],
    },
    questions: [
      {
        id: "geo-1",
        question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
        options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
        correctAnswer: 2,
        explanation: "Area = length × width = 8 × 5 = 40 cm².",
      },
      {
        id: "geo-2",
        question: "A right triangle has legs of 6 and 8. What is the hypotenuse?",
        options: ["10", "12", "14", "48"],
        correctAnswer: 0,
        explanation: "c² = 6² + 8² = 36 + 64 = 100. c = √100 = 10.",
      },
      {
        id: "geo-3",
        question: "What is the circumference of a circle with radius 7? (Use π ≈ 3.14)",
        options: ["21.98", "43.96", "153.86", "49"],
        correctAnswer: 1,
        explanation: "C = 2πr = 2 × 3.14 × 7 = 43.96.",
      },
      {
        id: "geo-4",
        question: "Two angles are supplementary. One angle is 65°. What is the other?",
        options: ["25°", "115°", "295°", "35°"],
        correctAnswer: 1,
        explanation: "Supplementary angles add to 180°. 180° - 65° = 115°.",
      },
      {
        id: "geo-5",
        question: "What is the volume of a cylinder with radius 3 and height 10? (Use π ≈ 3.14)",
        options: ["94.2", "282.6", "188.4", "30"],
        correctAnswer: 1,
        explanation: "V = πr²h = 3.14 × 9 × 10 = 282.6.",
      },
      {
        id: "geo-6",
        question: "A triangle has angles of 45° and 90°. What is the third angle?",
        options: ["35°", "45°", "55°", "90°"],
        correctAnswer: 1,
        explanation: "Triangle angles sum to 180°. 180° - 45° - 90° = 45°.",
      },
      {
        id: "geo-7",
        question: "What is the area of a triangle with base 12 and height 9?",
        options: ["108", "54", "21", "42"],
        correctAnswer: 1,
        explanation: "A = ½ × b × h = ½ × 12 × 9 = 54.",
      },
      {
        id: "geo-8",
        question: "What is the perimeter of a square with side length 6?",
        options: ["12", "24", "36", "48"],
        correctAnswer: 1,
        explanation: "Perimeter = 4 × side = 4 × 6 = 24.",
      },
      {
        id: "geo-9",
        question: "A rectangular box is 4 ft long, 3 ft wide, and 2 ft tall. What is its volume?",
        options: ["9 ft³", "12 ft³", "24 ft³", "26 ft³"],
        correctAnswer: 2,
        explanation: "V = l × w × h = 4 × 3 × 2 = 24 ft³.",
      },
      {
        id: "geo-10",
        question: "What is the area of a circle with diameter 10? (Use π ≈ 3.14)",
        options: ["31.4", "78.5", "157", "314"],
        correctAnswer: 1,
        explanation: "Radius = diameter/2 = 5. Area = πr² = 3.14 × 25 = 78.5.",
      },
    ],
    flashcards: [
      { id: "geo-f1", term: "Pythagorean Theorem", definition: "a² + b² = c² (for right triangles, where c is the hypotenuse)" },
      { id: "geo-f2", term: "Area of a Circle", definition: "A = πr²" },
      { id: "geo-f3", term: "Circumference", definition: "The distance around a circle. C = 2πr or C = πd" },
      { id: "geo-f4", term: "Supplementary Angles", definition: "Two angles that add up to 180°" },
      { id: "geo-f5", term: "Complementary Angles", definition: "Two angles that add up to 90°" },
      { id: "geo-f6", term: "Volume of a Cylinder", definition: "V = πr²h" },
      { id: "geo-f7", term: "Hypotenuse", definition: "The longest side of a right triangle, opposite the right angle" },
      { id: "geo-f8", term: "Vertical Angles", definition: "Opposite angles formed by intersecting lines. They are always equal." },
    ],
  },
  {
    id: "data-analysis",
    name: "Data Analysis & Probability",
    description: "Mean, median, mode, range, probability, and reading graphs",
    studyGuide: {
      introduction:
        "Data analysis and statistics make up about 20% of the GED Math test. You need to calculate measures of center, read graphs and charts, and understand basic probability.",
      sections: [
        {
          title: "Measures of Central Tendency",
          content:
            "Mean (average): Add all values, divide by count. Median: Middle value when sorted. Mode: Most frequent value. Range: Largest minus smallest.",
          examples: [
            "Data: 3, 5, 7, 7, 8 → Mean = 30/5 = 6, Median = 7, Mode = 7, Range = 5",
            "Data: 2, 4, 6, 8 → Mean = 20/4 = 5, Median = (4+6)/2 = 5, No mode, Range = 6",
          ],
        },
        {
          title: "Probability",
          content:
            "Probability = favorable outcomes / total outcomes. It ranges from 0 (impossible) to 1 (certain). To convert to percent, multiply by 100.",
          examples: [
            "Rolling a 3 on a die: P = 1/6 ≈ 16.7%",
            "Drawing a red card from a deck: P = 26/52 = 1/2 = 50%",
            "P(not A) = 1 - P(A)",
          ],
        },
        {
          title: "Reading Graphs and Charts",
          content:
            "The GED frequently asks you to interpret bar graphs, line graphs, pie charts, and scatter plots. Always read the title, labels, and scale carefully.",
          examples: [
            "Bar graph: Compare heights of bars to compare quantities",
            "Line graph: Look at the trend (increasing, decreasing, or steady)",
            "Pie chart: Each slice shows a percentage of the whole",
          ],
        },
      ],
      keyFormulas: [
        "Mean = sum of all values / number of values",
        "Probability = favorable outcomes / total outcomes",
        "P(not A) = 1 - P(A)",
      ],
      tips: [
        "On graph questions, always check the scale on the axes — they may not start at 0.",
        "For median with an even number of values, average the two middle numbers.",
        "Probability questions often use 'not' — remember P(not) = 1 - P(event).",
      ],
    },
    questions: [
      {
        id: "da-1",
        question: "Find the mean of: 12, 15, 18, 20, 25",
        options: ["15", "18", "20", "22"],
        correctAnswer: 1,
        explanation: "Mean = (12 + 15 + 18 + 20 + 25) / 5 = 90 / 5 = 18.",
      },
      {
        id: "da-2",
        question: "Find the median of: 3, 7, 9, 12, 15, 18",
        options: ["9", "10.5", "12", "7"],
        correctAnswer: 1,
        explanation: "Even number of values, so median = average of two middle values: (9 + 12) / 2 = 10.5.",
      },
      {
        id: "da-3",
        question: "A bag has 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a blue marble?",
        options: ["1/2", "3/10", "1/5", "5/8"],
        correctAnswer: 0,
        explanation: "Total marbles = 10. P(blue) = 5/10 = 1/2.",
      },
      {
        id: "da-4",
        question: "The mode of the data set 4, 6, 6, 8, 9, 6, 3 is:",
        options: ["4", "6", "8", "3"],
        correctAnswer: 1,
        explanation: "Mode is the most frequent value. 6 appears 3 times, more than any other.",
      },
      {
        id: "da-5",
        question: "If the probability of rain is 0.3, what is the probability it will NOT rain?",
        options: ["0.3", "0.7", "0.5", "1.3"],
        correctAnswer: 1,
        explanation: "P(not rain) = 1 - P(rain) = 1 - 0.3 = 0.7.",
      },
      {
        id: "da-6",
        question: "What is the range of: 22, 35, 18, 42, 27?",
        options: ["18", "24", "42", "35"],
        correctAnswer: 1,
        explanation: "Range = highest - lowest = 42 - 18 = 24.",
      },
      {
        id: "da-7",
        question: "A spinner has 8 equal sections numbered 1-8. What is the probability of landing on an even number?",
        options: ["1/4", "3/8", "1/2", "5/8"],
        correctAnswer: 2,
        explanation: "Even numbers: 2, 4, 6, 8 (4 out of 8). P = 4/8 = 1/2.",
      },
      {
        id: "da-8",
        question: "A student's test scores are 78, 85, 92, and 88. What score is needed on the 5th test to have a mean of 85?",
        options: ["80", "82", "85", "78"],
        correctAnswer: 1,
        explanation: "Need total of 85 × 5 = 425. Current total = 78 + 85 + 92 + 88 = 343. Need 425 - 343 = 82.",
      },
    ],
    flashcards: [
      { id: "da-f1", term: "Mean", definition: "The average. Add all values and divide by the number of values." },
      { id: "da-f2", term: "Median", definition: "The middle value when data is sorted. If even count, average the two middle values." },
      { id: "da-f3", term: "Mode", definition: "The value that appears most frequently in a data set." },
      { id: "da-f4", term: "Range", definition: "The difference between the highest and lowest values." },
      { id: "da-f5", term: "Probability", definition: "The likelihood of an event. P = favorable outcomes / total outcomes. Ranges from 0 to 1." },
      { id: "da-f6", term: "Complement", definition: "P(not A) = 1 - P(A). The probability that an event does NOT occur." },
    ],
  },
]
