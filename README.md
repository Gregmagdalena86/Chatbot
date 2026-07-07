# Mein KI-Chatbot

Ein einfacher Web-Chatbot mit:

- Node.js Backend
- Express Webserver
- OpenAI API
- HTML/CSS/JavaScript Frontend
- API-Key sicher in `.env`

## 1. Voraussetzungen

Installiere Node.js 20 oder neuer:

```bash
node -v
npm -v
```

## 2. Installation

Ordner öffnen und ausführen:

```bash
npm install
```

## 3. API-Key eintragen

Datei `.env.example` kopieren und in `.env` umbenennen.

Dann eintragen:

```env
OPENAI_API_KEY=sk-dein_api_key_hier
OPENAI_MODEL=gpt-5.5
PORT=3000
```

Wichtig: Die Datei `.env` niemals öffentlich hochladen.

## 4. Starten

```bash
npm start
```

Dann im Browser öffnen:

```text
http://localhost:3000
```

Unter Windows kannst du alternativ `start-windows.bat` doppelklicken.

## 5. Modell ändern

In `.env`:

```env
OPENAI_MODEL=gpt-5.5
```

Falls dein API-Konto ein anderes Modell verwenden soll, dort den Modellnamen ändern.

## 6. Wichtig für echte Nutzung

Für Kundenbetrieb brauchst du zusätzlich:

- Login oder Passwortschutz
- Datenschutzerklärung
- Impressum
- Kostenlimit / Rate Limit
- Logging und Monitoring
- bei PDF-Bot: Dokumentenspeicher und Quellenangaben

## 7. Nächster Ausbau: PDF-Chatbot

Dafür brauchst du zusätzlich:

- PDF-Upload
- Textauslesung oder OCR
- Vektor-Speicher / File Search
- Quellenanzeige pro Antwort
- getrennte Kundenbereiche
