import config from '../config/environment';

export default function() {

    let problems = [{
        id: 'all-balanced-parentheses-strings',
        title: 'All Balanced Parentheses Strings (Mirage)',
        summary: 'Print all strings consisting of `n` balanced parentheses.',
        statement: `Print all strings consisting of \`n\` balanced parentheses.

For example, the strings consisting of three balanced parentheses are
the following.

\`\`\`ascii
()()()
()(())
(())()
(()())
((()))
\`\`\`

**Input.** The input consists of a sequence of numbers, one on a
line of its own, followed by EOF.  The following is an example input.

\`\`\`ascii
1
0
3
2
\`\`\`

**Output.** For a given input, the output consists of one of more
sequences of balanced parentheses strings.  Each sequence corresponds
to a number in the input.  The sequences appear in the order
determined by the input numbers.  Each sequence need not be sorted.
    The strings that belong to a given sequence must not be repeated.  For
        example, the following is the output that corresponds to the previous
example input.

\`\`\`ascii
()

()()()
()(())
(())()
(()())
((()))
()()
(())
\`\`\`
`,
        solution_url: 'http://ruslanledesma.com/2017/05/16/all-balanced-parentheses-strings.html',
    }, {
        id: 'merge-by-buffer',
        title: 'Merge by Buffer (Mirage)',
        summary: 'Write a function that merges two sorted integer arrays using no other buffer than the one you are given.',
        statement: `Write a function that merges two sorted integer arrays using no other buffer than the one you are given.

One of the arrays consists of data and an empty space called
buffer. This array is the primary array because this is where you
will store the result of the merge. Even though the buffer contains
integers, we consider it empty.  Consider the following example
primary array \`P\`.

![Primary Array](http://ruslanledesma.com/assets/2017.04.13.primary-array.png)

The other array is at most the size of the buffer and consists of
data.  This array is the secondary array because it contains the
elements that you will merge into the primary array.  Consider the
following example secondary array \`S\` that corresponds to the example
primary array.

![Secondary Array](http://ruslanledesma.com/assets/2017.04.13.secondary-array.png)

The expected final state of \`P\` given \`S\` is the following.

![Expected Primary](http://ruslanledesma.com/assets/2017.04.13.expected-primary.png)

The integer of position 9 in the final state is unspecified because
we do not care about what's beyond the length of the result of the
merge.

**Input.** The input to your function consists of a reference to the
principal array, a reference to the secondary array, and the length of
the data. For example, for the example primary and secondary arrays,
the length of the data is 6.

**Output.** The output of your function consists of the expected final
state of the primary array and the length of the merge. Given that the
final state of the primary array is available through any reference to
the array, the only return value of your function is the length of the
merge. For example, for the example primary and secondary arrays, the
length of the merge is 9.
`,
        solution_url: 'http://ruslanledesma.com/2017/04/13/merge-by-buffer.html',
    }];

    this.get(config.theOfficialJournalHost + '/problems', function() {
        return problems;
    });

    // The following unconventional path is given by PostgREST.
    this.get(config.theOfficialJournalHost + '/problems?id=eq.:problem_id', function(_db, request) {
        return problems.filter(p => p.id === request.params.problem_id);
    });

    let judges = [{
        id: "ruby",
        name: "Ruby",
        codemirrormode: "ruby"
    },{
        id: "java",
        name: "Java",
        codemirrormode: "text/x-java"
    }];

    this.get(config.theCourtroomHost + '/judges', function() {
        return judges;
    });

    this.get(config.theCourtroomHost + '/judges/:language', function(_db, request) {
        return judges.filter(j => j.id === request.params.language)[0];
    });

    this.post(config.theCourtroomHost + '/judges/:language/trial', function(_db, request) {
        if(request.params.language === 'ruby') {
            return { ruling: "ACCEPTED",
                     seconds: "0.0" };
        } else {
            return { ruling: "WRONG_ANSWER",
                     seconds: "0.0" };
        }
    });
}
