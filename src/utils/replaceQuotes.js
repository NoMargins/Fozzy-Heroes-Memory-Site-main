function replaceQuotesWithChevrons(text) {
    const quoteRegex = /"(.*?)"/g;
    return text.replace(quoteRegex, '«$1»');
}

export default replaceQuotesWithChevrons;