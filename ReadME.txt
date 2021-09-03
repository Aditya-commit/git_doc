This is the readme file of the git tutorial
This is the second commit.
This must be the third commit
On editing with vim the line endings get different And I don't know why is this is happening


This is the line endings in the file
Now this is done using cmd.

Using diff now now added little more changes

direct commit command = git command -a -m 'direct git command'

Now I will this file to git ignore

Check whether this will track the changes made in this file or not.

Now I removed it from tracking and it will not track it again

_______________________________________________________________________________________________________________________________________

If your file is not in tracking mode and it is not even present in .gitignore file then the git status will give that the file is 
not getting tracked

If your file is in tracking mode and then you add the file in the .gitignore file then it will not work as you have to explicitly 
tell that the file should not be tracked using git rm --cached <filename> command
_______________________________________________________________________________________________________________________________________

To reverse the change to its previous commit you can use git checkout -- <filename> command . It is equal to undo.But it does not work if the file has been staged.
