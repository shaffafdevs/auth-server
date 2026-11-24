import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello World'));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
