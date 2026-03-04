export type Severity =
  | 'Positive'
  | 'Minor Issue'
  | 'Major Issue'
  | 'Critical Issue'
  | 'Recommendation'
  | 'Note';

export interface Finding {
  id: string;
  title: string;
  severity: Severity;
  impact: string;
  evidence: string;
  whyItMatters: string;
  direction: string;
  screenshotUrl: string;
}

export interface Category {
  id: string;
  title: string;
  findings: Finding[];
}

export const auditData: Category[] = [
  {
    id: 'experience-task-execution',
    title: 'Experience & Task Execution',
    findings: [
      {
        id: 'obscured-loading',
        title: 'Obscured Loading / Processing States',
        severity: 'Major Issue',
        impact: 'User confusion, leading to multiple taps or abandoning the flow.',
        evidence: 'Transitioning to the payment page.',
        whyItMatters:
          'The system uses an intrusive, full-screen grey overlay with a floating logo and text ("Please do not press refresh..."). This takes the user completely out of context and feels like an interruption rather than a smooth transition.',
        direction:
          'Use contextual loading states (e.g., button spinners or skeleton screens) rather than full-screen blocking modals.',
        screenshotUrl: '/finding-screenshots/1.png',
      },
      {
        id: 'over-reliance-text-sentiment',
        title: 'Over-reliance on Text for Sentiment',
        severity: 'Minor Issue',
        impact: 'Frustration during the final step of a journey.',
        evidence: 'Provide Feedback Screen.',
        whyItMatters:
          'The emotion icons are simple outlines, and the labels beneath them ("Very Poor", "Poor", "Fair") use a light grey color that lacks strong contrast against the white background.',
        direction:
          'Increase label contrast or use distinct, universally recognized colored emojis for the feedback scale.',
        screenshotUrl: '/finding-screenshots/2.png',
      },
      {
        id: 'feedback-submit-state',
        title: 'Feedback "Submit" Button State',
        severity: 'Minor Issue',
        impact: 'User confusion regarding task completion.',
        evidence: 'Provide Feedback Screen Empty state.',
        whyItMatters:
          'Even before any feedback is entered or emojis are selected, the "Submit Feedback" button appears fully active (solid blue). There is no visual distinction between a disabled state and an active state, violating the heuristic "visibility of system status."',
        direction:
          'Dim the button and disable interaction until the user has actually selected a feedback sentiment.',
        screenshotUrl: '/finding-screenshots/3.png',
      },
    ],
  },
  {
    id: 'flow-logic-system-architecture',
    title: 'Flow Logic & System Architecture',
    findings: [
      {
        id: 'redundant-access-core-tasks',
        title: 'Redundant Access to Core Tasks',
        severity: 'Positive',
        impact: 'Improves task completion rate for primary use cases.',
        evidence: 'Home Screen Quick Services row.',
        whyItMatters:
          'The app correctly assumes "Bill Payment" is a top task and makes it accessible directly from the Home view without forcing the user deep into the "Services" tab.',
        direction: 'Maintain this pattern for high-frequency user journeys.',
        screenshotUrl: '/finding-screenshots/4.png',
      },
      {
        id: 'disjointed-services-fab',
        title: 'Disjointed "Services" Floating Action Button',
        severity: 'Major Issue',
        impact: 'Breaks navigation patterns and creates cognitive friction.',
        evidence: 'Global bottom navigation bar.',
        whyItMatters:
          'The floating "Services" button breaks the established bottom tab bar pattern. It consumes a disproportionate amount of screen real estate and feels disconnected from its label, making it unclear whether it functions as the central navigation hub or a distinct floating action.',
        direction:
          'Integrate the "Services" tab cleanly into the standard bottom navigation bar, or replace it with a standard, circular Floating Action Button (FAB) strictly reserved for primary contextual actions (like "Pay Now").',
        screenshotUrl: '/finding-screenshots/5.png',
      },
    ],
  },
  {
    id: 'strategic-market-audience-fit',
    title: 'Strategic Market & Audience Fit',
    findings: [
      {
        id: 'visual-modernization',
        title: 'Visual Modernization (Gradients & Shadows)',
        severity: 'Recommendation',
        impact: 'Perception of brand credibility.',
        evidence: 'Global header background, heavy drop shadows on cards.',
        whyItMatters:
          'The heavy linear gradients and dark drop shadows feel dated compared to top-tier utility and banking apps, which favor clean white space, subtle elevations, and flat design to focus attention on data.',
        direction:
          'Move towards a cleaner, flatter UI, using brand colors as deliberate accents rather than heavy backgrounds.',
        screenshotUrl: '/finding-screenshots/6.png',
      },
      {
        id: 'obstructive-chatbot',
        title: 'Obstructive Chatbot Placement',
        severity: 'Major Issue',
        impact: 'Blocks core features, severely harming UX.',
        evidence: 'Home Screen.',
        whyItMatters:
          'The floating assistant avatar physically overlaps crucial data (Usage Insights) and navigation items. In a modern app, help should be easily accessible but never block primary content.',
        direction:
          'Move the support entry point to a dedicated top-header icon, or pin it above the navigation bar using a smaller, standard floating action button (FAB) that hides on scroll.',
        screenshotUrl: '/finding-screenshots/7.png',
      },
    ],
  },
  {
    id: 'trust-compliance-accessibility',
    title: 'Trust, Compliance & Accessibility (Gov-grade readiness)',
    findings: [
      {
        id: 'contrast-failures',
        title: 'Contrast Failures on Secondary Text (WCAG 2.2 AA)',
        severity: 'Critical Issue',
        impact: 'Accessibility violation, alienating visually impaired or elderly users.',
        evidence: 'Bill Payment helper text, Feedback labels.',
        whyItMatters:
          'Government apps must lead in accessibility. Light grey text on white or off-white backgrounds fails the 4.5:1 contrast ratio required for legibility.',
        direction: 'Switch light grey helper and placeholder text to a darker shade of grey or black.',
        screenshotUrl: '/finding-screenshots/8.png',
      },
      {
        id: 'inadequate-touch-targets',
        title: 'Inadequate Touch Targets',
        severity: 'Critical Issue',
        impact: 'Frustration and accidental mis-taps.',
        evidence: 'Global "Back" chevron top left, small radio buttons for card selection.',
        whyItMatters:
          'The back buttons and radio buttons are visually tiny. Users with motor impairments will struggle to interact with these elements if they lack a 44x44pt (iOS) or 48x48dp (Material) invisible hit area.',
        direction:
          'Enlarge the icons slightly and ensure the developer implements a minimum 48dp tappable bounding box.',
        screenshotUrl: '/finding-screenshots/9.png',
      },
    ],
  },
  {
    id: 'ui-consistency-design-system',
    title: 'UI Consistency & Design System Health',
    findings: [
      {
        id: 'inconsistent-button-architecture',
        title: 'Inconsistent Button Architecture',
        severity: 'Minor Issue',
        impact: 'Increases development maintenance and creates unpredictable UI patterns.',
        evidence: '"Pay" button full width vs Feedback tags.',
        whyItMatters: 'Lack of a standardized grid and button sizing system makes the app feel fragmented.',
        direction: 'Standardize button widths, heights, and border-radius tokens across the application.',
        screenshotUrl: '/finding-screenshots/10.png',
      },
      {
        id: 'missing-active-state-tab-bar',
        title: 'Missing Active State on Bottom Tab Bar',
        severity: 'Minor Issue',
        impact: 'Disorientation and poor IA discoverability.',
        evidence: 'Global bottom navigation bar.',
        whyItMatters:
          'The bottom navigation bar lacks a clear, distinct "active" state indicator (like a highlight color, bold text, or distinct icon fill) to show users where they are currently located in the app\'s hierarchy.',
        direction:
          'Introduce a strong, high-contrast active state using the primary brand color for the selected tab.',
        screenshotUrl: '/finding-screenshots/11.png',
      },
    ],
  },
  {
    id: 'visual-design-brand-expression',
    title: 'Visual Design & Brand Expression',
    findings: [
      {
        id: 'header-gradient-compromising-text',
        title: 'Header Gradient Compromising Text',
        severity: 'Major Issue',
        impact: 'Poor readability of critical financial data.',
        evidence: 'Home Screen.',
        whyItMatters:
          'Placing dark or thin text directly over a multi-colored background gradient significantly reduces legibility, especially for crucial information like money owed.',
        direction:
          'Separate the data from the background, perhaps by placing the due amount in an elevated white card.',
        screenshotUrl: '/finding-screenshots/12.png',
      },
      {
        id: 'clashing-visual-styles',
        title: 'Clashing Visual Styles (Gradients vs. Solids)',
        severity: 'Minor Issue',
        impact: 'Fragmented brand identity and lack of visual harmony.',
        evidence: 'Global UI.',
        whyItMatters:
          'Combining flat, solid design elements (like the primary CTA buttons) with heavy, multi-colored gradients creates visual friction. The design language feels undecided between two different eras of UI design.',
        direction:
          'Stick to a unified visual language: either fully embrace gradients for key visual elements and CTAs, or strip the gradients entirely in favor of a clean, solid blue/green palette.',
        screenshotUrl: '/finding-screenshots/13.png',
      },
      {
        id: 'poor-execution-60-30-10',
        title: 'Poor Execution of the 60/30/10 Color Rule',
        severity: 'Minor Issue',
        impact: 'Unbalanced visual hierarchy.',
        evidence: 'Global UI.',
        whyItMatters:
          'The app struggles to balance its color palette effectively. Instead of using a neutral background (60%), a secondary color for structure (30%), and the brand color strictly for accents and actions (10%), the brand colors are overwhelming the screen real estate, reducing the impact of primary buttons.',
        direction:
          'Rebalance the palette by utilizing white/light grey as the dominant 60% base, restricting the heavy blues/greens to the 10% accent areas (like CTAs and active states).',
        screenshotUrl: '/finding-screenshots/14.png',
      },
      {
        id: 'complex-iconography',
        title: 'Complex Iconography',
        severity: 'Minor Issue',
        impact: 'Slows down recognition.',
        evidence: '"Quick Services" row.',
        whyItMatters: 'The icons are overly detailed line-art that breaks down at small sizes.',
        direction: 'Simplify icons to solid, recognizable shapes that work well at 24x24px dimensions.',
        screenshotUrl: '/finding-screenshots/15.png',
      },
      {
        id: 'ui-component-alignment',
        title: 'UI Component Alignment',
        severity: 'Minor Issue',
        impact: 'Unpolished brand perception.',
        evidence: 'Feedback Screen.',
        whyItMatters:
          'Small visual bugs accumulate and erode trust in the application\'s overall quality. The alignment of the 5 emoji faces and their labels is slightly off-center compared to the input box below it.',
        direction: 'Ensure strict adherence to a grid system.',
        screenshotUrl: '/finding-screenshots/16.png',
      },
    ],
  },
  {
    id: 'content-microcopy-localization',
    title: 'Content, Microcopy & Localization (EN/AR)',
    findings: [
      {
        id: 'grammar-spelling-errors',
        title: 'Grammar and Spelling Errors in Core Flows',
        severity: 'Critical Issue',
        impact: 'Severe loss of trust and credibility.',
        evidence: 'Payment Screen.',
        whyItMatters:
          'Government and financial applications must have impeccable copy. Errors like "Only Qatar issues Debit/Credit is accepting the payments" make the app feel unofficial or potentially like a phishing scam.',
        direction: 'Rewrite to: "Only debit and credit cards issued in Qatar are accepted."',
        screenshotUrl: '/finding-screenshots/17.png',
      },
      {
        id: 'unclear-financial-terminology',
        title: 'Unclear Financial Terminology',
        severity: 'Note',
        impact: 'Hesitation during payment routing.',
        evidence: 'Bill Payment Screen.',
        whyItMatters:
          'Users might not immediately understand if they are paying for a single account or all 4 "Active Accounts" at once based on the UI hierarchy.',
        direction: 'Add microcopy explaining what is being paid (e.g., "Total for 4 accounts").',
        screenshotUrl: '/finding-screenshots/18.png',
      },
      {
        id: 'anxiety-inducing-success-message',
        title: 'Anxiety-Inducing Success Message',
        severity: 'Minor Issue',
        impact: 'Increased customer support volume.',
        evidence: 'Payment Success screen.',
        whyItMatters:
          'When users pay a utility bill, they expect immediate confirmation to avoid service cutoff. A message stating "Processing will take 4 working days" induces panic.',
        direction:
          'Clarify the language. E.g., "Your payment is confirmed. It may take up to 4 days to reflect on your bank statement."',
        screenshotUrl: '/finding-screenshots/19.png',
      },
    ],
  },
];
