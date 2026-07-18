tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "abyss-ink": "#081C24",
        "ocean-navy": "#082B38",
        "deep-current": "#0F4C5C",
        "ocean-emerald": "#0D5C63",
        "bioluminescence": "#5CFFD1",
        "secondary": "#41ebbe",
        "sunlight-blue": "#2E86AB",
        "coral-sand": "#F4C66A",
        "foam-white": "#F4FAFA",
        "background": "#101416",
        "surface": "#101416",
        "surface-container-lowest": "#0b0f11",
        "surface-container-low": "#181c1e",
        "surface-container": "#1c2023",
        "surface-container-high": "#272a2d",
        "surface-container-highest": "#313538",
        "on-background": "#e0e3e6",
        "on-surface": "#e0e3e6",
        "on-surface-variant": "#bfc8ce",
        "outline": "#899298",
        "outline-variant": "#3f484d",
        "error": "#ffb4ab",
        "on-primary": "#003548",
        "on-secondary": "#00382a"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        card: "40px",
        full: "9999px"
      },
      spacing: {
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        "section-gap": "120px",
        "container-padding": "40px",
        "gutter": "24px"
      },
      fontFamily: {
        "display-hero": ["Fraunces"],
        "headline-lg": ["Fraunces"],
        "headline-md": ["Fraunces"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-caps": ["Inter"],
        "data-lg": ["IBM Plex Mono"],
        "data-sm": ["IBM Plex Mono"]
      },
      fontSize: {
        "display-hero": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "500" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }],
        "data-lg": ["24px", { lineHeight: "1", fontWeight: "500" }],
        "data-sm": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "400" }]
      }
    }
  }
};
