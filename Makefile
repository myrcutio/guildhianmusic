DIST := ./dist
TF := cd ./terraform/ && terraform
APP := ./app

all: $(APP)/build terraform/.terraform
	-

$(APP)/node_modules:
	cd $(APP) && npm install

$(APP)/build: $(APP)/node_modules
	cd $(APP) && npm run build

.PHONY: clean
clean: clean-build clean-tf

.PHONY: clean-build
clean-build:
	rm -rf $(APP)/build

.PHONY: clean-tf
clean-tf:
	rm -rf terraform/.terraform

.PHONY: deploy-%
deploy-%: all
	$(TF) workspace select $*
	$(TF) apply

.PHONY: tf-workspace-%
tf-workspace-%: terraform/.terraform
	$(TF) workspace select $* || $(TF) workspace new $*

.PHONY: tf-check
tf-check: terraform/.terraform
	$(TF) fmt -check

.PHONY: tf-plan-%
tf-plan-%: terraform/.terraform tf-workspace-%
	$(TF) plan

terraform/.terraform:
	$(TF) init
