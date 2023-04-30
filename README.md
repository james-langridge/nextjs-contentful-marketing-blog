A statically generated marketing & blog site made with Contentful and the Next.js 13 beta features like the [App Router](https://beta.nextjs.org/docs/routing/fundamentals) and [React Server Components](https://beta.nextjs.org/docs/rendering/server-and-client-components).

## About The Project

The content manager has complete flexibility to create new pages in Contentful, which are rendered as dynamic route segments, and statically generated at build time (Static Site Generation).

The site also includes a blog page and a contact form page.

### Features

- [New `app` directory routing](https://beta.nextjs.org/docs/routing/fundamentals),
- [Data Fetching](https://beta.nextjs.org/docs/data-fetching/fundamentals)
- [Route handlers](https://beta.nextjs.org/docs/routing/route-handlers)
- [Server Components](https://beta.nextjs.org/docs/rendering/server-and-client-components)
- Headless CMS with **[Contentful](https://www.contentful.com/)**
- Styled using **[Tailwind CSS](https://tailwindcss.com/)**
- Written in **TypeScript**

## Run it locally

### Prerequisites

- You will need a [Contentful](https://www.contentful.com/sign-up/) account.
- You will need a Gmail account to work with nodemailer for the contact form.  See the [nodemailer docs](https://nodemailer.com/usage/using-gmail/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/james-langridge/nextjs-contentful-marketing-blog.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env.local` and update the variables.
    ```sh
    cp .env.example .env.local
    ```

4. Import the content types into your Contentful space with the [Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/). This only imports the content types that correspond with the React components.  You will have to create pages and add content and assets in Contentful.
    ```sh
    npm install -g contentful-cli
    contenful login
    contentful space import --content-file ./lib/export.json
    ```

5. Start the development server:
    ```sh
    npm run dev
    ```

## Deploy your own

You can clone and deploy this project on Vercel using the button below, provided you have completed the prerequisites above (email, Contentful CMS).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjames-langridge%2Fnextjs-contentful-marketing-blog&env=CONTENTFUL_ACCESS_TOKEN,CONTENTFUL_ENVIRONMENT,CONTENTFUL_FOOTER_ENTRY_ID,CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,CONTENTFUL_NAVBAR_ENTRY_ID,CONTENTFUL_SPACE_ID,GMAIL_PASSWORD,GMAIL_USERNAME_FROM,GMAIL_USERNAME_TO)

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

Distributed under the [MIT License](https://github.com/james-langridge/personal-trainer-planner/blob/main/LICENSE).
