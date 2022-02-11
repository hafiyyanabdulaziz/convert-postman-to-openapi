// Require Package
const postmanToOpenApi = require("postman-to-openapi");

// Postman Collection Path
const postmanCollection = "./postman.json";
// Output OpenAPI Path
const outputFile = "./collection.yml";

const convert = async () => {
  //   try {
  //     const result = await postmanToOpenApi.convert(postmanCollection);
  //     console.log(result);
  //     const output = await postmanToOpenApi.write(result, outputFile);
  //     console.log(output);
  //   } catch (error) {
  //     console.log(error);
  //   }

  try {
    const result = await postmanToOpenApi(postmanCollection, outputFile, {
      defaultTag: "General",
    });
    // Without save the result in a file
    //   const result2 = await postmanToOpenApi(postmanCollection, null, {
    //     defaultTag: "General",
    //   });
    console.log(`OpenAPI specs: ${result}`);
  } catch (err) {
    console.log(err);
  }
};

convert();

module.exports = convert;

// Async/await
