const { exec } = require("child_process");

const inputFilePath = "./markdown-ex.md";
const outputFilePath = "output.odt";

const pandocCommand = `pandoc ${inputFilePath} -o ${outputFilePath}`;

exec(pandocCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Pandoc Error: ${stderr}`);
    return;
  }
  console.log(`Markdown converted to ODT: ${outputFilePath}`);
});
