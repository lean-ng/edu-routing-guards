export enum MessageType {
  Success,
  Info,
  Warning,
  Error
}

export interface Message {
  type: MessageType;
  content: string;
}
