import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import Groq from "groq-sdk";

// Initialisez l'instance Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Assurez-vous que cette variable est définie dans `.env.local`
});

// Fonction pour lire et analyser le contenu du fichier PDF
async function extractTextFromPdf(pdfPath: string): Promise<string> {
  const fileBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(fileBuffer);
  return data.text; // Retourne le contenu texte extrait
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Aucune question fournie." });
    }

    try {
      // Chemin vers le fichier PDF du CV
      const pdfPath = path.join(process.cwd(), "public", "resume.pdf");

      // Extraire le texte du fichier PDF
      const cvText = await extractTextFromPdf(pdfPath);

      // Préparer le prompt pour Groq
      const prompt = `
        Vous êtes un assistant intelligent et interactif pour un CV. Voici le contenu du CV :
        """
        ${cvText}
        """
        Répondez à la question suivante en utilisant uniquement les informations du CV et etre concise dans la réponse :
        "${question}"
      `;

      // Appeler l'API Groq avec le prompt
      const response = await groq.chat.completions.create({
        messages: [
          { role: "user", content: prompt },
        ],
        model: "llama3-8b-8192", // Remplacez par le modèle que vous souhaitez utiliser
      });

      // Vérification des choix et du contenu
      const choices = response.choices;
      if (!choices || choices.length === 0 || !choices[0]?.message?.content) {
        return res.status(500).json({ error: "Impossible de générer une réponse." });
      }

      const answer = choices[0].message.content.trim();

      // Retourner la réponse
      res.status(200).json({ answer });
    } catch (error) {
      console.error("Erreur dans le traitement :", error);
      res.status(500).json({ error: "Une erreur est survenue lors du traitement de la requête." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
