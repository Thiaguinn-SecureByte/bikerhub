import { GoogleGenAI, Type } from "@google/genai";
import { BikeDetailsData } from "../types";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBikeDetails = async (
  brandName: string,
  modelName: string,
  year: string | number
): Promise<BikeDetailsData> => {
  const model = "gemini-2.5-flash";

  const prompt = `
    Provide detailed technical specifications and history for the motorcycle: ${year} ${brandName} ${modelName}.
    Return the data in Spanish.
    The 'description' should be an engaging summary (max 100 words).
    The 'history' should be a brief paragraph about this specific model year's context or changes (max 100 words).
    The 'specs' should be short strings (e.g., "120 CV", "180 kg").
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING, description: "Short engaging summary" },
            history: { type: Type.STRING, description: "Brief history of the model year" },
            specs: {
              type: Type.OBJECT,
              properties: {
                engine: { type: Type.STRING, description: "Engine type and displacement" },
                power: { type: Type.STRING, description: "Horsepower" },
                torque: { type: Type.STRING, description: "Torque" },
                weight: { type: Type.STRING, description: "Wet or dry weight" },
                seatHeight: { type: Type.STRING, description: "Seat height in mm" },
              },
              required: ["engine", "power", "torque", "weight", "seatHeight"]
            }
          },
          required: ["description", "history", "specs"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as BikeDetailsData;
    }

    throw new Error("No data returned from Gemini");

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback data in case of API failure or missing key
    return {
      description: "Información no disponible en este momento. Por favor, intente más tarde.",
      history: "No se pudo cargar la historia del modelo.",
      specs: {
        engine: "N/A",
        power: "N/A",
        torque: "N/A",
        weight: "N/A",
        seatHeight: "N/A"
      }
    };
  }
};