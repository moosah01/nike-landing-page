import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex itmes-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className=" flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

// Chat GPT Summary

/**
 * Subscribe Section (Sign Up for Updates & Newsletter)
 *
 * Container: <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 *  • max-container
 *      – centers content and constrains width to 1440px (from index.css)
 *
 *  • flex
 *      – enables flexbox layout, default direction: row
 *
 *  • justify-between
 *      – when in row mode, pushes the heading and form to opposite ends (horizontally)
 *
 *  • items-center
 *      – vertically center-aligns children along the cross-axis (Y for row, X for column)
 *
 *  • max-lg:flex-col
 *      – “max-lg” = at screen widths ≤ 1024px
 *      – switches flex direction to column on tablets & smaller (stack vertically)
 *
 *  • gap-10
 *      – adds 2.5rem (40px) of space between children (both in row & column modes)
 *
 *
 * Heading: <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 *  • text-4xl
 *      – font-size: 48px (for clear, prominent heading)
 *
 *  • leading-[68px]
 *      – custom line-height to keep line-breaks tight across two lines
 *
 *  • lg:max-w-md
 *      – from ≥ 1024px, limit heading’s width to “md” (~28rem) to avoid overly long lines
 *
 *  • font-palanquin & font-bold
 *      – applies the Palanquin family + bold weight for brand-consistent styling
 *
 *
 * Form Wrapper: <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 *  • w-full
 *      – on all screens, take 100% width of parent
 *
 *  • lg:max-w-[40%]
 *      – from ≥ 1024px, cap the form to 40% width of the container
 *
 *  • flex items-center
 *      – row layout (default) with vertical centering of input & button
 *
 *  • max-sm:flex-col
 *      – at ≤ 640px (mobile portrait), stack input and button vertically
 *
 *  • gap-5
 *      – 1.25rem (20px) gap between input & button in either orientation
 *
 *  • p-2.5
 *      – 0.625rem (10px) internal padding for touchable area
 *
 *  • sm:border sm:border-slate-gray
 *      – from ≥ 640px, show a 1px slate border around the form container
 *      – on smaller (<640px), border still comes from the “input” component’s own border rules
 *
 *  • rounded-full
 *      – pill-shaped container on all sizes
 *
 *
 * Input: <input className="input" … />
 *  • .input (custom component in index.css)
 *      – sm:flex-1: from ≥640px, input grows to fill remaining space
 *      – max-sm:w-full: ≤640px, input takes full width of its flex container
 *      – text-base, leading-normal, text-slate-gray for legible placeholder & text
 *      – pl-5: 1.25rem left padding for text inset
 *      – max-sm:p-5: on small (<640px), increases padding to 1.25rem all around for easier touch
 *      – sm:border-none: removes its border when parent border is shown
 *      – outline-none: removes default focus outline (you can add a custom focus style)
 *      – max-sm:border-slate-gray & max-sm:rounded-full: ensures a pill shape & border on mobile if parent has none
 *
 *
 * Button Wrapper: <div className="flex max-sm:justify-end items-center max-sm:w-full">
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 *  • flex items-center
 *      – keeps button vertically centered next to input
 *
 *  • max-sm:justify-end
 *      – on mobile (<640px), pushes button to the right when stacked or full-width
 *
 *  • max-sm:w-full
 *      – allows button container to take full width on small screens (so <Button fullWidth /> can stretch)
 *
 *
 * RESPONSIVENESS SUMMARY:
 * ───────────────────────
 *  • DESKTOP (≥1024px):
 *      – Section flex-row, items side-by-side (heading left, form right)
 *      – Heading max-width ‘md’, form max-width 40%
 *
 *  • TABLET (640px–1023px):
 *      – Section flex-col (because of max-lg:flex-col), stacks heading above form
 *      – Form still full-width (parent container), with borders
 *
 *  • MOBILE (<640px):
 *      – Section flex-col, gap remains 40px
 *      – Form wrapper: flex-col (stack input + button), input & button both full-width
 *      – Extra padding on input for touch comfort; button justified to end
 */

