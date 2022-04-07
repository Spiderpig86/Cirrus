module.exports = function () {
    docsearch({
        apiKey: process.env.algoliaApiKey,
        indexName: 'cirrus-ui',
        container: '#cirrus-search',
        debug: false, // Set debug to true if you want to inspect the dropdown
        appId: 'POSAFBVOBL',
    });
};
