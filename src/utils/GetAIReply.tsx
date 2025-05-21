export const getAIReply = (text: string): string => {
  const lower = text.toLowerCase();

  if (lower.includes('scared') || lower.includes('anxious') || lower.includes('worried')) {
    return "It’s completely normal to feel anxious. Want to talk more about what's bothering you?";
  }

  if (lower.includes('alone') || lower.includes('lonely')) {
    return "You're not alone. I'm here for you, and your care team is too 💜";
  }

  if (lower.includes('tired') || lower.includes('fatigue')) {
    return "Fatigue is very common during treatment. Make sure to rest, and listen to your body.";
  }

  if (lower.includes('pain') || lower.includes('hurts')) {
    return "I'm sorry you're in pain. Have you told your care team? They might be able to help.";
  }

  return [
    "Thank you for sharing. I'm here with you every step of the way.",
    "You're doing so well. It's okay to take things one moment at a time.",
    "I’m here for you whenever you need to talk 🤗"
  ][Math.floor(Math.random() * 3)];
};