// =>> Claude Summary:

// import { useEffect, useState } from "react";
// import Button from "../components/Button.jsx";

// /**
//  * COMPREHENSIVE RESPONSIVE BREAKDOWN FOR SUBSCRIBE COMPONENT
//  * ========================================================
//  *
//  * This component demonstrates a complex responsive layout that transforms from
//  * a side-by-side desktop layout to a stacked mobile layout using Tailwind CSS.
//  *
//  * RESPONSIVE BREAKPOINTS (based on your custom utility class):
//  * - Mobile Portrait (0px - 639px): Small phones, iPhone SE
//  * - Mobile Landscape (640px - 767px): Larger phones, iPhone landscape
//  * - Tablet Portrait (768px - 1023px): iPad portrait, Android tablets
//  * - Tablet Landscape (1024px+): iPad landscape, laptops, desktops
//  *
//  * LAYOUT TRANSFORMATION BEHAVIOR:
//  * ===============================
//  *
//  * 1. DESKTOP/TABLET LANDSCAPE (1024px+):
//  *    - Main container: Horizontal flexbox (side-by-side)
//  *    - Left side: Heading takes up space naturally
//  *    - Right side: Input form in rounded pill shape with horizontal layout
//  *    - Input and button sit side by side in a bordered container
//  *
//  * 2. MOBILE/TABLET PORTRAIT (0px - 1023px):
//  *    - Main container: Vertical flexbox (stacked)
//  *    - Heading stacks on top
//  *    - Input form stacks below, becomes full width
//  *    - Input and button stack vertically on very small screens
//  *
//  * DETAILED CLASS BREAKDOWN:
//  * ========================
//  */

// const Subscribe = () => {
//   return (
//     <section
//       className="max-container flex justify-between items-center max-lg:flex-col gap-10"
//       id="contact-us"
//     >
//       {/*
//         MAIN CONTAINER CLASSES EXPLAINED:
//         ---------------------------------

//         max-container:
//         - Custom class from your CSS (max-width: 1440px, margin: 0 auto)
//         - Centers the content and prevents it from getting too wide

//         flex:
//         - Makes this a flexbox container
//         - Default direction is 'row' (horizontal)

//         justify-between:
//         - Distributes children with space between them
//         - On desktop: pushes heading to left, form to right
//         - Creates the side-by-side layout you see in desktop view

//         items-center:
//         - Vertically centers the flex items
//         - Ensures heading and form are aligned in the middle

//         max-lg:flex-col:
//         - CRITICAL RESPONSIVE CLASS
//         - "max-lg" means "at screen sizes SMALLER than lg (1024px)"
//         - Changes flex-direction to column when screen < 1024px
//         - This is WHY the layout stacks vertically on mobile/tablets

//         gap-10:
//         - Adds consistent 2.5rem (40px) spacing between flex items
//         - Works in both row and column directions
//         - Maintains good spacing whether side-by-side or stacked
//       */}

//       <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
//         {/*
//           HEADING CLASSES EXPLAINED:
//           --------------------------

//           text-4xl:
//           - Font size of 48px (from your custom theme)

//           leading-[68px]:
//           - Custom line height of 68px
//           - Creates generous vertical spacing

//           lg:max-w-md:
//           - On large screens (1024px+), limits width to 28rem (~448px)
//           - Prevents heading from becoming too wide on desktop
//           - On mobile, heading uses full available width

//           font-palanquin font-bold:
//           - Uses your custom Palanquin font family
//           - Bold weight for emphasis
//         */}
//         Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
//       </h3>

//       <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
//         {/*
//           FORM CONTAINER CLASSES EXPLAINED:
//           ---------------------------------

//           lg:max-w-[40%]:
//           - On large screens (1024px+), limits width to 40% of container
//           - This creates the proportional layout you see on desktop
//           - Heading gets ~60% of space, form gets ~40%

//           w-full:
//           - On smaller screens, takes full width
//           - Ensures form doesn't get cramped on mobile

