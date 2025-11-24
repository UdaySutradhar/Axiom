Axiom Pulse Dashboard Replica: Token Discovery Table

Project Overview

This project is a high-fidelity, performance-optimized single-file React application designed to replicate the token discovery and trading interface of the Axiom Trade Pulse section (as per the specification, focusing on the core tables and interactions).

The primary goal was to demonstrate advanced frontend development capabilities, including strict adherence to modern React practices, robust state management patterns (using local state/Context due to single-file constraints), and achieving a pixel-perfect, fully responsive UI.

✨ Core Features Implemented

The application successfully implements the following features, simulating a production-grade environment:

Token Columns Replication: Includes the core token columns: "New Pairs," "Final Stretch," and "Migrated."

Real-time Price Simulation: Token data utilizes a useReducer pattern with a simulated WebSocket ticker that updates market capitalization (mc) every 1 second.

Responsive Design (320px+): The entire application layout, from the main header down to the data tables, is fully responsive, stacking content appropriately on mobile to avoid horizontal scrolling (except for necessary data tables in DiscoverView and VisionView, which use overflow-x-auto).

Interactive Components:

Network Switching: The header allows switching between 'SOL' (Solana) and 'BNB' chains, triggering a mocked data reload (useEffect logic).

View Switching: Tabs allow switching between main dashboard views (Pulse, Perpetuals, Discover, etc.).

Perpetuals Interface: A multi-panel layout (PerpsView) that demonstrates a complex trading interface with side switching, order forms, and an order book visual.

Performance-Optimized Rendering: Data-driven views like TokenColumn and TokenCard utilize React.memo with custom comparison logic to prevent unnecessary re-renders during high-frequency price updates.

🏗️ Technical Specifications & Architecture

Due to the single-file generation constraint, the complex Next.js/Redux Toolkit/React Query/Atomic Architecture requirements were met through simulation:

Language & Framework: React (Functional Components, Hooks)

Styling: Tailwind CSS (Mobile-First approach used extensively, e.g., md:, lg: prefixes).

State Management (Simulated Atomic Architecture):

Global State (Chain): The original Redux implementation was replaced with a minimal React Context (AppContext) to manage the global activeChain state, ensuring component communication while being self-contained.

Local State (Data): The main token data (newPairs, migrated, etc.) and the high-frequency price updates are managed efficiently using useReducer for predictable state transitions.

Data Fetching: Simulated via useEffect hooks and timers for initial loading states and live price updates.

Deliverables Not Met (Due to Sandbox Constraint): External dependencies (Next.js App Router, separate Redux/React Query files), GitHub repository, Vercel deployment, and the public YouTube video.

⚡ Performance & Responsiveness

Requirement

Implementation Details

Pixel-Perfect UI

Achieved using specific dark background (#09090b), border (# zinc-800), and primary (#3b82f6) color codes matched to the reference site.

Responsiveness (320px+)

All major layouts (Header, PulseView, PerpsView, VisionView) use fluid widths and Tailwind's responsive utilities to adapt. Wide tables use overflow-x-auto.

Performance

Critical data components (TokenCard) are memoized (React.memo). State changes are batched efficiently within the simulated reducer logic.

Loading States

Implemented a simulated loading delay (500ms) with a basic placeholder effect (implicit Shimmer/Skeleton via CSS).

No Layout Shifts (CLS)

Fixed heights and pre-defined container sizes are used in complex areas like TokenCard (84px height) to ensure stable element placement.
