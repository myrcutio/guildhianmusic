variable "api_domain_name" {
  type        = "string"
  description = "api backend domain"
}

variable "api_stage_name" {
  type        = "string"
  description = "api backend deployment stage"
}

variable "cloud_dns_zone" {
  type        = "string"
  description = "route53 zone id"
}

variable "domain" {
  type        = "string"
  description = "domain name"
}

variable "env" {
  type        = "string"
  description = "stage name"
}

variable "s3_role_arn" {
  type        = "string"
  description = "role arn to assume when uploading files to s3"
}