//           flex:
//           - Makes this a flexbox container for input and button
//           - Default direction is row (horizontal)

//           items-center:
//           - Vertically centers input and button
//           - Note: There's a typo "items-center" but it still works

//           max-sm:flex-col:
//           - ANOTHER RESPONSIVE BREAKPOINT
//           - "max-sm" means "at screen sizes SMALLER than sm (640px)"
//           - Changes to column direction on very small screens
//           - This is why input and button stack vertically on mobile

//           gap-5:
//           - 1.25rem (20px) spacing between input and button
//           - Maintains spacing in both horizontal and vertical layouts

//           p-2.5:
//           - 0.625rem (10px) padding inside the container
//           - Adds internal spacing around the form elements

//           sm:border sm:border-slate-gray:
//           - Only adds border on screens 640px+ (sm and larger)
//           - Uses your custom slate-gray color
//           - On mobile, no border (cleaner look for stacked layout)

//           rounded-full:
//           - Creates the pill-shaped border you see on desktop
//           - Maintains rounded corners even without border on mobile
//         */}

//         <input type="text" placeholder="subscribe@nike.com" className="input" />
//         {/*
//           INPUT CLASSES (from your custom .input class):
//           ----------------------------------------------

//           Your .input class applies these responsive styles:

//           sm:flex-1:
//           - On screens 640px+, takes up remaining flex space
//           - Allows input to expand while button stays fixed width

//           max-sm:w-full:
//           - On screens <640px, takes full width
//           - Ensures input doesn't get cramped when stacked

//           text-base leading-normal text-slate-gray:
//           - Sets font size, line height, and color

//           pl-5 max-sm:p-5:
//           - Padding left 1.25rem on larger screens
//           - Full padding 1.25rem on mobile for better touch targets

//           outline-none:
//           - Removes default browser outline

//           sm:border-none:
//           - No border on larger screens (container has border)

//           border max-sm:border-slate-gray max-sm:rounded-full:
//           - Adds border and rounded corners on mobile
//           - Creates individual styling when not in bordered container
//         */}

//         <div className="flex max-sm:justify-end items-center max-sm:w-full">
//           {/*
//             BUTTON CONTAINER CLASSES EXPLAINED:
//             -----------------------------------

//             flex:
//             - Flexbox container for button

//             max-sm:justify-end:
//             - On screens <640px, aligns button to the right
//             - Creates better visual balance when stacked

//             items-center:
//             - Vertically centers the button

//             max-sm:w-full:
//             - On mobile, container takes full width
//             - Allows justify-end to work properly
//           */}
//           <Button label="Sign Up" fullWidth />
//         </div>
//       </div>
//     </section>
//   );
// };

// /**
//  * RESPONSIVE BEHAVIOR SUMMARY:
//  * ============================
//  *
//  * DESKTOP (1024px+):
//  * - Main container: horizontal flex with justify-between
//  * - Heading: left side, max-width constrained
//  * - Form: right side, 40% width, pill-shaped with border
//  * - Input and button: side by side within bordered container
//  *
//  * TABLET (768px - 1023px):
//  * - Main container: vertical flex (stacked)
//  * - Heading: full width at top
//  * - Form: full width below, still has border and pill shape
//  * - Input and button: still side by side
//  *
//  * MOBILE (0px - 639px):
//  * - Main container: vertical flex (stacked)
//  * - Heading: full width at top
//  * - Form: full width, no border on container
//  * - Input and button: stacked vertically
//  * - Input: individual border and rounded corners
//  * - Button: aligned to right for visual balance
//  *
//  * KEY RESPONSIVE CLASSES:
//  * - max-lg:flex-col: Stacks main layout on screens <1024px
//  * - max-sm:flex-col: Stacks form elements on screens <640px
//  * - lg:max-w-[40%]: Constrains form width on desktop
//  * - sm:border: Only shows container border on larger screens
//  * - max-sm:justify-end: Aligns button right on mobile
//  */

// export default Subscribe;
