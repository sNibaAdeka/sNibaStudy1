/* ═══════════════════════════════════════════
   sNibaStudy — NIS Curriculum Mock Data
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};

SNS.CURRICULUM = {

  math: {
    id: 'math',
    label: 'Mathematics',
    icon: 'fa-square-root-variable',
    colorVar: '--blue',
    color: '#60a5fa',
    grade: 'Grade 10',
    topics: [
      {
        id: 'math-algebra',
        title: 'Algebra',
        subtopics: [
          {
            id: 'math-quadratic',
            title: 'Quadratic Equations',
            grades: [10, 11, 12],
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['quadratic', 'equation', 'parabola', 'discriminant', 'roots', 'factoring', 'formula', 'ax2', 'vertex'],
            explanation: `A quadratic equation has the standard form: ax² + bx + c = 0, where a ≠ 0.

**Three solving methods:**

1. **Factoring** — Rewrite as (x + p)(x + q) = 0
   Example: x² - 5x + 6 = (x-2)(x-3) = 0 → x = 2 or x = 3

2. **Quadratic Formula** — Always works:
   x = (-b ± √(b² - 4ac)) / 2a

3. **Completing the Square** — Rewrite as (x + h)² = k

**The Discriminant D = b² - 4ac tells you:**
• D > 0 → two distinct real roots
• D = 0 → one repeated real root
• D < 0 → no real roots (complex)

**Example:** Solve 2x² - 4x - 6 = 0
Using formula: x = (4 ± √(16 + 48)) / 4 = (4 ± 8) / 4
x = 3 or x = -1`,
            simpleExplanation: `Imagine a ball thrown in the air. Its path makes a U-shape — that's a parabola, described by a quadratic equation ax² + bx + c = 0.

To find where the ball lands (roots), use the magic formula:
x = (-b ± √(b² - 4ac)) / 2a

Think of it as: x = (-b plus-or-minus square root of (b²-4ac)) divided by (2a)

If the number under the square root is negative, there are no real answers — the ball never hits the ground in our world!`,
            deepExplanation: `Quadratic equations model parabolic motion, optimization problems, and appear in physics, engineering, and economics.

**Vertex Form:** y = a(x-h)² + k, where (h,k) is the vertex
Converting: h = -b/2a, k = c - b²/4a

**Vieta's Formulas** (sum and product of roots):
If x₁, x₂ are roots: x₁ + x₂ = -b/a and x₁ · x₂ = c/a

**Graphical Analysis:**
• If a > 0: parabola opens upward (minimum at vertex)
• If a < 0: parabola opens downward (maximum at vertex)
• The axis of symmetry: x = -b/2a

**Complex roots:** When D < 0, roots are x = (-b ± i√|D|) / 2a
These are conjugate complex numbers a ± bi.`,
            quiz: [
              {
                q: 'What is the discriminant of x² - 5x + 6 = 0?',
                options: ['1', '4', '25', '-1'],
                correct: 0,
                explanation: 'D = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1'
              },
              {
                q: 'How many real roots does x² + 4 = 0 have?',
                options: ['0', '1', '2', 'Infinite'],
                correct: 0,
                explanation: 'D = 0 - 4(1)(4) = -16 < 0, so no real roots.'
              },
              {
                q: 'What are the roots of x² - 4 = 0?',
                options: ['x = ±2', 'x = ±4', 'x = 2 only', 'x = 0'],
                correct: 0,
                explanation: 'x² = 4 → x = ±√4 = ±2'
              },
              {
                q: 'For 2x² - 3x - 2 = 0, what is the product of the roots?',
                options: ['-1', '1', '-3/2', '3/2'],
                correct: 0,
                explanation: 'By Vieta\'s: x₁·x₂ = c/a = -2/2 = -1'
              },
              {
                q: 'Which method always works to solve a quadratic?',
                options: ['Quadratic formula', 'Factoring', 'Completing the square only', 'Graphing'],
                correct: 0,
                explanation: 'The quadratic formula x = (-b ± √(b²-4ac))/2a always works for any quadratic.'
              }
            ],
            flashcards: [
              { front: 'Quadratic Formula', back: 'x = (-b ± √(b² - 4ac)) / 2a' },
              { front: 'Discriminant', back: 'D = b² - 4ac\nD > 0: two roots\nD = 0: one root\nD < 0: no real roots' },
              { front: 'Vertex of parabola', back: 'x = -b/2a\ny = c - b²/4a' },
              { front: 'Sum of roots (Vieta)', back: 'x₁ + x₂ = -b/a' },
              { front: 'Product of roots (Vieta)', back: 'x₁ · x₂ = c/a' },
              { front: 'Standard form', back: 'ax² + bx + c = 0, where a ≠ 0' }
            ]
          },
          {
            id: 'math-functions',
            grades: [10, 11, 12],
            title: 'Functions & Graphs',
            difficulty: 'medium',
            estimatedMin: 25,
            keywords: ['function', 'domain', 'range', 'graph', 'linear', 'slope', 'intercept', 'mapping'],
            explanation: `A function f maps each input x to exactly one output f(x).

**Key concepts:**
• Domain — set of valid inputs
• Range — set of possible outputs
• f(x) notation — "f of x"

**Linear function:** f(x) = mx + b
• m = slope (rise/run)
• b = y-intercept

**Slope formula:** m = (y₂ - y₁)/(x₂ - x₁)

**Types of functions:**
• Constant: f(x) = c
• Linear: f(x) = mx + b
• Quadratic: f(x) = ax² + bx + c
• Absolute value: f(x) = |x|`,
            simpleExplanation: `A function is like a machine: you put something in, you get something out. Every input gives exactly ONE output.

Think of a vending machine: press B3, you always get the same snack. That's a function!

f(x) = 2x means "multiply the input by 2". So f(3) = 6, f(5) = 10.`,
            deepExplanation: `Functions are fundamental to all of mathematics. Advanced topics include:

**Composition:** (f∘g)(x) = f(g(x))
**Inverse functions:** f⁻¹ such that f(f⁻¹(x)) = x
**Even/Odd functions:**
  Even: f(-x) = f(x) (symmetric about y-axis)
  Odd: f(-x) = -f(x) (symmetric about origin)

**Piecewise functions:** Different rules for different domains.`,
            quiz: [
              { q: 'What is the slope of y = 3x - 7?', options: ['3', '-7', '7', '-3'], correct: 0, explanation: 'In y = mx + b, m = 3 is the slope.' },
              { q: 'For f(x) = x² - 1, what is f(3)?', options: ['8', '9', '7', '10'], correct: 0, explanation: 'f(3) = 3² - 1 = 9 - 1 = 8' },
              { q: 'What is the y-intercept of y = 2x + 5?', options: ['5', '2', '-5', '0'], correct: 0, explanation: 'The y-intercept is b = 5 in y = mx + b.' },
              { q: 'Which is NOT a function?', options: ['x² + y² = 4 (full circle)', 'y = x²', 'y = 3x', 'y = |x|'], correct: 0, explanation: 'A full circle fails the vertical line test — two y-values for one x.' },
              { q: 'If f(x) = 2x + 1, what is f(f(2))?', options: ['11', '5', '9', '10'], correct: 0, explanation: 'f(2) = 5, then f(5) = 2(5)+1 = 11' }
            ],
            flashcards: [
              { front: 'Domain', back: 'The set of all valid input values (x-values) of a function' },
              { front: 'Range', back: 'The set of all possible output values (y-values) of a function' },
              { front: 'Slope formula', back: 'm = (y₂ - y₁) / (x₂ - x₁)' },
              { front: 'Linear function', back: 'f(x) = mx + b\nm = slope, b = y-intercept' },
              { front: 'Vertical line test', back: 'A graph is a function if every vertical line touches it at most once' },
              { front: 'Composition (f∘g)(x)', back: 'Apply g first, then f: f(g(x))' }
            ]
          },
          {
            id: 'math-linear',
            grades: [9],
            title: 'Linear Equations & Inequalities',
            difficulty: 'easy',
            estimatedMin: 20,
            keywords: ['linear', 'equation', 'inequality', 'slope', 'intercept', 'solve', 'variable', 'ax+b', 'line'],
            explanation: `A linear equation has the form **ax + b = c** where the variable x appears to the first power only.

**Solving strategy:**
1. Move all x terms to one side
2. Move all constants to the other side
3. Divide by the coefficient of x

**Example:** Solve 3x - 7 = 2x + 5
→ 3x - 2x = 5 + 7
→ x = 12

**Linear inequalities** work the same way, but **flip the inequality sign when dividing/multiplying by a negative number**.

**Example:** -2x < 6 → x > -3 (sign flipped!)

**Two-variable linear equations** describe straight lines: y = mx + b
• m = slope (steepness)
• b = y-intercept (where line crosses y-axis)`,
            simpleExplanation: `A linear equation is like a balance scale — whatever you do to one side, do to the other.

Example: x + 3 = 7
Take away 3 from both sides: x = 4

For inequalities (>, <, ≥, ≤), it's the same EXCEPT: if you multiply or divide by a negative number, the arrow flips!
-x < 5 → x > -5`,
            deepExplanation: `Linear equations are degree-1 polynomials. Their graph is always a straight line.

**Systems of linear equations** have solutions where lines intersect:
- One solution: lines cross (independent)
- No solution: parallel lines (inconsistent)
- Infinite solutions: same line (dependent)

**Linear programming** uses systems of inequalities to optimize real-world problems (maximizing profit, minimizing cost).

The **slope-intercept form** y = mx + b relates to the **standard form** Ax + By = C via: m = -A/B, b = C/B.`,
            quiz: [
              { q: 'Solve: 4x + 3 = 15', options: ['x = 3', 'x = 4', 'x = 2', 'x = 6'], correct: 0, explanation: '4x = 12 → x = 3' },
              { q: 'Solve: -2x > 8', options: ['x < -4', 'x > -4', 'x < 4', 'x > 4'], correct: 0, explanation: 'Divide by -2 and flip sign: x < -4' },
              { q: 'The slope of y = 3x - 7 is:', options: ['3', '-7', '7', '-3'], correct: 0, explanation: 'In y = mx + b, m is the slope. Here m = 3.' },
              { q: 'Which point lies on y = 2x + 1?', options: ['(3, 7)', '(2, 4)', '(1, 4)', '(0, 2)'], correct: 0, explanation: 'y = 2(3) + 1 = 7 ✓' },
              { q: 'Solve: 5 - 3x = 2x - 10', options: ['x = 3', 'x = 1', 'x = 5', 'x = -3'], correct: 0, explanation: '15 = 5x → x = 3' }
            ],
            flashcards: [
              { front: 'Linear equation', back: 'ax + b = c\nVariable to the first power only. Graph is a straight line.' },
              { front: 'Solving linear equation', back: '1. Collect x terms on one side\n2. Collect constants on other side\n3. Divide by coefficient of x' },
              { front: 'Slope (m)', back: 'm = (y₂-y₁)/(x₂-x₁)\nPositive slope: line goes up left→right\nNegative slope: line goes down' },
              { front: 'y-intercept (b)', back: 'The y value when x = 0\nWhere the line crosses the y-axis' },
              { front: 'Inequality rule', back: 'When multiplying/dividing by a NEGATIVE number, FLIP the inequality sign\n-2x < 6 → x > -3' },
              { front: 'Parallel lines', back: 'Same slope (m), different intercepts\nNo solution — lines never meet' }
            ]
          },
          {
            id: 'math-systems',
            grades: [9, 10],
            title: 'Systems of Equations',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['system', 'simultaneous', 'substitution', 'elimination', 'linear system', 'two equations', 'intersection'],
            explanation: `A **system of equations** is two or more equations with the same variables. The solution is the point(s) satisfying all equations simultaneously.

**3 methods:**

**1. Substitution**
Solve one equation for one variable, substitute into the other.
Example: y = 2x and x + y = 6
→ x + 2x = 6 → x = 2, y = 4

**2. Elimination (Addition)**
Add/subtract equations to eliminate one variable.
Example: 2x + y = 8 and x - y = 1
→ Add: 3x = 9 → x = 3, y = 2

**3. Graphical**
Draw both lines; solution = intersection point.

**Types of solutions:**
• One solution: lines intersect
• No solution: parallel lines (same slope, different intercept)
• Infinitely many: same line`,
            simpleExplanation: `Imagine two friends buying items. One equation describes what Friend 1 bought, another for Friend 2. A system finds prices that match BOTH purchases.

Substitution method: solve for y in one equation, then plug it into the other. It's like replacing a variable with what it equals.

Elimination: add the two equations together so one variable cancels out!`,
            deepExplanation: `Systems of n equations with n unknowns can be solved using **matrices** (Gaussian elimination, Cramer's rule).

For 2×2 systems, the determinant D = a₁b₂ - a₂b₁:
- D ≠ 0: unique solution
- D = 0, consistent: infinite solutions
- D = 0, inconsistent: no solution

**Matrix form:** AX = B, solution X = A⁻¹B when det(A) ≠ 0.`,
            quiz: [
              { q: 'Solve: x + y = 5 and x - y = 1', options: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'], correct: 0, explanation: 'Add: 2x=6→x=3. Substitute: 3+y=5→y=2' },
              { q: 'System with no solution has lines that are:', options: ['Parallel', 'Perpendicular', 'Intersecting', 'Identical'], correct: 0, explanation: 'Parallel lines never intersect, so no common solution.' },
              { q: 'Solve by substitution: y=3x, 2x+y=10', options: ['x=2, y=6', 'x=3, y=1', 'x=1, y=3', 'x=5, y=0'], correct: 0, explanation: '2x+3x=10→5x=10→x=2, y=6' },
              { q: 'How many solutions does a consistent independent system have?', options: ['Exactly 1', 'None', 'Infinite', '2'], correct: 0, explanation: 'Consistent independent = one unique intersection point.' },
              { q: 'Which method is best when one equation is already solved for a variable?', options: ['Substitution', 'Elimination', 'Graphing', 'Determinants'], correct: 0, explanation: 'When y = ... or x = ..., substitution is fastest.' }
            ],
            flashcards: [
              { front: 'System of equations', back: 'Two or more equations with same variables\nSolution must satisfy ALL equations' },
              { front: 'Substitution method', back: '1. Solve one eq for one variable\n2. Substitute into other equation\n3. Solve, then back-substitute' },
              { front: 'Elimination method', back: 'Multiply equations by constants so one variable cancels when added/subtracted' },
              { front: 'Consistent system', back: 'Has at least one solution\n(lines intersect or are the same)' },
              { front: 'Inconsistent system', back: 'Has NO solution\nParallel lines — never intersect' },
              { front: 'Dependent system', back: 'Infinitely many solutions\nBoth equations describe the same line' }
            ]
          },
          {
            id: 'math-logarithms',
            grades: [10, 11],
            title: 'Logarithms & Exponentials',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['logarithm', 'log', 'ln', 'exponential', 'base', 'power', 'natural log', 'exponent', 'growth', 'decay'],
            explanation: `**Logarithms** are the inverse of exponential functions.

If **aˣ = b** then **log_a(b) = x**

**Key logarithm rules:**
• log(AB) = log A + log B (product rule)
• log(A/B) = log A - log B (quotient rule)
• log(Aⁿ) = n·log A (power rule)
• log_a(a) = 1 and log_a(1) = 0

**Common logarithms:**
• log = log₁₀ (base 10, used in science)
• ln = log_e (natural log, e ≈ 2.718)

**Change of base:** log_a(b) = log(b)/log(a)

**Exponential functions:** y = aˣ
• a > 1: exponential growth
• 0 < a < 1: exponential decay

**Example:** Solve 2ˣ = 32
x = log₂(32) = log(32)/log(2) = 5`,
            simpleExplanation: `A logarithm answers: "What power do I need to raise this base to get this number?"

log₂(8) = 3 because 2³ = 8

Think of log and exponential as opposite operations — like multiplication and division.

log₁₀(100) = 2 because 10² = 100
ln(e) = 1 because e¹ = e`,
            deepExplanation: `The natural logarithm ln(x) has derivative 1/x, making it fundamental in calculus.

**Exponential growth model:** P(t) = P₀·eᵏᵗ (population, investment)
**Exponential decay model:** A(t) = A₀·e⁻ᵏᵗ (radioactive decay, cooling)

**Half-life:** t₁/₂ = ln(2)/k

**pH scale:** pH = -log[H⁺] (logarithmic scale for acidity)

The exponential function eˣ is its own derivative — unique in all of mathematics.`,
            quiz: [
              { q: 'log₂(16) = ?', options: ['4', '3', '2', '8'], correct: 0, explanation: '2⁴ = 16, so log₂(16) = 4' },
              { q: 'log(100) = ? (base 10)', options: ['2', '10', '100', '1'], correct: 0, explanation: '10² = 100, so log₁₀(100) = 2' },
              { q: 'Simplify: log(6) + log(2) - log(3)', options: ['log(4)', 'log(5)', 'log(3)', 'log(9)'], correct: 0, explanation: 'log(6×2/3) = log(4)' },
              { q: 'Solve: 3ˣ = 27', options: ['x = 3', 'x = 9', 'x = 2', 'x = 4'], correct: 0, explanation: '3³ = 27, so x = 3' },
              { q: 'ln(1) = ?', options: ['0', '1', 'e', 'undefined'], correct: 0, explanation: 'e⁰ = 1, so ln(1) = 0' }
            ],
            flashcards: [
              { front: 'Definition of logarithm', back: 'log_a(b) = x  ↔  aˣ = b\n"Log base a of b equals x"' },
              { front: 'Product rule', back: 'log(A·B) = log A + log B' },
              { front: 'Quotient rule', back: 'log(A/B) = log A - log B' },
              { front: 'Power rule', back: 'log(Aⁿ) = n · log A' },
              { front: 'Natural logarithm (ln)', back: 'log base e ≈ 2.718\nln(e) = 1, ln(1) = 0\nInverse of eˣ' },
              { front: 'Change of base formula', back: 'log_a(b) = log(b) / log(a)' }
            ]
          },
          {
            id: 'math-derivatives',
            grades: [11, 12],
            title: 'Derivatives & Differentiation',
            difficulty: 'hard',
            estimatedMin: 45,
            keywords: ['derivative', 'differentiation', 'calculus', 'slope', 'tangent', 'rate of change', 'limit', 'dy/dx', 'chain rule', 'product rule'],
            explanation: `The **derivative** measures the instantaneous rate of change of a function.

**Definition:** f'(x) = lim[h→0] (f(x+h) - f(x)) / h

**Basic differentiation rules:**
• (xⁿ)' = nxⁿ⁻¹ (power rule)
• (cf)' = cf' (constant multiple)
• (f + g)' = f' + g' (sum rule)
• (fg)' = f'g + fg' (product rule)
• (f/g)' = (f'g - fg') / g² (quotient rule)
• [f(g(x))]' = f'(g(x)) · g'(x) (chain rule)

**Common derivatives:**
• (sin x)' = cos x
• (cos x)' = -sin x
• (eˣ)' = eˣ
• (ln x)' = 1/x

**Applications:**
• Slope of tangent line at a point
• Velocity from position function
• Finding maximum/minimum values`,
            simpleExplanation: `A derivative tells you how fast something is changing at any moment.

Speed is the derivative of position — it tells you how fast your position is changing right now.

The power rule is the easiest: bring the exponent down and reduce it by 1.
d/dx(x³) = 3x²
d/dx(x⁵) = 5x⁴

Think of it like this: at any point on a curve, the derivative gives you the slope of the line just touching that point.`,
            deepExplanation: `Derivatives are the foundation of differential calculus. The **second derivative** f''(x) gives the rate of change of the rate of change (concavity, acceleration).

**Critical points:** f'(x) = 0 or undefined → potential max/min
**First derivative test:** f' changes +→- at x: local max; -→+ local min
**Second derivative test:** f''(x) < 0: local max; f''(x) > 0: local min

**L'Hôpital's rule:** If lim f/g = 0/0 or ∞/∞, then lim f/g = lim f'/g'

**Implicit differentiation:** Differentiate both sides with respect to x.
For x² + y² = 25: 2x + 2y·(dy/dx) = 0 → dy/dx = -x/y`,
            quiz: [
              { q: "d/dx(x⁴) = ?", options: ['4x³', 'x³', '4x⁴', '3x³'], correct: 0, explanation: 'Power rule: bring down 4, subtract 1 from exponent: 4x³' },
              { q: "d/dx(3x² + 2x - 5) = ?", options: ['6x + 2', '3x + 2', '6x² + 2', '6x - 5'], correct: 0, explanation: 'd/dx(3x²)=6x, d/dx(2x)=2, d/dx(-5)=0' },
              { q: "d/dx(sin x) = ?", options: ['cos x', '-sin x', '-cos x', 'tan x'], correct: 0, explanation: 'Standard result: derivative of sin x is cos x' },
              { q: "If f(x) = eˣ, then f'(x) = ?", options: ['eˣ', 'xeˣ⁻¹', 'eˣ⁻¹', '1/eˣ'], correct: 0, explanation: 'eˣ is its own derivative — a unique property.' },
              { q: "The derivative gives the slope of the ___ at a point.", options: ['tangent line', 'secant line', 'normal line', 'chord'], correct: 0, explanation: 'f\'(a) = slope of the tangent line to the curve at x = a.' }
            ],
            flashcards: [
              { front: 'Power Rule', back: 'd/dx(xⁿ) = n·xⁿ⁻¹\nExample: d/dx(x⁵) = 5x⁴' },
              { front: 'Product Rule', back: '(fg)\' = f\'g + fg\'\nExample: d/dx(x²·sin x) = 2x·sin x + x²·cos x' },
              { front: 'Chain Rule', back: '[f(g(x))]\' = f\'(g(x)) · g\'(x)\nExample: d/dx(sin(x²)) = cos(x²) · 2x' },
              { front: 'Critical point', back: 'Where f\'(x) = 0 or undefined\nPotential maximum, minimum, or inflection point' },
              { front: 'd/dx(eˣ)', back: 'eˣ\nThe exponential function is its own derivative' },
              { front: 'd/dx(ln x)', back: '1/x\nValid for x > 0' }
            ]
          },
          {
            id: 'math-probability',
            grades: [10, 11, 12],
            title: 'Probability & Combinatorics',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['probability', 'combinatorics', 'permutation', 'combination', 'factorial', 'event', 'random', 'sample space', 'nCr', 'nPr'],
            explanation: `**Probability** is the measure of likelihood of an event occurring: P(A) = favourable outcomes / total outcomes.

**Counting principles:**
• **Multiplication rule:** If task 1 has m ways and task 2 has n ways → m×n total ways
• **Factorial:** n! = n × (n-1) × ... × 1
• **Permutations (order matters):** P(n,r) = n!/(n-r)!
• **Combinations (order doesn't matter):** C(n,r) = n!/[r!(n-r)!]

**Probability rules:**
• P(A) + P(not A) = 1
• P(A or B) = P(A) + P(B) - P(A and B)
• P(A and B) = P(A) × P(B) [if independent]
• Conditional: P(A|B) = P(A and B) / P(B)

**Example:** From 5 students, how many ways to choose 2?
C(5,2) = 5!/(2!·3!) = 10`,
            simpleExplanation: `Probability = (what you want) / (everything possible).

Flip a coin: P(heads) = 1/2
Roll a die: P(getting 4) = 1/6

Combinations = choosing WITHOUT caring about order
How many ways to pick 2 pizza toppings from 5? C(5,2) = 10

Permutations = choosing WHERE ORDER MATTERS
How many ways to arrange 3 runners on a podium from 5? P(5,3) = 60`,
            deepExplanation: `**Binomial theorem:** (a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏbᵏ

**Binomial probability:** P(X=k) = C(n,k)·pᵏ·(1-p)ⁿ⁻ᵏ
where n = trials, k = successes, p = success probability

**Expected value:** E(X) = Σ x·P(X=x)

**Bayes' Theorem:** P(A|B) = P(B|A)·P(A) / P(B)
Used in medical testing, spam filters, AI.`,
            quiz: [
              { q: 'P(rolling a prime on a 6-sided die) = ?', options: ['1/2', '1/3', '2/3', '1/6'], correct: 0, explanation: 'Primes on die: 2,3,5 → 3 outcomes out of 6 = 1/2' },
              { q: 'C(6,2) = ?', options: ['15', '30', '12', '6'], correct: 0, explanation: 'C(6,2) = 6!/(2!·4!) = 30/2 = 15' },
              { q: 'How many ways to arrange 4 books on a shelf?', options: ['24', '12', '16', '4'], correct: 0, explanation: '4! = 4×3×2×1 = 24' },
              { q: 'P(A) = 0.3, P(B) = 0.5, independent. P(A and B) = ?', options: ['0.15', '0.8', '0.2', '0.65'], correct: 0, explanation: 'Independent: P(A∩B) = P(A)·P(B) = 0.3×0.5 = 0.15' },
              { q: 'A bag has 3 red and 2 blue. P(drawing red) = ?', options: ['3/5', '2/5', '3/2', '1/2'], correct: 0, explanation: '3 red out of 5 total = 3/5' }
            ],
            flashcards: [
              { front: 'Probability formula', back: 'P(event) = number of favourable outcomes / total outcomes\n0 ≤ P(A) ≤ 1' },
              { front: 'Combination C(n,r)', back: 'Choosing r from n, ORDER DOES NOT MATTER\nC(n,r) = n! / [r!(n-r)!]' },
              { front: 'Permutation P(n,r)', back: 'Choosing r from n, ORDER MATTERS\nP(n,r) = n! / (n-r)!' },
              { front: 'Complement rule', back: 'P(not A) = 1 - P(A)\n"At least one" = 1 - P(none)' },
              { front: 'Addition rule', back: 'P(A or B) = P(A) + P(B) - P(A and B)' },
              { front: 'Independent events', back: 'P(A and B) = P(A) × P(B)\nKnowing A happened tells you nothing about B' }
            ]
          }
        ]
      },
      {
        id: 'math-trigonometry',
        title: 'Trigonometry',
        subtopics: [
          {
            id: 'math-trig-basic',
            grades: [10, 11, 12],
            title: 'Basic Trigonometric Ratios',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['sine', 'cosine', 'tangent', 'sin', 'cos', 'tan', 'triangle', 'angle', 'hypotenuse', 'sohcahtoa'],
            explanation: `Trigonometry studies relationships between angles and sides in triangles.

**SOH-CAH-TOA (for right triangles):**
• sin(θ) = Opposite / Hypotenuse
• cos(θ) = Adjacent / Hypotenuse
• tan(θ) = Opposite / Adjacent

**Key angles:**
| Angle | sin  | cos  | tan  |
|-------|------|------|------|
| 0°    | 0    | 1    | 0    |
| 30°   | 1/2  | √3/2 | 1/√3 |
| 45°   | √2/2 | √2/2 | 1    |
| 60°   | √3/2 | 1/2  | √3   |
| 90°   | 1    | 0    | ∞    |

**Pythagorean identity:** sin²(θ) + cos²(θ) = 1`,
            simpleExplanation: `SOHCAHTOA! Remember it like a magic spell:
• SOH: Sine = Opposite/Hypotenuse
• CAH: Cosine = Adjacent/Hypotenuse
• TOA: Tangent = Opposite/Adjacent

The hypotenuse is always the longest side — opposite the right angle.`,
            deepExplanation: `Beyond right triangles, trig extends to the unit circle and all angles.

**Unit circle:** radius 1, centered at origin
Point (cos θ, sin θ) for angle θ from positive x-axis.

**Reciprocal functions:**
• csc(θ) = 1/sin(θ)
• sec(θ) = 1/cos(θ)
• cot(θ) = 1/tan(θ)

**Law of Sines:** a/sin(A) = b/sin(B) = c/sin(C)
**Law of Cosines:** c² = a² + b² - 2ab·cos(C)`,
            quiz: [
              { q: 'In a right triangle with opposite=3, hypotenuse=5, what is sin(θ)?', options: ['3/5', '4/5', '3/4', '5/3'], correct: 0, explanation: 'sin = Opposite/Hypotenuse = 3/5 = 0.6' },
              { q: 'What is cos(60°)?', options: ['1/2', '√3/2', '√2/2', '1'], correct: 0, explanation: 'cos(60°) = 1/2 = 0.5 — memorize the key angles!' },
              { q: 'sin²(θ) + cos²(θ) = ?', options: ['1', '0', '2', 'tan²(θ)'], correct: 0, explanation: 'This is the Pythagorean identity — always equals 1.' },
              { q: 'tan(45°) = ?', options: ['1', '√2', '1/2', '0'], correct: 0, explanation: 'tan(45°) = sin/cos = (√2/2)/(√2/2) = 1' },
              { q: 'What is sin(90°)?', options: ['1', '0', '1/2', '√2/2'], correct: 0, explanation: 'sin(90°) = 1. At 90°, opposite = hypotenuse.' }
            ],
            flashcards: [
              { front: 'SOH', back: 'Sine = Opposite / Hypotenuse' },
              { front: 'CAH', back: 'Cosine = Adjacent / Hypotenuse' },
              { front: 'TOA', back: 'Tangent = Opposite / Adjacent' },
              { front: 'Pythagorean identity', back: 'sin²(θ) + cos²(θ) = 1' },
              { front: 'sin(30°)', back: '1/2' },
              { front: 'cos(60°)', back: '1/2' }
            ]
          }
        ]
      },
      {
        id: 'math-geometry',
        title: 'Geometry',
        subtopics: [
          {
            id: 'math-circles',
            grades: [9, 10, 11],
            title: 'Circle Geometry',
            difficulty: 'medium',
            estimatedMin: 25,
            keywords: ['circle', 'radius', 'diameter', 'circumference', 'area', 'chord', 'arc', 'sector', 'pi'],
            explanation: `A circle is the set of all points equidistant from a center.

**Key formulas:**
• Circumference: C = 2πr = πd
• Area: A = πr²
• Arc length: s = rθ (θ in radians)
• Sector area: A = ½r²θ

**Key terms:**
• Radius (r) — center to edge
• Diameter (d = 2r) — across the circle
• Chord — line segment connecting two points on the circle
• Tangent — line touching circle at exactly one point`,
            simpleExplanation: `A circle is perfectly round. Pi (π ≈ 3.14) is the special number that connects diameter to circumference.

Two formulas to know:
• Area = π × r² (how much space inside)
• Circumference = 2 × π × r (how far around the edge)`,
            deepExplanation: `Advanced circle theorems:
• Inscribed angle = half central angle
• Tangent-radius are perpendicular
• Power of a point: PA × PB = PC × PD (for chords through P)
• Circle equation: (x-h)² + (y-k)² = r²`,
            quiz: [
              { q: 'What is the area of a circle with radius 5?', options: ['25π', '10π', '5π', '50π'], correct: 0, explanation: 'A = πr² = π(5²) = 25π' },
              { q: 'What is the circumference of a circle with diameter 8?', options: ['8π', '4π', '16π', '64π'], correct: 0, explanation: 'C = πd = 8π' },
              { q: 'How many degrees are in a full circle?', options: ['360°', '180°', '270°', '90°'], correct: 0, explanation: 'A full rotation is always 360°' },
              { q: 'A tangent to a circle is...?', options: ['Perpendicular to the radius at contact', 'Parallel to the radius', 'A chord that passes through center', 'None of these'], correct: 0, explanation: 'A tangent always meets the radius at 90°.' },
              { q: 'If radius = 7, what is the diameter?', options: ['14', '7', '49', '3.5'], correct: 0, explanation: 'd = 2r = 2 × 7 = 14' }
            ],
            flashcards: [
              { front: 'Circle area', back: 'A = πr²' },
              { front: 'Circumference', back: 'C = 2πr = πd' },
              { front: 'Arc length', back: 's = rθ (θ in radians)' },
              { front: 'Sector area', back: 'A = ½r²θ' },
              { front: 'π (pi)', back: '≈ 3.14159... ratio of circumference to diameter' },
              { front: 'Tangent line property', back: 'Perpendicular to the radius at the point of tangency' }
            ]
          }
        ]
      },
      {
        id: 'math-statistics',
        title: 'Statistics & Probability',
        subtopics: [
          {
            id: 'math-stats-basic',
            grades: [9, 10, 11, 12],
            title: 'Descriptive Statistics',
            difficulty: 'easy',
            estimatedMin: 20,
            keywords: ['mean', 'median', 'mode', 'range', 'average', 'statistics', 'data', 'standard deviation', 'variance'],
            explanation: `Descriptive statistics summarize and describe data.

**Measures of central tendency:**
• Mean (average): sum ÷ count
• Median: middle value when sorted
• Mode: most frequent value

**Measures of spread:**
• Range: max - min
• Variance: average of squared deviations from mean
• Standard deviation: √variance (σ)

**Example data set:** {2, 4, 4, 6, 8, 8, 8, 10}
• Mean = (2+4+4+6+8+8+8+10)/8 = 50/8 = 6.25
• Median = (6+8)/2 = 7 (middle two values)
• Mode = 8 (appears 3 times)`,
            simpleExplanation: `Statistics help us understand data by finding the "center" and "spread":

• Mean = average (add everything, divide by count)
• Median = the middle number (sort them first!)
• Mode = the number that appears most often

For {1, 2, 2, 3, 4}: mean=2.4, median=2, mode=2`,
            deepExplanation: `Beyond basic statistics: box plots, z-scores, normal distribution.

**Z-score:** z = (x - μ) / σ — how many standard deviations from mean
**Normal distribution:** 68-95-99.7 rule (1σ, 2σ, 3σ covers those percentages)
**Correlation coefficient r:** -1 to 1, measures linear relationship strength`,
            quiz: [
              { q: 'Find the mean of {4, 7, 7, 10}', options: ['7', '8', '7.5', '6.5'], correct: 0, explanation: 'Mean = (4+7+7+10)/4 = 28/4 = 7' },
              { q: 'Find the median of {3, 7, 1, 9, 5}', options: ['5', '7', '3', '9'], correct: 0, explanation: 'Sorted: {1,3,5,7,9}. Middle value = 5.' },
              { q: 'For {2, 4, 4, 6, 8}, what is the mode?', options: ['4', '2', '6', '8'], correct: 0, explanation: '4 appears twice — more than any other value.' },
              { q: 'Range of {12, 5, 8, 20, 3} = ?', options: ['17', '20', '15', '10'], correct: 0, explanation: 'Range = max - min = 20 - 3 = 17' },
              { q: 'Which measure is MOST affected by outliers?', options: ['Mean', 'Median', 'Mode', 'Range'], correct: 0, explanation: 'The mean is pulled strongly by extreme values (outliers).' }
            ],
            flashcards: [
              { front: 'Mean', back: 'Sum of all values ÷ number of values' },
              { front: 'Median', back: 'Middle value when data is sorted in order' },
              { front: 'Mode', back: 'The value that appears most frequently' },
              { front: 'Range', back: 'Maximum value − Minimum value' },
              { front: 'Standard deviation', back: 'Measures how spread out data is from the mean' },
              { front: 'Outlier', back: 'A data point far from the rest of the data' }
            ]
          }
        ]
      },
      {
        id: 'math-sequences',
        title: 'Sequences & Series',
        subtopics: [
          {
            id: 'math-arithmetic',
            grades: [9, 10],
            title: 'Arithmetic Sequences',
            difficulty: 'easy',
            estimatedMin: 20,
            keywords: ['arithmetic', 'sequence', 'series', 'common difference', 'sum', 'nth term', 'progression'],
            explanation: `An arithmetic sequence has a constant difference (d) between terms.

**nth term formula:** aₙ = a₁ + (n-1)d

**Sum of first n terms:** Sₙ = n/2 × (a₁ + aₙ) = n/2 × (2a₁ + (n-1)d)

**Example:** 3, 7, 11, 15, ...
• a₁ = 3, d = 4
• a₁₀ = 3 + (10-1)×4 = 3 + 36 = 39
• S₁₀ = 10/2 × (3 + 39) = 5 × 42 = 210`,
            simpleExplanation: `An arithmetic sequence adds the same number each time.
Like: 2, 5, 8, 11, 14... (add 3 each time)

To find the nth term: first term + (n-1) × common difference`,
            deepExplanation: `Arithmetic sequences are special cases of linear functions.
Geometric sequences multiply by a constant ratio r.
aₙ = a₁ × rⁿ⁻¹, Sum = a₁(1-rⁿ)/(1-r)`,
            quiz: [
              { q: 'Find d for: 5, 9, 13, 17, ...', options: ['4', '5', '3', '9'], correct: 0, explanation: 'd = 9-5 = 13-9 = 4. Constant difference.' },
              { q: 'What is the 5th term of 2, 5, 8, 11, ...?', options: ['14', '13', '17', '15'], correct: 0, explanation: 'a₅ = 2 + (5-1)×3 = 2+12 = 14' },
              { q: 'Sum of first 100 natural numbers?', options: ['5050', '4950', '5100', '4900'], correct: 0, explanation: 'S = n(n+1)/2 = 100×101/2 = 5050' },
              { q: 'For 10, 7, 4, 1, ... what is d?', options: ['-3', '3', '-7', '7'], correct: 0, explanation: 'd = 7-10 = 4-7 = -3. Decreasing sequence.' },
              { q: 'a₁=3, d=2. Find a₈.', options: ['17', '19', '15', '21'], correct: 0, explanation: 'a₈ = 3 + 7×2 = 3 + 14 = 17' }
            ],
            flashcards: [
              { front: 'Arithmetic sequence nth term', back: 'aₙ = a₁ + (n-1)d' },
              { front: 'Sum of arithmetic series', back: 'Sₙ = n/2 × (a₁ + aₙ)' },
              { front: 'Common difference (d)', back: 'd = aₙ₊₁ - aₙ (constant for all n)' },
              { front: 'Sum of 1 to n', back: 'n(n+1)/2' },
              { front: 'Geometric sequence nth term', back: 'aₙ = a₁ × rⁿ⁻¹' },
              { front: 'Geometric series sum', back: 'Sₙ = a₁(1-rⁿ)/(1-r)' }
            ]
          }
        ]
      }
    ]
  },

  physics: {
    id: 'physics',
    label: 'Physics',
    icon: 'fa-atom',
    colorVar: '--accent',
    color: '#00d4aa',
    grade: 'Grade 10',
    topics: [
      {
        id: 'phys-mechanics',
        title: 'Classical Mechanics',
        subtopics: [
          {
            id: 'phys-newton',
            grades: [9, 10, 11],
            title: "Newton's Laws of Motion",
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['newton', 'force', 'motion', 'acceleration', 'inertia', 'velocity', 'mass', 'laws', 'action reaction'],
            explanation: `Newton's Three Laws of Motion form the foundation of classical mechanics.

**1st Law (Law of Inertia):**
An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction unless acted upon by an unbalanced force.

**2nd Law (F = ma):**
The acceleration of an object is directly proportional to the net force and inversely proportional to mass.
F = ma (Force = mass × acceleration)
Units: Newtons (N) = kg·m/s²

**3rd Law (Action-Reaction):**
For every action, there is an equal and opposite reaction.
If A exerts force on B, then B exerts equal force on A in the opposite direction.

**Weight vs Mass:**
Weight = mg (m = mass, g = 9.8 m/s² on Earth)`,
            simpleExplanation: `Newton had 3 big ideas about how things move:

1. **Lazy objects stay lazy** — things don't move unless pushed, things moving don't stop unless stopped.
2. **Push harder = go faster** — F = ma (force = mass × acceleration)
3. **Every push has a push back** — punch a wall, the wall punches back!`,
            deepExplanation: `Newton's laws break down at very high speeds (special relativity) and very small scales (quantum mechanics).

**Impulse-Momentum theorem:** J = Δp = F·Δt
**Work-Energy theorem:** W = ΔKE = F·d·cos(θ)
**Conservation of momentum:** p_total = constant (closed system)

Free body diagrams are essential for solving Newton's law problems — draw all forces acting on the object.`,
            quiz: [
              { q: 'F = 20N, m = 4kg. What is a?', options: ['5 m/s²', '4 m/s²', '80 m/s²', '0.2 m/s²'], correct: 0, explanation: 'a = F/m = 20/4 = 5 m/s²' },
              { q: 'What does Newton\'s 1st law describe?', options: ['Inertia', 'F=ma', 'Action-reaction', 'Gravity'], correct: 0, explanation: 'The 1st law is about inertia — objects resist changes to their motion.' },
              { q: 'What is the weight of a 10kg object on Earth? (g=10)', options: ['100 N', '10 N', '1 N', '9.8 N'], correct: 0, explanation: 'W = mg = 10 × 10 = 100 N' },
              { q: 'According to 3rd law, if you push a wall with 50N, the wall pushes you with:', options: ['50 N', '25 N', '100 N', '0 N'], correct: 0, explanation: 'Equal and opposite reaction: exactly 50 N back.' },
              { q: 'A 2kg ball accelerates at 3 m/s². Net force = ?', options: ['6 N', '1.5 N', '5 N', '9 N'], correct: 0, explanation: 'F = ma = 2 × 3 = 6 N' }
            ],
            flashcards: [
              { front: "Newton's 1st Law", back: 'Objects stay at rest or in motion unless acted on by net force (Inertia)' },
              { front: "Newton's 2nd Law", back: 'F = ma\nForce = mass × acceleration' },
              { front: "Newton's 3rd Law", back: 'Every action has an equal and opposite reaction' },
              { front: 'Weight formula', back: 'W = mg (g ≈ 9.8 m/s² on Earth)' },
              { front: 'Net Force', back: 'Vector sum of all forces acting on an object' },
              { front: 'Inertia', back: 'Resistance of an object to change in its state of motion' }
            ]
          },
          {
            id: 'phys-kinematics',
            grades: [10, 11],
            title: 'Kinematics',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['kinematics', 'velocity', 'acceleration', 'displacement', 'speed', 'SUVAT', 'projectile', 'distance', 'time'],
            explanation: `Kinematics studies motion without considering forces.

**SUVAT Variables:**
• s = displacement (m)
• u = initial velocity (m/s)
• v = final velocity (m/s)
• a = acceleration (m/s²)
• t = time (s)

**4 SUVAT equations:**
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as
4. s = ½(u + v)t

**Free fall:** a = g = 9.8 m/s² downward
**Projectile motion:** horizontal (constant v) + vertical (free fall)`,
            simpleExplanation: `Kinematics = describing motion with numbers.

Remember SUVAT: Speed/displacement/acceleration/time formulas.
The most useful: v = u + at (speed changes by acceleration × time)`,
            deepExplanation: `Kinematics in 2D uses vector components.
vₓ = v·cos(θ), vᵧ = v·sin(θ)
For projectile: range = v²·sin(2θ)/g`,
            quiz: [
              { q: 'u=0, a=5 m/s², t=4s. Find v.', options: ['20 m/s', '25 m/s', '10 m/s', '4 m/s'], correct: 0, explanation: 'v = u + at = 0 + 5×4 = 20 m/s' },
              { q: 'u=10, a=2, t=3. Find s.', options: ['39 m', '30 m', '21 m', '40 m'], correct: 0, explanation: 's = ut + ½at² = 10(3) + ½(2)(9) = 30 + 9 = 39 m' },
              { q: 'v²=u²+2as: u=0,a=10,s=5. v=?', options: ['10 m/s', '100 m/s', '50 m/s', '5 m/s'], correct: 0, explanation: 'v² = 0 + 2(10)(5) = 100 → v = 10 m/s' },
              { q: 'Free fall acceleration on Earth ≈ ?', options: ['9.8 m/s²', '10 m/s', '9.8 m/s', '10 m/s²'], correct: 0, explanation: 'g = 9.8 m/s² (or 10 m/s² for quick calculations)' },
              { q: 'A ball is thrown up at 20 m/s. How long to reach max height? (g=10)', options: ['2 s', '4 s', '1 s', '20 s'], correct: 0, explanation: 'At max height, v=0. t = (v-u)/a = (0-20)/(-10) = 2s' }
            ],
            flashcards: [
              { front: 'v = u + at', back: 'Final velocity = initial + acceleration × time' },
              { front: 's = ut + ½at²', back: 'Displacement = initial velocity × time + half × acceleration × time²' },
              { front: 'v² = u² + 2as', back: 'Useful when time is not given' },
              { front: 'Free fall g', back: 'g = 9.8 m/s² ≈ 10 m/s² downward' },
              { front: 'Speed vs Velocity', back: 'Speed = scalar (magnitude only)\nVelocity = vector (magnitude + direction)' },
              { front: 'Projectile motion', back: 'Horizontal: constant velocity\nVertical: free fall (g downward)' }
            ]
          }
        ]
      },
      {
        id: 'phys-electricity',
        title: 'Electricity & Magnetism',
        subtopics: [
          {
            id: 'phys-ohm',
            grades: [10, 11, 12],
            title: "Ohm's Law & Electric Circuits",
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['ohm', 'voltage', 'current', 'resistance', 'circuit', 'series', 'parallel', 'power', 'watt', 'ampere', 'volt'],
            explanation: `Electric circuits carry current (flow of charge) through conductors.

**Ohm's Law:** V = IR
• V = Voltage (Volts, V) — electrical "pressure"
• I = Current (Amperes, A) — flow of charge
• R = Resistance (Ohms, Ω) — opposition to flow

**Power:** P = IV = I²R = V²/R  (Watts)

**Series circuits:** same current everywhere
• R_total = R₁ + R₂ + R₃
• V_total = V₁ + V₂ + V₃

**Parallel circuits:** same voltage across each branch
• 1/R_total = 1/R₁ + 1/R₂ + 1/R₃
• I_total = I₁ + I₂ + I₃`,
            simpleExplanation: `Think of electricity like water in pipes:
• Voltage = water pressure
• Current = water flow rate
• Resistance = pipe narrowness

V = IR means: more resistance → less current (at same voltage)`,
            deepExplanation: `Kirchhoff's Laws for complex circuits:
• KCL (Current): sum of currents entering a node = sum leaving
• KVL (Voltage): sum of voltages around a closed loop = 0

Electric power transmitted: P = IV. Energy E = Pt (in Joules)
AC vs DC: AC alternates direction (50/60Hz mains), DC is constant (batteries).`,
            quiz: [
              { q: 'V=12V, R=4Ω. Find I.', options: ['3 A', '48 A', '8 A', '0.33 A'], correct: 0, explanation: 'I = V/R = 12/4 = 3 A' },
              { q: 'Two resistors 6Ω and 3Ω in series. Total R = ?', options: ['9 Ω', '2 Ω', '18 Ω', '4.5 Ω'], correct: 0, explanation: 'Series: R_total = 6+3 = 9Ω' },
              { q: 'Two resistors 6Ω and 3Ω in parallel. Total R = ?', options: ['2 Ω', '9 Ω', '4.5 Ω', '18 Ω'], correct: 0, explanation: '1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 → R = 2Ω' },
              { q: 'P = IV = ? (V=10, I=2)', options: ['20 W', '5 W', '12 W', '8 W'], correct: 0, explanation: 'P = IV = 2×10 = 20 W' },
              { q: 'In parallel circuits, voltage across each branch is:', options: ['Equal', 'Different', 'Zero', 'Doubled'], correct: 0, explanation: 'Parallel branches share the same voltage from the source.' }
            ],
            flashcards: [
              { front: "Ohm's Law", back: 'V = IR\nVoltage = Current × Resistance' },
              { front: 'Electric Power', back: 'P = IV = I²R = V²/R\nUnits: Watts (W)' },
              { front: 'Series resistance', back: 'R_total = R₁ + R₂ + R₃' },
              { front: 'Parallel resistance', back: '1/R_total = 1/R₁ + 1/R₂ + 1/R₃' },
              { front: 'Current (I)', back: 'Flow of electric charge, measured in Amperes (A)' },
              { front: 'Resistance (R)', back: 'Opposition to current flow, measured in Ohms (Ω)' }
            ]
          }
        ]
      },
      {
        id: 'phys-waves',
        title: 'Waves & Optics',
        subtopics: [
          {
            id: 'phys-waves-sound',
            grades: [10, 11],
            title: 'Waves & Sound',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['wave', 'sound', 'frequency', 'wavelength', 'amplitude', 'period', 'transverse', 'longitudinal', 'speed of sound', 'resonance', 'hertz'],
            explanation: `A **wave** is a disturbance that transfers energy without transferring matter.

**Key wave properties:**
• **Wavelength (λ)** — distance between two consecutive peaks (metres)
• **Frequency (f)** — number of oscillations per second (Hz)
• **Amplitude (A)** — maximum displacement from equilibrium
• **Period (T)** — time for one full oscillation: T = 1/f
• **Wave speed:** v = f × λ

**Types of waves:**
• **Transverse** — oscillation perpendicular to direction of travel (light, water waves)
• **Longitudinal** — oscillation parallel to direction of travel (sound)

**Sound:**
• Speed in air ≈ 343 m/s at 20°C
• Speed increases with temperature and density of medium
• **Pitch** = frequency; **Loudness** = amplitude
• **Resonance** — object vibrates at its natural frequency`,
            simpleExplanation: `Think of dropping a pebble in water. The ripples spreading out — those are waves. They carry energy, not water.

Wave speed = frequency × wavelength
If a wave has 10 peaks per second (10 Hz) and each peak is 2 metres apart → speed = 20 m/s

Sound is a longitudinal wave — air particles push back and forth.
Higher frequency = higher pitch
Bigger amplitude = louder sound`,
            deepExplanation: `The **wave equation:** d²y/dt² = v² d²y/dx²

**Doppler effect:** When a source moves toward you, frequency increases (higher pitch):
f_observed = f_source × (v ± v_observer)/(v ∓ v_source)

**Interference:** When two waves meet:
- Constructive: crests align → double amplitude
- Destructive: crest meets trough → cancel out

**Beats:** Two close frequencies f₁ and f₂ create beat frequency: f_beat = |f₁ - f₂|`,
            quiz: [
              { q: 'A wave has f = 5 Hz and λ = 4 m. Its speed is:', options: ['20 m/s', '0.8 m/s', '9 m/s', '1.25 m/s'], correct: 0, explanation: 'v = f × λ = 5 × 4 = 20 m/s' },
              { q: 'Sound waves are:', options: ['Longitudinal', 'Transverse', 'Electromagnetic', 'Mechanical transverse'], correct: 0, explanation: 'Sound waves are longitudinal — particles vibrate parallel to wave direction.' },
              { q: 'Period T = 0.1 s. Frequency = ?', options: ['10 Hz', '0.1 Hz', '100 Hz', '1 Hz'], correct: 0, explanation: 'f = 1/T = 1/0.1 = 10 Hz' },
              { q: 'What does amplitude determine in a sound wave?', options: ['Loudness', 'Pitch', 'Speed', 'Frequency'], correct: 0, explanation: 'Amplitude = maximum displacement = energy = loudness.' },
              { q: 'Which waves do NOT require a medium?', options: ['Electromagnetic waves', 'Sound waves', 'Water waves', 'Seismic waves'], correct: 0, explanation: 'EM waves (light, radio) travel through vacuum. Others need a medium.' }
            ],
            flashcards: [
              { front: 'Wave speed formula', back: 'v = f × λ\nv = speed (m/s), f = frequency (Hz), λ = wavelength (m)' },
              { front: 'Period and frequency', back: 'T = 1/f and f = 1/T\nT in seconds, f in Hz (cycles per second)' },
              { front: 'Transverse wave', back: 'Oscillation ⊥ to direction of travel\nExamples: light, water surface waves' },
              { front: 'Longitudinal wave', back: 'Oscillation ∥ to direction of travel\nExamples: sound, compression waves' },
              { front: 'Speed of sound in air', back: '≈ 343 m/s at 20°C\nIncreases with temperature and density' },
              { front: 'Resonance', back: 'When external frequency matches natural frequency of object\nCauses large amplitude vibrations' }
            ]
          },
          {
            id: 'phys-optics',
            grades: [11, 12],
            title: 'Light & Optics',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['light', 'optics', 'reflection', 'refraction', 'lens', 'mirror', 'snell', 'total internal reflection', 'focal length', 'refractive index'],
            explanation: `**Light** is an electromagnetic wave with speed c = 3×10⁸ m/s in vacuum.

**Reflection** — light bouncing off a surface.
Law: angle of incidence = angle of reflection (θᵢ = θᵣ)

**Refraction** — light bending as it passes between materials.
**Snell's Law:** n₁ sin θ₁ = n₂ sin θ₂
where n = refractive index (n_vacuum = 1, n_glass ≈ 1.5, n_water ≈ 1.33)

**Total Internal Reflection** — occurs when light moves from denser to less dense medium at an angle greater than the critical angle.

**Lenses:**
• Converging (convex): brings rays together, creates real images (f > 0)
• Diverging (concave): spreads rays apart, creates virtual images (f < 0)

**Lens equation:** 1/f = 1/v + 1/u
where f = focal length, u = object distance, v = image distance`,
            simpleExplanation: `Light travels in straight lines and bounces off mirrors at the same angle it hits.

When light passes from air into glass, it slows down and bends — this is refraction. That's why a straw looks bent in water!

Refractive index = how much a material slows light:
n = c / v (speed in vacuum / speed in material)

Convex lenses (like magnifying glasses) make things look bigger.
Concave lenses spread light out.`,
            deepExplanation: `**Wave optics:** Light exhibits interference and diffraction.
Double slit: bright bands at d·sin θ = mλ (constructive)

**Thin film interference:** Colours in soap bubbles from constructive/destructive interference of light reflected from both surfaces.

**Quantum interpretation:** Light is also quantized (photons): E = hf where h = 6.626×10⁻³⁴ J·s (Planck's constant).

**Critical angle:** sin θ_c = n₂/n₁ (when n₁ > n₂) — used in optical fibres.`,
            quiz: [
              { q: 'Angle of incidence = 30°. Angle of reflection = ?', options: ['30°', '60°', '90°', '45°'], correct: 0, explanation: 'Law of reflection: angle of incidence = angle of reflection.' },
              { q: 'Light goes from glass (n=1.5) to air (n=1). It bends:', options: ['Away from normal', 'Toward normal', 'Along normal', 'No bending'], correct: 0, explanation: 'Going to less dense medium (lower n) → bends away from normal.' },
              { q: 'Speed of light in vacuum ≈', options: ['3×10⁸ m/s', '3×10⁶ m/s', '3×10¹⁰ m/s', '340 m/s'], correct: 0, explanation: 'c ≈ 3×10⁸ m/s (300 million metres per second)' },
              { q: 'Which lens is used in a magnifying glass?', options: ['Convex (converging)', 'Concave (diverging)', 'Flat mirror', 'Prism'], correct: 0, explanation: 'A convex lens converges light, creating a magnified image.' },
              { q: 'Total internal reflection occurs when light moves from a ___ medium to a ___ medium.', options: ['Denser, less dense', 'Less dense, denser', 'Air, glass', 'Vacuum, water'], correct: 0, explanation: 'TIR: dense→less dense at angle ≥ critical angle.' }
            ],
            flashcards: [
              { front: 'Snell\'s Law', back: 'n₁·sin θ₁ = n₂·sin θ₂\nDescribes refraction at a boundary between two media' },
              { front: 'Refractive index (n)', back: 'n = c/v\nRatio of speed of light in vacuum to speed in medium\nn_air ≈ 1.0, n_glass ≈ 1.5' },
              { front: 'Total Internal Reflection', back: 'Occurs when angle > critical angle in denser medium\nUsed in optical fibres' },
              { front: 'Lens equation', back: '1/f = 1/v + 1/u\nf = focal length, u = object dist, v = image dist' },
              { front: 'Converging (convex) lens', back: 'Focal length f > 0\nBrings light rays together\nUsed in cameras, magnifiers, eyes' },
              { front: 'Diverging (concave) lens', back: 'Focal length f < 0\nSpreads light rays apart\nUsed in glasses for short-sightedness' }
            ]
          }
        ]
      },
      {
        id: 'phys-thermo',
        title: 'Thermodynamics',
        subtopics: [
          {
            id: 'phys-energy',
            grades: [10, 11],
            title: 'Work, Energy & Power',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['work', 'energy', 'power', 'kinetic', 'potential', 'joule', 'watt', 'conservation', 'mechanical energy', 'efficiency'],
            explanation: `**Work** is done when a force moves an object: **W = F × d × cos θ** (joules, J)
(θ = angle between force and displacement)

**Energy** — the capacity to do work (measured in joules).

**Types:**
• **Kinetic energy:** KE = ½mv² (energy of motion)
• **Gravitational PE:** PE = mgh (stored due to height)
• **Elastic PE:** PE = ½kx² (spring energy)

**Conservation of Mechanical Energy:**
KE + PE = constant (when no friction)
½mv² + mgh = constant

**Power** — rate of doing work: **P = W/t** (watts, W = J/s)
Also: P = Fv (force × velocity)

**Efficiency:** η = useful output energy / total input energy × 100%`,
            simpleExplanation: `Work = pushing something and it moves.
W = Force × distance
(If you push but nothing moves, you did no physics work!)

Energy = ability to do work.
Moving ball has kinetic energy: KE = ½mv²
Ball at the top of a hill has potential energy: PE = mgh

Conservation: as the ball rolls down, PE converts to KE — total stays the same.

Power = how fast you do work. A 100W bulb uses 100 joules every second.`,
            deepExplanation: `The **work-energy theorem:** W_net = ΔKE

**First Law of Thermodynamics:** ΔU = Q - W
(change in internal energy = heat added - work done)

**Elastic collisions** conserve both momentum AND kinetic energy.
**Inelastic collisions** conserve momentum only.

**Bernoulli's equation** (fluid energy conservation):
P + ½ρv² + ρgh = constant`,
            quiz: [
              { q: 'A 2kg object at height 5m. PE = ? (g = 10)', options: ['100 J', '50 J', '10 J', '25 J'], correct: 0, explanation: 'PE = mgh = 2 × 10 × 5 = 100 J' },
              { q: 'W = F × d × cos θ. If θ = 90°, W = ?', options: ['0 J', 'F×d', 'F/d', 'Maximum'], correct: 0, explanation: 'cos 90° = 0, so W = 0. Force perpendicular to motion does no work.' },
              { q: 'KE of a 3kg ball at 4 m/s = ?', options: ['24 J', '12 J', '48 J', '6 J'], correct: 0, explanation: 'KE = ½mv² = ½ × 3 × 16 = 24 J' },
              { q: 'Power = 50W for 10s. Work done = ?', options: ['500 J', '5 J', '50 J', '5000 J'], correct: 0, explanation: 'W = P × t = 50 × 10 = 500 J' },
              { q: 'An engine inputs 1000J, outputs 600J useful work. Efficiency = ?', options: ['60%', '40%', '167%', '6%'], correct: 0, explanation: 'η = 600/1000 × 100% = 60%' }
            ],
            flashcards: [
              { front: 'Work formula', back: 'W = F·d·cos θ\nForce × displacement × cos(angle between them)\nUnits: Joules (J)' },
              { front: 'Kinetic Energy', back: 'KE = ½mv²\nm = mass (kg), v = speed (m/s)' },
              { front: 'Gravitational PE', back: 'PE = mgh\nm = mass, g = 9.8 m/s², h = height' },
              { front: 'Conservation of energy', back: 'Total mechanical energy = KE + PE = constant\n(No friction/air resistance)' },
              { front: 'Power', back: 'P = W/t = F·v\nUnits: Watts (W = J/s)' },
              { front: 'Efficiency', back: 'η = (useful output / total input) × 100%\nAlways less than 100% due to energy losses' }
            ]
          }
        ]
      },
      { id: 'phys-modern',      title: 'Modern Physics',          subtopics: [] }
    ]
  },

  biology: {
    id: 'biology',
    label: 'Biology',
    icon: 'fa-dna',
    colorVar: '--green',
    color: '#4ade80',
    grade: 'Grade 10',
    topics: [
      {
        id: 'bio-cell',
        title: 'Cell Biology',
        subtopics: [
          {
            id: 'bio-cell-structure',
            grades: [9, 10],
            title: 'Cell Structure & Organelles',
            difficulty: 'easy',
            estimatedMin: 25,
            keywords: ['cell', 'organelle', 'nucleus', 'mitochondria', 'membrane', 'ribosome', 'eukaryote', 'prokaryote', 'cytoplasm'],
            explanation: `Cells are the basic units of life.

**Two main cell types:**
• Prokaryotic — no nucleus (bacteria, archaea)
• Eukaryotic — membrane-bound nucleus (animals, plants, fungi)

**Key organelles:**
• Nucleus — "control center", contains DNA
• Mitochondria — "powerhouse", produces ATP (energy)
• Ribosome — makes proteins
• Endoplasmic Reticulum (ER) — transport network
• Golgi apparatus — packages and ships proteins
• Lysosome — digests waste
• Cell membrane — controls what enters/exits
• Cell wall (plants) — rigid outer layer (cellulose)
• Chloroplast (plants) — photosynthesis`,
            simpleExplanation: `A cell is like a tiny city:
• Nucleus = city hall (headquarters, makes decisions)
• Mitochondria = power plants (makes energy)
• Ribosomes = factories (makes proteins)
• Cell membrane = city border (controls what comes in/out)`,
            deepExplanation: `Cell theory: all organisms are made of cells; cell is basic unit; all cells come from pre-existing cells.

Fluid mosaic model of membrane: phospholipid bilayer with embedded proteins.
Active transport requires ATP; passive transport doesn't.
Osmosis: water moves from low to high solute concentration.`,
            quiz: [
              { q: 'Which organelle is called the "powerhouse of the cell"?', options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi'], correct: 0, explanation: 'Mitochondria produce ATP through cellular respiration.' },
              { q: 'What does the nucleus contain?', options: ['DNA', 'ATP', 'Chlorophyll', 'Protein only'], correct: 0, explanation: 'The nucleus houses the cell\'s DNA (genetic information).' },
              { q: 'Which is unique to plant cells?', options: ['Chloroplast', 'Mitochondria', 'Ribosome', 'Cell membrane'], correct: 0, explanation: 'Chloroplasts perform photosynthesis — found only in plant cells.' },
              { q: 'Prokaryotic cells differ from eukaryotic by:', options: ['No membrane-bound nucleus', 'Having no DNA', 'Being larger', 'Having more organelles'], correct: 0, explanation: 'Prokaryotes lack a true nucleus — DNA floats in the cytoplasm.' },
              { q: 'Where are proteins synthesized?', options: ['Ribosomes', 'Mitochondria', 'Nucleus', 'Vacuole'], correct: 0, explanation: 'Ribosomes read mRNA and assemble amino acids into proteins.' }
            ],
            flashcards: [
              { front: 'Mitochondria', back: 'Powerhouse of the cell — produces ATP through cellular respiration' },
              { front: 'Nucleus', back: 'Control center — contains DNA and directs cell activities' },
              { front: 'Ribosome', back: 'Site of protein synthesis — reads mRNA to make proteins' },
              { front: 'Cell membrane', back: 'Selectively permeable barrier controlling what enters and exits' },
              { front: 'Chloroplast', back: 'Found in plant cells — site of photosynthesis' },
              { front: 'Prokaryote vs Eukaryote', back: 'Prokaryote: no nucleus\nEukaryote: membrane-bound nucleus' }
            ]
          }
        ]
      },
      {
        id: 'bio-genetics',
        title: 'Genetics & Heredity',
        subtopics: [
          {
            id: 'bio-mendelian',
            grades: [10, 11],
            title: "Mendelian Genetics",
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['mendelian', 'genetics', 'allele', 'dominant', 'recessive', 'genotype', 'phenotype', 'punnett', 'heredity', 'DNA', 'trait', 'inheritance'],
            explanation: `Gregor Mendel discovered the laws of heredity by studying pea plants.

**Key terms:**
• Gene — a segment of DNA that codes for a trait
• Allele — different versions of a gene (e.g. B = brown eyes, b = blue)
• Dominant — allele expressed when present (uppercase: B)
• Recessive — only expressed when two copies present (lowercase: bb)

**Genotype vs Phenotype:**
• Genotype — actual genetic combination (BB, Bb, or bb)
• Phenotype — observable characteristic (brown or blue eyes)

**Punnett Square:** Used to predict offspring ratios.

**Mendel's Laws:**
1. Law of Segregation — each parent passes one allele to offspring
2. Law of Independent Assortment — genes for different traits assort independently`,
            simpleExplanation: `Genes are like recipes. You get one copy from mom, one from dad.
Dominant = "louder" gene that shows up even with just one copy.
Recessive = "quiet" gene that only shows if you have TWO copies.

Punnett Square = grid to predict what babies might look like!`,
            deepExplanation: `Beyond Mendelian genetics: codominance (both alleles expressed, e.g. AB blood type), incomplete dominance (blending), multiple alleles (blood type: I^A, I^B, i).

DNA → RNA → Protein (Central Dogma):
• Transcription: DNA → mRNA in nucleus
• Translation: mRNA → protein at ribosome

Mutations: changes in DNA sequence. Can be beneficial, neutral, or harmful.`,
            quiz: [
              { q: 'T = Tall (dominant), t = short. What is phenotype of Tt?', options: ['Tall', 'Short', 'Medium', 'Cannot tell'], correct: 0, explanation: 'Tt has one dominant allele T, so phenotype is Tall.' },
              { q: 'Two carriers Bb × Bb. Probability of bb offspring?', options: ['25%', '50%', '75%', '100%'], correct: 0, explanation: 'Punnett: BB(25%), Bb(50%), bb(25%). So 25% chance of bb.' },
              { q: 'What is a genotype?', options: ['Actual allele combination', 'Physical appearance', 'Number of chromosomes', 'Type of mutation'], correct: 0, explanation: 'Genotype = the genetic makeup (e.g., Bb, BB, or bb).' },
              { q: 'Which is true for a recessive trait?', options: ['Needs two copies to show', 'Shows with just one copy', 'Always more common', 'Located on Y chromosome only'], correct: 0, explanation: 'A recessive allele (aa) only shows if inherited from both parents.' },
              { q: 'Mendel\'s Law of Segregation states that:', options: ['Each parent passes one allele to offspring', 'Genes are always dominant', 'All traits blend together', 'Gene pairs are linked'], correct: 0, explanation: 'Each parent\'s two alleles separate so offspring gets exactly one.' }
            ],
            flashcards: [
              { front: 'Dominant allele', back: 'Expressed when at least one copy is present\nShown with uppercase (A)' },
              { front: 'Recessive allele', back: 'Only expressed when two copies present (homozygous)\nShown with lowercase (a)' },
              { front: 'Genotype', back: 'The actual genetic combination: AA, Aa, or aa' },
              { front: 'Phenotype', back: 'The observable characteristic (what you can see)' },
              { front: 'Punnett Square', back: 'Grid used to predict offspring genotype and phenotype ratios' },
              { front: 'Law of Segregation', back: 'Alleles separate during gamete formation; offspring get one from each parent' }
            ]
          }
        ]
      },
      {
        id: 'bio-evolution',
        title: 'Evolution',
        subtopics: [
          {
            id: 'bio-evolution-natural',
            grades: [11, 12],
            title: 'Evolution & Natural Selection',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['evolution', 'natural selection', 'darwin', 'adaptation', 'mutation', 'fitness', 'species', 'variation', 'survival', 'fossil'],
            explanation: `**Evolution** is the change in heritable characteristics of biological populations over generations.

**Darwin's Theory of Natural Selection:**
1. **Variation** — individuals in a population differ in their traits
2. **Heredity** — traits are passed from parents to offspring
3. **Selection pressure** — environment favours certain traits
4. **Differential reproduction** — individuals with favourable traits survive and reproduce more

**Key concepts:**
• **Adaptation** — heritable trait that increases fitness
• **Fitness** — ability to survive and reproduce in a given environment
• **Speciation** — formation of new species (geographic isolation → reproductive isolation)
• **Mutation** — random change in DNA; ultimate source of new variation

**Evidence for evolution:**
• Fossil record (gradual changes over time)
• Comparative anatomy (homologous structures)
• Biogeography (species distribution)
• Molecular biology (DNA similarities)`,
            simpleExplanation: `Evolution = slow change in populations over many generations.

Imagine a population of rabbits. Some are brown, some are white. In a snowy area, white rabbits survive better (camouflage) and have more babies. Over generations, the population becomes mostly white.

That's natural selection — nature "selects" the traits that help survival.

Mutations are random DNA errors. Most are harmful, but occasionally one helps survival. Good mutations spread through the population over time.`,
            deepExplanation: `**Modern evolutionary synthesis** combines Darwinism with genetics.

**Hardy-Weinberg equilibrium:** Allele frequencies stay constant if: no mutation, random mating, no gene flow, no genetic drift, no selection.
p² + 2pq + q² = 1 and p + q = 1

**Types of natural selection:**
• Directional: shifts the mean trait value
• Stabilising: reduces variation around mean
• Disruptive: favours extremes, splits population

**Speciation mechanisms:**
• Allopatric: geographic separation
• Sympatric: reproductive isolation without separation`,
            quiz: [
              { q: 'What is the ultimate source of genetic variation?', options: ['Mutation', 'Natural selection', 'Migration', 'Reproduction'], correct: 0, explanation: 'Mutations are random DNA changes — the only source of truly new genetic information.' },
              { q: '"Survival of the fittest" means:', options: ['Best reproducers, not physically strongest', 'Strongest individuals survive', 'Fastest animals win', 'Largest animals dominate'], correct: 0, explanation: 'Fitness = reproductive success. A fit organism reproduces more, not necessarily the strongest.' },
              { q: 'Homologous structures provide evidence for:', options: ['Common ancestry', 'Similar environments', 'Convergent evolution', 'Genetic drift'], correct: 0, explanation: 'Homologous structures (e.g., human arm, whale flipper) show common ancestor with modification.' },
              { q: 'What drives natural selection?', options: ['Environmental pressure', 'Random mutations only', 'Individual choice', 'Sexual reproduction alone'], correct: 0, explanation: 'Environment creates selection pressure — some traits aid survival/reproduction more than others.' },
              { q: 'Geographic isolation leads to:', options: ['Allopatric speciation', 'Sympatric speciation', 'Extinction only', 'Genetic drift only'], correct: 0, explanation: 'Populations separated geographically can evolve independently into new species.' }
            ],
            flashcards: [
              { front: 'Natural Selection', back: 'Process where organisms with favourable traits survive and reproduce more\n→ population changes over time' },
              { front: 'Adaptation', back: 'Heritable trait that increases an organism\'s fitness in its environment\nResult of natural selection over many generations' },
              { front: 'Mutation', back: 'Random change in DNA sequence\nUltimate source of all genetic variation\nRaw material for evolution' },
              { front: 'Fitness (biological)', back: 'Ability to survive AND reproduce in a given environment\nMeasured by number of offspring' },
              { front: 'Speciation', back: 'Formation of new species\nAllopatric: geographic isolation\nSympatric: reproductive isolation without separation' },
              { front: 'Evidence for evolution', back: '1. Fossil record\n2. Homologous structures\n3. Biogeography\n4. DNA/molecular similarities' }
            ]
          },
          {
            id: 'bio-dna',
            grades: [11, 12],
            title: 'DNA & Protein Synthesis',
            difficulty: 'hard',
            estimatedMin: 40,
            keywords: ['DNA', 'RNA', 'protein', 'transcription', 'translation', 'codon', 'nucleotide', 'base pair', 'ribosome', 'mRNA', 'amino acid', 'gene expression'],
            explanation: `**DNA** (deoxyribonucleic acid) is the molecule of heredity.

**DNA structure:**
• Double helix — two antiparallel strands
• Sugar-phosphate backbone + nitrogenous bases
• Base pairs: A-T and G-C (held by H-bonds)

**Central Dogma:** DNA → RNA → Protein

**Transcription** (nucleus):
• DNA template strand is read 3'→5'
• mRNA is produced 5'→3'
• RNA polymerase adds complementary RNA bases (A→U, T→A, G→C, C→G)

**Translation** (ribosome):
• mRNA codons (3 bases) are read by ribosomes
• tRNA brings specific amino acids
• Start codon: AUG (methionine)
• Stop codons: UAA, UAG, UGA
• Polypeptide chain forms → folds into protein

**Mutation types:**
• Substitution: one base changed
• Insertion/deletion: frameshift → drastic change`,
            simpleExplanation: `DNA is like a recipe book for your body. Each gene is a recipe for one protein.

To make a protein:
1. **Transcription** — copy the DNA recipe into mRNA (like photocopying a page)
2. **Translation** — ribosomes read the mRNA and build a protein (like cooking from the recipe)

Each group of 3 bases on mRNA = 1 amino acid.
String of amino acids = protein.

A mutation is like a typo in the recipe — sometimes harmless, sometimes it ruins the dish.`,
            deepExplanation: `**Replication** before cell division: DNA helicase unwinds helix; DNA polymerase adds nucleotides; semi-conservative (each daughter cell gets one original strand).

**Gene regulation:** Promoters, enhancers, repressors control when genes are expressed.

**Epigenetics:** Gene expression changes without DNA sequence change (methylation, histone modification).

**Genetic code properties:**
• Universal (same in nearly all organisms)
• Redundant (multiple codons for one amino acid, e.g., UUU and UUC both code Phe)
• Non-overlapping`,
            quiz: [
              { q: 'DNA base pairing: Adenine pairs with:', options: ['Thymine', 'Guanine', 'Cytosine', 'Uracil'], correct: 0, explanation: 'In DNA: A-T and G-C. (In RNA: A pairs with U)' },
              { q: 'Transcription produces:', options: ['mRNA', 'Protein', 'tRNA only', 'DNA copy'], correct: 0, explanation: 'Transcription copies DNA into messenger RNA (mRNA) in the nucleus.' },
              { q: 'How many bases form one codon?', options: ['3', '1', '2', '4'], correct: 0, explanation: 'A codon is a triplet of 3 mRNA bases that codes for one amino acid.' },
              { q: 'Translation occurs at the:', options: ['Ribosome', 'Nucleus', 'DNA polymerase', 'Cell membrane'], correct: 0, explanation: 'Ribosomes read mRNA and assemble amino acids into polypeptides.' },
              { q: 'The Central Dogma of molecular biology is:', options: ['DNA → RNA → Protein', 'Protein → RNA → DNA', 'RNA → DNA → Protein', 'DNA → Protein only'], correct: 0, explanation: 'Information flows: DNA transcribed to RNA, RNA translated to protein.' }
            ],
            flashcards: [
              { front: 'DNA base pairs', back: 'A — T (Adenine–Thymine, 2 H-bonds)\nG — C (Guanine–Cytosine, 3 H-bonds)\nIn RNA: T replaced by U (Uracil)' },
              { front: 'Transcription', back: 'DNA → mRNA\nOccurs in the nucleus\nRNA polymerase reads template strand 3\'→5\'' },
              { front: 'Translation', back: 'mRNA → Protein\nOccurs at ribosomes\ntRNA brings amino acids; codons read 5\'→3\'' },
              { front: 'Codon', back: '3-base sequence on mRNA\nCodes for one amino acid\n64 possible codons, 20 amino acids' },
              { front: 'Start codon', back: 'AUG — codes for Methionine\nSignals beginning of protein synthesis' },
              { front: 'Mutation types', back: 'Substitution: one base replaced\nInsertion/Deletion: frameshift — all downstream codons changed' }
            ]
          }
        ]
      },
      {
        id: 'bio-ecology',
        title: 'Ecology & Ecosystems',
        subtopics: [
          {
            id: 'bio-ecosystems',
            grades: [9, 10],
            title: 'Ecosystems & Food Chains',
            difficulty: 'easy',
            estimatedMin: 25,
            keywords: ['ecosystem', 'food chain', 'food web', 'producer', 'consumer', 'decomposer', 'trophic level', 'energy flow', 'biome', 'habitat', 'niche'],
            explanation: `An **ecosystem** is a community of living organisms interacting with their non-living environment.

**Biotic factors** — living: plants, animals, bacteria, fungi
**Abiotic factors** — non-living: temperature, water, sunlight, soil

**Energy flow in a food chain:**
Producers → Primary Consumers → Secondary Consumers → Tertiary Consumers

• **Producers** (plants) — make food via photosynthesis
• **Herbivores** — eat plants (primary consumers)
• **Carnivores** — eat animals (secondary/tertiary consumers)
• **Omnivores** — eat both plants and animals
• **Decomposers** (bacteria, fungi) — break down dead matter

**10% Rule:** Only ~10% of energy transfers between trophic levels (90% lost as heat).

**Food web** = multiple interconnected food chains in an ecosystem.`,
            simpleExplanation: `Think of who eats whom:
Grass → Rabbit → Fox → Wolf

Grass makes its own food (producer).
Rabbit eats grass (herbivore/primary consumer).
Fox eats rabbit (secondary consumer).

Only 10% of energy passes from one level to the next — that's why there are fewer wolves than rabbits.

Decomposers (worms, bacteria) break down dead things and recycle nutrients back into the soil.`,
            deepExplanation: `**Biogeochemical cycles** recycle matter:
• Carbon cycle (photosynthesis, respiration, decomposition, combustion)
• Nitrogen cycle (fixation by bacteria, nitrification, denitrification)
• Water cycle (evaporation, condensation, precipitation)

**Ecological succession:** Communities change over time:
Primary (bare rock) → Pioneer species → climax community

**Carrying capacity (K):** Maximum population size an environment can sustain.
Logistic growth: dN/dt = rN(1 - N/K)`,
            quiz: [
              { q: 'Which organism makes its own food?', options: ['Producer (plant)', 'Herbivore', 'Carnivore', 'Decomposer'], correct: 0, explanation: 'Producers (plants, algae) make food via photosynthesis.' },
              { q: 'What % of energy typically transfers between trophic levels?', options: ['10%', '50%', '90%', '100%'], correct: 0, explanation: '10% rule: 90% of energy is lost as heat at each trophic level.' },
              { q: 'Decomposers break down dead organisms to release:', options: ['Nutrients', 'Sunlight', 'Oxygen only', 'Carbon dioxide only'], correct: 0, explanation: 'Decomposers recycle nutrients (N, P, C) back into the environment.' },
              { q: 'A food WEB differs from a food CHAIN because:', options: ['Multiple interconnected chains', 'Only one path of energy', 'Only plants included', 'No decomposers'], correct: 0, explanation: 'A food web shows all feeding relationships — more realistic than a single chain.' },
              { q: 'Abiotic factors include:', options: ['Temperature and water', 'Plants and animals', 'Bacteria and fungi', 'Predators and prey'], correct: 0, explanation: 'Abiotic = non-living: temperature, water, light, soil, pH.' }
            ],
            flashcards: [
              { front: 'Producer', back: 'Organism that makes own food via photosynthesis\nExamples: plants, algae, cyanobacteria\nBase of every food chain' },
              { front: 'Consumer levels', back: 'Primary: eats producers (herbivores)\nSecondary: eats primary consumers\nTertiary: eats secondary consumers' },
              { front: '10% Rule', back: 'Only ~10% of energy transfers from one trophic level to the next\n90% lost as heat → fewer organisms at higher levels' },
              { front: 'Decomposer', back: 'Breaks down dead organic matter\nExamples: bacteria, fungi, earthworms\nRecycles nutrients into ecosystem' },
              { front: 'Food web', back: 'Network of interconnected food chains\nMore realistic than a single food chain\nShows complexity of feeding relationships' },
              { front: 'Biotic vs Abiotic', back: 'Biotic: living factors (plants, animals, fungi)\nAbiotic: non-living factors (light, water, temp, soil)' }
            ]
          },
          {
            id: 'bio-photosynthesis',
            grades: [9, 10],
            title: 'Photosynthesis & Respiration',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['photosynthesis', 'respiration', 'chlorophyll', 'glucose', 'ATP', 'chloroplast', 'mitochondria', 'light reaction', 'Calvin cycle', 'aerobic', 'anaerobic'],
            explanation: `**Photosynthesis** converts light energy into chemical energy (glucose).

**Overall equation:**
6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂

**Two stages:**
1. **Light-dependent reactions** (thylakoid membranes): Light → ATP + NADPH, splits water, releases O₂
2. **Calvin cycle** (stroma): ATP + NADPH → glucose from CO₂

**Cellular Respiration** releases energy from glucose as ATP.

**Overall equation:**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP

**Aerobic respiration** (with O₂, 38 ATP):
1. Glycolysis (cytoplasm): glucose → 2 pyruvate, 2 ATP
2. Krebs cycle (mitochondria): 2 ATP
3. Electron transport chain: 34 ATP

**Anaerobic respiration** (without O₂, 2 ATP only):
• In yeast: glucose → ethanol + CO₂
• In muscle: glucose → lactic acid`,
            simpleExplanation: `Photosynthesis = plants eating sunlight.
Plants use CO₂ + water + sunlight to make sugar (food) + oxygen.
That's where all the oxygen you breathe comes from!

Respiration = cells burning sugar for energy.
ALL living things do this — animals, plants, bacteria.
Glucose + oxygen → CO₂ + water + energy (ATP)

Think of glucose as a battery: photosynthesis charges it, respiration discharges it.`,
            deepExplanation: `**Light reactions** use photosystems I and II:
- PSII: light excites electrons, water splits (O₂ released), generates ATP
- PSI: regenerates NADPH

**Chemiosmosis:** H⁺ gradient across thylakoid/inner mitochondrial membrane drives ATP synthase.

**Factors affecting photosynthesis rate:** Light intensity, CO₂ concentration, temperature (enzyme activity).

**RQ (Respiratory Quotient):** CO₂ produced/O₂ consumed
• Carbohydrate: RQ = 1
• Fat: RQ ≈ 0.7
• Protein: RQ ≈ 0.9`,
            quiz: [
              { q: 'Photosynthesis takes place in:', options: ['Chloroplasts', 'Mitochondria', 'Ribosomes', 'Nucleus'], correct: 0, explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis.' },
              { q: 'The by-product of photosynthesis is:', options: ['Oxygen', 'Carbon dioxide', 'Water', 'Glucose'], correct: 0, explanation: 'Splitting water releases O₂ as a by-product of the light reactions.' },
              { q: 'Aerobic respiration produces approximately ___ ATP per glucose:', options: ['38', '2', '10', '100'], correct: 0, explanation: 'Aerobic respiration: glycolysis(2) + Krebs(2) + ETC(34) ≈ 38 ATP' },
              { q: 'Anaerobic respiration in muscles produces:', options: ['Lactic acid', 'Ethanol', 'Glucose', 'Oxygen'], correct: 0, explanation: 'In muscle cells without oxygen: glucose → pyruvate → lactic acid' },
              { q: 'What is the raw material plants use in photosynthesis?', options: ['CO₂ and H₂O', 'O₂ and glucose', 'ATP and NADPH', 'Nitrogen and phosphorus'], correct: 0, explanation: 'Photosynthesis inputs: CO₂ (from air) + H₂O (from soil) + light energy' }
            ],
            flashcards: [
              { front: 'Photosynthesis equation', back: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\nOccurs in chloroplasts' },
              { front: 'Aerobic respiration', back: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~38 ATP\nOccurs in mitochondria' },
              { front: 'ATP', back: 'Adenosine triphosphate\nCellular energy currency\nReleased when phosphate bond broken' },
              { front: 'Glycolysis', back: 'First stage of respiration\nOccurs in cytoplasm (no O₂ needed)\nGlucose → 2 pyruvate + 2 ATP' },
              { front: 'Chlorophyll', back: 'Green pigment in chloroplasts\nAbsorbs red and blue light, reflects green\nCaptures light energy for photosynthesis' },
              { front: 'Anaerobic vs aerobic', back: 'Aerobic: 38 ATP (efficient, needs O₂)\nAnaerobic: 2 ATP (inefficient, no O₂ needed)\nMuscle lactic acid, yeast → alcohol' }
            ]
          }
        ]
      },
      {
        id: 'bio-human',
        title: 'Human Body Systems',
        subtopics: [
          {
            id: 'bio-circulatory',
            grades: [10, 11],
            title: 'Human Circulatory System',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['heart', 'blood', 'artery', 'vein', 'capillary', 'circulation', 'plasma', 'red blood cell', 'white blood cell', 'pulse', 'blood pressure', 'cardiac'],
            explanation: `The circulatory system transports blood, oxygen, nutrients, and waste products throughout the body.

**The Heart:**
• 4 chambers: left/right atria (upper), left/right ventricles (lower)
• Right side: pumps deoxygenated blood to lungs (pulmonary circulation)
• Left side: pumps oxygenated blood to body (systemic circulation)
• Cardiac cycle: diastole (relaxation) → systole (contraction)

**Blood vessels:**
• **Arteries** — carry blood AWAY from heart (thick, muscular walls, high pressure)
• **Veins** — carry blood TO heart (thin walls, valves prevent backflow)
• **Capillaries** — exchange vessels (one cell thick, exchange O₂, nutrients, CO₂)

**Blood components:**
• Plasma (55%) — liquid, carries dissolved substances
• Red blood cells — carry O₂ via haemoglobin
• White blood cells — immune defence
• Platelets — blood clotting

**Double circulation:** Blood passes through heart twice per complete circuit.`,
            simpleExplanation: `Your heart is a pump. It pumps blood around your body in two loops:
1. Heart → Lungs → Heart (pick up oxygen, drop off CO₂)
2. Heart → Body → Heart (deliver oxygen and nutrients)

Arteries carry blood AWAY from the heart (A for Away).
Veins carry blood back TO the heart.
Capillaries are tiny — so thin that oxygen can pass right through their walls.

Red blood cells carry oxygen using a protein called haemoglobin (gives blood its red colour).`,
            deepExplanation: `**Cardiac conduction system:** SA node (pacemaker) → AV node → Bundle of His → Purkinje fibres → synchronized contraction.

**Blood pressure:** systolic/diastolic (e.g., 120/80 mmHg). Systolic = ventricle contraction; Diastolic = ventricle relaxation.

**Atherosclerosis:** Plaque buildup in arteries → reduced blood flow → heart attack/stroke risk.

**ABO blood groups:** Determined by antigens on RBC surface (A, B, AB, O) and antibodies in plasma. O- is universal donor; AB+ is universal recipient.`,
            quiz: [
              { q: 'Which side of the heart pumps blood to the lungs?', options: ['Right ventricle', 'Left ventricle', 'Right atrium', 'Left atrium'], correct: 0, explanation: 'Right ventricle → pulmonary artery → lungs (pulmonary circulation).' },
              { q: 'Arteries carry blood:', options: ['Away from heart', 'To the heart', 'Only to lungs', 'Only oxygenated blood'], correct: 0, explanation: 'Arteries always carry blood AWAY from the heart (A = Away).' },
              { q: 'Haemoglobin is found in:', options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], correct: 0, explanation: 'Haemoglobin is the oxygen-carrying protein in red blood cells.' },
              { q: 'Where does gas exchange occur?', options: ['Capillaries', 'Arteries', 'Veins', 'Heart'], correct: 0, explanation: 'Capillaries are one cell thick — perfect for diffusion of O₂ and CO₂.' },
              { q: 'Blood clotting is the function of:', options: ['Platelets', 'Red blood cells', 'Plasma proteins', 'White blood cells'], correct: 0, explanation: 'Platelets (thrombocytes) aggregate at wound sites to form clots.' }
            ],
            flashcards: [
              { front: 'Double circulation', back: 'Pulmonary: heart → lungs → heart\nSystemic: heart → body → heart\nBlood passes through heart twice per circuit' },
              { front: 'Arteries vs Veins', back: 'Arteries: blood AWAY from heart, thick walls, high pressure\nVeins: blood TO heart, valves, low pressure' },
              { front: 'Capillaries', back: 'Microscopic vessels, one cell thick\nSite of gas/nutrient exchange\nConnect arteries to veins' },
              { front: 'Blood components', back: 'Plasma (55%): liquid\nRBC: O₂ transport (haemoglobin)\nWBC: immunity\nPlatelets: clotting' },
              { front: 'Heart chambers', back: 'Right atrium + Right ventricle: pulmonary\nLeft atrium + Left ventricle: systemic\nAtria receive; ventricles pump' },
              { front: 'Blood pressure', back: 'Systolic/Diastolic (e.g., 120/80 mmHg)\nSystolic = contraction, Diastolic = relaxation\nNormal: ~120/80' }
            ]
          }
        ]
      }
    ]
  },

  chemistry: {
    id: 'chemistry',
    label: 'Chemistry',
    icon: 'fa-flask',
    colorVar: '--orange',
    color: '#fb923c',
    grade: 'Grade 10',
    topics: [
      {
        id: 'chem-periodic',
        title: 'Periodic Table & Trends',
        subtopics: [
          {
            id: 'chem-periodic-table',
            grades: [9, 10],
            title: 'Periodic Table Structure',
            difficulty: 'easy',
            estimatedMin: 20,
            keywords: ['periodic table', 'element', 'period', 'group', 'metal', 'nonmetal', 'atomic number', 'atomic mass', 'proton', 'electron', 'neutron'],
            explanation: `The periodic table organizes all known elements by atomic number.

**Structure:**
• 118 elements, 7 periods (rows), 18 groups (columns)
• Periods: elements in same row have same number of electron shells
• Groups: elements in same column have similar properties

**Main regions:**
• Metals (left + center) — conduct electricity, malleable, shiny
• Non-metals (right) — poor conductors, brittle
• Metalloids (staircase boundary) — semiconductor properties

**Key groups:**
• Group 1 (Alkali metals): Li, Na, K — very reactive
• Group 2 (Alkaline earth): Be, Mg, Ca
• Group 17 (Halogens): F, Cl, Br, I — reactive non-metals
• Group 18 (Noble gases): He, Ne, Ar — unreactive

**Periodic trends (increasing across period left→right):**
• Atomic radius decreases
• Ionization energy increases
• Electronegativity increases`,
            simpleExplanation: `The periodic table is like a "map" of all atoms. Elements are arranged by atomic number (number of protons).

• Moving right across a row: atoms get more protons and pull electrons tighter
• Same column = similar behavior (like family members!)`,
            deepExplanation: `Electron configuration explains periodic trends.
Aufbau principle: fill lowest energy orbitals first.
1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ ...

Effective nuclear charge (Zeff) increases across periods, causing trends.`,
            quiz: [
              { q: 'Elements in the same group have similar...?', options: ['Chemical properties', 'Atomic mass', 'Number of protons', 'Electron shells'], correct: 0, explanation: 'Same group = same valence electrons = similar chemical behavior.' },
              { q: 'Noble gases are in group...?', options: ['18', '1', '17', '2'], correct: 0, explanation: 'Group 18 contains He, Ne, Ar, Kr, Xe, Rn — all noble gases.' },
              { q: 'Atomic radius _____ across a period left to right.', options: ['Decreases', 'Increases', 'Stays same', 'Doubles'], correct: 0, explanation: 'More protons pull electrons closer, shrinking the atom.' },
              { q: 'Which group is called Alkali Metals?', options: ['Group 1', 'Group 2', 'Group 17', 'Group 18'], correct: 0, explanation: 'Group 1: Li, Na, K, Rb, Cs, Fr — very reactive metals.' },
              { q: 'What determines an element\'s position in periodic table?', options: ['Atomic number (protons)', 'Atomic mass', 'Number of neutrons', 'Number of electrons only'], correct: 0, explanation: 'Elements are ordered by atomic number = number of protons.' }
            ],
            flashcards: [
              { front: 'Period (row)', back: 'Horizontal row — elements have same number of electron shells' },
              { front: 'Group (column)', back: 'Vertical column — elements have similar chemical properties' },
              { front: 'Noble gases', back: 'Group 18: He, Ne, Ar, Kr, Xe — full outer shells, unreactive' },
              { front: 'Alkali metals', back: 'Group 1: Li, Na, K — 1 valence electron, very reactive' },
              { front: 'Halogens', back: 'Group 17: F, Cl, Br, I — 7 valence electrons, very reactive' },
              { front: 'Atomic number', back: 'Number of protons in the nucleus (unique to each element)' }
            ]
          }
        ]
      },
      {
        id: 'chem-bonding',
        title: 'Chemical Bonding',
        subtopics: [
          {
            id: 'chem-bonding-types',
            grades: [10, 11],
            title: 'Types of Chemical Bonds',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['ionic', 'covalent', 'metallic', 'bond', 'electron', 'valence', 'electronegativity', 'polar', 'nonpolar', 'Lewis', 'sharing'],
            explanation: `Chemical bonds hold atoms together by sharing or transferring electrons.

**Three main bond types:**

**1. Ionic Bond** (metal + non-metal)
• Electrons are transferred from metal to non-metal
• Opposite ions attract each other (e.g. Na⁺Cl⁻ = table salt)
• High melting points, conduct electricity when dissolved

**2. Covalent Bond** (non-metal + non-metal)
• Electrons are shared between atoms
• Single bond (2e⁻), Double bond (4e⁻), Triple bond (6e⁻)
• Polar covalent: unequal sharing (e.g. H₂O)
• Non-polar covalent: equal sharing (e.g. H₂, O₂)

**3. Metallic Bond**
• Metal atoms share delocalized electrons in a "sea"
• Explains conductivity, malleability of metals`,
            simpleExplanation: `Atoms bond to become stable (like noble gases with 8 electrons).
Two ways to bond:
• Give/take electrons → ionic bond (like NaCl = salt)
• Share electrons → covalent bond (like H₂O = water)`,
            deepExplanation: `Lewis dot structures show valence electron arrangement.
Octet rule: atoms want 8 valence electrons (like noble gases).
VSEPR theory predicts 3D molecular shape based on electron pairs.

Electronegativity difference:
• >1.7 → ionic
• 0.4–1.7 → polar covalent
• <0.4 → non-polar covalent`,
            quiz: [
              { q: 'NaCl (table salt) has what type of bond?', options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'], correct: 0, explanation: 'Na (metal) transfers electron to Cl (non-metal) → ionic bond.' },
              { q: 'H₂ molecule has what type of bond?', options: ['Non-polar covalent', 'Polar covalent', 'Ionic', 'Metallic'], correct: 0, explanation: 'Two identical atoms share electrons equally → non-polar covalent.' },
              { q: 'What makes metallic bonds special?', options: ['Sea of delocalized electrons', 'Electron transfer', 'Equal electron sharing', 'No electrons involved'], correct: 0, explanation: 'Metals share "free" delocalized electrons — explains conductivity.' },
              { q: 'A double bond contains how many shared electrons?', options: ['4', '2', '6', '1'], correct: 0, explanation: 'Single = 2 electrons, double = 4 electrons, triple = 6 electrons.' },
              { q: 'H₂O has polar covalent bonds because:', options: ['O is more electronegative than H', 'H is more electronegative than O', 'Electrons are fully transferred', 'Both atoms are identical'], correct: 0, explanation: 'Oxygen pulls electrons more strongly, creating partial charges (δ- on O, δ+ on H).' }
            ],
            flashcards: [
              { front: 'Ionic bond', back: 'Transfer of electrons from metal to non-metal\nEx: NaCl, MgO' },
              { front: 'Covalent bond', back: 'Sharing of electrons between non-metals\nEx: H₂O, CO₂, H₂' },
              { front: 'Metallic bond', back: 'Sea of delocalized electrons shared by metal atoms\nExplains conductivity' },
              { front: 'Polar covalent', back: 'Unequal electron sharing due to electronegativity difference\nEx: H₂O, HCl' },
              { front: 'Octet rule', back: 'Atoms tend to gain/lose/share electrons to get 8 valence electrons' },
              { front: 'Valence electrons', back: 'Electrons in the outermost shell — involved in bonding' }
            ]
          }
        ]
      },
      {
        id: 'chem-reactions',
        title: 'Chemical Reactions',
        subtopics: [
          {
            id: 'chem-reaction-types',
            grades: [9, 10, 11],
            title: 'Types of Chemical Reactions',
            difficulty: 'medium',
            estimatedMin: 25,
            keywords: ['reaction', 'synthesis', 'decomposition', 'combustion', 'displacement', 'redox', 'oxidation', 'reduction', 'balancing', 'equation', 'reactant', 'product'],
            explanation: `Chemical reactions rearrange atoms to form new substances.

**5 Main reaction types:**

**1. Synthesis:** A + B → AB
   Example: 2H₂ + O₂ → 2H₂O

**2. Decomposition:** AB → A + B
   Example: 2H₂O → 2H₂ + O₂

**3. Single displacement:** A + BC → AC + B
   Example: Zn + 2HCl → ZnCl₂ + H₂

**4. Double displacement:** AB + CD → AD + CB
   Example: AgNO₃ + NaCl → AgCl + NaNO₃

**5. Combustion:** Fuel + O₂ → CO₂ + H₂O
   Example: CH₄ + 2O₂ → CO₂ + 2H₂O

**Balancing equations:** Law of Conservation of Mass — atoms are neither created nor destroyed.`,
            simpleExplanation: `Chemical reactions = atoms rearranging. Nothing is created or destroyed!
The most important rule: both sides of the equation must have the same number of each atom (balance it!).`,
            deepExplanation: `Redox reactions: electron transfer.
• Oxidation: loses electrons (OIL — Oxidation Is Loss)
• Reduction: gains electrons (RIG — Reduction Is Gain)
Acid-base reactions: proton transfer (Brønsted-Lowry theory).
Activation energy: minimum energy to start a reaction; catalysts lower it.`,
            quiz: [
              { q: '2H₂ + O₂ → 2H₂O is what type?', options: ['Synthesis', 'Decomposition', 'Combustion', 'Displacement'], correct: 0, explanation: 'Two substances combining into one product = synthesis.' },
              { q: 'In CH₄ + 2O₂ → CO₂ + 2H₂O, what type is this?', options: ['Combustion', 'Synthesis', 'Decomposition', 'Neutralization'], correct: 0, explanation: 'Hydrocarbon + oxygen → CO₂ + H₂O = combustion.' },
              { q: 'Balance: H₂ + Cl₂ → HCl. How many HCl?', options: ['2', '1', '3', '4'], correct: 0, explanation: 'H₂ + Cl₂ → 2HCl (balanced: 2H and 2Cl on each side).' },
              { q: 'Law of Conservation of Mass says:', options: ['Atoms are neither created nor destroyed', 'Energy is conserved', 'Reactions always release heat', 'Products weigh less than reactants'], correct: 0, explanation: 'Total mass of reactants = total mass of products.' },
              { q: 'Single displacement: Zn + H₂SO₄ → ZnSO₄ + ?', options: ['H₂', 'H₂O', 'ZnH₂', 'SO₄'], correct: 0, explanation: 'Zn displaces H from H₂SO₄ → ZnSO₄ + H₂ gas' }
            ],
            flashcards: [
              { front: 'Synthesis reaction', back: 'A + B → AB\nTwo substances combine into one' },
              { front: 'Decomposition reaction', back: 'AB → A + B\nOne compound breaks into simpler substances' },
              { front: 'Combustion reaction', back: 'Fuel + O₂ → CO₂ + H₂O\nRapid oxidation, releases energy as heat/light' },
              { front: 'Conservation of Mass', back: 'Atoms are neither created nor destroyed in a reaction\nBoth sides must have equal atoms' },
              { front: 'Oxidation', back: 'Loss of electrons (OIL: Oxidation Is Loss)' },
              { front: 'Reduction', back: 'Gain of electrons (RIG: Reduction Is Gain)' }
            ]
          }
        ]
      },
      {
        id: 'chem-organic',
        title: 'Organic Chemistry',
        subtopics: [
          {
            id: 'chem-organic-basics',
            grades: [11, 12],
            title: 'Organic Chemistry Basics',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['organic', 'carbon', 'hydrocarbon', 'alkane', 'alkene', 'alkyne', 'functional group', 'isomer', 'methane', 'ethane', 'benzene', 'homologous series'],
            explanation: `**Organic chemistry** studies carbon-containing compounds.

**Why carbon?** Carbon forms 4 bonds — can create chains, rings, and branching structures. Over 10 million organic compounds exist.

**Hydrocarbons** contain only C and H:
• **Alkanes** (CₙH₂ₙ₊₂) — single bonds only (saturated): methane CH₄, ethane C₂H₆, propane C₃H₈
• **Alkenes** (CₙH₂ₙ) — one double bond (unsaturated): ethene C₂H₄
• **Alkynes** (CₙH₂ₙ₋₂) — one triple bond: ethyne C₂H₂

**Homologous series** — a group of compounds differing by CH₂, with similar chemical properties.

**Functional groups** determine chemical behaviour:
• −OH: alcohol (ethanol C₂H₅OH)
• −COOH: carboxylic acid (acetic acid CH₃COOH)
• −NH₂: amine
• −CHO: aldehyde

**Isomers** — same molecular formula, different structure (e.g., butane and isobutane both C₄H₁₀)`,
            simpleExplanation: `Organic chemistry = chemistry of carbon compounds.

Carbon is special because it can link to 4 other atoms and form long chains.

Alkanes: all single bonds (CₙH₂ₙ₊₂)
- Methane (CH₄) = natural gas
- Ethane (C₂H₆)
- Propane (C₃H₈) = camping gas
- Butane (C₄H₁₀) = lighter fuel

Alkenes have a double bond (=) — more reactive than alkanes.
Ethene (C₂H₄) is used to ripen bananas!`,
            deepExplanation: `**Mechanisms:**
• Substitution (alkanes): CH₄ + Cl₂ → CH₃Cl + HCl (free radical)
• Addition (alkenes): CH₂=CH₂ + H₂ → CH₃CH₃ (electrophilic addition)
• Elimination: create double bond from single bonds (H₂O/HX removed)

**Polymers:** Repeated monomer units via addition (polythene from ethene) or condensation (nylon from diamine + diacid).

**Benzene (C₆H₆):** Aromatic compound — delocalised π electrons give special stability. Electrophilic substitution.`,
            quiz: [
              { q: 'General formula for alkanes:', options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'], correct: 0, explanation: 'Alkanes: saturated hydrocarbons CₙH₂ₙ₊₂ (only single bonds).' },
              { q: 'Methane has the formula:', options: ['CH₄', 'C₂H₆', 'C₃H₈', 'C₄H₁₀'], correct: 0, explanation: 'Methane: n=1, so C₁H₂(1)+2 = CH₄' },
              { q: 'Which contains a double bond?', options: ['Ethene C₂H₄', 'Ethane C₂H₆', 'Methane CH₄', 'Propane C₃H₈'], correct: 0, explanation: 'Alkenes have at least one C=C double bond. Ethene = C₂H₄.' },
              { q: 'The −OH functional group indicates:', options: ['Alcohol', 'Acid', 'Alkane', 'Amine'], correct: 0, explanation: '−OH (hydroxyl group) is the functional group of alcohols.' },
              { q: 'Isomers have the same:', options: ['Molecular formula, different structure', 'Structure, different formula', 'Name, different formula', 'Properties only'], correct: 0, explanation: 'Isomers: same molecular formula (e.g., C₄H₁₀) but different arrangements of atoms.' }
            ],
            flashcards: [
              { front: 'Alkane (saturated)', back: 'CₙH₂ₙ₊₂\nOnly single C-C bonds\nMethane, ethane, propane, butane' },
              { front: 'Alkene (unsaturated)', back: 'CₙH₂ₙ\nContains one C=C double bond\nEthene (C₂H₄), propene (C₃H₆)' },
              { front: 'Functional group', back: 'Atom or group that determines chemical properties\n−OH: alcohol\n−COOH: carboxylic acid\n−NH₂: amine' },
              { front: 'Homologous series', back: 'Compounds differing by CH₂\nSame functional group, similar properties\nGradual change in physical properties' },
              { front: 'Isomers', back: 'Same molecular formula, different structural arrangement\nExample: butane and methylpropane (both C₄H₁₀)' },
              { front: 'Polymer', back: 'Large molecule made of repeating monomer units\nAddition: polythene (from ethene)\nCondensation: nylon, polyester' }
            ]
          }
        ]
      },
      {
        id: 'chem-acids',
        title: 'Acids, Bases & Salts',
        subtopics: [
          {
            id: 'chem-acids-pH',
            grades: [9, 10],
            title: 'Acids, Bases & pH',
            difficulty: 'easy',
            estimatedMin: 25,
            keywords: ['acid', 'base', 'alkali', 'pH', 'neutral', 'indicator', 'neutralisation', 'salt', 'proton', 'hydrogen ion', 'hydroxide', 'litmus'],
            explanation: `**Acids** release H⁺ ions in water (lower pH). **Bases** (alkalis) release OH⁻ ions (higher pH).

**pH scale:** 0–14
• pH < 7: acidic (H⁺ concentration higher)
• pH = 7: neutral (pure water)
• pH > 7: alkaline/basic (OH⁻ concentration higher)

**Common acids:** HCl (hydrochloric), H₂SO₄ (sulfuric), HNO₃ (nitric), CH₃COOH (acetic/vinegar)
**Common bases:** NaOH (sodium hydroxide), Ca(OH)₂ (lime), NH₃ (ammonia)

**Neutralisation:** acid + base → salt + water
HCl + NaOH → NaCl + H₂O

**Indicators:**
• Litmus: red in acid, blue in base
• Universal indicator: full colour spectrum
• Phenolphthalein: colourless in acid, pink in base

**Brønsted-Lowry definition:** Acid = proton (H⁺) donor; Base = proton acceptor`,
            simpleExplanation: `pH is a scale from 0 to 14:
- 0-6: Acidic (lemon juice ≈ 2, cola ≈ 3)
- 7: Neutral (pure water)
- 8-14: Alkaline/Basic (soap ≈ 9, bleach ≈ 12)

Acid + Base = Salt + Water (neutralisation)
Like mixing lemon juice (acid) with baking soda (base) — they cancel each other out.

Litmus paper test: turns RED in acid, BLUE in base.`,
            deepExplanation: `**pH formula:** pH = -log[H⁺]
Neutral water: [H⁺] = 10⁻⁷ mol/L → pH = 7

**Strong vs Weak acids:**
Strong (HCl, H₂SO₄): fully dissociate in water
Weak (CH₃COOH): partially dissociate — equilibrium Ka

**Buffer solutions:** Resist pH change (weak acid + its conjugate base). Used in blood (CO₂/HCO₃⁻ system maintains pH 7.4).

**Titration:** Measure unknown concentration using a known solution. Equivalence point = complete neutralisation.`,
            quiz: [
              { q: 'pH of 3 is:', options: ['Acidic', 'Neutral', 'Alkaline', 'Basic'], correct: 0, explanation: 'pH < 7 = acidic. pH 3 is a fairly strong acid.' },
              { q: 'Neutralisation produces:', options: ['Salt + water', 'Salt only', 'Water only', 'Gas + water'], correct: 0, explanation: 'Acid + Base → Salt + Water (neutralisation reaction).' },
              { q: 'Litmus paper turns ___ in an acid:', options: ['Red', 'Blue', 'Green', 'Yellow'], correct: 0, explanation: 'Litmus turns red in acids, blue in bases/alkalis.' },
              { q: 'Which has pH closest to 7?', options: ['Pure water', 'Hydrochloric acid', 'Sodium hydroxide', 'Vinegar'], correct: 0, explanation: 'Pure water has pH = 7 (neutral).' },
              { q: 'Acids release ___ ions in water:', options: ['H⁺', 'OH⁻', 'Na⁺', 'Cl⁻'], correct: 0, explanation: 'Arrhenius definition: acid = H⁺ ion donor in aqueous solution.' }
            ],
            flashcards: [
              { front: 'pH scale', back: 'pH 0-6: Acidic\npH 7: Neutral\npH 8-14: Alkaline\npH = -log[H⁺]' },
              { front: 'Neutralisation', back: 'Acid + Base → Salt + Water\nHCl + NaOH → NaCl + H₂O\nResult: pH closer to 7' },
              { front: 'Litmus test', back: 'Red litmus: turns blue in ALKALI\nBlue litmus: turns red in ACID\nNo change: neutral' },
              { front: 'Strong acid', back: 'Fully dissociates in water\nHCl, H₂SO₄, HNO₃\nLow pH, very corrosive' },
              { front: 'Alkali vs Base', back: 'Base: accepts H⁺ (proton acceptor)\nAlkali: base that dissolves in water releasing OH⁻\nAll alkalis are bases, not all bases are alkalis' },
              { front: 'Common pH values', back: 'Stomach acid: pH 1-2\nVinegar: pH 3\nBlood: pH 7.4\nSeawater: pH 8\nBleach: pH 12-13' }
            ]
          },
          {
            id: 'chem-stoichiometry',
            grades: [10, 11],
            title: 'Mole Concept & Stoichiometry',
            difficulty: 'medium',
            estimatedMin: 40,
            keywords: ['mole', 'molar mass', 'Avogadro', 'stoichiometry', 'balanced equation', 'limiting reagent', 'yield', 'concentration', 'molarity', 'empirical formula'],
            explanation: `The **mole** is the chemist's counting unit: 1 mole = 6.022 × 10²³ particles (Avogadro's number).

**Molar mass** = mass of 1 mole of a substance (g/mol) = sum of atomic masses.
Example: H₂O = 2(1) + 16 = 18 g/mol

**Mole calculations:**
• n = m/M (moles = mass / molar mass)
• n = N/Nₐ (moles = number of particles / Avogadro's number)
• n = cV (moles = concentration × volume)

**Stoichiometry** uses mole ratios from balanced equations to calculate reactants/products.

**Example:** 2H₂ + O₂ → 2H₂O
2 moles H₂ reacts with 1 mole O₂ to produce 2 moles H₂O.

**Limiting reagent** — the reactant that runs out first, determines maximum product formed.

**Percentage yield:** (actual yield / theoretical yield) × 100%

**Concentration (molarity):** c = n/V (mol/L or M)`,
            simpleExplanation: `Atoms are tiny — we need to count them in huge groups. A "mole" is just a number: 6.022 × 10²³ (like "dozen" means 12).

Molar mass = mass of 1 mole = same number as atomic mass but in grams.
1 mole of water (H₂O) = 18 grams.

If you have 36g of water: 36/18 = 2 moles of water.

Stoichiometry = using balanced equations to calculate amounts.
The balanced equation tells you the ratio of moles.`,
            deepExplanation: `**Empirical vs Molecular formula:**
Empirical = simplest ratio (CH₂O for glucose)
Molecular = actual formula (C₆H₁₂O₆ for glucose)

**Gas stoichiometry:** At STP (0°C, 1 atm): 1 mole of gas = 22.4 L

**Theoretical vs actual yield:**
Theoretical = max possible (from stoichiometry)
Actual = what you get in lab
% yield = (actual/theoretical) × 100%

**Titration calculations:**
n(acid) = cV, n(base) = cV
At equivalence: n(acid)/n(base) = stoichiometric ratio`,
            quiz: [
              { q: 'Molar mass of CO₂ = ? (C=12, O=16)', options: ['44 g/mol', '28 g/mol', '16 g/mol', '32 g/mol'], correct: 0, explanation: 'CO₂ = 12 + 2(16) = 44 g/mol' },
              { q: 'How many moles in 9g of H₂O? (M=18)', options: ['0.5 mol', '1 mol', '2 mol', '9 mol'], correct: 0, explanation: 'n = m/M = 9/18 = 0.5 mol' },
              { q: 'Avogadro\'s number is approximately:', options: ['6.022×10²³', '6.022×10³', '3.14×10²³', '1.6×10⁻¹⁹'], correct: 0, explanation: 'Nₐ = 6.022 × 10²³ particles per mole.' },
              { q: 'The limiting reagent is:', options: ['First reactant to run out', 'Excess reactant', 'Product formed', 'Catalyst'], correct: 0, explanation: 'Limiting reagent runs out first and determines maximum yield.' },
              { q: 'Concentration 2 mol/L, volume 0.5 L. Moles = ?', options: ['1 mol', '2.5 mol', '0.25 mol', '4 mol'], correct: 0, explanation: 'n = c × V = 2 × 0.5 = 1 mol' }
            ],
            flashcards: [
              { front: 'The Mole', back: '1 mole = 6.022 × 10²³ particles\nAvogadro\'s number (Nₐ)\nMoles = mass / molar mass' },
              { front: 'Molar mass', back: 'Mass of 1 mole in g/mol\nEqual to sum of atomic masses\nH₂O = 2(1) + 16 = 18 g/mol' },
              { front: 'n = m/M', back: 'moles = mass (g) / molar mass (g/mol)\nExample: 44g CO₂ ÷ 44 g/mol = 1 mol' },
              { front: 'Concentration (molarity)', back: 'c = n/V\nmol/L (also written M or mol dm⁻³)\n2M HCl = 2 moles HCl per litre' },
              { front: 'Limiting reagent', back: 'Reagent that runs out first\nDetermines max amount of product\nOther reagent is in excess' },
              { front: 'Percentage yield', back: '(actual yield / theoretical yield) × 100%\nAlways ≤ 100%\nLosses due to incomplete reactions, spillage' }
            ]
          }
        ]
      }
    ]
  },

  english: {
    id: 'english',
    label: 'English',
    icon: 'fa-book-open',
    colorVar: '--purple',
    color: '#a78bfa',
    grade: 'Grade 10',
    topics: [
      {
        id: 'eng-grammar',
        title: 'Advanced Grammar',
        subtopics: [
          {
            id: 'eng-tenses',
            grades: [9, 10, 11, 12],
            title: 'Verb Tenses',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['tense', 'past', 'present', 'future', 'perfect', 'continuous', 'grammar', 'verb', 'had', 'have', 'will have'],
            explanation: `English has 12 main tenses formed by combining time (past/present/future) with aspect (simple/continuous/perfect/perfect continuous).

**Present tenses:**
• Simple: "I study" (habits, facts)
• Continuous: "I am studying" (right now)
• Perfect: "I have studied" (past with present relevance)
• Perfect Continuous: "I have been studying" (ongoing past action)

**Past tenses:**
• Simple: "I studied" (completed action)
• Continuous: "I was studying" (interrupted action)
• Perfect: "I had studied" (before another past event)
• Perfect Continuous: "I had been studying"

**Future tenses:**
• Simple: "I will study" (prediction/decision)
• Continuous: "I will be studying" (ongoing future action)
• Perfect: "I will have studied" (completed by future point)`,
            simpleExplanation: `Tenses tell us WHEN something happens:
• Present: happening now or always
• Past: already happened
• Future: going to happen

Simple = just the fact
Continuous = in progress (am/is/are + -ing)
Perfect = connected to another time (have/had + past participle)`,
            deepExplanation: `Time vs Tense distinction: tense is grammatical form; time is meaning.
Present simple can refer to future ("The train leaves at 9.")
Modal verbs (will, would, can, could, may, might) add nuance.
Conditionals: If + past simple → would + infinitive (2nd conditional)`,
            quiz: [
              { q: '"She ___ in London for 5 years." (still lives there)', options: ['has lived', 'lived', 'is living', 'had lived'], correct: 0, explanation: 'Present perfect for past action continuing to present.' },
              { q: 'Which tense: "I will be sleeping at midnight"?', options: ['Future continuous', 'Future simple', 'Future perfect', 'Present continuous'], correct: 0, explanation: 'Will be + -ing = future continuous (ongoing future action).' },
              { q: '"By 2030, she ___ her degree." (future completion)', options: ['will have finished', 'will finish', 'has finished', 'is finishing'], correct: 0, explanation: 'Future perfect: will have + past participle = completed by a future point.' },
              { q: 'Past perfect: "When I arrived, she ___"', options: ['had already left', 'already left', 'has already left', 'was leaving'], correct: 0, explanation: 'Past perfect for action completed BEFORE another past event.' },
              { q: '"I ___ TV when she called." (interrupted action)', options: ['was watching', 'watched', 'have watched', 'watch'], correct: 0, explanation: 'Past continuous (was/were + -ing) for interrupted ongoing action.' }
            ],
            flashcards: [
              { front: 'Present Perfect', back: 'have/has + past participle\n"I have studied" — past with present relevance' },
              { front: 'Past Perfect', back: 'had + past participle\n"She had left" — before another past event' },
              { front: 'Future Perfect', back: 'will have + past participle\n"I will have finished by 5pm"' },
              { front: 'Present Continuous', back: 'am/is/are + -ing\n"I am studying" — happening right now' },
              { front: 'Past Continuous', back: 'was/were + -ing\n"I was studying" — ongoing past action' },
              { front: 'Future Continuous', back: 'will be + -ing\n"I will be working" — ongoing future action' }
            ]
          }
        ]
      },
      {
        id: 'eng-writing',
        title: 'Essay Writing',
        subtopics: [
          {
            id: 'eng-essay-structure',
            grades: [9, 10],
            title: 'Essay Structure & Writing',
            difficulty: 'medium',
            estimatedMin: 30,
            keywords: ['essay', 'paragraph', 'introduction', 'conclusion', 'thesis', 'body', 'topic sentence', 'evidence', 'argument', 'writing', 'structure'],
            explanation: `A well-structured essay consists of three main parts:

**1. Introduction**
• Hook — attention-grabbing opening (question, quote, startling fact)
• Background — brief context about the topic
• Thesis statement — main argument/claim of the essay (last sentence)

**2. Body paragraphs** (typically 3)
Each paragraph follows the PEEL structure:
• **P**oint — topic sentence stating the main idea
• **E**vidence — facts, examples, data to support
• **E**xplanation — how the evidence supports the point
• **L**ink — connect back to thesis or to next paragraph

**3. Conclusion**
• Restate thesis (in different words)
• Summarise main points
• Broader significance or call to action

**Cohesion tools:**
• Linking words: however, furthermore, in addition, consequently, nevertheless
• Pronoun reference, synonyms for variety`,
            simpleExplanation: `Think of an essay like a sandwich:
- Introduction = top bread (tell them what you'll say)
- Body paragraphs = filling (say it with evidence)
- Conclusion = bottom bread (tell them what you said)

Every body paragraph needs:
1. Topic sentence (what this paragraph is about)
2. Evidence (facts, examples)
3. Explanation (why this matters)

Start your essay with a HOOK — something interesting that makes the reader want to keep reading.`,
            deepExplanation: `**Argument types:**
• Inductive: specific examples → general conclusion
• Deductive: general premise → specific conclusion
• Refutation: acknowledge opposing view, then counter it

**Academic register:** Formal vocabulary, passive voice where appropriate, avoid contractions (don't → do not), hedging language ("suggests that", "appears to").

**Critical analysis:** Don't just describe — evaluate, compare, challenge. Use higher-order thinking (Bloom's taxonomy: analysis, synthesis, evaluation).`,
            quiz: [
              { q: 'Where does the thesis statement go?', options: ['End of introduction', 'Start of introduction', 'Conclusion', 'First body paragraph'], correct: 0, explanation: 'The thesis statement is typically the last sentence of the introduction.' },
              { q: 'What does the "E" in PEEL stand for?', options: ['Evidence', 'Example', 'Explain then Evidence', 'A and C'], correct: 0, explanation: 'PEEL: Point, Evidence, Explanation, Link. The first E = Evidence.' },
              { q: 'A hook is used to:', options: ['Grab reader\'s attention', 'State the thesis', 'Summarise the essay', 'List evidence'], correct: 0, explanation: 'The hook is the opening sentence — makes readers want to continue.' },
              { q: '"Furthermore" is an example of:', options: ['Linking word', 'Thesis statement', 'Topic sentence', 'Evidence'], correct: 0, explanation: 'Linking words (furthermore, however, therefore) connect ideas between sentences.' },
              { q: 'The conclusion should:', options: ['Restate thesis + summarise main points', 'Introduce new arguments', 'Copy the introduction', 'List all evidence again'], correct: 0, explanation: 'Conclusions restate the thesis in new words and summarise, never introduce new ideas.' }
            ],
            flashcards: [
              { front: 'Thesis statement', back: 'Main argument/claim of the essay\nTypically last sentence of introduction\nSpecific, arguable, and supported by your body paragraphs' },
              { front: 'PEEL paragraph structure', back: 'Point: topic sentence\nEvidence: supporting facts/examples\nExplanation: how evidence supports point\nLink: connect to thesis/next paragraph' },
              { front: 'Hook types', back: 'Question, surprising fact, relevant quote, vivid description\nOpening sentence to grab attention' },
              { front: 'Linking words (addition)', back: 'Furthermore, in addition, moreover, additionally\nConnect ideas that agree/add to previous' },
              { front: 'Linking words (contrast)', back: 'However, nevertheless, on the other hand, despite this\nConnect contrasting ideas' },
              { front: 'Conclusion structure', back: 'Restate thesis (new words)\nSummarise key points\nBroader significance/call to action\nNEVER introduce new ideas' }
            ]
          }
        ]
      },
      {
        id: 'eng-reading',
        title: 'Reading Strategies',
        subtopics: [
          {
            id: 'eng-ielts-reading',
            grades: [10, 11, 12],
            title: 'IELTS Reading Strategies',
            difficulty: 'medium',
            estimatedMin: 35,
            keywords: ['IELTS', 'reading', 'skimming', 'scanning', 'inference', 'heading', 'true false not given', 'matching', 'comprehension', 'academic'],
            explanation: `IELTS Academic Reading has 3 passages, 40 questions, 60 minutes.

**Core strategies:**

**Skimming** — read quickly to get the main idea (don't read every word)
• Read title, headings, first/last sentence of each paragraph
• Takes 1-2 minutes per passage

**Scanning** — search for specific information (names, dates, numbers)
• Move eyes quickly until you find the key word
• Used for: matching, True/False/Not Given

**Question types & approaches:**
• **True/False/Not Given:** True = stated in text; False = contradicted; Not Given = not mentioned at all
• **Matching headings:** Skim paragraphs, find central idea, match to heading
• **Sentence completion:** Scan for key word, read context carefully
• **Multiple choice:** Find evidence in text, eliminate wrong answers

**Time management:** ~20 min per passage. Don't leave blanks — guess if unsure.

**Vocabulary building:** Learn academic word list (AWL) — 570 academic words that appear in 90% of academic texts.`,
            simpleExplanation: `IELTS Reading tests if you can understand complex texts quickly.

Three tricks:
1. **Skim first** (1 min) — read headings, first/last sentences to understand the structure
2. **Read the question first** — know what you're looking for before reading
3. **Scan** — look specifically for the answer, don't re-read everything

True/False/Not Given is tricky:
- TRUE: the text says exactly this
- FALSE: the text says the opposite
- NOT GIVEN: the text doesn't mention it at all`,
            deepExplanation: `**IELTS Band Descriptors:**
Band 9: Expert user — can understand any form
Band 7: Good user — handles complex language
Band 6: Competent user — generally effective

**Text complexity indicators:** Lexical density, sentence length, nominalisations, passive voice.

**Inference questions** require reading between the lines — the answer is implied but not stated directly. Look for hedging words (might, could, suggests) and context.

**Paraphrase recognition** is key: IELTS rarely uses exact words from text in questions — train to recognise synonyms and structural changes.`,
            quiz: [
              { q: 'Skimming means:', options: ['Reading quickly for main ideas', 'Reading every word carefully', 'Looking for specific data', 'Translating text'], correct: 0, explanation: 'Skimming = rapid reading to get general sense/main idea, not detail.' },
              { q: '"Not Given" in IELTS means:', options: ['Topic not mentioned in text', 'Statement is false', 'Statement is true', 'Unclear meaning'], correct: 0, explanation: 'Not Given = the text does not contain information about this topic.' },
              { q: 'Best approach for matching headings:', options: ['Skim each paragraph, find central idea', 'Read entire text first', 'Match keywords only', 'Answer in order'], correct: 0, explanation: 'Each heading describes the WHOLE paragraph. Skim for main idea, not just keywords.' },
              { q: 'How many questions in IELTS Academic Reading?', options: ['40', '30', '20', '50'], correct: 0, explanation: '3 passages, 40 questions total, 60 minutes.' },
              { q: 'Scanning is best used for finding:', options: ['Specific names, dates, numbers', 'General meaning', 'Author\'s purpose', 'Essay structure'], correct: 0, explanation: 'Scanning = looking for specific info. Good for True/False, sentence completion.' }
            ],
            flashcards: [
              { front: 'Skimming', back: 'Read quickly for MAIN IDEA\nRead: title, headings, first/last sentences\n~1-2 min per IELTS passage' },
              { front: 'Scanning', back: 'Search for SPECIFIC information\nMove eyes quickly to find key words\nUsed for names, dates, numbers, True/False' },
              { front: 'True/False/Not Given', back: 'TRUE: directly stated in text\nFALSE: text contradicts it\nNOT GIVEN: text doesn\'t mention it' },
              { front: 'Academic Word List (AWL)', back: '570 words appearing in 90%+ of academic texts\nLearning AWL significantly improves reading comprehension' },
              { front: 'Inference', back: 'Reading between the lines\nAnswer implied but not directly stated\nLook for: might, could, suggests, appears' },
              { front: 'IELTS Reading time', back: '60 minutes, 3 passages, 40 questions\n~20 min per passage\nTransfer answers to answer sheet (no extra time)' }
            ]
          }
        ]
      },
      {
        id: 'eng-ielts',
        title: 'IELTS Preparation',
        subtopics: [
          {
            id: 'eng-ielts-writing2',
            grades: [11, 12],
            title: 'IELTS Writing Task 2',
            difficulty: 'hard',
            estimatedMin: 40,
            keywords: ['IELTS', 'writing task 2', 'essay', 'opinion', 'agree disagree', 'discuss both views', 'problem solution', 'advantages disadvantages', 'band score', 'coherence'],
            explanation: `IELTS Writing Task 2: Write a 250+ word essay in 40 minutes.

**Essay types:**
1. **Opinion (Agree/Disagree)** — "To what extent do you agree?"
   Structure: Intro + your view → 2 body paragraphs supporting it → Conclusion
2. **Discussion (Both Views)** — "Discuss both views and give your opinion"
   Structure: Intro → View 1 paragraph → View 2 paragraph → Your view → Conclusion
3. **Problem/Solution** — Identify problems + propose solutions
4. **Advantages/Disadvantages** — Discuss benefits and drawbacks

**Band 7+ requirements:**
• Clear position throughout
• Well-developed, supported ideas
• Cohesive devices used accurately
• Wide vocabulary range (not repetitive)
• Mix of sentence structures
• Few grammatical errors

**Task Achievement (25%):** Answer ALL parts of the question
**Coherence & Cohesion (25%):** Logical flow, paragraphing
**Lexical Resource (25%):** Varied, accurate vocabulary
**Grammatical Range (25%):** Complex structures, accuracy`,
            simpleExplanation: `IELTS Task 2 = academic essay in 40 minutes.

First, identify the essay TYPE:
- "Do you agree?" → Give YOUR opinion clearly
- "Discuss both views" → Cover both sides, then say which you prefer
- "What are the advantages/disadvantages?" → Cover both

Basic structure:
1. Introduction (2-3 sentences, restate question + your view)
2. Body 1 (main argument/view 1)
3. Body 2 (second argument/view 2)
4. Conclusion (1-2 sentences, restate position)

Use linking words: Furthermore, However, In contrast, Therefore, As a result.`,
            deepExplanation: `**Band 9 characteristics:**
- Addresses all parts fully
- Sophisticated argument development
- Seamless cohesion
- Wide, precise vocabulary with collocations
- Wide range of grammatical structures

**Common mistakes (Band 5-6):**
- Addressing only one part of the question
- Listing points without development
- Repetitive vocabulary (nice, big, good)
- Short, simple sentences only

**Collocations to use:**
"plays a crucial role", "has a significant impact", "is widely acknowledged", "poses a serious challenge"

**Advanced structures:** Conditional sentences (Were this to happen...), Cleft sentences (What is needed is...), Passive voice for formality`,
            quiz: [
              { q: '"To what extent do you agree?" requires you to:', options: ['State and fully support your opinion', 'Discuss both sides equally', 'Only describe facts', 'Avoid taking a position'], correct: 0, explanation: 'Agree/disagree tasks need a clear, consistent position supported throughout.' },
              { q: 'Minimum word count for IELTS Task 2 is:', options: ['250 words', '150 words', '300 words', '200 words'], correct: 0, explanation: 'Task 2 requires at least 250 words. Under-length responses get penalised.' },
              { q: 'How many assessment criteria does IELTS Writing use?', options: ['4', '2', '3', '5'], correct: 0, explanation: 'TA + CC + LR + GRA = 4 criteria, each 25% of writing score.' },
              { q: '"Furthermore, this leads to..." is an example of:', options: ['Cohesive device', 'Thesis statement', 'Topic sentence', 'Counter-argument'], correct: 0, explanation: 'Cohesive devices (furthermore, however, therefore) improve Coherence & Cohesion score.' },
              { q: 'For a discussion essay ("both views"), you should:', options: ['Cover both sides + give your opinion', 'Only agree with one side', 'Avoid giving an opinion', 'List advantages only'], correct: 0, explanation: 'Discussion essays must address both views AND state your own position.' }
            ],
            flashcards: [
              { front: 'IELTS Writing Task 2', back: '250+ words academic essay\n40 minutes\n4 essay types: Opinion, Discussion, Problem/Solution, Advantages/Disadvantages' },
              { front: '4 Assessment Criteria', back: 'Task Achievement (25%)\nCoherence & Cohesion (25%)\nLexical Resource (25%)\nGrammatical Range & Accuracy (25%)' },
              { front: 'Opinion essay structure', back: 'Intro: restate + clear position\nBody 1: strongest supporting argument\nBody 2: second supporting argument\nConclusion: restate position' },
              { front: 'Discussion essay structure', back: 'Intro: paraphrase + both views preview\nBody 1: View 1 + examples\nBody 2: View 2 + examples\nConclusion: your opinion + summary' },
              { front: 'Band 7 vocabulary', back: 'Avoid repetition — use synonyms\nUse collocations: "significant impact", "crucial role"\nAcademic register — avoid slang, contractions' },
              { front: 'Linking words by function', back: 'Addition: Furthermore, Moreover, Additionally\nContrast: However, Nevertheless, Despite this\nResult: Therefore, Consequently, As a result' }
            ]
          }
        ]
      },
      { id: 'eng-speaking', title: 'Speaking & Debate',  subtopics: [] }
    ]
  }

};

// ── Helper: find subtopic by id ──
SNS.findSubtopic = function (id) {
  for (const subject of Object.values(SNS.CURRICULUM)) {
    for (const topic of subject.topics) {
      for (const sub of (topic.subtopics || [])) {
        if (sub.id === id) return { sub, topic, subject };
      }
    }
  }
  return null;
};

// ── Helper: keyword search ──
SNS.searchTopics = function (query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results = [];

  for (const subject of Object.values(SNS.CURRICULUM)) {
    for (const topic of subject.topics) {
      for (const sub of (topic.subtopics || [])) {
        const searchText = [sub.title, sub.id, ...(sub.keywords || [])].join(' ').toLowerCase();
        if (searchText.includes(q)) {
          results.push({ sub, topic, subject, relevance: sub.title.toLowerCase().startsWith(q) ? 2 : 1 });
        }
      }
    }
  }

  return results.sort((a, b) => b.relevance - a.relevance).slice(0, 10);
};
