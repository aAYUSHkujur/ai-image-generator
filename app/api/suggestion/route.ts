export async function GET(request: Request) {
    // Connect to Microsoft Azure Function endpoint
    const response = await fetch(`${process.env.GET_CHATGPT_SUGGESTION_URL}`, {
        cache: "no-store"
    });

    const textData = await response.text();

    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    });
}
