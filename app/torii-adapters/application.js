import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default EmberObject.extend({
  open() {
    debugger;
  },
  fetch() {
    return RSVP.reject();
  },
  close() {
   debugger;
  },
});
