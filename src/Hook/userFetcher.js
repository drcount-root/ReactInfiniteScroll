import fs from 'fs';

const dataFetcher = async () => {
    const response = await fetch('https://randomuser.me/api/?results=500');
    const data = await response.json();
    
    fs.writeFile('./data.json', JSON.stringify(data.results), err => {
        if(err) throw err;
    })

    return 'fetched data written successfully'
  }

  dataFetcher()