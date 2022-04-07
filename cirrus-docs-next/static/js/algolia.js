module.exports = function () {
    console.log('yeryrt')
    docsearch({
        apiKey: '0d1e359d3108207be31c0be378397ed8',
        indexName: 'cirrus-ui',
        // inputSelector: '#cirrus-search',
        container: '#cirrus-search',
        debug: false, // Set debug to true if you want to inspect the dropdown
        appId: 'POSAFBVOBL',
    });
};
