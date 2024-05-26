// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract CryptoFundProject {
    // Project details
    struct Project {
        string projectName;
        uint256 requestedDonation;
        string ownerName;
        string ownerSurname;
        string ownerMail;
        uint32 ownerPhoneNumber;
    }

    address payable public projectOwner;
    Project public project;
    mapping(address => uint256) public investors;
    address[] public investorsAddresses;
    uint256[] public donations;
    uint256 public totalDonation;

    modifier onlyProjectOwner() {
        require(
            msg.sender == projectOwner,
            "Only project owner can call this function"
        );
        _;
    }

    // Constructor to initialize the project
    constructor(
        address payable _wallet,
        string memory _name,
        string memory _surname,
        string memory _ownerMail,
        uint32 _phoneNumber,
        string memory _projectName,
        uint256 _requestedDonation
    ) {
        projectOwner = _wallet;
        project.ownerName = _name;
        project.ownerSurname = _surname;
        project.ownerMail = _ownerMail;
        project.ownerPhoneNumber = _phoneNumber;
        project.projectName = _projectName;
        project.requestedDonation = _requestedDonation;
    }

    // Function to fund the project
    function fund() public payable {
        require(msg.value > 0, "Donation amount must be greater than zero");

        if (investors[msg.sender] == 0) {
            investorsAddresses.push(msg.sender);
        }

        investors[msg.sender] += msg.value;
        donations.push(msg.value);
        totalDonation += msg.value;
    }

    // Function for the project owner to withdraw funds after the deadline
    function withdraw(uint256 _amount) public onlyProjectOwner returns (bool) {
        require(_amount <= totalDonation, "Not enough donation");
       

        totalDonation -= _amount;
        projectOwner.transfer(_amount);
        return true;
    }

    // Function to get project information
    function getProjectInfo()
        public
        view
        returns (
            Project memory,
            uint256,
            address[] memory,
            uint256[] memory
        )
    {
        return (project, totalDonation, investorsAddresses, donations);
    }

    function getProjectAddress() public view returns (address) {
        return address(this);
    }

    // Reject any direct transfers to the contract
    receive() external payable {
        revert();
    }

    fallback() external payable {
        revert();
    }
}
