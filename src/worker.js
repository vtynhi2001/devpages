// Standalone Cloudflare Worker
// Use this for full Worker deployments (not Pages Functions)

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Handle API routes
        if (url.pathname.startsWith("/api/")) {
            return handleApi(request, env);
        }

        // Serve static content or return a default response
        return new Response("Hello from Cloudflare Worker!", {
            headers: { "Content-Type": "text/plain" },
        });
    },
};

async function handleApi(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
        const data = {
            message: "Hello from Cloudflare Workers!",
            timestamp: new Date().toISOString(),
            method: request.method,
            cf: {
                colo: request.cf?.colo || "unknown",
                country: request.cf?.country || "unknown",
            },
        };

        return new Response(JSON.stringify(data, null, 2), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }

    return new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
    });
}
