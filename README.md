# BRAMIL Construction

Simple, plain-language website for BRAMIL Construction — construction + electrical, Yuba City, CA.
Live domain target: **bramilconstruction.com** | Phone: **(530) 844-3139**

## What's here
Plain static site. No build step, no framework — just edit the HTML and push.

- `index.html` — all the words and sections
- `style.css` — colors and layout
- `script.js` — quote form (opens a text message to BRAMIL) + footer year
- `vercel.json` — clean URLs / caching for Vercel

## Edit the important stuff
Everything a customer cares about is in `index.html`:
- Phone number: search for `8443139` / `844-3139`
- Services: look for `Building & Remodeling` and `Electrical Work`
- Service area + hours: in the quote section and footer
- License: footer says "License information available on request" — replace that line when the CSLB number is ready

Photos are stock photos (Unsplash) showing the *types* of jobs. Swap them for real job photos as they come in, same file names / same spots in `index.html`.

## Deploy
This repo is meant to be imported into Vercel:
Vercel → Add New → Project → Import `tyed19/bramil-construction` → Framework: Other → Deploy.

Then add the custom domain in Vercel:
Project → Settings → Domains → add `bramilconstruction.com` and `www.bramilconstruction.com`, and point DNS where the domain is registered to Vercel as instructed there.
