# RuneLite Plugin Shields

A simple proxy fetching current active installs from plugin hub and returning Shields.io's schema response.

## Usage

`https://img.shields.io/endpoint?url=https://rl-plugin-shields.klisiu.net/active-installs/{PLUGIN_SLUG}`

### What is `{PLUGIN_SLUG}`?

`{PLUGIN_SLUG}` is the name unique identifier of a plugin which has been committed to the
[Plugin Hub's repository](https://github.com/runelite/plugin-hub/tree/master/plugins).

### Color customisation

If you want to customise the background color used for displaying the active installs count, please append a `color` aram to the URL with a value set to one of the [supported colors](https://shields.io/#colors).

### Examples

Example for the _Sandstone Buckets Counter_ plugin.

Trying to embed the following image in Markdown:

```markdown
![active installs](https://img.shields.io/endpoint?url=https://rl-plugin-shields.klisiu.net/active-installs/sandstone-buckets-counter)
```

will result with:

![active installs](https://img.shields.io/endpoint?url=https://rl-plugin-shields.klisiu.net/active-installs/sandstone-buckets-counter)

Changing the background color to _blueviolet_:

```markdown
![active installs](https://img.shields.io/endpoint?url=https://rl-plugin-shields.klisiu.net/active-installs/sandstone-buckets-counter&color=blueviolet)
```

will result with:

![active installs](https://img.shields.io/endpoint?url=https://rl-plugin-shields.klisiu.net/active-installs/sandstone-buckets-counter&color=blueviolet)

## Issues/Suggestions

Feel free to open a new issue on GitHub.
