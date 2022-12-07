// Import the openai package.
const openai = require('openai');

// Set the API key.
openai.apiKey = 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;

// Set the prompt you want to generate a response for.
const prompt = "What is the meaning of life?";

// Use the `text` method of the OpenAI library to generate a response.
// This method takes the prompt as an argument and returns a promise
// that resolves with the generated response.
openai
  .text({
    prompt: prompt,
    model: "text-davinci-003",
  })
  .then(response => {
    // Print the generated response to the console.
    console.log(response.data.text);
  })
  .catch(error => {
    // Handle any errors that may occur.
    console.error(error);
  });
