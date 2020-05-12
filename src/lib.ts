export type MIDIEvent = [number, number, number];

interface TransportEventPing {
  type: "ping";
}
interface TransportEventPong {
  type: "pong";
}
interface TransportEventMIDI {
  type: "midi";
  midi: MIDIEvent;
}
export type TransportEvent =
  | TransportEventMIDI
  | TransportEventPing
  | TransportEventPong;

export const pingEvent: TransportEventPing = { type: "ping" };
export const pongEvent: TransportEventPong = { type: "pong" };

// export interface TransportEvent {
//   type:
//     | "midi"
//     | "ping"
//     | "pong"
//     | "answer"
//     | "candidate"
//     | "error"
//     | "user"
//     | "user_join"
//     | "user_leave"
//     | "room"
//     | "mute"
//     | "unmute";
//   midi?:
//   user?: User;
//   room?: Room;
// }
export interface User {
  id: string;
  emoji: string;
}

export interface Room {
  users: User[];
}

export const emojis = [
  "😎",
  "🧐",
  "🤡",
  "👻",
  "😷",
  "🤗",
  "😏",
  "👽",
  "👨‍🚀",
  "🐺",
  "🐯",
  "🦁",
  "🐶",
  "🐼",
  "🙈",
];

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
