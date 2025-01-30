## AWS (Amazon Web Service)

### Overview
AWS Cloud Infrastructure is a platform that provides computing resources over the internet. It's essentially renting virtual computers/servers that can be used without having to maintain them yourself.

EC2 - is simply a remote (virtual) machine.
ECS stands for Elastic Container Service - as per basic definition of computer cluster, 

ECS is basically a logical grouping of EC2 machines/instances. 

Technically speaking ECS is a mere configuration for an efficient use and management of your EC2 instance(s) resources i.e. storage, memory, CPU, etc.

### On Prem vs Cloud


### ECS (Elastic Container Service)
- Service to run and manage containers (Docker)
- Automates deploying and management of containers on a cluster of servers
- It helps run, scale and monitor container across multiple machines and handles load balancing, task placement, and resource allocation.
- Autoscaling handles variable volume that will automatically add or remove containers depending on set conditions

- Here’s a simple flow of how ECR and ECS fit together:
  1. You build your container image (e.g., a web app packaged in Docker).
  2. Push the container image to ECR: You upload that image to ECR, so it’s stored safely and can be accessed by ECS when you need to deploy it.
  3. ECS runs your containers: You configure ECS to run the container image stored in ECR. ECS pulls the image from ECR and runs it on your EC2 instances (or using Fargate, which abstracts away the servers for you).
  4. ECS takes care of scaling and monitoring: ECS ensures your containers are running correctly, scaling up or down based on traffic and handling things like load balancing and recovery in case a container fails.


### ECR (Elastic Container Repository)
- This is where the dockerfile of an application is stored and managed

### EC2 (Elastic Compute Cloud / Managed)
- Remote virtual machine
- Instance that can be set up in a cluster on that is managed by ECS
- Applications or websites can be run here

### Fargate (Serverless)
- Alternative to ECS
- Runs containers without managing the underlying EC2 instances. AWS will handle the infrastructure

### S3 Bucket (Simple Storage Service)
- An online hard drive that can store files, pictures, videos, backup, etc and they can be accessed from anywhere.

### RDS (Relational Database Service)
- A structured (SQL) DB that can be set up easily in the cloud