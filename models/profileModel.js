module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'profiles',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  
    Profile.associate = (models) => {
      Profile.hasMany(models.WaterIntake, {
        foreignKey: 'profileId',
        as: 'waterIntakes'
      });
    };
  
    return Profile;
  };
  