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
        screenshotUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'missing-review-confirm',
        title: 'Missing Review & Confirm Step',
        severity: 'Major Issue',
        impact: 'Loss of trust and potential payment errors.',
        evidence: 'Transitioning from "Payment Method" selection directly to the payment gateway.',
        whyItMatters:
          'The flow lacks a dedicated "Review & Confirm" step summarizing the total amount, account selected, and payment method before the actual charge occurs.',
        direction:
          'Insert a confirmation bottom-sheet or screen before processing the payment to reassure the user.',
        screenshotUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'trust-compliance-accessibility',
    title: 'Trust, Compliance & Accessibility',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'input-field-form-inconsistencies',
        title: 'Input Field & Form Inconsistencies',
        severity: 'Minor Issue',
        impact: 'Confusing interaction models.',
        evidence: 'Payment Details screen vs Login screen.',
        whyItMatters: 'Users have to re-learn how forms work on different screens.',
        direction: 'Unify all text inputs under a single design system token (e.g., always use outlined fields).',
        screenshotUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'complex-iconography',
        title: 'Complex Iconography',
        severity: 'Minor Issue',
        impact: 'Slows down recognition.',
        evidence: '"Quick Services" row.',
        whyItMatters: 'The icons are overly detailed line-art that breaks down at small sizes.',
        direction: 'Simplify icons to solid, recognizable shapes that work well at 24x24px dimensions.',
        screenshotUrl: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'content-microcopy-localization',
    title: 'Content, Microcopy & Localization',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
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
        screenshotUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
];
