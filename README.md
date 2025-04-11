# MindMeld Documentation

Welcome to the documentation for the MindMeld project. This project is a chatbot application built with React and Vite, powered by the Perplexity AI API.

## Table of Contents

1. [Setup](setup.md)
2. [Usage](usage.md)
3. [Architecture](architecture.md)
4. [API Reference](api.md)

# Setup

Follow these steps to set up the MindMeld project:

## Prerequisites

- Node.js (v16 or later)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mindmeld

   ```

2. npm install
3. VITE_PERPLEXITY_API_KEY=your-api-key-here
4. npm run dev

## Key Components

1. **App.jsx**: The main component that manages the theme and renders the chat interface.
2. **ConversationWindow.jsx**: Displays the chat messages.
3. **ChatInput.jsx**: Handles user input and actions.
4. **ChatBubble.jsx**: Renders individual chat messages.

## State Management

The `useChat` custom hook manages the chat state, including messages, loading state, and error handling.

# API Reference

## Perplexity AI API

The application uses the Perplexity AI API for generating chat responses.

### Endpoint

`POST https://api.perplexity.ai/chat/completions`

### Request Body

```json
{
  "model": "sonar",
  "messages": [
    {
      "role": "user",
      "content": "Your question here"
    }
  ],
  "max_tokens": 2000
}
```
