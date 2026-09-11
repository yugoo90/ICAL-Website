function formatDate(dateString, isAllDay) {
    const date = new Date(dateString);

    if(isAllDay) {
        return date.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    return date.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
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
                        {formatDate(event.endDate, event.isAllDay)}
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