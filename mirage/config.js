import config from '../config/environment';

export default function() {

    let problems = [{
        id: 'all-balanced-parentheses-strings',
        title: 'All Balanced Parentheses Strings (Mirage)',
        summary: 'Print all strings consisting of n balanced parentheses.',
        statement: 'Problem statement "All Balanced Parentheses Strings".',
        solution_url: 'http://ruslanledesma.com/2017/05/16/all-balanced-parentheses-strings.html',
    }, {
        id: 'merge-by-buffer',
        title: 'Merge by Buffer (Mirage)',
        summary: 'Write a function that merges two sorted integer arrays using no other buffer than the one you are given.',
        statement: 'Problem statement "Merge by Buffer".',
        solution_url: 'http://ruslanledesma.com/2017/04/13/merge-by-buffer.html',
    }];

    this.get(config.theOfficialJournalHost + '/problems', function() {
        return problems;
    });

    // The following unconventional path is given by PostgREST.
    this.get(config.theOfficialJournalHost + '/problems?id=eq.:problem_id', function(_db, request) {
        return problems.filter(function (e) { return e.id == request.params.problem_id; });
    });

    // TODO
    this.post(config.theCourtroomHost + '/judges/:language/trial', function() {
        return { ruling: "ACCEPTED",
                 seconds: "0.0" };
    });
}
