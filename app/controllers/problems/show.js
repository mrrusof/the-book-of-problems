import Ember from 'ember';

export default Ember.Controller.extend({
  theme: 'neo',
  code: '',
  mode: 'ruby',
  keyMap: 'emacs',
  lineNumbers: true,

  keyMaps: [
    'default',
    'emacs',
    'vim'
  ],

  alertVisible: false,
  alertType: 'alert-success',
  ruling: '',

  actions: {

    selectJudge(id) {
        this.store.findRecord('judge', id).then(judge => {
            this.set('mode', judge.get('codemirrormode'));
        });
    },

    submitCode() {
      this.store.findRecord('judge', document.getElementById('judge').value).then(judge => {
        judge.trial({ src: this.code,
                      problemId: this.model.id })
             .then(response => {
                 if(response.ruling === "ACCEPTED") {
                   this.set('alertType', 'success');
                 } else {
                   this.set('alertType', 'danger');
                 }
                 this.set('alertVisible', true);
                 this.set('ruling', response.ruling + ", ran for " + response.seconds + " seconds.");
             });
      });
    }

  }
});
