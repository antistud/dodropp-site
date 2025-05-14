import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const emailSchema = z.object({
        email: z.string().email("Invalid email address"),
      });

      const validatedData = emailSchema.parse(req.body);
      
      // In a real application, you would store this email in a database or send it to an email service
      // For now, we'll just return success
      
      return res.status(200).json({ success: true, message: "Subscription successful" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid email format", errors: error.errors });
      }
      
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
