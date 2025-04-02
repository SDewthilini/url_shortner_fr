provider "aws" {
  region = "us-east-1"
  access_key = var.AWS_ACCESS_KEY  # Optional: Only needed if not using env variables
  secret_key = var.AWS_SECRET_KEY  # Optional: Only needed if not using env variables
}

variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}

resource "aws_security_group" "my_security_group" {
  name        = "my-security-group"
  description = "Allow SSH and HTTP traffic"
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "my_ec2_instance" {
  ami           = "ami-072e42fd77921edac"
  instance_type = "t2.micro"
  key_name      = "isuru"
  security_groups = [aws_security_group.my_security_group.name]

  tags = {
    Name = "DevOps-EC2"
  }
}

output "ec2_public_ip" {
  value = aws_instance.my_ec2_instance.public_ip
}