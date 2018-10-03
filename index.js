const alfy = require('alfy');

if (alfy.input.length > 4) {
    let sanitizedInput = encodeURI(alfy.input);

    alfy.fetch(`https://www.openthesaurus.de/synonyme/search?q=${sanitizedInput}&format=application/json`).then(response => {
        const synonyms = [];
        response.synsets.forEach(
            entry =>
            synonyms.push(...entry.terms)
        );
        const items = synonyms
            .map(x => ({
                title: x.term,
                subtitle: x.level,
                arg: x.id
            }));
        alfy.output(items);
    });
};
