const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://keerthiram2612:keerthijaya@cluster26.mx7ja.mongodb.net/<your-database-name>")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("Connection failed:", error.message);
    });

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", newSchema);

module.exports = User;
