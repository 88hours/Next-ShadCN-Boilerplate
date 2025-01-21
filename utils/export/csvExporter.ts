import type { Message } from '@/types';

export class CSVExporter {
  static exportTranscript(messages: Message[]): void {
    const csvContent = this.generateCSVContent(messages);
    this.downloadCSV(csvContent);
  }

  private static generateCSVContent(messages: Message[]): string {
    const headers = ["Speaker", "Timestamp", "Content"];
    const rows = messages.map((message) => [
      message.speaker,
      message.timestamp,
      message.content,
    ]);

    return [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
  }

  private static downloadCSV(csvContent: string): void {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transcript.csv";
    link.click();
  }
} 