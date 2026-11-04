# Project structure

## Folders and responsibilities

```text
public/                         Files served as-is from the site root
  favicon.svg                   Portfolio favicon
  images/                       Public profile, project, and background imagery
  resume/                        Place the verified resume PDF here
src/
  assets/images/                 Imported images that should be bundled by Vite
  assets/icons/                  Local icon assets (Lucide is used for UI icons)
  components/layout/             Shared page chrome and section wrapper
  components/common/             Reusable section heading, reveal text, project card
  components/effects/            Canvas neural network background
  sections/                      Top-level portfolio sections
  data/                           Static personal, navigation, skills, and project content
  hooks/                          Scroll and intersection observer hooks
  styles/                         Design tokens, base rules, animations, visual effects
  utils/                          Shared constants and configuration values
docs/                             Project and maintenance documentation
  archive/                        Original standalone portfolio source, retained for reference
```

## Component architecture

`App.jsx` composes the background, navbar, content sections, and footer. Each page section owns its presentation and uses the reusable `Section` wrapper for consistent width and reveal behavior. `ProjectCard` receives project data and renders only verified HTTP(S) links. The navbar uses the shared navigation data and closes on link activation or Escape.

## Data management

Personal details and education live in `src/data/personal.js`; skills and projects are defined in their respective data files. Keep UI layout in components and content in data. Add a project object to `projects.js` with a unique `id`, descriptive copy, technology list, icon, and only confirmed link URLs. Add skills to the matching category in `skills.js`.

## CSS architecture

- `variables.css`: palette, typography, and spacing tokens.
- `globals.css`: Tailwind directives, reset, page defaults, and focus treatment.
- `animations.css`: reveal and entrance motion plus reduced-motion behavior.
- `effects.css`: liquid glass, glow, interactive transitions, and grid helpers.

Tailwind CSS supplies responsive layout utilities. Prefer tokens and shared styles over repeating custom CSS values.

## Asset management

Place public assets under `public/`; reference them with root paths such as `/images/profile.webp`. Place assets imported from components under `src/assets/`. The existing repository contained no images or resume, so those directories are available for the verified assets without adding fabricated files.

## Installation and development

Run `npm install`, then `npm run dev`. Run `npm run build` for a production build and `npm run preview` to serve it locally. `npm run lint` runs ESLint.

## Contact form configuration

The form does not simulate delivery. Configure `VITE_CONTACT_ENDPOINT` with a real HTTPS form-service endpoint in a local `.env` file (see `.env.example`) or in the hosting provider's environment settings, then rebuild/redeploy. The endpoint must accept a `multipart/form-data` POST with `name`, `email`, and `message` fields and return a successful HTTP response. Keep private API credentials on a server; Vite `VITE_` variables are public in the client bundle. If no endpoint is configured, the form clearly instructs visitors to use the displayed email address.
