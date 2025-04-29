// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract Invoice {
    struct InvoiceData {
        address payer;
        address payee;
        address token;
        uint256 amount;
        bool paid;
    }

    mapping(uint256 => InvoiceData) public invoices;
    uint256 public nextId;

    function createInvoice(address _payer, address _payee, address _token, uint256 _amount) external returns (uint256) {
        invoices[nextId] = InvoiceData({
            payer: _payer,
            payee: _payee,
            token: _token,
            amount: _amount,
            paid: false
        });
        nextId++;
        return nextId - 1;
    }

    function payInvoice(uint256 _id) external {
        InvoiceData storage inv = invoices[_id];
        require(!inv.paid, "Already paid");
        require(msg.sender == inv.payer, "Only payer can pay");
        
        IERC20(inv.token).transferFrom(msg.sender, inv.payee, inv.amount);
        inv.paid = true;
    }
}