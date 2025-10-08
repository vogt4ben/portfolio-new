# Git: Add, Diff (@Commit), Commit, Push main

Use this command to stage changes, review the working diff, draft a commit from the diff, and push to `main`.

## Steps

1. Add all changes to staging

```bash
@Git add .
```

2. Review a quick summary of the working diff

```bash
@Git diff --stat
```

3. Draft a commit message from the working diff

```bash
@Commit (Diff of Working State)
```

4. If needed, confirm the commit explicitly

```bash
@Git commit -m "<message>"
```

5. Push to main

```bash
@Git push origin main
```

> Tip: If you’re not on `main`, run `@Git checkout main` first, or replace `main` with your current branch.
