const data = require('../utils/data.json')
const fs= require('fs')

 // Function to reformat the date
const reformatDate = (ddmmyyyy) => {
    const [day, month, year] = ddmmyyyy.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

// Updating the Day key for each object in the data array
const updatedData = data.map(item => ({
    ...item,
    Day: reformatDate(item.Day)
}));

// File path to save the updated data
const filePath = './data.json';

// Save the updated data to a JSON file
fs.writeFile(filePath, JSON.stringify(updatedData, null, 4), (err) => {
    if (err) {
        console.error('Error saving file:', err);
    } else {
        console.log(`Updated data has been saved to ${filePath}`);
    }
});