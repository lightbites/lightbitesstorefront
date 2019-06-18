module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    address3: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  });
  return Customer;
};
