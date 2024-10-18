// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/utils/Create2.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import "./SimpleAccount.sol";

/**
 * A sample factory contract for SimpleAccount
 * A UserOperations "initCode" holds the address of the factory, and a method call (to createAccount, in this sample factory).
 * The factory's createAccount returns the target account address even if it is already installed.
 * This way, the entryPoint.getSenderAddress() can be called either before or after the account is created.
 */
contract SimpleAccountFactory {
    SimpleAccount public immutable accountImplementation;

    constructor(IEntryPoint _entryPoint, UltraVerifier _ultraVerifier) {
        accountImplementation = new SimpleAccount(_entryPoint, _ultraVerifier);
    }

    /**
     * create an account, and return its address.
     * returns the address even if the account is already deployed.
     * Note that during UserOperation execution, this method is called only if the account is not deployed.
     * This method returns an existing account address so that entryPoint.getSenderAddress() would work even after account creation
     */
    function createAccount(
        address owner,
        bytes32 accountId,
        string calldata jwtAud,
        uint256[18] calldata publicKeyLimbs,
        uint256[18] calldata publicKeyRedcLimbs
    ) public returns (SimpleAccount ret) {
        // TODO: create2 address should depend only on accountId and jwt.aud (and maybe "jwt.iss"?)
        ret = SimpleAccount(
            payable(
                new ERC1967Proxy{salt: bytes32(0)}(
                    address(accountImplementation),
                    abi.encodeCall(
                        SimpleAccount.initialize,
                        (
                            owner,
                            accountId,
                            jwtAud,
                            publicKeyLimbs,
                            publicKeyRedcLimbs
                        )
                    )
                )
            )
        );
    }

    /**
     * calculate the counterfactual address of this account as it would be returned by createAccount()
     */
    function getAddress(
        address owner,
        bytes32 accountId,
        string calldata jwtAud,
        uint256[18] calldata publicKeyLimbs,
        uint256[18] calldata publicKeyRedcLimbs
    ) public view returns (address) {
        return
            Create2.computeAddress(
                bytes32(0),
                keccak256(
                    abi.encodePacked(
                        type(ERC1967Proxy).creationCode,
                        abi.encode(
                            address(accountImplementation),
                            abi.encodeCall(
                                SimpleAccount.initialize,
                                (
                                    owner,
                                    accountId,
                                    jwtAud,
                                    publicKeyLimbs,
                                    publicKeyRedcLimbs
                                )
                            )
                        )
                    )
                )
            );
    }
}
