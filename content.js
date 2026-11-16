// Everything a visitor reads lives here. The scene and the pages read it;
// edit this file (and the images in img/) to update the site.

export const site = {
  name: 'Emily Ou',
  caption: 'Data analyst · product & market analytics',
  place: 'M.S. Information, University of Michigan · Ann Arbor & Chicago',
  email: 'emilyou561@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emily-ou-/' },
    { label: 'GitHub', href: 'https://github.com/emilyou561-beep' },
    { label: 'Tableau Public', href: 'https://public.tableau.com/app/profile/emily.ou2684' },
  ],
}

export const projects = [
  {
    id: 'indego',
    title: 'Which bike stations will run out today?',
    org: 'Personal project',
    period: '2026',
    pitch:
      "Philadelphia's Indego bike share grew 21.5% in H1 2026. I separated real demand growth from new stations, then built a model that forecasts every morning which of ~320 stations will run out of bikes or e-bikes, and scores itself against what actually happened the next day.",
    image: 'img/projects/indego.jpg',
    alt: 'Backtest chart comparing the forecast model with simple rules',
    metrics: [
      { value: '37%', label: 'of top-25 flagged station-hours actually ran out, vs 13% for the best simple rule' },
      { value: '+37.2%', label: 'e-bike minutes in H1 2026; standard bikes were flat' },
      { value: '4.9M', label: 'trips rebuilt from raw files with DuckDB in GitHub Actions' },
    ],
    stack: ['DuckDB', 'SQL', 'scikit-learn', 'GitHub Actions', 'Tableau'],
    links: [
      { label: 'Forecast repo', href: 'https://github.com/emilyou561-beep/indego-empty-station-forecast' },
      { label: 'Demand analysis', href: 'https://github.com/emilyou561-beep/indego-bike-share-analysis' },
      { label: 'Tableau dashboard', href: 'https://public.tableau.com/app/profile/emily.ou2684/viz/IndegoTablet2_17905244322180/Demandisoutpacingnetworkexpansionledbye-bikes' },
    ],
  },
  {
    id: 'michigan',
    title: 'Michigan Dining Sustainability Navigator',
    org: 'U-M AI Clinic · client: Michigan Dining · Project lead',
    period: 'Oct 2026 – present',
    pitch:
      'A sustainable-sourcing assessment that turns questionnaire answers into transparent scores across 8 areas, flags evidence gaps, and gives three prioritized next steps, each tied to an approved source, plus a downloadable report.',
    image: 'img/projects/michigan.jpg',
    alt: 'The Navigator dashboard with scores per area and recommended actions',
    metrics: [
      { value: '8', label: 'areas scored, with coverage and confidence shown on every result' },
      { value: '3', label: 'next steps per result, each linked to an approved source' },
      { value: '1-click', label: 'Google Sheets sync feeding a sanitized supplier catalog' },
    ],
    stack: ['Python', 'FastAPI', 'React', 'SQLite', 'Google Sheets'],
    links: [{ label: 'Case study', href: 'https://github.com/emilyou561-beep/michigan-dining-sustainability-showcase' }],
  },
  {
    id: 'abreadout',
    title: 'abreadout + the Cookie Cats test',
    org: 'Python package',
    period: '2026',
    pitch:
      "The checks I run every time I read an A/B test, in one call: sample ratio mismatch first, then the right test per metric, Holm correction, power, CUPED and bootstrap. On the Cookie Cats data it shows moving the first gate to level 40 cut day-7 retention.",
    image: 'img/projects/abreadout.jpg',
    alt: 'Day-1 and day-7 retention by test group',
    metrics: [
      { value: '90,189', label: 'players in the Cookie Cats test' },
      { value: '−0.82 pts', label: 'day-7 retention at gate 40 (p ≈ 0.002)' },
      { value: '27', label: 'tests checked against SciPy and statsmodels' },
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'pandas', 'pytest'],
    links: [
      { label: 'abreadout', href: 'https://github.com/emilyou561-beep/abreadout' },
      { label: 'Cookie Cats analysis', href: 'https://github.com/emilyou561-beep/cookie-cats-ab-test' },
    ],
  },
  {
    id: 'thesis',
    title: 'Trump-linked firms around U.S. elections',
    org: "Master's thesis · University of Chicago",
    period: '2025 – 2026',
    pitch:
      'Do companies with business ties to Trump trade differently when he wins or loses? An event study of linked firms against matched controls over 5, 10 and 20-day windows after the 2020 and 2024 elections.',
    image: 'img/projects/thesis.jpg',
    alt: 'Cumulative abnormal return gap between connected and control firms',
    metrics: [
      { value: '+4.25 pts', label: '10-day abnormal return gap after the 2024 election' },
      { value: 'p = 0.021', label: 'Welch t-test, connected vs. control' },
      { value: '255 days', label: 'pre-event estimation window' },
    ],
    stack: ['R', 'CRSP', 'Compustat', 'Event study'],
    links: [{ label: 'Code', href: 'https://github.com/emilyou561-beep/trump-linked-firms-event-study' }],
  },
  {
    id: 'creator',
    title: 'Creator Match Intelligence',
    org: 'Personal project',
    period: '2026',
    pitch:
      'Give it a campaign brief and it returns up to five creators that fit, with the score broken down so you can see why each is on the list. It shows a shorter list rather than padding it with weak matches.',
    image: 'img/projects/creator.jpg',
    alt: 'Creator shortlist in the Streamlit app',
    metrics: [
      { value: '7', label: 'table SQLite data model' },
      { value: '5', label: 'scoring parts, plus eligibility and risk filters' },
      { value: '16', label: 'tests, incl. SQL vs. pandas ranking parity' },
    ],
    stack: ['Python', 'SQL', 'SQLite', 'Streamlit'],
    links: [{ label: 'Repo', href: 'https://github.com/emilyou561-beep/creator-match-intelligence' }],
  },
  {
    id: 'kitchen',
    title: 'Yoru Kitchen',
    org: 'Side project · for the late-night ramen',
    period: '2026',
    pitch:
      "Tell it what's in your fridge and it shows which of 41 regional Japanese ramen you can make tonight. It checks quantities, not just ingredients, and turns what's missing into a grocery receipt you can edit and print.",
    image: 'img/projects/kitchen.jpg',
    alt: 'Yoru Kitchen home screen with a bowl of shoyu ramen',
    metrics: [
      { value: '41', label: 'regional ramen styles' },
      { value: '2', label: 'routes per bowl: quick, or shop-style from scratch' },
      { value: '0', label: 'servers: it all runs in the browser' },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Vitest'],
    links: [
      { label: 'Live site', href: 'https://emilyou561-beep.github.io/your-kitchen/' },
      { label: 'Repo', href: 'https://github.com/emilyou561-beep/your-kitchen' },
    ],
  },
]

export const experience = [
  {
    org: 'University of Michigan · Rackham Graduate School',
    role: 'Stewardship Intern',
    place: 'Ann Arbor, MI',
    period: 'Sep 2026 – present',
    points: [
      'Audited and processed 100+ donor and constituent records in 4 days in DART, verifying sources, fixing errors and protecting sensitive information.',
      'Tracked tasks, deadlines and recurring data issues in Asana so leaders could follow project progress.',
    ],
  },
  {
    org: 'Wefluens',
    role: 'AI Data Operations Intern',
    place: 'Los Angeles, CA',
    period: 'May – Aug 2026',
    points: [
      'Turned scattered research into one analysis-ready dataset of 6,000+ creator and partner profiles with SQL and Python, checked across 9 quality dimensions.',
      'Built AI agent workflows and a Power BI dashboard (4 KPI views, 4 automated field updates) that saved about 20 hours of manual research a week; used by 40 people.',
      'Fixed the creator screening process for 3 campaigns with scoring rules and validation checks in R, Python and Power BI.',
    ],
  },
  {
    org: 'Woooly.ai',
    role: 'Marketing Intern',
    place: 'Los Angeles, CA',
    period: 'Dec 2025 – Feb 2026',
    points: [
      'Analyzed an A/B test of 14,982 applicants: starting background checks earlier raised first-batch completion from 26.7% to 42.7% (z = 19.2).',
      'Confirmed the lift with guardrail metrics: completion time 10.2 → 7.1 days, cost per completion $96 → $70, activation 86% → 94%.',
      'Broke the funnel down by channel (job-site conversion 16% → 38%) and presented the results to the development team.',
    ],
  },
]

export const education = [
  { school: 'University of Michigan, School of Information', degree: 'M.S. Information (Data Analytics) · GPA 4.00', period: 'Expected May 2028' },
  { school: 'University of Chicago', degree: 'M.A. International Relations · Midway Research Scholarship', period: 'Jun 2026' },
  { school: 'University of International Relations, Beijing', degree: 'B.A. International Politics', period: 'Jun 2025' },
]

export const skills = [
  ['Analytics', 'Python, pandas, SQL, R, A/B testing, hypothesis testing, event studies, KPI design'],
  ['Tools', 'SQLite, DuckDB, Jupyter, Tableau, Power BI, Excel, Git/GitHub, pytest, REST APIs'],
  ['Quality', 'Guardrail metrics, funnel diagnosis, data validation, reconciliation, automated testing'],
  ['Languages', 'English, Mandarin (native)'],
]

export const about = {
  hello: "Hi, I'm Emily.",
  body: [
    "I'm a geek at heart who loves both code and the humanities! I'm from Beijing, and I live in Chicago's South Loop and Ann Arbor.",
  ],
  facts: [
    ['Favorite sport', 'Tennis'],
    ['Favorite game (for now)', 'Stardew Valley'],
    ['Favorite athlete', 'George Russell'],
    ['Favorite color', 'Black'],
  ],
}

// The six photos clipped to the string lights over the bed, left to right.
export const photos = [
  { id: 'graduation', caption: 'Graduation day, UChicago' },
  { id: 'vegas-gp', caption: 'Las Vegas Grand Prix' },
  { id: 'race-car', caption: 'Blink and you miss it' },
  { id: 'film', caption: 'Shot on film' },
  { id: 'mirror', caption: 'Emily, take 2' },
  { id: 'portrait', caption: 'Sunday, no plans' },
]
