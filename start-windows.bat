@echo off
title Mein KI-Chatbot
cd /d "%~dp0"

echo =========================================
echo Mein KI-Chatbot wird vorbereitet...
echo =========================================

if not exist ".env" (
  echo FEHLER: Datei .env fehlt.
  echo Bitte .env.example kopieren, in .env umbenennen und OPENAI_API_KEY eintragen.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Installiere Abhaengigkeiten...
  npm install
)

echo Starte Server...
npm start
pause
