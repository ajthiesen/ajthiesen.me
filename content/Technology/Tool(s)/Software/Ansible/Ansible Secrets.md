It's a best practice to never commit sensitive data, such as Ansible secrets, in plain text format in a Git repository. Instead, you should encrypt this data and store it securely. Ansible provides a feature called Ansible Vault, which allows you to encrypt sensitive data using a password or a key, and decrypt it when needed.

To ensure that an Ansible secrets.yml file is never committed unencrypted, you can use a Git hook. A Git hook is a script that Git runs before or after certain Git events, such as committing or pushing changes to a repository.

Here are the steps you can follow:

1.  Create a pre-commit hook script that checks if the Ansible secrets.yml file is encrypted. You can use the Ansible Vault command to do this. For example:
``` bash 
#!/bin/sh
# Check if secrets.yml is encrypted
if ! ansible-vault view --vault-password-file=.vault_pass secrets.yml > /dev/null; then
  echo "secrets.yml is not encrypted. Aborting commit."
  exit 1
fi

```
    
This script checks if the secrets.yml file is encrypted using the Ansible Vault command. If the file is not encrypted, it aborts the commit and displays an error message.
    
2.  Save the script as pre-commit in the .git/hooks directory of your Git repository.
    
3.  Make the script executable by running the following command:
    
``` bash
chmod +x .git/hooks/pre-commit
```
     
This allows Git to execute the script.
    
4.  Test the script by trying to commit an unencrypted secrets.yml file. The commit should be rejected with an error message.
    
Note that this only enforces the encryption of the `secrets.yml` file **locally** on the machine where the pre-commit hook is installed. To enforce this server-side, you can use GitLab hooks, The pre-receive hook would be a good option to check the contents of the commit before accepting it.

#Ansible #security 