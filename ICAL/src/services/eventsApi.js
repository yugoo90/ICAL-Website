const EVENTS_API_URL = import.meta.env.VITE_EVENTS_API_URL;

export async function getEvents() {
    if(!EVENTS_API_URL) {
        throw new Error("Events API URL is not configured");
    }


    const response = await fetch(EVENTS_API_URL);

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (
        !Array.isArray(data) ||
        data.some(event =>
            !event ||
            typeof event !== "object" ||
            Array.isArray(event) ||
            typeof event.id !== "string" ||
            !event.id.trim()
        )
    ) {
        throw new Error("Invalid events data.");
    }

    return data.map(normalizeEvent);
}

function getDriveFileId(url) {
    if(typeof url !== "string" || !url.trim()) return null;

    try {
        const parsedUrl = new URL(url);
        const queryId = parsedUrl.searchParams.get("id");
        if(queryId) return queryId;

        const pathMatch = parsedUrl.pathname.match(/\/d\/([^/]+)/);
        return pathMatch?.[1] ?? null;
    } catch {
        return null;
    }
}

function normalizeEvent(event) {
    const fileId = getDriveFileId(event.flyerFileUrl);
    return {
        ...event,
        flyerImageUrl: fileId
            ? `https://lh3.googleusercontent.com/d/${fileId}=w1200`
            : null,
    }
}