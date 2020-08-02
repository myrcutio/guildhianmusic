DIST := ./dist
TF := cd ./terraform/ && terraform
APP := ./app

all: $(APP)/build terraform/.terraform
	-

tests: $(APP)/build $(APP)/test

$(APP)/node_modules:
	cd $(APP) && npm install

$(APP)/build: $(APP)/node_modules
	cd $(APP) && npm run build

.PHONY: $(APP)/test
$(APP)/test: $(APP)/node_modules
	cd $(APP) && npm test

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

terraform/.terraform:
	$(TF) init
