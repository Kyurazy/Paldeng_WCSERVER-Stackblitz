/* 
Name: Paldeng, Carl Lester P.
Section:WD-303
Course:6WCSERVER 
Midterms Lab
*/

const express = require('express'); 
const app = express(); 
const port = 3000; 
const dishes = [
    {type: 'Sisig', province: 'Pampanga', price: 220},
    {type: 'Salpicao', province: 'Quezon', price: 180},
    {type: 'Bagnet', province: 'Ilocos', price: 370}
]

app.get('/dishes', (req, res) => 
    { res.send(dishes); 
    });

app.get('/dishes/:type', (req, res) => 
    { const dishType = req.params.type; 
    const dish = dishes.find(d => d.type.toLowerCase() === dishType.toLowerCase()); 
    if (dish) { res.json(dish); } 
    else { res.status(404).send('Record not found'); } 
}); 

app.use((req, res) => { 
    res.status(404).send('Record not found'); 
}); 

app.listen(port, () => { 
    console.log(`Server running on http://localhost:${port}`); 
});