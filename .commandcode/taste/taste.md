# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

- Expects the agent to handle git operations (commit and push) so that local changes show up in the remote repo — e.g., when the user can't see an updated file on GitHub, the fix is to commit and push. Standard workflow: stage all changes (`git add -A`), commit with a descriptive message, and push to the remote. Confidence: 0.95
- Keeps study/learning notes (e.g., IQ_notes) as markdown files that mix explanatory text with code — headings, tables, and fenced code blocks in one `.md` file, so notes are readable and the code is shown as runnable examples; explicitly directs that new notes be saved as `.md` files inside the `IQ_Notes` folder. Confidence: 0.9
- Wants study/learning notes (IQ_Notes) to follow a specific visual style: a breakdown table, an example walkthrough using a simple code/file example, a pipeline diagram, and a TL;DR summary. Confidence: 0.9
- Communicates tersely and action-first (e.g., "go go go") — expects the agent to infer the task from the open file and repo state and proceed autonomously without asking clarifying questions or lengthy preamble. Confidence: 0.6

