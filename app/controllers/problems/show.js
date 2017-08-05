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

  judge: Ember.computed('store', function() {
    return this.store.findRecord('judge', 'ruby');
  }),

  actions: {

    selectJudge(id) {
        this.store.findRecord('judge', id).then(judge => {
            this.set('judge', judge);
            this.set('mode', judge.get('codemirrormode'));
        });
    },

    submitCode() {
        alert("Submitting the following code:\n\n" + this.code);
        this.judge.trial({ src: this.code,
                           problemId: this.model.id })
            .then(response => {
                alert("Response: " + JSON.stringify(response));
            });
    }

  }
});
