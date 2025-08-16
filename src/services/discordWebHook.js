export const sendToDiscord = async (content) => {
    try {
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message to Discord");
      }
    } catch (error) {
      console.error("Discord Error:", error);
    }
  };
