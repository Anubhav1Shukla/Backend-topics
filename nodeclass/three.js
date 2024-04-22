const fs = require('fs');

const content = {
    key7: "value",
    key8: 29
};

const convert = JSON.stringify(content, null, 2);

const filename = "01_intro.json";

fs.writeFile(filename, convert, (err) => {
    if (err) {
        console.error("Error occurred:", err);
    } else {
        console.log("File is updated");

        // Rename the file
    const newFilename = "new_intro.json";
    fs.rename(filename, newFilename, (err) => {
        if (err) {
            console.error("Error occurred while renaming:", err);
        } else {
            console.log("File has been renamed to", newFilename);


            
        }

        
    });
}
});
