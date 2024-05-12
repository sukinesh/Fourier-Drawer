const fs = require('fs');

// Read the content of the JSON file
fs.readFile('beardo.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    let obj_array = [];
    jsonData.forEach(element => {
        
        obj_array.push({x:element[0],y:element[1]})
    });

    fs.writeFile('output.json', JSON.stringify(obj_array,null,2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
    
        console.log('Data written');
    });
    // console.log(obj_array);
});
