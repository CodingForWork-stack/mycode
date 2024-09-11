const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// GraphQL setup
const schema = buildSchema(`
    type Query {
        hello: String
        quoteOfTheDay: String
        random: Float!
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

const root = {
    hello: () => 'Hello world!',
    quoteOfTheDay: () => {
        const quotes = [
            'The only way to do great work is to love what you do. – Steve Jobs',
            'Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill',
            'Believe you can and you\'re halfway there. – Theodore Roosevelt',
            'It does not matter how slowly you go as long as you do not stop. – Confucius',
            'Our greatest glory is not in never falling, but in rising every time we fall. – Confucius',
            'The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt',
            'The best way to predict the future is to create it. – Peter Drucker',
            'You miss 100% of the shots you don’t take. – Wayne Gretzky',
            'Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford',
            'In the middle of difficulty lies opportunity. – Albert Einstein',
            'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',
            'Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett',
            'The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt',
            'Don’t watch the clock; do what it does. Keep going. – Sam Levenson',
            'Act as if what you do makes a difference. It does. – William James',
            'Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau',
            'The harder you work for something, the greater you’ll feel when you achieve it.',
            'Dream big and dare to fail. – Norman Vaughan',
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    },
    random: () => Math.random(),
    rollDice: ({ numDice, numSides }) => {
        const output = [];
        for (let i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// RESTful endpoint setup
app.get('/api/quote', (req, res) => {
        const quotes = [
            'The only way to do great work is to love what you do. – Steve Jobs',
            'Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill',
            'Believe you can and you\'re halfway there. – Theodore Roosevelt',
            'It does not matter how slowly you go as long as you do not stop. – Confucius',
            'Our greatest glory is not in never falling, but in rising every time we fall. – Confucius',
            'The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt',
            'The best way to predict the future is to create it. – Peter Drucker',
            'You miss 100% of the shots you don’t take. – Wayne Gretzky',
            'Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford',
            'In the middle of difficulty lies opportunity. – Albert Einstein',
            'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',
            'Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett',
            'The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt',
            'Don’t watch the clock; do what it does. Keep going. – Sam Levenson',
            'Act as if what you do makes a difference. It does. – William James',
            'Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau',
            'The harder you work for something, the greater you’ll feel when you achieve it.',
            'Dream big and dare to fail. – Norman Vaughan',
        ];
    res.json({ quote: quotes[Math.floor(Math.random() * quotes.length)] });
});

app.listen(8080, () => console.log('Now browse to localhost:8080/graphql or localhost:8080/api/quote'));

