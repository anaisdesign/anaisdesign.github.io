module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/style.css"); 
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("project");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "."
    }
  };
};
