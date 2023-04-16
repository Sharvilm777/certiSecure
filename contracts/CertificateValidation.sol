// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title CertificateValidation
 * @dev A smart contract for validating certificates using SHA256 hashes.
 * @custom:dev-run-script deploy
 */
contract CertificateValidation {
    event CertificateAdded(bytes32 hash);
    bytes32[] certificates;
    mapping (bytes32 => mapping(address => bool)) private certificateHashes;

    function addCertificate(bytes32 hash) public payable {
   if (certificateHashes[hash][msg.sender]) {
        revert("Certificate hash already submitted ");
    }
    for (uint i = 0; i < certificates.length; i++) {
        if (certificates[i] == hash) {
            revert("Certificate hash already exists");
        }
    }
        certificateHashes[hash][msg.sender] = true;
        certificates.push(hash);
        emit CertificateAdded(hash);
    }
   
    function verifyCertificate(bytes32 hash) public view returns (bool) {
        for (uint i = 0; i < certificates.length; i++) {
            if (certificates[i] == hash) {
                return true;
            }
        }
        return false;
    }
}
