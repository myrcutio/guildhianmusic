terraform {
  backend "s3" {
    bucket         = "kharibdis-tf-state"
    key            = "kharibdis/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    acl            = "bucket-owner-full-control"
    dynamodb_table = "kharibdis-tf-lock"
    role_arn       = "arn:aws:iam::389897823988:role/KharibdisDeployRole"
  }
}

provider "aws" {
  region = var.target_region

  assume_role {
    role_arn = var.target_role_arn
  }
}

provider "aws" {
  alias  = "route53"
  region = var.target_region // note that this won't actually be used for route53

  assume_role {
    role_arn = var.dns_role_arn
  }
}

module "frontend" {
  source = "./module/single-page-app"
  env = terraform.workspace
  domain = var.domain
  cloud_dns_zone = var.dns_zone_id
  api_domain_name = "api.benny.codes"
  api_stage_name = "api"
  s3_role_arn = var.target_role_arn

  providers = {
    aws.dns = "aws.route53"
  }
}
