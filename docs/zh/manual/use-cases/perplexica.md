# Perplexica

Perplexica is an open-source AI-powered search engine that provides intelligent search capabilities while maintaining user privacy. As an alternative to Perplexity AI, it combines advanced machine learning with comprehensive web search functionality to deliver accurate, source-cited answers to your queries.

## The backend: SearSNG
SearXNG serves as the privacy-focused meta-search engine backend for Perplexica. It:
* Aggregates results from multiple search engines
* Removes tracking and preserves your privacy
* Provides clean, unbiased search results for the AI model to process

This integration enables Perplexica to function as a complete search solution while maintaining the security of your sensitive information.

## Before you begin
Before getting started, ensure you have:
- Ollama installed and running in your Olares environment
- Open WebUI installed with your preferred language models downloaded
  :::tip
  For optimal performance, consider using lightweight yet powerful models like `gemma2`, which offer a good balance between speed and capability.
  :::
## Set up Perplexica
1. Install SearXNG from Market based on your role:
    - **For admin**: Install both "SearXNG For Cluster" and "SearXNG".
    - **For team members**: Ensure your admin has installed "SearXNG For Cluster", and install "SearXNG" only.
2. Install Perplexica from Market.
3. Launch Perplexica, and click <i class="material-symbols-outlined">settings</i> in the bottom left corner to open the settings window.
4. Configure your search environment with the following settings (using `gemma2` as an example):
   - **Chat model Provider**: `Ollama`
   - **Chat Model**: `gemma2:latest`
   - **Embedding model Provider**: `Ollama`
   - **Embedding Model**: `gemma2:latest`
5. Click the confirmation button to save your configuration and return to the search interface.

Your setup is complete. Try searching for a topic you're interested in to test your new search environment.

