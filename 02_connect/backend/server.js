import express from 'express';

const app = express();
app.use(express.static('dist'))

const port = process.env.PORT || 4000;

// app.get('/', (req,res) => {
//   res.send('server is ready');
// });

app.get('/api/jokes', (req,res) => {
  const jokes = [
    {
      id: 1,
      title: 'Joke 1',
      content: 'This is a joke'
    },
    {
      id: 2,
      title: 'Joke 2',
      content: 'This is a joke'
    },
    {
      id: 3,
      title: 'Joke 3',
      content: 'This is a joke'
    },
    {
      id: 4,
      title: 'Joke 4',
      content: 'This is a joke'
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server is live at http://localhost:${port}`);
});
