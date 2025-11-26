+++
title = "Configuration"
date = 2024-11-06
description = "Learn how to configure the Strix theme — customize your name, navigation, social links, and homepage sections."
draft = false

[extra]
image = "/posts/config-guide/owl_022.png"

[taxonomies]
tags = ["guide", "zola", "theme"]
categories = ["guide"]
+++

This guide explains how to customize the **Strix** theme through the `[extra]` section of your `config.toml`.  
You can modify your name, navigation menu, social links, and homepage layout — all without touching the templates.


## 🦉 Basic Information

These fields control the author info shown in your homepage profile section or sidebar.

```toml
[extra]
author = "Great Grey Owl"
author_img = "/images/owl_profile.png"
subtitle = "A powerful, lightweight theme for Zola built with Tailwind CSS."
bio = "Strix Nebulosa @ Dense Coniferous"
# "Wait, listen, and watch for prey, then swoop down"
```

**Descriptions:**
* `author`: Your display name
* `author_img`: Profile image path (relative to `static/`)
* `subtitle`: A short description or tagline for your site
* `bio`: A longer line for your about/profile card

> 💡 Tip: If your image looks squished, use a square image or set `object-cover` in the template.

## 🧭 Navigation Bar
```toml
# Logo
logo = "/images/strix_logo2.png"
show_logo = true

# Menu
menu = [
  { name = "Home", url = "/" },
  { name = "Posts", url = "/posts" },
  { name = "About", url = "/about" },
]
```

**Descriptions:**

* `logo`: Path to your logo image (e.g. `/images/logo.png`)

* `show_logo`: Set to `false` if you prefer a text-only title

* `menu`: An array of navigation links; `name` is the label, `url` is the path

✏️ You can add more menu items or reorder them. Example:
``` toml
menu = [
  { name = "Home", url = "/" },
  { name = "Blog", url = "/blog" },
  { name = "Projects", url = "/projects" },
  { name = "About", url = "/about" },
]
```

## 🌐 Social Links
The Strix theme supports icons for common platforms (e.g., GitHub, Email).
Add your links to the `socials` array:

```toml
socials = [
  { name = "github", url = "https://github.com/your-username" },
  { name = "email", url = "mailto:your-email@gmail.com" },
]
```

**Supported names:**
`github`, `email`, `twitter`, `linkedin`, `facebook`, `instagram`, `youtube`, `rss`

> 💡 You can freely add or remove any entries. Icons are matched automatically by name.

## 🏠 Homepage Sections

You can control which sections appear on the homepage and in what order.
Each module corresponds to a layout block in `index.html`.

```toml
homepage = [
  "profile",
  "recent_posts",
  "experience",
  "education",
  "featured_projects"
]
```

**Available modules:**
* profile – Shows your author info and social links
* recent_posts – Displays latest blog posts
* experience – (Optional) Work history section
* education – (Optional) Academic background
* featured_projects – Highlight selected projects


