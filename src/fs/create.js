const create = async () => {
    // Write your code here 
   const fs = require('fs');
   const path = require('path');

const create = async () => {
    // Create the path to the file
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
        console.error('FS operation failed'); // Print error message if file exists
        return; // Stop the function
    }

    // Write to the file
    fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
            console.error('Error writing to file:', err); // Handle errors
        } else {
            console.log('File created successfully'); // Success message
        }
    });
};

await create();

