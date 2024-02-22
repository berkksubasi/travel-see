export function formatTimestamp(createdAt: string) {
    const now = new Date();
    const messageDate = new Date(createdAt);

    const timeDifference = now.getTime() - messageDate.getTime();

    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference < 24) {
        const formattedTime = messageDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
        });
        return formattedTime;
    } else if (hoursDifference < 48) {
        return 'yesterday';
    } else {
        // 48 saatten fazlaysa "dd.mm.yyyy" formatında yaz
        const day = messageDate.getDate().toString().padStart(2, '0');
        const month = (messageDate.getMonth() + 1).toString().padStart(2, '0');
        const year = messageDate.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;
        return formattedDate;
    }
}