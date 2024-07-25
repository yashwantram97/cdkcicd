#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkcicdStack } from "../lib/cdkcicd-stack";

const app = new cdk.App();
new CdkcicdStack(app, "CdkcicdStack", {});
