# Portfolio Template

A bilingual (English / Spanish) portfolio template built with HTML, CSS, and JavaScript. Use this template to create your own professional portfolio showcasing the projects you've completed in the Web Localization course.

---

## Getting Started

1. **Clone or fork this repository** to your own GitHub account.
2. Open the files in your code editor of choice.
3. Follow the customization steps below to make the portfolio your own.
4. When you're ready to publish, enable GitHub Pages in your repository settings (Settings → Pages → Deploy from branch → `main` / `root`).

---

## File Structure

```
/
├── index.html          # English version of the portfolio
├── inicio.html         # Spanish version of the portfolio
├── styles.css          # All visual styling, including color variables
├── interactions.js     # Theme toggle and scroll-to-top behavior
├── images/             # Place your photos and project screenshots here
│   ├── Portrait_Placeholder.png
│   ├── Project_Placeholder.png
│   └── contact-card.svg
└── LICENSE.txt
```

---

## How to Customize Your Portfolio

### 1. Personal Information

Open both `index.html` and `inicio.html` and replace all placeholder text:

- `Full name | Title` / `Nombre completo | Título` — your name and professional title in the navigation bar
- The About Me paragraph — introduce yourself and your background
- Project cards — add your project name, description, and link to the live GitHub Pages site
- Skills — update the skill categories and items to reflect your own
- Contact section — add your real email, GitHub username, and LinkedIn URL
- Footer — add your name and your institution's name

Remember to update **both** the English (`index.html`) and Spanish (`inicio.html`) files so the two versions stay in sync.

### 2. Images

Replace the placeholder images in the `images/` folder:

- **Portrait** — a photo of yourself, ideally square or close to square so it crops well in the circular frame
- **Project screenshots** — one image per project card (the template uses `Project_Placeholder.png`)

Keep your image filenames simple and lowercase with no spaces (e.g., `my-portrait.jpg`, `project-spanish-app.png`) and update the `src` attributes in the HTML to match. Don't forget to update the alt text to describe the new images you've added.

---

## Customizing Colors

The first and most impactful change you can make to personalize the portfolio is to update the **color palette**. All colors are defined in one place at the very top of `styles.css`, inside the `:root` block. You only need to edit values in this section — the rest of the stylesheet will update automatically.

### Understanding the Color Variables

```css
:root {
  /* Light Mode Colors */
  --background-light: #556B2F;      /* Page background (shown between sections) */
  --section-bg-light: #F5F5F5;      /* Background of each section card */
  --text-light: #000000;            /* Main body text */
  --link-light: #7B4F9D;            /* Hyperlink color */
  --button-light: #7B4F9D;          /* Button background */
  --button-hover-light: #432b55;    /* Button background on hover */
  --button-text-light: #FFFFFF;     /* Text inside buttons */
  --image-bg-light: #FFFFFF;        /* Background behind images */
  --border-light: #e1e1e1;          /* Card and image borders */
  --contact-icon-light: #000000;    /* Contact section icons */

  /* Dark Mode Colors */
  --background-dark: #2D3339;
  --section-bg-dark: #38471f;
  --text-dark: #FFFFFF;
  --link-dark: #6DABFF;
  --button-dark: #6DABFF;
  --button-hover-dark: #004099;
  --button-text-dark: #FFFFFF;
  --card-bg-dark: #2D3339;
  --image-bg-dark: #f2f2f2;
  --border-dark: #2D3339;
  --underline-dark: #FFFFFF;
  --contact-icon-dark: #FFFFFF;
}
```

To change the palette, simply replace the hex code values (the `#` codes) with your own chosen colors.

### What Is a Hex Code?

In CSS, colors are most commonly written as **hex codes** — a `#` symbol followed by six characters using the digits `0–9` and letters `A–F`. Each pair of characters controls the red, green, and blue components of the color:

```
#  R  R  G  G  B  B
   5  5  6  B  2  F   →   #556B2F  (dark olive green)
```

Some common examples:
- `#FFFFFF` — white
- `#000000` — black
- `#FF0000` — pure red
- `#0057B8` — a medium blue

You'll find hex codes displayed everywhere in design tools and color pickers, so they're the most convenient format to use here.

### Choosing Colors That Work Well Together

Picking colors that harmonize is one of the most important parts of portfolio design. A few tips:

**Use a color wheel or palette generator.** These tools take the guesswork out of color theory by showing you which colors are naturally complementary, analogous, or contrasting. Some useful free tools:

- [Adobe Color](https://color.adobe.com/) — explore color harmonies visually
- [Canva Color Tools](https://www.canva.com/colors/) — get ideas for color combinations
- [Coolors](https://coolors.co/) — generate and lock palette combinations quickly

**Think in terms of roles, not just individual colors.** Rather than picking six random colors you like, give each color a purpose:
- A **background** color that recedes and doesn't compete with content
- A **surface** color for cards and sections (usually lighter or darker than the background)
- An **accent** color for buttons and links — this is where personality comes through
- A **text** color that's legible against your surfaces

**Maintain sufficient contrast.** Text must be readable against its background. The Web Content Accessibility Guidelines (WCAG) recommend a contrast ratio of at least **4.5:1** for normal body text and **3:1** for large headings. You can check contrast ratios with:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

Or you can ask an LLM (like ChatGPT) for help determining if your CSS has enough contrast. 

A common mistake is choosing a background and text color that both feel "medium" — for example, a medium gray background with dark gray text. Always test your combinations before committing to them.

**Light and dark mode should feel cohesive, not just inverted.** The dark mode palette doesn't need to be a simple inversion of the light palette. Often, dark mode works best with desaturated, muted versions of your accent color for links and buttons, and very dark (but not pure black) backgrounds. Pure black (`#000000`) on a dark background often reads as a "hole" rather than a surface.

---

## License

This template is released under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to adapt it for your portfolio as long as you provide attribution. See `LICENSE.txt` for full details.
