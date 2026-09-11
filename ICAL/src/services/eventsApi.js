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

    if(!Array.isArray(data)) {
        throw new Error("Invalid events data.");
    }

    return data.map(normalizeEvent);
}

function getDriveFileId(url) {
    if(!url) {
        return null;
    }

    const queryId = new URL(url).searchParams.get('id');

    if(queryId) {
        return queryId;
    }

    const pathMatch = url.match(/\/d\/([^/]+)/);

    return pathMatch?.[1] ?? null;
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