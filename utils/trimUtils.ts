//For custom max length trimming of text in the UI give undefined instead of variant and specify maxLength
export function trimText(content: string, variant?: 'title' | 'content' | 'qrindicator', maxLength?: number) {
    if (variant && !maxLength) {
        switch (variant) {
            case 'title':
                maxLength = 24;
                break;
            case 'content':
                maxLength = 25;
                break;
            case 'qrindicator':
                maxLength = 18;
                break;
            default:
                throw new Error('Invalid variant. Please choose "title", "content", or "qrindicator".');
        }
    } else if (maxLength === undefined) {
        throw new Error('If no variant is provided, maxLength must be specified.');
    }

    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}
