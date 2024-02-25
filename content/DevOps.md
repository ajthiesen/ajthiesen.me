DevOps

https://www.youtube.com/watch?v=l5k1ai_GBDE [Devops Tuts]
https://www.youtube.com/watch?v=l5k1ai_GBDE [TF in 15 min]

https://www.hashicorp.com/blog/infrastructure-as-code-in-a-private-or-public-cloud

Commonly, these are referred to as Day 0 and Day 1 activities. “Day 0” code provisions and configures your initial infrastructure.
If your infrastructure never changes after the initial build (no OS updates, no patches, no app configurations, etc.) then you may not need tools that support subsequent updates, changes, and expansions. “Day 1” refers to OS and application configurations you apply after you’ve initially built your infrastructure.

Since code is checked into version control systems such as #GitHub, GitLab, BitBucket, etc., it is possible to review how the infrastructure evolves over time. The idempotent characteristic provided by IaC tools ensures that, even if the same code is applied multiple times, the result remains the same.

https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/aws-get-started

#IaC allows you to build, change, and manage your infrastructure in a safe, consistent, and repeatable way by defining resource configurations that you can version, reuse, and share.

Terraform is HashiCorp’s infrastructure as code tool. It lets you define resources and infrastructure in human-readable, declarative configuration files, and manages your infrastructure’s lifecycle. Using Terraform has several advantages over manually managing your infrastructure:
	•			Terraform can manage infrastructure on multiple cloud platforms.
	•			The human-readable configuration language helps you write infrastructure code quickly.
	•			Terraform's state allows you to track resource changes throughout your deployments.
	•			You can commit your configurations to version control to safely collaborate on infrastructure.

—
To deploy infrastructure with Terraform:
	•			Scope - Identify the infrastructure for your project.
	•			Author - Write the configuration for your infrastructure.
	•			Initialize - Install the plugins #Terraform needs to manage the infrastructure.
	•			Plan - Preview the changes Terraform will make to match your configuration.
	•			Apply - Make the planned changes.
—
Each Terraform configuration must be in its own working directory. Create a directory for your configuration.
—
#dev #devops



