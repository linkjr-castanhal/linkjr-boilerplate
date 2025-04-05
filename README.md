<h1>LinkJr Boilerplate 🧑‍💻</h1>

<p>
    <b>A modern, scalable boilerplate built with Next.js 15, designed to jumpstart your web app development with a powerful stack, reusable components, and ready-to-use authentication.</b>
</p>

<h2 id="tech-stack">Tech Stack 💻</h2>

[![My Skills](https://skillicons.dev/icons?i=nodejs,react,nextjs,ts,tailwind,docker,redis,postgresql,prisma,cloudflare,pnpm,git,github)](https://skillicons.dev)

- **React** – Library for building user interfaces with reusable components.
- **Next.js 15** – React framework with modern routing, layouts, and server actions support.
- **TypeScript** – Adds static typing for better code safety and organization.
- **Tailwind CSS** – Utility-first CSS framework for fast and responsive UI styling.
- **pnpm** – Fast and efficient package manager for dependency management.
- **Clerk** – Full-featured authentication (sign-in, sign-up, sessions) out of the box.
- **Prisma** – ORM for working with the database in a simple and type-safe way.
- **PostgreSQL** – Relational database used to store application data.
- **Redis** – In-memory data store for caching and fast session handling.
- **Docker** – Ensures consistent development and production environments.
- **Cloudflare** – _Front-end hosting platform with SSR support._ (adjust)
- **Prettier** – Code formatter to keep the code clean and consistent.
- **ESLint** – Linter to identify and fix problems in JavaScript/TypeScript code.
- **Husky** – Git hooks manager used to run scripts before commits and pushes.
- **Commitlint** – Ensures commit messages follow a conventional format.
- **Lint-staged** – Runs linters (like ESLint or Prettier) only on staged files before commits.

<h2 id="project-overview">Project Overview 📋</h2>

### Getting Started

#### 1. Clone the repository:

```bash
git clone https://github.com/linkjr-castanhal/linkjr-boilerplate.git
cd linkjr-boilerplate
```

#### 2. Create a `.env` file in the root directory and add your environment variables as follows:

```env
# Prisma
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_publishabe_key"
CLERK_SECRET_KEY="your_secret_key"
SIGNING_SECRET="your_signing_secret"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/login"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/register"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL="/dashboard"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL="/dashboard"

# PostgreSQL Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=linkjr

# PGAdmin Configuration
PGADMIN_EMAIL=admin@admin
PGADMIN_PASSWORD=123456

# Redis Configuration
REDIS_URL=redis://localhost:6379
REDIS_PORT=6379
```

#### 3. Install required dependencies with pnpm

```bash
pnpm install
```

#### 4. Running the development server

```bash
pnpm dev
```

<h2 id="project-structure">Project Structure 📁</h2>

```text
src/
├── actions/                      # Server actions
├── app/                          # Next.js App Router
│   ├── (landing-page)/           # Public pages like home, contact
│   │   ├── _components/          # Components specific to home
│   ├── (private)/                # Authenticated/protected routes
│   └── api/                      # API routes
│       └── webhooks/             # Webhook Handlers
├── assets/                       # Global styles and assets
├── components/                   # Global, reusable UI components
│   └── ui/                       # Custom UI components (design system, shadcn-ui, aceternity)
├── config/
│   └── site.ts                   # Static config for site metadata, links, etc.
├── hooks/                        # Custom hooks (e.g., for managing localStorage)
├── lib/                          # General utility functions
├── providers/                    # React providers (theme, auth, etc.)
├── types/                        # Custom TypeScript types
└── validations/                  # Zod schema validations
```

<h2 id="branch-strategy">Branch Strategy 🌱</h2>

We follow a feature-based branch strategy:

- main – Stable version
- dev – Development base branch
- feature – New features
- fix – Bug fixes

<h2 id="contribute">Contribute 🚀</h2>

If you want to contribute, clone this repo, create your work branch and get your hands dirty!

```bash
git clone https://github.com/linkjr-castanhal/linkjr-boilerplate.git
```

```bash
git checkout -b feature/NAME
```

At the end, open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

### Documentations that might help

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

<h2 id="license">License 📃 </h2>

This project is under [MIT](./LICENSE) license
