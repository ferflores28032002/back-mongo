import { app } from "./app";

const PORT = parseInt(process.env.PORT || "5000", 10); // Convertir a número

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
