// SPDX-License-Identifier: MIT
const CertificateValidation = artifacts.require("CertificateValidation");

module.exports = function (deployer) {
  deployer.deploy(CertificateValidation);
};
