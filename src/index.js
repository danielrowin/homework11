const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.sync({ force: true });
});
