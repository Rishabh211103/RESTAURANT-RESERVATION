import app from "./app.js";
// We define the PORT variable. 
// It reads from the environment file (e.g., 5000) or defaults to 5000 if not found.
// This is essential if the dotenv file isn't loaded correctly before this script runs.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    // Note: We use the defined PORT variable for logging, which guarantees the correct value.
    console.log(`Server Running on PORT ${PORT}`);
});
