import type { Message } from '@/types';

interface GroupedMessages {
  [key: string]: Message[];
}

export class PrintExporter {
  static printTranscript(messages: Message[]): void {
    const printWindow = window.open("", "", "width=800,height=600");
    if (!printWindow) return;

    const groupedMessages = this.groupMessagesByTimestamp(messages);
    const printContent = this.generatePrintContent(groupedMessages);

    this.setupPrintWindow(printWindow, printContent);
  }

  private static groupMessagesByTimestamp(messages: Message[]): GroupedMessages {
    const grouped: GroupedMessages = {};
    messages.forEach((message) => {
      const key = `${message.speaker}-${message.timestamp}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(message);
    });
    return grouped;
  }

  private static generatePrintContent(groupedMessages: GroupedMessages): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Transcript</title>
          ${this.getPrintStyles()}
        </head>
        <body>
          <h1>Transcript</h1>
          ${this.renderMessages(groupedMessages)}
        </body>
      </html>
    `;
  }

  private static getPrintStyles(): string {
    return `
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .speaker-section {
          margin-bottom: 20px;
        }
        .speaker-header {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .message {
          margin-bottom: 5px;
        }
      </style>
    `;
  }

  private static renderMessages(groupedMessages: GroupedMessages): string {
    return Object.entries(groupedMessages)
      .map(
        ([key, msgs]) => `
        <div class="speaker-section">
          <div class="speaker-header">${msgs[0].speaker} (${msgs[0].timestamp}):</div>
          ${msgs
            .map(
              (msg) => `
            <div class="message">${msg.content}</div>
          `
            )
            .join("")}
        </div>
      `
      )
      .join("");
  }

  private static setupPrintWindow(printWindow: Window, content: string): void {
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  }
} 