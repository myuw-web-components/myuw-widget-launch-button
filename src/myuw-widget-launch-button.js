import templateHtml from './myuw-widget-launch-button.html';

class MyUWWidgetLaunchButton extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(this.constructor.template.content.cloneNode(true));
    this.launchButtonElement = this.shadowRoot.getElementById('myuw-widget-launch-button');
  }

  static get observedAttributes() {
    return [
      'data-myuw-url',
      'data-myuw-text',
      'data-myuw-aria-label']
  }


  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement('template');
      this._template.innerHTML = templateHtml
    }
    return this._template;
  }

  /**
  * Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    this.updateComponent();
  }

  /**
  * When component is first attached to the DOM,
  * get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['data-myuw-url'] = this.getAttribute('data-myuw-url');
    this['data-myuw-text']         = this.getAttribute('data-myuw-text');
    this['data-myuw-aria-label']         = this.getAttribute('data-myuw-aria-label');

    this.$link = this.shadowRoot.getElementById('myuw-widget-launch-button');
  }

  /**
  * Update the component state
  */
  updateComponent() {
    this.launchButtonElement.innerHTML = this['data-myuw-text'];
    this.launchButtonElement.setAttribute("href", this['data-myuw-url']);
    if (this['data-myuw-url'] && this['data-myuw-url'].startsWith("http")) {
      this.launchButtonElement.setAttribute("rel", "noopener noreferrer");
      this.launchButtonElement.setAttribute("target", "_blank");
    }
  }

}

window.customElements.define('myuw-widget-launch-button', MyUWWidgetLaunchButton);
