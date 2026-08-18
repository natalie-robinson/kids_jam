### Repo kids bluegrass jam

A repo for the Louisville CO kids jam page

## Build
- The site was build with NextJS
- Hosting is on Vercel
- Tabular data is hosted on Supabase (postgres)
- PDF storage and serving is through CloudFlare R2
- Emailing: for location/time updates, song additions, etc. is through Resend

## Site specifications
- This website is mostly informational, acting as a way to disseminate info about the kids bluegrass jam. Three specific components are interactive:
    - email notification sign up: users may input emails for updates (location changes, new song additions, etc.)
    - Song request: allows users to upload sheet music or input song title to request 
    - Song library: users may download pdf versions of sheet music
