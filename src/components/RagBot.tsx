"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ChatEntry {
  sender: string;
  message: string;
}

export function RagBot() {
  const [userInput, setUserInput] = useState(""); // Pour l'entrée utilisateur
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]); // Historique de discussion
  const [isLoading, setIsLoading] = useState(false); // Indique si une réponse est en cours de chargement

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Ajouter le message de l'utilisateur à l'historique
    setChatHistory((prev) => [...prev, { sender: "user", message: userInput }]);
    setIsLoading(true);

    try {
      // Appel à l'API RAG
      const response = await fetch("/api/rag-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userInput }),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }

      const data = await response.json();

      // Ajouter la réponse du bot à l'historique
      setChatHistory((prev) => [...prev, { sender: "bot", message: data.answer }]);
    } catch (error) {
      console.error("Erreur :", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", message: "Je rencontre un problème, réessayez plus tard." },
      ]);
    } finally {
      setIsLoading(false);
    }

    // Réinitialiser l'entrée utilisateur
    setUserInput("");
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Rag Bot: Interactive CV Assistant</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Historique des messages */}
            <div className="bg-muted p-4 rounded-md shadow-sm border">
              <div className="max-h-60 overflow-y-auto space-y-3">
                {chatHistory.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Posez une question sur mon CV, et Rag Bot vous répondra.
                  </p>
                ) : (
                  chatHistory.map((entry, index) => (
                    <div
                      key={index}
                      className={`${
                        entry.sender === "bot" ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <strong>{entry.sender === "bot" ? "Rag Bot" : "Vous"}:</strong> {entry.message}
                    </div>
                  ))
                )}
                {isLoading && (
                  <p className="text-sm text-muted-foreground">
                    Rag Bot est en train de réfléchir...
                  </p>
                )}
              </div>
            </div>

            {/* Zone de saisie */}
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Posez une question..."
                className="flex-1 p-2 border rounded-l-md"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark"
                disabled={isLoading}
              >
                {isLoading ? "En cours..." : "Envoyer"}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
