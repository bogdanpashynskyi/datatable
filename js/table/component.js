export default class Component {
  constructor({ element }) {
    this._element = element;
    this._callbackSet = {};
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }

  on(eventName, elementName, callback) {
    this._element.addEventListener(eventName, (event) => {
      const delegetedTarget = event.target.closest(`[data-element="${ elementName }"]`);

      if (!delegetedTarget || !this._element.contains(delegetedTarget)) {
        return;
      }

      callback(event);
    });
  }

  subscribe(eventName, callback) {
    this._callbackSet[eventName] = callback;
  }

  emit(eventName, data) {
    const callback = this._callbackSet[eventName];

    if (!callback) {
      return;
    }

    callback(data);
  }
}
