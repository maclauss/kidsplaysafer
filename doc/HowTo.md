# How To Guide

This is a practical guide relating to the kidsplaysafer development

## Coding Guidelines

1. Avoid magic numbers, always use constants.
2. Use camelCase when naming variables.
3. Please use prettier for formatting, and eslint to check your code.

## Commit Guidelines

### Workflow

checkout branch --> commit changes --> raise pull request --> reviewer approves and merges

### Git

1. Create branch name with the name `<commit-type>/<feature-name>`. Example, `feature/kps-1`.
2. If you have made multiple commits in this branch, squash the commits so that we have a smaller commit footprint in the project.

```
## Squash the last n commits
git rebase -i HEAD~n

## Force push
git push origin branch-name --force

## If there are conflicts, continue when done
git rebase --continue

## Abort if needed
git rebase --abort
```

- You may find the command `git log --oneline` useful when deciding how many commits to squash

3. Try to keep the commit message concise in one line. Please see the following for the message structure, `<commit-type>(<feature-name>): <description>`. Example, `feature(kps-1): initial commit`.

## Responsive

When developing for this project we should adopt the mobile-first approach. This means that we should develop the desktop site starting with the mobile version in mind.

### Breakpoints

We have set up two media queries to be used for this purpose. Please see below for an example:

```javascript
import { SCREEN_SIZE } from "constants/mobile";

export const StyledComponent = div.styled`
  width: 100%;

  @media ${SCREEN_SIZE.MEDIUM} {
    width: 200px;
  }
`;
```

### Conditional Rendering

We have a custom hook for screen sizes in case you need to render components on larger screens. Please see below for an example:

```javascript
import { useScreenSize } from "hooks/useScreenSize";

const Component = (props) => {
  const { isLargeSize } = useScreenSize();
  return (
    <div>
      <p>Hello world!</p>
      {isLargeSize && <button>minimise</button>}
    </div>
  );
};
```

## Asynchronous Functions

Please remember to wrap all asynchronous functions in a try/catch block.

## Images

We will use SVG wherever possible, and we should import them as React components so that we can reduce loading delays. Please see below for an example:

```javascript
import { ReactComponent as ExampleAvatar } from "views/assets/avatars/exampleAvatar.svg";

const ExampleComponent = (props) => {
  return <ExampleAvatar />;
};
```
