// Cloudflare Pages Function - API endpoint
// This runs at the edge on every request to /api/hello

export async function onRequest(context) {
    // Access bindings, environment variables, etc.
    // const { env, request, params } = context;

    const data = {
        message: "Hello from Cloudflare Workers!",
        timestamp: new Date().toISOString(),
        cf: {
            colo: context.request.cf?.colo || "unknown",
            country: context.request.cf?.country || "unknown",
        },
    };

    return new Response(JSON.stringify(data, null, 2), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
}
