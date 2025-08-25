module.exports = function(eleventyConfig) {
    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/style.css"); 
    eleventyConfig.addPassthroughCopy("src/images");
    
    // Watch CSS for changes during development
    eleventyConfig.addWatchTarget("src/style.css");
    
    // Projects collection - filters by "project" tag
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByTag("project").reverse(); // Most recent first
    });
    
    // Optional: Create a collection for featured projects only
    eleventyConfig.addCollection("featuredProjects", function(collectionApi) {
        return collectionApi.getFilteredByTag("project")
            .filter(item => item.data.featured === true)
            .reverse();
    });
    
    // Add date filters for project sorting
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    });
    
    // Add a filter to limit number of items (useful for "recent projects")
    eleventyConfig.addFilter("limit", (array, limit) => {
        return array.slice(0, limit);
    });

    return {
        dir: {
            input: "src",
            includes: "_includes", 
            output: "."  // Output to root for GitHub Pages
        },
        // Use Nunjucks for better templating
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
