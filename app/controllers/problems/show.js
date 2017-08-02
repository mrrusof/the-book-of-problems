import Ember from 'ember';

export default Ember.Controller.extend({
  theme: 'neo',
  language: 'ruby',
  code: "def say_hello\n  puts 'hello'\nend",
  keyMap: 'emacs',
  lineNumbers: true,

  languages: [
    {mode: 'text/x-java', name: 'Java'},
    {mode: 'ruby', name: 'Ruby'}
  ],

  keyMaps: [
    'default',
    'emacs',
    'vim'
  ],

  actions: {
    submitCode() {
        alert("Submitting the following code:\n\n" + this.code);
    }
  }
});
