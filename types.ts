export enum MessageType {
  USER = 'USER',
  SYSTEM = 'SYSTEM',
  AI = 'AI'
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: number;
  type: MessageType;
}

export enum MediaType {
  VIDEO = 'VIDEO',
  MUSIC = 'MUSIC'
}

export interface MediaItem {
  id: string;
  title: string;
  artist?: string;
  url: string;
  thumbnail: string;
  type: MediaType;
  duration?: number;
}

export interface RoomState {
  id: string;
  name: string;
  users: User[];
  currentMedia: MediaItem | null;
  isPlaying: boolean;
  currentTime: number;
  queue: MediaItem[];
}
