const copyToClipboardFallback = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Move the textarea outside the viewport to make it invisible
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999999px';

    document.body.prepend(textarea);

    // highlight the content of the textarea element
    textarea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.log(err);
    } finally {
        textarea.remove();
    }
}

export const copyToClipboard = async (text: string): Promise<void> => {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    copyToClipboardFallback(text);
}