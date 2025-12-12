# devpages

A project configured for **Cloudflare Pages** and **Workers** deployment.

## 📁 Project Structure

```
devpages/
├── public/              # Static files served by Cloudflare Pages
│   ├── index.html       # Main HTML file
│   ├── _headers         # Custom HTTP headers
│   └── _redirects       # URL redirects
├── functions/           # Cloudflare Pages Functions (serverless)
│   └── api/
│       └── hello.js     # Example API endpoint at /api/hello
├── src/
│   └── worker.js        # Standalone Worker (alternative deployment)
├── wrangler.toml        # Wrangler configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### Install Dependencies

```bash
npm install
```

### Local Development

Run the development server with Cloudflare Pages:

```bash
npm run dev
```

This starts a local server at `http://localhost:8788` with hot reloading.

## 📦 Deployment

### Option 1: Cloudflare Pages (Recommended)

Deploy static files + serverless functions:

```bash
npm run deploy
```

Or connect your GitHub repo to Cloudflare Pages dashboard for automatic deployments.

### Option 2: Standalone Worker

For a pure Worker deployment (edit `wrangler.toml` to uncomment `main`):

```bash
npm run worker:deploy
```

## 🔧 Configuration

### Environment Variables

Add secrets and environment variables:

```bash
# For Pages
npx wrangler pages secret put MY_SECRET

# For Workers
npx wrangler secret put MY_SECRET
```

### Bindings

Configure in `wrangler.toml`:

- **KV Namespace** - Key-value storage
- **D1 Database** - SQL database
- **R2 Bucket** - Object storage
- **Durable Objects** - Stateful coordination

## 📚 Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
