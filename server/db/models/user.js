const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, Request, Comment, Product, Rating, Subscription }) {
      this.belongsTo(Role, { foreignKey: 'roleid' });

      this.hasMany(Request, { foreignKey: 'partnerid' });

      this.hasMany(Comment, { foreignKey: 'authorid' });
      this.hasMany(Comment, { foreignKey: 'userid' });

      this.hasMany(Rating, { foreignKey: 'clientid' });
      this.hasMany(Rating, { foreignKey: 'ownerid' });

      this.hasMany(Subscription, { foreignKey: 'subscriberid' });
      this.hasMany(Subscription, { foreignKey: 'companyid' });

      this.belongsToMany(Request, { through: 'Favorite', foreignKey: 'userid' });

      this.belongsToMany(Product, { through: 'Reserve', foreignKey: 'userid' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      hashpass: DataTypes.TEXT,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      secondName: DataTypes.STRING,
      phone: DataTypes.STRING,
      pathPhoto: DataTypes.STRING,
      alternativePhone: DataTypes.STRING,
      companyName: DataTypes.STRING,
      titleLogoPath: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
      roleid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
