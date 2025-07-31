# README

1. Make changes to package(s)
2. Run changeset CLI, which prompts for which packages, what versions to bump (similar to Lerna)
3. This creates a markdown file which is the “change set”
4. Push change to master, via PR or directly
    - example: https://github.com/lenmor-invoicesimple/monorepo-changesets/pull/4
5. CI creates a changeset PR based on the changeset, via GH action (changesets/action@v1)
    - example: https://github.com/lenmor-invoicesimple/monorepo-changesets/pull/5
    - Note that this PR:
        - Bumps is-odd as minor; as we specified on the changeset
        - Bumps is-even that depends on is-odd ; detected dep, bumped as patch (default but configurable)
        - Deletes the “changeset” markdown file
6. When this PR is merged, it will apply the versions and publish automatically
