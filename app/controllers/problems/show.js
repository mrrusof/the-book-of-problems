import Ember from 'ember';

export default Ember.Controller.extend({
  theme: 'neo',
  code: '',
  mode: 'ruby',
  language: 'Ruby',
  notes: 'None',
  keyMap: 'emacs',
  lineNumbers: true,

  keyMaps: [
    'default',
    'emacs',
    'vim'
  ],

  rulingAlertVisible: false,
  rulingAlertType: 'success',
  ruling: '',

  actions: {

    selectJudge(id) {
        this.store.findRecord('judge', id).then(judge => {
            this.set('mode', judge.get('codemirrormode'));
            this.set('language', judge.get('name'));
            this.set('notes', judge.get('notes'));
        });
    },

    submitCode() {

      this.set('rulingAlertVisible', false);
      this.set('loadingAlertVisible', true);

      this.store.findRecord('judge', document.getElementById('judge').value).then(judge => {
        judge.trial({ src: this.code,
                      problemId: this.model.id })
              .then(response => {
                if(response.ruling === "ACCEPTED") {
                  this.set('rulingAlertType', 'success');
                } else {
                  this.set('rulingAlertType', 'danger');
                }
                var r = response.ruling + ", ran for " + response.seconds + " seconds.";
                this.set('ruling', r);
                this.set('rulingAlertVisible', true);
                this.set('loadingAlertVisible', false);
              });
      });
    }

  }
});
