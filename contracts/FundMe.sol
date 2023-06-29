// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Convertor.sol";
import "hardhat/console.sol";

contract FundMe{

    using Convertor for uint256;

    address immutable OWNER;

    uint256 immutable MINIMUM_USD = 50;

    AggregatorV3Interface public PRICE_FEED;

    address[] public funders;

    mapping(address => uint256) public FunderToAmount;

    constructor(address _address){

        OWNER = msg.sender;

        PRICE_FEED = AggregatorV3Interface(_address);

    }

    function fund() public payable {
        revert("error");

        require(msg.value.getConversion(PRICE_FEED) >= MINIMUM_USD, "Price is too low");

        funders.push(msg.sender);

        FunderToAmount[msg.sender] = msg.value;

    }

    
    modifier onlyOwner {
        
        if(msg.sender != OWNER){
            revert("You are not the owner");
        }

        _;

    }

    function getValue () public view returns(uint256){
        return 1;
    }

}