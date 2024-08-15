import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';
import checkoutRoutes from './routes/checkoutRoutes';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);

app.use('/api/books', bookRoutes);
app.use('/api/checkouts', checkoutRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
