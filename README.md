# A&B Media — editable website source

This is the complete source for your current A&B Media site, including the Send project inquiry button and social buttons. It uses HTML5, CSS3 and plain JavaScript. There is no React, framework, npm requirement, build step, database or custom server. All three creative hero illustrations are built in HTML/CSS; there are no missing image assets.

## Files and what to edit

| File | Purpose |
| --- | --- |
| index.html | Page sections, headings, paragraphs, navigation, project examples, about section, process and form markup. |
| style.css | Colours, typography, spacing, illustrations and responsive desktop/mobile styles. The `:root` variables at the top define the main palette. |
| app.js | Service descriptions, service-selection options, example project selections, mobile menu and footer year. Some visible copy is generated here. |
| config.js | Your business email and social profile names/URLs. Start here when connecting your accounts. |
| contact.js | Form routing, unconfigured-form message and rendering of social links. |
| CONTACT-SETUP.md | Detailed email activation and social setup. |
| .nojekyll | Tells GitHub Pages to serve the static files without Jekyll processing. |
| .gitignore | Excludes common local/editor files from Git. |

Keep all five website source files together. The scripts at the bottom of index.html must stay in this order: config.js, contact.js, app.js.

## Open in Visual Studio Code

1. Extract the ZIP.
2. In VS Code, choose File > Open Folder and select AB-Media-Website.
3. Open index.html in your browser to view it. For live reload while editing, you can optionally use a local preview extension.
4. Save changes and refresh the browser to see them.

No npm install or build command is required. The optional formatter used to prepare this download is not a runtime dependency.

## Connect email and social profiles

Edit config.js and replace the empty businessEmail value with your inbox. Replace the blank social URLs with full https:// profile URLs. You can rename, add or remove platforms in that list.

Do not put email passwords, access tokens or API secrets in these files. The configuration is public website code.

The contact form is prepared for FormSubmit email delivery, not a mailto link. Once your email is configured and published, send a test inquiry, confirm FormSubmit's activation email, and test delivery again. Until configured, no inquiry is sent. Blank social links show disabled Coming soon buttons.

## Put the site on GitHub Pages

1. Create a GitHub repository, for example `ab-media`.
2. Add the CONTENTS of this folder to the repository root. index.html must be at the top level, not inside an extra AB-Media-Website folder.
3. Commit and push the files to the main branch. You can use VS Code Source Control, GitHub Desktop, or Git commands.
4. In the repository on GitHub, open Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select main and /(root), then Save.
7. When deployment finishes, use the website URL shown in GitHub's Pages settings.

Push future changes to the selected branch to publish updates. Relative file paths support a project site hosted beneath a repository name. Keep filename capitalization consistent; GitHub paths are case-sensitive.

Optional Git commands for a NEW, empty repository (replace YOUR-USERNAME and YOUR-REPOSITORY first):

```sh
git init
git add .
git commit -m "Add A&B Media website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

For later changes:

```sh
git add .
git commit -m "Update website content"
git push
```

If your repository already contains files, clone it first and copy this site's files into that working folder; don't run the new-repository commands over unrelated work.

## Hosting and outside services

- GitHub stores your code; GitHub Pages serves this static website.
- The current ChatGPT-hosted site and your future GitHub repository are separate copies. Pushing to GitHub will update GitHub Pages once enabled, but will not automatically update the ChatGPT-hosted copy.
- Google Fonts supplies DM Sans and Space Grotesk through the CSS import. System fonts are used if Google Fonts cannot load.
- FormSubmit processes form submissions and emails them to your configured inbox. GitHub Pages itself does not send email.
- No real client portfolio projects or testimonials are included. Hero examples remain labelled as studio concepts. The portfolio page is deferred.

## Quick check after editing

- Test desktop and narrow/mobile layouts.
- Test navigation, mobile menu, service accordions and project-service selection.
- Confirm the form stays blocked until you configure the email.
- After activation, send one real test inquiry and verify that it reaches your inbox.
- Check each configured social link opens the intended profile.

## References

GitHub Pages publishing-source documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

FormSubmit setup and email activation:
https://formsubmit.co/
