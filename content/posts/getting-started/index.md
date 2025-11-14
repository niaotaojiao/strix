+++
title = "Getting Started"
date = 2025-11-07
description = "An introduction to the theme, its purpose, and the kind of users it's designed for."
draft = false

[extra]
image = "/posts/getting-started/owl_022.png"

[taxonomies]
tags = ["guide", "zola", "tailwind css"]
categories = ["guide"]
+++

## ⚙️ Requirements

Before you start, make sure you have:
- **Zola ≥ 0.17.0** installed  
- **Git** (optional, for easy theme installation)  

Check your version:
```bash
zola --version
```


## 🚀 Installation

You can add this theme in two ways:
**Option 1: Clone it directly**
```bash
git clone https://github.com/niaotaojiao/strix
```

Then, in your `config.toml`:
```toml
theme = "strix"
```

**Option 2: Use it as a submodule**

If you’re managing your site with Git:
```bash
git submodule add https://github.com/niaotaojiao/strix
```

## 🧩 Basic Configuration

Add these to your config.toml to get started:

```toml
base_url = "https://example.com"
title = "My Zola Site"
theme = "strix"

[extra]
show_logo = true
logo = "static/logo.svg"
```

Run your site locally:
```bash
zola serve
```

## 🪶 Folder Structure

When installed, your project might look like this:
```
.
├── content/
│   ├── _index.md
│   └── posts/
├── static/
├── templates/
├── config.toml
└── themes/
    └── strix/
```

You can override any template by copying it from `themes/strix/templates/` into your own `templates/` folder.

> 💡 Tip: If you’re new to Zola, check out the official [Zola documentation](https://www.getzola.org/documentation/getting-started/overview/)

**Now you’re ready!**
Your Strix-powered site should be live locally — start customizing and make it yours ✨