# fpg (Fastpush-Git)

fpg is a command-line tool that simplifies the process of pushing changes to a Git repository. It combines the commands `git add .`, `git commit -m "<message>"`, and `git push` into a single command for faster and more convenient usage.

## Installation

To install fpg globally on your system, you can use npm:

```bash
npm install -g fastpush-git
```

## Usage

Once fpg is installed, you can use it in any Git repository. Simply navigate to the root of your repository in the terminal and run the following command:

```bash
fpg "<commit message>"
```

Replace <commit message> with a descriptive message for your commit.

The fpg command will automatically stage all changes in the repository, create a new commit with the specified message, and push the changes to the remote repository.

## Example

Here's an example of how you can use fpg:

```bash
fpg "Added new feature"
```

This will stage all changes, create a new commit with the message "Added new feature", and push the changes to the remote repository.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
