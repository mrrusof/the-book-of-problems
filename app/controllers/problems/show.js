import Ember from 'ember';

export default Ember.Controller.extend({
  theme: 'neo',
  code: `def e l, r, s, e_n
  if l > 0
    e (l - 1), (r + 1), (s + '('), e_n
  end
  if r > 0
    e l, (r - 1), (s + ')'), e_n
  end
  if l == 0 and r == 0
    e_n << s
  end
  return e_n
end

while true
  n = readline.strip.to_i rescue break
  puts e(n, 0, '', []).reverse
end`,
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
