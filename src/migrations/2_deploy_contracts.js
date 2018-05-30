var Members = artifacts.require("./Members.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  
  let membersContract, votingContract;
  let address1 = "0x57f48D11f41B62dd130a4dB68372e5a36e7cf501";
  let address2 = "0xFe3328D7206f0B0137CFbE707cc33Ccb8663C79D";
  let address3 = "0x9D1c04aF927224E736848374963E0b5AFb9FFB02";
  
  deployer.deploy(Members, [address1, address2, address3]).then(() => {
    return Members.deployed().then(members => {
      membersContract = members;
      return deployer.deploy(Voting, members.address).then(() => {
        return Voting.deployed().then(voting => {
          votingContract = voting;
          membersContract.setVotingContractAddress(votingContract.address);
        });
      });
    });
  });
}
