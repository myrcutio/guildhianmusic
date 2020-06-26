variable "dns_account" {
  type        = string
  description = "aws account that contains the route53 zone"
}

variable "dns_role_arn" {
  type        = string
  description = "role to assume when performing dns changes"
}

variable "target_account" {
  type        = string
  description = "aws to deploy into"
}

variable "target_region" {
  type        = string
  description = "region to deploy into"
}

variable "target_role_arn" {
  type        = string
  description = "role to assume when creating resources"
}

variable "dns_zone_id" {
  type        = string
  description = "route53 zone for the dns"
}

variable "domain" {
  type        = string
  description = "domain for frontend"
}

