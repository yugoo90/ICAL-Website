function formatDate(dateString, isAllDay) {
    if(!dateString) return "Date unavailable";

    const date = new Date(dateString);
    if(Number.isNaN(date.getTime())) return "Date unavailable";

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: isAllDay ? "UTC" :  "America/Edmonton",
    };

    if(isAllDay) {
        return date.toLocaleDateString("en-CA", options);
    }

    return date.toLocaleString("en-CA", {
        ...options,
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
    });
}

function formatEndDate(dateString, isAllDay){
    if(!isAllDay) return formatDate(dateString, false);
    if(!dateString) return "Date unavailable";

    const date = new Date(dateString);
    if(Number.isNaN(date.getTime())) return "Date unavailable";

    date.setUTCDate(date.getUTCDate() - 1);

    return formatDate(date.toISOString().slice(0, 10), true);

}

export function EventCard({event}) {
    const flyerUrl = event.flyerImageUrl || event.flyerUrl;

    return (
        <article className="ical-card overflow-hidden text-left">
            {flyerUrl && (
                <img
                    src={flyerUrl}
                    alt={event.flyerTitle || `${event.title} flyer`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-auto w-full object-contain"
                />
            )}

            <div className="space-y-4 p-6">
                <h3 className="text-2xl font-bold text-emerald-950">
                    {event.title}
                </h3>
                <div className="space-y-2 text-emerald-900/75">
                    <p>
                        <strong>Starts:</strong>{" "}
                        {formatDate(event.startDate, event.isAllDay)}
                    </p>
                    <p>
                        <strong>Ends:</strong>{" "}
                        {formatEndDate(event.endDate, event.isAllDay)}
                    </p>

                    {event.location && (
                        <p>
                            <strong>Location:</strong> {event.location}
                        </p>
                    )}
                </div>

                {event.description && (
                    <p className="leading-relaxed text-emerald-900/75">
                        {event.description}
                    </p>
                )}

                {event.calendarUrl && (
                    <a
                        href={event.calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ical-btn"
                    >
                        View event in Google Calendar
                    </a>
                )}
            </div>
        </article>
    );
}