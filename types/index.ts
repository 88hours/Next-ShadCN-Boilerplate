export interface Message {
  id: string;
  speaker: string;
  timestamp: string;
  content: string;
  position?: 'left' | 'right';
}

export interface Device {
  deviceId: string;
  label: string;
  kind: string;
}

export interface AudioRecorderConfig {
  onDataAvailable?: (data: Blob) => void;
}

export interface TranscriptManagerConfig {
  onUpdate?: (messages: Message[]) => void;
} 