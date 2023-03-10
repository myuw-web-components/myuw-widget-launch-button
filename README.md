# myuw-widget-launch-button

Launch button for a MyUW widget. Intended as replacement for the launch-button AngularJS Directive in uportal-app-framework.

This launch button is intended for use as part of a widget card.

## Getting Started

Include the web component as follows:

```html
<!-- import the module -->
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-widget-launch-button@latest/dist/myuw-widget-launch-button.min.mjs"></script>


<!-- Use the Web Component, probably in the context of a widget card. -->
<myuw-widget-launch-button
  data-myuw-url="https://enroll.wisc.edu/"
  data-myuw-text="Launch full app"
  data-myuw-aria-label="Launch Course Search and Enroll"
></myuw-widget-launch-button>
```

_Note:_ The evergreen "latest" version can be used for convenience, but in production settings it is recommended to use the latest [release version](https://github.com/myuw-web-components/myuw-widget-launch-button/releases) specifically, and upgrade only after testing!

## Usage

### Attributes

#### data-myuw-url

The `data-myuw-url` attribute tells the web component where the link should take the user.

Required.

#### data-myuw-text

The text label for display on the button.

#### data-myuw-aria-label

Aria label for the button.

This is intended to make the launch button useful for screen reader users navigating by stepping through the hyperlinks on the page. Whereas a label like "Launch full app" does not clarify *which* app will be launched, "Launch Course Search and Enroll" communicates what app the link will launch.


## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
