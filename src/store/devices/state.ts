export type Device = {
  id: string;
  temperature: number;
  humidity: number;
  deviceId: string;
  timestamp: string;
};

export type State = {
  items?: Device[];
};

export const state = (): State => ({
  items: [],
});
