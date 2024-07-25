#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkCicdStack } from "../lib/cdkcicd-stack";

const app = new cdk.App();
new CdkCicdStack(app, "CdkcicdStack", {});
// app.synth();
