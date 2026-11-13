# A&B Media contact and social setup

Edit `config.js`. No layout changes are needed.

## Inquiry email

1. Set `businessEmail` to your business inbox.
2. Publish the updated site.
3. Submit a test inquiry on the site. FormSubmit will send an activation email to the configured inbox; confirm it.
4. Submit another test inquiry and verify delivery (including the spam folder).

The form uses https://formsubmit.co/ with a standard HTTPS POST. It sends the visitor's name, email, service selections and project description to FormSubmit for email delivery. CAPTCHA remains enabled. The service displays the confirmation page; the website never claims delivery before confirmation. No email passwords or API secrets belong in config.js. The recipient address is public client-side configuration.

While businessEmail is blank or invalid, submission is blocked and an honest coming-soon message is displayed. No data is downloaded or transmitted.

## Social buttons

Replace each blank `url` with your full `https://` profile URL. You can change labels, add entries, or remove platforms. Blank or invalid URLs render disabled Coming soon buttons. Configured profiles open in a new tab.

## Portfolio

The portfolio page is deferred; existing creative examples remain clearly labelled as concepts.
