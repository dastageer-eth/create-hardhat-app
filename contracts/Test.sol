//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./utils/Mappings.sol";
import "./utils/Structs.sol";
import "./utils/Errors.sol";

contract Test{

    uint256 public number;

    function setNumber(uint256 number_) public{
        number = number_;
    }
}