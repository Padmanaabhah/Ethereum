pragma solidity ^0.5.0;

contract Inbox{
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    function SetMessage(string memory messageTobeSet) public {
        message = messageTobeSet;
    }

}
