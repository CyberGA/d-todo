// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Todo {

    event TodoAdded(string title, string desc);

    function addTodo(uint256 uid, string memory title, string memory desc) external {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(desc).length > 0, "Title cannot be empty");
        emit TodoAdded(title, desc);
    }

    function toggle(uint256 uid, bool done)  {
        
    } 

}