const TumblrCloneDapp = artifacts.require("TumblrCloneDapp");
//const UBPP = artifacts.require("UBPP");

module.exports = function(deployer) {
  deployer.deploy(TumblrCloneDapp);
  //deployer.deploy(UBPP);
};
