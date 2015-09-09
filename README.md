# mozorg-js-external

This repository contains collections of JavaScript code snippets which have been run on
https://www.mozilla.org, using tools such as [Google Tag Manager](https://www.google.com/tagmanager/)
and [Optimizely](https://www.optimizely.com). These tools are being used to facilitate
tasks such as A/B testing, as well as page optimization testing and general performance
analysis.

The purpose of this repo is to serve as a public source of history for all third party
JavaScript code that is run on the site, as well as providing a clear and simple way to
ensure that all experiments are adequately code reviewed and tested before being run.

The repository is split into two main directories:

- `/gtm/` - Google Tag Manager code snippets.
- `/optimizely/` - Optimizely code snippets.

## Optimizely code snippets

- When submitting Optimizely code snippets, please add them to the `/optimizely/` folder.
- Use a descriptive filename, prefixed with the appropriate experiment ID (e.g. `3238381094-win-10-survey.js`).
- Please fill in the required information in the commented area at the top of each file.
- For experiments with multiple variations, please use a separate function for each variation.
- Include any regular expressions that may be used to target the experiment.

Note: you can use the file `0123456789-example.js` as a base template when submitting
new code.

## Google Tag Manager

- When submitting GTM code snippets, please add them to the `/gtm/` folder.
- Each GTM snippet should be a separate file complete with a descriptive name (e.g. `home-page-promo-click.js`).
- Please fill in the required information in the commented area at the top of each file.

Note: you can use the file `_example-gtm-snippet.js` as a base template when submitting
new code.

## Configuring your code editor

If you use a code editor that supports plugins such as [EditorConfig](http://editorconfig.org/)
and [JSHint](https://github.com/jshint/jshint), it can automatically make use of the
`.editorconfig` and `.jshintrc` files included in this repo. Using these plugins can
help to improve both the readability and quality of your code, as well as speed up the
code review process.

## Submitting code for review

When you want to submit a code snippet for review, you should create a branch from
master. This allows you to work on different snippets at the same time:

```Shell
git checkout master
git checkout -b snippet-branch-name
```

If you need more Git expertise, a good resource is the [Git book](http://git-scm.com/book).

Once you're done with your changes, you'll need to describe those changes in
the commit message.

### Git commit messages

Commit messages are important when you need to understand why something was
done.

- First, learn [how to write good git commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
- All commit messages must include a bug number. You can put the bug number on
  any line, not only the first one.

If you're asked to change your commit message, you can use these commands:

```Shell
git commit --amend
# -f is doing a force push because you modified the history
git push -f my-remote snippet-branch-name
```

### Making a pull request

Please submit your work with a [pull request to master](https://help.github.com/articles/using-pull-requests/),
and then link to the pull request as an attachment in the relevant bugzilla bug.

### Squashing your commits

Should your pull request contain more than one commit, sometimes we may ask you
to squash them into a single commit before merging. You can do this with `git
rebase`.

As an example, let's say your pull request contains two commits. To squash them
into a single commit, you can follow these instructions:

```Shell
git rebase -i HEAD~2
```

Your terminal will then open an editor with your two commits listed. Change the second
commit from `pick` to `fixup`, then save and close. You should then be able to
verify that you only have one commit now with `git log`.

To push to GitHub again, because you "altered the history" of the repo by merging
the two commits into one, you'll have to `git push -f` instead of just `git push`.

### Testing / QA

If an experiment or GTM snippet warrants more than just code-level review, and needs QA
testing before being run, a bedrock committer may ask to run the experiment against a
demo environment prior merging.

### After the merge

Once your code has been positively reviewed by a bedrock committer, it will be then be
merged and the relevant bugzilla bug can be resolved as FIXED. Once the reviewed snippet
is running in the production environment and all looks good, the bug can be marked
as VERIFIED.
