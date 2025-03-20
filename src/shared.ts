export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "Timothy",
  "Thai",
  "Trev",
  "Tarah",
  "Tabitha",
  "Hannah",
  "Liam",
  "James",
  "Ethan",
  "Jonah",
  "Brady",
  "Andrew",
  "Ben",
  "Marmalade",
  "Dusty",
];
